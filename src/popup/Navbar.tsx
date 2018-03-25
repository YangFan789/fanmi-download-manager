import { Button, Dropdown, Icon, Input, Menu, Tooltip } from "antd";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";

const ActionPanelWarpper = styled.div`
  flex: none;
`;

const SearchBarWarpper = styled.div`
  flex: auto;
  width: 100%;
`;

const NavbarContainer = styled.div`
  display: flex;
  ${ActionPanelWarpper} .ant-btn {
    margin-left: 6px;
  }
`;

function handleMenuClick(e: any) {
  console.log(e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="open-download-folder">
      <Icon type="folder" /> 打开下载文件夹
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="clean-failed-items">
      <Icon type="delete" /> 清除下载失败项
    </Menu.Item>
    <Menu.Item key="clean-dont-exists-items">
      <Icon type="delete" /> 清除文件不存在项
    </Menu.Item>
    <Menu.Item key="clean-complete-items">
      <Icon type="delete" /> 清除已完成
    </Menu.Item>
    <Menu.Item key="clean-all-items">
      <Icon type="delete" /> 清除所有项
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="open-setting">
      <Icon type="setting" /> 设置
    </Menu.Item>
  </Menu>
);

const onOpenChromeDownload = (event: any) => {
  chrome.tabs.create({ url: "chrome://downloads" });
  event.stopPropagation();
  return false;
};

const Navbar: React.StatelessComponent<{ className?: string }> = ({
  className,
}) => (
  <NavbarContainer className="clearfix">
    <SearchBarWarpper>
      <Input.Search placeholder="搜索所有下载项" />
    </SearchBarWarpper>
    <ActionPanelWarpper>
      <Tooltip placement="bottomRight" title="打开 Chrome 下载管理器">
        <Button onClick={onOpenChromeDownload} shape="circle" icon="download" />
      </Tooltip>
      <Tooltip placement="bottomRight" title="更多操作">
        <Dropdown trigger={["click"]} overlay={menu}>
          <Button shape="circle" icon="ellipsis" />
        </Dropdown>
      </Tooltip>
    </ActionPanelWarpper>
  </NavbarContainer>
);

export default Navbar;
