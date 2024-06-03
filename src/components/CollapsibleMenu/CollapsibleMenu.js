import React from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import cx from 'clsx'
import styles from './CollapsibleMenu.module.css'

const CollapsibleMenu = ({children}) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Collapsible.Root
      className={cx(open ? styles.open : styles.closed, 'CollapsibleRoot')}
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Collapsible.Trigger asChild>
          <button
            aria-label="Toggle mobile menu"
            className={cx(styles.burger, open ? 'burger-open' : 'burger-closed')}
          >
            <span />
            <span />
            <span />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content className={open ? styles.navOpen : styles.navClosed}>
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default CollapsibleMenu
