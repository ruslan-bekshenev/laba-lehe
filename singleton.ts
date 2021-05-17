/**
 * Порождающий паттерн, который создает единственный экземпляр какого-либо класса
 * Паттерн позволяет избегать создание других экземпляров, что позволяет избегать замены одного экземлпяра другим
 * 
 * Использование: Когда необходим единственный экземпляр
 * 
 * 
 * Пример: работа с API, с базой данных и тд
 */

 class Singleton {
  private static instance: Singleton;
  private constructor() { }
  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }

      return Singleton.instance;
  }
}


function createInstance() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  console.log('instance', s1, s2)
}

createInstance();