# Mysterious Variable

What does this do?
```typescript
export function snoc<A>(init: Array<A>, end: A): NonEmptyArray<A> {
  const len = init.length
  const r = Array(len + 1)
  for (let i = 0; i < len; i++) {
    r[i] = init[i]
  }
  r[len] = end
  return r as NonEmptyArray<A>
}
```

Exactly. No Idea.
That's why originally this excerpt had a comment above it saying
```typescript
/**
 * Append an element to the end of an array, creating a new non empty array
 *
 * @example
 * import { snoc } from 'fp-ts/lib/Array'
 *
 * assert.deepStrictEqual(snoc([1, 2, 3], 4), [1, 2, 3, 4])
 *
 * @since 2.0.0
 */
```

An example taken from `https://github.com/gcanti/fp-ts`. I want to note that if you write a service that will rarely be altered or read, then this format is totally fine. <br /><br />
However, if you catch the `functional programming disease` and obfuscate everything while your colleagues _(or even you)_ read the above code over and over again, then please resort to human readable, self-explanatory names. You're not paid for short variable names.
