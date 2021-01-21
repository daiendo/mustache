//折叠tokens，利用栈数据结构，将tokens子token折叠
export default function nestTokens(tokens) {
    let nestTokens = [];
    let collector = nestTokens;//收集器
    let sections = [];//栈结构
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        switch (token[0]) {
            case '#':
                collector.push(token);
                sections.push(token);
                collector = token[2] = [];
                break;
            case '/':
                sections.pop();
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens;
                break;
            default:
                collector.push(token)
                break;
        }
    }
    return nestTokens;
}