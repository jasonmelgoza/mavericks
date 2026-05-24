{% block className="hero" id="hero" %}

# JASON MELGOZA

Product designer based in California, crafting interfaces and chasing the next wave in design.

{% /block %}

{% block className="secondary" id="secondary" %}

A design systems specialist with over 10 years of experience in product design — currently at [Bill](https://www.bill.com/), helping build the foundation that keeps product teams moving forward.

{% button text="Let's Talk" email="jasonmelgoza@gmail.com" className="contact" /%}

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
      heading="Developing a Design System"
      href="projects/building-designkit"
      description="How I helped improve velocity and efficiency"
    /%}

{% /box %}

{% box %}

### Ongoing

    {% item
      heading="Metal Icons"
      href="projects/metal-icons"
      description="Exploring React and deploying a library"
    /%}
    {% item
      heading="Basis Design System"
      href="projects/basis-design-system"
      description="A small system built with Figma and Storybook"
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
Growing up, I spent most of my time drawing — sketchpad in hand, endlessly inspired by the comic books stacked at my desk. I was drawn to the work of illustrators like Jim Lee and Todd McFarlane — artists who understood that great visuals and great storytelling go hand in hand. That passion led me to earn a degree in Art and Design from Fresno State.

During my time there, my curiosity shifted toward technology. I discovered authors like Jeffrey Zeldman and Dan Cederholm whose books and websites opened a new door — one that led me to HTML, CSS, JavaScript, and eventually my first website.

Today, I bring that same intersection of craft and curiosity to product design — building intuitive interfaces and the design systems that power them.
{% /box %}
{% /box %}
{% /block %}

{% block className="experience" id="experience" %}

### Experience

{% box className="flex flex-row flex-gap-md" %}
{% box %}
{% item
      heading="Bill"
      subHeading="Senior Product Designer, Design Systems"
      startDate="2024-10-01"
    /%}
{% item
      heading="SecureDocs, Inc."
      subHeading="Senior Product Designer"
      description="Aug 2018 - Aug 2024 · 6 yrs 1 mo"
    /%}
{% item
      heading="RightScale"
      subHeading="Senior User Interface Designer"
      description="Aug 2012 - Aug 2018 · 6 yrs 1 mo"
    /%}
{% /box %}

{% box %}
{% item
      heading="University of California, Merced"
      subHeading="Web Designer"
      description="Dec 2010 - Aug 2012 · 1 yr 9 mos"
    /%}
{% item
      heading="The Fresno Bee"
      subHeading="Web Designer"
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
      heading="Design Systems"
      description="Creating scalable, governed design systems with the token architecture, documentation, and tooling that keep them alive."
    /%}
{% item
      number="2."
      heading="Design System Strategy & Governance"
      description="Evolving the operational layer of a design system — intake, decision-making, and cross-team alignment — so it scales with the organization."
    /%}
{% item
      number="3."
      heading="UX/UI Expertise"
      description="Crafting seamless, user-centric interfaces grounded in systems thinking and a coherent design language."
    /%}
{% /box %}

{% box %}
{% item
      number="4."
      heading="Design Strategy"
      description="Developing strategic design plans that align your product with user needs, business goals, and scalable design decisions."
    /%}
{% item
      number="5."
      heading="Prototyping"
      description="Building interactive prototypes to test and refine ideas, from early concepts to high-fidelity system components."
    /%}
{% item
      number="6."
      heading="AI-Augmented Design"
      description="Researching emerging AI tools and facilitating workshops to explore how they fit into design team workflows."
    /%}
{% /box %}
{% /box %}
{% /block %}
