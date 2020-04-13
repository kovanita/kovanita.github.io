
$('.firbut').click((myFunction) => {
    console.log("Yeah, you clicked me");
  })


$('.secbut').click((functy) => {
    $('.firbut').text("it changed");
});

$('.thibut').click((functy) => {
    $('button').click($('button').css('background-color', 'blue'))
});