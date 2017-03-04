window.onload = function() {

    function init() {
        document.getElementById('submit-palindrome').addEventListener('click', function(event){
            // Fonction par défaut de submit desactivée
            event.preventDefault();

            // Initialise le paramètre de la fonction
            var text = document.getElementById('palindrome').value;

            // Préparation de la réponse en fonction des résultats
            if (isPalindrome(text) == true) {
                document.getElementById('results-palindrome').innerHTML = 'Oui';
                document.getElementById('results-palindrome').style.color = "Green"
            } else {
                document.getElementById('results-palindrome').innerHTML = 'Non';
                document.getElementById('results-palindrome').style.color = "Red";
            };

        });

        document.getElementById('submit-anagram').addEventListener('click', function(event){
            // Fonction par défaut de submit desactivée
            event.preventDefault();

            // Initialise le paramètre de la fonction
            var text1 = document.getElementById('input-anagram1').value;
            var text2 = document.getElementById('input-anagram2').value;

            // Préparation de la réponse en fonction des résultats
            if (isAnagram(text1, text2) == true) {
                document.getElementById('results-anagram').innerHTML = 'Oui';
                document.getElementById('results-anagram').classList.add('true');
            } else {
                document.getElementById('results-anagram').innerHTML = 'Non';
                document.getElementById('results-anagram').classList.add('false');
            };

        });
    };

    // Fonction qui vérifie si le text entré est palindrome ou pas
    function isPalindrome(text){

        if (text.length<2){
            // si la longueur de text est inférieur à 2, c'est toujours palindrome
            return true;
        } else if (text.charAt(0) != text.charAt(text.length-1)) {
            // si la première lettre est différente à la dernière lettre, c'est toujours faux
            return false;
        } else {
            // Une fois vérifée la première lettre et la dernière lettre,
            // on passe à la vérification de la deuxiemèe lettre et avant la dernière lettre et ainsi de suite
            return isPalindrome(text.substr(1, text.length - 2));
        }

    };

    // Fonction qui vérifie si les deux texts entrés sont anagrammes ou pas
    function isAnagram(text1, text2){

        var text1 = text1.toLowerCase();
        var text2 = text2.toLowerCase();

        if (text1.length != text2.length){
            return false;
        } else if (text1 === text2){
            return true;
        }

        var text1ToVerify = text1.split("").sort().join("");
        var text2ToVerify = text2.split("").sort().join("");

        if(text1ToVerify == text2ToVerify) {
            return true;
        }

    };



    init();
};
