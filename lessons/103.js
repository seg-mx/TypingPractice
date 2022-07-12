let lesson =
    '!(x%y==z) !(x%y==z) !(x%y==z) !(x%y==z)\n' +
    '2t/3k->8m 2t/3k->8m 2t/3k->8m 2t/3k->8m\n' +
    '{$1->$2}==8 {$1->$2}==8 {$1->$2}==8 {$1->$2}==8\n' +
    '%[0,1,2,3,4,5,6,7,8,9]% %[0,1,2,3,4,5,6,7,8,9]% %[0,1,2,3,4,5,6,7,8,9]% %[0,1,2,3,4,5,6,7,8,9]%\n' +
    '/is.*near[y,Y]{8}ou/g /is.*near[y,Y]{8}ou/g /is.*near[y,Y]{8}ou/g /is.*near[y,Y]{8}ou/g\n' +
    '&m->ping(z%8) &m->ping(z%8) &m->ping(z%8) &m->ping(z%8)'
;

module.exports = lesson;
