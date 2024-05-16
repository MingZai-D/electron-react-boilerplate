import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { DriverConfigType, MappingKeyType, driverList } from './driver_config';
import { useEffect, useMemo, useState } from 'react';
import { useUpdateEffect } from 'ahooks';

export interface DriverItemType {
  driverName: string;
  img: string;
  driverType: string;
  regionCode: string;
  mappingType: string;
}


const initialState = {
  driverList,
  driverConfig: driverList[0],
};

export const driverConfig = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateDriverConfig(state, action) {
      state.driverConfig = {
        ...action.payload,
      };
      return state;
    },
  },
});

export const useDriverConfig = (): [
  DriverConfigType,
  (config: DriverConfigType) => void,
] => {
  const driverConfig = useSelector(
    (store: any) => store.driverConfig?.driverConfig,
  );
  const dispatch = useDispatch();
  const setDriverConfigFn = (config: DriverConfigType) => {
    dispatch(updateDriverConfig(config));
  };
  return [driverConfig, setDriverConfigFn];
};

export const useDriverTabs = () => {
  const driverConfig = useSelector(
    (store: any) => store.driverConfig?.driverConfig,
  );
  const [driverTabs, setDriverTabs] = useState<MappingKeyType[]>(
    Object.keys(driverConfig?.Mappings) as MappingKeyType[],
  );
  useUpdateEffect(() => {
    setDriverTabs(Object.keys(driverConfig?.Mappings) as MappingKeyType[]);
  }, [driverConfig?.Mappings]);
  return driverTabs;
};


export const useDriverList = (): [DriverItemType[], (driver: DriverItemType) => void] => {
  const driverList = useSelector(
    (store: any) => store.driverConfig?.driverList,
  );
  const dispatch = useDispatch()
  const driverForm = useMemo(() =>(driverList.map((driver: DriverConfigType) => ({
    driverName: driver.driverName,
    img: '',
    driverType: driver.DriverType,
    regionCode: driver.regionCode,
    mappingType: driver.mappingType,
  }))), driverList)

  const setDriverConfig = (driver: DriverItemType) =>{
    const curDriver = driverList.find((d: DriverConfigType) => d.driverName === driver.driverName)
    dispatch(updateDriverConfig(curDriver));
  }
  return [driverForm, setDriverConfig]
};

export const { updateDriverConfig } = driverConfig.actions;
export default driverConfig.reducer;
