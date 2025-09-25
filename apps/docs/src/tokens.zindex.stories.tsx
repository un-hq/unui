import * as React from 'react'
import type { StoryDefault, Story } from '@ladle/react'

export const ZIndex: Story = () => (
  <div className="relative h-40 bg-bg border border-muted rounded-md overflow-hidden">
    <div className="absolute inset-6 bg-accent/20 z-0">z-0</div>
    <div className="absolute left-10 top-10 px-2 py-1 bg-accent text-accent-foreground rounded z-10">z-10</div>
    <div className="absolute left-16 top-16 px-2 py-1 bg-bg border border-muted rounded shadow-md z-20">z-20</div>
  </div>
)

export default { meta: { title: 'Tokens/Z-Index' } } satisfies StoryDefault
