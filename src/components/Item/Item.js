import Link from 'next/link'
import cx from 'clsx'

import styles from './Item.module.css'

function formatDuration(startDate) {
  const [y, m, d] = startDate.split('-').map(Number)
  const start = new Date(y, m - 1, d)
  const now = new Date()
  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth()) + 1
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const startLabel = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  let duration = ''
  if (years > 0) duration += `${years} ${years === 1 ? 'yr' : 'yrs'}`
  if (years > 0 && months > 0) duration += ' '
  if (months > 0) duration += `${months} ${months === 1 ? 'mo' : 'mos'}`
  return `${startLabel} - Present · ${duration}`
}

export default function Item({
  className,
  description,
  external,
  heading,
  href,
  number,
  startDate,
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
            {external ? (
              <a href={href} target='_blank' rel='noopener noreferrer'>
                {heading}
              </a>
            ) : (
              <Link href={href}>{heading}</Link>
            )}
          </div>
        ) : (
          <div className='item-heading'>{heading}</div>
        )}
        {subHeading && <div className='item-subheading'>{subHeading}</div>}
        {(startDate || description) && (
          <div className='item-description'>
            {startDate ? formatDuration(startDate) : description}
          </div>
        )}
      </div>
    </div>
  )
}
