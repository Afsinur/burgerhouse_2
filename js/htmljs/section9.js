console.log(`section9`);
const addListLinks = (...arg) => {
  arg.forEach(({ qs, add }) => {
    add.forEach(({ href, a_txt }) => {
      qs.innerHTML += `<li><a href="${href}">${a_txt}</a></li>`;
    });
  });
};

addListLinks(
  {
    qs: q_s(`.s9_ul_1`),
    add: [
      {
        href: `#`,
        a_txt: `<img src="img/section9/social/facebook.png" alt="facebook.png" />`,
      },
      {
        href: `#`,
        a_txt: `<img src="img/section9/social/instagram.png" alt="instagram.png" />`,
      },
      {
        href: `#`,
        a_txt: `<img src="img/section9/social/twitter.png" alt="twitter.png" />`,
      },
      {
        href: `#`,
        a_txt: `<img src="img/section9/social/whatsapp.png" alt="whatsapp.png" />`,
      },
    ],
  },
  {
    qs: q_s(`.s9_ul_2`),
    add: [
      {
        href: `#`,
        a_txt: `History`,
      },
      {
        href: `#`,
        a_txt: `Our Team`,
      },
      {
        href: `#`,
        a_txt: `Brand Guidelines`,
      },
      {
        href: `#`,
        a_txt: `Terms & Conditions`,
      },
      {
        href: `#`,
        a_txt: `Privacy Policy`,
      },
    ],
  },
  {
    qs: q_s(`.s9_ul_3`),
    add: [
      {
        href: `#`,
        a_txt: `How to Order`,
      },
      {
        href: `#`,
        a_txt: `Our Product`,
      },
      {
        href: `#`,
        a_txt: `Our Status Promo`,
      },
      {
        href: `#`,
        a_txt: `Payment Method`,
      },
    ],
  },
  {
    qs: q_s(`.s9_ul_4`),
    add: [
      {
        href: `#`,
        a_txt: `Contact Us`,
      },

      {
        href: `#`,
        a_txt: `Help`,
      },

      {
        href: `#`,
        a_txt: `Privacy`,
      },
    ],
  }
);
