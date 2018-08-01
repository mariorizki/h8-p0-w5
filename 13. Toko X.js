function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  if(shoppers.length === 0) {
      return shoppers;
    }
    
  var pembeli1 = [];
  var pembeli2 = [];
  var pembeli3 = [];
  var profit1 = 0;
  var profit2 = 0;
  var profit3 = 0;
  var jumlahSepatu = listBarang[0][2];
  var jumlahBaju = listBarang[1][2];
  var jumlahSweater = listBarang[2][2];

  for (var i in shoppers) {
    if (shoppers[i].product === listBarang[0][0]) {
      if (jumlahSepatu >= shoppers[i].amount) {
        pembeli1.push(shoppers[i].name);
        profit1 += shoppers[i].amount * listBarang[0][1];
        jumlahSepatu -= shoppers[i].amount;
      }
    } else if (shoppers[i].product === listBarang[1][0]) {
      if (jumlahBaju >= shoppers[i].amount) {
        pembeli2.push(shoppers[i].name);
        profit2 += shoppers[i].amount * listBarang[1][1];
        jumlahBaju -= shoppers[i].amount;
      }
    } else if (shoppers[i].product === listBarang[2][0]) {
      if (jumlahSweater >= shoppers[i].amount) {
        pembeli3.push(shoppers[i].name);
        profit3 += shoppers[i].amount * listBarang[2][1];
        jumlahSweater -= shoppers[i].amount;
      }
    }
  }

  var data = [{ 
    product : listBarang[0][0], 
    shoppers : pembeli1, 
    leftOver : jumlahSepatu, 
    totalProfit : profit1 },
    { product : listBarang[1][0],
      shoppers : pembeli2,
      leftOver : jumlahBaju,
      totalProfit : profit2 },
    { product : listBarang[2][0],
      shoppers : pembeli3,
      leftOver : jumlahSweater,
      totalProfit : profit3 } 
      ];

    return data;

}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]