const typeDefs = `
type User {
    _id: ID!
    name: String!
    email: String!
    description: String
    uploadedDocs: [Documents]!
    purchasedDocs: [Documents]!
}

type Documents {
    _id: ID!
    author: ID!
    title: String!
    description: String!
    price: Int!
    preview: String!
    location: String!
}

type Auth {
    token: ID!
    user: User!
}

type Mutation {
    login(email: String!, password: String!): Auth
    signUp(name: String!, email: String!, password: String!, description: String!): Auth
    uploadDoc(title: String!, author: ID!, description: String!, price: Int!, preview: String!, location: String!): Documents
}

type Query {
    me: User
}
`;

module.exports = typeDefs;
