// Define the points structure similar to the Python runner, mapping test names to [pass, total]
let points = {
    'glibc test_brk': [0, 3],
    'glibc test_chdir': [0, 3],
    'glibc test_clone': [0, 4],
    'glibc test_close': [0, 2],
    'glibc test_dup2': [0, 2],
    'glibc test_dup': [0, 2],
    'glibc test_execve': [0, 3],
    'glibc test_exit': [0, 2],
    'glibc test_fork': [0, 3],
    'glibc test_fstat': [0, 3],
    'glibc test_getcwd': [0, 2],
    'glibc test_getdents': [0, 5],
    'glibc test_getpid': [0, 3],
    'glibc test_getppid': [0, 2],
    'glibc test_gettimeofday': [0, 3],
    'glibc test_mkdir': [0, 3],
    'glibc test_mmap': [0, 3],
    'glibc test_mount': [0, 5],
    'glibc test_munmap': [0, 4],
    'glibc test_open': [0, 3],
    'glibc test_openat': [0, 4],
    'glibc test_pipe': [0, 4],
    'glibc test_read': [0, 3],
    'glibc test_sleep': [0, 2],
    'glibc test_times': [0, 6],
    'glibc test_umount': [0, 5],
    'glibc test_uname': [0, 2],
    'glibc test_unlink': [0, 2],
    'glibc test_wait': [0, 4],
    'glibc test_waitpid': [0, 4],
    'glibc test_write': [0, 2],
    'glibc test_yield': [0, 4]
};

// Base assertion utility function
function assertUtil(testFn, data, args, expectedPass, testName, pointsKey) {
    const result = testFn(data, ...args);
    if (result === expectedPass) {
        pointsKey = 'glibc ' + pointsKey;
        points[pointsKey][0] += 1; // Increment pass count if assertion passes
    }
}

// Specific assertion functions
function assertGe(data, minLength, testName) {
    assertUtil((d, len) => d.length >= len, data, [minLength], true, testName, testName);
}

function assertEqual(data, value, expected, testName) {
    assertUtil((d, idx, val) => d[idx] === val, data, [value, expected], true, testName, testName);
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
    if (r1) assertEqual(data, 0, "0", 'test_chdir');
    assertIn("test_chdir", data[1], 'test_chdir');
}

function evaluateTestExecve(data) {
    assertGe(data, 2, 'test_execve');

    assertEqual(data, 0, "  I am test_echo.", 'test_execve');
    assertEqual(data, 1, "execve success.", 'test_execve');
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
    assertEqual(data, 0, "  from fd 100", 'test_dup2');
}

function evaluateTestDup(data) {
    assertGe(data, 1, 'test_dup');
    const res = data[0]?.match(/  new fd is (\d+)./)?.[1];
    if (res) assertNotEqual(data, parseInt(res), 1, 'test_dup');
}

function evaluateTestExit(data) {
    assertGe(data, 1, 'test_exit');
    assertEqual(data, 0, "exit OK.", 'test_exit');
}

function evaluateTestFork(data) {
    assertGe(data, 2, 'test_fork');
    assertInStr(/  parent process\. wstatus:\d+/, data, 'test_fork');
    assertInStr("  child process", data, 'test_fork');
}

function evaluateTestFstat(data) {
    assertGe(data, 2, 'test_fstat');
    const res1 = data[0]?.match(/fstat ret: (\d+)/)?.[1];
    if (res1) assertEqual(data, 0, "0", 'test_fstat');
    const res2 = data[1]?.match(/fstat: dev: \d+, inode: \d+, mode: \d+, nlink: (\d+), size: \d+, atime: \d+, mtime: \d+, ctime: \d+/)?.[1];
    if (res2) assertEqual(data, 1, "1", 'test_fstat');
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
    assertEqual(data, 2, "getdents success.", 'test_getdents');
}

function evaluateTestGetpid(data) {
    assertGe(data, 2, 'test_getpid');
    assertEqual(data, 0, "getpid success.", 'test_getpid');
    const r = data[1]?.match(/pid = (\d+)/)?.[1];
    if (r) assertGreat(data, parseInt(r), 0, 'test_getpid');
}

function evaluateTestGetppid(data) {
    assertGe(data, 1, 'test_getppid');
    assertIn("  getppid success. ppid : ", data[0], 'test_getppid');
}

function evaluateTestGettimeofday(data) {
    assertGe(data, 3, 'test_gettimeofday');
    assertEqual(data, 0, "gettimeofday success.", 'test_gettimeofday');
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
    if (r) assertGe(data, parseInt(r), 27, 'test_mmap');
    assertEqual(data, 1, "mmap content:   Hello, mmap successfully!", 'test_mmap');
}

