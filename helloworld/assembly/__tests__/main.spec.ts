import {
    hello,
    foreingGreet
} from '..';
import {
    Greeter
} from '../model';


describe('simple greet', () => {
    it('should return Hello World', () => {
        var res = hello();
        expect(res).toBe("Hello, World!");
    });
})

describe('foreing greet', () => {
    it('should return a foreing greet', () => {
        var result = foreingGreet('Salut', 'Paul');
        expect(result).toBe('Salut, Paul!');
    });
})

describe('foreing greet obj', () => {
    it('should return a foreing greet', () => {
        var result = foreingGreet('Salut', 'Paul');
        var greet = new Greeter('Salut', 'Paul');
        expect(result).toBe(greet.greet());
    });
})
