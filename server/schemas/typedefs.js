const typeDefs = `
type User {
    _id = ID
    name = String!
    email = String!
    description = String!
    uploadedDocs = [Documents]!
    purchasedDocs = [Documents]!
}

type Documents {
    _id = ID
    author = User!
    title = String!
    description = String!
    price = Int!
    preview = String!
    location = String!
}

type Auth {
    token = ID!
    user: User!
}

type Mutation {
    login(email: String!, password: String!): Auth
    signUp(name: String!, email: String!, password: String!): Auth
    uploadDoc(title: String!, author: User!, description = String!, price = Int!, preview = String!, location = String!): User
}

type Query {
    me: User
}
`;
