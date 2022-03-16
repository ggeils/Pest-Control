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
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        userLoged: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('bugs');
            }
            throw new AuthenticationError('You need to be logged in!');
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
            const user = await User.findOne({ email }).populate('bugs');;
            if (!user) { throw new AuthenticationError('No user found with this email address'); }
            
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) { throw new AuthenticationError('Incorrect credentials'); }
            
            const token = signToken(user);
            return { token, user };
        },
        // Update user profile - update all user profile info
        updateprofile: async (parent, args, context) => {
            // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
            if(context.user){
                return User.findByIdAndUpdate( context.user._id, args, { new: true } );
            }
            // If user attempts to execute this mutation and isn't logged in, throw an error
            throw new AuthenticationError('You need to be logged in!');
        },
        // create a bug - when the report new bug is pressed
        addBug: async (parent, args, context) => {
            if(context.user){
                const newBug = await Bug.create(args);
                await User.findByIdAndUpdate (
                    context.user._id, { $addToSet: { bugs: newBug._id } }, { new: true, runValidators: true, }
                );
            return newBug;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // update a bug - update the description or reproduction of the bug
        updateBug: async (parent, { BugId, description, reproduction }, context) => {
            if(context.user){
                return await Bug.findOneAndUpdate(
                    { _id: BugId }, 
                    { description: description, reproduction: reproduction }, 
                    { new: true }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        

    },
};

module.exports = resolvers;