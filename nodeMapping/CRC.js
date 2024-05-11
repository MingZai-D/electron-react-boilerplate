
// "Class" for calculating CRC8 checksums...
function CRC8(polynomial, initial_value) { // constructor takes an optional polynomial type from CRC8.POLY
  if (polynomial == null) polynomial = CRC8.POLY.CRC8_CCITT
  this.table = CRC8.generateTable(polynomial);
  this.initial_value = initial_value;
}

// Returns the 8-bit checksum given an array of byte-sized numbers
CRC8.prototype.checksum = function(byte_array) {
  var c = this.initial_value;

  for (var i = 0; i < byte_array.length; i++ ) 
    c = this.table[(byte_array[i]^c) &0xff ] ^(c << 8) 

  return c& 0xff;
} 

// returns a lookup table byte array given one of the values from CRC8.POLY 
CRC8.generateTable =function(polynomial)
{
  var csTable = [] // 256 max len byte array
  
  for ( var i = 0; i < 512; ++i ) {
    var curr = i
    for ( var j = 0; j < 8; ++j ) {
      if ((curr & 0x01) !== 0) {
        curr = ((curr >>> 1) ^ polynomial) 
      } else {
        curr = (curr >>> 1) 
      }
    }
    csTable[i] = curr 
  }
    
  return csTable
}

function nfc_crc8(pBuf, Len) {
  var Polynom = 0x8C;
  var CrcCalc = 0xFF;
  var pTmp = pBuf;
  var ByteNum, BitNum;

  for (ByteNum = 0; ByteNum < Len; ByteNum++) {
      CrcCalc ^= pTmp[ByteNum];

      for (BitNum = 0; BitNum < 8; BitNum++) {
          if (CrcCalc & 0x01) {
              CrcCalc = (CrcCalc >> 1) ^ Polynom;
          } else {
              CrcCalc = (CrcCalc >> 1);
          }
      }
      //console.log("CrcCalc", CrcCalc.toString(16));
  }

  return CrcCalc;
}

function HexStringToInt(hex) {
  // 传入"B7 D4", 翻转去除空格"4D7B", 结果19835
  //console.log("传入的值: ", hex);
  //let str = hex.split('').reverse().join('');
  let str = hex
  //console.log("翻转的值: ", str);
  let decimalism = str.replace(/\s/g,"");
  //console.log("去除空格: ", decimalism);
  let res = parseInt(decimalism, 16)
  //console.log("16转10的值: ", parseInt(decimalism, 16));//十六进制转十进制
  return res
}

// This "enum" can be used to indicate what kind of CRC8 checksum you will be calculating
CRC8.POLY = {
  CRC8 : 0xd5,
  CRC8_CCITT : 0x07,
  CRC8_DALLAS_MAXIM : 0x31,
  CRC8_SAE_J1850 : 0x1D,
  CRC_8_WCDMA : 0x9b,
}

module.exports = {
    CRC8,
    nfc_crc8,
    HexStringToInt
  }