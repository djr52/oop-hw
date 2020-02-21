class Code{
    constructor(codeLang) {
        this.codeLang = codeLang;
    }
    get codeLanguage(){
        return this.codeLang;
    }
    set codeLanguage(codeL){
        this.codeLang = codeL;

    }



}

module.exports = Code;
