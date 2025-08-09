// Function to show email form when "Yes" button is clicked
function showEmailForm() {
    // Track button click in Google Analytics
    gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'join_beta_button_header'
    });
    
    var alertPrompt = document.getElementById('alertPrompt');
    var emailFormContainer = document.getElementById('emailFormContainer');
    
    // Hide the yes button with fade out
    alertPrompt.style.opacity = '0';
    alertPrompt.style.transform = 'translateY(-20px)';
    
    setTimeout(function() {
        alertPrompt.style.display = 'none';
        emailFormContainer.style.display = 'block';
        
        // Trigger the animation
        setTimeout(function() {
            emailFormContainer.classList.add('show');
        }, 50);
    }, 300);
}

// Function to show email form for bottom CTA
function showEmailFormBottom() {
    // Track button click in Google Analytics
    gtag('event', 'click', {
        'event_category': 'engagement',
        'event_label': 'join_beta_button_bottom'
    });
    
    var alertPrompt = document.getElementById('alertPromptBottom');
    var emailFormContainer = document.getElementById('emailFormContainerBottom');
    
    // Hide the yes button with fade out
    alertPrompt.style.opacity = '0';
    alertPrompt.style.transform = 'translateY(-20px)';
    
    setTimeout(function() {
        alertPrompt.style.display = 'none';
        emailFormContainer.style.display = 'block';
        
        // Trigger the animation
        setTimeout(function() {
            emailFormContainer.classList.add('show');
        }, 50);
    }, 300);
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// Subtle scroll animations
$(document).ready(function() {
    function checkScroll() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        $('.animate-item').each(function(index) {
            var elementTop = $(this).offset().top;
            if (scrollTop + windowHeight > elementTop + 100) {
                var $this = $(this);
                // Add delay for staggered animation
                setTimeout(function() {
                    $this.addClass('visible');
                }, index * 150);
            }
        });
    }
    
    // Check on scroll
    $(window).scroll(checkScroll);
    
    // Check on load
    checkScroll();
});