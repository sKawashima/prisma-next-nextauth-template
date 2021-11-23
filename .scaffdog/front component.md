---
name: 'reactComponent'
root: 'components'
output: '**/*'
ignore: []
questions:
  directory: 'Parent directory?'
  name: 'Component name?.'
---

# `{{ inputs.directory }}/{{ inputs.name }}/index.tsx`

```tsx
import React from 'react'

export const {{ inputs.name }} = () => {
  return (
    <div>
      {{ inputs.name }}
    </div>
  )
}
```
