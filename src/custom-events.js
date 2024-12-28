import angularLogo from './angular.svg';
import javascriptLogo from './javascript.svg';
import reactLogo from './react.svg';
import viteLogo from './vite.svg';
import vueLogo from './vue.svg';

export const customEvents = (btnEl, imgEl) => {
  let currentLogoIndex = 0;

  imgEl.addEventListener('showImage', (event) => {
    event.target.setAttribute('src', event.detail.logo);
  });

  btnEl.addEventListener('click', (event) => {
    const logos = [angularLogo, javascriptLogo, reactLogo, viteLogo, vueLogo];
    let logoIndex = currentLogoIndex;

    while (currentLogoIndex === logoIndex) {
      logoIndex = Math.round(Math.random() * (logos.length - 1));

      if (currentLogoIndex !== logoIndex) {
        currentLogoIndex = logoIndex;
        break;
      }
    }

    imgEl.dispatchEvent(
      new CustomEvent('showImage', { detail: { logo: logos[logoIndex] } })
    );
  });
};
