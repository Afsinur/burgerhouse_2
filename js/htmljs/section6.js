console.log(`section6`);
const s6_lstDv = q_s(`.s6-lstDv`);

const s6_lstDvArr = [
  {
    h2_1: `PACKAGE |`,
    src: `img/section6/card-burger.png`,
    alt: `card-burger.png`,
    h2_2: `10$`,
    p: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    href: `#`,
  },
  {
    h2_1: `PACKAGE ||`,
    src: `img/section6/card-burger.png`,
    alt: `card-burger.png`,
    h2_2: `20$`,
    p: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    href: `#`,
  },
  {
    h2_1: `PACKAGE |||`,
    src: `img/section6/card-burger.png`,
    alt: `card-burger.png`,
    h2_2: `30$`,
    p: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    href: `#`,
  },
];

//init
s6_lstDvArr.forEach(({ h2_1, src, alt, h2_2, p, href }) => {
  s6_lstDv.innerHTML += `
        <div class="flx-d-c a-j-c">
            <h2>${h2_1}</h2>
            <img src="${src}" alt="${alt}"/>
            <h2>${h2_2}</h2>
            <p>${p}</p>
            <a href="${href}">ORDER NOW</a>
        </div>
    `;
});
