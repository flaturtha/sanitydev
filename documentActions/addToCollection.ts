import { DocumentActionComponent } from 'sanity'

export const addToCollection: DocumentActionComponent = (props) => {
  const { patch, publish } = props

  return {
    label: 'Update Collection References',
    onHandle: async () => {
      // Get the current document
      const book = props.published || props.draft
      if (!book || !book.collection) return

      // Update the collection's books array
      await patch
        .id(book.collection._ref)
        .setIfMissing({ books: [] })
        .insert('after', 'books[-1]', [{ _ref: book._id, _type: 'reference' }])
        .commit()

      // Publish the collection changes
      await publish.execute()
    },
  }
}
