---
name: 'component'
root: 'components'
output: '**/*'
ignore: []
questions:
  directory: 'Parent directory?'
  name: 'Component name?.'
---

# `{{ inputs.directory }}/{{ inputs.name }}.tsx`

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
