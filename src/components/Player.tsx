import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  name?: string;
  color?: string;
};

const BasePlayer: React.FC<Props> = props => {
  const classList = [props.className, props.color];
  return <div className={classList.join(" ")}></div>;
};

export const Player = styled(BasePlayer)`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 2px solid white;
  position: absolute;
`;
