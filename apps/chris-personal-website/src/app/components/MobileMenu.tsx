import { Link as LinkRoute } from 'react-router-dom';
import { animateScroll, Link as LinkScroll } from 'react-scroll';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FormClose } from 'grommet-icons';
import {
  PRIMARY_BACKGROUND_COLOR,
  PRIMARY_FONT_COLOR,
  SECONDARY_BACKGROUND_COLOR,
  PRIMARY_SELECTION_COLOR,
  EMPHASIS_FONT_COLOR,
  SECONDARY_FONT_COLOR,
  PRIMARY_ATTENTION_COLOR,
  SECONDARY_ATTENTION_COLOR,
} from '../common/constants/colors';

type SidebarWrapperProps = {
  isOpen: boolean;
};

const Hoverable = css`
  &:hover {
    color: ${PRIMARY_FONT_COLOR};
    background: ${SECONDARY_BACKGROUND_COLOR};
    transition: all 0.2s ease-in-out;
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: ${PRIMARY_BACKGROUND_COLOR};
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props: SidebarWrapperProps) => (props.isOpen ? '100%' : '0')};
  top: ${(props: SidebarWrapperProps) => (props.isOpen ? '0' : '-100%')};
`;

const CloseIcon = styled(FormClose)`
  // padding-top: 0;
  // margin-left: 90%;
  top: 0;
  right: 0;
  position: fixed;
  margin-right: 1.5em;
  margin-top: 1.6em;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 3px solid ${EMPHASIS_FONT_COLOR};
    fill: ${PRIMARY_SELECTION_COLOR};
  }
`;

const MenuWrapper = styled.div`
  display: ${(props: MenuWrapperProps) => (props.isOpen ? 'block' : 'none')};
  color: ${PRIMARY_FONT_COLOR};
`;

const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 70px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const SideBarHoverStyle = css`
  &:hover {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    color: ${PRIMARY_FONT_COLOR};
    transition: border-bottom 0.2s ease-in-out;
    border-bottom: 3px solid ${EMPHASIS_FONT_COLOR};
  }
`;

const SideBarActiveStyle = css`
  &.active {
    color: ${PRIMARY_FONT_COLOR};
    border-bottom: ${`3px solid ${EMPHASIS_FONT_COLOR}`};
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SideBarStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 1rem 1rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  color: ${SECONDARY_FONT_COLOR};
`;

const MenuLinkRoute = styled(LinkRoute)`
  ${SideBarStyle};
  padding: 1.5rem;
  ${SideBarHoverStyle};
  &:hover {
    padding: 1.1rem;
    margin-bottom: 0.3rem;
  }
`;

const MenuLinkScroll = styled(LinkScroll)`
  ${SideBarStyle};
  ${SideBarHoverStyle};
  ${SideBarActiveStyle};
`;

const MenuButtonScroll = styled(LinkScroll)`
  ${SideBarStyle};
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
  width: 70%;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transition: background, border-bottom 0.2s ease-in-out;
    background: ${SECONDARY_ATTENTION_COLOR};
    color: ${PRIMARY_FONT_COLOR};
    box-shadow: 0px 0.5px 5px #f4f4f9;
  }
`;

type MobileMenuProps = {
  isOpen: boolean;
  toggle: () => void;
};

type MenuWrapperProps = {
  isOpen: boolean;
};

export const MobileMenu = (props: MobileMenuProps) => {
  const { isOpen, toggle } = props;

  const toggleHome = () => {
    toggle();
    animateScroll.scrollToTop();
  };

  return (
    <SidebarWrapper isOpen={isOpen}>
      <CloseIcon
        cursor="pointer"
        color={PRIMARY_FONT_COLOR}
        a11yTitle="close"
        onClick={toggle}
      />
      <MenuWrapper isOpen={isOpen}>
        <MenuLinkScroll
          to="/"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onClick={toggleHome}
        >
          Home
        </MenuLinkScroll>
        <Menu>
          <MenuLinkScroll
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggle}
          >
            About
          </MenuLinkScroll>
          <MenuLinkScroll
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggle}
          >
            Skills
          </MenuLinkScroll>
          <MenuLinkScroll
            to="personal"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggle}
          >
            Personal
          </MenuLinkScroll>
          <MenuLinkScroll
            to="professional"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
            onClick={toggle}
          >
            Professional
          </MenuLinkScroll>
        </Menu>
        <MenuLinkRoute to="resume" onClick={toggle}>
          Resume
        </MenuLinkRoute>
        <MenuButtonScroll
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="active"
          onClick={toggle}
        >
          Contact
        </MenuButtonScroll>
      </MenuWrapper>
    </SidebarWrapper>
  );
};
