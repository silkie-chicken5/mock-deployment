import { Dispatch, SetStateAction, useState} from 'react';
import { MockedDataMap } from './MockedDataMap.js';
import {REPLFunction} from './REPLFunction.js'

const loadCSVFunction: REPLFunction = (args: Array<string>,
     fileMap: MockedDataMap,
      loadedFile: string[][],
       setLoadedFile: Dispatch<SetStateAction<(string[][])>>): string | string[][] => {
    if (args.length == 0) {
        return 'Please include the file you want to load.';
    } else if (args.length == 1) {
        if (fileMap.getFile(args[0]) != null){
            if (fileMap.getFile(args[0]).toString() === ""){
                return 'Please load a non empty file.'
            }
            if (fileMap.getFile(args[0]).toString() === loadedFile.toString()) {
                return 'File is already loaded.';
            }
            setLoadedFile(fileMap.getFile(args[0]));
            return 'File successfully loaded.';
        }
        return 'Please give a supported file path.';
    }
    return 'You have inputted too many arguments';
}

export default loadCSVFunction;