import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../configurator/login/Login';
import SelectDriver from '../configurator/select_driver/SelectDriver';
import DriverPage from '../configurator/driver/DriverPage';
import DriverDetail from '../configurator/driver/DriverDetail';
import ProgrammerPage from '../programmer/programmer/ProgrammerPage';
import { useEffect, useState } from 'react';
import { VersionType } from '../main/main';

export const RouterKey = {
  'login': '/login',
  'select_driver': '/select_driver',
  'driver_page': '/driver_page',
  "driver_detail": '/driver_detail'
}

export const AppRouters = () =>{
  const [version, setVersion] = useState<VersionType>('product');
  useEffect(() =>{
    window.electron.ipcRenderer.sendMessage('message')
    window.electron.ipcRenderer.once('message', (res)=>{
      console.log(res, '< --- res')
      if(res){
        setVersion(res as VersionType)
      }
    })
  }, [])
  return (
    <Router>
      <Routes>
        {version === 'product' ? 
        <Route path='/' element={<Login />}/> : 
        <Route path='/' element={<ProgrammerPage />}/> }
        <Route path={RouterKey.login} element={<Login />}/>
        <Route path={RouterKey.select_driver} element={<SelectDriver />}/>
        <Route path={RouterKey.driver_page} element={<DriverPage />} />
        <Route path={RouterKey.driver_detail} element={<DriverDetail />}/>
      </Routes>
    </Router>
  )
}
