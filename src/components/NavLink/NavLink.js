import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <Text>{children}</Text>
      <BoldText aria-hidden={true}>{children}</BoldText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;
  will-change: transform;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.div`
  transition: transform 600ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transform: translateY(-100%);
      transition: transform 200ms;
    }
  }
`;

const BoldText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
  transform: translateY(100%);
  transition: transform 600ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &, ${Wrapper}:focus & {
      transform: translateY(0);
      transition: transform 200ms;
    }
  }
`;

export default NavLink;
