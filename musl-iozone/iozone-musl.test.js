let iozone_baseline = `
iozone throughput write/read measurements
	Iozone: Performance Test of File I/O
	        Version $Revision: 3.506 $
		Compiled for 64 bit mode.
		Build: linux 

	Contributors:William Norcott, Don Capps, Isom Crawford, Kirby Collins
	             Al Slater, Scott Rhine, Mike Wisner, Ken Goss
	             Steve Landherr, Brad Smith, Mark Kelly, Dr. Alain CYR,
	             Randy Dunlap, Mark Montague, Dan Million, Gavin Brebner,
	             Jean-Marc Zucconi, Jeff Blomberg, Benny Halevy, Dave Boone,
	             Erik Habbinga, Kris Strecker, Walter Wong, Joshua Root,
	             Fabrice Bacchella, Zhenghua Xue, Qin Li, Darren Sawyer,
	             Vangel Bojaxhi, Ben England, Vikentsi Lapa,
	             Alexey Skidanov, Sudhir Kumar.

	Run began: Mon Jun 12 12:54:02 2023

	Record Size 1 kB
	File size set to 1024 kB
	Command line used: iozone -t 4 -i 0 -i 1 -r 1k -s 1m
	Output is in kBytes/sec
	Time Resolution = 0.000007 seconds.
	Processor cache size set to 1024 kBytes.
	Processor cache line size set to 32 bytes.
	File stride size set to 17 * record size.
	Throughput test with 4 processes
	Each process writes a 1024 kByte file in 1 kByte records

	Children see throughput for  4 initial writers 	=   13545.93 kB/sec
	Parent sees throughput for  4 initial writers 	=   11624.25 kB/sec
	Min throughput per process 			=    3291.54 kB/sec 
	Max throughput per process 			=    3524.04 kB/sec
	Avg throughput per process 			=    3386.48 kB/sec
	Min xfer 					=     960.00 kB

	Children see throughput for  4 rewriters 	=   28140.14 kB/sec
	Parent sees throughput for  4 rewriters 	=   18228.01 kB/sec
	Min throughput per process 			=    6558.38 kB/sec 
	Max throughput per process 			=    7471.07 kB/sec
	Avg throughput per process 			=    7035.03 kB/sec
	Min xfer 					=     938.00 kB

	Children see throughput for  4 readers 		=   50931.58 kB/sec
	Parent sees throughput for  4 readers 		=   41114.90 kB/sec
	Min throughput per process 			=   12200.35 kB/sec 
	Max throughput per process 			=   13135.64 kB/sec
	Avg throughput per process 			=   12732.90 kB/sec
	Min xfer 					=     940.00 kB

	Children see throughput for 4 re-readers 	=   48204.08 kB/sec
	Parent sees throughput for 4 re-readers 	=   34139.58 kB/sec
	Min throughput per process 			=   10801.74 kB/sec 
	Max throughput per process 			=   13064.75 kB/sec
	Avg throughput per process 			=   12051.02 kB/sec
	Min xfer 					=     883.00 kB



iozone test complete.
iozone throughput random-read measurements
	Iozone: Performance Test of File I/O
	        Version $Revision: 3.506 $
		Compiled for 64 bit mode.
		Build: linux 

	Contributors:William Norcott, Don Capps, Isom Crawford, Kirby Collins
	             Al Slater, Scott Rhine, Mike Wisner, Ken Goss
	             Steve Landherr, Brad Smith, Mark Kelly, Dr. Alain CYR,
	             Randy Dunlap, Mark Montague, Dan Million, Gavin Brebner,
	             Jean-Marc Zucconi, Jeff Blomberg, Benny Halevy, Dave Boone,
	             Erik Habbinga, Kris Strecker, Walter Wong, Joshua Root,
	             Fabrice Bacchella, Zhenghua Xue, Qin Li, Darren Sawyer,
	             Vangel Bojaxhi, Ben England, Vikentsi Lapa,
	             Alexey Skidanov, Sudhir Kumar.

	Run began: Mon Jun 12 12:54:15 2023

	Record Size 1 kB
	File size set to 1024 kB
	Command line used: iozone -t 4 -i 0 -i 2 -r 1k -s 1m
	Output is in kBytes/sec
	Time Resolution = 0.000007 seconds.
	Processor cache size set to 1024 kBytes.
	Processor cache line size set to 32 bytes.
	File stride size set to 17 * record size.
	Throughput test with 4 processes
	Each process writes a 1024 kByte file in 1 kByte records

	Children see throughput for  4 initial writers 	=   13180.57 kB/sec
	Parent sees throughput for  4 initial writers 	=   10159.23 kB/sec
	Min throughput per process 			=    3182.96 kB/sec 
	Max throughput per process 			=    3401.72 kB/sec
	Avg throughput per process 			=    3295.14 kB/sec
	Min xfer 					=     974.00 kB

	Children see throughput for  4 rewriters 	=   27019.84 kB/sec
	Parent sees throughput for  4 rewriters 	=   18318.53 kB/sec
	Min throughput per process 			=    6345.39 kB/sec 
	Max throughput per process 			=    7196.32 kB/sec
	Avg throughput per process 			=    6754.96 kB/sec
	Min xfer 					=     943.00 kB

	Children see throughput for 4 random readers 	=   41679.51 kB/sec
	Parent sees throughput for 4 random readers 	=   32154.24 kB/sec
	Min throughput per process 			=    9572.77 kB/sec 
	Max throughput per process 			=   11082.03 kB/sec
	Avg throughput per process 			=   10419.88 kB/sec
	Min xfer 					=     920.00 kB

	Children see throughput for 4 random writers 	=   25554.45 kB/sec
	Parent sees throughput for 4 random writers 	=   15585.05 kB/sec
	Min throughput per process 			=    5886.12 kB/sec 
	Max throughput per process 			=    7140.81 kB/sec
	Avg throughput per process 			=    6388.61 kB/sec
	Min xfer 					=     847.00 kB



iozone test complete.
iozone throughput read-backwards measurements
	Iozone: Performance Test of File I/O
	        Version $Revision: 3.506 $
		Compiled for 64 bit mode.
		Build: linux 

	Contributors:William Norcott, Don Capps, Isom Crawford, Kirby Collins
	             Al Slater, Scott Rhine, Mike Wisner, Ken Goss
	             Steve Landherr, Brad Smith, Mark Kelly, Dr. Alain CYR,
	             Randy Dunlap, Mark Montague, Dan Million, Gavin Brebner,
	             Jean-Marc Zucconi, Jeff Blomberg, Benny Halevy, Dave Boone,
	             Erik Habbinga, Kris Strecker, Walter Wong, Joshua Root,
	             Fabrice Bacchella, Zhenghua Xue, Qin Li, Darren Sawyer,
	             Vangel Bojaxhi, Ben England, Vikentsi Lapa,
	             Alexey Skidanov, Sudhir Kumar.

	Run began: Mon Jun 12 12:54:32 2023

	Record Size 1 kB
	File size set to 1024 kB
	Command line used: iozone -t 4 -i 0 -i 3 -r 1k -s 1m
	Output is in kBytes/sec
	Time Resolution = 0.000007 seconds.
	Processor cache size set to 1024 kBytes.
	Processor cache line size set to 32 bytes.
	File stride size set to 17 * record size.
	Throughput test with 4 processes
	Each process writes a 1024 kByte file in 1 kByte records

	Children see throughput for  4 initial writers 	=   12570.89 kB/sec
	Parent sees throughput for  4 initial writers 	=    9732.30 kB/sec
	Min throughput per process 			=    2968.10 kB/sec 
	Max throughput per process 			=    3331.39 kB/sec
	Avg throughput per process 			=    3142.72 kB/sec
	Min xfer 					=     952.00 kB

	Children see throughput for  4 rewriters 	=   19325.11 kB/sec
	Parent sees throughput for  4 rewriters 	=   14720.52 kB/sec
	Min throughput per process 			=    4782.28 kB/sec 
	Max throughput per process 			=    4906.05 kB/sec
	Avg throughput per process 			=    4831.28 kB/sec
	Min xfer 					=     981.00 kB

	Children see throughput for 4 reverse readers 	=   39143.26 kB/sec
	Parent sees throughput for 4 reverse readers 	=   29813.36 kB/sec
	Min throughput per process 			=    8622.26 kB/sec 
	Max throughput per process 			=   10743.42 kB/sec
	Avg throughput per process 			=    9785.82 kB/sec
	Min xfer 					=     862.00 kB



iozone test complete.
iozone throughput stride-read measurements
	Iozone: Performance Test of File I/O
	        Version $Revision: 3.506 $
		Compiled for 64 bit mode.
		Build: linux 

	Contributors:William Norcott, Don Capps, Isom Crawford, Kirby Collins
	             Al Slater, Scott Rhine, Mike Wisner, Ken Goss
	             Steve Landherr, Brad Smith, Mark Kelly, Dr. Alain CYR,
	             Randy Dunlap, Mark Montague, Dan Million, Gavin Brebner,
	             Jean-Marc Zucconi, Jeff Blomberg, Benny Halevy, Dave Boone,
	             Erik Habbinga, Kris Strecker, Walter Wong, Joshua Root,
	             Fabrice Bacchella, Zhenghua Xue, Qin Li, Darren Sawyer,
	             Vangel Bojaxhi, Ben England, Vikentsi Lapa,
	             Alexey Skidanov, Sudhir Kumar.

	Run began: Mon Jun 12 12:54:45 2023

	Record Size 1 kB
	File size set to 1024 kB
	Command line used: iozone -t 4 -i 0 -i 5 -r 1k -s 1m
	Output is in kBytes/sec
	Time Resolution = 0.000008 seconds.
	Processor cache size set to 1024 kBytes.
	Processor cache line size set to 32 bytes.
	File stride size set to 17 * record size.
	Throughput test with 4 processes
	Each process writes a 1024 kByte file in 1 kByte records

	Children see throughput for  4 initial writers 	=   13264.41 kB/sec
	Parent sees throughput for  4 initial writers 	=   10461.44 kB/sec
	Min throughput per process 			=    3175.73 kB/sec 
	Max throughput per process 			=    3468.09 kB/sec
	Avg throughput per process 			=    3316.10 kB/sec
	Min xfer 					=     940.00 kB

	Children see throughput for  4 rewriters 	=   26812.58 kB/sec
	Parent sees throughput for  4 rewriters 	=   19308.66 kB/sec
	Min throughput per process 			=    6404.84 kB/sec 
	Max throughput per process 			=    7004.64 kB/sec
	Avg throughput per process 			=    6703.14 kB/sec
	Min xfer 					=     987.00 kB

	Children see throughput for 4 stride readers 	=   42873.56 kB/sec
	Parent sees throughput for 4 stride readers 	=   36079.78 kB/sec
	Min throughput per process 			=    9306.99 kB/sec 
	Max throughput per process 			=   11848.11 kB/sec
	Avg throughput per process 			=   10718.39 kB/sec
	Min xfer 					=     874.00 kB



iozone test complete.
iozone throughput fwrite/fread measurements
	Iozone: Performance Test of File I/O
	        Version $Revision: 3.506 $
		Compiled for 64 bit mode.
		Build: linux 

	Contributors:William Norcott, Don Capps, Isom Crawford, Kirby Collins
	             Al Slater, Scott Rhine, Mike Wisner, Ken Goss
	             Steve Landherr, Brad Smith, Mark Kelly, Dr. Alain CYR,
	             Randy Dunlap, Mark Montague, Dan Million, Gavin Brebner,
	             Jean-Marc Zucconi, Jeff Blomberg, Benny Halevy, Dave Boone,
	             Erik Habbinga, Kris Strecker, Walter Wong, Joshua Root,
	             Fabrice Bacchella, Zhenghua Xue, Qin Li, Darren Sawyer,
	             Vangel Bojaxhi, Ben England, Vikentsi Lapa,
	             Alexey Skidanov, Sudhir Kumar.

	Run began: Mon Jun 12 12:54:58 2023

	Record Size 1 kB
	File size set to 1024 kB
	Command line used: iozone -t 4 -i 6 -i 7 -r 1k -s 1m
	Output is in kBytes/sec
	Time Resolution = 0.000007 seconds.
	Processor cache size set to 1024 kBytes.
	Processor cache line size set to 32 bytes.
	File stride size set to 17 * record size.
	Throughput test with 4 processes
	Each process writes a 1024 kByte file in 1 kByte records

	Children see throughput for  4 fwriters 	=   12272.83 kB/sec
	Parent sees throughput for  4 fwriters 		=    9606.97 kB/sec
	Min throughput per process 			=    2886.12 kB/sec 
	Max throughput per process 			=    3204.25 kB/sec
	Avg throughput per process 			=    3068.21 kB/sec
	Min xfer 					=    1024.00 kB

	Children see throughput for  4 freaders 	=   26930.34 kB/sec
	Parent sees throughput for  4 freaders 		=   24595.56 kB/sec
	Min throughput per process 			=    6392.92 kB/sec 
	Max throughput per process 			=    7123.18 kB/sec
	Avg throughput per process 			=    6732.58 kB/sec
	Min xfer 					=    1024.00 kB



iozone test complete.
iozone throughput pwrite/pread measurements
	Iozone: Performance Test of File I/O
	        Version $Revision: 3.506 $
		Compiled for 64 bit mode.
		Build: linux 

	Contributors:William Norcott, Don Capps, Isom Crawford, Kirby Collins
	             Al Slater, Scott Rhine, Mike Wisner, Ken Goss
	             Steve Landherr, Brad Smith, Mark Kelly, Dr. Alain CYR,
	             Randy Dunlap, Mark Montague, Dan Million, Gavin Brebner,
	             Jean-Marc Zucconi, Jeff Blomberg, Benny Halevy, Dave Boone,
	             Erik Habbinga, Kris Strecker, Walter Wong, Joshua Root,
	             Fabrice Bacchella, Zhenghua Xue, Qin Li, Darren Sawyer,
	             Vangel Bojaxhi, Ben England, Vikentsi Lapa,
	             Alexey Skidanov, Sudhir Kumar.

	Run began: Mon Jun 12 12:55:07 2023

	Record Size 1 kB
	File size set to 1024 kB
	Command line used: iozone -t 4 -i 9 -i 10 -r 1k -s 1m
	Output is in kBytes/sec
	Time Resolution = 0.000007 seconds.
	Processor cache size set to 1024 kBytes.
	Processor cache line size set to 32 bytes.
	File stride size set to 17 * record size.
	Throughput test with 4 processes
	Each process writes a 1024 kByte file in 1 kByte records

	Children see throughput for 4 pwrite writers 	=   14005.01 kB/sec
	Parent sees throughput for 4 pwrite writers 	=   11383.99 kB/sec
	Min throughput per process 			=    3371.57 kB/sec 
	Max throughput per process 			=    3724.00 kB/sec
	Avg throughput per process 			=    3501.25 kB/sec
	Min xfer 					=     967.00 kB

	Children see throughput for 4 pread readers 	=   53217.58 kB/sec
	Parent sees throughput for 4 pread readers 	=   38787.67 kB/sec
	Min throughput per process 			=   12224.63 kB/sec 
	Max throughput per process 			=   14183.61 kB/sec
	Avg throughput per process 			=   13304.40 kB/sec
	Min xfer 					=     980.00 kB



iozone test complete.
iozone throughtput pwritev/preadv measurements
	Iozone: Performance Test of File I/O
	        Version $Revision: 3.506 $
		Compiled for 64 bit mode.
		Build: linux 

	Contributors:William Norcott, Don Capps, Isom Crawford, Kirby Collins
	             Al Slater, Scott Rhine, Mike Wisner, Ken Goss
	             Steve Landherr, Brad Smith, Mark Kelly, Dr. Alain CYR,
	             Randy Dunlap, Mark Montague, Dan Million, Gavin Brebner,
	             Jean-Marc Zucconi, Jeff Blomberg, Benny Halevy, Dave Boone,
	             Erik Habbinga, Kris Strecker, Walter Wong, Joshua Root,
	             Fabrice Bacchella, Zhenghua Xue, Qin Li, Darren Sawyer,
	             Vangel Bojaxhi, Ben England, Vikentsi Lapa,
	             Alexey Skidanov, Sudhir Kumar.

	Run began: Mon Jun 12 12:55:20 2023

	Selected test not available on the version.
	Record Size 1 kB
	File size set to 1024 kB
	Command line used: iozone -t 4 -i 11 -i 12 -r 1k -s 1m
	Output is in kBytes/sec
	Time Resolution = 0.000007 seconds.
	Processor cache size set to 1024 kBytes.
	Processor cache line size set to 32 bytes.
	File stride size set to 17 * record size.
	Throughput test with 4 processes
	Each process writes a 1024 kByte file in 1 kByte records

	Children see throughput for  4 initial writers 	=   14056.85 kB/sec
	Parent sees throughput for  4 initial writers 	=   11748.06 kB/sec
	Min throughput per process 			=    3440.28 kB/sec 
	Max throughput per process 			=    3609.25 kB/sec
	Avg throughput per process 			=    3514.21 kB/sec
	Min xfer 					=     967.00 kB

	Children see throughput for  4 rewriters 	=   30184.44 kB/sec
	Parent sees throughput for  4 rewriters 	=   21066.51 kB/sec
	Min throughput per process 			=    6812.83 kB/sec 
	Max throughput per process 			=    8305.90 kB/sec
	Avg throughput per process 			=    7546.11 kB/sec
	Min xfer 					=     903.00 kB



iozone test complete.
`;

