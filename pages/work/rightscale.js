import Head from "next/head";
import Link from "next/link";

import { styled } from "../../stitches.config";
import {
  Article,
  Box,
  Container,
  Divider,
  Figure,
  Geist,
  Heading,
  Hero,
  Icon
} from "../../components";

const SvgShare = (props) => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.25 4.75h-2.5a2 2 0 0 0-2 2v10.5a2 2 0 0 0 2 2h10.5a2 2 0 0 0 2-2v-2.5M19.25 9.25v-4.5h-4.5M19 5l-7.25 7.25"
    />
  </svg>
);

const Pagination = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "$8",
  gap: "$4",

  a: {
    padding: "$4",
    borderRadius: "$3",
    backgroundColor: "$fg8",
    color: "$fg",
    transition: "color 0.15s ease, background-color 0.15s ease",

    "&:before": {
      display: "none"
    },

    "&:hover": {
      backgroundColor: "$primary16",
      color: "$primary"
    }
  }
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Jason Melgoza - Design at RightScale</title>
      </Head>
      <Article>
        <Container as="header">
          <Heading as="h1" size="huge">
            Design at RightScale
          </Heading>
        </Container>
        <Container as="section">
          <p>
            In 2012 I joined the product team at RightScale as a UX Developer.
            My primary mission was to help design an efficient and clean-looking
            customer experience across a growing product line.
          </p>
          <p>
            While there, I was fortunate to be mentored by a fantastic group of
            people who helped me sharpen my skills as an interface designer and
            a front-end developer.
          </p>
        </Container>
        <Hero caption="Screenshots from the Design Kit Project">
          <Geist
            className="hero"
            original="/images/hero-rightscale-1.png"
            thumbnail="/images/hero-rightscale-1-thumb.png"
            width="1088"
            height="680"
          />
        </Hero>
        <Container as="section">
          <Heading as="h2" size="large">
            Selected Projects
          </Heading>
          <Heading as="h3" size="big">
            Design Kit
          </Heading>
          <p>
            By 2013 RightScale was growing fast. Different teams were working on
            projects in isolation. As a design team, we saw the need to
            consolidate our processes and provide a single source of truth for
            product design.
          </p>
          <Figure caption="Branding Assets Page">
            <Geist
              className="branding"
              original="/images/shot-rightscale-2.png"
              thumbnail="/images/shot-rightscale-2-thumb.png"
              width="1344"
              height="801"
            />
          </Figure>
          <p>
            What started as a shared color palette in a Sketch file ultimately
            grew into a design system we called “Design Kit.” It included
            branding assets, color guidelines, an icon library, and a few
            selected UX patterns.
          </p>
          <Figure caption="Product Color Guidelines">
            <Geist
              className="colors"
              original="/images/shot-rightscale-3.png"
              thumbnail="/images/shot-rightscale-3-thumb.png"
              width="1344"
              height="801"
            />
          </Figure>
          <Figure caption="Product Icon Library">
            <Geist
              className="colors"
              original="/images/shot-rightscale-4.png"
              thumbnail="/images/shot-rightscale-4-thumb.png"
              width="1344"
              height="801"
            />
          </Figure>
          <p>
            Along with a style guide, I designed and built component example
            pages that contained all the necessary markup and style for a given
            component. These pages were easy to share and were an excellent
            reference tool for front-end devs.
          </p>
          <Figure caption="Component Snippets">
            <Geist
              className="icons"
              original="/images/shot-rightscale-5.png"
              thumbnail="/images/shot-rightscale-5-thumb.png"
              width="1344"
              height="1022"
            />
          </Figure>

          <Box
            css={{
              backgroundColor: "$primary16",
              borderRadius: "$3",
              padding: "$4"
            }}
          >
            <Heading
              css={{
                alignItems: "center",
                color: "$primary",
                display: "flex",
                flexDirection: "row",
                fontSize: "1.125rem",
                gap: "$1",
                marginBottom: "0.25em",
                textTransform: "uppercase",

                "@bp1": {
                  fontSize: "1rem"
                }
              }}
            >
              <a
                href="https://unequaled-garden.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Design kit Demo
              </a>
              <SvgShare />
            </Heading>
            <Box
              as="p"
              css={{
                fontSize: "1.25rem",
                fontWeight: "400",
                lineHeight: "1.5",

                "@bp1": {
                  fontSize: "1rem"
                }
              }}
            >
              This project is no longer in use but I<span>&#39;</span>ve got an{" "}
              <a
                href="https://unequaled-garden.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                archived version
              </a>{" "}
              of the site for demo purposes.
            </Box>
          </Box>
        </Container>
        <Divider />
        <Container as="section">
          <p>
            Building this system and sharing this knowledge was a priceless
            learning experience that would eventually direct me to my next role.
            In 2019 RightScale was acquired, which marked the end of my
            adventure there.
          </p>
        </Container>
        <Container as="footer">
          <Pagination>
            <Link legacyBehavior href="/work/securedocs">
              <a>
                <Icon aria-label="Previous" name="arrow left" />
              </a>
            </Link>
            <Link legacyBehavior href="#">
              <a style={{ opacity: "50%", pointerEvents: "none" }}>
                <Icon aria-label="Next" name="arrow right" />
              </a>
            </Link>
          </Pagination>
        </Container>
      </Article>
    </>
  );
}