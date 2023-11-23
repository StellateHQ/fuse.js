import SchemaBuilder, { ObjectRef, SchemaTypes, verifyRef } from '@pothos/core'
import { ListShape } from './types'

const schemaBuilderProto =
  SchemaBuilder.prototype as PothosSchemaTypes.SchemaBuilder<SchemaTypes>

export const connectionRefs = new WeakMap<
  PothosSchemaTypes.SchemaBuilder<SchemaTypes>,
  ObjectRef<ListShape<SchemaTypes, unknown, boolean>>[]
>()

export const globalConnectionFieldsMap = new WeakMap<
  PothosSchemaTypes.SchemaBuilder<SchemaTypes>,
  ((ref: ObjectRef<ListShape<SchemaTypes, unknown, boolean>>) => void)[]
>()

schemaBuilderProto.listObject = function connectionObject({
  type,
  name: connectionName,
}) {
  verifyRef(type)

  const connectionRef =
    this.objectRef<ListShape<SchemaTypes, unknown, false>>(connectionName)

  this.objectType(connectionRef, {
    fields: (t) => ({
      nodes: t.field({
        nullable: false,
        type: [type],
        resolve: (parent) => parent.nodes as any,
      }),
    }),
  })

  if (!connectionRefs.has(this)) {
    connectionRefs.set(this, [])
  }

  connectionRefs.get(this)!.push(connectionRef)

  globalConnectionFieldsMap
    .get(this)
    ?.forEach((fieldFn) => void fieldFn(connectionRef))

  return connectionRef as never
}
