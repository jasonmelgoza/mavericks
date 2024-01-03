import { Sandpack } from '@codesandbox/sandpack-react'
import styles from './Sandpack.module.scss'

export default function App({ className }) {
  return (
    <Sandpack
      style={{ marginBottom: '2.25rem'}}
      className={className}
      template='react'
      customSetup={{
        dependencies: {
          'metal-icons': 'latest'
        }
      }}
      files={{
        '/App.js': `import { Folder, Document, Bookmark, Heart } from 'metal-icons' 

export default function App() {
  return (
    <div style={{ width: '100%', height: '96vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
      <Folder />
      <Document />
      <Bookmark />
      <Heart />
    </div>
  )
}`
      }}
    />
  )
}
