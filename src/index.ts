import { printSchema } from 'graphql';
import path from 'path'
import http from 'http';
import fs from 'fs/promises';
// Yoga-features
import { createYoga } from 'graphql-yoga'
import { useDeferStream } from '@graphql-yoga/plugin-defer-stream'
// TODO: in production: disable-introspection, block-field-suggestions
// TODO: support for an _context file that allows for Context additions/typing
// TODO: authn and authz features
// TODO: proper logger support
// TODO: create persisted-operations integration where when this is co-located with
// the front-end generates the appropriate manifest
// Pothos features
import SchemaBuilder from '@pothos/core'
import SimpleObjects from '@pothos/plugin-simple-objects'
import RelayPlugin from '@pothos/plugin-relay'
import DataloaderPlugin from '@pothos/plugin-dataloader'



export { createRestDatasource } from './RESTDatasource'

export const builder = new SchemaBuilder({
  plugins: [
    SimpleObjects,
    RelayPlugin,
    DataloaderPlugin
  ],
   relayOptions: {
    clientMutationId: 'omit',
    cursorType: 'String',
   }
})

// Initialize base-types
builder.queryType({
  fields: t => ({ _version: t.string({
    resolve: () => '0.0.1'
  }) })
})
// builder.mutationType({})
// builder.subscriptionType({})

const baseDir = process.cwd();
const modules = import.meta.glob("/types/*.ts");

export async function main() {
  const promises: Array<any> = [];
  for (const path in modules) {
    promises.push(modules[path]())
  }

  await Promise.all(promises);
  const completedSchema = builder.toSchema({});
  fs.writeFile(path.resolve(baseDir, 'schema.graphql'), printSchema(completedSchema), 'utf-8')

  const yoga = createYoga({
    schema: completedSchema,
    // We allow batching by default
    batching: true,
    plugins: [
      useDeferStream()
    ]
  })

  if (import.meta.env.PROD) {
    const server = http.createServer(yoga);
    server.listen(4000)
  } else {
    return yoga;
  }
}

main();
