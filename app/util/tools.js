export default class Tools {

    //调整商品描述的HTML，以便更好的在移动端显示
    static adjustHTML(html) {
        let str = html

        //设置字体为0.8rem
        str = "<div style='font-size:0.8rem'>" + str + "</div>"
        str = str.replace(/<table/g, '<table style="font-size:0.8rem"')

        //对于商品描述的HTML，将img标签都添加宽度为100%
        //将<img src='...' />更改为<img width="100%" src='...' />
        str = str.replace(/<img/g, '<img width="100%"')

        return str
    }

    // //设置字体为0.8rem 
    // static adjustFontSize(html) {
    //     return "<div style='font-size:0.8rem'>" + html + "</div>"
    // }

    // //对于商品描述的HTML，将img标签都添加宽度为100%
    // //将<img src='...' />更改为<img width="100%" src='...' />
    // static imgHTMLAddWidth(html) {
    //     return html.replace(/<img/g, '<img width="100%"')
    // }
}