const faqItems = document.querySelectorAll('.faq');

function expand(event) {
  const faqItem = event.currentTarget;
  faqItem.classList.toggle('active');
  const faqAnswer = faqItem.querySelector('.answer');

  faqAnswer.style.height = faqItem.classList.contains('active')
    ? faqAnswer.scrollHeight + 'px'
    : '0px';
}

faqItems.forEach((faqItem) => faqItem.addEventListener('click', expand));
