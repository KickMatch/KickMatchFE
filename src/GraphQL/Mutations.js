import {gql} from '@apollo/client'

export const CREATE_MATCH = gql `
  mutation createMatch($sportClubId: Int! $talentId: Int!) {
    createMatch(input: {sportClubId: $sportClubId talentId: $talentId}) {
      match {
        sportClubId,
        talentId
      }
      errors
    }
  }
`

export const CREATE_TALENT = gql `
  mutation createTalent(
    $name: String! 
    $age: Int!
    $height: String!
    $weight: Int!
    $primaryPosition: String!
    $secondaryPosition: String!
    $videoUrl: String!
    $zipcode: Int!
    $email: String!
    $dominantFoot: String!
    $goalsMadeLs: Int!
    $verticalJump: Float!
    $fortyDash: Float!
    $jugglingRecord: Int!
    $talents: String!
    $awards: String!
    ) {
    createTalent( input: {
      name: $name
      age: $age
      height: $height
      weight: $weight
      primaryPosition: $primaryPosition
      secondaryPosition: $secondaryPosition
      videoUrl: $videoUrl
      zipcode: $zipcode
      email: $email
      dominantFoot: $dominantFoot
      goalsMadeLs: $goalsMadeLs
      verticalJump: $verticalJump
      fortyDash: $fortyDash
      jugglingRecord: $jugglingRecord
      talents: $talents
      awards: $awards
      }
    ) {
      talent {
        id,
        name
      }
    }
  }
`


// talent {
//   id,
//   name,
//   age,
//   height,
//   weigth,
//   primaryPosition,
//   secondaryPosition,
//   videoUrl,
//   zipcode,
//   email,
//   dominantFoot,
//   goalsMadeLs,
//   verticalJump,
//   forthyDash,
//   jugglingRecord,
//   talents
// }