let points = {	
	'musl iozone fwrite/fread 4 freaders (kb/sec)': [0, 1],
	'musl iozone fwrite/fread 4 fwriters (kb/sec)': [0, 1],
	'musl iozone pwrite/pread 4 pread readers (kb/sec)': [0, 1],
	'musl iozone pwrite/pread 4 pwrite writers (kb/sec)': [0, 1],
	'musl iozone pwritev/preadv 4 initial writers (kb/sec)': [0, 1],
	'musl iozone pwritev/preadv 4 rewriters (kb/sec)': [0, 1],
	'musl iozone random-read 4 initial writers (kb/sec)': [0, 1],
	'musl iozone random-read 4 random readers (kb/sec)': [0, 1],
	'musl iozone random-read 4 random writers (kb/sec)': [0, 1],
	'musl iozone random-read 4 rewriters (kb/sec)': [0, 1],
	'musl iozone read-backwards 4 initial writers (kb/sec)': [0, 1],
	'musl iozone read-backwards 4 reverse readers (kb/sec)': [0, 1],
	'musl iozone read-backwards 4 rewriters (kb/sec)': [0, 1],
	'musl iozone stride-read 4 initial writers (kb/sec)': [0, 1],
	'musl iozone stride-read 4 rewriters (kb/sec)': [0, 1],
	'musl iozone stride-read 4 stride readers (kb/sec)': [0, 1],
	'musl iozone write/read 4 initial writers (kb/sec)': [0, 1],
	'musl iozone write/read 4 re-readers (kb/sec)': [0, 1],
	'musl iozone write/read 4 readers (kb/sec)': [0, 1],
	'musl iozone write/read 4 rewriters (kb/sec)': [0, 1],
}

