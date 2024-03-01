import { Dispatch, SetStateAction, useState} from 'react';
import { MockedDataMap } from './MockedDataMap.js';
import {REPLFunction} from './REPLFunction.js'

const viewCSVFunction: REPLFunction = (args: Array<string>,
     fileMap: MockedDataMap,
      loadedFile: string[][]): string | string[][] => {
        if (args.length != 0){
          return 'You have inputted too many arguments'
        }
        if(loadedFile.toString() === ""){
          return 'Please load a non-empty csv before running the view command'
        }
    return loadedFile;

}

export default viewCSVFunction;