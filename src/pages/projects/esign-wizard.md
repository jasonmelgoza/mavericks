---
title: Designing a eSignature Wizard
description: Creating an electronic signature flow from scratch.
category: projects
type: Work
organization: SecureDocs
roles: Visual Design, UX Design, UX Research, Front-end Development
---

# {% $markdoc.frontmatter.title %}

{% gallery className="hero-gallery-custom" 
  caption="A look at SecureDocs's E-signature wizard." %}
{% galleryItem
  alt="The signature preparation step in the e-signature wizard."
  caption="The signature preparation step in the e-signature wizard."
  original="/images/esign-builder-full.png"
  thumbnail="/images/esign-builder-thumb.png"
  width="1600"
  height="1200"
/%}
{% /gallery %}

{% descriptionList term="Organization" detail=$markdoc.frontmatter.organization /%}
{% descriptionList term="Roles" detail=$markdoc.frontmatter.roles /%}

After joining SecureDocs in 2018, we quickly gained momentum. We formed a small cross-functional team to enhance the product and set our priorities. To kick things off, we used a design sprint, which helped us focus on improvements and build team unity.

The [design sprint](https://www.thesprintbook.com/the-design-sprint) is a five-day process where product and development teams collaborate to solve design problems and address key business questions. In the first two days after hearing from subject matter experts and mapping out the customer journey, it became clear that we needed to focus on and create a better interface for our e-signature use cases.

## The Problem

We discovered that customers had difficulty sending contracts and other business documents through our product. They described it as a complex and cumbersome process, requiring navigating through various parts of the product to acomplish this task. After identifying this issue, we realized the need to create a simpler process with clear instructions at each step. The team and I agreed that a wizard pattern would be our saving grace.

For obvious reasons, the sketching and design phases of the process were my favorite. As the team's designer, I was responsible for visualizing ideas and introducing Figma to my teammates as our main tool for prototyping and collaboration. Once we settled on a solution, we all participated in building out a messy but efficient prototype that we used for research. We brought back our subject matter experts and a few customers from earlier in the week, tested our solution and answered a ton of questions.

{% gallery 
  caption="A look at our first prototype and a glimpse of the conference room where we started building it." %}
{% galleryItem
  alt="A screenshot from our eSignature Wizard prototype."
  caption="A screenshot from our eSignature Wizard prototype."
  original="/images/esign-prototype-full.png"
  thumbnail="/images/esign-prototype-thumb.png"
  width="1600"
  height="1200"
/%}
{% galleryItem
  alt="Planning board"
  caption="Locking down use cases."
  original="/images/esign-plan-full.png"
  thumbnail="/images/esign-plan-thumb.png"
  width="1600"
  height="1600"
/%}
{% galleryItem
  alt="Basic wireframes"
  caption="Basic wireframe work."
  original="/images/esign-room-full.png"
  thumbnail="/images/esign-room-thumb.png"
  width="1600"
  height="1600"
/%}
{% /gallery %}

## The Solution

The concept was simple: whenever a customer reached the point of needing to dispatch documents for signature within our product, a streamlined four-step wizard would come to their aid. First, customers select the documents they wish to send. Next, they pinpoint their signing parties. Then, they designate areas for information entry and signatures on the document. Finally, they craft a message to accompany the documents to the signing parties. While this process may seem intuitive, it required significant effort to lock down. We designed this solution to be flexible, capable of accommodating a variety of use cases and interaction methods. For instance, a user might start without specific documents in mind, focusing solely on the signing parties. Alternatively, they might wish to start the process by pre-selecting documents from a folder they are currently browsing in our file browser.

## The Outcome

After completing the sprint and in the subsequent weeks, the team developed a low-fidelity, well-thought-out, and technically feasible prototype. Once an MVP plan was ready, I started creating visual design mocks. Using our new [file browser's](../projects/file-browser) visual language and our design system, [Basis](../projects/basis), as a foundation.

{% gallery caption="The project's final outcome." %}
{% galleryItem
  alt="The e-signature wizard"
  alt="The e-signature wizard."
  original="/images/esign-builder.gif"
  thumbnail="/images/esign-builder.gif"
  width="1713"
  height="1014"
/%}
{% /gallery %}

We named our tool the Packet Builder, a user-friendly tool for creating packets (similar to digital envelopes) with necessary documents for signing parties. The tool was highly successful, streamlining a complex process and providing an excellent demo tool for our sales team. Its positive business impact revealed a new market opportunity to our leadership. The next year, we introduced a spinoff brand called "[ReadySign](https://www.readysign.com/)," focusing on a specific segment of the e-signature software market, looking for a simple and affordable solution.

As a designer, this was an amazing learning experience that would guide me in my future projects at SecureDocs. Shout-out to my wonderful teammates (You know who you are 🙌) for their invaluable support in planning, designing, and building this amazing project.

{% pagination 
  prevName="Designing a File-Browser"
  prevHref="/projects/file-browser"
  nextName="Design kit"
  nextHref="/projects/design-kit" 
/%}

