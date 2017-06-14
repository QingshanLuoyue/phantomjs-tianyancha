var fs = require('fs');

function writeToTxt() {
	fs.writeFileSync('./tempdata/originCompanyData.txt', '');
	fs.writeFileSync('./tempdata/companyDetails.txt', '');
	fs.writeFileSync('./tempdata/companyLinks.txt', '');
	console.log('originCompanyData/companyDetails/companyLinks 已经置空完毕！接下来请执行 node step2_changeOriginData.js转换数据');
}
writeToTxt();