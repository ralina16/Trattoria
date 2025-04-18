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

    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item-dark');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
        });
    });
}

});

// Модальное окно с отзывами
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-icon');
    let selectedRating = null;

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


// Фильтр в каталоге
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll('.btn-filter, .dropdown-item-dark');
    const cards = document.querySelectorAll('.cat-cards [data-category]');

    function filterCards(category) {
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.dataset.category;
            filterCards(selectedCategory);
        });
    });

    filterCards('all');
});
// index end

// about start
function toggleAnswer(question) {
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allIcons = document.querySelectorAll('.faq-icon');

    const currentAnswer = question.nextElementSibling;
    const currentIcon = question.querySelector('.faq-icon');

    allAnswers.forEach((answer, index) => {
        if (answer !== currentAnswer) {
            answer.style.maxHeight = '0';
            answer.classList.remove('open');
            allIcons[index].classList.remove('rotate');
        }
    });

    if (currentAnswer.classList.contains('open')) {
        currentAnswer.style.maxHeight = '0';
        currentIcon.classList.remove('rotate');
    } else {
        currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
        currentIcon.classList.add('rotate');
    }

    currentAnswer.classList.toggle('open');
}
// about end
