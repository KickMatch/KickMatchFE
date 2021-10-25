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

  export const LOAD_TALENT = gql `
    query talent($id: Integer) {
      talent(id: $id) {
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