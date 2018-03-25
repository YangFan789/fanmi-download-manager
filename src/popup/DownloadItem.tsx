import { Button, Tooltip } from "antd";
import * as React from "react";
import styled from "styled-components";

const Left = styled.div`
  flex: none;
  width: auto;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: auto;
  display: flex;
  align-items: center;
  margin-left: 6px;
`;

const Right = styled.div`
  flex: none;
  width: auto;
  display: flex;
  align-items: center;
  .ant-btn {
    margin-left: 6px;
  }
`;

const DownloadItemWarpper = styled.div`
  display: flex;
  width: 100%;
  margin: 6px 0;
  border-radius: 6px;
  padding: 6px;
  :hover {
    background-color: #f0f5ff;
  }
`;

const FileIcon = styled.img`
  height: 48px;
  width: 48px;
`;

const InfoPanelWarpper = styled.div``;

class DownloadItem extends React.Component {
  public render() {
    return (
      <DownloadItemWarpper>
        <Left>
          <FileIcon src="./public/docx.png" alt="文件图标" />
        </Left>
        <Center>
          <div>
            <div>文件名.png</div>
            <div>日期</div>
          </div>
        </Center>
        <Right>
          <Tooltip title="打开文件" placement="bottomRight">
            <Button shape="circle" icon="file" />
          </Tooltip>
          <Tooltip title="打开文件所在文件夹" placement="bottomRight">
            <Button shape="circle" icon="folder-open" />
          </Tooltip>
        </Right>
      </DownloadItemWarpper>
    );
  }
}

export { DownloadItem };
