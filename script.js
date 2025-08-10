// Navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.section');

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all nav links
                    navLinks.forEach(nav => nav.classList.remove('active'));
                    
                    // Add active class to clicked nav link
                    this.classList.add('active');
                    
                    // Hide all sections
                    sections.forEach(section => section.classList.remove('active'));
                    
                    // Show target section
                    const targetId = this.getAttribute('href').substring(1);
                    document.getElementById(targetId).classList.add('active');
                    
                    // Scroll to top smoothly
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            });

            // Contact form submission
            document.getElementById('contactForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                // Simulate form submission
                alert(`Thank you ${name}! Your message has been received. We'll get back to you soon at ${email}.`);
                
                // Reset form
                this.reset();
            });

            // Add smooth scrolling for CTA button
            document.querySelector('.cta-button').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all nav links
                navLinks.forEach(nav => nav.classList.remove('active'));
                
                // Add active class to about nav link
                document.querySelector('a[href="#about"]').classList.add('active');
                
                // Hide all sections
                sections.forEach(section => section.classList.remove('active'));
                
                // Show about section
                document.getElementById('about').classList.add('active');
                
                // Scroll to top smoothly
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Add hover effects for cards
            const cards = document.querySelectorAll('.card, .member-card, .gallery-item');
            
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            // Add animation delays for cards
            const cardGrids = document.querySelectorAll('.card-grid, .member-grid, .gallery-grid');
            
            cardGrids.forEach(grid => {
                const gridCards = grid.querySelectorAll('.card, .member-card, .gallery-item');
                
                gridCards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 0.1}s`;
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            });

            // Mobile menu toggle (for smaller screens)
            const header = document.querySelector('header');
            let lastScrollY = window.scrollY;
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > lastScrollY) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
                lastScrollY = window.scrollY;
            });

            // Gallery functionality
            const imageFolders = {
                'bugesera': [
                    'IMG-20240721-WA0068.jpg',
                    'IMG-20240722-WA0024.jpg',
                    'IMG-20240722-WA0025.jpg',
                    'IMG-20240722-WA0026.jpg',
                    'IMG-20240721-WA0069.jpg'
                ],
                'kamonyi': [
                    'Screenshot 2025-08-06 145337.png',
                    'Screenshot 2025-08-06 145417.png',
                    'Screenshot 2025-08-06 145615.png',
                    'Screenshot 2025-08-06 145650.png',
                    'Screenshot 2025-08-06 145720.png',
                    'Screenshot 2025-08-06 145743.png',
                    'Screenshot 2025-08-06 145813.png'
                ],
                'kigali': [
                    'kgl.jpg',
                    'Screenshot 2025-08-09 195923.png',
                    'Screenshot 2025-08-09 200045.png'
                ],
                'ruyenzi': [
                    'IMG-20250417-WA0089.jpg',
                    'IMG-20250417-WA0090.jpg',
                    'IMG-20250417-WA0091.jpg',
                    'IMG-20250417-WA0092.jpg',
                    'IMG-20250417-WA0093.jpg'
                ],
                'school  vibes': [
                    'IMG-20250626-WA0116.jpg',
                    'IMG-20250626-WA0118.jpg',
                    'IMG-20250626-WA0315.jpg',
                    'IMG-20250626-WA0316.jpg',
                    'IMG-20250626-WA0318.jpg',
                    'IMG-20250626-WA0321.jpg'
                ]
            };

            const folderGallery = document.getElementById('folderGallery');
            const imageModal = document.getElementById('imageModal');
            const modalTitle = document.getElementById('modalTitle');
            const imageGrid = document.getElementById('imageGrid');
            const closeModalBtn = document.getElementById('closeModalBtn');

            // Create folder cards
            for (const folderName in imageFolders) {
                const images = imageFolders[folderName];
                const folderCard = document.createElement('div');
                folderCard.className = 'folder-card';
                folderCard.dataset.folder = folderName;
                
                folderCard.innerHTML = `
                    <div class="folder-icon">📁</div>
                    <div class="folder-name">${folderName.replace(/\s\s+/g, ' ')}</div>
                    <div class="folder-count">${images.length} images</div>
                `;
                
                folderCard.addEventListener('click', () => {
                    openModal(folderName, images);
                });
                
                folderGallery.appendChild(folderCard);
            }

            function openModal(folderName, images) {
                modalTitle.textContent = folderName.replace(/\s\s+/g, ' ');
                imageGrid.innerHTML = '';
                
                images.forEach(imageName => {
                    const imageItem = document.createElement('div');
                    imageItem.className = 'image-item';
                    
                    imageItem.innerHTML = `
                        <img src="images/${folderName}/${imageName}" alt="${imageName}">
                        <div class="image-caption">together we roar</div>
                    `;
                    
                    imageGrid.appendChild(imageItem);
                });
                
                imageModal.style.display = 'block';
            }

            function closeModal() {
                imageModal.style.display = 'none';
            }

            closeModalBtn.addEventListener('click', closeModal);

            window.addEventListener('click', (event) => {
                if (event.target === imageModal) {
                    closeModal();
                }
            });
        });