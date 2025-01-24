document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const navMenu = document.getElementById('navMenu');

  hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
    hamburgerMenu.classList.toggle('open'); // ハンバーガーアイコンのスタイルを切り替え
  });
});

//corusel
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel ul");
  const slides = Array.from(carousel.children);
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;
});
  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const newTransformValue = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${newTransformValue}px)`; 

  // Next ボタンの動作
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
  });

  // Prev ボタンの動作
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  // ウィンドウサイズ変更時にスライド位置を調整
  window.addEventListener("resize", updateCarousel);
});


//モーダル
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.querySelector('.close');

  // 画像をクリックでモーダル表示
  document.querySelectorAll('.sectionMenu__img').forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImage.src = img.src;
    });
  });

  // モーダルを閉じる
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // モーダル外をクリックで閉じる
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
