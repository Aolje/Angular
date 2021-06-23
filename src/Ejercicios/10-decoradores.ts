// https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
  
  @reportableClassDecorator
  class BugReport {
    type = "report";
    title: string;
  
    constructor(t: string) {
      this.title = t;
    }
  }

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo ',);
    }
}

console.log('MiSuperClase ',MiSuperClase);
const miClase = new MiSuperClase();
console.log('Test ',miClase.miPropiedad);