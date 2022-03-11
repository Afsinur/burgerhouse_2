console.log(`section2`);
const s2LstDv = q_s(`.s2LstDv`);

const s2LstDv_tmp = (src, alt, h2, p) => {
  return `
        <div class="flx-d-c a-j-c">
            <div>
                <img src="${src}" alt="${alt}"/>
            </div>
            <h2>${h2}</h2>
            <p>${p}</p>
        </div>
    `;
};

const s2LstDv_arr = [
  {
    src: `img/section2/left.png`,
    alt: `left.png`,
    h2: `AIDEN HUNTER`,
    p: `Founder`,
  },
  {
    src: `img/section2/middle.png`,
    alt: `middle.png`,
    h2: `MIDDLE NAME`,
    p: `Co-Founder`,
  },
  {
    src: `img/section2/right.png`,
    alt: `right.png`,
    h2: `SOME NAME`,
    p: `Co-Founder`,
  },
];

//init
s2LstDv_arr.forEach(({ src, alt, h2, p }) => {
  s2LstDv.innerHTML += s2LstDv_tmp(src, alt, h2, p);
});
