(function () {
  const marqueeString = document.querySelector(
    '.twcss-text-black.twcss-text-5xl.twcss-uppercase.twcss-text-nowrap.twcss-space-x-3',
  );
  const marqueeContainer = marqueeString.parentNode;
  const clientWidth = window.outerWidth;
  const stringWidth = marqueeString.offsetWidth;
  const number = Math.floor(clientWidth / stringWidth);

  for (let i = 1; i < number; i++) {
    const clone = marqueeString.cloneNode(true);
    marqueeContainer.appendChild(clone);
  }

  const marqueeContainerClone = marqueeContainer.cloneNode(true);
  marqueeContainer.parentNode.appendChild(marqueeContainerClone);
})();
