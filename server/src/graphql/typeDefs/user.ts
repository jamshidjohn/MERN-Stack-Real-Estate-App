export default `#graphql
    type User {
        _id: ID!
        name: String!
        phone: String!
        email: String!
        password: String!
        favorites: Estate
        role(roles: Roles): String!
        verified: Boolean!
        createdAt: String!
        refreshToken: String
    }

    type Query {
        user(_id: ID!): User
        users(limit: Int, offset: Int): [User]
        favorites(_id: ID!, limit: Int, offset: Int): [Estate]
    }

    type Mutation {
        register(name: String!, password: String!, phone: String!, email: String!): User
        login(email: String!, password: String!): String
        logout(_id: ID!): Boolean
        updateUser(_id: ID!, phone: String, email: String, verified: Boolean, refreshToken: String): User
        addFavorite(_id: ID!, estateId: ID!): User
        removeFavorite(_id: ID!, estateId: ID!): User
    }

    enum Roles {
        user, admin, banned
    }
`;
