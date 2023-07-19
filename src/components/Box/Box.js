export default function Box({ as: Component = 'div', children, ...rest }) {
  return (
    <Component {...rest}>
      {children}
    </Component>
  );
}
