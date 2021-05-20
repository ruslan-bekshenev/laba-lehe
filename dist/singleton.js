"use strict";
/**
 * Порождающий паттерн, который создает единственный экземпляр какого-либо класса
 * Паттерн позволяет избегать создание других экземпляров, что позволяет избегать замены одного экземлпяра другим
 *
 * Использование: Когда необходим единственный экземпляр
 *
 *
 * Пример: работа с API, с базой данных и тд
 */
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
function createInstance() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    console.log('instance', s1, s2);
}
createInstance();
//# sourceMappingURL=singleton.js.map