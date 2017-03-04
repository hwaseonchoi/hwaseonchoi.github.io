$(function(){

    // On appelle le fichier XML via ajax
    $.ajax({
        url: "assets/infos.xml",
        method: "get",
        dataType: 'xml',

        // Lorsque le fichier XML est bien récupéré
        success: function (data) {

            // Parcours des items contenus dans le xml data
            $(data).find('item').each(function(index, item){
                // Propriétés de l'item
                var titre = $(item).find('titre').text();
                var content = $(item).find('content').text();
                var mainColor = $(item).attr('mainColor');
                var sndColor = $(item).attr('sndColor');

                // Fabrication de la div de l'item
                var div = $("<div id=item-"+index+"></div>");

                // CSS de la div crée avec la boucle each
                div.css({
                    'background-color':"#"+mainColor,
                    'width':'220px',
                    'height':'150px',
                    'padding': '10px',
                    'margin':'20px',
                    'display':'inline-block',
                    'float': 'left',
                    'text-align': 'center',
                });

                // Si le content est vide, on n'affiche pas le text 'Content:' devant le contenu
                if (content != "") {
                    var titreContent = 'Content : ';
                } else {
                    titreContent = '';
                }

                div.html("<h3>Titre : "+titre+"</h3>" +' <p>'+titreContent+content+'</p> ');

                // Ajout de la div dans la div principale channels
                $('#channels').append(div);

                // Changement de couleur lorsque la souris est sur la div
                $(div).hover(
                  function() {
                    $( this ).css('background-color','#'+sndColor);
                  }, function() {
                    $( this ).css('background-color','#'+mainColor);
                  }
                );

            })
        },

        // S'il y a une erreur d'ajax...
        error: function(err) {
            console.err('Erreur AJAX:', err);
        }
    });

})
