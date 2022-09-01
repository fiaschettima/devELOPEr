const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Message } = require('../models');
const { signToken } = require('../utils/auth');
const { GraphQLScalarType, Kind } = require('graphql');

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
        }
        return null; // Invalid hard-coded value (not an integer)
    },
});

const resolvers = {
    Date: dateScalar,
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { email }) => {
            return User.findOne({ email });
        },
        messages: async () => {
            return Message.find();
        },
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, body) => {
            const email = body.email
            const password = body.password
            const user = await User.create({email,password});
            const token = signToken(user);
            const update = await User.findOneAndUpdate(
                { email: email },
                { profile : body.input },
                { new: true }
            )
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('No user found with this email');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
      
            return { token, user };
        },
    }
};

module.exports = resolvers;