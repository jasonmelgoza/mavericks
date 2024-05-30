---
title: Styleguide
description: Product & web designer based on California’s Central Coast, always looking for the next wave in design.
layout: styleguide
---

{% block className="hero" id="hero" %}

# Style Guide

{% /block %}

{% block className="secondary" id="secondary" %}

A UX/UI designer with over 10 years of experience in SaaS product development. Available for remote-friendly work.

Recently at SecureDocs Inc. as a member of a cross-functional team dedicated to crafting user-friendly, web-based software.

{% /block %}
{% block className="work" id="work" %}

{% gallery className="hero-gallery" caption="Test gallery" %}
{% galleryItem
  className="foo-1"
  alt="test one"
  original="https://placehold.co/1732x1200/3E63DD/white?text=Original+Image"
  thumbnail="https://placehold.co/866x600/3E63DD/white?text=Thumbnail"
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

{% /block %}

{% block %}

# Typography

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look awesome, not awful.

# Heading 1

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you really are just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

## Heading 2

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look awesome, not awful.

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look awesome, not awful.

### Heading 3

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element.

#### Heading 4

{% gallery className="hero-galler-custom" caption="Test gallery" %}
{% galleryItem
  className="foo-1"
  alt="test one"
  original="https://picsum.photos/seed/picsum/1732/1600"
  thumbnail="https://picsum.photos/seed/picsum/866/600"
  width="1600"
  height="1200"
/%}
{% /gallery %}

We hear you, but we're not convinced that simply disabling our base styles is what you really want.

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a p element.

{% /block %}

{% block className="foo" id="foo" %}

  ### Heading

  Markdoc is open-source—check out its [source](http://github.com/markdoc/markdoc) to see how it works.

{% /block %}