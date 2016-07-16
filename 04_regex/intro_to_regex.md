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

## Why are Regular Expressions terrifying?

Today's complex Regular Expressions were introduced during the 1980's as part of the Perl language, and are notorious still today for their daunting illegibility. Take a phone number, for example:

```javascript
/(?:\d{1,3}[\.-]?)?\d{3}[\.-]?\d{3}[\.-]?\d{4}/g
```

**Matches all of the following phone number patterns:**
- 123-555-555-5555
- 12-555-555-5555
- 1-555-555-5555
- 555-555-5555
- 555.555.5555
- 5555555555

## Why are Regular Expressions awesome?

Regular Expressions allow for an unprecidented level of text recognition and manipulation that would be extremely difficult or virtually impossible to achieve with literal sequence matching alone. Regex are particularily useful in the realm of computer science, where programs frequently need to recognize and reformat specialized text strings.

**Get the header tag content from a raw HTML string:**
```javascript
/<h1[^>]*>(.*?)<\/h1>/g
```

```html
<div id="widget">
  <h1 class="tricky">[Get this headline text!]</h1>
  <p>Not this paragraph</p>
</div>
```

Overall, Regex are a powerful tool for any programmer's utility belt.

# Basic Matches

/hello/

"`hello` world"

Friday is fry day at McDonald's today.

## Character Sets

* `.`  Any single character
* `\s` Any whitespace character
* `\S` Any non-whitespace character
* `\d` Any digit
* `\D` Any non-digit
* `\w` Any word character (letter, number, underscore)
* `\W` Any non-word character
* `\b` Any word boundary

## Anchors

* `^` Start of line
* `$` End of line

# Classes

* `[abc]` Positive character class
* `[^abc]` Negative character class
* `[a-z]` Character range
* `[a-zA-Z]` Double range (uppercase and lowercase)

# Repetitions

## Basic (Greedy) Repetition

* `?` Match zero or one characters (ie: optional).
* `*` Match zero or more characters.
* `+` Match one or more characters.

## Lazy Repition

* `*?` Match zero or more, as few times as possible.
* `+?` Match one or more, as few times as possible.

## Alternative to laziness

* `[^x]+` Greedy match with a negative endpoint.

# Groups

* `()`

# Alternation

* `x|y`
* `(x|y)`
