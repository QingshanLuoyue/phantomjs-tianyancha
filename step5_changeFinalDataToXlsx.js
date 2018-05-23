var xlsx = require('node-xlsx');
var fs = require('fs');

var filePath = './result/finalCompanyData'+ new Date().getTime() +'.xlsx';
var companyMsgArr = [];
var finalMsgArr = [];

function readFromTxt() {
	var readTxt = fs.readFileSync('./tempdata/companyDetails.txt', 'utf-8');
	companyMsgArr = (readTxt.toString().split('\n'));
	for (var i = 0; i < companyMsgArr.length; i++) {
		finalMsgArr.push(companyMsgArr[i].split(','))
	}
}
readFromTxt();
var finalRes = [['序号','产品名称','公司','bundleID','下载量','公司名', '电话', '邮箱', '网址', '地址', '区域' ]].concat(finalMsgArr);
console.log(finalRes)

// var news_item = [];
// var obj = xlsx.parse(__dirname + '/直播APP名单v1.xlsx');
// var obj = xlsx.parse(__dirname + '/直播APP名单v2.xlsx');
// var obj = xlsx.parse(__dirname + '/视频交友APP名单v2.xlsx');
// var excelObj = obj[0].data;
// console.log(excelObj)
// var solveArr = [];
// if (excelObj) {
// 	for (var i = 0; i < excelObj.length; i++) {
// 		solveArr.push(excelObj[i].concat(finalRes[i]));
// 	}
// } else {
// 	console.log('没有数据！');
// }


writeToexcel(finalRes)
// 写进excel文件
function writeToexcel(data) {

	var buffer = xlsx.build([
	    {
	        name:'sheet1',
	        data:data
	    }
	]);
	//将文件内容插入新的文件中
	fs.writeFileSync(filePath,buffer,{'flag':'w'});
	// fs.writeFileSync('langrensha-back.xlsx',buffer,{'flag':'w'});
	console.log('已经将转换过后的文本数据写入' + filePath + '文件！');
}