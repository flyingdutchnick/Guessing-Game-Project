    var computeDiff = function(x, y) {
        return Math.abs(x - y);
    };

    // Assign random number from 1 to 100
    var compNum = Math.floor((Math.random() * 100) + 1);
    // Assign variable for number of attempts
    var numAttempts = 1;

    var hotAndCold = function() {
        // Input field to enter number
        var numberEntered = $("#numberEntered").val();
        //$(numberEntered).val("numberEntered");
        var diffTotal = computeDiff(numberEntered, compNum);

        if (isNaN(numberEntered) || numberEntered === "" || numberEntered > 100) {
            $(".gameStatusAlert").html("You Must Enter\n a Number between 0 and 100")
            numAttempts--;
        } else if (diffTotal <= 5 && diffTotal > 0) {
            $(".gameStatusAlert").html(numberEntered+" is very close <br><small>Guess Again</small>");
            $(".attempts").text(numAttempts + " of 5 attempts");

        } else if (diffTotal >= 6 && diffTotal <= 10) {
            $(".gameStatusAlert").html(numberEntered+" is warm <br><small>Guess Again</small>");
            $(".attempts").text(numAttempts + " of 5 attempts");


        } else if (diffTotal >= 11 && diffTotal <= 50) {
            $(".gameStatusAlert").html(numberEntered+" is off <br><small>Guess Again</small>");
            $(".attempts").text(numAttempts + " of 5 attempts");


        } else if (diffTotal >= 50 && diffTotal <= 100) {
            $(".gameStatusAlert").html(numberEntered+" is way off<br><small>Guess Again</small>");
            $(".attempts").text(numAttempts + " of 5 attempts");

        } else {
            $(".gameStatusAlert").html("You guessed the correct number, "+compNum);
            $("#enterBtn").hide();

        }
    } // end function


    $('#startOverButton').click(function() {
        numAttempts = 1;
        $("#numberEntered").val("");
		$('#enterBtn').show();
		$(".gameStatusAlert").html("");
		$(".attempts").text("");
		compNum = Math.floor((Math.random() * 100) + 1);
    });


    //Provides ability to click enter key
    $('#numberEntered').keydown(function(event) {
        if (event.keyCode == 13) {
            $('#enterBtn').trigger('click');
        }
    });

    $(document).ready(function() {

        $("#enterBtn").click(function(numberEntered) {
            //event.preventDefault();
            hotAndCold();
            $(".gameStatusAlert,.attempts,#startOverButton").show();
            //clear the input field
            $("#numberEntered").val("");

            //increment number of attempts
            numAttempts++
            //stop game after 5 attempts
            if (numAttempts >= 6 && numberEntered !== compNum) {
                $(".gameStatusAlert").html("You lost, the correct number was " + compNum);
                $('#enterBtn').hide();
                event.preventDefault();
            }
        });


    });
 