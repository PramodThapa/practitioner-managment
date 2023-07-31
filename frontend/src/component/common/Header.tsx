import styled from "styled-components";

import { Container, FlexBox } from "../common";
import { Avatar } from "@mui/material";
import { getAcronym } from "../../utils";

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-grey-700);

  .title {
    color: var(--color-white);
    font-weight: var(--fontWeight-semibold);
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Container size="md" padding="20px">
        <FlexBox align="center" justify="space-between">
          <div className="title">Practitioner Profile Management </div>
          <div>
            <Avatar src="">{getAcronym("Pramod Thapa")}</Avatar>
          </div>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};
