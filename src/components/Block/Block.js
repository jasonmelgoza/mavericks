import Box from "../Box";

export default function Block({ as, children, className }) {
  return (
    <Box
      as={as}
      className={className}
      css={{
        marginBottom: "1rem",
        backgroundColor: "$bg",

        "&.content-block": {
          margin: "0 auto"
        }
      }}
    >
      {children}
    </Box>
  );
}
