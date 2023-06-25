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

        "&.lead-block": {
          marginBottom: "1.5rem",

          "& p": {
            fontSize: "1.875rem",
            lineHeight: "1.3"
          }
        },

        "&.content-block": {
          marginBottom: "3rem",

          "& p": {
            fontSize: "1rem",
            lineHeight: "1.5",
            marginBottom: "1rem"
          },

          "& ul": {
            fontSize: "1rem",
            lineHeight: "1.5",
            marginBottom: "1rem",
            padding: "0 0 0 1rem",
            listStyleType: "🤘"
          },

          "& h1": {
            fontSize: "2.25rem",
            lineHeight: "1.2",
            marginBottom: "1rem"
          },

          "& h2": {
            fontSize: "1.875rem",
            lineHeight: "1.2",
            marginBottom: "1rem"
          },

          "& h3": {
            fontSize: "1.25rem",
            fontWeight: "500",
            lineHeight: "1.2",
            textTransform: "uppercase",
            marginTop: "1.5rem",
            marginBottom: "0.75rem"
          },

          "& a": {
            color: "$hiContrast",
            textDecoration: "underline",

            "&:hover": {
              textDecoration: "none"
            }
          },

          "& hr": {
            height: "1px",
            marginTop: "2rem",
            marginBottom: "2rem",
            borderColor: "rgba(255, 255, 255, .10)"
          }
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
            color: "$hiContrast",
            transitionProperty: "all",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",

            "&:hover": {
              opacity: "50%",
              textDecoration: "none"
            }
          }
        }
      }}
    >
      {children}
    </Box>
  );
}
