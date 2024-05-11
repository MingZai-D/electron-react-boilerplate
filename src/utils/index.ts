export function hex2Int(hex: string): number {
  return parseInt(hex, 16)
}

export function int2Hex(n:number, len: number = 2): string {
  return n.toString(16).padStart(len * 2, '0')
}

interface InformationType {
  type: 'waiting' | 'programming' | 'success' | 'failed' | 'wrong' | 'programmed'
  driverName?: string 
  configName?: string
}

export const getDriverProgrammingInfo = (infoParams: InformationType) => {
  switch (infoParams.type) {
    case 'waiting':
      return {
        title: "Waiting for LED Driver",
        text: 'To start programming, put a Driver onto the NFC antenna.',
        color: '#F2F2F2'
      }
    case 'programming':
      return {
        title: "Programming in progress",
        text: 'Please leave the driver on the NFC antenna until programming is finished.',
        color: '#333'
      }
    case 'success':
      return {
        title: "Driver programmed successfully",
        text: 'To program a new driver, put the driver onto the NFC antenna.',
        color: '#008000'
      }
    case 'failed':
      return {
        title: "Driver NOT programmed",
        text: 'Programming process NOT successful.',
        color: '#FF0000'
      }
    case 'wrong':
      return {
        title: "Wrong driver type",
        text: 'Driver cannot be programmed.Please check driver type.',
        subText: `Expected driver: ${infoParams.driverName}`,
        color: '#F2F2F2'
      }
    case 'programmed':
      return {
        title: "Driver is already programmed",
        text: `Driver is already programmed with ${infoParams.configName}`,
        color: '#333'
      }
    default:
      return
  }
}