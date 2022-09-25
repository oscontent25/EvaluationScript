let points = {
    // static 结果处理
    'Simple syscall': [0, 1],
    'Simple read': [0, 1],
    'Simple write': [0, 1],
    'Simple stat': [0, 1],
    'Simple fstat': [0, 1],
    'Simple open/close': [0, 1],
    'Select on 100 fd\'s': [0, 1],
    'Signal handler installation': [0, 1],
    'Signal handler overhead': [0, 1],
    'Protection fault': [0, 1],
    'Pipe latency': [0, 1],
    'Process fork+exit': [0, 1],
    'Process fork+execve': [0, 1],
    'Process fork+/bin/sh -c': [0, 1],
    'File /var/tmp/XXX write bandwidth': [0, 1],
    'Pagefaults on /var/tmp/XXX': [0, 1],
    'lat_mmap -P 1 512k /var/tmp/XXX': [0, 1], // 暂时做位置匹配
    'lat_fs 0k': [0, 1],
    'lat_fs 1k': [0, 1],
    'lat_fs 4k': [0, 1],
    'lat_fs 10k': [0, 1],
    'Pipe bandwidth': [0, 1],
    'bw_file_rd -P 1 512k io_only /var/tmp/XXX': [0, 1],
    'bw_file_rd -P 1 512k open2close /var/tmp/XXX': [0, 1],
    'bw_mmap_rd -P 1 512k mmap_only /var/tmp/XXX': [0, 1],
    'bw_mmap_rd -P 1 512k open2close /var/tmp/XXX': [0, 1],
    'lat_ctx 2': [0, 1],
    'lat_ctx 4': [0, 1],
    'lat_ctx 8': [0, 1],
    'lat_ctx 16': [0, 1],
    'lat_ctx 32': [0, 1],
    'lat_ctx 64': [0, 1],
    'lat_ctx 96': [0, 1],
}

function judge(outputFile) {
    outputFile = outputFile.replaceAll('\r\n', '\n').replaceAll('\r', '\n');
    let outputIndex = outputFile.indexOf('latency measurements');
    outputFile.substring(outputIndex);

    outputFile.trim().split('\n').forEach((value, index, array) => {
        if(value.endsWith('microseconds')) {
            let splitIndex = value.indexOf(':');
            let name = value.substring(0, splitIndex).trim();
            let result = value.substring(splitIndex + 1).replace('microseconds', '').trim();

            if(points[name]) {
                let timeSpent = parseFloat(result);
                if(timeSpent > 0) {
                    points[name][0] = points[name][1];
                }
            }
        } else if(value.endsWith('/sec')) {
            let splitIndex = value.indexOf(':');
            let name = value.substring(0, splitIndex).trim();

            if(points[name]) {
                points[name][0] = points[name][1];
            }
        } else if(value.startsWith('0k')) {
            let values = value.split(/\s+/);
            if(values.length != 4) return;
            for(let i = 1; i < values.length; i++) {
                if(values[i] == 0) return;
            }
            points['lat_fs 0k'][0] = points['lat_fs 0k'][1];
        } else if(value.startsWith('1k')) {
            let values = value.split(/\s+/);
            if(values.length != 4) return;
            for(let i = 1; i < values.length; i++) {
                if(values[i] == 0) return;
            }
            points['lat_fs 1k'][0] = points['lat_fs 1k'][1];
        } else if(value.startsWith('4k')) {
            let values = value.split(/\s+/);
            if(values.length != 4) return;
            for(let i = 1; i < values.length; i++) {
                if(values[i] == 0) return;
            }
            points['lat_fs 4k'][0] = points['lat_fs 4k'][1];
        } else if(value.startsWith('10k')) {
            let values = value.split(/\s+/);
            if(values.length != 4) return;
            for(let i = 1; i < values.length; i++) {
                if(values[i] == 0) return;
            }
            points['lat_fs 10k'][0] = points['lat_fs 10k'][1];
        } else if(value.startsWith('lat_mmap -P 1 512k /var/tmp/XXX')) {
            let splitIndex = value.indexOf(':');
            let name = value.substring(0, splitIndex).trim();
            let result = value.substring(splitIndex + 1)

            if(points[name]) {
                let timeSpentArray = result.trim().split(/\s+/);
                if(timeSpentArray.length == 2) {
                    points[name][0] = points[name][1];
                }
            }
        } else if(value.startsWith('bw_file_rd -P 1 512k io_only /var/tmp/XXX')) {
            let splitIndex = value.indexOf(':');
            let name = value.substring(0, splitIndex).trim();
            let result = value.substring(splitIndex + 1)

            if(points[name]) {
                let timeSpentArray = result.trim().split(/\s+/);
                if(timeSpentArray.length == 2) {
                    points[name][0] = points[name][1];
                }
            }
        } else if(value.startsWith('bw_file_rd -P 1 512k open2close /var/tmp/XXX')) {
            let splitIndex = value.indexOf(':');
            let name = value.substring(0, splitIndex).trim();
            let result = value.substring(splitIndex + 1)

            if(points[name]) {
                let timeSpentArray = result.trim().split(/\s+/);
                if(timeSpentArray.length == 2) {
                    points[name][0] = points[name][1];
                }
            }
        } else if(value.startsWith('bw_mmap_rd -P 1 512k mmap_only /var/tmp/XXX')) {
            let splitIndex = value.indexOf(':');
            let name = value.substring(0, splitIndex).trim();
            let result = value.substring(splitIndex + 1)

            if(points[name]) {
                let timeSpentArray = result.trim().split(/\s+/);
                if(timeSpentArray.length == 2) {
                    points[name][0] = points[name][1];
                }
            }
        } else if(value.startsWith('bw_mmap_rd -P 1 512k open2close /var/tmp/XXX')) {
            let splitIndex = value.indexOf(':');
            let name = value.substring(0, splitIndex).trim();
            let result = value.substring(splitIndex + 1)
            if(points[name]) {
                let timeSpentArray = result.trim().split(/\s+/);
                if(timeSpentArray.length == 2) {
                    points[name][0] = points[name][1];
                }
            }
        } else {
            if(value.startsWith('2') || value.startsWith('4') || value.startsWith('8') || value.startsWith('16')
            || value.startsWith('24') || value.startsWith('32') || value.startsWith('64') || value.startsWith('96')) {
                let values = value.split(/\s+/);
                if(values.length == 2 && points[`lat_ctx ${values[0]}`]) {
                    points[`lat_ctx ${values[0]}`][0] = points[`lat_ctx ${values[0]}`][1];
                }
            }        
        }
    })
    return points;
}

module.exports.judge = judge;