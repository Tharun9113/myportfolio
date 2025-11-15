// ========================================
// Configuration Import
// ========================================
import config from '../config/portfolio-config.js';

// ========================================
// Initialize AOS
// ========================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    disable: function() {
        // Disable AOS on mobile devices
        return window.innerWidth < 768;
    }
});

// ========================================
// Loading Screen
// ========================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 500);
});

// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ========================================
// Mobile Menu Toggle
// ========================================
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Nav Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinksList.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Particles.js Configuration
// ========================================
if (typeof particlesJS !== 'undefined') {
    // Reduce particle count on mobile for better performance
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 30 : 50;
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: particleCount,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6366f1'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6366f1',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: !isMobile, // Disable hover on mobile
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// ========================================
// Typed Text Animation
// ========================================
let nameTyped = false;

function typeWriterAnimation(nameElement, name) {
    if (nameTyped) return;
    nameTyped = true;
    
    let i = 0;
    nameElement.textContent = '';
    function typeWriter() {
        if (i < name.length) {
            nameElement.textContent += name.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    setTimeout(typeWriter, 500);
}

// ========================================
// Update Hero Section with Config
// ========================================
function updateHeroSection() {
    if (!config.personalInfo) return;
    
    const { name, title, bio, socialLinks } = config.personalInfo;
    
    // Update name with typing animation (only once)
    const nameElement = document.getElementById('typed-name');
    if (nameElement && name && !nameTyped) {
        typeWriterAnimation(nameElement, name);
    }
    
    // Update title
    const titleElement = document.querySelector('.title');
    if (titleElement && title) {
        titleElement.textContent = title;
    }
    
    // Update bio
    const bioElement = document.querySelector('.hero-description');
    if (bioElement && bio) {
        bioElement.textContent = bio;
    }
    
    // Update social links
    if (socialLinks) {
        const socialLinksElements = document.querySelectorAll('.hero-social .social-link');
        socialLinksElements.forEach((link, index) => {
            const platforms = ['github', 'linkedin', 'twitter', 'email'];
            if (socialLinks[platforms[index]]) {
                link.href = socialLinks[platforms[index]];
            }
        });
    }
}

// ========================================
// Animated Statistics
// ========================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseFloat(stat.getAttribute('data-target'));
                animateValue(stat, 0, target, 2000);
                observer.unobserve(stat);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const isDecimal = end % 1 !== 0; // Check if end value is a decimal
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = progress * (end - start) + start;
        
        // Format based on whether it's a decimal or integer
        if (isDecimal) {
            element.textContent = current.toFixed(2);
        } else {
            element.textContent = Math.floor(current);
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            // Ensure final value is correct
            if (isDecimal) {
                element.textContent = end.toFixed(2);
            } else {
                element.textContent = end;
            }
        }
    };
    window.requestAnimationFrame(step);
}

// ========================================
// Mobile Detection - More aggressive
// ========================================
function isMobileDevice() {
    // Always return true if screen width is small or touch is available
    const isSmallScreen = window.innerWidth <= 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    return isSmallScreen || isTouchDevice || isMobileUA;
}

// Store mobile status globally
window.IS_MOBILE = isMobileDevice();

// ========================================
// Icon Fallback Helper
// ========================================
function getIconFallback(skillName) {
    const iconMap = {
        'Python': '🐍',
        'Java': '☕',
        'C++': '⚙️',
        'C': '⚙️',
        'Django': '🎸',
        'SQL': '🗄️',
        'Git/GitHub': '🔧',
        'JavaScript': '📜',
        'HTML/CSS': '🎨',
        'App Development': '📱'
    };
    return iconMap[skillName] || '💻';
}

// ========================================
// Get Alternative CDN URL
// ========================================
function getAlternativeCDN(originalUrl) {
    if (!originalUrl || !originalUrl.includes('cdn.jsdelivr.net')) {
        return null;
    }
    
    // Try multiple CDN alternatives
    const alternatives = [
        originalUrl.replace('cdn.jsdelivr.net/gh/devicons/devicon/', 'raw.githubusercontent.com/devicons/devicon/master/'),
        originalUrl.replace('cdn.jsdelivr.net', 'unpkg.com'),
        originalUrl.replace('cdn.jsdelivr.net/gh/devicons/devicon/', 'cdnjs.cloudflare.com/ajax/libs/devicons/')
    ];
    
    return alternatives[0]; // Return first alternative
}

// ========================================
// Skills Section
// ========================================
function renderSkills() {
    if (!config.skills || !config.skills.length) return;
    
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    // Check if mobile - use multiple methods for reliability
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || 0;
    const isMobileScreen = screenWidth <= 768 || 
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                          ('ontouchstart' in window);
    
    skillsGrid.innerHTML = config.skills.map((skill, index) => {
        // Check if icon is a URL (starts with http) or data URI (starts with data:)
        const isImageIcon = skill.icon && (skill.icon.startsWith('http') || skill.icon.startsWith('//') || skill.icon.startsWith('data:'));
        
        // Special handling for DSA text icon
        let iconHTML;
        if (skill.icon === 'DSA_TEXT_ICON') {
            iconHTML = '<div class="skill-icon skill-icon-text">DSA</div>';
        } else if (isImageIcon) {
            const iconId = `skill-icon-${index}-${Date.now()}`;
            const fallbackEmoji = getIconFallback(skill.name);
            const alternativeCDN = getAlternativeCDN(skill.icon);
            
            // ALWAYS show emoji on mobile - use multiple checks
            if (isMobileScreen) {
                // On mobile: Show emoji ONLY - simple and direct with inline styles
                iconHTML = `<div class="skill-icon-emoji-mobile" style="display: block !important; visibility: visible !important; opacity: 1 !important; font-size: 3rem !important; margin: 0 auto 1rem !important; text-align: center !important; line-height: 64px !important; height: 64px !important; width: 100% !important;">${fallbackEmoji}</div>`;
            } else {
                // On desktop, use normal loading
                iconHTML = `
                    <img 
                        id="${iconId}" 
                        src="${skill.icon}" 
                        alt="${skill.name}" 
                        class="skill-icon-img" 
                        loading="lazy" 
                        referrerpolicy="no-referrer"
                        style="display: block; opacity: 1; visibility: visible; width: 64px; height: 64px; object-fit: contain; margin: 0 auto 1rem;"
                        onerror="
                            const img = this;
                            const altSrc = '${alternativeCDN || ''}';
                            if (altSrc && img.src !== altSrc && !img.dataset.triedAlt) {
                                img.dataset.triedAlt = 'true';
                                img.src = altSrc;
                            } else {
                                img.onerror = null;
                                img.style.display = 'none';
                                const fallback = document.createElement('div');
                                fallback.className = 'skill-icon';
                                fallback.textContent = '${fallbackEmoji}';
                                fallback.style.fontSize = '3rem';
                                img.parentElement.insertBefore(fallback, img);
                                img.remove();
                            }
                        "
                        onload="
                            this.style.display = 'block';
                            this.style.opacity = '1';
                            this.style.visibility = 'visible';
                        "
                    />
                `;
            }
        } else {
            iconHTML = `<div class="skill-icon">${skill.icon || '💻'}</div>`;
        }
        
        return `
        <div class="skill-item" data-aos="fade-up" data-aos-delay="${index * 100}">
            ${iconHTML}
            <div class="skill-name">${skill.name}</div>
            ${skill.description ? `<div class="skill-description">${skill.description}</div>` : ''}
            <div class="skill-level">${skill.level || 'Expert'}</div>
        </div>
    `;
    }).join('');
}

// ========================================
// Image Loading Helper
// ========================================
function preloadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
    });
}

