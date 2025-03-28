let points = {
    // static 结果处理
    'musl entry-static.exe argv': [0, 1],
    'musl entry-static.exe basename': [0, 1],
    'musl entry-static.exe clocale_mbfuncs': [0, 1],
    'musl entry-static.exe clock_gettime': [0, 1],
    'musl entry-static.exe crypt': [0, 1],
    'musl entry-static.exe dirname': [0, 1],
    'musl entry-static.exe env': [0, 1],
    'musl entry-static.exe fdopen': [0, 1],
    'musl entry-static.exe fnmatch': [0, 1],
    'musl entry-static.exe fscanf': [0, 1],
    'musl entry-static.exe fwscanf': [0, 1],
    'musl entry-static.exe iconv_open': [0, 1],
    'musl entry-static.exe inet_pton': [0, 1],
    'musl entry-static.exe mbc': [0, 1],
    'musl entry-static.exe memstream': [0, 1],
    'musl entry-static.exe pthread_cancel_points': [0, 1],
    'musl entry-static.exe pthread_cancel': [0, 1],
    'musl entry-static.exe pthread_cond': [0, 1],
    'musl entry-static.exe pthread_tsd': [0, 1],
    'musl entry-static.exe qsort': [0, 1],
    'musl entry-static.exe random': [0, 1],
    'musl entry-static.exe search_hsearch': [0, 1],
    'musl entry-static.exe search_insque': [0, 1],
    'musl entry-static.exe search_lsearch': [0, 1],
    'musl entry-static.exe search_tsearch': [0, 1],
    'musl entry-static.exe setjmp': [0, 1],
    'musl entry-static.exe snprintf': [0, 1],
    'musl entry-static.exe socket': [0, 1],
    'musl entry-static.exe sscanf': [0, 1],
    'musl entry-static.exe sscanf_long': [0, 1],
    'musl entry-static.exe stat': [0, 1],
    'musl entry-static.exe strftime': [0, 1],
    'musl entry-static.exe string': [0, 1],
    'musl entry-static.exe string_memcpy': [0, 1],
    'musl entry-static.exe string_memmem': [0, 1],
    'musl entry-static.exe string_memset': [0, 1],
    'musl entry-static.exe string_strchr': [0, 1],
    'musl entry-static.exe string_strcspn': [0, 1],
    'musl entry-static.exe string_strstr': [0, 1],
    'musl entry-static.exe strptime': [0, 1],
    'musl entry-static.exe strtod': [0, 1],
    'musl entry-static.exe strtod_simple': [0, 1],
    'musl entry-static.exe strtof': [0, 1],
    'musl entry-static.exe strtol': [0, 1],
    'musl entry-static.exe strtold': [0, 1],
    'musl entry-static.exe swprintf': [0, 1],
    'musl entry-static.exe tgmath': [0, 1],
    'musl entry-static.exe time': [0, 1],
    'musl entry-static.exe tls_align': [0, 1],
    'musl entry-static.exe udiv': [0, 1],
    'musl entry-static.exe ungetc': [0, 1],
    'musl entry-static.exe utime': [0, 1],
    'musl entry-static.exe wcsstr': [0, 1],
    'musl entry-static.exe wcstol': [0, 1],
    'musl entry-static.exe pleval': [0, 1],
    'musl entry-static.exe daemon_failure': [0, 1],
    'musl entry-static.exe dn_expand_empty': [0, 1],
    'musl entry-static.exe dn_expand_ptr_0': [0, 1],
    'musl entry-static.exe fflush_exit': [0, 1],
    'musl entry-static.exe fgets_eof': [0, 1],
    'musl entry-static.exe fgetwc_buffering': [0, 1],
    'musl entry-static.exe fpclassify_invalid_ld80': [0, 1],
    'musl entry-static.exe ftello_unflushed_append': [0, 1],
    'musl entry-static.exe getpwnam_r_crash': [0, 1],
    'musl entry-static.exe getpwnam_r_errno': [0, 1],
    'musl entry-static.exe iconv_roundtrips': [0, 1],
    'musl entry-static.exe inet_ntop_v4mapped': [0, 1],
    'musl entry-static.exe inet_pton_empty_last_field': [0, 1],
    'musl entry-static.exe iswspace_null': [0, 1],
    'musl entry-static.exe lrand48_signextend': [0, 1],
    'musl entry-static.exe lseek_large': [0, 1],
    'musl entry-static.exe malloc_0': [0, 1],
    'musl entry-static.exe mbsrtowcs_overflow': [0, 1],
    'musl entry-static.exe memmem_oob_read': [0, 1],
    'musl entry-static.exe memmem_oob': [0, 1],
    'musl entry-static.exe mkdtemp_failure': [0, 1],
    'musl entry-static.exe mkstemp_failure': [0, 1],
    'musl entry-static.exe printf_1e9_oob': [0, 1],
    'musl entry-static.exe printf_fmt_g_round': [0, 1],
    'musl entry-static.exe printf_fmt_g_zeros': [0, 1],
    'musl entry-static.exe printf_fmt_n': [0, 1],
    'musl entry-static.exe pthread_robust_detach': [0, 1],
    'musl entry-static.exe pthread_cancel_sem_wait': [0, 1],
    'musl entry-static.exe pthread_cond_smasher': [0, 1],
    'musl entry-static.exe pthread_condattr_setclock': [0, 1],
    'musl entry-static.exe pthread_exit_cancel': [0, 1],
    'musl entry-static.exe pthread_once_deadlock': [0, 1],
    'musl entry-static.exe pthread_rwlock_ebusy': [0, 1],
    'musl entry-static.exe putenv_doublefree': [0, 1],
    'musl entry-static.exe regex_backref_0': [0, 1],
    'musl entry-static.exe regex_bracket_icase': [0, 1],
    'musl entry-static.exe regex_ere_backref': [0, 1],
    'musl entry-static.exe regex_escaped_high_byte': [0, 1],
    'musl entry-static.exe regex_negated_range': [0, 1],
    'musl entry-static.exe regexec_nosub': [0, 1],
    'musl entry-static.exe rewind_clear_error': [0, 1],
    'musl entry-static.exe rlimit_open_files': [0, 1],
    'musl entry-static.exe scanf_bytes_consumed': [0, 1],
    'musl entry-static.exe scanf_match_literal_eof': [0, 1],
    'musl entry-static.exe scanf_nullbyte_char': [0, 1],
    'musl entry-static.exe setvbuf_unget': [0, 1],
    'musl entry-static.exe sigprocmask_internal': [0, 1],
    'musl entry-static.exe sscanf_eof': [0, 1],
    'musl entry-static.exe statvfs': [0, 1],
    'musl entry-static.exe strverscmp': [0, 1],
    'musl entry-static.exe syscall_sign_extend': [0, 1],
    'musl entry-static.exe uselocale_0': [0, 1],
    'musl entry-static.exe wcsncpy_read_overflow': [0, 1],
    'musl entry-static.exe wcsstr_false_negative': [0, 1],
    // dynamic 结果处理
    'musl entry-dynamic.exe argv': [0 ,1],
    'musl entry-dynamic.exe basename': [0 ,1],
    'musl entry-dynamic.exe clocale_mbfuncs': [0 ,1],
    'musl entry-dynamic.exe clock_gettime': [0 ,1],
    'musl entry-dynamic.exe crypt': [0 ,1],
    'musl entry-dynamic.exe dirname': [0 ,1],
    'musl entry-dynamic.exe dlopen': [0 ,1],
    'musl entry-dynamic.exe env': [0 ,1],
    'musl entry-dynamic.exe fdopen': [0 ,1],
    'musl entry-dynamic.exe fnmatch': [0 ,1],
    'musl entry-dynamic.exe fscanf': [0 ,1],
    'musl entry-dynamic.exe fwscanf': [0 ,1],
    'musl entry-dynamic.exe iconv_open': [0 ,1],
    'musl entry-dynamic.exe inet_pton': [0 ,1],
    'musl entry-dynamic.exe mbc': [0 ,1],
    'musl entry-dynamic.exe memstream': [0 ,1],
    'musl entry-dynamic.exe pthread_cancel_points': [0 ,1],
    'musl entry-dynamic.exe pthread_cancel': [0 ,1],
    'musl entry-dynamic.exe pthread_cond': [0 ,1],
    'musl entry-dynamic.exe pthread_tsd': [0 ,1],
    'musl entry-dynamic.exe qsort': [0 ,1],
    'musl entry-dynamic.exe random': [0 ,1],
    'musl entry-dynamic.exe search_hsearch': [0 ,1],
    'musl entry-dynamic.exe search_insque': [0 ,1],
    'musl entry-dynamic.exe search_lsearch': [0 ,1],
    'musl entry-dynamic.exe search_tsearch': [0 ,1],
    'musl entry-dynamic.exe sem_init': [0 ,1],
    'musl entry-dynamic.exe setjmp': [0 ,1],
    'musl entry-dynamic.exe snprintf': [0 ,1],
    'musl entry-dynamic.exe socket': [0 ,1],
    'musl entry-dynamic.exe sscanf': [0 ,1],
    'musl entry-dynamic.exe sscanf_long': [0 ,1],
    'musl entry-dynamic.exe stat': [0 ,1],
    'musl entry-dynamic.exe strftime': [0 ,1],
    'musl entry-dynamic.exe string': [0 ,1],
    'musl entry-dynamic.exe string_memcpy': [0 ,1],
    'musl entry-dynamic.exe string_memmem': [0 ,1],
    'musl entry-dynamic.exe string_memset': [0 ,1],
    'musl entry-dynamic.exe string_strchr': [0 ,1],
    'musl entry-dynamic.exe string_strcspn': [0 ,1],
    'musl entry-dynamic.exe string_strstr': [0 ,1],
    'musl entry-dynamic.exe strptime': [0 ,1],
    'musl entry-dynamic.exe strtod': [0 ,1],
    'musl entry-dynamic.exe strtod_simple': [0 ,1],
    'musl entry-dynamic.exe strtof': [0 ,1],
    'musl entry-dynamic.exe strtol': [0 ,1],
    'musl entry-dynamic.exe strtold': [0 ,1],
    'musl entry-dynamic.exe swprintf': [0 ,1],
    'musl entry-dynamic.exe tgmath': [0 ,1],
    'musl entry-dynamic.exe time': [0 ,1],
    'musl entry-dynamic.exe tls_init': [0 ,1],
    'musl entry-dynamic.exe tls_local_exec': [0 ,1],
    'musl entry-dynamic.exe udiv': [0 ,1],
    'musl entry-dynamic.exe ungetc': [0 ,1],
    'musl entry-dynamic.exe utime': [0 ,1],
    'musl entry-dynamic.exe wcsstr': [0 ,1],
    'musl entry-dynamic.exe wcstol': [0 ,1],
    'musl entry-dynamic.exe daemon_failure': [0 ,1],
    'musl entry-dynamic.exe dn_expand_empty': [0 ,1],
    'musl entry-dynamic.exe dn_expand_ptr_0': [0 ,1],
    'musl entry-dynamic.exe fflush_exit': [0 ,1],
    'musl entry-dynamic.exe fgets_eof': [0 ,1],
    'musl entry-dynamic.exe fgetwc_buffering': [0 ,1],
    'musl entry-dynamic.exe fpclassify_invalid_ld80': [0 ,1],
    'musl entry-dynamic.exe ftello_unflushed_append': [0 ,1],
    'musl entry-dynamic.exe getpwnam_r_crash': [0 ,1],
    'musl entry-dynamic.exe getpwnam_r_errno': [0 ,1],
    'musl entry-dynamic.exe iconv_roundtrips': [0 ,1],
    'musl entry-dynamic.exe inet_ntop_v4mapped': [0 ,1],
    'musl entry-dynamic.exe inet_pton_empty_last_field': [0 ,1],
    'musl entry-dynamic.exe iswspace_null': [0 ,1],
    'musl entry-dynamic.exe lrand48_signextend': [0 ,1],
    'musl entry-dynamic.exe lseek_large': [0 ,1],
    'musl entry-dynamic.exe malloc_0': [0 ,1],
    'musl entry-dynamic.exe mbsrtowcs_overflow': [0 ,1],
    'musl entry-dynamic.exe memmem_oob_read': [0 ,1],
    'musl entry-dynamic.exe memmem_oob': [0 ,1],
    'musl entry-dynamic.exe mkdtemp_failure': [0 ,1],
    'musl entry-dynamic.exe mkstemp_failure': [0 ,1],
    'musl entry-dynamic.exe printf_1e9_oob': [0 ,1],
    'musl entry-dynamic.exe printf_fmt_g_round': [0 ,1],
    'musl entry-dynamic.exe printf_fmt_g_zeros': [0 ,1],
    'musl entry-dynamic.exe printf_fmt_n': [0 ,1],
    'musl entry-dynamic.exe pthread_robust_detach': [0 ,1],
    'musl entry-dynamic.exe pthread_cond_smasher': [0 ,1],
    'musl entry-dynamic.exe pthread_condattr_setclock': [0 ,1],
    'musl entry-dynamic.exe pthread_exit_cancel': [0 ,1],
    'musl entry-dynamic.exe pthread_once_deadlock': [0 ,1],
    'musl entry-dynamic.exe pthread_rwlock_ebusy': [0 ,1],
    'musl entry-dynamic.exe putenv_doublefree': [0 ,1],
    'musl entry-dynamic.exe regex_backref_0': [0 ,1],
    'musl entry-dynamic.exe regex_bracket_icase': [0 ,1],
    'musl entry-dynamic.exe regex_ere_backref': [0 ,1],
    'musl entry-dynamic.exe regex_escaped_high_byte': [0 ,1],
    'musl entry-dynamic.exe regex_negated_range': [0 ,1],
    'musl entry-dynamic.exe regexec_nosub': [0 ,1],
    'musl entry-dynamic.exe rewind_clear_error': [0 ,1],
    'musl entry-dynamic.exe rlimit_open_files': [0 ,1],
    'musl entry-dynamic.exe scanf_bytes_consumed': [0 ,1],
    'musl entry-dynamic.exe scanf_match_literal_eof': [0 ,1],
    'musl entry-dynamic.exe scanf_nullbyte_char': [0 ,1],
    'musl entry-dynamic.exe setvbuf_unget': [0 ,1],
    'musl entry-dynamic.exe sigprocmask_internal': [0 ,1],
    'musl entry-dynamic.exe sscanf_eof': [0 ,1],
    'musl entry-dynamic.exe statvfs': [0 ,1],
    'musl entry-dynamic.exe strverscmp': [0 ,1],
    'musl entry-dynamic.exe syscall_sign_extend': [0 ,1],
    'musl entry-dynamic.exe tls_get_new_dtv': [0 ,1],
    'musl entry-dynamic.exe uselocale_0': [0 ,1],
    'musl entry-dynamic.exe wcsncpy_read_overflow': [0 ,1],
    'musl entry-dynamic.exe wcsstr_false_negative': [0 ,1],
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
    let current = '';
    let currentStatus = false;
    let start = outputFile.indexOf('START libctest-musl');
    if(start == -1) return;
    let end = outputFile.indexOf('END libctest-musl', start);
    if(end == -1) return;
    outputFile = outputFile.substring(start + 'START libctest-musl'.length, end);
    outputFile = outputFile.replaceAll('\r\n', '\n').replaceAll('\r', '\n');
    outputFile.trim().split('\n').forEach((value, index) => {
        if(value.indexOf("========== START ") == 0 && value.endsWith(" ==========")) {
            let title = value.replace("========== START ", "").replace(" ==========", "");
            current = title;
            currentStatus = false;
        } else if(value.indexOf("========== END ") == 0 && value.endsWith(" ==========")) {
            let title = value.replace("========== END ", "").replace(" ==========", "");
            if (title != current) {
                currentStatus = false;
            }
            current = 'musl ' + current;
            if (currentStatus) {
                points[current][0] += 1;
            }else{
                points[current][1] = -1;
            }
        } else {
            if(value == 'Pass!') {
                currentStatus = true;
            }
        }
    })
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