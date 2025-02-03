import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';
import products from './db';

const schema = buildSchema(`
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
  products: ({ category }: { category: string | undefined }) => {
    if (category) {
      return products.filter(product => product.category === category);
    }
    return products;
  },
  product: ({ id }: { id: string }) => products.find(product => product.id === id),
};

const app = express();

// Adicione esta linha para habilitar CORS
app.use(cors());

app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});