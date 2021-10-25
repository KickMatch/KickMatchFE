import {gql} from '@apollo/client'

export const CREATE_MATCH = gql `
  mutation createMatch($sportClubId: String! $talentId: String!) {
    createMatch(sportClubId: $sportClubId talentId: $talentId) {
      talentId
    }
  }
`