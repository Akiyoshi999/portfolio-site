const dummyText = [
  `木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。
  名高い桟`,
];

const productSection = {
  title: "My Product",
  body: "",
  elId: "skill-product-section",
};

const products = [
  {
    title: "Akiyoshi Portfolio",
    body: "このWebページです。",
    image: "/images/test.png",
    images: ["/images/test.png", "/images/yukari.jpg"],
    describe: [
      { title: "意識したこと", content: dummyText[0] },
      { title: "意識したこと", content: dummyText[0] },
    ],
    usedSkills: ["JavaScript", "HTML/CSS", "Git", "React/MUI", "AWS"],
  },
  {
    title: "Akiyoshi Portfolio",
    body: "このWebページです。",
    image: "/images/test.png",
    images: ["/images/test.png", "/images/yukari.jpg"],
    describe: [{ title: "意識したこと2", content: dummyText[0] }],
    usedSkills: ["JavaScript", "HTML/CSS", "Git", "React/MUI", "AWS"],
  },
  {
    title: "Akiyoshi Portfolio",
    body: "このWebページです。",
    image: "/images/test.png",
    images: ["/images/test.png", "/images/yukari.jpg"],
    describe: [{ title: "意識したこと2", content: dummyText[0] }],
    usedSkills: ["JavaScript", "HTML/CSS", "Git", "React/MUI", "AWS"],
    preparationFlg: true,
  },
];

export { productSection, products };
