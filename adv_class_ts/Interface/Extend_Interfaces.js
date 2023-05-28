"use strict";
class Mail {
    later(email, after) {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email) {
        console.log(`Sent email to ${email} after  ms. `);
        return true;
    }
    queue(email) {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
//Interfaces extending classes
class Control {
}
class Button extends Control {
    enable() { }
}
class TextBox extends Control {
    enable() { }
}
class Label extends Control {
}
// Error: cannot implement
//class Chart implements StatefulControl {
//  enable() { }
//}
