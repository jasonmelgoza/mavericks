import cx from 'clsx'
import Link from 'next/link'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import { Box } from '@/components'
import styles from './Details.module.scss'

export default function Details({
  children,
  className,
  heading,
  link,
  meta,
  subheading,
  ...props
}) {
  return (
    <Box className={cx(styles.root, 'details', className)} {...props}>
      <div className='details-wrapper'>
        <div className='details-icon'>I</div>
        <div className='details-stack'>
          <div className='details-heading'>
            {link ? (
              <Link href={link}>
                <span>{heading}</span>
                <span>
                  <ArrowTopRightIcon />
                </span>
              </Link>
            ) : (
              <>
                <span>{heading}</span>
              </>
            )}
          </div>
          {subheading ? (
            <div className='details-subheading'>
              <span>{subheading}</span>
            </div>
          ) : null}
          <div className='details-meta'>
            <span>{meta}</span>
          </div>
        </div>
      </div>
    </Box>
  )
}
