---
title: Design Kit
description: Design system developed for RightScale
category: projects
type: Work
organization: RightScale
roles: Visual Design, UX Design, Front-end Development
---

# {% $markdoc.frontmatter.title %}

{% gallery className="hero-galler-custom" 
  caption="The Design Kit landing page." %}
{% galleryItem
  alt="Design Kit landing page"
  caption="The Design Kit landing page."
  className="designkit-landing"
  original="/images/designkit-full.png"
  thumbnail="/images/designkit-thumb.png"
  width="1774"
  height="1087"
/%}
{% /gallery %}

{% descriptionList term="Organization" detail=$markdoc.frontmatter.organization /%}
{% descriptionList term="Roles" detail=$markdoc.frontmatter.roles /%}

While working at RightScale, a rapidly-growing cloud computing company, we realized the importance of optimizing our processes and establishing a centralized resource for product design. This was necessary due to the independent project work being carried out by numerous teams.

What initially began as a shared color palette in a Sketch file evolved into a comprehensive design system known as "Design Kit." This system encompassed branding assets, color guidelines, an extensive library of icons, and a selection of UX patterns.

Alongside the style guide, I designed and developed component-specific markup and styling documentation, similar to [Storybook](https://storybook.js.org/). These easily shared pages became invaluable reference tools for front-end developers.

{% gallery className="hero-galler-custom"
  caption="The Design Kit color scales page." %}
{% galleryItem
  alt="Design Kit color page"
  caption="The Design Kit color scales page."
  className="designkit-colors"
  original="/images/designkit-colors-full.png"
  thumbnail="/images/designkit-colors-thumb.png"
  width="1752"
  height="1023"
/%}
{% /gallery %}

The process of creating and disseminating this design system was a valuable learning opportunity for me, and it ultimately paved the way for my future endeavors. In 2019, RightScale was acquired, bringing my adventure at the company to a close.

{% block as="div" className="block-callout" %}

### [Design kit demo](https://unequaled-garden.surge.sh/)

I have [archived a version](https://unequaled-garden.surge.sh/) of the site for demo purposes as this project is no longer in use.

{% /block %}

{% pagination
  prevName="Esign Wizard"
  prevHref="/projects/esign-wizard" 
/%}

