import React from "react"
import Section from "../Section"
import SimpleSlider from "../SlickCarousel"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
export default function Gallery() {
  const data = useStaticQuery(graphql`
    {
      gallery: allFile(
        filter: {
          relativePath: { glob: "**/gallerySection/**/*.{jpg, jpeg, png, gif}" }
          extension: { in: ["jpg", "jpeg", "png", "gif"] }
        }
      ) {
        nodes {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)
  console.log(data.gallery.nodes)

  const galleryData = data.gallery.nodes

  return (
    <Section className="gallery">
      <h2>
        Marcas <br /> <span>con las que trabajamos</span>
      </h2>
      <div className="container">
        <SimpleSlider
          speed={1000}
          autoplaySpeed={3500}
          slidesToShow={3}
          fade={false}
        >
          {galleryData.map(element => {
            const image = getImage(
              element.childrenImageSharp[0].gatsbyImageData
            )
            return <GatsbyImage image={image} />
          })}
        </SimpleSlider>
      </div>
    </Section>
  )
}
