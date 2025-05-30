import React, { useState } from "react";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  CodepenOutlined,
  RiseOutlined,
  SoundOutlined,
  TableOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Drawer } from "antd";  // ลบ SubMenu ที่ไม่ใช้งาน
import { useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom"; // ใช้ type-only import
import Profile from "./Componentnavbar/Profile";
import Bell from "./Componentnavbar/Bell";
import Cart from "./Componentnavbar/Cart";
import Langue from "./Componentnavbar/Langue";
import Darkmode from "./Componentnavbar/Darkmode";
import type { MenuProps } from "antd/es/menu";
const { Header, Sider, Content } = Layout;

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate: NavigateFunction = useNavigate();

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleMenuClick = () => {
    setDrawerVisible(false);
  };

  const menuItems = (navigate: NavigateFunction): MenuProps["items"] => [
    {
      type: "group",  // ใช้ 'group' เป็น type
      label: (
        <span
          className={`flex ${
            collapsed
              ? "justify-center text-2xl tracking-widest text-black"
              : "justify-start text-black font-extrabold"
          }`}
        >
          {collapsed ? "..." : "Home"}
        </span>
      ),
      children: [
        {
          key: "modern",
          icon: <UserOutlined />,
          label: <span className="menu-label-home">Modern</span>,
          onClick: () => {
            navigate("/");
            handleMenuClick();
          },
        },
        {
          key: "ecommerce",
          icon: <ShoppingCartOutlined />,
          label: <span className="menu-label-home">eCommerce</span>,
          onClick: () => {
            navigate("/ecommerce");
            handleMenuClick();
          },
        },
        {
          key: "nft",
          icon: <DollarOutlined />,
          label: <span className="menu-label-home">NFT</span>,
          onClick: () => {
            navigate("/nft");
            handleMenuClick();
          },
        },
       
        {
          key: "frontend",
          icon: <TableOutlined />,
          label: <span className="menu-label-home">SmartCom Silo</span>,
          onClick: () => {
            navigate("/Silo");
            handleMenuClick();
          },
        },
      ],
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={270}
        style={{
          background: "#FFFFFF",
          boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.1)",
          overflow: "auto",
        }}
        className="hidden lg:block"
      >
        <div
          style={{
            display: "flex",
            height: 64,
            alignItems: "center",
            justifyContent: "center",
            padding: "0 16px",
          }}
          className="gap-2"
        >
          <img src="/logos1.png" alt="Logo" style={{ height: 40 }} />
          {!collapsed && (
            <p className="text-xl font-bold tracking-wider">Modernize</p>
          )}
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["modern"]}
          items={menuItems(navigate)} // ส่ง navigate มาให้
          style={{ marginTop: 24 }}
        />
      </Sider>

      <Layout style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Header
          style={{
            padding: 12,
            background: "#FFFFFF",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            onClick={toggleMenu}
            style={{
              fontSize: "16px",
              width: 64,
              height: 44,
              display: window.innerWidth >= 768 ? "block" : "none",
              padding: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuOutlined style={{ fontSize: 16 }} />
            </div>
          </Button>

          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            style={{
              fontSize: "16px",
              width: 64,
              height: 14,
              display: window.innerWidth < 768 ? "block" : "none",
              padding: 0,
            }}
          />
          <div className="flex gap-6 my-auto items-center h-full">
            <Darkmode />
            <Langue />
            <Cart />
            <Bell />
            <Profile />
          </div>
        </Header>

        <Content
          className="bg-white p-3 md:p-8 flex justify-center"
          style={{
            flex: 1,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>

      <Drawer
        title="Menu"
        placement="left"
        onClose={toggleDrawer}
        open={drawerVisible}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["modern"]}
          items={menuItems(navigate)} // ส่ง navigate มาให้
        />
      </Drawer>
    </Layout>
  );
};

export default Navbar;
