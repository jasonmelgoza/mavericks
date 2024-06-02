import cx from 'clsx'
import { Sandpack } from '@codesandbox/sandpack-react'
import styles from './Sandpack.module.css'
import metalIcons from './packs/metalIcons'

export default function SandpackComponent({ className }) {
  return (
    <div className={cx(styles.root, className)}>
      <Sandpack
        template='react'
        customSetup={{
          dependencies: {
            'metal-icons': 'latest'
          }
        }}
        files={{
          '/App.js': metalIcons
        }}
      />
    </div>
  )
}
