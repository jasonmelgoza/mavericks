import * as React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Box } from "../../components";

export default function Geist({
  alt,
  className,
  original,
  thumbnail,
  width,
  height
}) {
  return (
    <Box
      as="div"
      className={className}
    >
      <Gallery>
        <Item
          alt={alt}
          height={height}
          original={original}
          thumbnail={thumbnail}
          width={width}
        >
          {({ ref, open }) => (
            <img alt={alt} onClick={open} ref={ref} src={thumbnail} />
          )}
        </Item>
      </Gallery>
    </Box>
  );
}
