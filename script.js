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
  const prevButton =document.getElementById('prev')
  const carousel = document.querySelector('.carousel ul');
  const slides = ul.children;   // li index
  let currentIndex = 0

  function updateButtons() {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  

    if (currentIndex === 0) {
      prevButton.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      nextButton.classList.add('hidden');
    }
  }
  updateButtons();



  function moveSlides() {
    const slideWidh = slideWidh[0].getBoundingClientRect().width;
    ul.style.transform = `translayeX(${ -1 * slideWidh * currentIndex}px`;

  }

 
  // Next ボタンの動作
    nextButton.addEventListener('click', () => {
      currentIndex++;//increment
      moveSlides();
      updateButtons();
    });

  // Next ボタンの動作
     nextButton.addEventListener('click', () => {
      currentIndex--;//decrement
      moveSlides();
      updateButtons();
    });
      

  
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