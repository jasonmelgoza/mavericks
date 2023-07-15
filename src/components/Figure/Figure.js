import * as React from 'react'
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

export default function StyledFigure({alt, className, height, original, thumbnail, width}) {
  return (
    <figure className={className}>
      <Gallery>
        <Item
          alt={alt}
          original={original}
          thumbnail={thumbnail}
          height={height}
          width={width}
        >
          {({ ref, open }) => (
            <img alt={alt} ref={ref} onClick={open} src={thumbnail} />
          )}
        </Item>
      </Gallery>
    </figure>
  );
}
