import { styled } from "../../stitches.config";

const StyledFigure = styled("figure", {
  marginTop: "$9",

  "&:not(:last-child)": {
    marginBottom: "$9",
  },
});

const FigureImg = styled("div", {
  overflow: "hidden",
  backgroundColor: "#fff",
  border: "1px solid $fg16",
  borderRadius: "6px"
});

const FigureCaption = styled("figcaption", {
  margin: "$2 0 0",
  color: "$fg64",
  fontSize: "$small"
});

export default function Figure( {children, caption, ...props} ) {
  return (
    <>
      <StyledFigure {...props}>
        <FigureImg>{children}</FigureImg>
        <FigureCaption>{caption}</FigureCaption>
      </StyledFigure>
    </>
  );
}
