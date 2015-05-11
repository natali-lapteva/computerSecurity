var alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

function encript () {
    var key = parseInt($('#key').val(), 10);
        if (isNaN(key)) {
            $('.msgToUserVvediteChislo').css('visibility', 'visible');
        }
    console.log(key);
    var inText = $('#inText').val().toUpperCase().replace(/Ё/g, 'Е');
    console.log(inText);
    var outText = [];
    var spaceCounter = 0;
    for (var i = 0; i < inText.length; i++) {
        var index = alphabet.indexOf(inText[i]);
        if (index >= 0 ) {
            outText.push(alphabet[(index + key + alphabet.length) % alphabet.length]);
            spaceCounter++;
            if (spaceCounter % 6 === 0) {
                outText.push(' ');
            }
        }
    };
    $('#outputText').val(outText.join(''));
    console.log(outText.join(''));
}