// ========================================
// Mobile Image Loading Helper
// ========================================
function ensureImagesLoad() {
    if (!isMobileDevice()) return; // Only run on mobile
    
    // First, ensure all emojis are visible
    const emojis = document.querySelectorAll('.skill-icon-emoji');
    emojis.forEach(emoji => {
        emoji.style.display = 'block';
        emoji.style.visibility = 'visible';
        emoji.style.opacity = '1';
    });
    
    // Ensure all skill icons load on mobile
    const skillIcons = document.querySelectorAll('.skill-icon-img');
    skillIcons.forEach((img) => {
        if (img.complete && img.naturalHeight > 0) {
            // Image loaded successfully, show it and hide emoji
            img.style.display = 'block';
            img.style.opacity = '1';
            img.style.visibility = 'visible';
            const emoji = img.parentElement.querySelector('.skill-icon-emoji');
            if (emoji) {
                emoji.style.display = 'none';
            }
        } else {
            // Image failed or not loaded, ensure emoji is visible
            const emoji = img.parentElement.querySelector('.skill-icon-emoji');
            if (emoji) {
                emoji.style.display = 'block';
                emoji.style.visibility = 'visible';
                emoji.style.opacity = '1';
            }
            
            // Try alternative CDN if not already tried
            const originalSrc = img.src;
            if (originalSrc && originalSrc.includes('cdn.jsdelivr.net') && !img.dataset.triedAlt) {
                const altSrc = getAlternativeCDN(originalSrc);
                if (altSrc) {
                    img.dataset.triedAlt = 'true';
                    img.src = altSrc;
                }
            }
        }
    });
    
    // Ensure all project images load on mobile
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        // Force display first
        img.style.display = 'block';
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        if (!img.complete || img.naturalHeight === 0) {
            // Image failed to load, try alternative paths
            const originalSrc = img.src;
            const baseUrl = window.location.origin;
            
            if (originalSrc && originalSrc.includes('/images/') && !img.dataset.triedPaths) {
                img.dataset.triedPaths = 'true';
                // Try different path variations
                const altPaths = [
                    baseUrl + '/images/' + originalSrc.split('/images/').pop(),
                    baseUrl + '/images/' + originalSrc.split('/').pop(),
                    originalSrc
                ];
                
                let currentPathIndex = 0;
                const tryNextPath = () => {
                    if (currentPathIndex < altPaths.length) {
                        img.src = altPaths[currentPathIndex];
                        currentPathIndex++;
                        if (currentPathIndex < altPaths.length) {
                            setTimeout(tryNextPath, 300);
                        }
                    }
                };
                
                setTimeout(tryNextPath, 200);
            } else if (!img.dataset.triedRetry) {
                // Retry original source once
                img.dataset.triedRetry = 'true';
                setTimeout(() => {
                    img.src = originalSrc;
                }, 200);
            }
        }
    });
}

