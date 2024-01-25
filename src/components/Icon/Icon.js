import cx from 'clsx'
import {
  ArrowLeftIcon,
  ArrowTopRightIcon,
  DownloadIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon
} from '@radix-ui/react-icons'

import { Dribbble, Mastodon } from './src'

const IconMap = {
  'arrow-left': ArrowLeftIcon,
  'arrow-top-right': ArrowTopRightIcon,
  document: FileTextIcon,
  dribbble: Dribbble,
  download: DownloadIcon,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  mastodon: Mastodon
}

export default function Icon({ className, name, ...props }) {
  const IconWrapper = IconMap[name]
  const classNames = cx('icon', name, className)
  return IconWrapper ? <IconWrapper className={classNames} {...props} /> : null
}
