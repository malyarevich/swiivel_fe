import { Injectable } from '@angular/core';

export interface ILocalStorage {
    getItem(key): any;
    setItem(key, value): void;
    removeItem(key): void;
}

export const KEY = 'Edminify';

@Injectable()
export class LocalStorageService implements ILocalStorage {
    setItem(key: string, value: any) {
        localStorage.setItem(`${KEY}: ${key}`, JSON.stringify(value));
    }

    getItem(key: string): any {
        return JSON.parse(localStorage.getItem(`${KEY}: ${key}`));
    }

    removeItem(key: string) {
        localStorage.removeItem(`${KEY}: ${key}`);
    }
}
