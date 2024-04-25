import cx from 'clsx'
import { Box, Icon } from '@/components'
import styles from './Download.module.scss'

// SvgFileType is a functional component that returns an SVG element
const SvgFileType = (props) => (
  <svg
    className='file-type-icon'
    xmlns='http://www.w3.org/2000/svg'
    width={38}
    height={40}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M10.75 0A2.75 2.75 0 0 0 8 2.75v34.5A2.75 2.75 0 0 0 10.75 40h24.5A2.75 2.75 0 0 0 38 37.25V13.164c0-.464-.184-.909-.513-1.237L26.573.513A1.75 1.75 0 0 0 25.336 0H10.75ZM9.5 2.75c0-.69.56-1.25 1.25-1.25H25v11.25c0 .414.336.75.75.75H36.5v23.75c0 .69-.56 1.25-1.25 1.25h-24.5c-.69 0-1.25-.56-1.25-1.25V2.75ZM35.44 12 26.5 2.56V12h8.94Z'
      clipRule='evenodd'
    />
    <rect width={33} height={14} x={0.5} y={19.5} fill='#EC5D5E' rx={5.5} />
    <rect width={33} height={14} x={0.5} y={19.5} stroke='#EA484A' rx={5.5} />
    <path
      fill='#fff'
      d='M5.974 31v-8.727h3.605c.653 0 1.217.128 1.692.383.477.253.845.607 1.103 1.061.259.452.388.978.388 1.577 0 .602-.132 1.13-.396 1.581a2.657 2.657 0 0 1-1.12 1.044c-.487.247-1.063.37-1.73.37H7.29v-1.661h1.832c.318 0 .584-.056.797-.166.216-.111.38-.266.49-.465.11-.201.166-.436.166-.703 0-.27-.055-.503-.166-.699a1.116 1.116 0 0 0-.49-.46c-.216-.108-.482-.162-.797-.162h-1.04V31h-2.11Zm10.934 0h-3.226v-8.727h3.222c.889 0 1.654.174 2.297.524a3.582 3.582 0 0 1 1.49 1.5c.35.65.525 1.429.525 2.335 0 .91-.175 1.69-.524 2.344a3.582 3.582 0 0 1-1.487 1.504c-.645.347-1.41.52-2.297.52Zm-1.117-1.798h1.036c.488 0 .902-.083 1.24-.248.34-.167.598-.438.771-.813.176-.378.264-.881.264-1.509 0-.628-.088-1.128-.264-1.5a1.63 1.63 0 0 0-.78-.81c-.34-.167-.76-.251-1.26-.251H15.79v5.13ZM22.328 31v-8.727h5.957v1.713h-3.848v1.79h3.469v1.717h-3.469V31h-2.11Z'
    />
  </svg>
)

// Download is a functional component that receives className, icon, name, and url as props
export default function Download({ className, name, file, url }) {
  return (
    // Box component with combined root and className styles
    <Box className={cx(styles.root, className)}>
      <a className='download-wrapper' href={url} target='_blank'>
        <div className='download-icon'>
          <SvgFileType />
        </div>
        <Box>
          <div className='download-name'>
            {name}
          </div>
          <div className='download-meta'>
            {file}
          </div>
        </Box>
      </a>
    </Box>
  )
}
