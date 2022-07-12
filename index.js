const fs = require('fs');
const readline = require('readline');
const Level = require('./src/level.js');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let lessonNumber = 1;

if (fs.existsSync('./data')) {
    lessonNumber = parseInt(fs.readFileSync('./data', 'utf-8'));
}

let path = `./lessons/${lessonNumber}.js`;

if (!fs.existsSync(path)) {
    console.log("No lessons left!");
    
    process.exit();
}

const level = new Level(require(path));
level.print();

process.stdin.on('keypress', (str, key) => {
    if (key.sequence == '\x03') {
        process.exit();
    }

    if ((!str || !str.trim()) && str != '\r' && str != ' ') {
        return;
    }

    if (level.press(key)) {
        fs.writeFileSync('./data', ''+(lessonNumber+1));

        process.exit();
    }
});
