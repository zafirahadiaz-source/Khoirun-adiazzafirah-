// ===== PORTFOLIO DATA (LocalStorage) =====
const defaultProjects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        description: "Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        link: "#",
        status: "published",
        date: "2026-08-15"
    },
    {
        id: 2,
        title: "Fitness Tracker App",
        category: "app",
        description: "Aplikasi pelacak kebugaran dengan AI-powered workout recommendations dan progress tracking real-time.",
        image: "https://images.unsplash.com/photo-1551650975-196hud09e2c0?w=600&h=400&fit=crop",
        link: "#",
        status: "published",
        date: "2026-07-20"
    },
    {
        id: 3,
        title: "Brand Identity - TechStart",
        category: "branding",
        description: "Desain identitas brand lengkap untuk startup teknologi termasuk logo, color palette, typography, dan brand guidelines.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
        link: "#",
        status: "published",
        date: "2026-06-10"
    },
    {
        id: 4,
        title: "Dashboard Analytics",
        category: "web",
        description: "Dashboard analitik interaktif dengan visualisasi data real-time dan laporan otomatis untuk bisnis enterprise.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        link: "#",
        status: "published",
        date: "2026-05-25"
    },
    {
        id: 5,
        title: "Food Delivery App",
        category: "app",
        description: "Aplikasi pengiriman makanan dengan fitur live tracking, rating system, dan rekomendasi berbasis lokasi.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
        link: "#",
        status: "published",
        date: "2026-04-18"
    },
    {
        id: 6,
        title: "Luxury Brand Redesign",
        category: "branding",
        description: "Redesign brand identity untuk merek fashion luxury dengan pendekatan minimalis dan elegan.",
        image: "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=600&h=400&fit=crop",
        link: "#",
        status: "draft",
        date: "2026-03-05"
    }
];

const defaultMessages = [
    {
        id: 1,
        name: "Ahmad Rizky",
        email: "ahmad@email.com",
        subject: "Project Website Company Profile",
        message: "Halo, saya tertarik untuk membuat website company profile untuk bisnis saya. Bisa diskusi lebih lanjut?",
        date: "2026-09-08"
    },
    {
        id: 2,
        name: "Siti Nurhaliza",
        email: "siti@email.com",
        subject: "Redesign Logo & Branding",
        message: "Saya ingin meredesain logo dan branding untuk toko online saya. Berapa estimasi biayanya?",
        date: "2026-09-07"
    },
    {
        id: 3,
        name: "Budi Santoso",
        email: "budi@email.com",
        subject: "Kolaborasi Project Mobile App",
        message: "Hi, saya dari agency digital. Mau ajak kolaborasi untuk project mobile app klien kami.",
        date: "2026-09-05"
    }
];

// Initialize data
function initData() {
    if (!localStorage.getItem('portfolio_projects')) {
        localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects));
    }
    if (!localStorage.getItem('portfolio_messages')) {
        localStorage.setItem('portfolio_messages', JSON.stringify(defaultMessages));
    }
}

function getProjects() {
    return JSON.parse(localStorage.getItem('portfolio_projects')) || [];
}

function saveProjects(projects) {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
}

function getMessages() {
    return JSON.parse(localStorage.getItem('portfolio_messages')) || [];
}

// ===== CURSOR EFFECT =====
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .portfolio-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.width = '60px';
            follower.style.height = '60px';
            follower.style.opacity = '0.3';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.width = '40px';
            follower.style.height = '40px';
            follower.style.opacity = '0.5';
        });
    });
}

// ===== NAVIGATION =====
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Scroll effect
window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    }

    // Active nav link
    updateActiveNav();

    // Animate skill bars
    animateSkillBars();

    // Counter animation
    animateCounters();
});

// Hamburger menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Nav links click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active nav on scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
}

// ===== COUNTER ANIMATION =====
let countersAnimated = false;
function animateCounters() {
    if (countersAnimated) return;
    const stats = document.querySelector('.hero-stats');
    if (!stats) return;

    const rect = stats.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        countersAnimated = true;
        document.querySelectorAll('.stat-number').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 30);
        });
    }
}

// ===== SKILL BARS ANIMATION =====
let skillsAnimated = false;
function animateSkillBars() {
    if (skillsAnimated) return;
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;

    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
        skillsAnimated = true;
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const width = bar.getAttribute('data-width');
            setTimeout(() => {
                bar.style.width = width + '%';
            }, 300);
        });
    }
}

// ===== PORTFOLIO RENDERING =====
function renderPortfolio(filter = 'all') {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    const projects = getProjects().filter(p => p.status === 'published');
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    grid.innerHTML = filtered.map(project => `
        <div class="portfolio-card" data-category="${project.category}" onclick="openProjectModal(${project.id})">
            <div class="portfolio-card-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop'">
                <div class="portfolio-card-overlay">
                    <div class="overlay-btn">
                        <i class="fas fa-eye"></i>
                    </div>
                </div>
            </div>
            <div class="portfolio-card-info">
                <h4>${project.title}</h4>
                <p>${project.description.substring(0, 60)}...</p>
                <span class="portfolio-card-tag">${getCategoryName(project.category)}</span>
            </div>
        </div>
    `).join('');
}

