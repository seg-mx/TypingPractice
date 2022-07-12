let lesson =
    '$x=(!a&!b) $x=(!a&!b) $x=(!a&!b) $x=(!a&!b)\n' +
    '#APP# #APP# #APP# #APP#\n' +
    '!(&a&b&c)->[#a #b #c] !(&a&b&c)->[#a #b #c] !(&a&b&c)->[#a #b #c] !(&a&b&c)->[#a #b #c]\n' +
    '{#+#} {#+#} {#+#} {#+#} $s=&#x $s=&#x $s=&#x $s=&#x\n' +
    '$x=[{a++},{b++},{c++}] $x=[{a++},{b++},{c++}] $x=[{a++},{b++},{c++}] $x=[{a++},{b++},{c++}]\n' +
    '####COMMENT ####COMMENT ####COMMENT ####COMMENT\n' +
    '#a->{x!==y} #a->{x!==y} #a->{x!==y} #a->{x!==y} #x#[!a!b!c] #x#[!a!b!c] #x#[!a!b!c] #x#[!a!b!c]'
;

module.exports = lesson;
