import cx from 'clsx'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowTopRightIcon,
  DownloadIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ReaderIcon
} from '@radix-ui/react-icons'

// Importing specific icons from the local source
import { Dribbble, Mastodon, Twitter } from './src'

// Mapping icon names to their corresponding components
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
  twitter: Twitter,
  'read-cv': ReaderIcon,
}

// Exporting a default Icon component
export default function Icon({ className, name, ...props }) {
  // Getting the appropriate icon component from the IconMap
  const IconWrapper = IconMap[name]
  
  // Creating a string of classnames using the clsx library
  const classNames = cx('icon', name, className)
  
  // If the IconWrapper exists, render it with the given classnames and props, otherwise render null
  return IconWrapper ? <IconWrapper className={classNames} {...props} /> : null
}