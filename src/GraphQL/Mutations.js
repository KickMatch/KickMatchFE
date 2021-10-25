import {gql} from '@apollo/client'

export const CREATE_MATCH = gql `
  mutation createMatch($sportClubId: String! $talentId: String!) {
    createMatch(talentId: $talentId sportClubId: $sportClubId) {
      talentId
    }
  }
`