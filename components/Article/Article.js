import { styled } from "../../stitches.config";

const Body = styled("article", {
  "@bp1": {
    padding: "$5 0 0 0"
  },

  a: {
    position: "relative",
    color: "$primary",
    transition: "color 0.15s ease-in",

    "&:before": {
      content: "",
      position: "absolute",
      bottom: "-4px",
      left: "0",
      right: "0",
      height: "2px",
      backgroundColor: "$primary",
      transformOrigin: "bottom right",
      transform: "scaleX(0)",
      transition: "transform 0.5s ease"
    },

    "&:hover": {
      color: "$primary",

      "&:before": {
        transformOrigin: "bottom left",
        transform: "scaleX(1)"
      }
    }
  }
});

export default function Article({ children, ...props }) {
  return (
    <>
      <Body {...props}>{children}</Body>
    </>
  );
}
