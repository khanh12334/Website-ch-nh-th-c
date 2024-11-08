document.addEventListener("DOMContentLoaded", function() {
    // Hiệu ứng cho slogan khi tải trang
    const slogan = document.querySelector('.slogan');
    slogan.style.opacity = "0";
    slogan.style.transform = "translateY(-20px)";
    setTimeout(() => {
        slogan.style.transition = "opacity 1.5s ease, transform 1.5s ease";
        slogan.style.opacity = "1";
        slogan.style.transform = "translateY(0)";
    }, 500);

    // Hiệu ứng động cho các tiêu đề khi cuộn trang
    const sectionHeaders = document.querySelectorAll('section h2');
    const revealOnScroll = (elements, offset = 100) => {
        const scrollY = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollY;
            if (scrollY + viewportHeight >= elementTop + offset) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Khởi tạo hiệu ứng ẩn ban đầu cho các tiêu đề
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(50px)';
        header.style.transition = 'opacity 1s ease, transform 1s ease';
    });

    // Kích hoạt hiệu ứng khi cuộn trang
    window.addEventListener('scroll', () => revealOnScroll(sectionHeaders));

    // Hiệu ứng động cho các mục video
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    });

    // Kích hoạt hiệu ứng động khi cuộn đến phần video
    window.addEventListener('scroll', () => revealOnScroll(videoItems, 50));

    // Hiệu ứng hover cho các mục liên kết xã hội (YouTube, Facebook)
    const socialItems = document.querySelectorAll('.social-item');
    socialItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.1)';
            item.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
