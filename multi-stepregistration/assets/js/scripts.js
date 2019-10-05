jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function() {
        $.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function() {
        $.backstretch("resize");
    });

    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });



    $('fieldset.ideator').hide();
    $('input[name="ideator"]').click(function() {
        if (this.checked) {
            $('fieldset.ideator').show();
        } else {
            $('fieldset.ideator').hide();
        }
    });


    $('fieldset.developer').hide();
    $('input[name="developer"]').click(function() {
        if (this.checked) {
            $('fieldset.developer').show();
        } else {
            $('fieldset.developer').hide();
        }
    });

    $('fieldset.tester').hide();
    $('input[name="tester"]').click(function() {
        if (this.checked) {
            $('fieldset.tester').show();
        } else {
            $('fieldset.tester').hide();
        }
    });




    $('fieldset.marketing').hide();
    $('input[name="marketing"]').click(function() {
        if (this.checked) {
            $('fieldset.marketing').show();
        } else {
            $('fieldset.marketing').hide();
        }
    });



    // next step
    $('.registration-form .btn-next').on('click', function() {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        // $('fieldset.developer').hide();
        // $('input[name="developer"]').click(function() {
        //     if (this.checked) {
        //         $('fieldset.developer').show();
        //     } else {
        //         $('fieldset.developer').hide();
        //     }
        // });


        // $('fieldset.other').hide();
        // $('input[name="other"]').click(function() {
        //     if (this.checked) {
        //         $('fieldset.other').show();
        //     } else {
        //         $('fieldset.other').hide();
        //     }
        // });


        parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function() {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function() {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function() {
        $(this).parents('fieldset').fadeOut(400, function() {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.registration-form').on('submit', function(e) {

        $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

    });


});