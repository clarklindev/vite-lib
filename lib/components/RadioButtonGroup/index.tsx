import React from 'react';
import styled from 'styled-components';

type RadioButtonGroupProps = {
  direction: string;
  spacing: string;
  children: React.ReactNode;
};

export const RadioButtonGroup = ({ direction = 'column', spacing = '5px', children }: RadioButtonGroupProps) => {
  return (
    <RadioButtonGroupContainer className={`RadioButtonGroup`} direction={direction} spacing={spacing}>
      {children}
    </RadioButtonGroupContainer>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------

const RadioButtonGroupContainer = styled.div<{ direction: string; spacing: string }>`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};

  > *:not(:last-child) {
    margin-bottom: ${({ direction, spacing }) => (direction === 'column' || direction === 'column-reverse') && spacing};
    margin-right: ${({ direction, spacing }) => (direction === 'row' || direction === 'row-reverse') && spacing};
  }
`;
