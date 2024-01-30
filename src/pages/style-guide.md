---
title: Style Guide
description: How to get started with Markdoc
---

# {% $markdoc.frontmatter.title %}

{% gallery className="hero-galler-custom" caption="Test gallery" %}
{% galleryItem
  className="foo-1"
  alt="test one"
  original="https://placehold.co/1600x1200/3E63DD/white?text=Original+Image"
  thumbnail="https://placehold.co/800x600/3E63DD/white?text=Thumbnail"
  width="1600"
  height="1200"
/%}
{% galleryItem
  className="foo-2"
  alt="test two"
  original="https://placehold.co/1600x1200/E5484D/white?text=Original+Image"
  thumbnail="https://placehold.co/800x600/E5484D/white?text=Thumbnail"
  width="1600"
  height="1200"
/%}
{% galleryItem
  className="foo-3"
  alt="test two"
  original="https://placehold.co/1600x1200/AB4ABA/white?text=Original+Image"
  thumbnail="https://placehold.co/800x600/AB4ABA/white?text=Thumbnail"
  width="1600"
  height="1200"
/%}
{% galleryItem
  className="foo-4"
  alt="test two"
  original="https://placehold.co/1600x1200/29A383/white?text=Original+Image"
  thumbnail="https://placehold.co/800x600/29A383/white?text=Thumbnail"
  width="1600"
  height="1200"
/%}
{% /gallery %}

Get started with Markdoc Satoshi is a modernist sans serif typeface. Its design combines typically grotesk-style letterforms, with some characters that are quite geometrically-designed. In terms of its appearance, Satoshi was inspired by Modernism and Industrial-Era graphic and typographic design. The family has tem weights on offer, ranging from Light to Black with complimentary italics. It is an excellent choice for use in branding, editorial, and poster design.

## Typography Styles

Satoshi’s lowercase ‘a’ and ‘g’ are double-storied; however, single-storied alternates are available, through an OpenType feature. The fonts’ other OpenType features include 10 ligatures per font, as well as alternate versions of the ‘G’ and ’t’. The default numeral style in each of the fonts is proportional lining figures; three other styles of numbers are included, too. There are tabular lining figures, as well as numerators and denominators for typesetting fractions. The fonts’ lining figures have the same height as the uppercase letters. The lowercase’s ascenders are drawn to be slightly taller than the common height of the capital letters and numerals. Each Satoshi font contains ten directional-arrow glyphs, as well as six glyphs of circles, squares, and triangles. There is also a peace sign in the character set, a smiling-face emoji, a check mark, and two versions of the numbers one through nine, each enclosed inside of differently-filled circles.

## List Styles

- Jimmy G
- Brock P
- Tray L

## Blocks

### Hero Block

{% block as="section" className="block-hero" %}
Product designer at SecureDocs, interface tinkerer, icon illustrator, and defender of the universe. 🤘
{% /block %}

### Callout Block

{% block as="div" className="block-callout" icon="dribbble" %}
### Callout Block
Product designer at SecureDocs, interface tinkerer, icon illustrator, and defender of the universe. 🤘
{% /block %}

### Details

{% details
  heading="Github"
  subheading="2018 - Present"
  meta="So far so good..."
  icon="github"
/%}

{% details
  heading="Dribble"
  subheading="2018 - Present"
  meta="So far so good..."
  icon="dribbble"
/%}

{% details
  heading="Linkedin"
  subheading="2018 - Present"
  meta="So far so good..."
  icon="linkedin"
/%}

### Social

{% social
  className="dribbble"
  icon="dribbble"
  name="Dribbble"
  url="https://dribbble.com/jasonmelgoza"
/%}

{% social
  className="linkedin"
  icon="linkedin"
  name="Linkedin"
  url="http://www.linkedin.com/in/jasonmelgoza"
/%}

{% social
  className="Mastodon"
  icon="mastodon"
  name="Mastodon"
  url="https://mas.to/@jasonmelgoza"
/%}

{% social
  className="github"
  icon="github"
  name="Github"
  url="https://github.com/jasonmelgoza"
/%}
