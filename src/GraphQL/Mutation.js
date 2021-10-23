import {gql} from '@apollo/client'

export const CREATE_MATCH = gql `
  mutation createMatch($talent_id: Number! $sport_club_id: Number!) {
    createMatch(talent_id: $talent_id sport_club_id: $sport_club_id:) {
      talent_id
    }
  }
`