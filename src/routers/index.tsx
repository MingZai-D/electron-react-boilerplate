import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../configurator/login/Login';
import SelectDriver from '../configurator/select_driver/SelectDriver';
import DriverPage from '../configurator/driver/DriverPage';
import DriverDetail from '../configurator/driver/DriverDetail';
import ProgrammerPage from '../programmer/programmer/ProgrammerPage';

export const RouterKey = {
  'login': '/login',
  'select_driver': '/select_driver',
  'driver_page': '/driver_page',
  "driver_detail": '/driver_detail'
}

export const AppRouters = () =>{
  // const version = process.env;
  // console.log(version, '< --- version')
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<ProgrammerPage />}/> */}
        <Route path='/' element={<Login />}/>
        <Route path={RouterKey.login} element={<Login />}/>
        <Route path={RouterKey.select_driver} element={<SelectDriver />}/>
        <Route path={RouterKey.driver_page} element={<DriverPage />} />
        <Route path={RouterKey.driver_detail} element={<DriverDetail />}/>
      </Routes>
    </Router>
  )
}
