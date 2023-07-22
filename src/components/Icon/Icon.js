import cx from "clsx";

import { Dribbble } from "./src";

const IconMap = {
  dribbble: Dribbble
};

export default function Icon({ className, name, ...props }) {
  const IconWrapper = IconMap[name];
  const classNames = cx("ui", "icon", className);
  return IconWrapper ? <IconWrapper className={classNames} {...props} /> : null;
}
