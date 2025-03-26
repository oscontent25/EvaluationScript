let points = {
    'glibc busybox echo "#### independent command test"': [0, 1],
    'glibc busybox ash -c exit': [0, 1],
    'glibc busybox sh -c exit': [0, 1],
    'glibc busybox basename /aaa/bbb': [0, 1],
    'glibc busybox cal': [0, 1],
    'glibc busybox clear': [0, 1],
    'glibc busybox date': [0, 1],
    'glibc busybox df': [0, 1],
    'glibc busybox dirname /aaa/bbb': [0, 1],
    'glibc busybox dmesg': [0, 1],
    'glibc busybox du': [0, 1],
    'glibc busybox expr 1 + 1': [0, 1],
    'glibc busybox false': [0, 1],
    'glibc busybox true': [0, 1],
    'glibc busybox which ls': [0, 1],
    'glibc busybox uname': [0, 1],
    'glibc busybox uptime': [0, 1],
    'glibc busybox printf "abcn"': [0, 1],
    'glibc busybox ps': [0, 1],
    'glibc busybox pwd': [0, 1],
    'glibc busybox free': [0, 1],
    'glibc busybox hwclock': [0, 1],
    'glibc busybox kill 10': [0, 1],
    'glibc busybox ls': [0, 1],
    'glibc busybox sleep 1': [0, 1],
    'glibc busybox echo "#### file opration test"': [0, 1],
    'glibc busybox touch test.txt': [0, 1],
    'glibc busybox echo "hello world" > test.txt': [0, 1],
    'glibc busybox cat test.txt': [0, 1],
    'glibc busybox cut -c 3 test.txt': [0, 1],
    'glibc busybox od test.txt': [0, 1],
    'glibc busybox head test.txt': [0, 1],
    'glibc busybox tail test.txt': [0, 1],
    'glibc busybox hexdump -C test.txt': [0, 1],
    'glibc busybox md5sum test.txt': [0, 1],
    'glibc busybox echo "ccccccc" >> test.txt': [0, 1],
    'glibc busybox echo "bbbbbbb" >> test.txt': [0, 1],
    'glibc busybox echo "aaaaaaa" >> test.txt': [0, 1],
    'glibc busybox echo "2222222" >> test.txt': [0, 1],
    'glibc busybox echo "1111111" >> test.txt': [0, 1],
    'glibc busybox echo "bbbbbbb" >> test.txt': [0, 1],
    'glibc busybox sort test.txt | busybox uniq': [0, 1],
    'glibc busybox stat test.txt': [0, 1],
    'glibc busybox strings test.txt': [0, 1],
    'glibc busybox wc test.txt': [0, 1],
    'glibc busybox [ -f test.txt ]': [0, 1],
    'glibc busybox more test.txt': [0, 1],
    'glibc busybox rm test.txt': [0, 1],
    'glibc busybox mkdir test_dir': [0, 1],
    'glibc busybox mv test_dir test': [0, 1],
    'glibc busybox rmdir test': [0, 1],
    'glibc busybox grep hello busybox_cmd.txt': [0, 1],
    'glibc busybox cp busybox_cmd.txt busybox_cmd.bak': [0, 1],
    'glibc busybox rm busybox_cmd.bak': [0, 1],
    'glibc busybox find -name "busybox_cmd.txt"': [0, 1],
}

function judge(outputFile) {
    while(true) {
        let start = outputFile.indexOf('START busybox-glibc');
        if(start == -1) break;
        let end = outputFile.indexOf('END busybox-glibc', start);
        if(end == -1) break;
        let indexTestcase = outputFile.indexOf('testcase busybox', start);
        if(indexTestcase == -1 || indexTestcase > end) break;

        // 搜索下一个节点 如果没有下一个 则在最后推出循环
        let indexNextCase = outputFile.indexOf('testcase busybox', indexTestcase + 1);
        let judgeLine;
        if(indexNextCase == -1 || indexNextCase > end) {
            judgeLine = outputFile.substring(indexTestcase);
        } else {
            judgeLine = outputFile.substring(indexTestcase, indexNextCase);
        }

        let successIndex = judgeLine.indexOf("success");
        if(successIndex >= 0) {
            let name = judgeLine.substring('testcase'.length, successIndex).trim();
            name = 'glibc ' + name;  // 在 name 前加上 'glibc ' 以便区分
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