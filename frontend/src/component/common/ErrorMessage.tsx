import { ReactNode } from "react";

import styled from "styled-components";

interface ErrorMessageProps {
  children?: ReactNode;
}

export const ErrorMessage = styled.div<ErrorMessageProps>`
  color: var(--color-red);
  font-size: var(--font-s);
  padding: var(--spacing-1x) 10px;
  font-weight: var(--fontWeight-normal);
`;
