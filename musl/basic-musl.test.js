// Define the points structure similar to the Python runner, mapping test names to [pass, total]
let points = {
    'musl test_brk': [0, 3],
    'musl test_chdir': [0, 3],
    'musl test_clone': [0, 4],
    'musl test_close': [0, 2],
    'musl test_dup2': [0, 2],
    'musl test_dup': [0, 2],
    'musl test_execve': [0, 3],
    'musl test_exit': [0, 2],
    'musl test_fork': [0, 3],
    'musl test_fstat': [0, 3],
    'musl test_getcwd': [0, 2],
    'musl test_getdents': [0, 5],
    'musl test_getpid': [0, 3],
    'musl test_getppid': [0, 2],
    'musl test_gettimeofday': [0, 3],
    'musl test_mkdir': [0, 3],
    'musl test_mmap': [0, 3],
    'musl test_mount': [0, 5],
    'musl test_munmap': [0, 4],
    'musl test_open': [0, 3],
    'musl test_openat': [0, 4],
    'musl test_pipe': [0, 4],
    'musl test_read': [0, 3],
    'musl test_sleep': [0, 2],
    'musl test_times': [0, 6],
    'musl test_umount': [0, 5],
    'musl test_uname': [0, 2],
    'musl test_unlink': [0, 2],
    'musl test_wait': [0, 4],
    'musl test_waitpid': [0, 4],
    'musl test_write': [0, 2],
    'musl test_yield': [0, 4]
};
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
//     let result = judge(data);
//     console.log("Judge function result:", result);  // 输出 judge 函数的返回值
// });
// // Base assertion utility function
function assertUtil(testFn, data, args, expectedPass, testName, pointsKey) {
    const result = testFn(data, ...args);
    // console.log(`Assertion passed for ${testName}, result: ${data}, ${args}`);
    if (result === expectedPass) {
        pointsKey = 'musl ' + pointsKey;
        points[pointsKey][0] += 1; // Increment pass count if assertion passes
    }
}

// Specific assertion functions
function assertGe(data, minLength, testName) {
    assertUtil((d, len) => d.length >= len, data, [minLength], true, testName, testName);
}

function assertEqual(data, value, expected, testName) {
    assertUtil((d, idx, val) => idx === val, data, [value, expected], true, testName, testName);
}

function assertNotEqual(data, value, notExpected, testName) {
    assertUtil((d, val, ne) => val !== ne, data, [value, notExpected], true, testName, testName);
}

function assertGreat(data, value, min, testName) {
    assertUtil((d, val, m) => val > m, data, [value, min], true, testName, testName);
}

function assertInStr(pattern, data, testName) {
    const regex = new RegExp(pattern);
    assertUtil((d, re) => d.some(line => re.test(line)), data, [regex], true, testName, testName);
}

function assertIn(substr, data, testName) {
    assertUtil((d, sub) => d.includes(sub), data, [substr], true, testName, testName);
}

// Test-specific evaluation functions
function evaluateTestBrk(data) {
    assertGe(data, 3, 'test_brk');
    const p1 = /Before alloc,heap pos: (.+)/;
    const p2 = /After alloc,heap pos: (.+)/;
    const p3 = /Alloc again,heap pos: (.+)/;
    const line1 = data[0]?.match(p1)?.[1];
    const line2 = data[1]?.match(p2)?.[1];
    const line3 = data[2]?.match(p3)?.[1];
    if (line1 && line2 && line3) {
        const a1 = parseInt(line1, 10);
        const a2 = parseInt(line2, 10);
        const a3 = parseInt(line3, 10);
        assertEqual(data, a2, a1 + 64, 'test_brk');
        assertEqual(data, a3, a2 + 64, 'test_brk');
    }
}

function evaluateTestChdir(data) {
    assertGe(data, 2, 'test_chdir');
    const p1 = /chdir ret: (\d+)/;
    const r1 = data[0]?.match(p1)?.[1];
    // console.log(r1);
    if (r1) assertEqual(data, r1, "0", 'test_chdir');
    assertIn("test_chdir", data[1], 'test_chdir');
   
}

function evaluateTestExecve(data) {
    assertGe(data, 2, 'test_execve');
    assertInStr("  I am test_echo.", data, 'test_execve');
    assertInStr("execve success.", data, 'test_execve');
}

