# Regular Expression

A regular expression is a sequence of characters that forms a search pattern.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.

## Modifiers

There are 2 modifiers in regular expression

1. i
2. g

### i-modifier

this modifier is used for case insensitvity means operate for both capital and small alphabet

```js
let string = "Aa";
let num = string.search(/a/);
console.log(num);
// num = 1
num = string.search(/a/i);
console.log(num);
// num = 0
```

### g-modifier

this modifier is used for globally operation

```js
let string = "aa";
let num = string.replace(/a/, "z");
console.log(num);
// num = za
num = string.search(/a/g, "z");
console.log(num);
// num = zz
```

### m-modifier

this modifier is used for multiple matching

```js
let text = "\nIs th\nis it?";
let result = text.match(/^is/m);
```

## Patterns

**[abc]** Find any of the characters between the brackets  
**[0-9]** Find any of the digit between the brackets

## RegEx Methods

### test()

The test() method is a RegExp expression method.

It searches a string for a pattern, and returns true or false, depending on the result.

The following example searches a string for the character "e":

Example

```js
const pattern = /e/;
pattern.test("The best things in life are free!");
```

Since there is an "e" in the string, the output of the code above will be:

`true`

### exec()

The exec() method is a RegExp expression method.

It searches a string for a specified pattern, and returns the found text as an object.

If no match is found, it returns an empty (null) object.

The following example searches a string for the character "e":

Example
/e/.exec("The best things in life are free!");
