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

export {defaultState, URLMutationsNames, mapVuexObj}