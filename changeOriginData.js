var xlsx = require('node-xlsx');
var fs = require('fs');

function writeToTxt(msg) {
	var str = '';
	for (var i = 0; i < msg.length; i++) {
		str += msg[i] + '\n';
	}
	fs.writeFileSync('originCompanyData.txt', str);
	console.log('原始公司数据已经写入originCompanyData.txt文件');
}

var news_item = [];
// var obj = xlsx.parse(__dirname + '/直播APP名单v1.xlsx');
var obj = xlsx.parse(__dirname + '/直播APP名单v2.xlsx');
// var obj = xlsx.parse(__dirname + '/视频交友APP名单v2.xlsx');
var excelObj = obj[0].data;
console.log(excelObj)
if (excelObj) {
	excelObj.splice(0, 1);
	for (var i = 0; i < excelObj.length; i++) {
		news_item.push(excelObj[i][2])
	}
} else {
	console.log('没有数据！');
}

writeToTxt(news_item);