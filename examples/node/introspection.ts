export const introspection = {
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: {
      name: 'Mutation',
    },
    subscriptionType: null,
    types: [
      {
        kind: 'SCALAR',
        name: 'Date',
        description:
          'A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'Film',
        description: null,
        fields: [
          {
            name: 'director',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'producer',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'title',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
            ofType: null,
          },
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'SCALAR',
        name: 'String',
        description:
          'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'SCALAR',
        name: 'ID',
        description:
          'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'SCALAR',
        name: 'JSON',
        description:
          'The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        description: null,
        fields: [
          {
            name: '_version',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'updateUser',
            description: null,
            args: [
              {
                name: 'name',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'SCALAR',
                    name: 'String',
                    ofType: null,
                  },
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'User',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'INTERFACE',
        name: 'Node',
        description: null,
        fields: [
          {
            name: 'id',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'Film',
            ofType: null,
          },
          {
            kind: 'OBJECT',
            name: 'Planet',
            ofType: null,
          },
          {
            kind: 'OBJECT',
            name: 'Resident',
            ofType: null,
          },
          {
            kind: 'OBJECT',
            name: 'User',
            ofType: null,
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'PageInfo',
        description: null,
        fields: [
          {
            name: 'endCursor',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'hasNextPage',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'hasPreviousPage',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'startCursor',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'SCALAR',
        name: 'Boolean',
        description: 'The `Boolean` scalar type represents `true` or `false`.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'Planet',
        description: null,
        fields: [
          {
            name: 'climate',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'films',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Film',
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'population',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'residents',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'Resident',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
            ofType: null,
          },
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        description: null,
        fields: [
          {
            name: '_version',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'fastField',
            description: 'A field that resolves fast.',
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'node',
            description: null,
            args: [
              {
                name: 'id',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null,
                  },
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'INTERFACE',
              name: 'Node',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'nodes',
            description: null,
            args: [
              {
                name: 'ids',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'LIST',
                    name: null,
                    ofType: {
                      kind: 'NON_NULL',
                      name: null,
                      ofType: {
                        kind: 'SCALAR',
                        name: 'ID',
                        ofType: null,
                      },
                    },
                  },
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'INTERFACE',
                  name: 'Node',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'planet',
            description: null,
            args: [
              {
                name: 'id',
                description: null,
                type: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'SCALAR',
                    name: 'ID',
                    ofType: null,
                  },
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'OBJECT',
              name: 'Planet',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'planets',
            description: null,
            args: [
              {
                name: 'after',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: 'before',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: 'first',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: 'last',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'QueryPlanetsConnection',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'slowfield',
            description: 'A field that resolves slowly.',
            args: [
              {
                name: 'waitFor',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
                defaultValue: '5000',
              },
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'user',
            description: null,
            args: [
              {
                name: 'id',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'ID',
                  ofType: null,
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'OBJECT',
              name: 'User',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'users',
            description: null,
            args: [
              {
                name: 'after',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: 'before',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'String',
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: 'first',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
                defaultValue: null,
              },
              {
                name: 'last',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Int',
                  ofType: null,
                },
                defaultValue: null,
              },
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'QueryUsersConnection',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'SCALAR',
        name: 'Int',
        description:
          'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'QueryPlanetsConnection',
        description: null,
        fields: [
          {
            name: 'edges',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'QueryPlanetsConnectionEdge',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'pageInfo',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'QueryPlanetsConnectionEdge',
        description: null,
        fields: [
          {
            name: 'cursor',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'node',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'Planet',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'QueryUsersConnection',
        description: null,
        fields: [
          {
            name: 'edges',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: 'QueryUsersConnectionEdge',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'pageInfo',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'QueryUsersConnectionEdge',
        description: null,
        fields: [
          {
            name: 'cursor',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'node',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: 'User',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'Resident',
        description: null,
        fields: [
          {
            name: 'height',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'id',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'mass',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
            ofType: null,
          },
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: 'User',
        description: null,
        fields: [
          {
            name: 'id',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'ID',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
            ofType: null,
          },
        ],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: '__Schema',
        description:
          'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
        fields: [
          {
            name: 'description',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'types',
            description: 'A list of all types supported by this server.',
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Type',
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'queryType',
            description: 'The type that query operations will be rooted at.',
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'mutationType',
            description:
              'If this server supports mutation, the type that mutation operations will be rooted at.',
            args: [],
            type: {
              kind: 'OBJECT',
              name: '__Type',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'subscriptionType',
            description:
              'If this server support subscription, the type that subscription operations will be rooted at.',
            args: [],
            type: {
              kind: 'OBJECT',
              name: '__Type',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'directives',
            description: 'A list of all directives supported by this server.',
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Directive',
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: '__Type',
        description:
          'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
        fields: [
          {
            name: 'kind',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'ENUM',
                name: '__TypeKind',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'specifiedByURL',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'fields',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
                defaultValue: 'false',
              },
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Field',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'interfaces',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'possibleTypes',
            description: null,
            args: [],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'enumValues',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
                defaultValue: 'false',
              },
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__EnumValue',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'inputFields',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
                defaultValue: 'false',
              },
            ],
            type: {
              kind: 'LIST',
              name: null,
              ofType: {
                kind: 'NON_NULL',
                name: null,
                ofType: {
                  kind: 'OBJECT',
                  name: '__InputValue',
                  ofType: null,
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'ofType',
            description: null,
            args: [],
            type: {
              kind: 'OBJECT',
              name: '__Type',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'ENUM',
        name: '__TypeKind',
        description:
          'An enum describing what kind of type a given `__Type` is.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: 'SCALAR',
            description: 'Indicates this type is a scalar.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'OBJECT',
            description:
              'Indicates this type is an object. `fields` and `interfaces` are valid fields.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'INTERFACE',
            description:
              'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'UNION',
            description:
              'Indicates this type is a union. `possibleTypes` is a valid field.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'ENUM',
            description:
              'Indicates this type is an enum. `enumValues` is a valid field.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'INPUT_OBJECT',
            description:
              'Indicates this type is an input object. `inputFields` is a valid field.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'LIST',
            description:
              'Indicates this type is a list. `ofType` is a valid field.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'NON_NULL',
            description:
              'Indicates this type is a non-null. `ofType` is a valid field.',
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: '__Field',
        description:
          'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'args',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
                defaultValue: 'false',
              },
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'type',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'isDeprecated',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'deprecationReason',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: '__InputValue',
        description:
          'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'type',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'defaultValue',
            description:
              'A GraphQL-formatted string representing the default value for this input value.',
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'isDeprecated',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'deprecationReason',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: '__EnumValue',
        description:
          'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'isDeprecated',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'deprecationReason',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'OBJECT',
        name: '__Directive',
        description:
          "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        fields: [
          {
            name: 'name',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'description',
            description: null,
            args: [],
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'isRepeatable',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'locations',
            description: null,
            args: [],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'ENUM',
                    name: '__DirectiveLocation',
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'args',
            description: null,
            args: [
              {
                name: 'includeDeprecated',
                description: null,
                type: {
                  kind: 'SCALAR',
                  name: 'Boolean',
                  ofType: null,
                },
                defaultValue: 'false',
              },
            ],
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'LIST',
                name: null,
                ofType: {
                  kind: 'NON_NULL',
                  name: null,
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                    ofType: null,
                  },
                },
              },
            },
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null,
      },
      {
        kind: 'ENUM',
        name: '__DirectiveLocation',
        description:
          'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: 'QUERY',
            description: 'Location adjacent to a query operation.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'MUTATION',
            description: 'Location adjacent to a mutation operation.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'SUBSCRIPTION',
            description: 'Location adjacent to a subscription operation.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'FIELD',
            description: 'Location adjacent to a field.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'FRAGMENT_DEFINITION',
            description: 'Location adjacent to a fragment definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'FRAGMENT_SPREAD',
            description: 'Location adjacent to a fragment spread.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'INLINE_FRAGMENT',
            description: 'Location adjacent to an inline fragment.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'VARIABLE_DEFINITION',
            description: 'Location adjacent to a variable definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'SCHEMA',
            description: 'Location adjacent to a schema definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'SCALAR',
            description: 'Location adjacent to a scalar definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'OBJECT',
            description: 'Location adjacent to an object type definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'FIELD_DEFINITION',
            description: 'Location adjacent to a field definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'ARGUMENT_DEFINITION',
            description: 'Location adjacent to an argument definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'INTERFACE',
            description: 'Location adjacent to an interface definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'UNION',
            description: 'Location adjacent to a union definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'ENUM',
            description: 'Location adjacent to an enum definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'ENUM_VALUE',
            description: 'Location adjacent to an enum value definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'INPUT_OBJECT',
            description:
              'Location adjacent to an input object type definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
          {
            name: 'INPUT_FIELD_DEFINITION',
            description:
              'Location adjacent to an input object field definition.',
            isDeprecated: false,
            deprecationReason: null,
          },
        ],
        possibleTypes: null,
      },
    ],
    directives: [
      {
        name: 'include',
        description:
          'Directs the executor to include this field or fragment only when the `if` argument is true.',
        locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
        args: [
          {
            name: 'if',
            description: 'Included when true.',
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
      },
      {
        name: 'skip',
        description:
          'Directs the executor to skip this field or fragment when the `if` argument is true.',
        locations: ['FIELD', 'FRAGMENT_SPREAD', 'INLINE_FRAGMENT'],
        args: [
          {
            name: 'if',
            description: 'Skipped when true.',
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'Boolean',
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
      },
      {
        name: 'deprecated',
        description:
          'Marks an element of a GraphQL schema as no longer supported.',
        locations: [
          'FIELD_DEFINITION',
          'ARGUMENT_DEFINITION',
          'INPUT_FIELD_DEFINITION',
          'ENUM_VALUE',
        ],
        args: [
          {
            name: 'reason',
            description:
              'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
            type: {
              kind: 'SCALAR',
              name: 'String',
              ofType: null,
            },
            defaultValue: '"No longer supported"',
          },
        ],
      },
      {
        name: 'specifiedBy',
        description:
          'Exposes a URL that specifies the behavior of this scalar.',
        locations: ['SCALAR'],
        args: [
          {
            name: 'url',
            description: 'The URL that specifies the behavior of this scalar.',
            type: {
              kind: 'NON_NULL',
              name: null,
              ofType: {
                kind: 'SCALAR',
                name: 'String',
                ofType: null,
              },
            },
            defaultValue: null,
          },
        ],
      },
    ],
  },
}