import * as React from 'react'
import type { StoryDefault, Story } from '@ladle/react'

const Box = ({ size }: { size: number }) => (
  <div className="flex items-center gap-3">
    <div className="w-48 text-sm text-muted-foreground">space-{size}</div>
    <div className="bg-accent/20 h-6" style={{ width: size * 8 }} />
  </div>
)

export const Spacing: Story = () => {
  const steps = [0,1,2,3,4,5,6,8,10,12,16,20,24,32]
  return (
    <div className="space-y-2">
      {steps.map((s) => <Box key={s} size={s} />)}
    </div>
  )
}

export default { meta: { title: 'Tokens/Spacing' } } satisfies StoryDefault
