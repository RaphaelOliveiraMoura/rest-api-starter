import { isNumber } from "util";


export type RulesInterface = {
    canBeNull?: boolean,
    minSize?: number,
    maxSize?: number,
    fixedSize?: number,
    isEmail?: boolean,
    isNumber?: boolean,
    isCpf?: boolean,
    hasNumbers?: boolean
}

class Validator {

    private rules: RulesInterface;
    private value: number | string;
    private key: string;

    constructor(value: number | string, key: string, rules: RulesInterface) {
        this.value = value;
        this.key = key;
        this.rules = {
            'canBeNull': rules.canBeNull || false,
            'minSize': rules.minSize,
            'maxSize': rules.maxSize,
            'fixedSize': rules.fixedSize,
            'isEmail': rules.isEmail || false,
            'isNumber': rules.isNumber || false,
            'isCpf': rules.isCpf || false,
            'hasNumbers': rules.hasNumbers || true
        }
    }

    public validate() {
        this.verifyIfIsNull();
        this.verifyIfIsNumber();
        this.verifyIfHasNumbers();
        this.verifySize();
    };

    private verifyIfIsNull() {
        if (!this.rules.canBeNull && !this.value)
            throw `${this.key} cannot be null`
    }

    private verifyIfIsNumber() {
        if (this.rules.isNumber && !isNumber(this.value))
            throw `${this.key} must be a number`
    }

    private verifyIfHasNumbers() {
        const hasNumbers = this.value.toString().split('').filter(value => isNumber(value)).length > 0

        if (!this.rules.hasNumbers && hasNumbers)
            throw `${this.key} cannot have numbers`
    }

    private verifySize() {

        if (this.rules.fixedSize && this.value.toString().length != this.rules.fixedSize) {
            throw `${this.key} should be the size of ${this.rules.fixedSize} characters`
        }

        if (this.rules.maxSize && this.value.toString().length > this.rules.maxSize) {
            throw `${this.key} should be the size smaller then ${this.rules.maxSize} characters`
        }

        if (this.rules.minSize && this.value.toString().length < this.rules.minSize) {
            throw `${this.key} should be the size bigger then ${this.rules.minSize} characters`
        }
    }

}

export const validator = (value: string | number, key: string, rules: RulesInterface) => new Validator(value, key, rules);