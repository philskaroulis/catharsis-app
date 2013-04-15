// app javascript

// minimal state
// var g_intro_shown = false;
var g_intro_shown = true;

$(document).ready(function() {

    //
    //$(".genre").attr('href','javascript:void(0)')

    // upon doc ready, show the
    //$("#intro-genres").hide().delay(1000).fadeIn(500);

    // browse menu
    $(".genre").click(function () {

        // init
        var genre_id = '#keywords-' + $(this).attr('id');

        // out with the old
        $('#movies').hide();
        $('.keywords').hide();
        $(".keyword-breadcrumb").html("");
        $('#intro-genres').hide();
        $('.genre').removeClass('genre-selected');

        // in with the new
        $(genre_id).fadeIn(400);
        $(this).addClass('genre-selected');
        $(".genre-breadcrumb").html( ":: " + $(this).html() );
        if (!g_intro_shown){
            $('#intro-keywords').hide().delay(200).fadeIn(500);
        }

        // switch off the intro
        g_intro_shown = true;

    });

    // search
    $(".keywords a").click(function () {

        // out with the old
        $('#intro-keywords').hide();
        $('.keyword').removeClass('keyword-selected');

        // search

        // in with the new
        $(this).addClass('keyword-selected');
        $('#movies').show();
        $(".keyword-breadcrumb").html( ":: " + $(this).html() );

    });

    //
    $(".btn-add").hover(
        function () {
            $(this).find('img').attr('src','img/add-on.png');
        },
        function () {
            $(this).find('img').attr('src','img/add-off.png');
        }
    );



})
