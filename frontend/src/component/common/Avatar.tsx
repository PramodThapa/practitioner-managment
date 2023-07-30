import React from "react";

import { getAcronym } from "../../utils/string";

import styled from "styled-components";

interface AvatarProps {
  name: string;
  imageURL?: string;
}

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  width: var(--spacing-9x);
  height: var(--spacing-9x);
  background: var(--color-light-blue);
`;

const Avatar: React.FC<AvatarProps> = ({ imageURL, name }) => {
  return (
    <Wrapper>
      {imageURL === undefined ? (
        <span>{getAcronym(name)}</span>
      ) : (
        <img alt="profile" src={imageURL} />
      )}
    </Wrapper>
  );
};

export default Avatar;
