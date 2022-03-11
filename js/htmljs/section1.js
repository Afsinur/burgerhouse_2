console.log(`section1`);
const s1Ul = q_s(`.s1Ul`);

const s1Ul_arr = [
  { href: ``, a_txt: `HOME` },
  { href: `product_`, a_txt: `PRODUCT` },
  { href: `promo_`, a_txt: `PROMO` },
  { href: `about_`, a_txt: `ABOUT` },
  { href: `contact_`, a_txt: `CONTACT` },
];

//init
s1Ul_arr.forEach(({ href, a_txt }) => {
  s1Ul.innerHTML += `<li><a href="#${href}">${a_txt}</a></li>`;
});