// ========================================
// Projects Section
// ========================================
function renderProjects() {
    if (!config.projects || !config.projects.length) return;
    
    const projectsGrid = document.querySelector('.projects-grid');
    const filtersContainer = document.querySelector('.project-filters');
    
    if (!projectsGrid || !filtersContainer) return;
    
    // Get all unique tags
    const allTags = ['all'];
    config.projects.forEach(project => {
        if (project.tags) {
            project.tags.forEach(tag => {
                if (!allTags.includes(tag)) {
                    allTags.push(tag);
                }
            });
        }
    });
    
    // Render filter buttons
    filtersContainer.innerHTML = allTags.map(tag => `
        <button class="filter-btn ${tag === 'all' ? 'active' : ''}" data-filter="${tag}">
            ${tag.charAt(0).toUpperCase() + tag.slice(1)}
        </button>
    `).join('');
    
    // Render projects
    renderProjectsGrid('all');
    
    // Add filter event listeners
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            renderProjectsGrid(filter);
        });
    });
    
    // Add click handlers to project cards for GitHub links
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const githubUrl = card.getAttribute('data-github');
            if (githubUrl) {
                card.addEventListener('click', (e) => {
                    // Don't navigate if clicking on overlay links
                    if (!e.target.closest('.project-overlay')) {
                        window.open(githubUrl, '_blank', 'noopener,noreferrer');
                    }
                });
            }
        });
    }, 100);
}

