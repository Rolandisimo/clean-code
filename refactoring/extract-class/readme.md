# Extract class

When a class starts to grow and it has more than one responsibility, it means that there is a concept in there that is waiting to be split out. A class should have a single responsibility as you've maybe heard mentioned in the [SOLID principles](https://www.youtube.com/watch?v=v-2yFMzxqwU)

## **Example folder 1**

Before and after examples taken from the book [Refactoring](https://refactoring.com/catalog/extractClass.html) by Martin Fowler.

Benefits of the refactoring:
- Moved out the responsibility for handling telephone numbers outside of the Person class
- Person class now has less reasons to change
- Anywhere where telephone numbers are used this class can now be used instead to avoid duplication and increase consistency
