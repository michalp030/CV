const text = "Curriculum  Vitae  Michał  Puścizna";
let ifStarted = false;

        function typeWriter(text, index = 0) {

            if (index < text.length) {
                document.getElementById('cv').innerText += text[index];
                setTimeout(() => typeWriter(text, index + 1), 75); }
        }

        function startTyping() {
            if (ifStarted == true) {
                    return; }
            else {
                    ifStarted = true; }
            document.getElementById('cv').innerText = ' ';
            typeWriter(text);
        }

        
        document.addEventListener('DOMContentLoaded', function() {
            var startDiv = document.getElementById('startDiv');
            startDiv.addEventListener('click', function() {
                startDiv.classList.add('startDiv-out');
                setTimeout(function() {
                    startDiv.style.display = 'none';
                }, 1000);
            });
        });
        