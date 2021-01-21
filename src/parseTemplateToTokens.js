import Scanner from './Scanner'
import nestTokens from './nestTokens'
//将模板字符串转换位tokens数组
export default function parseTemplateToTokens(templateStr){
    let tokens = [];
    //创建扫描器
    let scanner = new Scanner(templateStr);
    let words;
    while(!scanner.eos()){
        words = scanner.scanUntil("{{");
        if(words !=''){
            tokens.push(['text',words]);
        }
        scanner.scan("{{");
        words = scanner.scanUntil("}}");
        if(words !=''){
            if(words[0] =='#'){
                tokens.push(['#',words.substring(1)]);
            }else if(words[0]=='/'){
                tokens.push(['/',words.substring(1)])
            }else{
                tokens.push(['name',words]);
            }
        }
        scanner.scan("}}");
    }
    return nestTokens(tokens);
}