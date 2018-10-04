var str = 'Hello';
var char = 'l';

function count(_str, _char) {
    var res = 0;
    var initial = 0;
    while ((initial = _str.indexOf(_char, initial) + 1) > 0) {
        res++;
    }
    console.log('res:', res);
}

count(str, char);
