import { Paper } from "@mui/material";
import React from "react";
import FlexBox from "../common/FlexBox";
import styled from "styled-components";

const practitioner = {
  name: "Pramod Thapa",
};

const Wrapper = styled.div`
  padding: var(--spacing-4x);

  .image-container {
    width: 200px;
    height: 180px;
    background-size: 100% 100%;
    margin-right: var(--spacing-4x);
    -moz-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    background-image: url(https://loremflickr.com/cache/resized/65535_49259742626_51d27d51c7_n_320_240_g.jpg);
  }
`;

const Practitioner: React.FC = () => {
  return (
    <Wrapper>
      <FlexBox direction="row">
        <FlexBox className="image-container"></FlexBox>
        <FlexBox>Content</FlexBox>
      </FlexBox>
    </Wrapper>
  );
};

export default Practitioner;
