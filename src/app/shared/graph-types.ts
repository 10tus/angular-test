import { gql } from 'apollo-angular';

export const GET_TRENDING_DESC = gql`
  query ($seasonYear: Int, $type: MediaType, $sort: [MediaSort]) {
    Page {
      media(seasonYear: $seasonYear, type: $type, sort: $sort) {
        title {
          english
          romaji
        }
        coverImage {
          medium
        }
        description
        status
        format
        type
        id
        season
        seasonYear
        trending
      }
    }
  }
`;
