$('#modalImage').on('show.bs.modal', function (event) {
    var triggerElement = $(event.relatedTarget);
    var imgUrl = triggerElement.attr('src');
    $('#modalImg').attr('src', imgUrl);
});

document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    var navbarLinks = document.querySelectorAll('.navbar a');

    function highlightNavbarLink() {
        var scrollPosition = window.scrollY;

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - sectionHeight * 0.25 && scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25) {
                var targetId = section.getAttribute('id');
                navbarLinks.forEach(function (link) {
                    if (link.getAttribute('href') === '#' + targetId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavbarLink);
});
