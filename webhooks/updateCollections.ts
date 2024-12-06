import { createClient } from '@sanity/client'

const client = createClient({
  // your config here
})

export default async function updateCollections(req, res) {
  const { _id, collection } = req.body

  if (!collection) return res.status(200).json({ message: 'No collection to update' })

  try {
    await client
      .patch(collection._ref)
      .setIfMissing({ books: [] })
      .insert('after', 'books[-1]', [{ _ref: _id, _type: 'reference' }])
      .commit()

    res.status(200).json({ message: 'Collection updated' })
  } catch (err) {
    res.status(500).json({ message: 'Error updating collection' })
  }
}
