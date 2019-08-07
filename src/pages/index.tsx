import * as React from 'react'
import { graphql } from 'gatsby'
import * as styles from './Index.module.scss'
  
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
        githubLink: string;
      }
    }
    allContentfulService: {
      edges: {
        node: {
          serviceTitle: string;
          serviceImage: {
            resolutions: {
              src: string;
            }
          }
          serviceId: string;
        }
      }
    }   
  }
}
  
export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
        githubLink
      }
    }
    allContentfulService(sort: { fields: [serviceTitle] }) {
      edges {
        node {
          serviceTitle
          serviceImage {
            resolutions {
              src
            }
          }
          serviceId
        }
      }
    }
  }
`
  
export default class IndexPage extends React.Component<IndexPageProps, {}> {
  
  renderServiceTile = (service, index) => {
     return (
      <div key={index} className={styles.MovieTile}>
        <img src={service.serviceImage.resolutions.src} className={styles.MovieImg}  />
        <h2>{service.serviceTitle}</h2>
      </div>  
    )
  }
  
  public render() {
  
    const {
      name,
      tagline,
      githubLink
    } = this.props.data.site.siteMetadata
  
    const services = this.props.data.allContentfulService.edges.map((edge) => edge.node)
  
    return (
      <div className={styles.Container}>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <div className={styles.MovieTileWrapper}>
          {services.map((service, index) => this.renderServiceTile(service, index))}
        </div>
        <a href={githubLink} className={styles.Link}>See the code on Github &rarr;</a>
      </div>
    )
  }
}
