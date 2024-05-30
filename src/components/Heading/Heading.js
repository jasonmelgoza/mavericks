import * as React from 'react'
import cx from 'clsx'
import styles from './Heading.module.css'

export default function Heading({ level = 1, children, className }) {
  return React.createElement(
    `h${level}`,
    {
      className: [
        cx(styles.root, styles.newStyle, `heading-${level}`),
        className
      ]
        .filter(Boolean)
        .join(' ')
    },
    children
  )
}
