import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user {
        _id
        username
    }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
        _id
        username
    }
    }
}
`;

// Update user profile - 
export const UPDATE_PROFILE = gql`
    mutation updateprofile($name: String, $jobTitle: String, $company: String, $currentProject: String) {
        updateprofile(name: $name, jobTitle: $jobTitle, company: $company, currentProject: $currentProject) {
            _id
            username
            name
            jobTitle
            company
            currentProject
            bugsFixed
        }
    }
`;

// create a bug - when the report new bug is pressed
export const ADD_BUG = gql`
    mutation addBug($bugName: String, $productName: String, $severity: String, $description: String, $reproduction: String) {
        addBug(bugName: $bugName, productName: $productName, severity: $severity, description: $description, reproduction: $reproduction) {
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

// update a bug - update description and reproduction 
export const UPDATE_BUG = gql`
    mutation updateBug($bugId: ID!, $description: String!, $reproduction: String!) {
        updateBug(BugId: $bugId, description: $description, reproduction: $reproduction) {
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

// update if Bug is Fixed -  bug-status is updated to close, and User-bugsFixed is increased
export const BUG_FIXED = gql`
    mutation BugFixed($bugId: ID!) {
        BugFixed(BugId: $bugId) {
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

// deleteBug( BugId: ID!): User
export const DELETE_BUG = gql`
mutation deleteBUG($bugId: ID!) {
    deleteBug(BugId: $bugId) {
      _id
      username
      bugs {
        _id
        bugName
      }
    }
  }
`;