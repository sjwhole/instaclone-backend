import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    toggleLike(id: Int!): MutationResponse!
  }
`;
