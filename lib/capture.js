/**
 * Created by yuan on 2017/9/8.
 */
module.exports = function (str) {
    return str.replace(/(\d{4})-(\d{2})-(\d{2})/g,'$3/$2/$1')
}