function evaluateTestMount(data) {
    assertGe(data, 4, 'test_mount');
    const r = data[0]?.match(/Mounting dev:(.+) to .\/mnt/)?.[1];
    if (r) assertEqual(data, r.length > 0, true, 'test_mount');
    assertEqual(data, 1, "mount return: 0", 'test_mount');
    assertEqual(data, 2, "mount successfully", 'test_mount');
    assertEqual(data, 3, "umount return: 0", 'test_mount');
}

function evaluateTestMunmap(data) {
    assertGe(data, 3, 'test_munmap');
    const r = data[0]?.match(/file len: (\d+)/)?.[1];
    if (r) assertGe(data, parseInt(r), 27, 'test_munmap');
    assertEqual(data, 1, "munmap return: 0", 'test_munmap');
    assertEqual(data, 2, "munmap successfully!", 'test_munmap');
}

function evaluateTestOpen(data) {
    assertGe(data, 2, 'test_open');
    assertEqual(data, 0, "Hi, this is a text file.", 'test_open');
    assertEqual(data, 1, "syscalls testing success!", 'test_open');
}

function evaluateTestOpenat(data) {
    assertGe(data, 3, 'test_openat');
    const r = data[0]?.match(/open dir fd: (\d+)/)?.[1];
    if (r) assertGreat(data, parseInt(r), 1, 'test_openat');
    const r1 = data[1]?.match(/openat fd: (\d+)/)?.[1];
    if (r1 && r) assertGreat(data, parseInt(r1), parseInt(r), 'test_openat');
    assertEqual(data, 2, "openat success.", 'test_openat');
}

function evaluateTestPipe(data) {
    assertGe(data, 3, 'test_pipe');
    let cpid0 = data.some(line => line === "cpid: 0");
    let cpid1 = data.some(line => /cpid: (\d+)/.test(line) && parseInt(line.match(/cpid: (\d+)/)[1]) > 0);
    assertEqual(data, cpid0, true, 'test_pipe');
    assertEqual(data, cpid1, true, 'test_pipe');
    assertEqual(data, 2, "  Write to pipe successfully.", 'test_pipe');
}

function evaluateTestRead(data) {
    assertGe(data, 2, 'test_read');
    assertEqual(data, 0, "Hi, this is a text file.", 'test_read');
    assertEqual(data, 1, "syscalls testing success!", 'test_read');
}

function evaluateTestSleep(data) {
    assertGe(data, 1, 'test_sleep');
    assertEqual(data, 0, "sleep success.", 'test_sleep');
}

function evaluateTestTimes(data) {
    assertGe(data, 2, 'test_times');
    assertEqual(data, 0, "mytimes success", 'test_times');
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
    assertEqual(data, 2, "umount success.", 'test_umount');
    assertEqual(data, 3, "return: 0", 'test_umount');
}

function evaluateTestUname(data) {
    assertGe(data, 1, 'test_uname');
    assertIn("Uname: ", data[0], 'test_uname');
}

function evaluateTestUnlink(data) {
    assertGe(data, 1, 'test_unlink');
    assertEqual(data, 0, "  unlink success!", 'test_unlink');
}

function evaluateTestWait(data) {
    assertGe(data, 3, 'test_wait');
    assertEqual(data, 0, "This is child process", 'test_wait');
    assertEqual(data, 1, "wait child success.", 'test_wait');
    assertEqual(data, 2, "wstatus: 0", 'test_wait');
}

function evaluateTestWaitpid(data) {
    assertGe(data, 3, 'test_waitpid');
    assertEqual(data, 0, "This is child process", 'test_waitpid');
    assertEqual(data, 1, "waitpid successfully.", 'test_waitpid');
    assertEqual(data, 2, "wstatus: 3", 'test_waitpid');
}

function evaluateTestWrite(data) {
    assertGe(data, 1, 'test_write');
    assertEqual(data, 0, "Hello operating system contest.", 'test_write');
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
    let start = outputFile.indexOf('START basic-glibc');
    if(start == -1) return points;
    let end = outputFile.indexOf('END basic-glibc', start);
    if(end == -1) return points;
    outputFile = outputFile.substring(start + 'START basic-glibc'.length, end);
    console.log(outputFile);
    while (true) {
        const startMatch = outputFile.match(pat);
        if (!startMatch) break;
        const testName = startMatch[1];
        const start = outputFile.indexOf(startMatch[0]);
        const end = outputFile.indexOf(`========== END ${testName}`, start);
        if (end === -1) {
            end = outputFile.indexOf(`========== start`, start)
            if (end === -1){
                break;
            }
        }
        const testOutput = outputFile.substring(start + startMatch[0].length, end)
            .split('\n')
            .map(line => line.trim())
            .filter(line => line);
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
        outputFile = outputFile.substring(end);
    }
    return points;
}


module.exports.judge = judge;