function evaluateTestClone(data) {
    assertGe(data, 3, 'test_clone');
    assertInStr("  Child says successfully!", data, 'test_clone');
    assertInStr(/pid:\d+/, data, 'test_clone');
    assertInStr("clone process successfully.", data, 'test_clone');
    
}

function evaluateTestClose(data) {
    assertGe(data, 1, 'test_close');
    assertInStr(/  close \d+ success./, data, 'test_close');
}

function evaluateTestDup2(data) {
    assertGe(data, 1, 'test_dup2');
    assertInStr("  from fd 100", data, 'test_dup2');
}

function evaluateTestDup(data) {
    assertGe(data, 1, 'test_dup');
    const res = data[0]?.match(/  new fd is (\d+)./)?.[1];
    if (res) assertNotEqual(data, parseInt(res), 1, 'test_dup');
}

function evaluateTestExit(data) {
    assertGe(data, 1, 'test_exit');
    assertInStr("exit OK.", data, 'test_exit');
}

function evaluateTestFork(data) {
    assertGe(data, 2, 'test_fork');
    assertInStr(/  parent process\. wstatus:\d+/, data, 'test_fork');
    assertInStr("  child process", data, 'test_fork');
}

function evaluateTestFstat(data) {
    assertGe(data, 2, 'test_fstat');
    const res1 = data[0]?.match(/fstat ret: (\d+)/)?.[1];
    if (res1) assertEqual(data, res1, "0", 'test_fstat');
    const res2 = data[1]?.match(/fstat: dev: \d+, inode: \d+, mode: \d+, nlink: (\d+), size: \d+, atime: \d+, mtime: \d+, ctime: \d+/)?.[1];
    if (res2) assertEqual(data, res2, "1", 'test_fstat');
}

function evaluateTestGetcwd(data) {
    assertGe(data, 1, 'test_getcwd');
    assertInStr("getcwd: (.+) successfully!", data, 'test_getcwd');
}

function evaluateTestGetdents(data) {
    assertGe(data, 4, 'test_getdents');
    const r1 = data[0]?.match(/open fd:(\d+)/)?.[1];
    if (r1) assertGreat(data, parseInt(r1), 1, 'test_getdents');
    const r2 = data[1]?.match(/getdents fd:(\d+)/)?.[1];
    if (r2) assertGreat(data, parseInt(r2), 1, 'test_getdents');
    assertGreat(data, data[3].length, 1, 'test_getdents');
    assertInStr("getdents success.", data, 'test_getdents');
}

function evaluateTestGetpid(data) {
    assertGe(data, 2, 'test_getpid');
    assertInStr("getpid success.", data, 'test_getpid');
    const r = data[1]?.match(/pid = (\d+)/)?.[1];
    if (r) assertGreat(data, parseInt(r), 0, 'test_getpid');
}

function evaluateTestGetppid(data) {
    assertGe(data, 1, 'test_getppid');
    assertIn("  getppid success. ppid : ", data[0], 'test_getppid');
}

function evaluateTestGettimeofday(data) {
    assertGe(data, 3, 'test_gettimeofday');
    assertIn("gettimeofday success.", data, 'test_gettimeofday');
    const res = data[2]?.match(/interval: (\d+)/)?.[1];
    if (res) assertGreat(data, parseInt(res), 0, 'test_gettimeofday');
}

function evaluateTestMkdir(data) {
    assertGe(data, 2, 'test_mkdir');
    assertIn("mkdir ret:", data[0], 'test_mkdir');
    assertIn("  mkdir success.", data[1], 'test_mkdir');
}

function evaluateTestMmap(data) {
    assertGe(data, 2, 'test_mmap');
    const r = data[0]?.match(/file len: (\d+)/)?.[1];
    if (r) assertEqual(data, parseInt(r), 27, 'test_mmap');
    assertIn("mmap content:   Hello, mmap successfully!", data, 'test_mmap');
}

function evaluateTestMount(data) {
    assertGe(data, 4, 'test_mount');
    const r = data[0]?.match(/Mounting dev:(.+) to .\/mnt/)?.[1];
    if (r) assertEqual(data, r.length > 0, true, 'test_mount');
    assertIn("mount return: 0", data, 'test_mount');
    assertIn("mount successfully", data, 'test_mount');
    assertIn("umount return: 0", data, 'test_mount');
}

