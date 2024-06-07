import React from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import cx from 'clsx'
import styles from './CollapsibleMenu.module.css'

const CollapsibleMenu = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Collapsible.Root
      className={cx(styles.root)}
      open={open}
      onOpenChange={setOpen}
    >
      <Collapsible.Trigger asChild>
        <button
          aria-label='Toggle mobile menu'
          className={cx(styles.trigger, open ? 'TriggerOpen' : 'TriggerClosed')}
        >
          <span />
          <span />
          <span />
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content
        className={cx(styles.content, open ? 'ContentOpen' : 'ContentClosed')}
      >
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default CollapsibleMenu
