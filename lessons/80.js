let lesson =
    '[{()}] [{()}] [{()}] [{()}] [=*=] [=*=] [=*=] [=*=]\n' +
    's(var[i++]){} s(var[i++]){} s(var[i++]){} s(var[i++]){}\n' +
    'a[i] += {[x++]}; a[i] += {[x++]}; a[i] += {[x++]}; a[i] += {[x++]};\n' +
    'call((a*b++)); call((a*b++)); call((a*b++)); call((a*b++));\n' +
    'd:{var[a+b](z++)} d:{var[a+b](z++)} d:{var[a+b](z++)} d:{var[a+b](z++)}'
;

module.exports = lesson;
