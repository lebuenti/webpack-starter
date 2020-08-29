import './style/main.scss';
import {Greetings} from "./Greetings";
import {User} from "./custom";

let bob = <User>{
    firstname: "Bob",
    lastname: "Doe",
    birthday: "01.01.1900",
    toString(): string {
        return this.firstname + " " + this.lastname + ", born at " + this.birthday + ". "
    }
}

console.log(bob.toString() + new Greetings().greeting());

document.getElementById("someGreets").textContent = "Hello " + bob.firstname;