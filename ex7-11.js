function uru() 
{
    var X = Number(document.getElementById('seireki').value);
    if ((X % 4 == 0 && X % 100 != 0) || (X % 400 == 0)) {
        alert('西暦' + X + '年は閏年');
    } else {
        alert('西暦' + X + '年は平年');
    }
}

