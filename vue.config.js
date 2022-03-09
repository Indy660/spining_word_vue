// todo: придумать импорт переменной projectName из хелпера
// import { projectName } from "@/helper/helper.js"
// const { projectName } = require('@/helper/helper.js')
// module.exports = {
//     publicPath: process.env.NODE_ENV === 'production'
//         ? `/${projectName}/`
//         : '/'
// }
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/spinning_word_vue/'
        : '/'
}