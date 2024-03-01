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
        this.hashMap['data/repeatedData.csv'] = mockedData('repeatedData');
    }

    mockSearch(column: string, value: string, loadedFile: string[][]): string | string[][]  {
        let columnFormatted = column.trim().toLowerCase();
        let valueFormatted = value.trim().toLowerCase();
        let nonIntegerColumnBoolean = /[a-z]/i.test(columnFormatted);
        if (loadedFile.toString() == this.hashMap['data/simpleData.csv'].toString()){
            if (!nonIntegerColumnBoolean){
                if (parseInt(columnFormatted) > 3 || parseInt(columnFormatted) < 0){
                    return 'Error: index ' + column + ' is out of range of data set'
                }
                if (columnFormatted == "1"){
                    if (valueFormatted == "hello"){
                        return [["hello", "my", "name"]];
                    }
                    if (valueFormatted == "is"){
                        return [["is","billy","bob"]];
                    }
                    if (valueFormatted == "and"){
                        return [["and", "I", "like"]];
                    }
                    if (valueFormatted == "eating"){
                        return [["eating", "hot", "dogs"]];
                    }
                }
                if (columnFormatted == "2"){
                    if (valueFormatted == "my"){
                        return [["hello", "my", "name"]];
                    }
                    if (valueFormatted == "billy"){
                        return [["is","billy","bob"]];
                    }
                    if (valueFormatted == "i"){
                        return [["and", "I", "like"]];
                    }
                    if (valueFormatted == "hot"){
                        return [["eating", "hot", "dogs"]];
                    }
                }
                if (columnFormatted == "3"){
                    if (valueFormatted == "name"){
                        return [["hello", "my", "name"]];
                    }
                    if (valueFormatted == "bob"){
                        return [["is","billy","bob"]];
                    }
                    if (valueFormatted == "like"){
                        return [["and", "I", "like"]];
                    }
                    if (valueFormatted == "dogs"){
                        return [["eating", "hot", "dogs"]];
                    }
                }
            }
            if (columnFormatted == "hello"){
                if (valueFormatted == "hello"){
                    return [["hello", "my", "name"]];
                }
                if (valueFormatted == "is"){
                    return [["is","billy","bob"]];
                }
                if (valueFormatted == "and"){
                    return [["and", "I", "like"]];
                }
                if (valueFormatted == "eating"){
                    return [["eating", "hot", "dogs"]];
                }
            }
            if (columnFormatted == "my"){
                if (valueFormatted == "my"){
                    return [["hello", "my", "name"]];
                }
                if (valueFormatted == "billy"){
                    return [["is","billy","bob"]];
                }
                if (valueFormatted == "i"){
                    return [["and", "I", "like"]];
                }
                if (valueFormatted == "hot"){
                    return [["eating", "hot", "dogs"]];
                }
            }
            if (columnFormatted == "name"){
                if (valueFormatted == "name"){
                    return [["hello", "my", "name"]];
                }
                if (valueFormatted == "bob"){
                    return [["is","billy","bob"]];
                }
                if (valueFormatted == "like"){
                    return [["and", "I", "like"]];
                }
                if (valueFormatted == "dogs"){
                    return [["eating", "hot", "dogs"]];
                }
            }
        }
        if (loadedFile.toString() == this.hashMap['data/oneColumnData.csv'].toString()){
            if (!nonIntegerColumnBoolean){
                if (parseInt(columnFormatted) != 1){
                    return 'Error: index ' + column + ' is out of range of data set'
                }
                if (valueFormatted == "yum"){
                    return [["yum"],["yum"]];
                }
                if (valueFormatted == "burger"){
                    return [["burger"]];
                }
                if (valueFormatted == "king"){
                    return [["king"]];
                }
                if (valueFormatted == "is"){
                    return [["is"]];
                }
                if (valueFormatted == "so"){
                    return [["so"]];
                }
            }
            if (columnFormatted == "burger"){
                if (valueFormatted == "yum"){
                    return [["yum"],["yum"]];
                }
                if (valueFormatted == "burger"){
                    return [["burger"]];
                }
                if (valueFormatted == "king"){
                    return [["king"]];
                }
                if (valueFormatted == "is"){
                    return [["is"]];
                }
                if (valueFormatted == "so"){
                    return [["so"]];
                }
            }
        }
        if (loadedFile.toString() == this.hashMap['data/malformedData.csv'].toString()){
            if (!nonIntegerColumnBoolean){
                if (parseInt(columnFormatted) > 2){
                    return 'Error: index ' + column + ' is out of range of data set'
                }
                if (columnFormatted == "1"){
                    if (valueFormatted == "i"){
                        return [["I", "am"]];
                    }
                    if (valueFormatted == "malformed"){
                        return [["malformed", "data","the","third"]];
                    }
                    if (valueFormatted == "nice"){
                        return [["nice", "to", "meetyou"]];
                    }
                }
                if (columnFormatted == "2"){
                    if (valueFormatted == "am"){
                        return [["I", "am"]];
                    }
                    if (valueFormatted == "data"){
                        return [["malformed", "data","the","third"]];
                    }
                    if (valueFormatted == "to"){
                        return [["nice", "to", "meetyou"]];
                    }
                }
            }
            if (columnFormatted == "i"){
                if (valueFormatted == "i"){
                        return [["I", "am"]];
                    }
                if (valueFormatted == "malformed"){
                    return [["malformed", "data","the","third"]];
                }
                if (valueFormatted == "nice"){
                    return [["nice", "to", "meetyou"]];
                }
            }
            if (columnFormatted == "am"){
                if (valueFormatted == "am"){
                        return [["I", "am"]];
                    }
                if (valueFormatted == "data"){
                    return [["malformed", "data","the","third"]];
                }
                if (valueFormatted == "to"){
                    return [["nice", "to", "meetyou"]];
                }
            }
        }
        if (loadedFile.toString() == this.hashMap['data/headerData.csv'].toString()){
            if (!nonIntegerColumnBoolean){
                if (parseInt(columnFormatted) > 3 || parseInt(columnFormatted) < 0){
                    return 'Error: index ' + column + ' is out of range of data set'
                }
                if (columnFormatted == "1"){
                    if (valueFormatted == "name"){
                        return [["name", "age", "job"]];
                    }
                    if (valueFormatted == "nimtelson"){
                        return [["nimtelson", "420", "engineer"]];
                    }
                    if (valueFormatted == "ashketchum"){
                        return [["ashketchum", "12", "pokemontrainer"]];
                    }
                    if (valueFormatted == "andyvandam"){
                        return [["andyvandam", "76", "professor"]];
                    }
                }
                if (columnFormatted == "2"){
                    if (valueFormatted == "age"){
                        return [["name", "age", "job"]];
                    }
                    if (valueFormatted == "420"){
                        return [["nimtelson", "420", "engineer"]];
                    }
                    if (valueFormatted == "12"){
                        return [["ashketchum", "12", "pokemontrainer"]];
                    }
                    if (valueFormatted == "76"){
                        return [["andyvandam", "76", "professor"]];
                    }
                }
                if (columnFormatted == "3"){
                    if (valueFormatted == "job"){
                        return [["name", "age", "job"]];
                    }
                    if (valueFormatted == "engineer"){
                        return [["nimtelson", "420", "engineer"]];
                    }
                    if (valueFormatted == "pokemontrainer"){
                        return [["ashketchum", "12", "pokemontrainer"]];
                    }
                    if (valueFormatted == "professor"){
                        return [["andyvandam", "76", "professor"]];
                    }
                }
            }
            if (columnFormatted == "name"){
                if (valueFormatted == "name"){
                    return [["name", "age", "job"]];
                }
                if (valueFormatted == "nimtelson"){
                    return [["nimtelson", "420", "engineer"]];
                }
                if (valueFormatted == "ashketchum"){
                    return [["ashketchum", "12", "pokemontrainer"]];
                }
                if (valueFormatted == "andyvandam"){
                    return [["andyvandam", "76", "professor"]];
                }
            }
            if (columnFormatted == "age"){
                if (valueFormatted == "age"){
                    return [["name", "age", "job"]];
                }
                if (valueFormatted == "420"){
                    return [["nimtelson", "420", "engineer"]];
                }
                if (valueFormatted == "12"){
                    return [["ashketchum", "12", "pokemontrainer"]];
                }
                if (valueFormatted == "76"){
                    return [["andyvandam", "76", "professor"]];
                }
            }
            if (columnFormatted == "job"){
                if (valueFormatted == "job"){
                    return [["name", "age", "job"]];
                }
                if (valueFormatted == "engineer"){
                    return [["nimtelson", "420", "engineer"]];
                }
                if (valueFormatted == "pokemontrainer"){
                    return [["ashketchum", "12", "pokemontrainer"]];
                }
                if (valueFormatted == "professor"){
                    return [["andyvandam", "76", "professor"]];
                }
            }
        }
        if (loadedFile.toString() == this.hashMap['data/repeatedData.csv'].toString()){
            if (!nonIntegerColumnBoolean){
                if (parseInt(columnFormatted) > 3 || parseInt(columnFormatted) < 0){
                    return 'Error: index ' + column + ' is out of range of data set'
                }
                if (columnFormatted == "1"){
                    if (valueFormatted == "what"){
                        return [["what", "what", "what"],["what", "yo", "oops"],["what", "what", "what"]];
                    }
                    if (valueFormatted == "ah"){
                        return [["ah", "yo", "sup"],];
                    }
                }
                if (columnFormatted == "2"){
                    if (valueFormatted == "what"){
                        return [["what", "what", "what"],["what", "what", "what"]];
                    }
                    if (valueFormatted == "yo"){
                        return [["ah", "yo", "sup"],["what", "yo", "oops"]];
                    }
                }
                if (columnFormatted == "3"){
                    if (valueFormatted == "what"){
                        return [["what", "what", "what"],["what", "what", "what"]];
                    }
                    if (valueFormatted == "sup"){
                        return [["ah", "yo", "sup"]];
                    }
                    if (valueFormatted == "oops"){
                        return [["what", "yo", "oops"]];
                    }
                }
            }
            if (columnFormatted == "what"){
                if (valueFormatted == "what"){
                    return [["what", "what", "what"],
                    ["what", "yo", "oops"],
                    ["what", "what", "what"]];
                }
                if (valueFormatted == "yo"){
                    return [["ah", "yo", "sup"], ["what", "yo", "oops"]];
                }
                if (valueFormatted == "ah" || valueFormatted == "sup"){
                    return [["ah", "yo", "sup"]];
                }
                if (valueFormatted == "oops"){
                    return [["what", "yo", "oops"]];
                }
            }
        }
        return 'No instances of value: ' + value + ' were found in column: ' + column;
    }
}