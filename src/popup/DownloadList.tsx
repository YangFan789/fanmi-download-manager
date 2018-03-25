import { List } from "antd";
import * as React from "react";
import styled from "styled-components";
import { DownloadItem } from "./DownloadItem";

const DownloadListWarpper = styled.div`
  margin-top: 6px;
  padding-right: 6px;
  max-height: 300px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #bfbfbf;
  }

  ::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: transparent;
  }
`;

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
];

class DownloadList extends React.Component {
  public render() {
    return (
      <DownloadListWarpper>
        <List dataSource={data} renderItem={(item: any) => <DownloadItem />} />
      </DownloadListWarpper>
    );
  }
}

export { DownloadList };
