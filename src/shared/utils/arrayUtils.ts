export const findIndexToInsert = <T>(elementToCompare: T, decrescentSortedArray: T[], extractor: (p: T) => number): number => {
    for(let i: number = 0; i<decrescentSortedArray.length; i++)
        if(extractor(decrescentSortedArray[i]) < extractor(elementToCompare))
            return i;

    return decrescentSortedArray.length;
}