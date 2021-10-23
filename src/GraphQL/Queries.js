import { gql } from '@apollo/client'

export const LOAD_ALL_TALENT = gql `
    query {
      allTalent {
        id,
        name,
        age,
        height,
        weight,
        primaryPosition,
        secondaryPosition,
        videoUrl
      }
    }
  `

export const LOAD_ALL_CLUBS = gql `
  query {
    allClubs {
      id,
      name,
      location,
      league
    }
  }
`