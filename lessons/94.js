let lesson =
    '$x23-$x01=(!a-!b) $x23-$x01=(!a-!b) $x23-$x01=(!a-!b) $x23-$x01=(!a-!b)\n' +
    '[0,1,2,3]*=9 [0,1,2,3]*=9 [0,1,2,3]*=9 [0,1,2,3]*=9\n' +
    '{--i+=0} {--i+=0} {--i+=0} {--i+=0} (&y-&z)*=[3] (&y-&z)*=[3] (&y-&z)*=[3] (&y-&z)*=[3]\n' +
    '3+2=(2*2)+1 3+2=(2*2)+1 3+2=(2*2)+1 3+2=(2*2)+1\n' +
    '#2#->{3} #2#->{3} #2#->{3} #2#->{3}\n' +
    '[{&x->&y},{&z->&f}]->@var [{&x->&y},{&z->&f}]->@var [{&x->&y},{&z->&f}]->@var [{&x->&y},{&z->&f}]->@var'
;

module.exports = lesson;