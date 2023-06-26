---
title: Style Guide
version: 0.1.0
font: Satoshi
lead: This style guide is for the Mavericks website and blog. It's designed to help create a consistent look and feel across each page.
---

{% block className="header-block" as="header" %}
# {% $markdoc.frontmatter.title %}
v{% $markdoc.frontmatter.version %}
{% /block %}

{% block className="lead-block" %}
{% $markdoc.frontmatter.lead %}

{% /block %}

{% block className="content-block" as="section" %}

# Heading 1

## Heading 2

### Heading 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna diam, viverra sit amet cursus id, auctor sit amet quam. Donec in placerat ligula. Donec quis ligula ut arcu malesuada finibus. Aliquam id interdum dolor. Ut molestie faucibus leo, a semper lacus commodo ac. Fusce vulputate et orci at molestie. Quisque aliquam molestie faucibus.

- List Styles
- Things
- CodeSandbox
- Github

Nullam luctus interdum vulputate. Sed mollis purus tempus egestas iaculis. Donec mattis maximus quam. Suspendisse accumsan ultrices feugiat. Donec sem est, vehicula in dui molestie, sollicitudin luctus ante.

* * *

## Blog Post Example

Satoshi was designed by Deni Anggara for the Indian Type Foundry. The lowercase’s ascenders are drawn to be slightly taller than the common height of the capital letters and numerals.

![foo](https://placehold.co/600x400/84cdda/04313c/png)

## Weaving as programming

Satoshi’s lowercase ‘a’ and ‘g’ are double-storied; however, single-storied alternates are available, through an OpenType feature. The fonts’ other OpenType features include 10 ligatures per font, as well as alternate versions of the ‘G’ and ’t’. The default numeral style in each of the fonts is proportional lining figures; three other styles of numbers are included, too. There are tabular lining figures, as well as numerators and denominators for typesetting fractions. The fonts’ lining figures have the same height as the uppercase letters. The lowercase’s ascenders are drawn to be slightly taller than the common height of the capital letters and numerals. Each Satoshi font contains ten directional-arrow glyphs, as well as six glyphs of circles, squares, and triangles. There is also a peace sign in the character set, a smiling-face emoji, a check mark, and two versions of the numbers one through nine, each enclosed inside of differently-filled circles.

{% /block %}

{% block className="nav-block" as="nav" %}

- [Home](/)
- [Projects](/projects)
- [Work](/work)
- [About](/about)

{% /block %}
