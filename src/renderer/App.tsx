import { Layout } from 'antd';
import { AppRouters } from '../routers';
import DriverFooter from '../components/DriverFooter/DriverFooter';
import './App.css'
import { Provider } from "react-redux";
import store from "../store";
const { Content } = Layout


export default function App() {
  return (
    <Provider store={store}>
      <Layout className='LDE_driver_layout'>
        <Content className='LDE_driver_content'>
          <AppRouters />
        </Content>
        <DriverFooter />
      </Layout>
    </Provider>
  );
}
