export const accountInfo = [
  { email: 'admin@ledvance.com', password: 'Ledvance@2024' },
];

// export const driverList = [
//   {
//     driverCode: 1,
//     name: "DR ZB P 30W 220 240V 0A7",
//     GTN:'GTN1'
//   },
//   {
//     driverCode: 2,
//     name: "DR ZB P 45W 220 240V 1A2",
//     GTN:'GTN2'
//   },
//   {
//     driverCode: 3,
//     name: "DR ZB P 50W 220 240V 1A2",
//     GTN:'GTN3'
//   },
// ]

export const driverList = [
  {
    driverName: 'DR ZB P 30W 220 240V 0A7',
    regionCode: '0x01',
    mappingType: '0x01',
    DriverType: 'FFFFFFFF',
    Mappings: {
      'Driver information': [
        {
          name: 'Mapping Format Version',
          position: '0004',
          value: '205',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Manufacture_id',
          position: '0006',
          value: '0x1189',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Image_Type',
          position: '0008',
          value: '0xf3',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Current',
          position: '000C',
          value: 200,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Current',
          position: '000E',
          value: 750,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Voltage',
          position: '0010',
          value: 100,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Voltage',
          position: '0012',
          value: 490,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Power',
          position: '0014',
          value: 20,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Power',
          position: '0016',
          value: 310,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'AC Code',
          position: '001C',
          value: 'NULL',
          length: 4,
          type: 'string',
          disabled: true,
        },
      ],
      CurrentSetting: [
        {
          name: 'Set Current',
          value: 50,
          position: '0020',
          length: 2,
          type: 'number',
          coefficient: 0.1,
          min: 10,
          max: 32,
          unit: 'A',
        },
        {
          name: 'Set Power',
          value: 50,
          position: '0022',
          length: 2,
          type: 'number',
          coefficient: 0.01,
          min: 1,
          max: 100,
          unit: 'w',
        },
        {
          name: 'Set Voltage',
          value: 50,
          position: '0024',
          length: 2,
          type: 'number',
          min: 1,
          max: 100,
        },
      ],
      'Luminaire Information': [
        {
          name: 'Emergency lighting levelPWM1',
          value: 'FF',
          position: '0026',
          length: 1,
          type: 'string',
        },
        {
          name: 'Emergency lighting levelPWM2',
          value: 'FF',
          position: '0027',
          length: 1,
          type: 'string',
        },
      ],
    },
  },
  {
    driverName: 'DR ZB P 45W 220 240V 1A2',
    regionCode: '0x01',
    mappingType: '0x01',
    DriverType: 'FFFFFFFF',
    Mappings: {
      'Driver information': [
        {
          name: 'Mapping Format Version',
          position: '0004',
          value: '205',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Manufacture_id',
          position: '0006',
          value: '0x1189',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Image_Type',
          position: '0008',
          value: '0xf4',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Current',
          position: '000C',
          value: 600,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Current',
          position: '000E',
          value: 1200,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Voltage',
          position: '0010',
          value: 100,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Voltage',
          position: '0012',
          value: 490,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Power',
          position: '0014',
          value: 60,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Power',
          position: '0016',
          value: 450,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'AC Code',
          position: '001C',
          value: 'NULL',
          length: 4,
          type: 'string',
          disabled: true,
        },
      ],
      CurrentSetting: [
        {
          name: 'Set Current',
          value: 50,
          position: '0020',
          length: 2,
          type: 'number',
          coefficient: 0.1,
          min: 10,
          max: 32,
          unit: 'A',
        },
        {
          name: 'Set Power',
          value: 50,
          position: '0022',
          length: 2,
          type: 'number',
          coefficient: 0.01,
          min: 1,
          max: 100,
          unit: 'w',
        },
        {
          name: 'Set Voltage',
          value: 50,
          position: '0024',
          length: 2,
          type: 'number',
          min: 1,
          max: 100,
        },
      ],
      'Luminaire Information': [
        {
          name: 'Emergency lighting levelPWM1',
          value: 'FF',
          position: '0026',
          length: 1,
          type: 'string',
        },
        {
          name: 'Emergency lighting levelPWM2',
          value: 'FF',
          position: '0027',
          length: 1,
          type: 'string',
        },
      ],
    },
  },
  {
    driverName: 'DR ZB P 50W 220 240V 1A2',
    regionCode: '0x01',
    mappingType: '0x01',
    DriverType: 'FFFFFFFF',
    Mappings: {
      'Driver information': [
        {
          name: 'Mapping Format Version',
          position: '0004',
          value: 205,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Manufacture_id',
          position: '0006',
          value: '0x1189',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Image_Type',
          position: '0008',
          value: '0xf5',
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Current',
          position: '000C',
          value: 200,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Current',
          position: '000E',
          value: 1200,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Voltage',
          position: '0010',
          value: 200,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Voltage',
          position: '0012',
          value: 520,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Min Power',
          position: '0014',
          value: 40,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'Max Power',
          position: '0016',
          value: 520,
          length: 2,
          type: 'number',
          disabled: true,
        },

        {
          name: 'AC Code',
          position: '001C',
          value: 'NULL',
          length: 4,
          type: 'string',
          disabled: true,
        },
      ],
      CurrentSetting: [
        {
          name: 'Set Current',
          value: 50,
          position: '0020',
          length: 2,
          type: 'number',
          coefficient: 0.1,
          min: 10,
          max: 32,
          unit: 'A',
        },
        {
          name: 'Set Power',
          value: 50,
          position: '0022',
          length: 2,
          type: 'number',
          coefficient: 0.01,
          min: 1,
          max: 100,
          unit: 'w',
        },
        {
          name: 'Set Voltage',
          value: 50,
          position: '0024',
          length: 2,
          type: 'number',
          min: 1,
          max: 100,
        },
      ],
      'Luminaire Information': [
        {
          name: 'Emergency lighting levelPWM1',
          value: 'FF',
          position: '0026',
          length: 1,
          type: 'string',
        },
        {
          name: 'Emergency lighting levelPWM2',
          value: 'FF',
          position: '0027',
          length: 1,
          type: 'string',
        },
      ],
    },
  },
];