function renderProjectsGrid(filter) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    let filteredProjects = config.projects;
    if (filter !== 'all') {
        filteredProjects = config.projects.filter(project => 
            project.tags && project.tags.includes(filter)
        );
    }
    
    const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%23ddd' width='400' height='250'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='16' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EProject Image%3C/text%3E%3C/svg%3E`;
    
    // Get base URL for absolute paths
    const baseUrl = window.location.origin;
    
    projectsGrid.innerHTML = filteredProjects.map((project, index) => {
        // Ensure image path is correct
        let imageSrc = project.image || placeholderImage;
        
        // If it's a relative path starting with /, make it absolute with base URL
        if (imageSrc.startsWith('/') && !imageSrc.startsWith('//') && !imageSrc.startsWith('http')) {
            // Make absolute URL using current domain
            imageSrc = baseUrl + imageSrc;
        } else if (imageSrc.startsWith('./')) {
            // Convert relative to absolute
            imageSrc = baseUrl + imageSrc.replace('./', '/');
        } else if (!imageSrc.startsWith('http') && !imageSrc.startsWith('data:')) {
            // If it's not a full URL and not a data URI, make it absolute
            if (!imageSrc.startsWith('/')) {
                imageSrc = baseUrl + '/' + imageSrc;
            } else {
                imageSrc = baseUrl + imageSrc;
            }
        }
        
        // Create unique ID for this image
        const imageId = `project-img-${index}-${Date.now()}`;
        
        // Always try to load real image, but show placeholder as fallback
        return `
        <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}" data-github="${project.github || ''}" style="cursor: ${project.github ? 'pointer' : 'default'};">
            <div class="project-image" style="position: relative; overflow: hidden; background: var(--bg-secondary) !important; min-height: 200px !important; display: block !important; visibility: visible !important;">
                <img 
                    id="${imageId}"
                    src="${imageSrc}" 
                    alt="${project.title}" 
                    loading="lazy" 
                    referrerpolicy="no-referrer" 
                    onerror="
                        const img = this;
                        const baseUrl = window.location.origin;
                        if (!img.dataset.triedPlaceholder) {
                            img.dataset.triedPlaceholder = 'true';
                            // Try alternative paths first
                            const currentSrc = img.src;
                            const altPaths = [
                                baseUrl + '/images/' + currentSrc.split('/images/').pop(),
                                baseUrl + '/images/' + currentSrc.split('/').pop(),
                                currentSrc.replace(window.location.origin + '/images/', '/images/'),
                                currentSrc.replace(window.location.origin + '/images/', './images/')
                            ];
                            let pathIndex = 0;
                            const tryNextPath = () => {
                                if (pathIndex < altPaths.length) {
                                    img.src = altPaths[pathIndex];
                                    pathIndex++;
                                    if (pathIndex < altPaths.length) {
                                        setTimeout(tryNextPath, 200);
                                    } else {
                                        // All paths failed, use placeholder
                                        img.onerror = null;
                                        img.src = '${placeholderImage}';
                                        img.style.display = 'block';
                                        img.style.opacity = '1';
                                        img.style.visibility = 'visible';
                                    }
                                }
                            };
                            setTimeout(tryNextPath, 100);
                        } else {
                            // Already tried, use placeholder
                            img.onerror = null;
                            img.src = '${placeholderImage}';
                            img.style.display = 'block';
                            img.style.opacity = '1';
                            img.style.visibility = 'visible';
                        }
                    " 
                    onload="
                        this.style.opacity = '1';
                        this.style.display = 'block';
                        this.style.visibility = 'visible';
                        this.style.width = '100%';
                        this.style.height = '100%';
                        this.style.objectFit = 'cover';
                    " 
                    style="display: block !important; opacity: 1 !important; visibility: visible !important; width: 100% !important; height: 100% !important; object-fit: cover !important; position: relative !important; z-index: 1 !important; background: var(--bg-secondary) !important;"
                />
                <div class="project-overlay">
                    ${project.demo ? `<a href="${project.demo}" target="_blank" aria-label="View Demo" rel="noopener noreferrer" onclick="event.stopPropagation();">🔗</a>` : ''}
                    ${project.github ? `<a href="${project.github}" target="_blank" aria-label="View Code" rel="noopener noreferrer" onclick="event.stopPropagation();">📂</a>` : ''}
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${project.tags ? project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('') : ''}
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `;
    }).join('');
}

