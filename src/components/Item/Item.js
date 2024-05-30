import Link from 'next/link'
import cx from 'clsx'

import styles from './Item.module.css'

export default function Item({
  className,
  description,
  heading,
  href,
  number,
  subHeading
}) {
  return (
    <div className={cx(styles.root, className)}>
      {number && (
        <div className='item-column'>
          <span className='item-number'>{number}</span>
        </div>
      )}
      <div className='item-column'>
        {href ? (
          <div className='item-heading'>
            <Link href={href}>{heading}</Link>
          </div>
        ) : (
          <div className='item-heading'>{heading}</div>
        )}
        {subHeading && <div className='item-subheading'>{subHeading}</div>}
        {description && <div className='item-description'>{description}</div>}
      </div>
    </div>
  )
}
