import { Link as LinkScroll, animateScroll } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom';
import styled from '@emotion/styled';
import { Menu } from 'grommet-icons';

import {
  PRIMARY_ATTENTION_COLOR,
  EMPHASIS_FONT_COLOR,
  PRIMARY_FONT_COLOR,
  SECONDARY_FONT_COLOR,
  SECONDARY_ATTENTION_COLOR,
} from '../common/constants/colors';
import { AppBar } from '../common/components/AppBar';
import { HomeIcon } from '../common/components/HomeIcon';

export type ButtonProps = {
  active?: boolean;
};

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 3rem;
`;

const NavLinkScroll = styled(LinkScroll)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: ${SECONDARY_FONT_COLOR};

  &.active {
    color: ${PRIMARY_FONT_COLOR};
    border-bottom: ${`3px solid ${EMPHASIS_FONT_COLOR}`};
  }

  &:hover {
    transition: border-bottom 0.2s ease-in-out;
    color: ${PRIMARY_FONT_COLOR};
    border-bottom: 3px solid ${EMPHASIS_FONT_COLOR};
  }
`;

const NavLinkRoute = styled(LinkRoute)`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
  cursor: pointer;
  color: ${SECONDARY_FONT_COLOR};

  &:hover {
    transition: border-bottom 0.2s ease-in-out;
    color: ${PRIMARY_FONT_COLOR};
    border-bottom: 3px solid ${EMPHASIS_FONT_COLOR};
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(LinkScroll)`
  border-radius: 50px;
  background: ${PRIMARY_ATTENTION_COLOR};
  white-space: nowrap;
  padding: 10px 22px;
  color: ${PRIMARY_FONT_COLOR};
  font-size: 1.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: background 0.2s ease-in-out;
    background: ${SECONDARY_ATTENTION_COLOR};
    box-shadow: 0px 0.5px 5px #f4f4f9;
  }
`;

type NavBarProps = {
  toggle: () => void;
}

export const NavBar = (props: NavBarProps) => {
  const { toggle} = props;

  return (
    <AppBar>
      <HomeIcon />
      <MobileIcon onClick={toggle}>
        <Menu color={PRIMARY_FONT_COLOR} />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinkScroll
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            About
          </NavLinkScroll>
        </NavItem>
        <NavItem>
          <NavLinkScroll
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Skills
          </NavLinkScroll>
        </NavItem>
        <NavItem>
          <NavLinkScroll
            to="personal"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Personal
          </NavLinkScroll>
        </NavItem>
        <NavItem>
          <NavLinkScroll
            to="professional"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Professional
          </NavLinkScroll>
        </NavItem>
      </NavMenu>
      <NavBtn>
        <NavLinkRoute to="/resume">Resume</NavLinkRoute>
        <NavBtnLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
        >
          Contact
        </NavBtnLink>
      </NavBtn>
    </AppBar>
  );
};
