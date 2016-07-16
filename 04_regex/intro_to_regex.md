# Regular Expressions

## Learning Objectives

- What are Regular Expressions?
- Why are they incredibly useful?
- How does RegEx matching work?
- How does RegEx replacement work?

## What are Regular Expressions?

Regular Expressions provide text searching and replacement capabilities, similar to using the "Find & Replace" (F&R) operation in a word processor. However, most common F&Rs only search for literal sequences...

- Find `"eat"`.

```
I will [eat] with you on Tuesday at the [eat]ery called Joe's Eats.
```

Regular Expressions (RegEx) are considerably more powerful because they search for _patterns_ in text, which allows for contextual awareness...

- Find `"eat"` as a standalone word (surrounded by spaces and/or periods).
- Allow the standalone word to be plural (may end in "s").
- Allow the standalone word to have both upper and lowercase letters.

```
I will [eat] with you on Tuesday at the eatery called Joe's [Eats].
```

--

## Why are Regular Expressions awesome?

Regular Expressions allow for an unprecidented level of text recognition and manipulation that would be extremely difficult or virtually impossible to achieve with literal sequence matching alone. Regex are particularily useful in the realm of computer science, where programs frequently need to recognize and reformat specialized text strings.

**Get the header tag content:**
```html
<div id="widget">
  <h1 class="tricky">Get this headline text!</h1>
  <p>Not this paragraph</p>
</div>
```

**RegEx:**
```javascript
/<h1[^>]*>(.*?)<\/h1>/g
```

Overall, Regex are a powerful tool for any programmer's utility belt.

--

## Why are Regular Expressions notorious?

Modern regular expressions were introduced with the Perl language during the 1980's, and are notorious still today for their daunting illegibility.

**Get any of these phone number patterns:**
- 1-555-555-5555
- 555-555-5555
- 555.555.5555
- 5555555555

**RegEx:**
```javascript
/(?:\d{1,3}[\.-]?)?\d{3}[\.-]?\d{3}[\.-]?\d{4}/g
```

Don't panic... with time and practice, your eyes will train to read regular expressions.

--

## Get Started

Go to [http://www.regexr.com](http://www.regexr.com). This is a very powerful online Regular Expression workbench, perfect for learning, testing, or refining RegEx patterns. Get familiar with these workbench tools. They are your friends!

We'll use the following text as out first search corpus:

```
The Battle of the Bottles

99 bottles of beer on the wall, 99 bottles of beer.
Take a few down, pass them around... 1 bottle of beer on the wall.
```

## Basic Matchers

A basic RegEx is formatted as a text pattern wrapped in `/` delimiters:

```javascript
/bottle/
```

### Search Flags

A RegEx may include one or more _search flags_ at the end to govern how the pattern is searched:

```javascript
// Find all occurances (globally) of the word "bottle":
/bottle/g
```

* `g` Global search (matches all occurances of the pattern).
* `i` Case-Insensitive (matches upper and lowercase letters with indifference).
* `m` Multiline (matches the pattern across line breaks in the text).

### Alternation

A RegEx may match against two or more alternative patterns:

```javascript
// Find all occurances of the words "bottle", "battle", and/or "beer"
/bottle|battle|beer/g
```

* `a|b` Match "a" and/or "b".

### Reserved Characters

RegEx reserves a set of characters for its own operations. The following characters are reserved by RegEx:

```
$ * + . ( ) [ ] { } | /
```

If our search pattern includes a reserved character, then it must be escaped using `\` (forward slash):

```javascript
// "Costs $100 (USD)"
// escaped for RegEx:
/Costs \$100 \(USD\)/
```

### Character Sets

RegExs provide several built-in character classifications for recognizing common text patterns.

* `.`  Any single character.
* `\s` Any space character.
* `\S` Any non-space character.
* `\d` Any digit.
* `\D` Any non-digit.
* `\w` Any word character (matches letters, numbers, and underscore).
* `\W` Any non-word character (anything BUT letters, numbers, and underscore).
* `\b` Any word boundary (separators including spaces, commas, and periods).

### Classes

Custom classes allow you to build your own character sets.

* `[abc]` Positive character class (matches "a", "b", or "c").
* `[^abc]` Negative character class (matches anything _except_ "a", "b", or "c").
* `[a-z]` Character range (matches any lowercase letter from A to Z).
* `[a-zA-Z]` Multiple ranges (matches uppercase and lowercase letters from A to Z).

### Anchors

These flags anchor a search pattern to the start or end of a line. Extremely useful!

* `^` Start of line (ex: `/^hello/` matches "hello world" but not "say hello").
* `$` End of line (ex: `/hello$/` matches "say hello" but not "hello world").

### Repetitions

These flags cause a pattern to be matched repeatedly, which can turn a single character match into many.

* `?` Match preceding pattern zero or one times (ex: `/cars?/` will match `"car"` or `"cars"`).
* `*` Match preceding pattern zero or more times (ex: `/sou*p/` will match `"soup"` or `"sop"`).
* `+` Match preceding pattern one or more times. (ex: `/zoo+m/` will match `"zoom"` or `"zoooooooom"`).

One of the most common repitions you'll see in RegEx is `.*`. This is the universal matcher: it will match any character zero or more times... it will match _anything_! This is great for things like HTML tags:

```javascript
/<p>.*<\/p>/
```

HOWEVER!! Here's where we need to be careful. Repitions are _greedy_ by default, meaning they will match as *many* characters as possible. Consider the following text:

```html
<p>Goodbye F&R</p><p>Hello RegEx!</p>
```

Our RegEx is greedy, so will attempt to match _as many characters as possible_ before matching the closing tag pattern. While we only want to capture `<p>Goodbye F&R</p>`, we will get both tags -- matched by the opening of the first tag and the closing of second tag. Not what we wanted!

### Lazy Repition

* `*?` Match zero or more of the preceding pattern, as few times as possible.
* `+?` Match one or more of the preceding pattern, as few times as possible.

Alternative to laziness:

* `[^x]+` Greedy match with a negative endpoint.

## Groups

* `()`

## Alternation

* `x|y`
* `(x|y)`
