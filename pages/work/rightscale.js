import Link from "next/link";
import Image from "next/image";

import { styled } from "../../stitches.config";
import {
  Article,
  Container,
  Divider,
  Figure,
  Heading,
  Hero,
  Icon
} from "../../components";

import Hero1 from "../../public/images/hero-rightscale-1.png";
import Image2 from "../../public/images/shot-rightscale-2.png";
import Image3 from "../../public/images/shot-rightscale-3.png";
import Image4 from "../../public/images/shot-rightscale-4.png";
import Image5 from "../../public/images/shot-rightscale-5.png";

const Pagination = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginTop: "$8",
  gap: "$4",

  a: {
    padding: "$4",
    borderRadius: "0.875rem",
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
          <Image src={Hero1} alt="Design Kit Landing Page" placeholder="blur" />
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
            <Image
              src={Image2}
              alt="Design Kit Branding Page"
              placeholder="blur"
            />
          </Figure>
          <p>
            What started as a shared color palette in a Sketch file ultimately
            grew into a design system we called “Design Kit.” It included
            branding assets, color guidelines, an icon library, and a few
            selected UX patterns.
          </p>
          <Figure caption="Product Color Guidelines">
            <Image
              src={Image3}
              alt="Design Kit Product Color Guidelines"
              placeholder="blur"
            />
          </Figure>
          <Figure caption="Product Icon Library">
            <Image
              src={Image4}
              alt="Design Kit Product Icon Library"
              placeholder="blur"
            />
          </Figure>
          <p>
            The team also included coded component examples that contained all
            the necessary markup and style for a given component. These pages
            were easy to share and made an excellent reference tool for
            front-end devs.
          </p>
          <Figure caption="Component Snippets">
            <Image
              src={Image5}
              alt="Design Kit Component Snippets"
              placeholder="blur"
            />
          </Figure>
        </Container>
        <Divider />
        <Container as="section">
          <p>
            Building this system and sharing this knowledge was a priceless
            learning experience that would aid me in my next role. In 2019
            RightScale was acquired, which marked the end of my adventure there.
          </p>
        </Container>
        <Container as="footer">
          <Pagination>
            <Link href="/work/securedocs">
              <a>
                <Icon ariaLabel="Previous" name="arrow left" />
              </a>
            </Link>
            <Link href="#">
              <a style={{ opacity: "50%", pointerEvents: "none" }}>
                <Icon name="arrow right" />
              </a>
            </Link>
          </Pagination>
        </Container>
      </Article>
    </>
  );
}