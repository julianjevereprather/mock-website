document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;

            // Collapse all answers before expanding the clicked one
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer) {
                    item.classList.remove('show');
                }
            });

            // Toggle the 'show' class on the clicked answer
            answer.classList.toggle('show');
        });
    });
});