import styled from "styled-components";

import Avatar from "./Avatar";
import FlexBox from "./FlexBox";
import Container from "./Container";

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-grey-700);

  .title {
    color: var(--color-white);
    font-weight: var(--fontWeight-semibold);
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container size="md" padding="20px">
        <FlexBox align="center" justify="space-between">
          <div className="title">Practitioner Profile Management </div>
          <div>
            <Avatar name="Pramod Thapa" />
          </div>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default Header;
