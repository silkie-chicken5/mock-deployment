import { MockedDataMap } from './MockedDataMap.js';
import {REPLFunction} from './REPLFunction.js'

const loadCSVFunction: REPLFunction = (args: Array<string>, fileMap: MockedDataMap): string | string[][] => {
    if (args.length == 0) {
        return 'Please include the file you want to load.';
    } else if (args.length == 1) {
        console.log(args[0]);
        if (fileMap.getFile(args[0]) != null){
            console.log(fileMap.getFile(args[0]));
            console.log(fileMap.getLoadedFile());
            if (fileMap.getFile(args[0]) === fileMap.getLoadedFile()) {
                return 'File is already loaded';
            }
            fileMap.setNewLoadedFile(fileMap.getFile(args[0]));
            return 'File successfully loaded.';
        }
        return 'Please give a supported file path.';
    }
    return 'You have inputted too many arguments';
}

export default loadCSVFunction;