// ========================================
// Experience/Timeline Section
// ========================================
function renderTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    let timelineItems = [];
    
    // Add experience items
    if (config.experience && config.experience.length > 0) {
        timelineItems = [...config.experience];
    }
    
    // Add education item if it exists
    if (config.education) {
        const education = config.education;
        timelineItems.push({
            date: education.year || '',
            title: education.degree || '',
            company: education.institution || '',
            description: `${education.field || ''} - ${education.currentYear || ''} | CGPA: ${education.cgpa || ''} | ${education.location || ''}`
        });
    }
    
    if (timelineItems.length === 0) return;
    
    // Sort by date (newest first) - simple string comparison
    timelineItems.sort((a, b) => {
        if (a.date && b.date) {
            return b.date.localeCompare(a.date);
        }
        return 0;
    });
    
    timeline.innerHTML = timelineItems.map((item, index) => `
        <div class="timeline-item" data-aos="${index % 2 === 0 ? 'fade-right' : 'fade-left'}" data-aos-delay="${index * 100}">
            <div class="timeline-content">
                <div class="timeline-date">${item.date || ''}</div>
                <h3 class="timeline-title">${item.title || ''}</h3>
                <div class="timeline-company">${item.company || ''}</div>
                <p class="timeline-description">${item.description || ''}</p>
            </div>
            <div class="timeline-dot"></div>
        </div>
    `).join('');
}

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    // Initialize EmailJS when DOM is ready
    function initEmailJS() {
        if (typeof emailjs !== 'undefined' && config.emailjs) {
            const { serviceId, templateId, publicKey } = config.emailjs;
            if (serviceId && templateId && publicKey && 
                serviceId !== 'YOUR_SERVICE_ID' && 
                templateId !== 'YOUR_TEMPLATE_ID' && 
                publicKey !== 'YOUR_PUBLIC_KEY') {
                try {
                    emailjs.init(publicKey);
                    console.log('EmailJS initialized successfully');
                } catch (error) {
                    console.error('Error initializing EmailJS:', error);
                }
            }
        }
    }
    
    // Initialize EmailJS when ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEmailJS);
    } else {
        // If EmailJS is already loaded, initialize immediately
        if (typeof emailjs !== 'undefined') {
            initEmailJS();
        } else {
            // Wait for EmailJS to load
            window.addEventListener('load', initEmailJS);
        }
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Get form values
        const formData = {
            from_name: document.getElementById('name').value.trim(),
            from_email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim(),
            to_email: config.contact?.email || 'tharunkumar9113@gmail.com'
        };
        
        // Validate form
        if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.from_email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        submitButton.style.opacity = '0.7';
        
        try {
            // Check if EmailJS is configured
            if (typeof emailjs !== 'undefined' && config.emailjs) {
                const { serviceId, templateId, publicKey } = config.emailjs;
                
                if (serviceId && templateId && publicKey && 
                    serviceId !== 'YOUR_SERVICE_ID' && 
                    templateId !== 'YOUR_TEMPLATE_ID' && 
                    publicKey !== 'YOUR_PUBLIC_KEY') {
                    
                    // Ensure EmailJS is initialized
                    try {
                        emailjs.init(publicKey);
                    } catch (initError) {
                        // Already initialized, ignore
                    }
                    
                    // Send email using EmailJS
                    const response = await emailjs.send(serviceId, templateId, formData);
                    
                    console.log('Email sent successfully:', response);
                    showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
                    contactForm.reset();
                } else {
                    // EmailJS not configured, use mailto as fallback
                    console.warn('EmailJS not fully configured');
                    sendMailtoFallback(formData);
                }
            } else {
                // EmailJS not available, use mailto as fallback
                console.warn('EmailJS library not loaded');
                sendMailtoFallback(formData);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            let errorMessage = 'Failed to send message. ';
            
            // Provide more specific error messages
            if (error.text) {
                errorMessage += `Error: ${error.text}. `;
            } else if (error.message) {
                errorMessage += `Error: ${error.message}. `;
            }
            
            errorMessage += 'Please try again or contact me directly at ' + (config.contact?.email || 'tharunkumar9113@gmail.com');
            showFormMessage(errorMessage, 'error');
        } finally {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            submitButton.style.opacity = '1';
        }
    });
}

