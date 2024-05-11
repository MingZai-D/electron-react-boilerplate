import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { DriverConfigType, MappingKeyType, defDriverConfig } from "./driver_config";
import { useEffect, useState } from "react";
import { useUpdateEffect } from "ahooks";

const initialState = {
  driverConfig: defDriverConfig,
}

export const driverConfig = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateDriverConfig(state, action) {
      state.driverConfig = {
        ...state.driverConfig,
        ...action.payload
      }
      return state
    },
  }
})

export const useDriverConfig = (): [DriverConfigType, (config: DriverConfigType) => void] =>{
  const driverConfig = useSelector((store: any) => store.driverConfig?.driverConfig)
  const dispatch = useDispatch()
  const setDriverConfigFn = (config: DriverConfigType) =>{
    dispatch(updateDriverConfig(config))
  }
  return [driverConfig, setDriverConfigFn]
}

export const useDriverTabs = () =>{
  const driverConfig = useSelector((store: any) => store.driverConfig?.driverConfig)
  const [driverTabs, setDriverTabs] = useState<MappingKeyType[]>(Object.keys(driverConfig?.Mappings) as MappingKeyType[])
  useUpdateEffect(() =>{
    setDriverTabs(Object.keys(driverConfig?.Mappings) as MappingKeyType[])
  }, [driverConfig?.Mappings])
  return driverTabs
}

export const { updateDriverConfig } = driverConfig.actions
export default driverConfig.reducer
