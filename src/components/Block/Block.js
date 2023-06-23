import Box from "../Box";

export default function Block({ as, children, className }) {
  return (
    <Box
      as={as}
      className={className}
      css={{
        marginBottom: "1rem",
        backgroundColor: "$bg",

        "&.header-block": {
          margin: "0 auto 3rem auto",

          "& h1": {
            color: "$fg",
            fontSize: "1.5rem",
            fontWeight: "900",
            letterSpacing: "-0.0225rem",
            textTransform: "uppercase"
          }
        },

        "&.content-block": {
          margin: "0 auto"
        },

        "&.nav-block": {
          marginBottom: "0",
          marginTop: "3rem",

          "& ul": {
            margin: "0px",
            padding: "0",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          },

          "& a": {
            fontSize: "1.125rem",
            lineHeight: "1.5",
            color: "$fg"
          }
        }
      }}
    >
      {children}
    </Box>
  );
}
