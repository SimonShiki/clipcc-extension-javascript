const ClipCC = require('clipcc-extension');

class JavaScriptExtension extends ClipCC.Extension {
    init() {
        ClipCC.API.addCategory({
            categoryId: 'org.clipteam.extension.javascript.category',
            messageId: 'org.clipteam.extension.javascript.category.name',
            color: '#9900cc'
        });
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.run',
            type: ClipCC.Type.BlockType.REPORTER,
            messageId: 'org.clipteam.extension.javascript.run',
            categoryId: 'org.clipteam.extension.javascript.category',
            argument: {
                CODE: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'alert("ClipCC No.1！")'
                }
            },
            function: args => this.JSrun(args.CODE)
        });
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.alert',
            type: ClipCC.Type.BlockType.COMMAND,
            messageId: 'org.clipteam.extension.javascript.alert',
            categoryId: 'org.clipteam.extension.javascript.category',
            argument: {
                MESSAGE: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'AlexCui is cute!'
                }
            },
            function: args => this.JSalert(args.MESSAGE)
        });
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.confirm',
            type: ClipCC.Type.BlockType.BOOLEAN,
            messageId: 'org.clipteam.extension.javascript.confirm',
            categoryId: 'org.clipteam.extension.javascript.category',
            argument: {
                MESSAGE: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'SinanGentoo is a lie!'
                }
            },
            function: args => this.JSconfirm(args.MESSAGE)
        });
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.prompt',
            type: ClipCC.Type.BlockType.REPORTER,
            messageId: 'org.clipteam.extension.javascript.prompt',
            categoryId: 'org.clipteam.extension.javascript.category',
            argument: {
                MESSAGE: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'Creeper?'
                },
                DEFAULT: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'Aww man'
                }
            },
            function: args => this.JSprompt(args.MESSAGE, args.DEFAULT)
        });
    }
    
    JSrun(CODE) {
        let result = eval(CODE);
        return result;
    }
    
    JSalert(MESSAGE) {
        alert(MESSAGE);
    }
    
    JSconfirm(MESSAGE) {
        let result = confirm(MESSAGE);
        return result;
    }
    
    JSprompt(MESSAGE, DEFAULT) {
        let result = prompt(MESSAGE, DEFAULT);
        return result;
    }
}

module.exports = JavaScriptExtension;