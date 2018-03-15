$(function () {

    // array
    var shoppingList = [];

    function myFunction(items) {
        shoppingList.push(items);

        var output = '';
    // for loop    
        for (var i in shoppingList) {
            output += '<li>' + shoppingList[i] + '</li>';

        }
        $('#list').html(output);
    }

    // form    

    $('#shopping-form').submit(function (event) {
        event.preventDefault();
        var textInput = $('#input-form').val();
        myFunction(textInput);

    });




});
