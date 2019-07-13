# Introduce Parameter Object

## **Example folder 1**
Before and after examples taken from the book [Refactoring](https://refactoring.com/catalog/introduceParameterObject.html) by Martin Fowler.

### Benefits of this refactoring:
  - Makes the relationship of range values explicit
  - Reduces the size of parameter lists for any functions that use the new structure
  - Helps consistency whenever range values are used in your project
  - Gives flexibility to create helpers in the range class such as the `public contains()` method in the `./1/after.ts` example
  - Potentially simplifies understanding of the domain
