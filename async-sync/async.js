const BASE_URL = "https://thatcopy.pw/catapi/rest/";

const catBttn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");

const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return data.webpurl;
};

const loadImg = async () => {
  catImg.src = await getCats();
};

catBttn.addEventListener("click", loadImg);

loadImg();
