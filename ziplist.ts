function zipList<T>(list1: T[], list2: T[]): T[] {
    if (list1.length !== list2.length) {
        throw new Error('Both lists must have the same length');
    }

    const result: T[] = [];
    for (let i = 0; i < list1.length; i += 1) {
        result.push(list1[i], list2[i]);
    }

    return result;
}

function zipListTheFunctionalWay<T>(list1: T[], list2: T[]): T[] {
    if (list1.length !== list2.length) {
        throw new Error('Both lists must have the same length');
    }

    return list1.flatMap((item, index) => [item, list2[index]]);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); 

export { zipList, zipListTheFunctionalWay };
