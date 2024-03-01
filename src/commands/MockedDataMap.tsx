import {mockedData} from '../data/mockedData';
import { Dispatch, SetStateAction, useState} from 'react';
export class MockedDataMap {
    private hashMap: { [key: string]: string[][] } = {};

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
        this.hashMap['simpleData'] = mockedData('simpleData');
        this.hashMap['oneColumnData'] = mockedData('oneColumnData');
        this.hashMap['emptyData'] = mockedData('emptyData');
        this.hashMap['malformedData'] = mockedData('malformedData');
    }

    mockSearch(column: string, value: string): string | string[][]  {
        if (column == "hello" || column == "1"){
            if (value == "is" || value == "billy" || value == "bob"){
                return [["is","billy","bob"]];
            }
        }
        return [[]];
    }
}