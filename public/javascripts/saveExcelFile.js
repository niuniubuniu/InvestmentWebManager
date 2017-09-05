const fs = require('fs');
const xlsx = require('better-xlsx');

const cells = ["项目名称", "员工跟投", "姓名", "投资金额", "身份证号",  "邮箱",  "微信号",  "联系电话",  "住址",  "介绍人",  "备注" ]

function saveInvestmentFile( data, callBack) {

    const file = new xlsx.File();

    const sheet = file.addSheet('Sheet1');

    const rowTop = sheet.addRow();
    cells.map((item, index )=>{
        const cell = rowTop.addCell();
        cell.value = item;
        const style = new xlsx.Style();
        style.fill.patternType = 'solid';
        // style.fill.fgColor = '00FF0000';
        style.align.h = 'center';
        style.align.v = 'center';

        cell.style = style;
    })

    data.map((item, index)=>{
        const row = sheet.addRow();

        const projectName = row.addCell();
        projectName.value = item.project.projectName;

        const isStaff = row.addCell();
        isStaff.value = (item.userData.isStaff == "0") ? "否": "是";

        const name = row.addCell();
        name.value = item.userData.name;

        const investmentMmount = row.addCell();
        investmentMmount.value = item.investmentMmount;

        const Id_Number = row.addCell();
        Id_Number.value = item.userData.Id_Number;

        const email = row.addCell();
        email.value = item.userData.email;

        const wechatNumber = row.addCell();
        wechatNumber.value = item.userData.wechatNumber;

        const phoneNumber = row.addCell();
        phoneNumber.value = item.userData.phoneNumber;

        const address = row.addCell();
        address.value = item.userData.address;

        const introducer = row.addCell();
        introducer.value = item.introducer;

        const extra = row.addCell();
        extra.value = item.extra;

    })
      file
      .saveAs()
      .pipe(fs.createWriteStream('tempFile/investment.xlsx'))
      .on('finish', () => {
          console.log('Done.');
          callBack()
      });
}

module.exports = saveInvestmentFile;
