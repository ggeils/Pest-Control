import { gql } from '@apollo/client';

//  display all users in database - users: [User]!
export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            username
            bugs {
                _id
                bugName
            }
        }
    }
`;

// display a single user - user(username: String!): User
export const QUERY_SINGLE_USER = gql`
    query singleUser($username: String!) {
        user(username: $username) {
            _id
            username
            bugs {
                _id
                bugName
                description
            }
        }
    }
`;

// display all the bugs in database - bugs: [Bug]!
export const QUERY_ALLBUGS = gql`
    query AllBugs {
        bugs {
            _id
            bugName
            productName
            date
            severity
            description
            reproduction
            status
        }
    }
`;

// display a single bug -  bug(bugId: ID!): Bug
export const QUERY_SINGLE_BUG = gql`
    query singleBug($bugId: ID!) {
        bug(bugId: $bugId) {
            _id
            bugName
            productName
            date
            severity
            description
            reproduction
            status
        }
    }
`;

// display the profile information of the user logged in - userLoged: User
export const QUERY_USER_LOGGED = gql`
    query userLogged {
        userLoged {
            _id
            username
            name
            jobTitle
            company
            currentProject
            bugsFixed
            bugs {
                _id
                bugName
                productName
                date
                severity
                description
                reproduction
                status
            }
        }
    }
`;