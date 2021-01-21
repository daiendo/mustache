import lookup from './lookup';
import renderTemplate from './renderTemplate';
//处理带#的token，与renderTemplate配合实现递归
export default function paresArray(token,data){
    let resultStr = '';
    let arrData = lookup(data,token[1]);
    for (let i = 0; i < arrData.length; i++) {
        resultStr += renderTemplate(token[2],{...arrData[i],'.':arrData[i]})
    }
    return resultStr;
}