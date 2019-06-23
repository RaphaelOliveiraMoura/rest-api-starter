const CryptoJS = require("crypto-js");

import path from 'path';
const credentialsPath = path.resolve('credentials.json');
const protectKey = require(credentialsPath).secret;

export function encrypt(text: String): string{
    return CryptoJS.AES.encrypt(text, protectKey).toString();
}

export function compare(encryptText: string, textWithoutEncrypt: string): boolean{
    const decryptText = CryptoJS.AES.decrypt(encryptText, protectKey).toString(CryptoJS.enc.Utf8);
    return decryptText === textWithoutEncrypt;
}