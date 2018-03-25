import { Button, Input, Menu } from "antd";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
`;

const SearchBarWrapper = styled.div`
  flex: auto;
  width: 100%;
  padding-right: 6px;
`;

const ActionPanelWrapper = styled.div`
  flex: none;
`;

const onOpenChromeDownload = (event: any) => {
  chrome.tabs.create({ url: "chrome://downloads" });
  event.stopPropagation();
  return false;
};

const Navbar: React.StatelessComponent<{ className?: string }> = ({
  className,
}) => (
  <NavbarContainer className="clearfix">
    <SearchBarWrapper>
      <Input.Search placeholder="搜索所有下载项" />
    </SearchBarWrapper>
    <ActionPanelWrapper>
      <Button onClick={onOpenChromeDownload} shape="circle" icon="download" />
    </ActionPanelWrapper>
  </NavbarContainer>
);

export default Navbar;
