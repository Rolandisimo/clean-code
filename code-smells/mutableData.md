# Mutable Data

Mutable data is, if not the devil, then it's close cousin for sure. Have you been in a situation where you work e.g. in an inheritance nightmare and something somewhere mutated an instance variable?

> Why is `this.someValue` set to `null` here. Wtf?

Solution to mutable data is encapsulation and pure functions i.e. functions without side-effects.

Some refactoring techniques for this include Encapsulate Variable, Split Variable, Separate Query from Modifier, Extract Function, Slide Statements and others.

Of course, there are cases when mutating is fine. However, this is usually true when enough encapsulation is applied.
