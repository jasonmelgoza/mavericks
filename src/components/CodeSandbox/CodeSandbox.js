export default function CodeSandbox(props) {
  return (
    <div>
      <iframe
        {...props}
        frameBorder='0'
        allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
        sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
      />
      <style jsx>
        {`
          iframe {
            margin-bottom: 1.25rem;
            width: 100%;
            height: 500px;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  )
}
