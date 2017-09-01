import {makeExecutableSchema} from 'graphql-tools'
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express'

const typeDefs = [
  `
    type Student {
      id: ID!
      name: String!
      age: Integer!
    }
    type Query {
      allStudents: [Student!]
    }
    schema {
      query: Query
    }
  `
]

const students = [
  {
    id: 1,
    name: "Olga",
    age: 15
  },
  {
    id: 2,
    name: "Miruna",
    age: 15
  }
]

const resolvers = {
  Query: {
    allStudents: () => students
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default (app) => {
  app.use('/graphql', graphqlExpress(() => {
    return {
      schema
    }
  }
  ))
  app.use('/graphiql', graphiqlExpress({endpointURL: "/graphql"}))
}
