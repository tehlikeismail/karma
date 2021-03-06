import React from "react";
import PropTypes from "prop-types";

import { CSSTransition } from "react-transition-group";

import "./index.css";

const MountFade = ({ children, duration, ...props }) => (
  <CSSTransition
    in={true}
    classNames="components-animation-fade"
    timeout={150}
    appear={true}
    enter={true}
    exit={true}
    {...props}
  >
    {children}
  </CSSTransition>
);
MountFade.propTypes = {
  children: PropTypes.node.isRequired
};

export { MountFade };
