import { lazy } from 'react'

import { List, Shape, TextInput, Image, Slot, Number, Style, Color } from '@makeswift/runtime/controls'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  lazy(() => import('./Team')),
  {
    type: 'team-members',
    label: 'Team Members',
    props: {
      members: List({
        label: 'Members',
        type: Shape({
          type: {
            name: TextInput({
              label: 'Name',
            }),
            title: TextInput({
              label: 'Position',
            }),
            image: Image({
              label: 'Image',
              format: Image.Format.URL,
            }),
            content: Slot(),
          },
        }),
        getItemLabel(member) {
          return member?.name || 'Team Member'
        },
      }),
      itemsPerRow: Number({
        label: "Items Per Row",
        defaultValue: 3,
        min: 1,
        max: 12,
      }),
      mobileItemsPerRow: Number({
        label: "Items Per Row at Mobile",
        defaultValue: 2,
        min: 1,
        max: 4,
      }),
      highlightColor: Color({
        label: "Highlight Color",
      }),
      thumbnailTextColor: Color({
        label: "Thumbnail Text Color",
      }),
      className: Style({ properties: Style.All }),
    },
  }
)
