import * as React from 'react'
import type { StoryDefault, Story } from '@ladle/react'

export const Rings: Story = () => (
  <div className="flex items-center gap-4">
    <button className="px-3 py-2 rounded-md bg-bg border border-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-bg">
      Focus me
    </button>
    <input className="px-3 py-2 rounded-md bg-bg border border-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-bg" placeholder="Tab here" />
  </div>
)

export default { meta: { title: 'Tokens/Rings' } } satisfies StoryDefault