function getCategoryName(cat) {
    const names = { web: 'Web Design', app: 'App Design', branding: 'Branding' };
    return names[cat] || cat;
}

// Portfolio Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.getAttribute('data-filter'));
    });
});

// Project Modal
function openProjectModal(id) {
    const project = getProjects().find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById('portfolioModal');
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = getCategoryName(project.category);
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalLink').href = project.link || '#';
    modal.classList.add('active');
}

const modalClose = document.getElementById('modalClose');
if (modalClose) {
    modalClose.addEventListener('click', () => {
        document.getElementById('portfolioModal').classList.remove('active');
    });
}

// Close modal on outside click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const inputs = contactForm.querySelectorAll('input, textarea');

        const message = {
            id: Date.now(),
            name: inputs[0].value,
            email: inputs[1].value,
            subject: inputs[2].value || 'Tanpa Subjek',
            message: inputs[3].value,
            date: new Date().toISOString().split('T')[0]
        };

        const messages = getMessages();
        messages.unshift(message);
        localStorage.setItem('portfolio_messages', JSON.stringify(messages));

        contactForm.reset();
        showToast('Pesan berhasil dikirim! Terima kasih.', 'success');
    });
}

// ===== ADMIN PANEL =====
// Login
const loginForm = document.getElementById('loginForm');
const loginScreen = document.getElementById('loginScreen');
const adminDashboard = document.getElementById('adminDashboard');

if (loginForm) {
    // Check if already logged in
    if (sessionStorage.getItem('admin_logged_in') === 'true') {
        loginScreen.style.display = 'none';
        adminDashboard.style.display = 'flex';
        initAdminDashboard();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username === 'admin' && password === 'admin123') {
            sessionStorage.setItem('admin_logged_in', 'true');
            loginScreen.style.display = 'none';
            adminDashboard.style.display = 'flex';
            initAdminDashboard();
            showToast('Login berhasil! Selamat datang, Admin.', 'success');
        } else {
            showToast('Username atau password salah!', 'error');
        }
    });
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sessionStorage.removeItem('admin_logged_in');
        loginScreen.style.display = 'flex';
        adminDashboard.style.display = 'none';
        showToast('Berhasil logout.', 'info');
    });
}

// Sidebar Navigation
const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.getAttribute('data-section');

        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
        document.getElementById(section + 'Section').classList.add('active');
    });
});

// Sidebar Toggle (Mobile)
const sidebarToggle = document.getElementById('sidebarToggle');
const adminSidebar = document.querySelector('.admin-sidebar');
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        adminSidebar.classList.toggle('open');
    });
}

// Initialize Admin Dashboard
function initAdminDashboard() {
    renderAdminTable();
    renderMessages();
    updateDashboardStats();
    setCurrentDate();
}

// Dashboard Stats
function updateDashboardStats() {
    const projects = getProjects();
    const messages = getMessages();
    document.getElementById('totalProjects').textContent = projects.length;
    document.getElementById('totalMessages').textContent = messages.length;
}

// Current Date
function setCurrentDate() {
    const dateEl = document.getElementById('currentDate');
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.textContent = new Date().toLocaleDateString('id-ID', options);
    }
}

