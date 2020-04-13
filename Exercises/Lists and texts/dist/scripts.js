let names = ['Zsolt', 'Endre', 'Viktória', 'Anita', 'Ádám', 'Kata'];

names.forEach((name) => {
    if( name === "Anita") {
        $("ul").append("<li><strong>" + name + "</strong></li>");
    }
    $("ul").append("<li>" + name + "</li>");
});





let additionalBlock = {
    title: " Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

  $("header").append( additionalBlock.title);
  $(".theLast").append(additionalBlock.text);