
$('.firbut').click((myFunction) => {
    console.log("Yeah, you clicked me");
  })


$('.secbut').click((functy) => {
    $('.firbut').text("it changed");
});
let firstClick = true

$('.thibut').click((functy) => {
    if (firstClick == true) {
        let szinErtek = $('input').val();
        $('button').click($('button').css('background-color', szinErtek))
        firstClick = false 
    }
});

