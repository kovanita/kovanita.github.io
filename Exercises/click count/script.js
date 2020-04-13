let counter = 0
$('.firstbut').click((myFunction) => {
    counter +=1 ;
    $('h2').text( counter);
})
$('.secondbut').click((aFunc) => {
    if ( counter > 0) { 
        counter = counter - 1
    }
    $('h2').text( counter);
})