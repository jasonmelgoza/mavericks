import Box from "../Box";

export default function Block({ as, children, className }) {
  return (
    <Box
      as={as}
      className={className}
      css={{
        margin: "0 0 1rem 0",
        backgroundColor: "$bg",

        "&.header-block": {
          marginBottom: "3rem",

          "& h1": {
            color: "$fg",
            fontSize: "1.5rem",
            fontWeight: "900",
            letterSpacing: "-0.0225rem",
            textTransform: "uppercase"
          }
        },

        "&.hero-block": {
          marginBottom: "3rem",

          "& p": {
            fontSize: "1.5rem"
          }
        },

        "&.content-block": {
          marginBottom: "3rem"
        },

        "&.nav-block": {
          marginBottom: "3rem",

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
