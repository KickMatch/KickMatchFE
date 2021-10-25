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
    $verticalJump: Int!
    $forthyDash: Int!
    $jugglingRecord: Int!
    $talents: String!
    ) {
    createTalent( input: {
      name: $name
      age: $age
      height: $height
      weigth: $weight
      primaryPosition: $primaryPosition
      secondaryPosition: $secondaryPosition
      videoUrl: $videoUrl
      zipcode: $zipcode
      email: $email
      dominantFoot: $dominantFoot
      goalsMadeLs: $goalsMadeLs
      verticalJump: $verticalJump
      forthyDash: $forthyDash
      jugglingRecord: $jugglingRecord
      talents: $talents
      }
    ) {
      talent {
        id,
        name,
        age,
        height,
        weigth,
        primaryPosition,
        secondaryPosition,
        videoUrl,
        zipcode,
        email,
        dominantFoot,
        goalsMadeLs,
        verticalJump,
        forthyDash,
        jugglingRecord,
        talents
      }
      errors
    }
  }
`

