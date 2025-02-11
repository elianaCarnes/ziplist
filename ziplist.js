"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zipListTheFunctionalWay = exports.zipList = void 0;
function zipList(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Both lists must have the same length');
    }
    const result = [];
    for (let i = 0; i < list1.length; i += 1) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
exports.zipList = zipList;
function zipListTheFunctionalWay(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Both lists must have the same length');
    }
    return list1.flatMap((item, index) => [item, list2[index]]);
}
exports.zipListTheFunctionalWay = zipListTheFunctionalWay;
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
