var alphabet = 'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
var russianFrequency = {
    А: 0.062,
    Б: 0.014,
    В: 0.038,
    Г: 0.013,
    Д: 0.025,
    Е: 0.072,
    Ж: 0.007,
    З: 0.016,
    И: 0.062,
    Й: 0.010,
    К: 0.028,
    Л: 0.035,
    М: 0.026,
    Н: 0.053,
    О: 0.09,
    П: 0.023,
    Р: 0.04,
    С: 0.045,
    Т: 0.053,
    У: 0.021,
    Ф: 0.002,
    Х: 0.009,
    Ц: 0.003,
    Ч: 0.012,
    Ш: 0.006,
    Щ: 0.003,
    Ъ: 0.014,
    Ы: 0.016,
    Ь: 0.014,
    Э: 0.003,
    Ю: 0.006,
    Я: 0.018
};
function decrypt () {
    var cipherText = $('#inText').val().replace(/\s/g, '').toUpperCase();
    var frequency = {};
    for (var i = 0; i < alphabet.length; i++) {
        frequency[alphabet[i]] = 0;
    }
    // составление частотного словаря
    for (var i = 0; i < cipherText.length; i++) {
        frequency[cipherText[i]]++;
    }
    for (var i = 0; i < alphabet.length; i++) {
        frequency[alphabet[i]] = frequency[alphabet[i]] / cipherText.length;
    }
    var minSum = Infinity;
    var key;
    for (var i = 0; i < alphabet.length; i++) {
        var sum = 0;
        for (var j = 0; j < alphabet.length; j++) {
            sum = sum + Math.abs(frequency[alphabet[(j + i) % alphabet.length]] - russianFrequency[alphabet[j]]);
        }
        if (sum < minSum) {
            minSum = sum;
            key = i;
        }
    }
    var outText = [];
    var spaceCounter = 0;
    for (var i = 0; i < cipherText.length; i++) {
        var index = alphabet.indexOf(cipherText[i]);
        if (index >= 0 ) {
            outText.push(alphabet[(index - key + alphabet.length) % alphabet.length]);
            spaceCounter++;
            if (spaceCounter % 6 === 0) {
                outText.push(' ');
            }
        }
    }
    $('#outputText').val(outText.join(''));
    $('#key').val(key);
}