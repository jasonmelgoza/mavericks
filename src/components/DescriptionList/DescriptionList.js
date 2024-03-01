import cx from 'clsx'
import { Box } from '@/components'
import styles from './DescriptionList.module.scss'

export default function DescriptionList({ className, detail, term }) {
  return (
    <Box as='dl' className={cx(styles.root, className)}>
      <dt>{term}</dt>
      <dd>{detail}</dd>
    </Box>
  );
}
