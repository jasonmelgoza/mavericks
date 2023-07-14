export default function Block({ children, className }) {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}