function parseIozone(output) {
    const ans = {};
    const lines = output.split("\n");
    let currentKey = "";
    let subKey = "";
    
    for (const line of lines) {
        if (line.includes("iozone throughput write/read measurements")) {
            currentKey = "iozone write/read";
        } else if (line.includes("iozone throughput random-read measurements")) {
            currentKey = "iozone random-read";
        } else if (line.includes("iozone throughput read-backwards measurements")) {
            currentKey = "iozone read-backwards";
        } else if (line.includes("iozone throughput stride-read measurements")) {
            currentKey = "iozone stride-read";
        } else if (line.includes("iozone throughput fwrite/fread measurements")) {
            currentKey = "iozone fwrite/fread";
        } else if (line.includes("iozone throughput pwrite/pread measurements")) {
            currentKey = "iozone pwrite/pread";
        } else if (line.includes("iozone throughtput pwritev/preadv measurements")) {
            currentKey = "iozone pwritev/preadv";
        }

        if (line.includes("Children see throughput for")) {
            subKey = line.replace("Children see throughput for", "").trim();
            subKey = subKey.split("=")[0].trim();
        }

        if (line.includes("Max throughput per process")) {
            const key = `${currentKey} ${subKey} (kb/sec)`;
            const value = parseFloat(line.split("=")[1].trim().split(/\s+/)[0]);
            ans[key] = value;
        }
    }
    
    return ans;
}

function myjudge(outputFile) {
    let baseline = parseIozone(iozone_baseline);
    let start = outputFile.indexOf('START iozone-musl');
    if(start == -1) return points;
    let end = outputFile.indexOf('END iozone-musl', start);
    if(end == -1) return points;
    outputFile = outputFile.substring(start + 'START iozone-musl'.length, end);
	let result = parseIozone(outputFile);
	let bench = Object.keys(baseline).map(name => {
		return {
			name: name,
			result: result[name] || 0,
			baseline: baseline[name],
			score: 0.0
		};
	});
	
	bench.forEach(item => {
		if (item.result > 0) {
			if (item.name.includes("microseconds") || item.name.includes("seconds")) {
				item.score = item.baseline / item.result;
			} else {
				item.score = item.result / item.baseline;
			}	
			if (item.score != 0) {
				item.score = 1;
			}
			let name = 'musl ' + item.name;
			points[name][0] += item.score;
		}else{
			let name = 'musl ' + item.name;
			points[name][1] = -1;
		}
	});

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
			// 检查第一个数是否是第二个数的四倍
			if (points[key][1] !== -1){
				points[key][0] = points[key][0]/4;
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
