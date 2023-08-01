import { ReactNode } from "react";

import styled from "styled-components";

interface ContainerProps {
  size?: string;
  padding?: string;
  children: ReactNode;
}

/**
 * Function to get the container width.
 *
 * @param size - Size of the container.
 * @returns {string} Container width.
 */
const containerWidth = (size: string | undefined): string => {
  if (size === "sm") return "800px";
  if (size === "lg") return "1800px";
  if (size === "md") return "1400px";

  return "100%";
};

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: ${({ padding }) => padding};
  max-width: ${({ size }) => containerWidth(size)};
`;
