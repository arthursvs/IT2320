var LastElement;
var CurrentElement;


function ToggleHighlight() {
    var current = $(CurrentElement);
    var last = $(LastElement);

    if (current == last) {
        last = null;
        movePiece();
    }

    if (last != null) {
        last.removeClass("highlighted-cell");
        last.addClass("cell");
        movePiece();
        
    }
    
    current.addClass("highlighted-cell");
    current.removeClass("cell");
}

function movePiece() {
    var last = $(LastElement);
    var moveTo = $(CurrentElement);
    if (last.hasClass("black")) {
        moveTo.removeClass("red");
        moveTo.addClass("piece").addClass("black");
        last.removeClass("piece").removeClass("black");
    }
    else if (last.hasClass("red")) {
        moveTo.removeClass("black");
        moveTo.addClass("piece").addClass("red");
        last.removeClass("piece").removeClass("red");
    }
   
}


$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0; //false
        var isNextRow = (i + 1) % 8 == 0; //false
        colorCount += isNextRow ? 2 : 1; //add 1 to color count.
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function ()
    {
        CurrentElement = this;
        ToggleHighlight();
        LastElement = this;
    });
    
    
    

    
});