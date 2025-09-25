import * as React from 'react'
import type { StoryDefault, Story } from '@ladle/react'

const Card = ({ name, cls }: { name: string; cls: string }) => (
  <div className="p-4 border border-muted rounded-md bg-bg">
    <div className={`h-16 rounded-md bg-bg ${cls}`} />
    <div className="mt-2 text-sm text-muted-foreground">{name}</div>
  </div>
)

export const Shadows: Story = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card name="shadow-sm" cls="shadow-sm" />
      <Card name="shadow-md" cls="shadow-md" />
      <Card name="shadow-lg" cls="shadow-lg" />
    </div>
  )
}

export default { meta: { title: 'Tokens/Shadows' } } satisfies StoryDefault
