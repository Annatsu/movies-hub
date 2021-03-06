// Node Modules
import React, { useMemo } from "react"
import styled from "@emotion/styled"
import cx from "classnames"

// Custom Hooks
import useController, { APP_KEYS } from "../../hooks/useController"

// HOCs
import withDisplayPosition from "../HOCs/withDisplayPosition"

const NavItem = ({ isControllerSelected, className, ...props }) => {
  console.log("NavItem", props.row, props.col)
  const controllerActions = useMemo(
    () =>
      isControllerSelected
        ? {
            [APP_KEYS.OK_BUTTON]: () => {
              console.log("NavItem clicked on position")
            },
          }
        : {},
    [isControllerSelected]
  )

  useController(controllerActions, [isControllerSelected])

  return (
    <li
      {...props}
      className={cx(
        className,
        isControllerSelected && "is-controller-selected"
      )}
    />
  )
}

export default withDisplayPosition(styled(NavItem)`
  margin-left: 25px;
  font-weight: 900;
  font-size: 13px;
  color: #e5e5e5;
  text-transform: uppercase;
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 1;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  i {
    font-size: 18px;
  }
`)
