// ==========================================
// VINYASA YOGA & PILATES - JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('JavaScript loaded successfully');
    
    // ==========================================
    // MOBILE MENU TOGGLE - SIMPLIFIED & ROBUST
    // ==========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const body = document.body;
    
    console.log('Nav Toggle:', navToggle);
    console.log('Nav Menu:', navMenu);
    
    // Toggle menu function
    function toggleMenu() {
        console.log('Toggle menu called');
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
            console.log('Menu closed');
        } else {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            body.style.overflow = 'hidden';
            console.log('Menu opened');
        }
    }
    
    // Toggle menu on hamburger click
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            console.log('Nav toggle clicked');
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // Close menu when clicking on any nav link or button
    const navLinks = document.querySelectorAll('.nav-menu a');
    console.log('Found nav links:', navLinks.length);
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Nav link clicked');
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                body.style.overflow = '';
            }
        }
    });
    
    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hash or if it's a link to another page
            if (href === '#' || href.length <= 1) return;
            
            // Only handle hash links on the current page
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // ANIMATED COUNTER FOR STATS
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    console.log('Stats counter initialized, found elements:', statNumbers.length);
    
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        console.log('Animating counter to:', target);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
    
    // Use Intersection Observer for better detection
    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                console.log('Stats section intersecting:', entry.isIntersecting, 'Has animated:', hasAnimated);
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    console.log('Starting animation for all stat numbers');
                    statNumbers.forEach(stat => animateCounter(stat));
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px'
        });
        
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            console.log('Stats section found, observing...');
            statsObserver.observe(statsSection);
            
            // Also check immediately if already visible on page load
            setTimeout(() => {
                const rect = statsSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                console.log('Initial visibility check:', isVisible);
                if (isVisible && !hasAnimated) {
                    hasAnimated = true;
                    console.log('Stats visible on load, starting animation');
                    statNumbers.forEach(stat => animateCounter(stat));
                }
            }, 100);
        } else {
            console.log('Stats section NOT found!');
        }
    } else {
        console.log('No stat-number elements found!');
    }
    
    // ==========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and elements
    const animateElements = document.querySelectorAll('.step-card, .feature-card, .testimonial-card, .stat-card');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ==========================================
    // PARALLAX EFFECT FOR HERO
    // ==========================================
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    // ==========================================
    // FORM VALIDATION (if you add forms later)
    // ==========================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add your form submission logic here
            console.log('Form submitted');
            
            // Show success message
            alert('Thank you for your interest! We will contact you soon.');
            form.reset();
        });
    });
    
    // ==========================================
    // ANIMATE ON SCROLL
    // ==========================================
    const scrollAnimateElements = document.querySelectorAll('.animate-on-scroll');
    
    if (scrollAnimateElements.length > 0) {
        const animateObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });
        
        scrollAnimateElements.forEach(el => animateObserver.observe(el));
    }
    
    // ==========================================
    // LAZY LOADING IMAGES (when you add real images)
    // ==========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ==========================================
    // SCROLL TO TOP BUTTON (optional)
    // ==========================================
    function createScrollToTopButton() {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'scroll-to-top';
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6B4E71 0%, #8B6E91 100%);
            color: white;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        });
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
            button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
    }
    
    createScrollToTopButton();
    
    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Use debounced scroll for heavy operations
    const debouncedScroll = debounce(() => {
        checkStats();
        highlightNavigation();
    }, 10);
    
    window.addEventListener('scroll', debouncedScroll);
    
    // ==========================================
    // CONSOLE WELCOME MESSAGE
    // ==========================================
    console.log('%c🧘‍♀️ Welcome to Vinyasa Yoga & Pilates', 
        'color: #6B4E71; font-size: 20px; font-weight: bold;');
    console.log('%cFind Your Flow. Build Your Strength.', 
        'color: #8B6E91; font-size: 14px;');

    // ==========================================
    // SCROLL REVEAL ANIMATIONS
    // ==========================================
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // PARALLAX EFFECT ON MOUSE MOVE - Subtle
    // ==========================================
    const parallaxElements = document.querySelectorAll('.parallax');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        parallaxElements.forEach((el, index) => {
            const depth = (index + 1) * 3;
            const moveX = (mouseX - 0.5) * depth;
            const moveY = (mouseY - 0.5) * depth;
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });

    // ==========================================
    // ADD SUBTLE HOVER EFFECT TO CARDS
    // ==========================================
    const cards = document.querySelectorAll('.class-card, .pricing-card, .team-card, .contact-card, .step-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 80;
            const rotateY = (centerX - x) / 80;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
});
