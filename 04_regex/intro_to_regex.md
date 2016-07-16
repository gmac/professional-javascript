# Regular Expressions

## Learning Objectives

- What are Regular Expressions?
- Why are they incredibly useful?
- How does RegEx matching work?
- How does RegEx replacement work?

## What are Regular Expressions?

Regular Expressions provide text searching and replacement capabilities, similar to using the "Find & Replace" (F&R) operation in a text editor or word processor. However, most F&R capabilities only support searching for literals...

**Literal sequence match: find `"meet"`**

```
I will [meet] you on Tuesday during the [meet]ing at Joe's Meats.
```

Regular Expressions (Regex) are considerably more sophisticated because they search for _patterns_ in text rather than literal sequences. Regex will allow us to search for patterns in text...

**Pattern string match:**
- Find `"meet"` as a standalone word (surrounded by spaces and period).
- Find all four-letter words that start with `"m"` and end with `"t"`.
- Allow either lowercase OR uppercase in matched words.

```
I will [meet] you on Tuesday during the meeting at Joe's [Meat]s.
```

# Why are Regular Expressions awesome?

Regular Expressions allow for an unprecidented level of text analysis and manipulation that would be extremely difficult and/or laborious to achieve with literal sequences alone. Regular Expressions allow for highly customized patterns to be recognized, and then manipulated within a corpus.

Regex are particularily useful in the realm of computer science, where programs frequently need to recognize and reformat text for various purposes. Complex string manipulations (such as reformatting HTML markup) can be extremely difficult or highly inacurate without the robust matching capabilities provided by Regex. Overall, Regex are a powerful tool for any programmer's utility belt.

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
