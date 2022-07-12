let lesson =
    'ls|grep -i -E "fo?o@bar\\.com" ls|grep -i -E "fo?o@bar\\.com" ls|grep -i -E "fo?o@bar\\.com"\n' +
    '@t->val - @a|@b ^ @x|@y; @t->val - @a|@b ^ @x|@y; @t->val - @a|@b ^ @x|@y; @t->val - @a|@b ^ @x|@y;\n' +
    '@"\\\"val\\\" - myVal" @"\\\"val\\\" - myVal" @"\\\"val\\\" - myVal" @"\\\"val\\\" - myVal"\n' +
    'cat /etc/hosts|grep -i domain cat /etc/hosts|grep -i domain cat /etc/hosts|grep -i domain\n' +
    'a/b < x ? "one":"two">file.txt a/b < x ? "one":"two">file.txt a/b < x ? "one":"two">file.txt'
;

module.exports = lesson;
