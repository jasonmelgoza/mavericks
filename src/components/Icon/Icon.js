import cx from 'clsx'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightIcon,
  DownloadIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'

import { Dribbble, Mastodon, Twitter } from './src'

const IconMap = {
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-top-right': ArrowTopRightIcon,
  document: FileTextIcon,
  download: DownloadIcon,
  dribbble: Dribbble,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  mastodon: Mastodon,
  twitter: Twitter
}

export default function Icon({ className, name, ...props }) {
  const IconWrapper = IconMap[name]
  const classNames = cx('icon', name, className)
  return IconWrapper ? <IconWrapper className={classNames} {...props} /> : null
}
