---
title: Jason Melgoza
intro: Product designer at SecureDocs Inc. interface tinkerer, icon illustrator, and defender of the universe.
---

{% block className="header-block" as="header" %}
# {% $markdoc.frontmatter.title %}
{% /block %}

{% block className="hero-block" as="section" %}
{% $markdoc.frontmatter.intro %}
{% /block %}

{% block className="nav-block" as="nav" %}

- [Projects](/projects)
- [Work](/work)
- [About](/about)

{% /block %}