export const defDriverConfig = {
  regionCode: '0x01',
  mappingType: '0x01',
  DriverType: 'FFFFFFFF',
  Mappings: {
    'Driver information': [
      {
        name: 'Mapping Format Version',
        position: '0004',
        value: 'FFFF',
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Manufacture_id',
        position: '0006',
        value: 'FFFF',
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Image_Type',
        position: '0008',
        value: 'FFFF',
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Min Current',
        position: '000C',
        value: 10,
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Max Current',
        position: '000E',
        value: 32,
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Min Voltage',
        position: '0010',
        value: 36,
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Max Voltage',
        position: '0012',
        value: 120,
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Min Power',
        position: '0014',
        value: 180,
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'Max Power',
        position: '0016',
        value: 200,
        length: 2,
        type: 'number',
        disabled: true,
      },
      {
        name: 'AC Code',
        position: '001C',
        value: '0AC46372',
        length: 4,
        type: 'string',
        disabled: true,
      },
    ],
    CurrentSetting: [
      {
        name: 'Set Current',
        value: 50,
        position: '0020',
        length: 2,
        type: 'number',
        coefficient: 0.1,
        min: 10,
        max: 32,
        unit: 'A',
      },
      {
        name: 'Set Power',
        value: 50,
        position: '0022',
        length: 2,
        type: 'number',
        coefficient: 0.01,
        min: 1,
        max: 100,
        unit: 'w',
      },
      {
        name: 'Set Voltage',
        value: 50,
        position: '0024',
        length: 2,
        type: 'number',
        min: 1,
        max: 100,
      },
    ],
    'Luminaire Information': [
      {
        name: 'Emergency lighting levelPWM1',
        value: 'FF',
        position: '0026',
        length: 1,
        type: 'string',
      },
      {
        name: 'Emergency lighting levelPWM2',
        value: 'FF',
        position: '0027',
        length: 1,
        type: 'string',
      },
    ],
  },
};

export type DriverConfigType = typeof defDriverConfig;

export type MappingKeyType = keyof typeof defDriverConfig.Mappings;

export interface MappingItem {
  name: string;
  position: string;
  value: string | number;
  length: number;
  type: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  unit?: string;
  coefficient?: number;
}
