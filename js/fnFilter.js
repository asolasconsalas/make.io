var arrayInitial = [3, 5];
//var arrayInitial = [3, 12, 45, 7];

function filter(_arrayInitial) {
    var arrayResult = [];
    arrayInitial.forEach(element => {
        if (element > 10) {
            arrayResult.push(element);
        }
    });
    console.log('arrayResult:', arrayResult);
}

filter(arrayInitial);
