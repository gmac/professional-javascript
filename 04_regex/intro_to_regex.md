# Basic Matches

/hello/

"`hello` world"

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