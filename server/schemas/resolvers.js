const { User, Documents } = require("../models");
const { signToken, AuthenticationError } = require("../util/auth");

const Resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: "Documents",
        });

        return user;
      }

      throw AuthenticationError;
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    signUp: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    uploadDoc: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
          $push: { uploadedDocs: Documents },
        });

        return user;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = Resolvers;