// Fallback to mailto if EmailJS is not configured
function sendMailtoFallback(formData) {
    const mailtoLink = `mailto:${formData.to_email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.from_name} (${formData.from_email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    showFormMessage('Opening your email client... If it doesn\'t open, please email me directly at ' + formData.to_email, 'info');
}

// Show form message
function showFormMessage(message, type = 'info') {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message-${type}`;
    messageEl.textContent = message;
    
    // Insert before submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    contactForm.insertBefore(messageEl, submitButton);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.style.opacity = '0';
            messageEl.style.transform = 'translateY(-10px)';
            setTimeout(() => messageEl.remove(), 300);
        }
    }, 5000);
}

// ========================================
// Update Contact Information
// ========================================
function updateContactInfo() {
    if (!config.contact) return;
    
    const { email, phone, location } = config.contact;
    
    // Update by ID for more reliable selection
    const emailElement = document.getElementById('contact-email');
    const phoneElement = document.getElementById('contact-phone');
    const locationElement = document.getElementById('contact-location');
    
    if (email && emailElement) {
        emailElement.textContent = email;
    }
    if (phone && phoneElement) {
        phoneElement.textContent = phone;
    }
    if (location && locationElement) {
        locationElement.textContent = location;
    }
}

// ========================================
// Update About Section
// ========================================
function updateAboutSection() {
    // Update name in about section
    const aboutName = document.getElementById('about-name');
    if (aboutName && config.personalInfo && config.personalInfo.name) {
        aboutName.textContent = config.personalInfo.name;
    }
    
    if (!config.about) return;
    
    // Update bio
    const aboutBio = document.getElementById('about-bio');
    if (aboutBio && config.about.bio) {
        // Split bio into paragraphs and create new paragraphs
        const bioParagraphs = config.about.bio.split('\n').filter(p => p.trim());
        aboutBio.innerHTML = bioParagraphs.map(para => `<p>${para.trim()}</p>`).join('');
    }
    
    // Update stats dynamically
    if (config.about.stats && config.about.stats.length > 0) {
        const statsContainer = document.querySelector('.about-stats');
        if (statsContainer) {
            statsContainer.innerHTML = config.about.stats.map((stat, index) => `
                <div class="stat-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="stat-number" data-target="${stat.value}">0</div>
                    <div class="stat-label">${stat.label}</div>
                </div>
            `).join('');
            
            // Re-initialize stats animation after rendering
            setTimeout(() => {
                animateStats();
            }, 100);
        }
    }
}

