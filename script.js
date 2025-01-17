document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.carousel-control-prev');
  const nextButton = document.querySelector('.carousel-control-next');
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators li');

  let currentIndex = 0;

  // 画像を切り替える関数
  function changeSlide(index) {
    // すべての画像とインディケーターのactiveを外す
    carouselItems.forEach(item => item.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // 新しいスライドにactiveクラスを追加
    carouselItems[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // スライドを動かす
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
  }

  // 前のスライドへ
  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    changeSlide(currentIndex);
  });

  // 次のスライドへ
  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    changeSlide(currentIndex);
  });

  // インディケーターをクリックした場合
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function () {
      currentIndex = index;
      changeSlide(currentIndex);
    });
  });

  // 自動スライド（5秒ごとに切り替え）
  setInterval(function () {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    changeSlide(currentIndex);
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function() {
  var carouselHeight = document.querySelector('.carousel').offsetHeight; // カルーセルの高さを取得
  var menuArea = document.querySelector('.Menu_Area');
  
  menuArea.style.top = carouselHeight + 'px'; // カルーセルの下に配置
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
