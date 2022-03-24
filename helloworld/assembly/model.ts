
@nearBindgen
export class Greeter {
    message: string;
    person: string;

    constructor(
        _message: string,
        _person: string) {
        this.message = _message;
        this.person = _person;
    }

    greet(): string {
        return this.message + ", " + this.person + "!";
    }

}
