# tianyancha
天眼查数据抓取
>利用 phantomjs抓取动态js渲染的网页

1、进入命令行工具 运行命令 node init.js  置空相关txt文件
2、运行命令 node changeOriginData.js
   将xlsx内容转换成txt格式--(因为phantomjs不支持读写xlsx)。由此获得公司名称数组，数据存储在originCompanyData.txt
3、运行命令 phantomjs getLinks.js
   通过公司名字，在天眼查上搜到与关键字相近的公司，取搜到结果的第一个公司的详情超链接
   遍历查询所有需要搜索的公司
   结果将得到一个超链接数组，数据存储在companyLinks.txt
4、运行命令 phantomjs getDetails.js
   遍历超链接数组，获取各个公司的电话／邮箱／名字／网址等
   此时数组还是一个文本存储方式，数据存储在companyDetails.txt
5、运行命令 node changeFinalDataToXlsx.js
   将文本数据格式转换成xlsx格式，数据存储在finalCompanyData.xlsx
收工！