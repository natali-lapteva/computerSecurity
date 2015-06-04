var ruAlphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
var enAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function encrypt (sign) {
    $('.msgToUserVvediteChislo').css('visibility', 'hidden');
    var key = $('#key').val();
    if (!/^-?\d+$/.test(key)) {
        $('.msgToUserVvediteChislo').css('visibility', 'visible');
        return;
    }
    key = parseInt(key, 10) * sign;
    var inText = $('#inText').val().toUpperCase().replace(/Ё/g, 'Е');
    var outText = [];
    var spaceCounter = 0;

    function addLetterToOutText (alphabet, letter) {
        var index = alphabet.indexOf(letter);
        if (index >= 0 ) {
            index += key;
            while (index < 0) {
                index += alphabet.length;
            }
            outText.push(alphabet[index % alphabet.length]);
            spaceCounter++;
            if (spaceCounter % 6 === 0) {
                outText.push(' ');
            }
        }
    }

    for (var i = 0; i < inText.length; i++) {
       addLetterToOutText(ruAlphabet, inText[i]);
       addLetterToOutText(enAlphabet, inText[i]);
    }
    $('#outputText').val(outText.join(''));
}