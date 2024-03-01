import { MockedDataMap } from './MockedDataMap.js';
import {REPLFunction} from './REPLFunction.js'

const searchCSVFunction: REPLFunction = (args: Array<string>, fileMap: MockedDataMap, loadedFile: string[][]): string | string[][] => {
    if (loadedFile.toString() == ""){
        return 'Please load a searchable csv before running the search command'
    }
    if (args.length != 2) {
        return 'Error: undesired number of arguments. Please follow the format of \'search <column> <value>\''
    }
    
    return fileMap.mockSearch(args[0], args[1]);
}

export default searchCSVFunction;