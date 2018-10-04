var cateto1 = 10;
var cateto2 = 13;

function hypotenuse(_cateto1, _cateto2) {
    var result = 0;
    result = Math.sqrt( Math.pow(_cateto1, 2) + Math.pow(_cateto2, 2) );
    console.log('result:', result);
}

hypotenuse(cateto1, cateto2);
