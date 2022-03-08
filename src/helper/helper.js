const defaultState = {
    mainScreen: {
        timesInscription: 20,
        rows: 20,
        columns: 20,
    },
    settingInscription: {
        inscription: 'EXAMPLE',
        color: {
            hue: {
                start: 1,
                end: 360,
            },
            saturation: 100,
            lightness : 50,
        },
        speedUpdateColor: 200,
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
    {
        name: 'name',
        mutation: 'setInscriptionName',
        getter: 'inscription'
    },
    {
        name: 'time_inscription',
        mutation: 'setTimesInscription',
        getter: 'timesInscription'
    },
    {
        name: 'time_rows',
        mutation: 'setRowsNumber',
        getter: 'rows'
    },
    {
        name: 'time_columns',
        mutation: 'setColumnsNumber',
        getter: 'columns'
    },
    {
        name: 'hue',
        mutation: 'setHue',
        getter: 'hueState'
    },
    {
        name: 'saturation',
        mutation: 'setSaturation',
        getter: 'saturationState'
    },
    {
        name: 'lightness',
        mutation: 'setLightness',
        getter: 'lightnessState'
    },
    {
        name: 'speedUpdateColor',
        mutation: 'setSpeedUpdateColor',
        getter: 'speedUpdateColorState'
    },
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