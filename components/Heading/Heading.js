import { styled } from "../../stitches.config";

const StyledHeading = styled("h1", {
  textAlign: "left",
  color: "$fg",
  variants: {
    size: {
      huge: {
        fontSize: "$huge",
        fontWeight: "$black",
        letterSpacing: "$tighter",
        lineHeight: "$none",
        marginBottom: "calc(1em * 0.75)",

        "@bp1": {
          fontSize: "2rem"
        }
      },

      big: {
        fontSize: "$big",
        fontWeight: "$black",
        letterSpacing: "$tighter",
        lineHeight: "$none",
        marginBottom: "calc(1em * 0.75)",

        "@bp1": {
          fontSize: "2rem"
        }
      },

      large: {
        color: "$fg64",
        fontSize: "$large",
        fontWeight: "$bold",
        letterSpacing: "$tight",
        lineHeight: "$snug",
        marginBottom: "calc(1em * 0.25)",

        "&:not(:first-child)": {
          marginTop: "calc(1em / 1.125)"
        },

        "@bp1": {
          fontSize: "1.5rem"
        }
      },

      medium: {
        fontSize: "$medium",
        fontWeight: "$bold",
        lineHeight: "$snug",
        marginBottom: "calc(1em * 0.25)",

        "&:not(:first-child)": {
          marginTop: "calc(1em / 1.125)"
        },

        "@bp1": {
          fontSize: "1.125rem"
        }
      },

      small: {
        fontSize: "$small",
        fontWeight: "$normal",
        lineHeight: "$snug",
        marginBottom: "calc(1em * 0.25)",

        "&:not(:first-child)": {
          marginTop: "calc(1em / 1.125)"
        }
      }
    }
  }
});

export default function Heading({ size, ...props }) {
  return (
    <>
      <StyledHeading size={size} {...props} />
    </>
  );
}
