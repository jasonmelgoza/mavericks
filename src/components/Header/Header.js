import Box from "../Box";

export default function Header({ children, className }) {
  return (
    <Box
      as="header"
      className={className}
      css={{
        marginBottom: "3rem"
      }}
    >
      <Box
        css={{
          "& h1": {
            color: "$fg",
            fontSize: "1.5rem",
            fontWeight: "900",
            letterSpacing: "-0.0225rem",
            textTransform: "uppercase"
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
