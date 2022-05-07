import Link from "next/link";
import Image from "next/image";

import { styled } from "../../stitches.config";
import {
  Artical,
  Box,
  Divider,
  Figure,
  Heading,
  Hero,
  Icon
} from "../../components";

import Hero1 from "../../public/images/hero-securedocs-1.png";
import Image2 from "../../public/images/shot-securedocs-a.gif";
import Image3 from "../../public/images/shot-securedocs-2.png";
import Image4 from "../../public/images/shot-securedocs-4.png";
import Image5 from "../../public/images/shot-securedocs-5.png";
import Image6 from "../../public/images/shot-securedocs-6.png";
import Image7 from "../../public/images/shot-securedocs-3.png";

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
      <Artical>
        <Box as="header">
          <Heading as="h1" size="huge">
            Design at SecureDocs
          </Heading>
        </Box>
        <Box as="section">
          <p>
            In 2018 I joined the engineering team at SecureDocs as their first
            UI Designer. My primary goal was to provide a design process to
            answer the needs of a growing cross-functional team.
          </p>
          <p>
            That process included building prototypes for product development
            and helping produce a rich component library to assist our engineers
            in building new features.
          </p>
        </Box>
        <Hero caption="Screenshots From My Work at SecureDocs">
          <Image src={Hero1} alt="SecureDocs Filebrowser" placeholder="blur" />
        </Hero>
        <Box as="section">
          <Heading as="h2" size="large">
            Selected Projects
          </Heading>
          <Heading as="h3" size="big">
            The Filebrowser
          </Heading>
          <p>
            One of the first major projects I worked on was revamping the design
            of the Filebrowser interface. It was a collaborative effort and an
            important milestone for our small cross-functional team.
          </p>
          <Figure caption="The Filebrowser UI">
            <Image src={Image2} alt="Filebrowser Page" />
          </Figure>
          <Heading as="h3" size="medium">
            The Challenge
          </Heading>
          <p>
            Currently, the SecureDocs product supports three different markets,
            each with its own set of features and branding. A big challenge was
            to produce a design language that worked in this ecosystem.
          </p>
          <p>
            For this, the team implemented a small color-theming system across a
            select set of UI elements. This theming system allowed us to provide
            a unique look for each SecureDocs product.
          </p>
          <Figure caption="Themeing displayed across the 'Sidebar' component">
            <Image
              src={Image4}
              alt="Design Kit Product Icon Library"
              placeholder="blur"
            />
          </Figure>
        </Box>

        <Divider />

        <Box as="section">
          <Heading as="h2" size="big">
            The E-Signature Builder
          </Heading>
          <p>
            In 2019 we assembled a small team and implemented a design sprint to
            focus on improving our e-signature experience. After many cups of
            coffee and hundreds of sticky notes later, we produced a small
            prototype and gathered feedback that would later guide us through
            the product development process.
          </p>
          <p>
            That prototype included consolidating the e-signature experience
            into a simple four-step workflow. That made it easier to use and
            removed the need to constantly re-train users in completing this
            task. I also designed this as a full-screen experience so users can
            stay focused on what they&apos;re building.
          </p>
          <Figure caption="E-Signature Builder - Adding Documents Step">
            <Image
              src={Image6}
              alt="Design Kit Product Icon Library"
              placeholder="blur"
            />
          </Figure>
          <Figure caption="E-Signature Builder - Adding Fields">
            <Image src={Image5} alt="Adding Fields" placeholder="blur" />
          </Figure>
          <p>
            Along with the e-signature builder, the team also updated the
            e-signature dashboard, making it easier for users to track the items
            they send out.
          </p>
          <Figure caption="E-Signature Dashboard">
            <Image
              src={Image7}
              alt="Design Kit Product Icon Library"
              placeholder="blur"
            />
          </Figure>
        </Box>
        <Divider />
        <Box as="section">
          <p>
            In 2022 SecureDocs was successfully acquired by Onit, Inc. to
            complement their legal-related products and services.
          </p>
        </Box>
        <Box as="footer">
          <Pagination>
            <Link href="#">
              <a style={{ opacity: "50%", pointerEvents: "none" }}>
                <Icon name="arrow left" />
              </a>
            </Link>
            <Link href="/work/rightscale">
              <a>
                <Icon ariaLabel="Next" name="arrow right" />
              </a>
            </Link>
          </Pagination>
        </Box>
      </Artical>
    </>
  );
}
