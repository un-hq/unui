import * as React from 'react'
import type { StoryDefault, Story } from '@ladle/react'

const Line = ({ name, cls }: { name: string; cls: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-40 text-sm text-muted-foreground">{name}</div>
    <div className={`h-8 w-full bg-bg ${cls}`} />
  </div>
)

export const Borders: Story = () => (
  <div className="space-y-3">
    <Line name="border" cls="border border-muted rounded-md" />
    <Line name="border-2" cls="border-2 border-muted rounded-md" />
    <Line name="rounded-sm" cls="border border-muted rounded-sm" />
    <Line name="rounded-md" cls="border border-muted rounded-md" />
    <Line name="rounded-lg" cls="border border-muted rounded-lg" />
  </div>
)

export default { meta: { title: 'Tokens/Borders' } } satisfies StoryDefault
