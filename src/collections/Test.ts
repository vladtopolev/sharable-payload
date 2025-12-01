import type { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        {
          slug: 'common-info',
          labels: {
            singular: 'Common Info',
            plural: 'Common Info',
          },
          fields: [
            {
              name: 'firstName',
              type: 'text',
              required: true,
            },
            {
              name: 'lastName',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          slug: 'sport-info',
          labels: {
            singular: 'Sport Info',
            plural: 'Sport Info',
          },
          fields: [
            {
              name: 'weight',
              type: 'number',
              required: true,
            },
            {
              name: 'height',
              type: 'number',
              required: true,
            },
          ],
        },
        {
          slug: 'professional',
          labels: {
            singular: 'Professional',
            plural: 'Professional',
          },
          fields: [
            {
              name: 'jobPosition',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
