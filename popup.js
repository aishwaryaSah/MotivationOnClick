function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?&method=getQuote&format=jsonp&lang=en&jsonp=jQuery21307846844229156718_1568631973597&_=1568631973599",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
          $("#random_quote").html("<p id='random_quote'>" +response.quoteText + "</p>");
          $("#random_author").html("<br/><p id='random_author'>&dash; " + response.quoteAuthor + " &dash;</p>");
        }
    });
  }
  $(function() {
    randomQuote();
  });
  
  $("button").click(function(){
    randomQuote();
  });