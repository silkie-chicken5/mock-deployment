export function mockedData(file: string): string[][]{ 
    if (file == 'simpleData'){
        return [["hello", "my", "name"],
            ["is", "billy", "bob"],
            ["and", "I", "like"],
            ["eating", "hot", "dogs"]];
    }
    if (file == 'headerData') {
        return [["name", "age", "job"],
            ["nimtelson", "420", "engineer"],
            ["ashketchum", "12", "pokemontrainer"],
            ["andyvandam", "76", "professor"]]
    }
    if (file == 'oneColumnData') {
        return [["hello"], ["my"], ["name"],["is"],["billy"],["bob"]];
    }
    if (file == 'emptyData'){
        return [[]];
    }
    if (file == 'malformedData'){
        return [["hello", "my"],["name", "is","billy","bob"],["nice", "to", "meetyou"]]
    }
    return [[]]
}
