import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import Slider from "../components/Slider"

const HomePage = ({ data }) => {
  const movieSections = makeMovieSections(data)

  return (
    <Layout>
      <Hero />
      {Object.keys(movieSections).map((k, i) => {
        const section = movieSections[k]
        return (
          <Section key={k}>
            <SectionTitle>{section.title}</SectionTitle>
            <Slider row={1 + i} col={0}>
              {section.movies.map(node => (
                <Slider.Item key={node.id} mediaInfo={node} />
              ))}
            </Slider>
          </Section>
        )
      })}
    </Layout>
  )
}

const makeMovieSections = data => {
  const movieSections = data.allMovie.edges.reduce((acc, { node }) => {
    for (const gId of node.genreIds) {
      if (!acc.hasOwnProperty(gId)) {
        acc[gId] = {
          title: "",
          movies: [],
        }
      }

      acc[gId].movies.push(node)
    }

    return acc
  }, {})

  for (const { node } of data.allMediaGenre.edges) {
    if (movieSections.hasOwnProperty(node.genreId)) {
      movieSections[node.genreId].title = node.name
    }
  }

  return movieSections
}

export default HomePage
export const query = graphql`
  query MoviesQuery {
    allMediaGenre {
      edges {
        node {
          id
          genreId
          name
        }
      }
    }
    allMovie(limit: 150, skip: 0) {
      edges {
        node {
          id
          movieId
          genreIds
          title
          description
          releaseDate
          poster
          backdrop
        }
      }
    }
  }
`
