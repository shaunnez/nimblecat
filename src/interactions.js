(function () {
  // ── "What We Do" → scroll to #story ──────────────────────────────────────
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const text = btn.textContent.trim();

    if (text === 'What We Do') {
      const story = document.getElementById('story');
      if (story) story.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // ── Portfolio filter buttons ────────────────────────────────────────────
    if (text === 'All' || text === 'Web' || text === 'Branding') {
      // Let React update button active states first, then filter
      setTimeout(() => filterPortfolio(text), 0);
    }
  });

  // ── Contact form → thank you message ─────────────────────────────────────
  // Capture phase so we run before React's synthetic event handler
  document.addEventListener('submit', function (e) {
    const form = e.target.closest('form');
    if (!form) return;
    const section = form.closest('section');
    if (!section || section.id !== 'contact') return;

    e.preventDefault();
    e.stopImmediatePropagation();

    form.innerHTML = `
      <div class="text-center py-12">
        <div class="w-16 h-16 bg-[#c8a951]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
               fill="none" stroke="#c8a951" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3 class="text-2xl font-semibold text-[#1a1a1a] mb-3">Thanks, we'll be in touch!</h3>
        <p class="text-gray-500">We'll get back to you as soon as possible.</p>
      </div>
    `;
  }, true);

  // ── Testimonials navigation ───────────────────────────────────────────────
  const TESTIMONIALS = [
    { text: "Nimblecat had our website up, running and looking great working with our very short deadline. Very professional in all communication to us and it was clear that Nimblecat have the expertise to deliver.", author: "iPrune Tree Services" },
    { text: "Shaun helped us develop our company application, dealing with a lot of complex functionality. He was great to work with and delivered the project on time and to a high standard.", author: "ThinkHQ" },
    { text: "Working with NimbleCat was a fantastic experience. They understood our vision and delivered a website that exceeded our expectations. Highly recommended for anyone looking for quality web development.", author: "Auckland Web Designs" }
  ];
  let currentTestimonial = 0;

  function getTestimonialsSection() {
    // Find the section containing "Happy Clients"
    return Array.from(document.querySelectorAll('section')).find(s => s.querySelector('h2')?.textContent.trim() === 'Happy Clients');
  }

  function renderTestimonial(index) {
    const section = getTestimonialsSection();
    if (!section) return;
    const { text, author } = TESTIMONIALS[index];

    // Update quote text and author
    const quoteEl = section.querySelector('.italic');
    const authorEl = section.querySelector('.tracking-wide');
    if (quoteEl) quoteEl.textContent = `"${text}"`;
    if (authorEl) authorEl.textContent = `— ${author}`;

    // Update dot indicators
    const dots = section.querySelectorAll('.flex.items-center.gap-2 button');
    dots.forEach((dot, i) => {
      dot.className = i === index
        ? 'w-6 h-2 rounded-full transition-all duration-300 bg-[#c8a951]'
        : 'w-2 h-2 rounded-full transition-all duration-300 bg-gray-300';
    });
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const section = getTestimonialsSection();
    if (!section || !section.contains(btn)) return;

    // Prev button (contains chevron-left SVG)
    if (btn.querySelector('.lucide-chevron-left') || btn.innerHTML.includes('m15 18')) {
      currentTestimonial = (currentTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
      renderTestimonial(currentTestimonial);
      return;
    }
    // Next button (contains chevron-right SVG)
    if (btn.querySelector('.lucide-chevron-right') || btn.innerHTML.includes('m9 18')) {
      currentTestimonial = (currentTestimonial + 1) % TESTIMONIALS.length;
      renderTestimonial(currentTestimonial);
      return;
    }
    // Dot buttons
    const dots = Array.from(section.querySelectorAll('.flex.items-center.gap-2 button'));
    const dotIndex = dots.indexOf(btn);
    if (dotIndex !== -1) {
      currentTestimonial = dotIndex;
      renderTestimonial(currentTestimonial);
    }
  });

  // ── Portfolio filtering ───────────────────────────────────────────────────
  function filterPortfolio(category) {
    const portfolioSection = document.getElementById('portfolio');
    if (!portfolioSection) return;

    // Update active button styling
    const filterBtns = portfolioSection.querySelectorAll('.flex.justify-center.gap-2 button');
    filterBtns.forEach(btn => {
      const active = btn.textContent.trim() === category;
      btn.className = active
        ? 'px-5 py-2 text-sm tracking-wide uppercase transition-all duration-300 rounded-full bg-[#1a1a1a] text-white'
        : 'px-5 py-2 text-sm tracking-wide uppercase transition-all duration-300 rounded-full bg-transparent text-gray-500 hover:text-[#1a1a1a]';
    });

    // Show/hide grid items based on category text in the overlay <p>
    const grid = portfolioSection.querySelector('.grid');
    if (!grid) return;

    grid.querySelectorAll(':scope > div').forEach(item => {
      const categoryEl = item.querySelector('.absolute p');
      if (!categoryEl) { item.style.display = ''; return; }
      const match = category === 'All' || categoryEl.textContent.includes(category);
      item.style.display = match ? '' : 'none';
    });
  }
})();
