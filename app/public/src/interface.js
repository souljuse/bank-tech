$(document).ready(function() {
  var account = new BankAccount();
  var deposit = 0
  var withdrawal =  0
  
  $('#key-form').submit(function(event){
    event.preventDefault();
    var today = new Date();
    var deposit = assignIfNotEmpty($("#deposit").val())
    var withdrawal = assignIfNotEmpty($("#withdrawal").val());
    account.updateAccount(deposit - withdrawal);
    var row = "<td>" + (ddmmyyyy(today)) + "</td><td>" + (deposit) + "</td><td>" + (withdrawal) + "</td><td>" + (account.total.toFixed(2)) + "</td>";
    $.ajax({
        url: '/set',
        method: 'GET',
        result: row,
        dataType: "html",
    }).success(function (result) {
         $('#bank-statement').append("<tr>" + row + "</tr>");
    }).fail(function () {
        console.log("error");
    });
  });
});

function ddmmyyyy(date) {
  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [(dd>9 ? '' : '0') + dd,
          (mm>9 ? '' : '0') + mm,
          date.getFullYear(),
        ].join('/');
};

function assignIfNotEmpty(input){
  if (input.length == 0){
     return 0;
   } return parseFloat(input).toFixed(2);
 }
