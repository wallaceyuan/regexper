module.exports = function (str) {
    return str.replace(/\w(?=\d)/g,'X')
}