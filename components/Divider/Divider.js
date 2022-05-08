import { styled } from "../../stitches.config";

const StyledDivider = styled("div", {
  maxWidth: "40rem",
  margin: "0 auto",
  paddingTop: "$8",
  paddingBottom: "$8",
  paddingLeft: "$8",
  paddingRight: "$8",

  hr: {
    opacity: "0.15",
    borderWidth: "0 0 1px",
    borderImage: "initial",
    borderColor: "inherit",
    borderStyle: "solid",
    width: "100%"
  }
});

export default function Divider({ ...props }) {
  return (
    <>
      <StyledDivider {...props}>
        <hr />
      </StyledDivider>
    </>
  );
}
