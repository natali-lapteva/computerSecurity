var alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';

function encript () {
    var key = parseInt($('#key').val(), 10);
    console.log(key);
    var inText = $('#inText').val().toUpperCase();
    console.log(inText);
    var outText = [];
    for (var i = 0; i < inText.length; i++) {
        var index = alphabet.indexOf(inText[i]);
        if (index >= 0 ) {
            outText.push(alphabet[index + key]);
        }
    };
    console.log(outText.join(''));
}