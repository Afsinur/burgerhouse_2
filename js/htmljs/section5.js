console.log(`section5`);
const s5_lstDv = q_s(`.s5-lstDv`);

const s5_lstDvArr = [
  { h1: `7K`, h2: `CUSTOMER` },
  { h1: `109`, h2: `OUTLETS` },
  { h1: `35`, h2: `COUNTRY` },
];

//INIT
s5_lstDvArr.forEach(({ h1, h2 }) => {
  s5_lstDv.innerHTML += `
        <div class="flx-d-c a-j-c">
            <h1>${h1}</h1>
            <h2>${h2}</h2>
        </div>
    `;
});
