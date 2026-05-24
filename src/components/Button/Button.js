import React from 'react'
import cx from 'clsx'
import styles from './Button.module.css'

export default function Button({ className, href, text }) {
  return (
    <div className={styles.container}>
      <a
        className={cx(styles.root, className)}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='button-text'>{text}</span>
      </a>
    </div>
  )
}
