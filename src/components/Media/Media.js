import cx from 'clsx'
import styles from './Media.module.scss'
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

export default function Media({ alt, className, height, original, thumbnail, width }) {
  return (
    <div className={cx(styles.root, className)}>
      <Gallery>
        <Item
          alt={alt}
          height={height}
          original={original}
          thumbnail={thumbnail}
          width={width}
        >
          {({ ref, open }) => (
            <img alt={alt} ref={ref} onClick={open} src={thumbnail} />
          )}
        </Item>
      </Gallery>
    </div>
  );
}
