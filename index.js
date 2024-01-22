const faqItems = document.querySelectorAll('.faq');
const footerLinksContainer = document.querySelector('.footer-links-container');
const rights = document.getElementById('rights');

rights.innerText = `© ${new Date().getFullYear()} ClearLink. All rights reserved`;

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('#animate');

  function isElementInViewport(el, threshold = 0.5) {
    const rect = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const vertInView =
      rect.top <= windowHeight - threshold * rect.height && rect.bottom >= 0;
    return vertInView;
  }

  function checkSectionInView() {
    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  // Initial check when the page loads
  checkSectionInView();

  // Check again when the page is scrolled
  window.addEventListener('scroll', checkSectionInView);
});

function expand(event) {
  const faqItem = event.currentTarget;
  faqItem.classList.toggle('active');
  const faqAnswer = faqItem.querySelector('.answer');

  faqAnswer.style.height = faqItem.classList.contains('active')
    ? faqAnswer.scrollHeight + 'px'
    : '0px';
}

faqItems.forEach((faqItem) => faqItem.addEventListener('click', expand));

const footerLinks = [
  {
    title: 'Product',
    links: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About us', 'Careers', 'Press', 'News', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Events', 'Help centre', 'Tutorials', 'Support'],
  },
  {
    title: 'Legal',
    links: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Contact'],
  },
];

footerLinksContainer.innerHTML = footerLinks
  .map(
    (footerLink) => `<div class='footer-links flex column'>
<h1 class='links-title'>${footerLink.title}</h1>
<ul class='links-body flex column'>
${footerLink.links
  .map((link) => `<li class='link'><a href="#">${link}</a></li>`)
  .join('')}
</ul>
</div>`
  )
  .join('');
