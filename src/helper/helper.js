const defaultState = {
    mainScreen: {
        timesInscription: 20,
        rows: 20,
        columns: 20,
    },
    settingInscription: {
        inscription: 'EXAMPLE',
    }
};

function deepClone(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) return obj; // primitives
    if (hash.has(obj)) return hash.get(obj); // cyclic reference
    const result = obj instanceof Set ? new Set(obj) // See note about this!
        : obj instanceof Map ? new Map(Array.from(obj, ([key, val]) =>
                [key, deepClone(val, hash)]))
            : obj instanceof Date ? new Date(obj)
                : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
                    // ... add here any specific treatment for other classes ...
                    // and finally a catch-all:
                    : obj.constructor ? new obj.constructor()
                        : Object.create(null);
    hash.set(obj, result);
    return Object.assign(result, ...Object.keys(obj).map(
        key => ({ [key]: deepClone(obj[key], hash) }) ));
}

function getDefaultStateClone() {
    return deepClone(defaultState)
}

const URLMutationsNames = [
    // name: {
    //     name: 'name',
    //     mutation: 'updateInscriptionName',
    //     getter: 'inscription'
    // },
    // time_inscription: {
    //     name: 'time_inscription',
    //     mutation: 'updateTimesInscription',
    //     getter: 'timesInscription'
    // },
    // time_rows: {
    //     name: 'time_rows',
    //     mutation: 'updateRowsNumber',
    //     getter: 'rows'
    // },
    // time_columns: {
    //     name: 'time_columns',
    //     mutation: 'updateColumnsNumber',
    //     getter: 'columns'
    // }
    {
        name: 'name',
        mutation: 'updateInscriptionName',
        getter: 'inscription'
    },
    {
        name: 'time_inscription',
        mutation: 'updateTimesInscription',
        getter: 'timesInscription'
    },
    {
        name: 'time_rows',
        mutation: 'updateRowsNumber',
        getter: 'rows'
    },
    {
        name: 'time_columns',
        mutation: 'updateColumnsNumber',
        getter: 'columns'
    },
// name: 'updateInscriptionName'
// time_inscription: 'updateTimesInscription',
// time_rows: 'updateRowsNumber',
// time_columns: 'updateColumnsNumber',
];

function mapVuexObj(array, keyObj) {
    const result = {}
    for (const item of array) {
        result[item.name] = item[keyObj]
    }
    return result
}

function returnGettersArray() {
    return URLMutationsNames.map(item => item.getter)
}

export {defaultState, URLMutationsNames, mapVuexObj, returnGettersArray, getDefaultStateClone}