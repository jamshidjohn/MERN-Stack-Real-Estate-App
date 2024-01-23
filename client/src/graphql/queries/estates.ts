import { gql } from "@apollo/client";

export const GET_ESTATE = gql`
  query estate($_id: ID!) {
    estate(_id: $_id) {
      _id
      images
      title
      description
      price
      seller {
        _id
        name
        phone
        email
        verified
      }
      size
      status
      createdAt
      updatedAt
      category
      location {
        province {
          _id
          name
          code
        }
        district {
          _id
          name
        }
        address
      }
      type {
        _id
        name
      }
      detailedType {
        _id
        name
      }
      details {
        _id
        age
        roomAndSaloon
        floor
        locatedFloor
        bathroom
        internet
        furnished
        balcony
        elevator
        thermalInsulation
        garage
        fittedKitchen
        fittedBathroom
        parquet
        heatingType
      }
    }
  }
`;
export const GET_ESTATES = gql`
  query estates($limit: Int, $offset: Int) {
    estates(limit: $limit, offset: $offset) {
      _id
      images
      title
      description
      price
      seller {
        _id
        name
        phone
        email
        verified
      }
      size
      status
      createdAt
      updatedAt
      category
      location {
        province {
          _id
          name
          code
        }
        district {
          _id
          name
        }
        address
      }
      type {
        _id
        name
      }
      detailedType {
        _id
        name
      }
      details {
        _id
        age
        roomAndSaloon
        floor
        locatedFloor
        bathroom
      }
    }
  }
`;
export const GET_ESTATES_BY_SELLER = gql`
  query estatesBySeller($sellerId: ID!, $limit: Int, $offset: Int) {
    estatesBySeller(sellerId: $sellerId, limit: $limit, offset: $offset) {
      _id
      images
      title
      description
      price
      seller {
        _id
        name
        phone
        email
        verified
      }
      size
      status
      createdAt
      updatedAt
      category
      location {
        province {
          _id
          name
          code
        }
        district {
          _id
          name
        }
        address
      }
      type {
        _id
        name
      }
      detailedType {
        _id
        name
      }
      details {
        _id
        age
        roomAndSaloon
        floor
        locatedFloor
        bathroom
      }
    }
  }
`;
export const GET_ESTATES_BY_FILTER = gql`
  query estatesByFilter(
    $minPrice: Int
    $maxPrice: Int
    $minSize: Int
    $maxSize: Int
    $category: String
    $type: ID
    $detailedType: ID
    $province: ID
    $district: ID
    $limit: Int
    $offset: Int
  ) {
    estatesByFilter(
      body: {
        minPrice: $minPrice
        maxPrice: $maxPrice
        minSize: $minSize
        maxSize: $maxSize
        category: $category
        type: $type
        detailedType: $detailedType
        province: $province
        district: $district
      }
      limit: $limit
      offset: $offset
    ) {
      _id
      images
      title
      description
      price
      seller {
        _id
        name
        phone
        email
        verified
      }
      size
      status
      createdAt
      updatedAt
      category
      location {
        province {
          _id
          name
          code
        }
        district {
          _id
          name
        }
        address
      }
      type {
        _id
        name
      }
      detailedType {
        _id
        name
      }
      details {
        _id
        age
        roomAndSaloon
        floor
        locatedFloor
        bathroom
      }
    }
  }
`;
export const GET_ESTATES_SORTED_BY_DATE = gql`
  query estatesSortedByDate($desc: Boolean!, $limit: Int, $offset: Int) {
    estatesSortedByDate(desc: $desc, limit: $limit, offset: $offset) {
      _id
      images
      title
      description
      price
      seller {
        _id
        name
        phone
        email
        verified
      }
      size
      status
      createdAt
      updatedAt
      category
      location {
        province {
          _id
          name
          code
        }
        district {
          _id
          name
        }
        address
      }
      type {
        _id
        name
      }
      detailedType {
        _id
        name
      }
      details {
        _id
        age
        roomAndSaloon
        floor
        locatedFloor
        bathroom
      }
    }
  }
`;
export const GET_ESTATES_SORTED_BY_PRICE = gql`
  query estatesSortedByPrice($desc: Boolean!, $limit: Int, $offset: Int) {
    estatesSortedByPrice(desc: $desc, limit: $limit, offset: $offset) {
      _id
      images
      title
      description
      price
      seller {
        _id
        name
        phone
        email
        verified
      }
      size
      status
      createdAt
      updatedAt
      category
      location {
        province {
          _id
          name
          code
        }
        district {
          _id
          name
        }
        address
      }
      type {
        _id
        name
      }
      detailedType {
        _id
        name
      }
      details {
        _id
        age
        roomAndSaloon
        floor
        locatedFloor
        bathroom
      }
    }
  }
`;
