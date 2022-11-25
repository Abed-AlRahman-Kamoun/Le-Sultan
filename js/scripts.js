
$(document).ready(function () {
    $('#contactForm').on('submit', function () {

        // Add text 'loading...' right after clicking on the submit button.
        // $('.output_message').text('Loading...');

        var form = $(this);
        $.ajax({
            url: "server/mail.php",
            method: 'post',
            data: form.serialize(),
            success: function (result) {
                if (result.success == 'success') {
                    Swal.fire(
                        'Bon travail!',
                        'Votre demande a été bien soumise et vous pouvez nous appeler le plus tôt possible',
                        'success'
                    )
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops',
                        text: 'Quelque chose a mal fonctionné',
                    })
                }
            }
        });
        return false;
    });
});
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
