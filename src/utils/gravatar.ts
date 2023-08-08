import {MD5} from 'crypto-js';

export function gravatar(email: string, size=100) {
    return `https://www.gravatar.com/avatar/${MD5(email.toLowerCase()).toString()}?s=${size}&d=robohash&r=x`
}

