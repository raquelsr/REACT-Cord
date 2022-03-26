import { device } from '../../css/constants/sizes';
import { NavLink as Link } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import * as colors from '../../css/constants/colors';
import Arrow from '../../images/arrow-icon.png';
import React, { useState, useRef } from 'react';
import SearchWhite from '../../images/search-icon-white.png';
import styled, { css } from 'styled-components';

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const elemRef = useRef();
  useOnClickOutside(elemRef, () => setIsOpen(false));
  /* TODO: Write the necessary functions to open and close the sidebar */

  return (
    <div ref={elemRef}>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <SideNavBarCont isOpen={isOpen} className={isOpen ? 'visible' : ''}>
        {/* TODO: Implement a hamburger icon that controls the open state of the sidebar. This control should only be visible on mobile devices via CSS media queries */}
        {/* The sidebar should slide in from left */}
        <SideNavHeader>
          Wesley
          <img src={Arrow} alt="Arrow pointing down" />
          <CloseButton onClick={() => setIsOpen(false)}></CloseButton>
        </SideNavHeader>
        <SideNavMainLink to="/discover" exact>
          Discover
          <img src={SearchWhite} alt="Magnifying glass" />
        </SideNavMainLink>
        <SideNavSectionTitle>
          <HeaderText>Watched</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/watched/movies">Movies</NavLink>
        <NavLink to="/watched/tv-shows">Tv Shows</NavLink>
        <SideNavSectionTitle>
          <HeaderText>Saved</HeaderText>
        </SideNavSectionTitle>
        <NavLink to="/saved/movies">Movies</NavLink>
        <NavLink to="/saved/tv-shows">Tv Shows</NavLink>
      </SideNavBarCont>
    </div>
  );
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  color: white;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s ease-in-out;

  @media ${device.laptop} {
    visibility: visible;
    transform: none;
  }
`;

const SectionsStyles = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const SideNavMainLink = styled(Link)`
  ${SectionsStyles}

  &:hover, &:focus-visible {
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
  }
`;

const SideNavHeader = styled.div`
  ${SectionsStyles}
`;

const SideNavSectionTitle = styled.div`
  font-size: 1.6em;
  font-weight: 700;
  padding: 25px 0 15px 35px;
`;

const HeaderText = styled.div`
  padding: 0 35px 10px 0;
  border-bottom: 1px solid ${colors.lightBackground};
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  opacity: 0.8;
  font-size: 1.2em;
  padding: 10px 35px;

  &:hover,
  &:focus-visible {
    opacity: 1;
    background: ${colors.sideNavBarHover};
  }

  &.active {
    background: ${colors.primaryColor};
    opacity: 1;
  }
`;

const Hamburger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 90;

  @media ${device.laptop} {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${colors.fontColor};
    visibility: ${({ isOpen }) => (isOpen ? 'hidden' : 'visible')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const CloseButton = styled.button`
   {
    width: 30px;
    height: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors.sideNavBar};
    border-radius: 100%;
    background: -webkit-linear-gradient(
        -45deg,
        transparent 0%,
        transparent 46%,
        white 46%,
        white 56%,
        transparent 56%,
        transparent 100%
      ),
      -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white 46%, white
            56%, transparent 56%, transparent 100%);
  }
  @media ${device.laptop} {
    display: none;
  }
`;
