
export default {
  name: 'archetype',
  title: 'Archetype',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }},
    { name: 'quote', title: 'Quote', type: 'string' },
    { name: 'traits', title: 'Top Traits', type: 'array', of: [{ type: 'string' }] },
    { name: 'beliefs', title: 'Core Beliefs', type: 'array', of: [{ type: 'string' }] },
    { name: 'wounds', title: 'Spiritual Wounds', type: 'array', of: [{ type: 'string' }] },
    { name: 'highlight', title: 'Affirmation', type: 'string' },
    { name: 'color', title: 'Theme Color', type: 'string' },
  ]
}
