/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query HomePage {\n    myCart {\n      ...Cart_CartFields\n    }\n    categories {\n      ...Category_CategoryFields\n    }\n  }\n':
    types.HomePageDocument,
  '\n  fragment Cart_CartFields on Cart {\n    items {\n      quantity\n      product {\n        id\n        price\n        ...Product_ProductFields\n      }\n    }\n  }\n':
    types.Cart_CartFieldsFragmentDoc,
  '\n  fragment Category_CategoryFields on Category {\n    name\n    products {\n      id\n      ...Product_ProductFields\n    }\n  }\n':
    types.Category_CategoryFieldsFragmentDoc,
  '\n  fragment Product_ProductFields on Product {\n    id\n    name\n    image\n    description\n    price\n  }\n':
    types.Product_ProductFieldsFragmentDoc,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query HomePage {\n    myCart {\n      ...Cart_CartFields\n    }\n    categories {\n      ...Category_CategoryFields\n    }\n  }\n',
): (typeof documents)['\n  query HomePage {\n    myCart {\n      ...Cart_CartFields\n    }\n    categories {\n      ...Category_CategoryFields\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Cart_CartFields on Cart {\n    items {\n      quantity\n      product {\n        id\n        price\n        ...Product_ProductFields\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment Cart_CartFields on Cart {\n    items {\n      quantity\n      product {\n        id\n        price\n        ...Product_ProductFields\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Category_CategoryFields on Category {\n    name\n    products {\n      id\n      ...Product_ProductFields\n    }\n  }\n',
): (typeof documents)['\n  fragment Category_CategoryFields on Category {\n    name\n    products {\n      id\n      ...Product_ProductFields\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Product_ProductFields on Product {\n    id\n    name\n    image\n    description\n    price\n  }\n',
): (typeof documents)['\n  fragment Product_ProductFields on Product {\n    id\n    name\n    image\n    description\n    price\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
