import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const BaseFlexCenter: React.FC<Props> = props => {
  return <div className={props.className}>{props.children}</div>;
};

export const FlexCenter = styled(BaseFlexCenter)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
