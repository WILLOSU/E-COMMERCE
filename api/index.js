"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const schema = (0, graphql_1.buildSchema)(`
  type Query {
    products(category: String): [Product!]!
    product(id: String!): Product
  }

  type Product {
    id: String!
    name: String!
    category: String!
    price: Float!
    details: String!
    img: String!
    reviews: [Review!]!
    popularity: Int!
    createdAt: String!
  }

  type Review {
    userId: String!
    userName: String!
    rating: Int!
    comment: String!
    postedAt: String!
  }
`);
const root = {
    products: ({ category }) => {
        if (category) {
            return db_1.default.filter(product => product.category === category);
        }
        return db_1.default;
    },
    product: ({ id }) => db_1.default.find(product => product.id === id),
};
const app = (0, express_1.default)();
// Adicione esta linha para habilitar CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
