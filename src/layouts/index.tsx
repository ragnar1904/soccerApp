import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const BaseLayout: React.FC<Props> = props => {
  return (
    <div className={props.className}>
      <div className="root-grid">{props.children}</div>
    </div>
  );
};

export const Layout = styled(BaseLayout)`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  & .root-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
