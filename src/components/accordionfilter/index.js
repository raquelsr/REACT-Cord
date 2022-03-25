import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../checkbox';
import * as colors from '../../css/constants/colors';

export default function AccordionFilter({ title, values, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>
        <CollapsibleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <Title>{title}</Title>
      </Header>
      <Body isOpen={isOpen}>
        {values.map((value) => (
          <Checkbox
            key={value.id}
            id={value.id}
            label={value.name}
            onChange={(e) => onChange(e)}
          ></Checkbox>
        ))}
      </Body>
    </>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const Title = styled.h4`
  margin: 0;
  margin-left: 10px;
  font-weight: normal;
`;

const CollapsibleButton = styled.button`
  position: relative;
  width: 18px;
  height: 18px;
  background unset;
  border: none; 
  margin-top: 2px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: ${colors.fontColor};
    transition: transform 0.25s ease-out;
  }

  &:before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    margin-left: -1px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(90deg)' : 'none')};
  }

  &:after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    margin-top: -1px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
  }

  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-bottom: 20px;
`;
