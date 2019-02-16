// an array of colors and assign it to a variable colors
var colors = [ "22ac5e", "d68236", "71b5c2", "af2655", "b34de7", "e6bd01", "104393", "ca4d94", "4a772d", "c180a7", "958112", "8d2f8d" ]
var i;
// sets the preview color to the one entered in the input and display its color code using setPreviewColor function
function setPreviewColor(color) {
    $('.preview').css('background-color', color);
    $('.color-code').text($('.preview').css('background-color'));
}
//adds color boxes to the favorite colors
function addBox(color) {
    $('#colors').prepend("<div class='item' style='background-color: " + color + ";'><div>");
}

function clickFavButton(){
    var input = document.getElementById("color");
// getting the value from input text box
    color = input;

    // setting the color to the left div by passing the value
    setPreviewColor(color);
}

$(document).ready(function(){

    $("h1").fadeIn();

    //1.As the page loads add each color in the colors array to the div '#colors'
    for( i = 0; i<colors.length;i++) {
        $(".grid-item").each(function (i) {
            // console.log("SHruthi");
            $(this).css('background-color', colors[i]);

        });

        // $(".grid-item").addClass(colors[i]);
        //  $(".grid-item").css('background-color', colors[i]);
    }

//set the preview color to one of the colors in the colors array randomly
    setPreviewColor(colors[Math.floor(Math.random()*colors.length)]);
    // an event handler for the key up event i.e. when the user types the color in the input and releases the key on the keyboard
//The event should set the preview color to the color typed in the input
    $(document).on('keypress', '#color', function(){
        color = $(this).val();
        setPreviewColor(color);
    })
//2.Write an event handler to handle the click the event on the add to favorite button so that the color gets added to the list of favorite colors,
// the content of the input gets cleared and the focus gets back on the input


    $('#add-to-favorite').click( function(){
        color = document.getElementById("color").value;
        if (color != "") {

            //adding to array
            colors.push(color);

        }

        //clearing the input text
        $('#color').val("");

        //setting back focus
        $('#color').focus();
        // $( ".grid-container" ).append( "<div class="grid-item"></div>" );

        // adding the div tag to .grid container class
        $(".grid-container" ).append(" <div class=\"grid-item\"></div>");

        // adding background color to the new div created
        $( ".grid-item" ).last().css( "background-color", color );




    });






//3.Write events handlers such that whenever any item in the favorite colors is clicked or hovered, the color gets displayed in the preview div
    $(".grid-item").hover(function(){

        // getting the color of the hovered item
        var newcolor = this.style.backgroundColor;

        // setting the color to the left div

        setPreviewColor(newcolor);

        // $(this).css("background-color", "yellow");
    });



});
