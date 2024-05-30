import React, { useState } from 'react'
import cx from 'clsx'
import styles from './Button.module.css'

export default function Button({ className, email, text }) {
  const [buttonText, setButtonText] = useState(text)

  const handleCopyEmail = async () => {
    if (!navigator.clipboard) {
      console.error('Clipboard API not available')
      return
    }
    try {
      await navigator.clipboard.writeText(email)
      setButtonText('Email copied!')
      setTimeout(() => setButtonText(text), 2500) // Reset text after 2.5 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className={styles.container}>
      <button className={cx(styles.root, className)} onClick={handleCopyEmail}>
        <span className='button-text'>{buttonText}</span>
      </button>
    </div>
  )
}
