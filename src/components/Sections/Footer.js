import React from "react"

import { ReactSVG } from "react-svg"

import Logo from "../../images/GatsbyImages/Logo"
import Tabs from "../Tabs"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  /*   const data2 = useStaticQuery(graphql`
    query   {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `) */

  /*   const { copyright } = data2.site.siteMetadata */

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
          author {
            name
            portfolio
          }
        }
      }
      footer: file(relativePath: { eq: "footerSection.json" }) {
        childDataJson {
          contact {
            email {
              string
              url
              icon {
                publicURL
              }
            }
            location {
              string
              url
              icon {
                publicURL
              }
            }
            phone {
              string
              url
              icon {
                publicURL
              }
            }
            whatsapp {
              string
              url
              icon {
                publicURL
              }
            }
          }
          social {
            facebook {
              url
              icon {
                publicURL
              }
            }
            instagram {
              url
              icon {
                publicURL
              }
            }
            linkedin {
              url
              icon {
                publicURL
              }
            }
            twitter {
              url
              icon {
                publicURL
              }
            }
          }
        }
      }
    }
  `)
  const { copyright, author } = data.site.siteMetadata
  console.log(copyright)
  const footerData = data.footer.childDataJson
  return (
    <footer>
      <div className="content">
        <div className="container first">
          {Object.keys(footerData.contact).length > 0 && (
            <div className="contact">
              {Object.keys(footerData.contact).map(plataform => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footerData.contact[plataform].url}
                >
                  <ReactSVG
                    src={footerData.contact[plataform].icon.publicURL}
                  />
                  {footerData.contact[plataform].string}
                </a>
              ))}
            </div>
          )}
          <div className="extra">
            <Logo />
            <nav>
              <Tabs />
            </nav>
          </div>
        </div>
        {Object.keys(footerData.social).length > 0 && (
          <div className="container second">
            <h2>Siguenos en las redes para ver mas</h2>
            <div className="social">
              {Object.keys(footerData.social).map(plataform => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={footerData.social[plataform].url}
                >
                  <ReactSVG src={footerData.social[plataform].icon.publicURL} />
                </a>
              ))}
            </div>
          </div>
        )}

        <p className="copyright">
          {copyright} por
          <a href={author.portfolio}> {author.name}</a>
        </p>
      </div>
    </footer>
  )
}
