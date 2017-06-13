system = require('system')
var fs = require('fs');

// 获取原始公司名字数组列表
var companyList = [];
var ins = fs.open('./originCompanyData.txt', {
    mode: 'r',
    charset: 'utf-8'
})
while (!ins.atEnd()) { //循环读取文件内容
    var buffer = ins.readLine(); //一行行的读取
    companyList.push(buffer);
    console.log(buffer);
}

var initialurl = encodeURI('http://www.tianyancha.com/search?key='+ companyList[0] +'&checkFrom=searchBox')

var filePath = './companyLinks.txt'

var page = require('webpage').create();
var USER_AGENTS = [
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; AcooBrowser; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",
    "Mozilla/4.0 (compatible; MSIE 7.0; AOL 9.5; AOLBuild 4337.35; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
    "Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 1.0.3705; .NET CLR 1.1.4322)",
    "Mozilla/4.0 (compatible; MSIE 7.0b; Windows NT 5.2; .NET CLR 1.1.4322; .NET CLR 2.0.50727; InfoPath.2; .NET CLR 3.0.04506.30)",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.3 (Change: 287 c9dfb30)",
    "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2pre) Gecko/20070215 K-Ninja/2.1.1",
    "Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9) Gecko/20080705 Firefox/3.0 Kapiko/3.0",
    "Mozilla/5.0 (X11; Linux i686; U;) Gecko/20070322 Kazehakase/0.4.5",
    "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20",
    "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/2.0 Safari/536.11",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E; LBBROWSER)",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.84 Safari/535.11 LBBROWSER",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)",
    "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SV1; QQDownload 732; .NET4.0C; .NET4.0E; 360SE)",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)",
    "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)",
    "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.89 Safari/537.1",
    "Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; zh-cn) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5",
    "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b13pre) Gecko/20110307 Firefox/4.0b13pre",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:16.0) Gecko/20100101 Firefox/16.0",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11",
    "Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 Ubuntu/10.10 (maverick) Firefox/3.6.10"
];


// 一开始就获取失败的重试变量
var failTryCount = 1;
var failTryMaxNum = 3;

// 获取到信息，但是没有搜索结果或者js还未执行得不到结果，从而进行重试的变量
var reTryCount = 1;
var reTryMaxNum = 3;

// 当前搜索公司列表序号
var searchCount = 51;

function startSearch(initialurl) {
    var n = Math.floor(Math.random() * USER_AGENTS.length + 1) - 1;
    //page.settings.userAgent= 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36';
    page.settings.userAgent = USER_AGENTS[n];

    page.open(initialurl, function(status) {
        //Page is loaded!
        console.log('搜索url = ', initialurl);
        if (status !== 'success') {
            if (failTryCount <= failTryMaxNum) {
                console.log('获取失败，第'+ failTryCount +'次重试···');
                startSearch(initialurl);
                failTryCount++
            } else {
                console.log('获取失败，第'+ failTryCount +'次重试失败，放弃该公司，查询下一个公司···');
                // 失败超过限制次数，放弃，执行获取下一个链接
                reSearch();
            }
        } else {
            failTryCount = 1;
            window.setTimeout(function() {
                page.render("searchResult.png"); //截图

                page.includeJs("https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js", function() {
                    // evaluate执行JS
                    var content = page.evaluate(function() {
                        // 获取搜索出来的公司
                        var searchRes = $('.search_result_container').find('.search_right_item');
                        // return searchRes = $('.search_result_container').html();
                        if (searchRes.length != 0) {
                            // 获取链接
                            return {
                                link: searchRes.eq(0).find('.search_repadding2.f18 a').attr('href'),
                                name: searchRes.eq(0).find('.search_repadding2.f18 a span').html().toString().replace(/(<em>|<\/em>)/g, '')
                            };
                        } else {
                            return 0;
                        }
                    })
                    console.log('content.link = ', content.link);
                    console.log('content.name = ', content.name);

                    if (content) {
                        reTryCount = 1;
                        writeToTxt(content);
                    } else {
                        if (reTryCount <= reTryMaxNum) {
                            console.log('没有搜索到结果，可能是获取速度过快，js还未执行，第'+ reTryCount +'次重试···');
                            console.log('initialurl = ',initialurl)
                            startSearch(initialurl);
                            reTryCount++;
                        } else {
                            console.log('没有搜索到结果，可能是获取速度过快，js还未执行，第'+ reTryCount +'次重试失败，放弃该公司，查询下一个公司···');
                            // 失败超过限制次数，放弃，执行获取下一个链接
                            reSearch();
                        }
                    }

                    // 退出phantomJs， 必须写在includeJs里面， 否则可能jquery没加载完成， 便结束了phantom
                })
            }, 5000);
        }
    });
}

// 执行搜索
startSearch(initialurl);

// 切换搜索关键字
function changeSearchWord(searchWordIndex) {
    var initialurl = encodeURI('http://www.tianyancha.com/search?key='+ companyList[searchWordIndex] +'&checkFrom=searchBox');
    return initialurl;
}

// 重新执行搜索函数
function reSearch() {
    searchCount++;
    failTryCount = 1;
    reTryCount = 1;
    if (searchCount >= companyList.length) {
        console.log('超链接数组已经全部写入' + filePath + '文件！')
        phantom.exit();
    }
    var link = changeSearchWord(searchCount);
    startSearch(link);
}

function writeToTxt(html) {
    console.log('写入第'+ (searchCount + 1) +'条数据， 搜索公司：' + companyList[searchCount])
    var str = html.name + ' ' + html.link + '\n';
    fs.write(filePath, str, 'a');
    reSearch();
}
