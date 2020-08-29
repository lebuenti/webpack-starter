import {describe} from 'mocha'
import {Greetings} from "../src/Greetings";
import {expect} from 'chai';

describe('greetings function', () => {
    it('should return "how are you?"', () => {
        const result = new Greetings().greeting();
         expect(result).to.equal('how are you?');
    });
});
