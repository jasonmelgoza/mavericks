---
title: Basis Design System
description: Design system developed for SecureDocs
category: projects
---

# {% $markdoc.frontmatter.title %}

{% media
  alt="Basis components"
  caption="A look at some of the components included in Basis."
  className="basis-thumbnail"
  original="/images/basis-full.png"
  thumbnail="/images/basis-thumb.png"
  width="1600"
  height="1200"
/%}

"Basis" is our internal component library and design system at SecureDocs. We use it for designing and building new applications or features. When I first joined the development team in 2018, one of the first projects was to start a component library - something simple to begin building new features. At the time, the development team was transitioning major features to React. The opportunity to collaborate on a component library presented itself, and we named this system "Basis."

## The Figma Library

As we started building with Basis, Figma introduced it's shared library feature, a huge breakthrough at the time. This feature made it easy to update multiple designs, improving my efficiency and saving time.

## Building a Sandbox

While I was designing our Figma component library, the dev team adopted a popular open-source tool called "Storybook" for component documentation. Storybook streamlines the documentation and maintenance of components, reducing the overall workload. As the sole designer on the team at that time, Storybook proved to be immensely beneficial.

Another valuable tool included in Basis is called "Playroom," an open-source project by Seek. It allows me to quickly create mock-ups and easily share them with the team, along with sample code to reproduce the design. It has significantly improved my workflow.


{% media
  alt="Playroom"
  caption="Playroom tool in action to create a setting page."
  className="thumbnail-playroom"
  original="/images/playroom-full.png"
  thumbnail="/images/playroom-thumb.png"
  width="1600"
  height="1050"
/%}

An essential element in the development of Basis is the component library called "Semantic React UI." Initially, we had limited options for finding a primitive component library to get started, but "Semantic" fulfilled all the requirements by providing fundamental elements such as buttons, inputs, menus, and more.

Like any design system, Basis will never be truly "finished." I am always learning and seeking ways to enhance it. In early 2022, SecureDocs Inc. was acquired, giving me another opportunity to share this experience and knowledge with teams in our new, larger company.

{% block as="div" className="block-callout" %}

### [Basis Playroom](https://basis-iota.vercel.app/playroom/#?code=N4Igxg9gJgpiBcIA8AhCAPABABwIZSgEsA7AcwF4AdEAJgCcYBbagPkuM01Q3c86IDO2ADa4AnlRAAzYTHTVefGXIAihBmAAuhCMUl0IAdwUc%2BAKwCuA7VLEBhXZpjFNkobjAwAtACMYmwxhnEz5MXGFCUmIASSdGAUlPFxg6EMw2U05UC01NXQA6AHEDC2ww3I8ACxgoDNCslBy8jkhkl0kHbDFqTEJW8mAkaNbMYlxGGEkoUoiwXCcegHoWAF9MZcVQ7NzdTFanduoAUSJNHr7dAaGRsYnJGsJNMOEzkHXV982uRcad4iKStg6t80OgMkgfhgMiAADQgQyEKCaSoCBAAbQA7AA2AAcAF0VkA)

I used the fantastic tool Playroom by Seek to create a [sandbox](https://basis-iota.vercel.app/playroom/#?code=N4Igxg9gJgpiBcIA8AhCAPABABwIZSgEsA7AcwF4AdEAJgCcYBbagPkuM01Q3c86IDO2ADa4AnlRAAzYTHTVefGXIAihBmAAuhCMUl0IAdwUc%2BAKwCuA7VLEBhXZpjFNkobjAwAtACMYmwxhnEz5MXGFCUmIASSdGAUlPFxg6EMw2U05UC01NXQA6AHEDC2ww3I8ACxgoDNCslBy8jkhkl0kHbDFqTEJW8mAkaNbMYlxGGEkoUoiwXCcegHoWAF9MZcVQ7NzdTFanduoAUSJNHr7dAaGRsYnJGsJNMOEzkHXV982uRcad4iKStg6t80OgMkgfhgMiAADQgQyEKCaSoCBAAbQA7AA2AAcAF0VkA) with a forked version of the Basis components. This tool is excellent for reviewing designs with developers using actual code.

{% /block %}

---

## Links

- [Figma Libary](https://help.figma.com/hc/en-us/articles/360041051154-Guide-to-libraries-in-Figma)
- [Storybook](https://storybook.js.org/)
- [Playroom](https://github.com/seek-oss/playroom)
- [Semantic React UI](https://react.semantic-ui.com/)
