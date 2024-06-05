{% block className="hero" id="hero" %}

# JASON MELGOZA

Product & web designer based on California’s Central Coast, always looking for the next wave in design.

{% /block %}

{% block className="secondary" id="secondary" %}

A UX/UI designer with over 10 years of experience in SaaS product development. Available for remote-friendly work.

Recently at SecureDocs Inc. as a member of a cross-functional team dedicated to crafting user-friendly, web-based software.

{% button text="Contact" email="jasonmelgoza@gmail.com" className="contact" /%}

{% /block %}
{% block className="work" id="work" %}

## Work

{% gallery className="hero-gallery" caption="A few screens showcasing some recent projects." %}
{% galleryItem
  alt="Select components and styles from the Basis Design System. This system serves as our primary component library across SecureDocs."
  original="/images/basis-components-full.png"
  thumbnail="/images/basis-components-thumb.png"
  width="1608"
  height="1258"
/%}
{% galleryItem
  alt="The ContractWorks document browser serves as the central hub for customers to upload and manage their business documents."
  original="/images/document-browser-full.png"
  thumbnail="/images/document-browser-thumb.png"
  width="1600"
  height="1200"
/%}
{% galleryItem
  alt="The document detail panel displays various information about the document. The goal of this design was to easily display some of the data collected."
  original="/images/report-detail-full.png"
  thumbnail="/images/report-detail-thumb.png"
  width="2048"
  height="1536"
/%}
{% galleryItem
  alt="The new folder-filter interface concept design. The goal here was to enable users to efficiently view and select folders to filter on."
  original="/images/folder-filter-full.png"
  thumbnail="/images/folder-filter-thumb.png"
  width="1600"
  height="1200"
/%}
{% galleryItem
  alt="This concept introduces a new document-editing feature that we explored."
  original="/images/document-editor-full.png"
  thumbnail="/images/document-editor-thumb.png"
  width="1600"
  height="1200"
/%}
{% /gallery %}

{% /block %}
{% block className="projects" id="projects" %}

## Projects

{% box className="flex flex-row flex-gap-md" %}
  {% box %}

  ### Case Studies

    {% item
      heading="Designing a Document Browser"
      href="projects/document-browser"
      description="How we increased file uploads by 190%"
    /%}
    {% item
      heading="Designing a E-signature Wizard"
      href="projects/esign-builder"
      description="How we boosted our E-Sign adoption by 552%"
    /%}
    {% item
      heading="Building a Design System"
      href="projects/building-designkit"
      description="How I helped improve velocity and efficiency"
    /%}
  {% /box %}

  {% box %}

  ### Ongoing

    {% item
      heading="Basis Design System"
      href="projects/basis-design-system"
      description="A small system built with Figma and Storybook"
    /%}
    {% item
      heading="Metal Icons"
      href="projects/metal-icons"
      description="Exploring React and deploying a library"
    /%}
  {% /box %}
{% /box %}
{% /block %}

{% block className="about" id="about" %}

## About Me

{% box className="flex flex-row flex-gap-md" %}
  {% box className="flex flex-col" %}
    ![Jason Melgoza](./images/headshot.jpg)
  {% /box %}

  {% box %}
    In my teens, my sketchpad was my constant companion. Immersed in comic books, I was captivated by the art of illustrators like Jim Lee and Todd McFarlane. This passion led me to earn a degree in Art and Graphic Design from Fresno State.

    In college, my interest in technology flourished. Discovering Jeffrey Zeldman's "Designing with Web Standards" ignited my curiosity in HTML, CSS, and JavaScript, leading me to build my first website.

    Today, I create intuitive, visually appealing products, blending creativity and technical skills to craft solutions that meet both aesthetic and functional goals.
  {% /box %}
{% /box %}
{% /block %}

{% block className="experience" id="experience" %}

### Experience

{% box className="flex flex-row flex-gap-md" %}
  {% box %}
    {% item
      heading="SecureDocs, Inc."
      subHeading="Senior product designer"
      description="Aug 2018 - Present · 5 yrs 10 mos"
    /%}
    {% item
      heading="RightScale"
      subHeading="Senior user interface designer "
      description="Aug 2012 - Aug 2018 · 6 yrs 1 mo"
    /%}
  {% /box %}

  {% box %}
    {% item
      heading="University of California, Merced"
      subHeading="Web designer"
      description="Dec 2010 - Aug 2012 · 1 yr 9 mos"
    /%}
    {% item
      heading="The Fresno Bee"
      subHeading="Web designer"
      description="Apr 2007 - Dec 2010 · 3 yrs 9 mos"
    /%}
  {% /box %}
{% /box %}

{% /block %}

{% block className="skills" id="skills" %}

### Skills

{% box className="flex flex-row flex-gap-md" %}
  {% box %}
    {% item 
      number="1."
      heading="Zero to One Product Design"
      description="Helping you tackle all design related aspects from research and strategy, to hands-on design."
    /%}
    {% item 
      number="2."
      heading="UX/UI Expertise"
      description="Crafting seamless, user-centric interfaces that enhance user experience and satisfaction."
    /%}
    {% item 
      number="3."
      heading="Design Strategy"
      description="Developing strategic design plans to align your product with user needs and business goals."
    /%}
  {% /box %}

  {% box %}
    {% item 
      number="4."
      heading="User Research"
      description="Conducting in-depth user research to uncover insights that drive informed design decisions."
    /%}
    {% item 
      number="5."
      heading="Design Systems"
      description="Creating scalable design systems that maintain consistency across all platforms and products."
    /%}
    {% item 
      number="6."
      heading="Prototyping"
      description="Building interactive prototypes to test and refine ideas before full-scale development."
    /%}
  {% /box %}
{% /box %}
{% /block %}
