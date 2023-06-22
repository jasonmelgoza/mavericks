import Box from "../Box";

export default function Heading({ children, className }) {
  return (
    <Box
      as="h1"
      className={className}
      css={{
        marginBottom: "1rem",
        fontSize: "2rem",
      }}
    >
      {children}
    </Box>
  );
}
