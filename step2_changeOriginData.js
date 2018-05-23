var xlsx = require('node-xlsx');
var fs = require('fs');
var filePath = './tempdata/originCompanyData.txt';

function writeToTxt(msg) {
	var str = '';
	for (var i = 0; i < msg.length - 1; i++) {
		str += msg[i] + '\n';
	}
	str += msg[msg.length - 1];
	fs.writeFileSync(filePath, str);
	console.log('原始公司数据已经写入'+ filePath +'文件，接下来请执行phantomjs step3_getLinks.js获取超链接数组');
}

var news_item = [];
// var obj = xlsx.parse(__dirname + '/直播APP名单v1.xlsx');
// var obj = xlsx.parse('./origindata/直播APP名单v2.xlsx');
// var obj = xlsx.parse(__dirname + '/视频交友APP名单v2.xlsx');
var obj = xlsx.parse('./origindata/陪聊APP名单.xlsx');
var excelObj = obj[0].data;
// console.log(excelObj)
if (excelObj) {
	excelObj.splice(0, 1);
	for (var i = 0; i < excelObj.length; i++) {
		if (excelObj[i][2] != undefined) {
			news_item.push(excelObj[i])
		}
	}
} else {
	console.log('没有数据！');
}
console.log(news_item)
writeToTxt(news_item);