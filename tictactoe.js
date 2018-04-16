$(document).ready(function() {
    var pepper = "x";
    var visitor = "o";
    var count = 0;
    var pepperStarts = false;
    var pepper_win = 0;
    var visitor_win = 0;

    $('#game li').click(function() {
        if ($(this).hasClass('disable')) {
            //alert('Already selected')
        }
        else {
            $(this).text(visitor)
            $(this).addClass('disable ' + visitor + ' btn-primary')
            count++
            if ($("#tile1").hasClass(visitor) && $("#tile2").hasClass(visitor) && $("#tile3").hasClass(visitor) || $("#tile4").hasClass(visitor) && $("#tile5").hasClass(visitor) && $("#tile6").hasClass(visitor) || $("#tile7").hasClass(visitor) && $("#tile8").hasClass(visitor) && $("#tile9").hasClass(visitor) || $("#tile1").hasClass(visitor) && $("#tile4").hasClass(visitor) && $("#tile7").hasClass(visitor) || $("#tile2").hasClass(visitor) && $("#tile5").hasClass(visitor) && $("#tile8").hasClass(visitor) || $("#tile3").hasClass(visitor) && $("#tile6").hasClass(visitor) && $("#tile9").hasClass(visitor) || $("#tile1").hasClass(visitor) && $("#tile5").hasClass(visitor) && $("#tile9").hasClass(visitor) || $("#tile3").hasClass(visitor) && $("#tile5").hasClass(visitor) && $("#tile7").hasClass(visitor)) {
                popMessage('<span class="label label-success">Bravo</span> Vous avez gagné !')
                visitor_win++
                $('#visitor_win').text(visitor_win)
            }
            else {
                if (count == 9) popMessage('<span class="label label-info">Égalité</span> Nouvelle partie.')
                makePepperPlay()
            }
        }
    });

    function makePepperPlay() {
        if (count == 9) {
            popMessage('<span class="label label-info">Égalité</span> Nouvelle partie.')
        }
        else {
            // ANALYZE SITUATION
            // Win situations
            win123_1 = !$("#tile1").hasClass('disable') && $("#tile2").hasClass(pepper) && $("#tile3").hasClass(pepper)
            los123_1 = !$("#tile1").hasClass('disable') && $("#tile2").hasClass(visitor) && $("#tile3").hasClass(visitor)
            win123_2 = !$("#tile2").hasClass('disable') && $("#tile1").hasClass(pepper) && $("#tile3").hasClass(pepper)
            los123_2 = !$("#tile2").hasClass('disable') && $("#tile1").hasClass(visitor) && $("#tile3").hasClass(visitor)
            win123_3 = !$("#tile3").hasClass('disable') && $("#tile1").hasClass(pepper) && $("#tile2").hasClass(pepper)
            los123_3 = !$("#tile3").hasClass('disable') && $("#tile1").hasClass(visitor) && $("#tile2").hasClass(visitor)

            win456_4 = !$("#tile4").hasClass('disable') && $("#tile5").hasClass(pepper) && $("#tile6").hasClass(pepper)
            los456_4 = !$("#tile4").hasClass('disable') && $("#tile5").hasClass(visitor) && $("#tile6").hasClass(visitor)
            win456_5 = !$("#tile5").hasClass('disable') && $("#tile4").hasClass(pepper) && $("#tile6").hasClass(pepper)
            los456_5 = !$("#tile5").hasClass('disable') && $("#tile4").hasClass(visitor) && $("#tile6").hasClass(visitor)
            win456_6 = !$("#tile6").hasClass('disable') && $("#tile4").hasClass(pepper) && $("#tile5").hasClass(pepper)
            los456_6 = !$("#tile6").hasClass('disable') && $("#tile4").hasClass(visitor) && $("#tile5").hasClass(visitor)

            win789_7 = !$("#tile7").hasClass('disable') && $("#tile8").hasClass(pepper) && $("#tile9").hasClass(pepper)
            los789_7 = !$("#tile7").hasClass('disable') && $("#tile8").hasClass(visitor) && $("#tile9").hasClass(visitor)
            win789_8 = !$("#tile8").hasClass('disable') && $("#tile7").hasClass(pepper) && $("#tile9").hasClass(pepper)
            los789_8 = !$("#tile8").hasClass('disable') && $("#tile7").hasClass(visitor) && $("#tile9").hasClass(visitor)
            win789_9 = !$("#tile9").hasClass('disable') && $("#tile7").hasClass(pepper) && $("#tile8").hasClass(pepper)
            los789_9 = !$("#tile9").hasClass('disable') && $("#tile7").hasClass(visitor) && $("#tile8").hasClass(visitor)

            win147_1 = !$("#tile1").hasClass('disable') && $("#tile4").hasClass(pepper) && $("#tile7").hasClass(pepper)
            los147_1 = !$("#tile1").hasClass('disable') && $("#tile4").hasClass(visitor) && $("#tile7").hasClass(visitor)
            win147_4 = !$("#tile4").hasClass('disable') && $("#tile1").hasClass(pepper) && $("#tile7").hasClass(pepper)
            los147_4 = !$("#tile4").hasClass('disable') && $("#tile1").hasClass(visitor) && $("#tile7").hasClass(visitor)
            win147_7 = !$("#tile7").hasClass('disable') && $("#tile1").hasClass(pepper) && $("#tile4").hasClass(pepper)
            los147_7 = !$("#tile7").hasClass('disable') && $("#tile1").hasClass(visitor) && $("#tile4").hasClass(visitor)

            win258_2 = !$("#tile2").hasClass('disable') && $("#tile5").hasClass(pepper) && $("#tile8").hasClass(pepper)
            los258_2 = !$("#tile2").hasClass('disable') && $("#tile5").hasClass(visitor) && $("#tile8").hasClass(visitor)
            win258_5 = !$("#tile5").hasClass('disable') && $("#tile2").hasClass(pepper) && $("#tile8").hasClass(pepper)
            los258_5 = !$("#tile5").hasClass('disable') && $("#tile2").hasClass(visitor) && $("#tile8").hasClass(visitor)
            win258_8 = !$("#tile8").hasClass('disable') && $("#tile2").hasClass(pepper) && $("#tile5").hasClass(pepper)
            los258_8 = !$("#tile8").hasClass('disable') && $("#tile2").hasClass(visitor) && $("#tile5").hasClass(visitor)

            win369_3 = !$("#tile3").hasClass('disable') && $("#tile6").hasClass(pepper) && $("#tile9").hasClass(pepper)
            los369_3 = !$("#tile3").hasClass('disable') && $("#tile6").hasClass(visitor) && $("#tile9").hasClass(visitor)
            win369_6 = !$("#tile6").hasClass('disable') && $("#tile3").hasClass(pepper) && $("#tile9").hasClass(pepper)
            los369_6 = !$("#tile6").hasClass('disable') && $("#tile3").hasClass(visitor) && $("#tile9").hasClass(visitor)
            win369_9 = !$("#tile9").hasClass('disable') && $("#tile3").hasClass(pepper) && $("#tile6").hasClass(pepper)
            los369_9 = !$("#tile9").hasClass('disable') && $("#tile3").hasClass(visitor) && $("#tile6").hasClass(visitor)

            win159_1 = !$("#tile1").hasClass('disable') && $("#tile5").hasClass(pepper) && $("#tile9").hasClass(pepper)
            los159_1 = !$("#tile1").hasClass('disable') && $("#tile5").hasClass(visitor) && $("#tile9").hasClass(visitor)
            win159_5 = !$("#tile5").hasClass('disable') && $("#tile1").hasClass(pepper) && $("#tile9").hasClass(pepper)
            los159_5 = !$("#tile5").hasClass('disable') && $("#tile1").hasClass(visitor) && $("#tile9").hasClass(visitor)
            win159_9 = !$("#tile9").hasClass('disable') && $("#tile1").hasClass(pepper) && $("#tile5").hasClass(pepper)
            los159_9 = !$("#tile9").hasClass('disable') && $("#tile1").hasClass(visitor) && $("#tile5").hasClass(visitor)

            win357_3 = !$("#tile3").hasClass('disable') && $("#tile5").hasClass(pepper) && $("#tile7").hasClass(pepper)
            los357_3 = !$("#tile3").hasClass('disable') && $("#tile5").hasClass(visitor) && $("#tile7").hasClass(visitor)
            win357_5 = !$("#tile5").hasClass('disable') && $("#tile3").hasClass(pepper) && $("#tile7").hasClass(pepper)
            los357_5 = !$("#tile5").hasClass('disable') && $("#tile3").hasClass(visitor) && $("#tile7").hasClass(visitor)
            win357_7 = !$("#tile7").hasClass('disable') && $("#tile3").hasClass(pepper) && $("#tile5").hasClass(pepper)
            los357_7 = !$("#tile7").hasClass('disable') && $("#tile3").hasClass(visitor) && $("#tile5").hasClass(visitor)

            // Empty situation
            all_tiles_empty = !($("#tile1").hasClass('disable') || $("#tile2").hasClass('disable') || $("#tile3").hasClass('disable') || $("#tile4").hasClass('disable') || $("#tile5").hasClass('disable') || $("#tile6").hasClass('disable') || $("#tile7").hasClass('disable') || $("#tile8").hasClass('disable') || $("#tile9").hasClass('disable'))

            // Tactical win situations
            // TODO

            // DECIDE WHAT TO PLAY
            var to_play; // Tile number to play

            // Pepper is going to win
            if (win123_1 || win147_1 || win159_1) to_play = 1
            else if (win123_3 || win369_3 || win357_3) to_play = 3
            else if (win789_7 || win147_7 || win357_7) to_play = 7
            else if (win789_9 || win369_9 || win159_9) to_play = 9

            else if (win123_2 || win258_2) to_play = 2
            else if (win456_4 || win147_4) to_play = 4
            else if (win456_6 || win369_6) to_play = 6
            else if (win789_8 || win258_8) to_play = 8

            else if (win456_5 || win258_5 || win159_5 || win357_5) to_play = 8

            // Pepper is going to lose
            else if (los123_1 || los147_1 || los159_1) to_play = 1
            else if (los123_3 || los369_3 || los357_3) to_play = 3
            else if (los789_7 || los147_7 || los357_7) to_play = 7
            else if (los789_9 || los369_9 || los159_9) to_play = 9

            else if (los123_2 || los258_2) to_play = 2
            else if (los456_4 || los147_4) to_play = 4
            else if (los456_6 || los369_6) to_play = 6
            else if (los789_8 || los258_8) to_play = 8

            else if (los456_5 || los258_5 || los159_5 || los357_5) to_play = 8

            // Beginning of a match
            else if (all_tiles_empty) {
                var rand = Math.random()*100
                // Play a corner
                if (rand < 60) {
                    var rand_bis = Math.random()*100
                    if (rand_bis < 25) to_play = 1
                    else if (rand_bis < 50) to_play = 3
                    else if (rand_bis < 75) to_play = 7
                    else to_play = 9
                }
                // Play an edge
                else if (rand < 80) {
                    var rand_bis = Math.random()*100
                    if (rand_bis < 25) to_play = 2
                    else if (rand_bis < 50) to_play = 4
                    else if (rand_bis < 75) to_play = 6
                    else to_play = 8
                }
                // Play center
                else to_play = 5
            }

            // Recognize a tactical win situation
            else if (false) { // TODO

            }

            // Play center
            else if (!$("#tile5").hasClass('disable')){
                to_play = 5
            }

            // Play random
            else {
                availables = getAvailableTiles()
                var rand = Math.random()*(availables.length - 1)
                to_play = availables[Math.round(rand)];
            }

            // PLAY
            $("#tile" + to_play).text(pepper)
            $("#tile" + to_play).addClass('disable ' + pepper + ' btn-warning')
            count++
            if ($("#tile1").hasClass(pepper) && $("#tile2").hasClass(pepper) && $("#tile3").hasClass(pepper) || $("#tile4").hasClass(pepper) && $("#tile5").hasClass(pepper) && $("#tile6").hasClass(pepper) || $("#tile7").hasClass(pepper) && $("#tile8").hasClass(pepper) && $("#tile9").hasClass(pepper) || $("#tile1").hasClass(pepper) && $("#tile4").hasClass(pepper) && $("#tile7").hasClass(pepper) || $("#tile2").hasClass(pepper) && $("#tile5").hasClass(pepper) && $("#tile8").hasClass(pepper) || $("#tile3").hasClass(pepper) && $("#tile6").hasClass(pepper) && $("#tile9").hasClass(pepper) || $("#tile1").hasClass(pepper) && $("#tile5").hasClass(pepper) && $("#tile9").hasClass(pepper) || $("#tile3").hasClass(pepper) && $("#tile5").hasClass(pepper) && $("#tile7").hasClass(pepper)) {
                popMessage('<span class="label label-important">Dommage</span> Vous avez perdu !')
                pepper_win++
                $('#pepper_win').text(pepper_win)
            }
            else {
                if (count == 9) popMessage('<span class="label label-info">Égalité</span> Nouvelle partie.')
            }
        }
    }

    function getAvailableTiles() {
        var availables = []
        for (var i = 1; i < 10; i++) {
            if (!$("#tile" + i).hasClass('disable')) availables.push(i)
        }
        return availables
    }

    function popMessage(message) {
        $("#game li").addClass('disable')
        $('#game-messages-text').html(message)
        $('#game-messages').show()
    }

    function endOfMatch() {
        $("#game li").text("+")
        $("#game li").removeClass('disable')
        $("#game li").removeClass(visitor)
        $("#game li").removeClass(pepper)
        $("#game li").removeClass('btn-primary')
        $("#game li").removeClass('btn-warning')
        count = 0
        pepperStarts = !pepperStarts
        if (pepperStarts) makePepperPlay()
    }

    $('#game-messages-button').click(function () {
        $('#game-messages').hide()
        endOfMatch()
    });

    $("#reset").click(function () {
        $('#game-messages').hide()
        endOfMatch()
        $('#visitor_win').text("0")
        $('#pepper_win').text("0")
    });

});
