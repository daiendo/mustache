import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate'
window.templateEngine = {
    render(templateStr,data){
        let tokens = parseTemplateToTokens(templateStr);
        let domStr =  renderTemplate(tokens,data)
        return domStr;
    }
}