import * as React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  margin-top: 6px;
`;

class Content extends React.Component {
  public render() {
    return (
      <ContentWrapper>
        <ul>
          <li>shit</li>
          <li>shit</li>
          <li>fuck</li>
          <li>fuck</li>
          <li>fuck</li>
          <li>fuck</li>
        </ul>
      </ContentWrapper>
    );
  }
}

export { Content };
