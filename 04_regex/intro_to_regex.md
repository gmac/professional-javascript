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
Take a few down, pass them around... 9 bottles of beer on the wall.

9 bottles of beer on the wall, 9 bottles of beer.
Take a few down, pass them around... 1 bottle of beer on the wall.
```

## Basic Matchers

A basic RegEx is formatted as a text pattern wrapped in `/` _delimiters_:

```javascript
/hello/
```

That `/` delimiter identifies the boundaries of the RegEx, which makes it a _reserved character_. RegEx reserves the following characters: `$ * + . ( ) [ ] { } | /`. To include a reserved character within a text pattern, it must be escaped using a `\` (forward slash).

```javascript
// "Costs $100/person" escapes as:
/Costs \$100\/person/
```

### Character Sets

* `.`  Any single character
* `\s` Any whitespace character
* `\S` Any non-whitespace character
* `\d` Any digit
* `\D` Any non-digit
* `\w` Any word character (letter, number, underscore)
* `\W` Any non-word character
* `\b` Any word boundary

### Anchors

* `^` Start of line
* `$` End of line

### Classes

* `[abc]` Positive character class
* `[^abc]` Negative character class
* `[a-z]` Character range
* `[a-zA-Z]` Double range (uppercase and lowercase)

### Repetitions (Greedy)

* `?` Match zero or one characters (ie: optional).
* `*` Match zero or more characters.
* `+` Match one or more characters.

### Lazy Repition

* `*?` Match zero or more, as few times as possible.
* `+?` Match one or more, as few times as possible.

### Alternative to laziness

* `[^x]+` Greedy match with a negative endpoint.

## Groups

* `()`

## Alternation

* `x|y`
* `(x|y)`
