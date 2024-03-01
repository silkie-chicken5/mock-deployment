import { Dispatch, SetStateAction, useState} from 'react';
import { MockedDataMap } from './MockedDataMap.js';
import {REPLFunction} from './REPLFunction.js'

const viewCSVFunction: REPLFunction = (args: Array<string>,
     fileMap: MockedDataMap,
      loadedFile: string[][]): string | string[][] => {
        if(loadedFile.toString() === ""){
          return 'Please load a csv before running the view command'
        }
    return loadedFile;

}

export default viewCSVFunction;