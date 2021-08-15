import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      location {
        latitude
        longitude
      }
      athtele {
        name
        city
        medal
      }
      slug
    }
  }
`

export const GET_ATHLETES = gql`
  query getAthletes($first: Int) {
    athletes(first: $first) {
      name
      city
      modality
      about {
        html
      }
      medal
      slug
      image {
        url
      }
    }
  }
`

export const GET_ATHLETE_BY_SLUG = gql`
  query getAthleteBySlug($slug: String!) {
    athlete(where: { slug: $slug }) {
      name
      city
      about {
        html
      }
      modality
      medal
      image {
        url
        width
        height
      }
    }
  }
`
