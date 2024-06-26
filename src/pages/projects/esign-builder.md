---
title: Designing a E-signature Wizard
---

{% block %}

{% articleHeader subheading="Case Study" title="Designing a E-signature Wizard" /%}

{% gallery className="hero-gallery" caption="A look at SecureDocs's electronic signature wizard." %}
{% galleryItem
  alt="The signature preparation step in the e-signature wizard."
  original="/images/esign-builder-cover-full.png"
  thumbnail="/images/esign-builder-cover-thumb.png"
  width="1600"
  height="1200"
/%}
{% galleryItem
  alt="Users can select documents from their repository or use pre-set templates to initiate the signing process."
  original="/images/esign-builder-2-full.png"
  thumbnail="/images/esign-builder-2-thumb.png"
  width="1600"
  height="1200"
/%}
{% galleryItem
  alt="Here, users can assign and manage signers for their packet."
  original="/images/esign-builder-3-full.png"
  thumbnail="/images/esign-builder-3-thumb.png"
  width="1600"
  height="1200"
/%}
{% galleryItem
  alt="The final message step in the e-signature wizard."
  original="/images/esign-builder-4-full.png"
  thumbnail="/images/esign-builder-4-thumb.png"
  width="1600"
  height="1200"
/%}
{% /gallery %}

After joining SecureDocs in 2018, we quickly gained momentum. We formed a small cross-functional team to enhance the product and set our priorities. To kick things off, we used a design sprint to help us focus on improvements and build team unity.

A design sprint is a five-day process where product and development teams collaborate to solve design problems and address key business questions. During our sprint, after two days of hearing from subject matter experts and mapping our customers' journey, it became apparent that we needed to prioritize and develop a more intuitive user interface for our electronic signature offering.

{% /block %}

{% block %}

## The Problem

We discovered that customers had difficulty sending contracts and other business documents through our product. They described it as a complex and cumbersome process, requiring navigating through various parts of the product to acomplish this task. After identifying this issue, we realized the need to create a simpler process with clear instructions at each step. The team and I agreed that a wizard pattern would be our saving grace.

For obvious reasons, the sketching and design phases of the process were my favorite. As the team's designer, I was responsible for visualizing ideas and introducing Figma to my teammates as our main tool for prototyping and collaboration. Once we settled on a solution, we all participated in building out a rough but efficient prototype that we used for research. We brought back our subject matter experts and a few customers from earlier in the week, tested our solution and answered a ton of questions.

{% gallery caption="Our first prototype and a glimpse of the conference room where we started building it." %}
{% galleryItem
  alt="test one"
  original="/images/esign-prototype-full.png"
  thumbnail="/images/esign-prototype-thumb.png"
  width="1608"
  height="1208"
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

{% /block %}

{% block %}

## Our Solution

The concept was simple: whenever a customer reached the point of needing to dispatch documents for signature within our product, a streamlined four-step wizard would come to their aid. First, customers select the documents they wish to send. Next, they pinpoint their signing parties. Then, they designate areas for information entry and signatures on the document. Finally, they craft a message to accompany the documents to the signing parties. While this process may seem intuitive, it required significant effort to lock down. We designed this solution to be flexible, capable of accommodating a variety of use cases and interaction methods. For instance, a user might start without specific documents in mind, focusing solely on the signing parties. Alternatively, they might wish to start the process by pre-selecting documents from a folder they are currently browsing in our file browser.

After completing the sprint and in the subsequent weeks, the team developed a low-fidelity, well-thought-out, and technically feasible prototype. Once an MVP plan was ready, I started creating visual design mocks. Using our new file browser's visual language and our design system, Basis, as a foundation.

{% gallery caption="The project's final outcome." %}
{% galleryItem
  alt="The e-signature wizard."
  original="/images/esign-builder.gif"
  thumbnail="/images/esign-builder.gif"
  width="1713"
  height="1014"
/%}
{% /gallery %}

{% /block %}

{% block %}

## Impact

We named our tool the Packet Builder, a user-friendly tool for creating packets (similar to digital envelopes) with necessary documents for signing parties. The tool was highly successful, streamlining a complex process and providing an excellent demo tool for our sales team. In 2023, the number of packets sent surpassed 664,000, marking an increase of over 552% since 2020. This positive business impact revealed a new market opportunity to our leadership. After its release, we introduced a spinoff brand called "[ReadySign](https://www.readysign.com/)," focusing on a specific segment of the e-signature software market and offering a simple and affordable solution.

As a designer, this was an amazing learning experience that would guide me in my future projects at SecureDocs. Shout-out to my wonderful teammates (You know who you are 🙌) for their invaluable support in planning, designing, and building this amazing project.

{% /block %}
