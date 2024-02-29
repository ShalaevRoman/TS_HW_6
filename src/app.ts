showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

interface ILight {
    [key: string]: string | number;
}

interface IMiddle {
    [key: string]: (value: any) => string;
}

interface IHeight {
    [key: number]: boolean;
}

interface IMixed {
    name: string;
    [id: number]: number;
}

interface IIndexSignatureInterface {
    [key: string]: number | boolean;
}

interface IExtendedInterface extends IIndexSignatureInterface {
    additionalProperty: number;
    anotherProperty: boolean;
}

interface IExample {
    [key: string]: number | string | boolean;
}

const isNumericCriteria = (...rest: any) => [...rest].every(element => typeof element === 'number');
// add some criteria

function checkTypeOfNumberIndexSignature (obj: IExample, criteria: (value: any) => boolean): boolean {
    for (const key in obj) {
        if (Object.hasOwn(obj, key)) {
            const value = obj[key];
            if (!criteria(value)) {
                return false;
            }
        }
    }
    return true;
}

const obj1: IExample = {
    prop1: 42,
    prop2: 'hello',
    prop3: 3.14,
};

const obj2: IExample = {
    propA: 123,
    propB: 45,
    propC: 400,
};

console.log(checkTypeOfNumberIndexSignature(obj1, isNumericCriteria));
console.log(checkTypeOfNumberIndexSignature(obj2, isNumericCriteria));