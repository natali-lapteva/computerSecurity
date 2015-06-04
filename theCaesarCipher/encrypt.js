var alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

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
    for (var i = 0; i < inText.length; i++) {
        var index = alphabet.indexOf(inText[i]);
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
    $('#outputText').val(outText.join(''));
}