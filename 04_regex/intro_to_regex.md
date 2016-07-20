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

Regular Expressions allow for an unprecidented level of text recognition and manipulation that would be extremely difficult or virtually impossible to achieve with literal sequence matching alone. Regex are particularily useful in the realm of computer science, where programs frequently need to recognize and reformat specially-formatted text strings.

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

Modern regular expressions were introduced with the Perl language during the 1980's, and are notorious for their daunting illegibility.

**RegEx:**
```javascript
/(?:\d{1,3}[\.-]?)?\d{3}[\.-]?\d{3}[\.-]?\d{4}/g
```

Don't panic though... with time and practice, your eyes will train to read regular expressions, and you'll discover that they are an incredibly powerful tool.

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

RegExs reserve several characters for their own operations. The following characters are reserved by RegEx:

```
^ $ * + . ( ) [ ] { } | /
```

To include a reserved character in a search pattern, you must escape it using `\` (forward slash):

```javascript
// "Costs $100 (USD)"
// escaped for RegEx:
/Costs \$100 \(USD\)/
```

### Character Sets

RegExs provide several built-in character classifications for matching common text patterns.

* `.`  Any single character (wild card).
* `\s` Any space character.
* `\S` Any non-space character.
* `\d` Any digit (numbers 0-9).
* `\D` Any non-digit (anything BUT numbers 0-9).
* `\w` Any word character (matches letters, numbers, and underscore).
* `\W` Any non-word character (anything BUT letters, numbers, and underscore).
* `\b` Any word boundary (separators including spaces, commas, and periods).

### Classes

Custom classes allow you to build your own character sets.

* `[abc]` Positive character class (matches "a", "b", or "c").
* `[^abc]` Negative character class (matches anything _except_ "a", "b", or "c").
* `[a-z]` Character range (matches all lowercase letters from A to Z).
* `[a-zA-Z]` Multiple ranges (matches all uppercase and lowercase letters from A to Z).

### Anchors

These flags anchor a search pattern to the start or end of a line of text. Extremely useful!

* `^` Start of line (ex: `/^hello/` matches "hello world" but not "say hello").
* `$` End of line (ex: `/hello$/` matches "say hello" but not "hello world").

### Repetitions

These flags match a pattern repeatedly, turning a single character match into many.

* `?` Match preceding pattern zero or one times (ex: `/cars?/` will match `"car"` or `"cars"`).
* `*` Match preceding pattern zero or more times (ex: `/sou*p/` will match `"sop"`, `"soup"`, or `"souuuup"`).
* `+` Match preceding pattern one or more times (ex: `/zo+m/` will match `"zom"`, `"zoom"`, or `"zoooooooom"`).
* `{3}` Matches preceding pattern exactly N times (ex: `/bo{3}m/` will match `"booom"`).
* `{1,3}` Matches preceding between N and M times (ex: `/bo{1,3}m/` will match `"bom"`, `"boom"`, or `"booom"`).

One of the most common repitions you'll see used in RegEx is the universal matcher pattern: `.*`. The dot-star pattern matches any character zero or more times... thus it will match literally _anything_!

### Greedy vs. Lazy Repetition

All repetitions are _greedy_ by default, meaning they will match _as many characters as possible_ before stopping. For example, let's try to match all text in parenthesis using the following corpus and regex pattern:

```javascript
"Greater DC includes Maryland (MD) and Virginia (NOVA)."
/\(.+\)/g
```

Try that... the results are unexpected. Our RegEx matches from the first open-parenthesis all the way through to the final close-parenthesis. This is because the RegEx has greedily matched as many characters as possible while fulfilling the repition pattern. In fact, we'd like the pattern to match as _few_ characters as possible so that we capture each set of open/close parenthesis individually. To do that, we need to use _lazy repetition.

**Lazy Repetition**
* `*?` Match zero or more of the preceding pattern, as few times as possible.
* `+?` Match one or more of the preceding pattern, as few times as possible.

```javascript
/<p>.*<\/p>/
```

HOWEVER!! Here's where we need to be careful. Repitions are _greedy_ by default, meaning they will match as *many* characters as possible. Consider the following text:

```html
<p>Goodbye F&R</p><p>Hello RegEx!</p>
```

Our RegEx is greedy, so will attempt to match _as many characters as possible_ before matching the closing tag pattern. While we only want to capture `<p>Goodbye F&R</p>`, we will get both tags -- matched by the opening of the first tag and the closing of second tag. Not what we wanted!

**Alternative to Laziness**

_Advanced trick: lazy repetition is slow because the RegEx algorithm must perform redundant work. We can frequently skip lazy repetition by repeating on a class that omits our desired endpoint (ie: repeat on anything that is NOT our endpoint)._

* `[^x]*` Greedy match with a negative endpoint.

## Groups

* `()`


## Matching Exercises

Copy and paste the each of the following texts into RegExr, and enable the `global` and `multiline` flags. Then write a regular expression that matches all lines of the text.

**Match phone numbers:**
```
555-555-5555
555.555.5555
5555555555
```

**Match URLs:**
```
http://regex.com
https://regex.com
//regex.com
```

**Match HTML Tags, capturing their text content in a group:**
```
<p>hello world</p>
<p id="tricky">hello world</p>
<p id="tricky" class="tricky">hello world</p>
```

## Replacement

```
How much wood would a woodchuck chuck if a woodchuck could chuck wood?
```
