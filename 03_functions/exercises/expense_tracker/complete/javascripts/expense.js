(function() {
  var expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
  var addFormEl = document.querySelector('#expense-add');

  addFormEl.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var expense = {
      desc: document.querySelector('#expense-desc').value,
      amount: document.querySelector('#expense-amount').value,
      category: document.querySelector('#expense-category').value
    };

    expense.amount = parseFloat(expense.amount);

    if (!isNaN(expense.amount)) {
      expenses.push(expense);
      localStorage.setItem('expenses', JSON.stringify(expenses));

      addFormEl.reset();
      renderList();
    }
  });

  function renderList() {
    var html = '';
    var total = 0;

    for (var i=0; i < expenses.length; i++) {
      var exp = expenses[i];
      html += '<tr><td>'+ exp.category +'</td><td>'+ exp.desc +'</td><td>$'+ exp.amount.toFixed(2) +'</td></tr>';
      total += exp.amount;
    }

    document.querySelector('#expense-list').innerHTML = html;
    document.querySelector('#expense-total').innerText = '$'+ total.toFixed(2);
  }

  renderList();
})();