// Admin Table
function renderAdminTable() {
    const tbody = document.getElementById('portfolioTableBody');
    if (!tbody) return;

    const projects = getProjects();
    tbody.innerHTML = projects.map(project => `
        <tr>
            <td><img src="${project.image}" alt="${project.title}" class="table-image" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=75&fit=crop'"></td>
            <td><strong>${project.title}</strong></td>
            <td>${getCategoryName(project.category)}</td>
            <td>${formatDate(project.date)}</td>
            <td><span class="status-badge ${project.status}">${project.status === 'published' ? 'Published' : 'Draft'}</span></td>
            <td>
                <div class="table-actions">
                    <button class="table-btn" onclick="editProject(${project.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="table-btn delete" onclick="deleteProject(${project.id})" title="Hapus">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Messages
function renderMessages() {
    const list = document.getElementById('messagesList');
    if (!list) return;

    const messages = getMessages();
    list.innerHTML = messages.map(msg => `
        <div class="message-item">
            <div class="message-avatar">${msg.name.charAt(0)}</div>
            <div class="message-content">
                <h4>${msg.name} <span style="color:var(--text-muted);font-weight:400;font-size:0.8rem;">(${msg.email})</span></h4>
                <p><strong>${msg.subject}</strong></p>
                <p>${msg.message}</p>
                <span>${formatDate(msg.date)}</span>
            </div>
        </div>
    `).join('');
}

// ===== CRUD OPERATIONS =====
let currentEditId = null;
let deleteTargetId = null;

// Add Project
const addProjectBtn = document.getElementById('addProjectBtn');
const projectModal = document.getElementById('projectModal');
const projectModalClose = document.getElementById('projectModalClose');
const cancelProject = document.getElementById('cancelProject');

if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
        currentEditId = null;
        document.getElementById('projectModalTitle').textContent = 'Tambah Project Baru';
        document.getElementById('projectForm').reset();
        document.getElementById('imagePreview').style.display = 'none';
        document.getElementById('uploadArea').style.display = 'block';
        projectModal.classList.add('active');
    });
}

if (projectModalClose) {
    projectModalClose.addEventListener('click', () => projectModal.classList.remove('active'));
}

if (cancelProject) {
    cancelProject.addEventListener('click', () => projectModal.classList.remove('active'));
}

// Edit Project
function editProject(id) {
    const project = getProjects().find(p => p.id === id);
    if (!project) return;

    currentEditId = id;
    document.getElementById('projectModalTitle').textContent = 'Edit Project';
    document.getElementById('projectId').value = project.id;
    document.getElementById('projectTitle').value = project.title;
    document.getElementById('projectCategory').value = project.category;
    document.getElementById('projectDescription').value = project.description;
    document.getElementById('projectLink').value = project.link || '';
    document.getElementById('projectStatus').value = project.status;

    // Show image preview
    document.getElementById('previewImg').src = project.image;
    document.getElementById('imagePreview').style.display = 'block';
    document.getElementById('uploadArea').style.display = 'none';

    projectModal.classList.add('active');
}

// Delete Project
function deleteProject(id) {
    deleteTargetId = id;
    document.getElementById('deleteModal').classList.add('active');
}

const cancelDelete = document.getElementById('cancelDelete');
const confirmDelete = document.getElementById('confirmDelete');

if (cancelDelete) {
    cancelDelete.addEventListener('click', () => {
        document.getElementById('deleteModal').classList.remove('active');
        deleteTargetId = null;
    });
}

if (confirmDelete) {
    confirmDelete.addEventListener('click', () => {
        if (deleteTargetId) {
            let projects = getProjects();
            projects = projects.filter(p => p.id !== deleteTargetId);
            saveProjects(projects);
            renderAdminTable();
            renderPortfolio();
            updateDashboardStats();
            document.getElementById('deleteModal').classList.remove('active');
            showToast('Project berhasil dihapus!', 'success');
            deleteTargetId = null;
        }
    });
}

// Project Form Submit
const projectForm = document.getElementById('projectForm');
if (projectForm) {
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('projectTitle').value;
        const category = document.getElementById('projectCategory').value;
        const description = document.getElementById('projectDescription').value;
        const link = document.getElementById('projectLink').value;
        const status = document.getElementById('projectStatus').value;
        const previewImg = document.getElementById('previewImg').src;

        let projects = getProjects();

        if (currentEditId) {
            // Update
            projects = projects.map(p => {
                if (p.id === currentEditId) {
                    return { ...p, title, category, description, link, status, image: previewImg || p.image };
                }
                return p;
            });
            showToast('Project berhasil diperbarui!', 'success');
        } else {
            // Create
            const newProject = {
                id: Date.now(),
                title,
                category,
                description,
                image: previewImg || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
                link,
                status,
                date: new Date().toISOString().split('T')[0]
            };
            projects.unshift(newProject);
            showToast('Project baru berhasil ditambahkan!', 'success');
        }

        saveProjects(projects);
        renderAdminTable();
        renderPortfolio();
        updateDashboardStats();
        projectModal.classList.remove('active');
        projectForm.reset();
    });
}

// ===== IMAGE UPLOAD =====
const uploadArea = document.getElementById('uploadArea');
const projectImage = document.getElementById('projectImage');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeImage = document.getElementById('removeImage');

if (uploadArea) {
    uploadArea.addEventListener('click', () => projectImage.click());

    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    });

    projectImage.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleImageUpload(file);
        }
    });
}

function handleImageUpload(file) {
    if (file.size > 5 * 1024 * 1024) {
        showToast('Ukuran file maksimal 5MB!', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        imagePreview.style.display = 'block';
        uploadArea.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

if (removeImage) {
    removeImage.addEventListener('click', () => {
        previewImg.src = '';
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'block';
        projectImage.value = '';
    });
}

// ===== SETTINGS FORM =====
const settingsForm = document.getElementById('settingsForm');
if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Pengaturan berhasil disimpan!', 'success');
    });
}

const passwordForm = document.getElementById('passwordForm');
if (passwordForm) {
    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Password berhasil diubah!', 'success');
        passwordForm.reset();
    });
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        info: 'fas fa-info-circle'
    };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="${icons[type]}"></i>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.portfolio-card, .skill-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    initData();
    renderPortfolio();
    animateCounters();
});