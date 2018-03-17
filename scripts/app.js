$(document).ready(function() {

    var colors = ["#16a085", "#27ae60", "#2c3e50", "#f39c12", "#e74c3c", "#9b59b6", "#FB6964", "#342224", "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

    var quote = '';
    var author = '';
    getQuote();

    function getQuote() {
        $.ajax({
          type: "GET",
          url: "https://api.forismatic.com/api/1.0/",
          jsonp: 'jsonp',
          dataType: 'jsonp',
          data: {
            method: "getQuote",
            lang: "en",
            format: "jsonp"
          },
          success: displayQuote
        });

        function displayQuote(response) {
            // console.log(data.quoteText);
            quote = response.quoteText;
            author = response.quoteAuthor;

            // console.log(quote);
            
            $ ("#quote").text(quote);
            $("#author").text(author);
        }

    }

    $("#submit").on('click', function() {
        var color = Math.floor(Math.random() * colors.length);
        $("body").css("background-color", colors[color]);
        $("#submit").css("background-color", colors[color]);
        $("#quote").css("color", colors[color]);
        $("#author").css("color", colors[color]);
        $(".fa-quote-left").css("color", colors[color]);
        $(".icons").css("color", colors[color]);
        getQuote();
    });

    $("#tweet-quote").on("click", function() {
        $(this).attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author))
    });
    
});