const { AuthenticationError } = require('apollo-server-express');
const { User, Bug } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('bugs');
        },
        user: async (parent, { username}) => {
            return User.findOne({ username }).populate('bugs');
        },
        bug: async (parent, { bugId }) => {
            return Bug.findOne({ _id: bugId });
        },
        bugs: async () => {
            return Bug.find().sort({ date: -1 });
        },
    },

    Mutation: {
        // create a user
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) { throw new AuthenticationError('No user found with this email address'); }
            
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) { throw new AuthenticationError('Incorrect credentials'); }
            
            const token = signToken(user);
            return { token, user };
          },
    },
};

module.exports = resolvers;