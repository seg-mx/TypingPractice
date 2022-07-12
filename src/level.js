const {black, green, reset, gray, bgRed, bgMagenta, bgGreen} = require('./colors.js');

function clear() {
    console.log('\033[2J');
    console.log('\033[H');
}

class Level {
    constructor(lesson) {
        this.lesson = lesson;
        this.input = '';
    }

    press(key) {
        switch (key.name) {
        case "backspace":
            this.input = this.input.substr(0, this.input.length-1);
            break;
        case "return":
            this.input += '\n';
            break;
        default:
            this.input += key.sequence;
        }

        this.print();

        if (this.lesson.replaceAll('µ', ' ') == this.input) {
            console.log(green + "Lesson completed!\n\nRun again for next lesson..." + reset);

            return true;
        }
        
        return false;
    }

    print() {
        clear();

        let text = '';

        for (let i in this.input) {
            let charInput = this.input.charAt(i);
            let charText = this.lesson.charAt(i);

            let breakTrigger = charText == 'µ';

            if (breakTrigger) {
                charText = ' ';
            }

            if (charInput == charText) {
                if (charInput == '\n') {
                    charInput = '←\n';
                }
                if (breakTrigger) {
                    charInput = ' \n';
                }
                text += bgGreen + black + charInput + reset;
            } else {
                if (charText == '\n') {
                    charText = '←\n';
                }
                if (breakTrigger) {
                    charText = ' \n';
                }
                text += bgRed + charText + reset;
            }
        }

        let remaining = this.lesson.slice(this.input.length).replaceAll('\n', '←\n').replaceAll('µ', ' \n');
        text += bgMagenta + black + remaining + reset;
        
        console.log(text);
    }
}

module.exports = Level;