// ========================================
// GSAP Animations
// ========================================
function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect for hero section - reversed (starts visible, fades on scroll)
    // Disable on mobile devices
    if (window.innerWidth > 768) {
        gsap.fromTo('.hero-image', 
            {
                opacity: 1,
                y: 0,
                filter: 'contrast(1) brightness(1)'
            },
            {
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: 30,
                opacity: 0.7,
                filter: 'contrast(0.8) brightness(0.9)'
            }
        );
    }
    
    // Floating animation for shapes
    gsap.to('.shape-1', {
        y: 30,
        x: 20,
        rotation: 360,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    gsap.to('.shape-2', {
        y: -30,
        x: -20,
        rotation: -360,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    gsap.to('.shape-3', {
        y: 20,
        x: 15,
        rotation: 180,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
    
    // Fade in animations with stagger
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            opacity: 0,
            y: 50,
            scale: 0.8,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)'
        });
    });
    
    gsap.utils.toArray('.project-card').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%'
            },
            opacity: 0,
            y: 50,
            rotation: 5,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%'
            },
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 1,
            ease: 'power2.out'
        });
    });
    
    // Stats counter animation with GSAP
    gsap.utils.toArray('.stat-item').forEach(item => {
        const numberElement = item.querySelector('.stat-number');
        if (numberElement) {
            const target = parseFloat(numberElement.getAttribute('data-target'));
            if (!isNaN(target)) {
                ScrollTrigger.create({
                    trigger: item,
                    start: 'top 80%',
                    onEnter: () => {
                        const isDecimal = target % 1 !== 0;
                        gsap.to({ value: 0 }, {
                            value: target,
                            duration: 2,
                            ease: 'power2.out',
                            onUpdate: function() {
                                if (isDecimal) {
                                    numberElement.textContent = this.targets()[0].value.toFixed(2);
                                } else {
                                    numberElement.textContent = Math.floor(this.targets()[0].value);
                                }
                            }
                        });
                    }
                });
            }
        }
    });
    
    // Parallax scroll for sections - Disable on mobile
    if (window.innerWidth > 768) {
        gsap.utils.toArray('section').forEach(section => {
            if (section.id !== 'home') {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1
                    },
                    y: 50,
                    opacity: 0.8
                });
            }
        });
    }
}

// Initialize GSAP animations when ready
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGSAPAnimations);
        window.addEventListener('gsapReady', initGSAPAnimations);
    } else {
        initGSAPAnimations();
    }
}

// ========================================
// Initialize Everything
// ========================================
// Initialize mobile detection immediately
window.IS_MOBILE = isMobileDevice();