function evaluateTestMunmap(data) {
    assertGe(data, 3, 'test_munmap');
    const r = data[0]?.match(/file len: (\d+)/)?.[1];
    if (r) assertEqual(data, parseInt(r), 27, 'test_munmap');
    assertIn("munmap return: 0", data, 'test_munmap');
    assertIn("munmap successfully!", data, 'test_munmap');
}

function evaluateTestOpen(data) {
    assertGe(data, 2, 'test_open');
    assertIn("Hi, this is a text file.", data[0], 'test_open');
    assertIn("syscalls testing success!", data[1], 'test_open');
}

function evaluateTestOpenat(data) {
    assertGe(data, 3, 'test_openat');
    const r = data[0]?.match(/open dir fd: (\d+)/)?.[1];
    if (r) assertGreat(data, parseInt(r), 1, 'test_openat');
    const r1 = data[1]?.match(/openat fd: (\d+)/)?.[1];
    if (r1 && r) assertGreat(data, parseInt(r1), parseInt(r), 'test_openat');
    assertIn("openat success.", data, 'test_openat');
}

function evaluateTestPipe(data) {
    assertGe(data, 3, 'test_pipe');
    let cpid0 = data.some(line => line === "cpid: 0");
    let cpid1 = data.some(line => /cpid: (\d+)/.test(line) && parseInt(line.match(/cpid: (\d+)/)[1]) > 0);
    assertEqual(data, cpid0, true, 'test_pipe');
    assertEqual(data, cpid1, true, 'test_pipe');
    assertIn("  Write to pipe successfully.", data, 'test_pipe');
}

function evaluateTestRead(data) {
    assertGe(data, 2, 'test_read');

    assertIn("Hi, this is a text file.", data, 'test_read');
    assertIn("syscalls testing success!", data[1], 'test_read');
}

function evaluateTestSleep(data) {
    assertGe(data, 1, 'test_sleep');
    assertIn("sleep success.", data, 'test_sleep');
}

function evaluateTestTimes(data) {
    assertGe(data, 2, 'test_times');
    assertIn("mytimes success", data, 'test_times');
    const r = data[1]?.match(/\{tms_utime:(.+), tms_stime:(.+), tms_cutime:(.+), tms_cstime:(.+)\}/)?.slice(1);
    if (r) {
        assertGreat(data, parseInt(r[0]), 0, 'test_times');
        assertGreat(data, parseInt(r[1]), 0, 'test_times');
        assertGreat(data, parseInt(r[2]), 0, 'test_times');
        assertGreat(data, parseInt(r[3]), 0, 'test_times');
    }
}

function evaluateTestUmount(data) {
    assertGe(data, 4, 'test_umount');
    const r = data[0]?.match(/Mounting dev:(.+) to .\/mnt/)?.[1];
    if (r) assertEqual(data, r.length > 0, true, 'test_umount');
    assertEqual(data, 1, "mount return: 0", 'test_umount');
    assertIn("mount return: 0", data, 'test_umount');
    assertIn("umount success.", data, 'test_umount');
    assertIn("return: 0", data, 'test_umount');
}

function evaluateTestUname(data) {
    assertGe(data, 1, 'test_uname');
    assertIn("Uname: ", data[0], 'test_uname');
}

function evaluateTestUnlink(data) {
    assertGe(data, 1, 'test_unlink');
    assertIn("unlink success!", data[0], 'test_unlink');
}

function evaluateTestWait(data) {
    assertGe(data, 3, 'test_wait');
    assertEqual(data, 0, "This is child process", 'test_wait');
    assertIn("wait child success.", data, 'test_wait');
    assertIn("This is child process", data, 'test_wait');
    assertIn("wstatus: 0", data, 'test_wait');
}

function evaluateTestWaitpid(data) {
    assertGe(data, 3, 'test_waitpid');
    assertIn("waitpid successfully.", data, 'test_waitpid');
    assertIn("wstatus: 3", data, 'test_waitpid');
    assertIn("This is child process", data, 'test_waitpid');
}

