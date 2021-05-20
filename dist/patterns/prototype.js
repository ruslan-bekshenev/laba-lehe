"use strict";
var WikiArticle = /** @class */ (function () {
    function WikiArticle(title, url, text) {
        this.title = '';
        this.url = '';
        this.text = '';
        this.title = title;
        this.url = url;
        this.text = text;
    }
    WikiArticle.prototype.clone = function () {
        return new WikiArticle(this.title, this.url, this.text);
    };
    return WikiArticle;
}());
var nature = new WikiArticle('Природа', 'https://wikipedia.com/nature', 'Текст про природу');
var cloneNature = nature.clone();
cloneNature.title = 'Nature 2';
console.log(nature, cloneNature);
//# sourceMappingURL=prototype.js.map