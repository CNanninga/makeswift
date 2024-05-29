import { lazy } from 'react'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  lazy(() => import('./Team')),
  {
    type: 'team-members',
    label: 'Team Members',
    props: {

    },
  }
)
