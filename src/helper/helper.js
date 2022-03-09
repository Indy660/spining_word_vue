const projectName = 'spinning_word_vue'

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
        initialFontSize: 100,
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
        getter: 'getInscription'
    },
    {
        name: 'time_inscription',
        mutation: 'setTimesInscription',
        getter: 'getTimesInscription'
    },
    {
        name: 'time_rows',
        mutation: 'setRowsNumber',
        getter: 'getRows'
    },
    {
        name: 'time_columns',
        mutation: 'setColumnsNumber',
        getter: 'getColumns'
    },
    {
        name: 'hue',
        mutation: 'setHue',
        getter: 'getHue'
    },
    {
        name: 'saturation',
        mutation: 'setSaturation',
        getter: 'getSaturation'
    },
    {
        name: 'lightness',
        mutation: 'setLightness',
        getter: 'getLightness'
    },
    {
        name: 'speedUpdateColor',
        mutation: 'setSpeedUpdateColor',
        getter: 'getSpeedUpdateColor'
    },
    {
        name: 'initial_font_size',
        mutation: 'setInitialFontSize',
        getter: 'getInitialFontSize'
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

export {defaultState, URLMutationsNames, mapVuexObj, returnGettersArray, getDefaultStateClone, projectName}