import * as React from "react";
import cx from "clsx";

import {
  Blog,
  Logo,
  Pin,
  User,
  Work,
  Project,
  Twitter,
  Dribbble,
  Instagram
} from "./src";

const IconMap = {
  blog: Blog,
  dribbble: Dribbble,
  instagram: Instagram,
  logo: Logo,
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
