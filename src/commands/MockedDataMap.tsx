//import mockedData from '../data/mockedData';
import { Dispatch, SetStateAction, useState} from 'react';
export class MockedDataMap {
    private hashMap: { [key: string]: string[][] } = {};
    private loadedFile: string[][];
    private setLoadedFile: Dispatch<SetStateAction<(string[][])>>;

    constructor(loadedFile: string[][],setLoadedFile: Dispatch<SetStateAction<(string[][])>>){
        this.loadedFile = loadedFile;
        this.setLoadedFile = setLoadedFile;
    }
    setNewLoadedFile(file: string[][]) {
        this.setLoadedFile(file);
    }

    getLoadedFile(): string[][] {
        return this.loadedFile;
    }

    getFile(fileName: string): string[][] {
        return this.hashMap[fileName];
    }

    addFile(fileName: string, file: string[][]) {
        this.hashMap[fileName] = file;
    }

    removeFile(fileName: string) {
        delete this.hashMap[fileName];
    }

    addDefaultFiles() {
        this.hashMap['simpleData'] = [["hello", "my", "name"],["is","billy","bob"]];
    }
}