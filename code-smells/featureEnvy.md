# Feature Envy

When we program we want our areas of code to be as decoupled and cohesive. Meaning that you want to have as least dependencies from outside the module and that all the parts really belong together.

Feature Envy occurs when
> a function in one module spends more time communicating with functions or data inside another module than it does withing its own module. - "Refactoring" M. Fowler

Some ways to cure this is by using Move Function, Extract Function.

The rule of thumb is to put things together that change together.

## Examples

Taken from [elearning.industriallogic.com](https://elearning.industriallogic.com/gh/submit?Action=PageAction&album=recognizingSmells&path=recognizingSmells/featureEnvy/featureEnvyExample&devLanguage=Java).<br/>Adapted to **Typescript** from **Java**:

**With Feature Envy:**
```typescript
class Phone {
   private unformattedNumber: string;
   public constructor(unformattedNumber: string) {
      this.unformattedNumber = unformattedNumber;
   }
   public getAreaCode() {
      return unformattedNumber.substring(0,3);
   }
   public getPrefix() {
      return unformattedNumber.substring(3,6);
   }
   public getNumber() {
      return unformattedNumber.substring(6,10);
   }
}

class Customer {
   private mobilePhone: Phone = new Phone(/* some number */);
   public getMobilePhoneNumber() {
      return "(" +
         this.mobilePhone.getAreaCode() + ") " +
         this.mobilePhone.getPrefix() + "-" +
         this.mobilePhone.getNumber();
   }
}
```

**Without Feature Envy:**
```typescript
class Phone {
   private unformattedNumber: string;
   public constructor(unformattedNumber: string) {
      this.unformattedNumber = unformattedNumber;
   }
   private getAreaCode() {
      return unformattedNumber.substring(0,3);
   }
   private getPrefix() {
      return unformattedNumber.substring(3,6);
   }
   private getNumber() {
      return unformattedNumber.substring(6,10);
   }
   public toFormattedString() { // <-- 1 public function that knows its parents interface
     return "(" + this.getAreaCode() + ") " + this.getPrefix() + "-" + this.getNumber();
   }
}

class Customer {
   private mobilePhone: Phone = new Phone(/* some number */);
   public getMobilePhoneNumber() {
      return this.mobilePhone.toFormattedString(); // <-- 1 public function without exposing inner API of Phone
   }
}
```
