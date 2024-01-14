export default `#graphql
    type Estate {
        _id: ID!
        images: [String]!
        title: String!
        description: String!
        price: Int!
        seller: User!
        size: Int!
        status: Boolean!
        createdAt: String!
        updatedAt: String!
        category: Categories!
        location: Location!
        type: Type!
        detailedType: DetailedType!
        details: Details
    }

    type Query {
        estate(_id: ID!): Estate
        estates: [Estate]
        estatesBySeller(sellerId: ID!): [Estate]
        estatesByFilter(body: Filters): [Estate]
        estatesSortedByDate(desc: Boolean!): [Estate]
        estatesSortedByPrice(desc: Boolean!): [Estate]
    }

    type Mutation {
        createEstate(body: CreateInputs): Estate
        updateEstate(_id: ID!, body: UpdateInputs): Estate
    }

    input Filters {
        minPrice: Int
        maxPrice: Int
        minSize: Int
        maxSize: Int
        category: String
        type: ID
        detailedType: ID
        province: ID
        district: ID
    }

    input CreateInputs {
        images: [String]!
        title: String!
        description: String!
        price: Int!
        seller: ID!
        size: Int!
        category: String!
        location: ID!
        type: ID!
        detailedType: ID!
        details: ID
    }

    input UpdateInputs {
        images: [String]
        title: String
        description: String
        price: Int
        size: Int
        category: String
        type: ID
        detailedType: ID
    }

    enum Categories {
        rent, sale
    }
`;
