---
title: Basis Design System
---

{% block %}

{% articleHeader subheading="Ongoing Project" title="Basis Design System" /%}

{% gallery className="hero-gallery" caption="A look at some of the components included in Basis." %}
{% galleryItem
  alt="Basis components"
  caption="A look at some of the components included in Basis."
  original="/images/basis-full.png"
  thumbnail="/images/basis-thumb.png"
  width="1600"
  height="1200"
/%}
{% /gallery %}

"Basis" is our internal component library and design system at SecureDocs. We use it for designing and building new applications or features. When I first joined the development team in 2018, one of the first projects was to start a component library - something simple to begin building new features. At the time, the development team was transitioning major features to React. The opportunity to collaborate on a component library presented itself, and we named this system "Basis."

{% /block %}

{% block %}

## The Figma Library

When we began using Basis, Figma introduced its shared library feature, which was a huge breakthrough at the time. This feature simplified the process of updating multiple designs, enhancing my efficiency and saving time.

{% gallery caption="Basis Components in Figma." %}
{% galleryItem
  alt="Basis in Figma"
  caption="Basis Components in Figma."
  className="thumbnail-basis-figma"
  original="/images/basis-figma-full.png"
  thumbnail="/images/basis-figma-thumb.png"
  width="1900"
  height="1200"
/%}
{% /gallery %}

{% /block %}

{% block %}

## Building a Sandbox

While I was designing our Figma component library, the dev team adopted a popular open-source tool called "Storybook" for component documentation. Storybook streamlines the documentation and maintenance of components, reducing the overall workload. As the sole designer on the team at that time, Storybook proved to be immensely beneficial.

