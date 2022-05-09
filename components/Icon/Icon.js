import * as React from "react";
import cx from "clsx";

import {
  ArrowLeft,
  ArrowRight,
  Blog,
  Dribbble,
  Instagram,
  Logo,
  Menu,
  Pin,
  Project,
  Twitter,
  User,
  Work
} from "./src";

const IconMap = {
  "arrow left": ArrowLeft,
  "arrow right": ArrowRight,
  blog: Blog,
  dribbble: Dribbble,
  instagram: Instagram,
  logo: Logo,
  menu: Menu,
  pin: Pin,
  project: Project,
  twitter: Twitter,
  user: User,
  work: Work
};

export default function Icon({ className, name, ...props }) {
  const IconWrapper = IconMap[name];
  const classNames = cx("ui", "icon", className);
  return IconWrapper ? <IconWrapper className={classNames} {...props} /> : null;
}
