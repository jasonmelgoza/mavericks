import cx from 'clsx'
import {
  ArrowLeftIcon,
  ArrowTopRightIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons'

import { Dribbble, Github } from './src'

const IconMap = {
  'arrow-left': ArrowLeftIcon,
  'arrow-top-right': ArrowTopRightIcon,
  dribbble: Dribbble,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  twitter: TwitterLogoIcon
}

export default function Icon({ className, name, ...props }) {
  const IconWrapper = IconMap[name]
  const classNames = cx('icon', name, className)
  return IconWrapper ? <IconWrapper className={classNames} {...props} /> : null
}
