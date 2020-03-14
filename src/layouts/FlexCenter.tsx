import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  direction?: "row" | "column";
};

const BaseFlexCenter: React.FC<Props> = props => {
  const flexDirection = props.direction === "column" ? "column" : "row";
  const classList = [props.className, flexDirection];
  return <div className={classList.join(" ")}>{props.children}</div>;
};

export const FlexCenter = styled(BaseFlexCenter)`
  display: flex;
  align-items: center;
  justify-content: center;
  &.column {
    flex-direction: column;
  }
  &.row {
    flex-direction: row;
  }
`;
