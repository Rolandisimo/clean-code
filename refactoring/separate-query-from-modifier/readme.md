# Separate Query from Modifier

## **Example folder 1**
Code example for "before" taken from [Refactoring](https://refactoring.com/catalog/separateQueryFromModifier.html) by Martin Fowler.

--- -
### Benefits of this refactoring:
  - Example of an extremely useful [CQRS](https://martinfowler.com/bliki/CQRS.html) or Command/Query Responsibility Segregation
  - Allows you to modify immutable queries without knowing or affecting the command parts with side effects
  - Easier testing

