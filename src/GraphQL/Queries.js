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
      }
    }
  `

export const LOAD_TALENT = (id) => gql `
  query talent {
    talent(id: ${id}) {
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
    }
  }
`

export const ATHLETE_MATCHES = (id) => gql `
  query matchTalent {
    matchTalent(id: ${id}) {
      id,
      name,
      email,
      zipcode 
    }
  }
`

export const LOAD_ALL_CLUBS = gql `
  query {
    allClubs {
      id,
      name,
      location,
      league,
      zipcode,
      email,
      phone,
      tournaments,
      coachResume,
      currentlyLooking
    }
  }
`

// export const LOAD_CLUB = gql `
// query {
//   Club(id:) {
//     id,
//     name,
//     age,
//     height,
//     weight,
//     videoUrl,
//     zipcode,
//     email,
//     dominantFoot,
//     goalsMadeLs,
//     verticalJump,
//     fortyDash,
//     jugglingRecord,
//     talents,
//     primaryPosition,
//     secondaryPosition
//   }
// }
// `




// export const CREATE_TALENT = gql `
// query {
//   Club(id:) {
//     id,
//     name,
//     age,
//     height,
//     weight,
//     videoUrl,
//     zipcode,
//     email,
//     dominantFoot,
//     goalsMadeLs,
//     verticalJump,
//     fortyDash,
//     jugglingRecord,
//     talents,
//     primaryPosition,
//     secondaryPosition
//   }
// }
// `


