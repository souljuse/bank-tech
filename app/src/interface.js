$(document).ready(function() {
  var account = new BankAccount();
  $('#key-form').submit(function(event){
    event.preventDefault();
    var deposit = parseFloat($("#deposit").val()).toFixed(2);
    var withdrawal = parseFloat($("#withdrawal").val()).toFixed(2);
    var bankStatement = bankStatement || 0;
    var bankStatement = (bankStatement + deposit - withdrawal).toFixed(2);
    console.log(deposit);
    var row = (deposit) + "||" + (withdrawal) + "||" + (bankStatement)
    $.ajax({
        url: '/set',
        method: 'GET',
        result: row,
        dataType: "html",
    }).success(function (result) {
         $('#bank-statement').append("<p>" + row + "</p>");
    }).fail(function () {
        console.log("error");
    });
  });
});
