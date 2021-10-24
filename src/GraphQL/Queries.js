import { gql } from '@apollo/client'

export const LOAD_ALL_TALENT = gql `
    query {
      allTalent {
        id,
        name,
        age,
        height,
        weight,
        videoUrl,
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

/*
        id,
        name,
        age,
        height,
        weight,
        videoUrl,
        zipcode,
        email,
        dominantFoot,
        goalsMadeLs,
        verticalJump,
        fortyDash,
        jugglingRecord,
        talents,
        primaryPosition,
        secondaryPosition
*/