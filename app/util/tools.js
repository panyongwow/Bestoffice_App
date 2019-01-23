export default class Tools {
    //对于商品描述的HTML，将img标签都添加宽度为100%
    //将<img src='...' />更改为<img width="100%" src='...' />
    static imgHTMLAddWidth(html){
        return html.replace(/<img/g, '<img width="100%"')
    }
}