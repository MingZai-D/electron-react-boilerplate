export function hex2Int(hex: string): number {
  return parseInt(hex, 16);
}

export function int2Hex(n: number, len: number = 2): string {
  return n.toString(16).padStart(len * 2, '0');
}

interface InformationType {
  type:
    | 'waiting'
    | 'programming'
    | 'success'
    | 'failed'
    | 'wrong'
    | 'programmed';
  driverName?: string;
  configName?: string;
}

export const getDriverProgrammingInfo = (infoParams: InformationType) => {
  switch (infoParams.type) {
    case 'waiting':
      return {
        title: 'Waiting for LED Driver',
        text: 'To start programming, put a Driver onto the NFC antenna.',
        color: '#F2F2F2',
      };
    case 'programming':
      return {
        title: 'Programming in progress',
        text: 'Please leave the driver on the NFC antenna until programming is finished.',
        color: '#F2F2F2',
      };
    case 'success':
      return {
        title: 'Driver programmed successfully',
        text: 'To program a new driver, put the driver onto the NFC antenna.',
        color: '#C3F2CB',
      };
    case 'failed':
      return {
        title: 'Driver NOT programmed',
        text: 'Programming process NOT successful.',
        color: '#FF0000',
      };
    case 'wrong':
      return {
        title: 'Wrong driver type',
        text: 'Driver cannot be programmed.Please check driver type.',
        subText: `Expected driver: ${infoParams.driverName}`,
        color: '#F2F2F2',
      };
    case 'programmed':
      return {
        title: 'Driver is already programmed',
        text: `Driver is already programmed with ${infoParams.configName}`,
        color: '#F2F2F2',
      };
    default:
      return;
  }
};
// 十进制转换成小端16进制
export function decimalToLittleEndianHex(decimal: string | number, length: number,  isHex?:boolean) {
  // 将十进制数转换为十六进制字符串
  if(!isHex){
    decimal = Number(decimal).toString(16).padStart(length * 2, '0');
  }
  // 将十六进制字符串分割成两个字符的数组
  const bytes = decimal.toString().match(/.{1,2}/g);
  // 反转字节数组
  const reversedBytes = bytes?.reverse();

  // 重新组合字节数组并返回
  return reversedBytes?.join('') || '';
}
