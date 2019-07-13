# Replace Loop with Pipeline


## **Example folder 1**
Code example for "before" taken from https://github.com/TypeStrong/ts-node/blob/master/src/bin.ts#L344

The "after" example improved several things:
  - [Removed Temp Variable](https://refactoring.com/catalog/inlineVariable.html)
  - Replaced loop with native methods with clear intent
  - Made the code less verbose
  - BONUS: Removed redundant comment code smell
