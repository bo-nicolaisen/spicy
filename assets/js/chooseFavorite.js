const divs = document.querySelectorAll('#favoriteParent > div');

divs.forEach((div) => {
  div.addEventListener('click', () => {
    const clickedImage = div.querySelector('img');
    const mainImage = document.querySelector('#mainImage img');
    const mainImageSrc = mainImage.src;
    mainImage.src = clickedImage.src;
    clickedImage.src = mainImageSrc;
  });
});