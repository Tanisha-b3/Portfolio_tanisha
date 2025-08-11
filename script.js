

    // Initialize ScrollReveal
    ScrollReveal().reveal('.hero-content, .hero-image, .about-text, .about-image, .portfolio h2, .portfolio-filters, .portfolio-card, .contact-left, .contact-form, footer', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      opacity: 0,
      interval: 100,
      easing: 'ease-in-out',
      reset: true
    });
// Form submission handler
document.getElementById("contactForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector("button[type='submit']");
  const messageEl = document.getElementById("form-message");

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span>Sending...</span>`;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      messageEl.textContent = "✅ Thank you! I'll reply within 24 hours.";
      messageEl.classList.remove("hidden", "text-red-500");
      messageEl.classList.add("text-green-500");
      form.reset();
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    messageEl.textContent = "❌ Oops! Something went wrong. Please try again.";
    messageEl.classList.remove("hidden", "text-green-500");
    messageEl.classList.add("text-red-500");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<span>Send Message</span>`;
    messageEl.classList.remove("hidden");
  }
});
    // Active filter buttons
    const filterButtons = document.querySelectorAll('.portfolio-filters button');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      navbar.classList.toggle('sticky', window.scrollY > 0);
    });

    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });

      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
    // Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  const searchInput = document.querySelector('.search-input');
 
  // Filter by category
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.dataset.filter;
      
      // Filter cards
      portfolioCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.category.includes(filterValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Search functionality
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    portfolioCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  // Enhanced portfolio filtering
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filter items
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          item.classList.add('animate__fadeIn');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';
      
      // Simulate form submission
      setTimeout(() => {
        submitBtn.innerHTML = '<span>Message Sent!</span>';
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span>';
          contactForm.reset();
        }, 2000);
      }, 1500);
    });
  }
});

});
