import { Sandpack } from '@codesandbox/sandpack-react'
import cx from 'clsx'
import { Box } from '@/components'
import styles from './Sandpack.module.scss'

export default function App({ className }) {
  return (
    <Box className={cx(styles.root, className)}>
      <Sandpack
        template='react'
        customSetup={{
          dependencies: {
            'metal-icons': 'latest'
          }
        }}
        files={{
'/App.js': `import { FolderIcon, DocumentIcon, BookmarkIcon, HeartIcon } from 'metal-icons/16/solid' 

export default function App() {
  return (
    <div style={{ width: '100%', height: '96vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
      <FolderIcon />
      <DocumentIcon />
      <BookmarkIcon />
      <HeartIcon />
    </div>
  )
}`
        }}
      />
    </Box>
  )
}