Another valuable tool included in Basis is called "Playroom," an open-source project by Seek. It allows me to quickly create [product mockups](https://basis-iota.vercel.app/playroom/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAJgAYCsQd8BbI9AdTKgAuAC1ogAnADZmrdri4AnShQAyMAGYDRRAK4CIdWQqXYASmUpDNdHXoN45RRRQAqEAqMZ3Oj42gF6ODzsAPlkkAGUYSg4YbAFcACMiAGcyMFD7fCQAcXl%2BXEgAG20ObGTRAQB3fRBccgA3fhgoXHkYQu5mjPwe3By8qAA6AGEIYtLcSv5hUQBWOm7enqQG3GSBAE9CmGpgYEIIVIEyCGx4XDp1tIBrDboAGlw9AnO6JhY6XABfL8Wl5YAEjASBRKGsyAAvHZ0DgUMifFKiBqfSBxWJWEAAWQ2uEi-lByU%2BAHo-v8%2BsoyOtWu1Oi11lsdnsHE5sKoNK8QABaegfWo-Ulk8mUgSDACSAhgHGC2NwAAV5BA1GRtkgiRT1mKJVLZIKsuqReLJdLtIVjmoiGA9PJcABBXRCdFpIjHU6q-Wao063VId2GqUy0VoyjyZ0nPB445UZJu4Ue7WZb2%2BrXBAByEDNTpd4Zg%2BKjMY1foFZJ9scLABEIJVsIUICRcTnI5Ro2rS8mvf98wIi70kGWyI1YNahPxYHgSe2lkggSCqOCoaJYdh4bVEXRkbVURK4qIbWBINo4vXc03id3lvrqR10M01pttrt9kYVOoBBzubzvr8Jx2k0bRhxiGwHFAzUCB5C4LNOzjM8e1-KVRjiENLR4MDrmSI9G2bOCYPPVsjV3fdDxteQwGHeoYCwvD411XCC2TABRbZLQVJcwFxcxsGdbQ2gwgkoMLb9J2wnhnRgcDHGuXBhm0dYIFhCFQ1dFs6M9BNBRLFSpTtPROWcIhKGMMEIz45SDTbNTi2wgiIAPeJAwlYNFLKfjzJozsz1VBoi1VXJ%2BBGMYSmwbzfKGUZxjwKZBBEOgAEYYoWQSp2BchZ03dFRBlYyo0%2BVJ5zoSM7lqccLKyPsBzE3BivUzEKOSfSYEE-AKFAxrcAdEgxNEABVAgoFElosqbOV6q8XU0u3OgAE0ICeYd0MpXAiDkWr6oKOSCFOdFBlG-4quLSJoi23IbIIHCIiiGI4hwrIQtwcj5GOMAiEKG1Cg4hcR22BKSuLEL-PC3A1BrfrRG2DRPkimZgBigBmL8fvU6cUrBVcQHXOdoRARdlzWtEJqxHF5UVZUGqK67liJP6wsC8mboGf7AsB4GJSgUQ8gsARPgldABFe966HZywIemERgDh2nlhQXQ9DwcaMXo8hOdqXLMYKlF1oteI9porJKfp6nSnJnyBjOokDsurtWvOw6rtaun8iKQLyjeHK70ZfZQLicJIRgDkYoAFg-fk7eWP6TErW8GQfQgSGRvwAg5Tw%2BXhnXJypgKJkh6KQAkBYUyIGJjb8g2gpDnt04BrPRBipPggANTIa4yCL0KM9LhHJz1vzw8qCX%2Bm7iP6XvJliFIUF47kxPPmDjuOwrxmq7oXOQGCeiuGVFuGcNsvQ-1tvJhF6va8aJvBjACQYokAABZIYDAbjmggMBkjPuTN5Lvuu6GHu%2B7Dwe3ejqPOO6YE4XBAEnT8Et7at0rofJeCxZQpGSNUeQUB35tygX0eemc4EgBrgsAAVEQ4hJDiHoPCp-P%2Bvcd792-v-KOI9Y7jxAZPMBECZ6p3LnvWBUVRDL2CKMWy8gNjkJpjvaBW8Iq4PwSvLqS4Wa4gEKJZs2D26cL6F-QYP8aFUMwbQyRB9eHwJXpiCACQSZyiEJtXAKYSgJDEqI7es807cIXtI2uABqGKuAYr0BhpyXx-jAn%2B0cWozhm9tHOJbqbc26IPJmwukdBU2hTqJViXEQYx0UlnXSZbKJt17qPWenzSg2APqkC%2BivHRriJhA1rCzUGL5ha8OhuLcRfQkagnafgVG65ukYw%2BkuHa6jcZbgxJiE0ZpNZgVtPaR0T0szDNTtrHWoTf41LwHUkGAtzBC1qNzXmb1Sls12UrQxUM2nOJ7FLfwpxRnpToArMgZyVYVAoIVNaAFNaVUoRso2X8YmJNth3a2Fsja5LWHfU4fVhEx1IM0UQ90PkHJKWUugYB0RiW%2BuopAzgYA82CNNbQi0eLYHTLgGSoJFp4BsA6OImYwyLQIAQQYqo8UEpDqqXJgKbZ5PUgk3lmTkmpJ%2BqCpJJ0clAr5asgpYkikvSOWirGn1SbrOLvvLZDS6BgzOVXVpKcRlJRnJQfpvT%2BxLM4a8mEcILWpzlhlYCQYQxZl4tlNgVyegrLcpoj%2BnKAVWwFWCq23LOUQsKU6QoaqWiO1KM7EAMNXYMI9qcAQ3soR%2B0DqwSB7T9Ef0Grga4MARE%2BowTm1RwQADy2A1llo2U8fFhz%2BYgEFkrTBWQbky3ufjJ5LyfZvKAurL5lofk5pLRQmh-qomBriaGqVd05URqjWtcKcaE3KwAUyT2qafYZqDganF5b82FuLeW2t6qKFVprR6iRJd6081RScjm2KRntulnc%2B1jzFY5T7fld5g7iDDq9assdYiPXRL9SGqJYaF1PUjdUh2bdV2JuHsmr2O6wEBz3Xow9DYqXHqvS%2B3NGCK1qDUARw1qi72NuOTsp9VTr2SzfbLFNDyQA9u-XlEAasNwa0A3okDTicWTtTlyqVPKg2iunRkrJIr1K5KFRK4NYnOWyoehGh91qKmqvgzAxmmqEXaqabUPVsN93hM6VQU1ca%2BkMfwFa5VQz3UvvwB%2BkAaYMwLMZYNQkTmRlAf5aesDlH9Os1o3sqjGnm2nOaRcszImO3vpY92r9ysf1cb-TxodWtfnntAyJ4T3opPSrk3O4GyMjayg6BiqxhRBwjqiZVi0MAat1f85ORr1WxitYq1V5rXWKptZ7B1vrtWBs9aay1sbnLhuTetINjRkH%2BXyZkx5ZbwrJW8qNqp%2BVkXYRaefSJ4LzMDMgB1TF0Wpm9EWZRtZ81qXOPY3VnjDEFYqxlddSeMmE7AsHrrSFx94WUWKoB7qw%2BYs4urIS8x57oh2P3dVhlz5AHsvfb%2BX6kK4mZ0gohWV0E43Oujbm-jkb3Xpu9dm-VkTM3%2BtE7JxNmnlPVnU8J4ztyzPScgqK-EtbinRVlSaEOEcsRWeTmu12jE1lbIfZ8wM39A6vt8-7ALkXPYefZKU5tlTAx51qdg7tlVB2ZV-eO6F07RnzkXcuYRsXZr6gccxo9njMO6D-kAo60C4lFkK6Ez98JR36knZbVzBtkWg-GbB1bw1UPxew5S7L9L8ukffPmz2ATYTvUY4DYt70OPazlbpwTjnVPycM5T30dnU2Gsl5Z2XpAFfadV-pzX4nFP5uic15JtXsn9pSoU%2Br7Hyn8na-DXr4HmmoCVKjQY-7hnwbh5aZdnN12rNIju-0%2Bzjv%2BmuYQgIJCAgULyDQtL21uoy%2B6194d43AfTdh4i2PqLdGLe7Ejzi6Prm4fx%2B40nvjqPcuCeA5npztniVryrgLjlQC3qXpAc3gXiTpXsXk3kXkztXkgWzigfAcgYgRgUtoPjgYKitmkr3gQQPh3pfvkCPsUvfnthPtpkFlftsmbnPk-tDPQBDm5DbrdnbvDoMjjK5pLkRCRGRBRKeL-rpv-mQWIZsibiDsHvevfrfnqv7Gwd6G-klhiMMG0KJCSqRP2KTJ-ojpAFliroVhfiYSbFnrgTnpYW5BCrfKiDCjiEAidkirIdRkqhimiPIIbm5Oyl2GmNSB4fEI4DoeROhEQPUEQMqEQAkNsKykSL4f8sAcWFzolEVn3t3h2F3hthJhITrjtlQQbvRr9n-lIdfo0kwSZi-uZslF0rZotJwSfjRBvjar5i%2Bu-kxLvqcGkOxKUlxDxN5o0WSGfhoqYW5P7gwbfkDk2goRHsoepKoc7mxnHvZl-oYcjsYQFmjlOoAd6kkZkaVnnnjrAa3tAagd6PXhse1ugQ3ggYXtgecdcZcUNo8W3ikZ3kQetoQfgZ8SQTkUbuQTBpQU2tQZPjptPtIbPqDgvlUSJsvnUbboMYKM0Y5lvmoaICJBKOJIflJDJAEJCE5IiUsMMeRhIeCWUWFmclMTRg-uFnqjCZDkxjHp%2Bs8vbv2h8mscnjlpIf8jsYVnsZOLnsaqcfcepBcbXmKcKTcZgXcVKWgVgbKQ8fKU8QttYZ3FkV8RbOkdkVjrkRQQqsCYUVPrejPowVCVDIvgxkasjCvmuGvnUcicuKiYsdpBALpPpIZMfq0ZwsSWnkaRqhCTSZSSHvIdFvPrFnogsWMrHiydwXLuybxijmBr6ejuYUAaqfsaAeAZQJKcqVkBKccVAQWTAY3jKbmeXi8Tma8fybrOqaKrWTYemb9MPoCfqdSSCbQcUZIUzOSaaedrsBadbjUZZvCQ0V6eog6YSf8HwXuDZIePZFEM6mGISNgJOZ6lyZIn6QDCaZMcGdMaGcwfSW5JGaxh-isQYQmWWeflsflryXgX8SARbGAYcRAUWWcaKRWa%2BSKcWPmSWXAQqe%2BUqeKR%2BWmaQckfWZ3KYeBvYO3hJqqGgOgBkCAPcCAFnMkAgAANo1z0D%2BwAC6XwQAA "Basis Playroom") and easily share them with the team, along with sample code to reproduce the design. It has significantly improved my workflow.

{% gallery className="hero-gallery" caption="A look at Basis in both Storybook and Playroom apps." %}
  {% galleryItem
    alt="Playroom"
    caption="Playroom tool in action to create a setting page."
    original="/images/playroom-full.png"
    thumbnail="/images/playroom-thumb.png"
    width="1600"
    height="1050"
  /%}
  {% galleryItem
    alt="Basis colors in Storybook"
    caption="Color documentation in the Storybook app."
    original="/images/basis-colors-full.png"
    thumbnail="/images/basis-colors-thumb.png"
    width="1900"
    height="1200"
  /%}
  {% galleryItem
    alt="Basis Iconography in Storybook"
    caption="Color documentation in the Storybook app."
    original="/images/basis-icons-full.png"
    thumbnail="/images/basis-icons-thumb.png"
    width="1900"
    height="1200"
  /%}
  {% galleryItem
    alt="Basis Buttons in Storybook"
    caption="Button documentation in the Storybook app."
    original="/images/basis-buttons-full.png"
    thumbnail="/images/basis-buttons-thumb.png"
    width="1900"
    height="1200"
  /%}
{% /gallery %}

An essential element in the development of Basis is the component library called "Semantic React UI." Initially, we had limited options for finding a primitive component library to get started, but "Semantic" fulfilled all the requirements by providing fundamental elements such as buttons, inputs, menus, and more.

Like any design system, Basis will never be truly "finished." I am always learning and seeking ways to enhance it. In early 2022, SecureDocs Inc. was acquired, giving me another opportunity to share this experience and knowledge with teams in our new, larger company.

{% gallery caption="Basis Components in action." %}
{% galleryItem
  alt="Basis in action"
  caption="Basis Components in action."
  original="/images/basis-slideout-full.png"
  thumbnail="/images/basis-slideout-thumb.png"
  width="2070"
  height="1463"
/%}
{% /gallery %}

{% /block %}

{% block %}

## Tools & Libraries Used

- [Figma Library](https://help.figma.com/hc/en-us/articles/360041051154-Guide-to-libraries-in-Figma)
- [Storybook](https://storybook.js.org/)
- [Playroom](https://github.com/seek-oss/playroom)
- [Semantic React UI](https://react.semantic-ui.com/)

{% callout %}

### [Basis Playroom](https://basis-iota.vercel.app/playroom/#?code=N4Igxg9gJgpiBcIA8AhCAPAOgOwAS4AcBDKKAS2wHMBeTEAJgAYCsQd8BbI9AdTKgAuAC1ogAnADZmrdri4AnShQAyMAGYDRRAK4CIdWQqXYASmUpDNdHXoN45RRRQAqEAqMZ3Oj42gF6ODzsAPlkkAGUYSg4YbAFcACMiAGcyMFD7fCQAcXl%2BXEgAG20ObGTRAQB3fRBccgA3fhgoXHkYQu5mjPwe3By8qAA6AGEIYtLcSv5hUQBWOm7enqQG3GSBAE9CmGpgYEIIVIEyCGx4XDp1tIBrDboAGlw9AnO6JhY6XABfL8Wl5YAEjASBRKGsyAAvHZ0DgUMifFKiBqfSBxWJWEAAWQ2uEi-lByU%2BAHo-v8%2BsoyOtWu1Oi11lsdnsHE5sKoNK8QABaegfWo-Ulk8mUgSDACSAhgHGC2NwAAV5BA1GRtkgiRT1mKJVLZIKsuqReLJdLtIVjmoiGA9PJcABBXRCdFpIjHU6q-Wao063VId2GqUy0VoyjyZ0nPB445UZJu4Ue7WZb2%2BrXBAByEDNTpd4Zg%2BKjMY1foFZJ9scLABEIJVsIUICRcTnI5Ro2rS8mvf98wIi70kGWyI1YNahPxYHgSe2lkggSCqOCoaJYdh4bVEXRkbVURK4qIbWBINo4vXc03id3lvrqR10M01pttrt9kYVOoBBzubzvr8Jx2k0bRhxiGwHFAzUCB5C4LNOzjM8e1-KVRjiENLR4MDrmSI9G2bOCYPPVsjV3fdDxteQwGHeoYCwvD411XCC2TABRbZLQVJcwFxcxsGdbQ2gwgkoMLb9J2wnhnRgcDHGuXBhm0dYIFhCFQ1dFs6M9BNBRLFSpTtPROWcIhKGMMEIz45SDTbNTi2wgiIAPeJAwlYNFLKfjzJozsz1VBoi1VXJ%2BBGMYSmwbzfKGUZxjwKZBBEOgAEYYoWQSp2BchZ03dFRBlYyo0%2BVJ5zoSM7lqccLKyPsBzE3BivUzEKOSfSYEE-AKFAxrcAdEgxNEABVAgoFElosqbOV6q8XU0u3OgAE0ICeYd0MpXAiDkWr6oKOSCFOdFBlG-4quLSJoi23IbIIHCIiiGI4hwrIQtwcj5GOMAiEKG1Cg4hcR22BKSuLEL-PC3A1BrfrRG2DRPkimZgBigBmL8fvU6cUrBVcQHXOdoRARdlzWtEJqxHF5UVZUGqK67liJP6wsC8mboGf7AsB4GJSgUQ8gsARPgldABFe966HZywIemERgDh2nlhQXQ9DwcaMXo8hOdqXLMYKlF1oteI9porJKfp6nSnJnyBjOokDsurtWvOw6rtaun8iKQLyjeHK70ZfZQLicJIRgDkYoAFg-fk7eWP6TErW8GQfQgSGRvwAg5Tw%2BXhnXJypgKJkh6KQAkBYUyIGJjb8g2gpDnt04BrPRBipPggANTIa4yCL0KM9LhHJz1vzw8qCX%2Bm7iP6XvJliFIUF47kxPPmDjuOwrxmq7oXOQGCeiuGVFuGcNsvQ-1tvJhF6va8aJvBjACQYokAABZIYDAbjmggMBkjPuTN5Lvuu6GHu%2B7Dwe3ejqPOO6YE4XBAEnT8Et7at0rofJeCxZQpGSNUeQUB35tygX0eemc4EgBrgsAAVEQ4hJDiHoPCp-P%2Bvcd792-v-KOI9Y7jxAZPMBECZ6p3LnvWBUVRDL2CKMWy8gNjkJpjvaBW8Iq4PwSvLqS4Wa4gEKJZs2D26cL6F-QYP8aFUMwbQyRB9eHwJXpiCACQSZyiEJtXAKYSgJDEqI7es807cIXtI2uABqGKuAYr0BhpyXx-jAn%2B0cWozhm9tHOJbqbc26IPJmwukdBU2hTqJViXEQYx0UlnXSZbKJt17qPWenzSg2APqkC%2BivHRriJhA1rCzUGL5ha8OhuLcRfQkagnafgVG65ukYw%2BkuHa6jcZbgxJiE0ZpNZgVtPaR0T0szDNTtrHWoTf41LwHUkGAtzBC1qNzXmb1Sls12UrQxUM2nOJ7FLfwpxRnpToArMgZyVYVAoIVNaAFNaVUoRso2X8YmJNth3a2Fsja5LWHfU4fVhEx1IM0UQ90PkHJKWUugYB0RiW%2BuopAzgYA82CNNbQi0eLYHTLgGSoJFp4BsA6OImYwyLQIAQQYqo8UEpDqqXJgKbZ5PUgk3lmTkmpJ%2BqCpJJ0clAr5asgpYkikvSOWirGn1SbrOLvvLZDS6BgzOVXVpKcRlJRnJQfpvT%2BxLM4a8mEcILWpzlhlYCQYQxZl4tlNgVyegrLcpoj%2BnKAVWwFWCq23LOUQsKU6QoaqWiO1KM7EAMNXYMI9qcAQ3soR%2B0DqwSB7T9Ef0Grga4MARE%2BowTm1RwQADy2A1llo2U8fFhz%2BYgEFkrTBWQbky3ufjJ5LyfZvKAurL5lofk5pLRQmh-qomBriaGqVd05URqjWtcKcaE3KwAUyT2qafYZqDganF5b82FuLeW2t6qKFVprR6iRJd6081RScjm2KRntulnc%2B1jzFY5T7fld5g7iDDq9assdYiPXRL9SGqJYaF1PUjdUh2bdV2JuHsmr2O6wEBz3Xow9DYqXHqvS%2B3NGCK1qDUARw1qi72NuOTsp9VTr2SzfbLFNDyQA9u-XlEAasNwa0A3okDTicWTtTlyqVPKg2iunRkrJIr1K5KFRK4NYnOWyoehGh91qKmqvgzAxmmqEXaqabUPVsN93hM6VQU1ca%2BkMfwFa5VQz3UvvwB%2BkAaYMwLMZYNQkTmRlAf5aesDlH9Os1o3sqjGnm2nOaRcszImO3vpY92r9ysf1cb-TxodWtfnntAyJ4T3opPSrk3O4GyMjayg6BiqxhRBwjqiZVi0MAat1f85ORr1WxitYq1V5rXWKptZ7B1vrtWBs9aay1sbnLhuTetINjRkH%2BXyZkx5ZbwrJW8qNqp%2BVkXYRaefSJ4LzMDMgB1TF0Wpm9EWZRtZ81qXOPY3VnjDEFYqxlddSeMmE7AsHrrSFx94WUWKoB7qw%2BYs4urIS8x57oh2P3dVhlz5AHsvfb%2BX6kK4mZ0gohWV0E43Oujbm-jkb3Xpu9dm-VkTM3%2BtE7JxNmnlPVnU8J4ztyzPScgqK-EtbinRVlSaEOEcsRWeTmu12jE1lbIfZ8wM39A6vt8-7ALkXPYefZKU5tlTAx51qdg7tlVB2ZV-eO6F07RnzkXcuYRsXZr6gccxo9njMO6D-kAo60C4lFkK6Ez98JR36knZbVzBtkWg-GbB1bw1UPxew5S7L9L8ukffPmz2ATYTvUY4DYt70OPazlbpwTjnVPycM5T30dnU2Gsl5Z2XpAFfadV-pzX4nFP5uic15JtXsn9pSoU%2Br7Hyn8na-DXr4HmmoCVKjQY-7hnwbh5aZdnN12rNIju-0%2Bzjv%2BmuYQgIJCAgULyDQtL21uoy%2B6194d43AfTdh4i2PqLdGLe7Ejzi6Prm4fx%2B40nvjqPcuCeA5npztniVryrgLjlQC3qXpAc3gXiTpXsXk3kXkztXkgWzigfAcgYgRgUtoPjgYKitmkr3gQQPh3pfvkCPsUvfnthPtpkFlftsmbnPk-tDPQBDm5DbrdnbvDoMjjK5pLkRCRGRBRKeL-rpv-mQWIZsibiDsHvevfrfnqv7Gwd6G-klhiMMG0KJCSqRP2KTJ-ojpAFliroVhfiYSbFnrgTnpYW5BCrfKiDCjiEAidkirIdRkqhimiPIIbm5Oyl2GmNSB4fEI4DoeROhEQPUEQMqEQAkNsKykSL4f8sAcWFzolEVn3t3h2F3hthJhITrjtlQQbvRr9n-lIdfo0kwSZi-uZslF0rZotJwSfjRBvjar5i%2Bu-kxLvqcGkOxKUlxDxN5o0WSGfhoqYW5P7gwbfkDk2goRHsoepKoc7mxnHvZl-oYcjsYQFmjlOoAd6kkZkaVnnnjrAa3tAagd6PXhse1ugQ3ggYXtgecdcZcUNo8W3ikZ3kQetoQfgZ8SQTkUbuQTBpQU2tQZPjptPtIbPqDgvlUSJsvnUbboMYKM0Y5lvmoaICJBKOJIflJDJAEJCE5IiUsMMeRhIeCWUWFmclMTRg-uFnqjCZDkxjHp%2Bs8vbv2h8mscnjlpIf8jsYVnsZOLnsaqcfcepBcbXmKcKTcZgXcVKWgVgbKQ8fKU8QttYZ3FkV8RbOkdkVjrkRQQqsCYUVPrejPowVCVDIvgxkasjCvmuGvnUcicuKiYsdpBALpPpIZMfq0ZwsSWnkaRqhCTSZSSHvIdFvPrFnogsWMrHiydwXLuybxijmBr6ejuYUAaqfsaAeAZQJKcqVkBKccVAQWTAY3jKbmeXi8Tma8fybrOqaKrWTYemb9MPoCfqdSSCbQcUZIUzOSaaedrsBadbjUZZvCQ0V6eog6YSf8HwXuDZIePZFEM6mGISNgJOZ6lyZIn6QDCaZMcGdMaGcwfSW5JGaxh-isQYQmWWeflsflryXgX8SARbGAYcRAUWWcaKRWa%2BSKcWPmSWXAQqe%2BUqeKR%2BWmaQckfWZ3KYeBvYO3hJqqGgOgBkCAPcCAFnMkAgAANo1z0D%2BwAC6XwQAA)

Here's a peek of Basis loaded with Playroom, a useful tool for reviewing designs with developers using actual front-end code. I especially like using this tool with junior developers or new team-mates who are unfamiliar with our design system.

{% /callout %}

{% /block %}
