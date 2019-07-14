I created this repository because I feel I'm not a genious coder and rarely have a lightbulb pop over my head after reading pages of dry theory.

Hence, examples is how I learn best. I believe this stands true for many others as well.

This repo is inspired from the books ["Refactoring"](https://www.amazon.fr/Refactoring-Improving-Design-Existing-Code/dp/0134757599/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=refactoring&qid=1563025987&s=gateway&sr=8-1) by Martin Fowler and ["Clean Code"](https://www.amazon.fr/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=clean+code&qid=1563026066&s=gateway&sr=8-1) by Robert C. Martin.


## This is a WIP repo 🦐

# Structure 🤔
**Folder** | **Content**
:---: | :---:
code-smells | Contains .md files containing the description of the smell, bad and good examples, reasons for change, etc
refactoring | Folders named after refactoring techniques containing numbered example folders with before, after examples and tests. Usage examples of a particular block of code can be best seen in the test files.
clean-code | Contains .md files with examples of applying clean code principles on comments, functions, etc

# Content 🎉
Here you should be able to find most code smells covered, most refactoring techniques and clean code principles applied in action.

The refactoring techniques have example folders in no particular order. In them you'll have before, after and test files written in Typescript.

Part of the examples are from the books mentioned above while the other part comes from real life code examples.

# Contributions ❤️
If you have an example code that you refactored, feel free to contribute to the appropriate refactoring technique used.

Most often there will be more than 1 technique used at the same time, but you need to distinguish the main one and mention others as bonus refactorings. You can also split the refactored code into even smaller parts and contribute to several refactoring techniques at once.

Contribution should follow the same guideline as other examples:
- Name the folder as the next example number e.g. `2`
- Add `before.ts` and `after.ts` files
  - OPTIONAL: Add any additional files you need for the example e.g. `types.ts, utils.ts, etc`
- Add a test file with the after example used. _This will serve as a usage example and to prove that the refactoring code is functioning as intended_
- Add an entry to the approprate readme e.g. `extract-class/readme.md`
- Describe the source of the before and after code, add concrete benefits of this particular code refactoring

# Disclaimer 🙉
🕺This is not a definitive guide. Refactoring is always about compromising. Whether you agree with an approach or not depends on a multitude of factors - teams styleguide, how often a particular piece of code is changed, team sizes, roadmaps, etc.

👉Some of the refactoring techniques and examples can be considered as intermediate steps in a bigger refactoring process.

🙌 With this said, this repo is meant to be as a guide and not a judge.

📚For more information on these topics please read the fantastic books mentioned above.
