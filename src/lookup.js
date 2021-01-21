//在dataObj对象中，读取有点操作的keyName属性
/**
 * 例从obj中读取'a.b.c'
 * obj={
 *    a:{
 *        b:{
 *             c:{123}
 *          }
 *      } 
 * }
*/
export default function lookup(dataObj,keyName){
    if (keyName.indexOf('.') != -1 && keyName !='.') {
        let keys = keyName.split('.');
        let temp = dataObj;
        for (let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]];
        }
        return temp;
    }
    return dataObj[keyName];
}
