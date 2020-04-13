$('button').click((myfunc) => {
    let textInput = $('#inputka').val();
    $('ul').append('<li>' + textInput + '</li>');
});


$('li').click((afunct) => {
    let szoveg = $('li').text()
    console.log(szoveg)
    $('li').css('text-decoration','line-through');
});