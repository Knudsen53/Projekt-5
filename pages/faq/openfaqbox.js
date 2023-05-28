const faqConfig = {
    openBox: null,
  };

  function initializeFAQBoxes() {
    const faqBoxes = document.querySelectorAll('.faq-box');
  
    faqBoxes.forEach(faqBox => {
      const question = faqBox.querySelector('h3');
      const arrow = question.querySelector('.arrow');
      const answer = faqBox.querySelector('.answer');
  
      faqBox.addEventListener('click', () => {
        if (faqConfig.openBox === faqBox) {
          faqBox.classList.remove('open');
          faqConfig.openBox = null;
        } else {
          if (faqConfig.openBox) {
            faqConfig.openBox.classList.remove('open');
          }
          faqBox.classList.add('open');
          faqConfig.openBox = faqBox;
        }
      });
  
      arrow.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });
  }
  
  initializeFAQBoxes();
  