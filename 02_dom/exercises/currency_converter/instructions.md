# Currency Converter

Here's a handy Google-style converter for switching numbers between US Dollars and Euros.

**Objectives:**

 - Perform simple DOM selections.
 - Capture and handle user input events.
 - Make simple updates to the DOM.
 
**Process:**

1. Select both the dollars and euros text input elements from the DOM (use their respective IDs).

2. Add an "input" event listener to each element. This event will be called whenever the users enters text into the bound element.

3. When an input element changes, get its `value` property and parse that into a number.

4. Adjust the parsed numeric value by the exchange rate, and then set the adjusted value to the opposite currency field.

Hint: when displaying currency, we generally only want to display two decimal places. Look up JavaScript's `toFixed()` method to help with this!