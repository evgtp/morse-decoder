const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let zeroCount = (expr.length % 10);
    if (zeroCount !== 0) {
        expr = '0'.repeat(zeroCount) + expr;
    }
    let result = ''
    let norm = expr.match(/.{1,10}/g);
    norm.forEach(value => {
        if (value === '**********') {
            result += ' '
            return
        }
        let pairs = value.match(/.{1,2}/g);
        let letter = '';
        pairs.forEach(pair => {
            if (pair !== '00') {
                if (pair === '10') {
                    letter += '.';
                } else if (pair === '11') {
                    letter += '-';
                }
            }
        })
        let symbol = MORSE_TABLE[letter]
        result += symbol
    });
    return result
}

module.exports = {
    decode
}