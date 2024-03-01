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

    mockSearch(column: string, value: string, loadedFile: string[][]): string | string[][]  {
        let columnFormatted = column.trim().toLowerCase();
        let valueFormatted = value.trim().toLowerCase();
        let nonIntegerColumnBoolean = /[a-z]/i.test(columnFormatted);
        if (loadedFile.toString() == this.hashMap['data/simpleData.csv'].toString()){
            if (!nonIntegerColumnBoolean){
                if (parseInt(columnFormatted) > 3 || parseInt(columnFormatted) < 0){
                    return 'Error: index entered is out of range of data set'
                }
            }
            if (columnFormatted == "hello" || columnFormatted == "1"){
                if (valueFormatted == "is" || valueFormatted == "billy" || valueFormatted == "bob"){
                    return [["is","billy","bob"]];
                }
            }
        }
        if (loadedFile.toString() == this.hashMap['data/oneColumnData.csv'].toString()){
            if (!nonIntegerColumnBoolean){
                if (parseInt(columnFormatted) != 1){
                    return 'Error: index entered is out of range of data set'
                }
            }
            if (columnFormatted == "burger" || columnFormatted == "1"){
                if (valueFormatted == "yum"){
                    return [["yum"],["yum"]];
                }
            }
        }
        return 'No instances of value: ' + value + ' were found in column: ' + column;
    }
}