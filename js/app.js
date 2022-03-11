//selectors
const body_ = q_s(`body`);
const ifLoading = q_s(`.ifLoading`);
//vars
let res_ = 0;
const ftcArr = [
  `section1`,
  `section2`,
  `section3`,
  `section4`,
  `section5`,
  `section6`,
  `section7`,
  `section8`,
  `section9`,
];
//functions
//getPercent
const getPercent = (x, y) => (y * 100) / x;
//get_ftc
const get_ftc = async (url) => {
  let res = await fetch(url);
  let txt_data = await res.text();
  return txt_data;
};
//get_html
const get_html = async (get) => {
  //var
  let sl = `.${get}`;
  //insert Html
  q_s(sl).innerHTML = `<p class="ld-6">loading..</p>`;
  let txt_data_html = await get_ftc(`./html/${get}.html`);
  let txt_data_js = await get_ftc(`./js/htmljs/${get}.js`);
  let script_ = create_(`script`);
  //insert Html
  script_.innerHTML = txt_data_js;
  q_s(sl).innerHTML = `${txt_data_html}`;
  append_(q_s(sl), script_);
  //return
  return 1;
};
//stepBystep
const stepBystep = async () => {
  //vars
  let res = await get_html(ftcArr[res_]);
  res_ += res;
  let prcnt = getPercent(ftcArr.length, res_);
  //insert Html
  ifLoading.innerHTML = `load completed: ${prcnt.toFixed(2)}%`;
  //if
  if (ftcArr.length > res_) {
    stepBystep();
  }
  //if
  if (prcnt === 100) {
    setTimeout(() => {
      body_.style[`overflow`] = `unset`;
      ifLoading.style[`transform`] = `translateX(-100%)`;
    }, 150);
  }
};
//init
stepBystep();
