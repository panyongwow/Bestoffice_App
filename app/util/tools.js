import { BSTWEBURL } from '../config/config'
//import MD5 from 'react-native-md5'

export const adType = {              //广告链接类型
    product: 'product',             //商品单页
    productList: 'productList',     //商品列表页
    webPage: 'webPage'              //其他单页
}

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

    //分析广告的URL，以便决定是跳转到商品单页、二级目录页或其他页面
    static analyzeURL(URL) {

        //UEL样式：http://www.bestoffice.cn/BrowseGoods/Product.aspx?cInvCode=26685
        let regex = new RegExp('^' + BSTWEBURL + '/BrowseGoods/Product.aspx\\?cInvCode=\\d+$')
        if (regex.test(URL)) {
            //商品单页
            let productID = URL.replace(BSTWEBURL + '/BrowseGoods/Product.aspx?cInvCode=', '')
            return {
                type: adType.product,
                productID
            }
        }

        //URL样式：http://www.bestoffice.cn/BrowseGoods/index.aspx?ClassID=89&BrandID=42"
        regex = new RegExp('^' + BSTWEBURL + '/BrowseGoods/index.aspx\\?ClassID=\\d+&BrandID=\\d+$')
        if (regex.test(URL)) {
            //商品列表页
            let subStr = URL.replace(BSTWEBURL + '/BrowseGoods/index.aspx?ClassID=', '')
            let listgoodsID = subStr.split('&BrandID=')[0]
            let companyID = subStr.split('&BrandID=')[1]
            return {
                type: adType.productList,
                listgoodsID,
                companyID
            }
        }

        if (URL === BSTWEBURL + '/sales/seadragons.aspx') {
            //海龙复印纸
            return {
                type: adType.productList,
                listgoodsID: 0,
                companyID: 666
            }
        }
        return { type: adType.webPage }
    }

    // //MD5加密
    // static md5(str) {
    //     return MD5.hex_md5(str + 'xjiolgieowhf')
    // }
}
