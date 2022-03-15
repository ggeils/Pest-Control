const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bugs: [Bug]!
        name: String
        jobTitle: String
        company: String
        currentProject: String
        bugsFixed: Int
    }

    type Bug {
        _id: ID
        bugName: String
        productName: String
        date: String
        severity: String
        description: String
        reproduction: String
        status: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        users: [User]!
        user(username: String!): User
        bug(bugId: ID!): Bug
        bugs: [Bug]!
        me: User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
