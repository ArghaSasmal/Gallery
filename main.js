(function() {

    // ----- 20 ORIGINAL IMAGES -----
    const originalImages = [
        { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500', title: 'Mountain Sunset', category: 'nature', likes: 234 },
        { id: 2, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500', title: 'Foggy Forest', category: 'nature', likes: 189 },
        { id: 3, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500', title: 'Sunrise in Woods', category: 'nature', likes: 156 },
        { id: 4, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500', title: 'Lake View', category: 'nature', likes: 312 },
        { id: 5, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500', title: 'Waterfall', category: 'nature', likes: 278 },
        { id: 6, url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500', title: 'New York City', category: 'city', likes: 445 },
        { id: 7, url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500', title: 'Tokyo Night', category: 'city', likes: 367 },
        { id: 8, url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500', title: 'London Bridge', category: 'city', likes: 223 },
        { id: 9, url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500', title: 'Paris Street', category: 'city', likes: 198 },
        { id: 10, url: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500', title: 'Dubai Skyline', category: 'city', likes: 289 },
        { id: 11, url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500', title: 'Hamster', category: 'animals', likes: 167 },
        { id: 12, url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500', title: 'Happy Dog', category: 'animals', likes: 234 },
        { id: 13, url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500', title: 'Curious Cat', category: 'animals', likes: 189 },
        { id: 14, url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=500', title: 'Sea Turtle', category: 'animals', likes: 145 },
        { id: 15, url: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500', title: 'Red Panda', category: 'animals', likes: 256 },
        { id: 16, url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500', title: 'Circuit Board', category: 'technology', likes: 178 },
        { id: 17, url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500', title: 'Data Center', category: 'technology', likes: 145 },
        { id: 18, url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500', title: 'AI Technology', category: 'technology', likes: 234 },
        { id: 19, url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500', title: 'Laptop Setup', category: 'technology', likes: 198 },
        { id: 20, url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500', title: 'Workspace', category: 'technology', likes: 276 }
    ];

    // ----- TOP CAROUSEL IMAGES -----
    const topTwelve = [
        { id: 101, url: 'img.jpg', title: 'Tropical Beach', category: 'nature' },
        { id: 102, url: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500', title: 'Hot Air Balloon', category: 'travel' }, 
        { id: 103, url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500', title: 'Italian Coast', category: 'city' }, 
        { id: 104, url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500', title: 'Venice Canal', category: 'city' }, 
        { id: 105, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500', title: 'Lake Como', category: 'nature' }, 
        { id: 106, url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500', title: 'Pug', category: 'animals' }, 
        { id: 107, url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500', title: 'Golden Retriever', category: 'animals' }, 
        { id: 108, url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500', title: 'Kitten', category: 'animals' }, 
        { id: 109, url: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=500', title: 'Street Art', category: 'city' }, 
        { id: 110, url: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500', title: 'Abstract Colors', category: 'art' }, 
        { id: 111, url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500', title: 'Vintage Car', category: 'technology' }, 
        { id: 112, url: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=500', title: 'Workspace Lamp', category: 'technology' }
    ];

    const allImages = [...originalImages, ...topTwelve];

    let mainLikes = originalImages.map(img => img.likes);
    let mainLikedState = new Array(originalImages.length).fill(false);

    let currentFilter = 'all';
    let currentSearch = '';
    let currentImageIndex = 0;

    const mainGrid = document.getElementById('mainGrid');
    const loadingEl = document.getElementById('loading');
    const noResultsEl = document.getElementById('noResults');
    const searchInput = document.getElementById('searchInput');
    const filterOptions = document.querySelectorAll('.filter-option');
    const filterBtn = document.querySelector('.filter-btn');

    // ---------- RENDER TOP CAROUSEL ----------
    function renderTopCarousel() {

        const carouselInner = document.querySelector("#topCarousel .carousel-inner");
        const indicators = document.querySelector(".carousel-indicators");

        if(!carouselInner) return;

        let slidesHTML = "";
        let indicatorHTML = "";

        topTwelve.forEach((img, index) => {

            slidesHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img class="d-block w-100" src="${img.url}" 
                onclick="openLightbox(${originalImages.length + index})" 
                alt="${img.title}">
            </div>
            `;

            indicatorHTML += `
            <li data-target="#topCarousel" data-slide-to="${index}" 
            class="${index === 0 ? 'active' : ''}"></li>
            `;
        });

        carouselInner.innerHTML = slidesHTML;

        if(indicators){
            indicators.innerHTML = indicatorHTML;
        }
    }

    // ---------- FILTER ----------
    function getFilteredImages() {
        return originalImages.filter(img => {
            const f = currentFilter === 'all' || img.category === currentFilter;
            const s = img.title.toLowerCase().includes(currentSearch.toLowerCase());
            return f && s;
        });
    }

    window.toggleMainLike = function(index) {

        mainLikedState[index] = !mainLikedState[index];

        if (mainLikedState[index]) mainLikes[index]++;
        else mainLikes[index]--;

        renderStaticGrid();
    };

    function renderStaticGrid() {

        const filtered = getFilteredImages();

        if (!filtered.length) {
            noResultsEl.classList.add('active');
            mainGrid.innerHTML = '';
            return;
        }

        noResultsEl.classList.remove('active');

        let html = '';

        filtered.forEach(img => {

            const i = originalImages.findIndex(o => o.id === img.id);

            html += `
            <div class="gallery-item">
                <img src="${img.url}" loading="lazy" onclick="openLightbox(${i})">

                <div class="item-overlay">

                    <div class="item-title">${img.title}</div>
                    <div class="item-category">${img.category}</div>

                    <button class="like-btn ${mainLikedState[i] ? 'liked' : ''}"
                    onclick="event.stopPropagation();toggleMainLike(${i})">

                        <span>${mainLikedState[i] ? '❤️' : '♡'}</span>
                        <span>${mainLikes[i]}</span>

                    </button>

                </div>
            </div>
            `;
        });

        mainGrid.innerHTML = html;
    }

    // ---------- SEARCH ----------
    window.searchImages = function() {
        currentSearch = searchInput.value;
        renderStaticGrid();
    };

    // ---------- FILTER DROPDOWN ----------
    window.toggleFilter = function() {
        document.getElementById('filterOptions').classList.toggle('show');
    };

    filterOptions.forEach(opt => {
        opt.addEventListener('click', function() {

            filterOptions.forEach(o => o.classList.remove('active'));
            this.classList.add('active');

            currentFilter = this.dataset.filter;

            filterBtn.innerText =
                currentFilter === 'all'
                ? 'All Categories'
                : currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);

            document.getElementById('filterOptions').classList.remove('show');

            renderStaticGrid();
        });
    });

    document.addEventListener('click', e => {
        if (!e.target.closest('.filter-dropdown'))
            document.getElementById('filterOptions').classList.remove('show');
    });

    // ---------- LIGHTBOX ----------
    window.openLightbox = function(index) {

        currentImageIndex = index;
        const img = allImages[index];

        document.getElementById('lightboxImg').src = img.url;

        document.getElementById('lightboxInfo').innerHTML =
            `<h3>${img.title}</h3>
             <p>Category: ${img.category || 'unknown'} | ❤️ ${img.likes || 0}</p>`;

        document.getElementById('lightbox').classList.add('active');

        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function() {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    window.changeImage = function(direction) {

        currentImageIndex += direction;

        if (currentImageIndex < 0) currentImageIndex = allImages.length - 1;
        if (currentImageIndex >= allImages.length) currentImageIndex = 0;

        const img = allImages[currentImageIndex];

        document.getElementById('lightboxImg').src = img.url;

        document.getElementById('lightboxInfo').innerHTML =
            `<h3>${img.title}</h3>
             <p>Category: ${img.category || 'unknown'} | ❤️ ${img.likes || 0}</p>`;
    };

    document.addEventListener('keydown', e => {

        if (!document.getElementById('lightbox').classList.contains('active')) return;

        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'Escape') closeLightbox();
    });

    // ---------- INIT ----------
    document.addEventListener('DOMContentLoaded', () => {

        loadingEl.classList.add('active');

        setTimeout(() => {

            renderTopCarousel();
            renderStaticGrid();

            loadingEl.classList.remove('active');

        }, 300);

    });

})();