const ClipCC = require('clipcc-extension');

class JavaScriptExtension extends ClipCC.Extension {
    init() {
        //@TODO Clip Community version
        console.log("Extension loaded(Full version).")
        ClipCC.API.addCategory({
            categoryId: 'org.clipteam.extension.javascript.category',
            messageId: 'org.clipteam.extension.javascript.category.name',
            color: '#9900cc'
        });
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.run',
            type: ClipCC.Type.BlockType.COMMAND,
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
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.navigate',
            type: ClipCC.Type.BlockType.COMMAND,
            messageId: 'org.clipteam.extension.javascript.navigate',
            categoryId: 'org.clipteam.extension.javascript.category',
            argument: {
                URL: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'https://github.com/Clipteam/clipcc-gui'
                }
            },
            function: args => this.JSnavigate(args.URL)
        });
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.upload',
            type: ClipCC.Type.BlockType.REPORTER,
            messageId: 'org.clipteam.extension.javascript.upload',
            categoryId: 'org.clipteam.extension.javascript.category',
            function: args => this.JSupload()
        });
        ClipCC.API.addBlock({
            opcode: 'org.clipteam.extension.javascript.download',
            type: ClipCC.Type.BlockType.COMMAND,
            messageId: 'org.clipteam.extension.javascript.download',
            categoryId: 'org.clipteam.extension.javascript.category',
            argument: {
                FILENAME: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'flag.txt'
                },
                CONTENT: {
                    type: ClipCC.Type.ArgumentType.STRING,
                    default: 'SparrowHe will AK IOI!'
                }
            },
            function: args => this.JSdownload(args.CONTENT)
        });
    }
    
    JSrun(CODE) {
        eval(CODE);
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
    
    JSnavigate(URL) {
        window.location = URL;
    }
    
    JSupload() {
        let uploadFile = document.getElementById('file_window');
        let reader = new FileReader();
        reader.readAsText(uploadFile.files[0], "UTF-8");
        reader.onload = function(e){
            let content = e.target.result
            return content;
        }
        return null;
    }
    
    JSdownload(FILENAME, CONTENT) {
        let blob = new Blob(CONTENT);
        const objDownload = document.createElement('obj');
        objDownload.download = FILENAME;
        objDownload.style.display = 'none';
        objDownload.href = window.URL.createObjectURL(blob);
        document.body.appendChild(objDownload);
        objDownload.click();
        objDownload.remove();
        window.URL.revokeObjectURL(window.URL.createObjectURL(blob));
    }
}

module.exports = JavaScriptExtension;