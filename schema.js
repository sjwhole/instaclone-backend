import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { mergeSchemas } from "@graphql-tools/schema";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.{resolvers,queries,mutations}.js`
);
const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = mergeSchemas({ typeDefs, resolvers });

export default schema;
