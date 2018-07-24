function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let output = [];

  for (let i in arrPenumpang) {
    var nama = arrPenumpang[i][0];
    var keberangkatan = arrPenumpang[i][1];
    var turun = arrPenumpang[i][2];

    for (let j in rute) {
      if (keberangkatan === rute[j]) {
        var start = j;
        
      } 
      if (turun === rute[j]) {
        var finish = j;
        
      }
    }

    let pay = 2000 * (finish - start);

    let preOutput = {
      penumpang : nama,
      naikDari : keberangkatan,
      tujuan : turun,
      bayar : pay
    }

    output.push(preOutput);
  }

  return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]