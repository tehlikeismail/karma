import React from "react";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import "./index.css";

const DropdownSlide = ({ children, duration, ...props }) => (
  <CSSTransition
    in={true}
    classNames="components-animation-slide"
    timeout={150}
    appear={true}
    exit={true}
    {...props}
  >
    {children}
  </CSSTransition>
);
DropdownSlide.propTypes = {
  children: PropTypes.node.isRequired
};

export { DropdownSlide };
