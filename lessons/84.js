let lesson =
    '!a=b++ !a=b++ !a=b++ !a=b++\n' +
    '*x={call(&a &b)}()++ *x={call(&a &b)}()++ *x={call(&a &b)}()++ *x={call(&a &b)}()++\n' +
    '&z*=[!a !b !c] &z*=[!a !b !c] &z*=[!a !b !c] &z*=[!a !b !c]\n' +
    'func(&x, &y){&x!=&y} func(&x, &y){&x!=&y} func(&x, &y){&x!=&y} func(&x, &y){&x!=&y}\n' +
    '{a,b}->{[a*b]} != &z {a,b}->{[a*b]} != &z {a,b}->{[a*b]} != &z {a,b}->{[a*b]} != &z\n' +
    '!((var++)*(x[z+y]))->{t} !((var++)*(x[z+y]))->{t} !((var++)*(x[z+y]))->{t} !((var++)*(x[z+y]))->{t}'
;

module.exports = lesson;
