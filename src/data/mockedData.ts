export function mockedData(file: string): string[][]{ 
    if (file == 'simpleData'){
        return [["hello", "my", "name"],["is","billy","bob"]];
    }
    if (file == 'oneColumnData'){
        return [["hello"], ["my"], ["name"],["is"],["billy"],["bob"]];
    }
    if (file == 'emptyData'){
        return [[]];
    }
    if (file == 'malformedData'){
        return [["hello", "my"],["name", "is","billy","bob"],["nice", "to", "meet you"]]
    }
    return [[]]
}
