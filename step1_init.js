var fs = require('fs');

function writeToTxt() {
	fs.writeFileSync('./tempdata/originCompanyData.txt', '');
	fs.writeFileSync('./tempdata/companyDetails.txt', '');
	fs.writeFileSync('./tempdata/companyLinks.txt', '');
	fs.writeFileSync('./storage/historyDetails.txt', '0');
	fs.writeFileSync('./storage/historyLink.txt', '0');
	console.log('originCompanyData/companyDetails/companyLinks 已经置空完毕！接下来请执行 node step2_changeOriginData.js转换数据');
}
writeToTxt();