function changeVocals (str) {
  //code di sini
  var tampung = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      tampung += 'b';
    } else if (str[i] === 'i') {
      tampung += 'j';
    } else if (str[i] === 'u') {
      tampung += 'v';
    } else if (str[i] === 'e') {
      tampung += 'f';
    } else if (str[i] === 'o') {
      tampung += 'p';
    } else if (str[i] === 'A') {
      tampung += 'B';
    } else if (str[i] === 'I') {
      tampung += 'J';
    } else if (str[i] === 'U') {
      tampung += 'V';
    } else if (str[i] === 'E') {
      tampung += 'F';
    } else if (str[i] === 'O') {
      tampung += 'P';
    } else {
      tampung += str[i];
    }
  }
  
  return tampung;
}

function reverseWord (str) {
  //code di sini
  var balik = '';
  for (var i = str.length -1; i >= 0; i--) {
    balik += str[i];
  }

  return balik;
}

function setLowerUpperCase (str) {
  //code di sini
  var ubahKecilBesar = '';
  for (var i = 0; i < str.length; i++) {
    var a = str[i];
    if (a === a.toUpperCase()) {
      ubahKecilBesar += a.toLowerCase();
    } else if (a === a.toLowerCase()) {
      ubahKecilBesar += a.toUpperCase();
    } else {
      ubahKecilBesar += a
    }
  }

  return ubahKecilBesar;
}

function removeSpaces (str) {
  //code di sini
  var spasi = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      spasi += str[i];
    }
  }

  return spasi;
}

function passwordGenerator (name) {
  //code di sini
  var gantiVokal = changeVocals (name);
  var balikKata = reverseWord (gantiVokal) ;
  var gantiCase = setLowerUpperCase (balikKata);
  var hilangkanSpasi = removeSpaces (gantiCase);

  if (hilangkanSpasi.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } 

  return hilangkanSpasi;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'