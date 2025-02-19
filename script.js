// script.js
document.addEventListener("DOMContentLoaded", function() {
    // إضافة الحروف المتساقطة ديناميكيًا
    const background = document.querySelector('.background');
    if (background) { // تحقق من وجود العنصر
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        function createFallingLetter() {
            const span = document.createElement('span');
            span.textContent = letters[Math.floor(Math.random() * letters.length)];
            span.style.left = Math.random() * 100 + 'vw';
            span.style.animationDuration = Math.random() * 3 + 2 + 's';
            background.appendChild(span);

            setTimeout(() => {
                span.remove();
            }, 5000); // إزالة الحرف بعد انتهاء الحركة
        }

        setInterval(createFallingLetter, 300); // إنشاء حرف جديد كل 300 مللي ثانية
    }

    // حفظ الإجابات في localStorage
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', (e) => {
            const questionId = e.target.name;
            const answer = e.target.value;

            const answers = JSON.parse(localStorage.getItem('answers')) || [];
            const existingAnswerIndex = answers.findIndex(a => a.questionId === questionId);

            if (existingAnswerIndex !== -1) {
                answers[existingAnswerIndex] = { questionId, answer };
            } else {
                answers.push({ questionId, answer });
            }

            localStorage.setItem('answers', JSON.stringify(answers));
        });
    });

    // تحميل الإجابات المحفوظة عند فتح الصفحة
    const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
    savedAnswers.forEach(answer => {
        const input = document.querySelector(`input[name="${answer.questionId}"][value="${answer.answer}"]`);
        if (input) {
            input.checked = true;
        }
    });
});

// وظائف التنقل بين الصفحات
function goToBackground() {
    window.location.href = "background.html";
}

function goToLinguistics() {
    window.location.href = "linguistics.html";
}

function goToPhonetics() {
    window.location.href = "phonetics.html";
}

function goToPsychology() {
    window.location.href = "psychology.html";
}

function goToEducation() {
    window.location.href = "education.html";
}

function submitSurvey() {
    alert("Thank you for completing the questionnaire!");
    window.location.href = "index.html";
}