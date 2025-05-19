let points = {
    'musl busybox echo "#### independent command test"': [0, 1],
    'musl busybox ash -c exit': [0, 1],
    'musl busybox sh -c exit': [0, 1],
    'musl busybox basename /aaa/bbb': [0, 1],
    'musl busybox cal': [0, 1],
    'musl busybox clear': [0, 1],
    'musl busybox date': [0, 1],
    'musl busybox df': [0, 1],
    'musl busybox dirname /aaa/bbb': [0, 1],
    'musl busybox dmesg': [0, 1],
    'musl busybox du': [0, 1],
    'musl busybox expr 1 + 1': [0, 1],
    'musl busybox false': [0, 1],
    'musl busybox true': [0, 1],
    'musl busybox which ls': [0, 1],
    'musl busybox uname': [0, 1],
    'musl busybox uptime': [0, 1],
    'musl busybox printf "abcn"': [0, 1],
    'musl busybox ps': [0, 1],
    'musl busybox pwd': [0, 1],
    'musl busybox free': [0, 1],
    'musl busybox hwclock': [0, 1],
    'musl busybox sh -c \'sleep 5\' & ./busybox kill $!': [0, 1],
    'musl busybox ls': [0, 1],
    'musl busybox sleep 1': [0, 1],
    'musl busybox echo "#### file opration test"': [0, 1],
    'musl busybox touch test.txt': [0, 1],
    'musl busybox echo "hello world" > test.txt': [0, 1],
    'musl busybox cat test.txt': [0, 1],
    'musl busybox cut -c 3 test.txt': [0, 1],
    'musl busybox od test.txt': [0, 1],
    'musl busybox head test.txt': [0, 1],
    'musl busybox tail test.txt': [0, 1],
    'musl busybox hexdump -C test.txt': [0, 1],
    'musl busybox md5sum test.txt': [0, 1],
    'musl busybox echo "ccccccc" >> test.txt': [0, 1],
    'musl busybox echo "bbbbbbb" >> test.txt': [0, 1],
    'musl busybox echo "aaaaaaa" >> test.txt': [0, 1],
    'musl busybox echo "2222222" >> test.txt': [0, 1],
    'musl busybox echo "1111111" >> test.txt': [0, 1],
    'musl busybox sort test.txt | ./busybox uniq': [0, 1],
    'musl busybox stat test.txt': [0, 1],
    'musl busybox strings test.txt': [0, 1],
    'musl busybox wc test.txt': [0, 1],
    'musl busybox [ -f test.txt ]': [0, 1],
    'musl busybox more test.txt': [0, 1],
    'musl busybox rm test.txt': [0, 1],
    'musl busybox mkdir test_dir': [0, 1],
    'musl busybox mv test_dir test': [0, 1],
    'musl busybox rmdir test': [0, 1],
    'musl busybox grep hello busybox_cmd.txt': [0, 1],
    'musl busybox cp busybox_cmd.txt busybox_cmd.bak': [0, 1],
    'musl busybox rm busybox_cmd.bak': [0, 1],
    'musl busybox find -name "busybox_cmd.txt"': [0, 1],
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
   
    let start = outputFile.indexOf('START busybox-musl');
    if(start == -1) return;
    let end = outputFile.indexOf('END busybox-musl', start);
    if(end == -1) return;

    outputFile = outputFile.substring(start + 'START busybox-musl'.length, end);
    while(true) {
        let indexTestcase = outputFile.indexOf('testcase busybox');
        if(indexTestcase == -1) break;
        // 搜索下一个节点 如果没有下一个 则在最后推出循环
        let indexNextCase = outputFile.indexOf('testcase busybox', indexTestcase + 1);
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
        }else{
            let name = judgeLine.substring('testcase'.length, successIndex).trim();
            name = 'musl ' + name;  // 在 name 前加上 'musl ' 以便区分
            if(points[name]) {
                points[name][1] = -1;
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
            if (first >= second * 4) {
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
