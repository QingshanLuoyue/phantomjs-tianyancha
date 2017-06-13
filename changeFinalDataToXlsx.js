var xlsx = require('node-xlsx');
var fs = require('fs');

var filePath = 'finalCompanyData2.xlsx';
var companyMsgArr = [];
var finalMsgArr = [];

function readFromTxt() {
	var readTxt = fs.readFileSync('companyDetails.txt', 'utf-8');
	companyMsgArr = (readTxt.toString().split('\n'));
	for (var i = 0; i < companyMsgArr.length; i++) {
		finalMsgArr.push(companyMsgArr[i].split(' '))
	}
}
readFromTxt();
// console.log(finalMsgArr)


writeToexcel(finalMsgArr)
// 写进excel文件
function writeToexcel(data) {
	var finalRes = [['公司名', '电话', '邮箱', '网址', '地址', '区域' ]].concat(data);

	var buffer = xlsx.build([
	    {
	        name:'sheet1',
	        data:finalRes
	    }
	]);
	//将文件内容插入新的文件中
	fs.writeFileSync(filePath,buffer,{'flag':'w'});
	// fs.writeFileSync('langrensha-back.xlsx',buffer,{'flag':'w'});
	console.log('已经将转换过后的文本数据写入' + filePath + '文件！');
}