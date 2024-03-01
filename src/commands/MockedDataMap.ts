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
        this.hashMap['data/simpleData.csv'] = mockedData('simpleData');
        this.hashMap['data/headerData.csv'] = mockedData('headerData')
        this.hashMap['data/oneColumnData.csv'] = mockedData('oneColumnData');
        this.hashMap['data/emptyData.csv'] = mockedData('emptyData');
        this.hashMap['data/malformedData.csv'] = mockedData('malformedData');
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