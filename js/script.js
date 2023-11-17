$('.percentage').click(function (e) { 
  let amount = $('#amount');
  let count = $('#count');
  let singleTip = $('#singleTip');
  let totalTip = $('#totalTip');

  if(amount.val() == ''){
    $(amount.parent().parent()).addClass('error');
  } else {
    $(amount.parent().parent()).removeClass('error');    
  }
  
  if(count.val() == ''){
    $(count.parent().parent()).addClass('error');
  } else {
    $(count.parent().parent()).removeClass('error');
  }

  if(count.val() != '' && amount.val() != ''){
    let total = amount.val() * this.value;
    let single = total / count.val();
  
    $(totalTip).text('$' + total.toFixed(2));
    $(singleTip).text('$' + single.toFixed(2));
  } else {
    $(totalTip).text('$0.00');
    $(singleTip).text('$0.00');
  }
});


$('.reset').click(function (e) { 
  e.preventDefault();
  let amount = $('#amount');
  let count = $('#count');
  let singleTip = $('#singleTip');
  let totalTip = $('#totalTip');

  amount.val('');
  count.val('');
  $(singleTip).text('$0.00');
  $(totalTip).text('$0.00');
});
