import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
/* import MyFirstComponent from "./components/my-first-component"; */
import { Link, Route, Routes } from "react-router-dom";

import Class1 from "./pages/class1";
import Class2 from "./pages/class2";
import Signin from "./pages/signin";
import Imformation from "./pages/information";
import Calendar from "./pages/calendar";
import "./App.css";
import Class3 from "./pages/class3";
import Class4 from "./pages/class4";
import Class5 from "./pages/class5";

const { Header, Content, Sider } = Layout;

/* const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
})); */

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      // children: new Array(4).fill(null).map((_, j) => {
      children: ["/signin", "/information", "/calendar", "/class3"].map(
        (item, j) => {
          const subKey = index * 4 + j + 1;
          var cars = ["登录", "个人信息", "日历", "事件"];
          return {
            key: subKey,
            label: <Link to={item}>{` ${cars[subKey - 1]} `}</Link>,
          };
        }
      ),
    };
  }
);

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  /* const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const onChangetwo = (key) => {
    console.log(key);
  }; */

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          /* items={items1} */
        >
          <Menu.Item key="1">
            <Link to="/class1">class1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/class2">class2</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/class4">Class4</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/class5">class5</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/class1" Component={Class1} />
              <Route path="/class2" Component={Class2} />
              <Route path="/signin" Component={Signin} />
              <Route path="/information" Component={Imformation} />
              <Route path="/calendar" Component={Calendar} />
              <Route path="/class3" Component={Class3} />
              <Route path="/class4" Component={Class4} />
              <Route path="/class5" Component={Class5} />
            </Routes>

            {/* <MyFirstComponent /> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
// import React from 'react';
// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { Link, Route, Routes } from 'react-router-dom';

// import Class1 from './pages/class1';
// import Class2 from './pages/class2';
// //import Class3 from './pages/class3';
// import Signin from "./pages/signin";
// import "./App.css";

// const { Header, Content, Sider } = Layout;

// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
      
//         children:["/signin",].map(
//           (items,j)=>{
//             const subKey = index * 4 + j +1;
//             var cars = ["登录","个人","日历", "空" ];
//             return{
//               key:subKey,
//               label:<Link to={item}>{`${cars[subKey - 1]}`}</Link>,

//             };

//           }
//         ),
//         // const subKey = index * 4 + j + 1;
//         // return {
//         //   key: subKey,
//         //   label: `option${subKey}`,
//         //   link: <Link to="/class1" />,//children: new Array(4).fill(null).map((_, j) => {
//         };
//       }
// );

// const App = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Header className="header">
//         <div className="logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
//           <Menu.Item key="1">
//             <Link to="/class1">class1</Link>
//           </Menu.Item>
//           <Menu.Item key="2">
//             <Link to="/class2">class2</Link>
//           </Menu.Item>
//         </Menu>
//       </Header>
//       <Layout>
//         <Sider
//           width={200}
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{
//               height: '100%',
//               borderRight: 0,
//             }}
//             items={items2}
//           />
//         </Sider>
//         <Layout
//           style={{
//             padding: '0 24px 24px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>List</Breadcrumb.Item>
//             <Breadcrumb.Item>App</Breadcrumb.Item>
//           </Breadcrumb>
//           <Content
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//               background: colorBgContainer,
//             }}
//           >
//             <Routes>
//               <Route path="/class1" Component={Class1} />
//               <Route path="/class2" Component={Class2} />
//               {/* <Route path="/class3" Component={Class3} /> */}
//               <Route path="signin" Component={Signin} />
//             </Routes>
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;