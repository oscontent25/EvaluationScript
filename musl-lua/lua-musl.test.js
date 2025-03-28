let points = {
    'musl lua date.lua': [0, 1],
    'musl lua file_io.lua': [0, 1],
    'musl lua max_min.lua': [0, 1],
    'musl lua random.lua': [0, 1],
    'musl lua remove.lua': [0, 1],
    'musl lua round_num.lua': [0, 1],
    'musl lua sin30.lua': [0, 1],
    'musl lua sort.lua': [0, 1],
    'musl lua strings.lua': [0, 1],
}

// const { assert } = require('console');
// const fs = require('fs');  // 引入 fs 模块

// // 读取命令行传入的文件路径（在命令行中传入文件路径）
// const filePath = process.argv[2];  // 通过 process.argv 获取传入的文件路径

// // 读取文件内容
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error("读取文件时发生错误:", err);
//         return;
//     }

//     // 将文件内容传递给 judge 函数
//     let result = myjudge(data);
//     console.log("Judge function result:", result);  // 输出 judge 函数的返回值
// });

function myjudge(outputFile) {
    // outputFile.trim().split('\n').forEach((value, index) => {
    //     if(value.indexOf("testcase lua")==0 && value.endsWith("success")) {
    //         let name = value.replace('testcase', '').replace('success', '').trim();
    //         if(points[name]) {
    //             points[name][0] = points[name][1]
    //         }
    //     }
    // })

    // console.log(outputFile);
    // return points;
    let start = outputFile.indexOf('START lua-musl');
    if(start == -1) return;
    let end = outputFile.indexOf('END lua-musl', start);
    if(end == -1) return;
    outputFile = outputFile.substring(start + 'START lua-musl'.length, end);
    while(true) {
        let indexTestcase = outputFile.indexOf('testcase lua');
        if(indexTestcase == -1 ) break;

        // 搜索下一个节点 如果没有下一个 则在最后推出循环
        let indexNextCase = outputFile.indexOf('testcase lua', indexTestcase + 1);
        
        let judgeLine;
        if(indexNextCase == -1) {
            judgeLine = outputFile.substring(indexTestcase);
        } else {
            judgeLine = outputFile.substring(indexTestcase, indexNextCase);
        }

        let successIndex = judgeLine.indexOf("success");
        if(successIndex >= 0) {
            let name = judgeLine.substring('testcase'.length, successIndex).trim();
            name = 'musl ' + name;  // 在 name 前加上 'musl ' 以便区分
            if(points[name]) {
                points[name][0] += 1;
            }
        }

        if(indexNextCase == -1) break;
        outputFile = outputFile.substring(indexNextCase);
    }
}

function judge(outputFile){
    let start = outputFile.indexOf('start---riscv64');
    let end = outputFile.indexOf('end---riscv64', start);
    if(end != -1 && start != -1){
        let outputFile_riscv = outputFile.substring(start + 'start---riscv64'.length, end);
        myjudge(outputFile_riscv);
    }
    start = outputFile.indexOf('start---x86_64');
    end = outputFile.indexOf('end---x86_64', start);
    if(end != -1 && start != -1){
        let outputFile_x86 = outputFile.substring(start + 'start---x86_64'.length, end);
        myjudge(outputFile_x86);
    }
    start = outputFile.indexOf('start---loongarch64');
    end = outputFile.indexOf('end---loongarch64', start);
    if(end != -1 && start != -1){
        let outputFile_loongarch = outputFile.substring(start + 'start---loongarch64'.length, end);
        myjudge(outputFile_loongarch);
    }
    start = outputFile.indexOf('start---aarch64');
    end = outputFile.indexOf('end---aarch64', start);
    if(end != -1 && start != -1){
        let outputFile_aarch = outputFile.substring(start + 'start---aarch64'.length, end);
        myjudge(outputFile_aarch);
    }
    // 遍历对象
    for (let key in points) {
        if (Object.hasOwnProperty.call(points, key)) {
            let [first, second] = points[key];
            // 检查第一个数是否是第二个数的四倍
            if (first === second * 4) {
                points[key][0] = 1;  
                points[key][1] = 1;  
            }else{
                points[key][0] = 0;  
                points[key][1] = 1;
            }
        }
    }
    return points;
}

module.exports.judge = judge;
