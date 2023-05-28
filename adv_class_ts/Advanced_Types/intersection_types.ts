// type 

type typeAB = Number & String;
type typeBA = Number & String;
let type_int ={
    typeAB:"BALA",
    typeBA:"kumar"
}

console.log(type_int);


//interface
interface BusinessPartner {
    //isInShortList(): unknown;
    //isCreditAllowed(): unknown;
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact & BusinessPartner & Contact;


let list_emp: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000,
   // isInShortList():undefined,
   // isCreditAllowed():undefined
};
console.log(list_emp);
