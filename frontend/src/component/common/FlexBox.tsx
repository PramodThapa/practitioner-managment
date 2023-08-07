import { ReactNode } from "react";

import styled from "styled-components";

interface FlexBoxProps {
  align?: string;
  direction?: string;
  justify?: string;
  className?: string;
  children?: ReactNode;
}

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
`;
