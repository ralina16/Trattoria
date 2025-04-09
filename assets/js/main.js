document.addEventListener('DOMContentLoaded', function () {
    // Переподключение между окном авторизации и регистрации
    const switchToRegisterLink = document.getElementById('switchToRegisterFromLogin');

    if (switchToRegisterLink) {
        switchToRegisterLink.addEventListener('click', function (event) {
            event.preventDefault();

            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            if (loginModal) {
                loginModal.hide();
            }

            const regModal = new bootstrap.Modal(document.getElementById('regModal'));
            regModal.show();
        });
    }

    // Выпадающее меню
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.remove('active');
            }
        });
    }

});

// Модальное окно с отзывами
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-icon');
    let selectedRating = null;

    if (!stars.length) {
        console.error('Элементы с классом .star-icon не найдены.');
        return;
    }

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach((s, i) => {
                if (i < selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('click', () => {
            selectedRating = index + 1;
            console.log(`Выбранный рейтинг: ${selectedRating}`);
            stars.forEach((s, i) => {
                if (i < selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
});
// index end

// about start
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.faq-icon');

    console.log('Scroll Height:', answer.scrollHeight); // Отладочный вывод

    if (answer.classList.contains('open')) {
        answer.style.maxHeight = '0';
        icon.classList.remove('rotate');
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.classList.add('rotate');
    }

    answer.classList.toggle('open');
}
// about end
