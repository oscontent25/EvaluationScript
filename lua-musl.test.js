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

function judge(outputFile) {
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

    while(true) {
        let start = outputFile.indexOf('START lua-musl');
        if(start == -1) break;
        let end = outputFile.indexOf('END lua-musl', start);
        if(end == -1) break;

        let indexTestcase = outputFile.indexOf('testcase lua', start);
        if(indexTestcase == -1 || indexTestcase > end) break;

        // 搜索下一个节点 如果没有下一个 则在最后推出循环
        let indexNextCase = outputFile.indexOf('testcase lua', indexTestcase + 1);
        
        let judgeLine;
        if(indexNextCase == -1 || indexNextCase > end) {
            judgeLine = outputFile.substring(indexTestcase);
        } else {
            judgeLine = outputFile.substring(indexTestcase, indexNextCase);
        }

        let successIndex = judgeLine.indexOf("success");
        if(successIndex >= 0) {
            let name = judgeLine.substring('testcase'.length, successIndex).trim();
            name = 'musl ' + name;  // 在 name 前加上 'musl ' 以便区分
            if(points[name]) {
                points[name][0] = points[name][1]
            }
        }

        if(indexNextCase == -1 || indexNextCase > end) break;
        outputFile = outputFile.substring(indexNextCase);
    }
    return points;
}

module.exports.judge = judge;