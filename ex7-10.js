function BMI() 
{
    var x = Number(document.getElementById('weight').value);
    var y = Number(document.getElementById('feet').value);
    var z = Number(x / (y * y));
    if (z <= 18.5) {
        alert(z + 'は低体重');
    } else if (z < 25) {
        alert(z + 'は普通');
    } else {
        alert(z + 'は肥満');
    }
}