document.addEventListener('DOMContentLoaded', () => {
    // Re-check mobile status
    window.IS_MOBILE = isMobileDevice();
    
    updateHeroSection();
    updateAboutSection();
    updateContactInfo();
    renderSkills();
    renderProjects();
    renderTimeline();
    
    // Only use animateStats if GSAP is not available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        animateStats();
    }
    
    // Update page title
    if (config.personalInfo && config.personalInfo.name) {
        document.title = `${config.personalInfo.name} | Portfolio`;
    }
    
    // Update meta description
    if (config.personalInfo && config.personalInfo.bio) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = config.personalInfo.bio;
        }
    }
    
    // Initialize GSAP animations after a short delay to ensure DOM is ready
    setTimeout(() => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            // Re-run GSAP animations setup after content is rendered
            const event = new Event('gsapReady');
            window.dispatchEvent(event);
        }
        
        // Force show emojis on mobile - CRITICAL - runs multiple times
        const forceShowEmojis = () => {
            const screenWidth = window.innerWidth || document.documentElement.clientWidth || 0;
            const isMobile = screenWidth <= 768 || isMobileDevice();
            
            if (isMobile) {
                // Find ALL possible emoji containers
                const selectors = [
                    '.skill-icon-emoji-mobile',
                    '.skill-icon-emoji',
                    '.skill-item div[class*="emoji"]',
                    '.skill-item div[data-skill-name]',
                    '.skill-item > div:first-child'
                ];
                
                selectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                        if (el && (el.textContent || el.innerHTML) && el.textContent.trim().length > 0 && !el.classList.contains('skill-name') && !el.classList.contains('skill-level') && !el.classList.contains('skill-description')) {
                            el.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; font-size: 3rem !important; margin: 0 auto 1rem !important; text-align: center !important; line-height: 64px !important; height: 64px !important; width: 100% !important;';
                        }
                    });
                });
                
                // Also check skill items directly
                const skillItems = document.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    const firstDiv = item.querySelector('div:first-of-type');
                    if (firstDiv && firstDiv.textContent && firstDiv.textContent.trim().length > 0 && !firstDiv.classList.contains('skill-name') && !firstDiv.classList.contains('skill-level') && !firstDiv.classList.contains('skill-description')) {
                        firstDiv.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; font-size: 3rem !important; margin: 0 auto 1rem !important; text-align: center !important; line-height: 64px !important; height: 64px !important; width: 100% !important;';
                    }
                });
            }
        };
        
        // Run immediately and multiple times
        forceShowEmojis();
        setTimeout(forceShowEmojis, 100);
        setTimeout(forceShowEmojis, 500);
        setTimeout(forceShowEmojis, 1000);
        
        if (isMobileDevice()) {
            
            // Ensure images load on mobile devices
            ensureImagesLoad();
            // Retry after delays to handle slow network connections
            setTimeout(ensureImagesLoad, 500);
            setTimeout(ensureImagesLoad, 1500);
        }
    }, 100);
    
    // Also ensure images load when window loads completely
    window.addEventListener('load', () => {
        // Force show emojis - runs multiple times
        const forceShowEmojisOnLoad = () => {
            const screenWidth = window.innerWidth || document.documentElement.clientWidth || 0;
            const isMobile = screenWidth <= 768 || isMobileDevice();
            
            if (isMobile) {
                // Find ALL possible emoji containers
                const selectors = [
                    '.skill-icon-emoji-mobile',
                    '.skill-icon-emoji',
                    '.skill-item div[class*="emoji"]',
                    '.skill-item div[data-skill-name]',
                    '.skill-item > div:first-child'
                ];
                
                selectors.forEach(selector => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach(el => {
                        if (el && (el.textContent || el.innerHTML) && el.textContent.trim().length > 0 && !el.classList.contains('skill-name') && !el.classList.contains('skill-level') && !el.classList.contains('skill-description')) {
                            el.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; font-size: 3rem !important; margin: 0 auto 1rem !important; text-align: center !important; line-height: 64px !important; height: 64px !important; width: 100% !important;';
                        }
                    });
                });
                
                // Check skill items directly
                const skillItems = document.querySelectorAll('.skill-item');
                skillItems.forEach(item => {
                    const firstDiv = item.querySelector('div:first-of-type');
                    if (firstDiv && firstDiv.textContent && firstDiv.textContent.trim().length > 0 && !firstDiv.classList.contains('skill-name') && !firstDiv.classList.contains('skill-level') && !firstDiv.classList.contains('skill-description')) {
                        firstDiv.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; font-size: 3rem !important; margin: 0 auto 1rem !important; text-align: center !important; line-height: 64px !important; height: 64px !important; width: 100% !important;';
                    }
                });
            }
        };
        
        forceShowEmojisOnLoad();
        setTimeout(forceShowEmojisOnLoad, 100);
        setTimeout(forceShowEmojisOnLoad, 500);
        setTimeout(forceShowEmojisOnLoad, 1000);
        
        if (isMobileDevice()) {
            
            ensureImagesLoad();
            setTimeout(ensureImagesLoad, 1000);
        }
        
        // Add click handlers to project cards after they're rendered
        setTimeout(() => {
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                const githubUrl = card.getAttribute('data-github');
                if (githubUrl) {
                    card.style.cursor = 'pointer';
                    card.addEventListener('click', (e) => {
                        // Don't navigate if clicking on overlay links
                        if (!e.target.closest('.project-overlay') && !e.target.closest('a')) {
                            window.open(githubUrl, '_blank', 'noopener,noreferrer');
                        }
                    });
                }
            });
        }, 200);
    });
});

// ========================================
// Export for use in other modules
// ========================================
export { updateHeroSection, renderSkills, renderProjects, renderTimeline };

