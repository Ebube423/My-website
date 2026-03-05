$(document).ready(function(){

    /* ==========================
       SMOOTH SCROLLING
    ========================== */
    $('nav a').click(function(e){
        e.preventDefault();
        let targetPage = $(this).attr('href');

        // If the section exists on current page, scroll smoothly
        if($(targetPage).length){
            $('html, body').animate({
                scrollTop: $(targetPage).offset().top
            }, 800);
        } else {
            // Otherwise, navigate to the other page
            window.location.href = targetPage;
        }
    });

    /* ==========================
       HOVER ANIMATIONS
    ========================== */
    // Skill hover
    $('.skill').hover(
        function(){ $(this).css('transform','scale(1.05)'); },
        function(){ $(this).css('transform','scale(1)'); }
    );

    // Project card hover
    $('.project-card').hover(
        function(){ $(this).css('transform','scale(1.08) rotate(-1deg)'); },
        function(){ $(this).css('transform','scale(1) rotate(0deg)'); }
    );

    /* ==========================
       CONTACT FORM VALIDATION
    ========================== */
    $('form').submit(function(e){
        let valid = true;
        $(this).find('input, textarea').each(function(){
            if($(this).val().trim() === '') valid = false;
        });
        if(!valid){
            alert('Please fill all fields before submitting!');
            e.preventDefault();
        }
    });

    function showCalculator() {
        document.getElementById("calculatorImage").style.display = "block";
    }

    /* ==========================
       DARK MODE TOGGLE
    ========================== */
    $('#darkModeToggle').click(function(){
        $('body').toggleClass('dark-mode');

        // Change button icon
        if($('body').hasClass('dark-mode')){
            $(this).text('☀️');
        } else {
            $(this).text('🌙');
        }
    });

});