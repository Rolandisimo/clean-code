# Comments

> “Comments often are used as a deodorant.”
— Martin Fowler and Kent Beck, Refactoring, page 87

> When you feel the need to write a comment, first try to refactor the code that any comment becomes superfluous.

Now, this doesn't mean that all comments are bad. Comments explaining a specific design decision for a module or a maintenance comment like `// FIXME:` or `// TODO:` are absolutely fine.

However, how helpful is this comment?
```typescript
/**
 * Count the number of lines.
 */
export function lineCount (value: string) {
  let count = 0

  for (const char of value) {
    if (char === '\n') {
      count++
    }
  }

  return count
}
```

The fix for a comment code smell is simple - delete the comment. If the code doesn't make sense anymore or becomes mysterious, apply [Rename Variable](https://refactoring.com/catalog/renameVariable.html).

Don't be afraid to have long names. When the name matches the implementation, then anyone else will instantly know what to expect from this function without spending a second looking at the implementation details.
