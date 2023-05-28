// Extend Interfaces in TypeScript
interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}
interface A {
    a(): void
}

interface B extends A {
    b(): void
}


class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} after  ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

// Interfaces extending multiple interfaces

interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}

//Interfaces extending classes
class Control {
    private static: boolean | undefined;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
//class Chart implements StatefulControl {
  //  enable() { }
//}