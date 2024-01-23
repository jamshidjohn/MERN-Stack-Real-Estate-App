import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      _id
      name
      email
      phone
      role
      verified
      createdAt
    }
  }
`;
export const GET_USERS = gql`
  query users($limit: Int, $offset: Int) {
    users(limit: $limit, offset: $offset) {
      _id
      name
      email
      phone
      role
      verified
      createdAt
    }
  }
`;
export const GET_FAVORITES = gql`
  query favorites($_id: ID!, $limit: Int, $offset: Int) {
    favorites(_id: $_id, limit: $limit, offset: $offset) {
      _id
      images
      title
      size
      prize
      seller {
        _id
        name
        phone
        email
      }
      updatedAt
      category
      type {
        name
      }
      detailedType {
        name
      }
      location {
        province {
          name
        }
        district {
          name
        }
      }
      details {
        roomAndSaloon
        floor
        age
      }
    }
  }
`;
