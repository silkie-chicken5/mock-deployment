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
        return [["burger"], ["king"], ["is"],["so"],["yum"],["yum"]];
    }
    if (file == 'emptyData'){
        return [[]];
    }
    if (file == 'malformedData'){
        return [["I", "am"],
        ["malformed", "data","the","third"],
        ["nice", "to", "meetyou"]]
    }
    if (file == 'repeatedData') {
        return [["what", "what", "what"],
            ["ah", "yo", "sup"],
            ["what", "yo", "oops"],
            ["what", "what", "what"]]
    }
    return [[]]
}
