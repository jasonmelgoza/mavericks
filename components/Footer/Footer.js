import Image from "next/image";
import { styled } from "../../stitches.config";

const Box = styled("footer", {
  display: "flex",
  maxWidth: "900px",
  margin: "0 auto",
  paddingBottom: "96px"
});

const Content = styled("div", {
  display: "flex",
  paddingLeft: "calc(env(safe-area-inset-left) + 96px)",
  paddingRight: "calc(env(safe-area-inset-right) + 96px)",
  alignItems: "center",
  width: "100%"
});

export default function Footer() {
  return (
    <>
      <Box>
        <Content>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </Content>
      </Box>
    </>
  );
}
