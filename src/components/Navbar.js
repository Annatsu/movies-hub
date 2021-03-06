// Node Modules
import React from "react"
import styled from "@emotion/styled"

// Components
import { Link } from "gatsby"
import DesktopNavbar from "./DesktopNavbar"
import ApplicationLogo from "./ApplicationLogo"

// Constants
import { GLOBAL_PADDING, NAVBAR_HEIGHT } from "../constants/styles"

const NavbarWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: ${NAVBAR_HEIGHT}px;
  top: 0;
  left: 0;
  right: 0;
  padding: ${GLOBAL_PADDING}px ${GLOBAL_PADDING * 2}px;
  background-color: rgba(0, 0, 0, 0.5);
  & > * {
    flex: 1;
  }
`

const Navbar = () => (
  <NavbarWrapper>
    <Link to="/" style={{ display: "contents" }}>
      <ApplicationLogo
        position={[0, 0]}
        alt="Application Logo"
        src="/logo.png"
      />
    </Link>
    <DesktopNavbar />
  </NavbarWrapper>
)

export default Navbar
