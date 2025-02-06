// すべてのスクリプトを1つのDOMContentLoadedで実行
document.addEventListener('DOMContentLoaded', () => {
  // ハンバーガーメニューの設定
  const hamburger = document.getElementById('hamburger-menu');
  const sidebarMenu = document.getElementById('sidebarMainMenu');

  if (hamburger && sidebarMenu) {
    hamburger.addEventListener('click', () => {
      sidebarMenu.classList.toggle('active'); // activeクラスの切り替えで表示制御
    });
  } else {
    console.error('ハンバーガーメニューまたはサイドメニューが見つかりません！');
  }

  // カルーセルの設定
  const nextButton = document.getElementById('next');
  const carousel = document.querySelector('.carousel ul');
  const slides = Array.from(carousel?.children || []);
  const prevButton = document.getElementById('prev');

  let currentIndex = 0;

  function updateCarousel() {
    if (slides.length > 0) {
      const slideWidth = slides[0].getBoundingClientRect().width;
      const newTransformValue = -currentIndex * slideWidth;
      carousel.style.transform = `translateX(${newTransformValue}px)`; 
    }
  }

  // Next ボタンの動作
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      ul.style.transform = 'translayeX(-200px';  //画像の幅分ずらす      currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });
  } else {
    console.error('Nextボタンが見つかりません！');
  }

  // Prev ボタンの動作
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
      updateCarousel();
    });
  } else {
    console.error('Prevボタンが見つかりません！');
  }

  // ウィンドウサイズ変更時にスライド位置を調整
  window.addEventListener('resize', updateCarousel);

  // 初期表示を更新
  updateCarousel();

  // モーダルの設定
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeModal = document.querySelector('.close');

  if (modal && modalImage && closeModal) {
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
  } else {
    console.error('モーダル要素が見つかりません！');
  }
});
