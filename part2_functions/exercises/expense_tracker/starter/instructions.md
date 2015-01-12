# Expense Tracker

Here's a simple app to track your expenses this month.

**Objectives:**

 - Capture and store user data input.
 - Work with arrays, objects, functions, and the DOM.
 - Dynamically generate DOM elements.
 
**Process:**

We'll be working in an external JavaScript file this time. All code should go in the "javascripts/expense.js" file.

1. Define an `expenses` variable set to an empty array.

2. Bind a "submit" event handler onto the "#expense-add" form element. When the form is submitted: cancel the browser's default action, then create a new expense object with `description`, `amount`, and `category` properties (pull these values from the DOM).

3. Make sure to parse each new expense object's `amount` property into a number. Assuming the `amount` is a valid number, add the expense object into the `expenses` array.

4. Declare a `renderList` function that will render the list of expenses. Invoke this function whever a new expense object is added to the expenses array.

5. Make the `renderList` function loop through the array of expense objects and construct a new table row HTML string for each expense, formatted as:

```
"<tr><td>category</td><td>description</td><td>$amount</td></tr>"
```

After building a string with all expenses rendered as HTML, set this as the `innerHTML` of the "#expense-list" element.

Also while rendering, tally up the total of all expenses, and set that number to the "#expense-total" element.