function evaluateTestWrite(data) {
    assertGe(data, 1, 'test_write');
    assertIn("Hello operating system contest.", data, 'test_write');
}

function evaluateTestYield(data) {
    assertGe(data, 15, 'test_yield');
    const lst = data.join('');
    const cnt = { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0 };
    for (let c of lst) {
        if (['0', '1', '2', '3', '4'].includes(c)) cnt[c]++;
    }
    
    assertGreat(data, cnt['0'], 3, 'test_yield');
    assertGreat(data, cnt['1'], 3, 'test_yield');
    assertGreat(data, cnt['2'], 3, 'test_yield');
}

// Main judge function
function judge(outputFile) {
    const pat = /========== START (.+) ==========/;
    let start = outputFile.indexOf('START basic-musl');
    if(start == -1) return points;
    let end = outputFile.indexOf('END basic-musl', start);
    if(end == -1) return points;
    outputFile = outputFile.substring(start + 'START basic-musl'.length, end);
    while (true) {
        const startMatch = outputFile.match(pat);
        if (!startMatch) break;
        const testName = startMatch[1];
        const start = outputFile.indexOf(startMatch[0]);
        let end = outputFile.indexOf(`========== END ${testName}`, start);
        if(testName === 'test_execve') {
            end = outputFile.indexOf(`========== END main`, start);
        }
        if (end === -1) {
            continue;
        }
        let testOutputstr = outputFile.substring(start + startMatch[0].length, end).replace(/\r/g, '');
        console.log(testOutputstr);
        const testOutput = testOutputstr
        .split('\n')
        .filter(line => line)
        .map(line => line.startsWith(',') ? line.substring(1) : line);
        console.log(testOutput);
        switch (testName) {
            case 'test_brk': evaluateTestBrk(testOutput); break;
            case 'test_chdir': evaluateTestChdir(testOutput); break;
            case 'test_clone': evaluateTestClone(testOutput); break;
            case 'test_close': evaluateTestClose(testOutput); break;
            case 'test_dup2': evaluateTestDup2(testOutput); break;
            case 'test_dup': evaluateTestDup(testOutput); break;
            case 'test_execve': evaluateTestExecve(testOutput); break;
            case 'test_exit': evaluateTestExit(testOutput); break;
            case 'test_fork': evaluateTestFork(testOutput); break;
            case 'test_fstat': evaluateTestFstat(testOutput); break;
            case 'test_getcwd': evaluateTestGetcwd(testOutput); break;
            case 'test_getdents': evaluateTestGetdents(testOutput); break;
            case 'test_getpid': evaluateTestGetpid(testOutput); break;
            case 'test_getppid': evaluateTestGetppid(testOutput); break;
            case 'test_gettimeofday': evaluateTestGettimeofday(testOutput); break;
            case 'test_mkdir': evaluateTestMkdir(testOutput); break;
            case 'test_mmap': evaluateTestMmap(testOutput); break;
            case 'test_mount': evaluateTestMount(testOutput); break;
            case 'test_munmap': evaluateTestMunmap(testOutput); break;
            case 'test_open': evaluateTestOpen(testOutput); break;
            case 'test_openat': evaluateTestOpenat(testOutput); break;
            case 'test_pipe': evaluateTestPipe(testOutput); break;
            case 'test_read': evaluateTestRead(testOutput); break;
            case 'test_sleep': evaluateTestSleep(testOutput); break;
            case 'test_times': evaluateTestTimes(testOutput); break;
            case 'test_umount': evaluateTestUmount(testOutput); break;
            case 'test_uname': evaluateTestUname(testOutput); break;
            case 'test_unlink': evaluateTestUnlink(testOutput); break;
            case 'test_wait': evaluateTestWait(testOutput); break;
            case 'test_waitpid': evaluateTestWaitpid(testOutput); break;
            case 'test_write': evaluateTestWrite(testOutput); break;
            case 'test_yield': evaluateTestYield(testOutput); break;
            default: break;
        }
        if(points[testName][0] === points[testName][1]) {
            points[testName][0] = 1;
        }else{
            points[testName][0] = 0;
        }
        points[testName][1] = 1;
        outputFile = outputFile.substring(end);
    }
    return points;
}


module.exports.judge = judge;