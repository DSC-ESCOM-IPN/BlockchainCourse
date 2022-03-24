import { Greeter } from './model';


export function hello(): string {
    return "Hello, World!";
}

export function foreingGreet(message: string, person: string): string {
    const greeter = new Greeter(message, person);
    return greeter.greet();
}