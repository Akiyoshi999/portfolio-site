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
    image: "/images/product/Portfolio/hp-0.jpg",
    images: [
      "/images/product/Portfolio/hp-0.jpg",
      "/images/product/Portfolio/hp-1.png",
      "/images/product/Portfolio/hp-2.png",
    ],
    describe: [
      {
        title: "概要",
        content: `このWebページです。
        私の経歴、スキル、趣味が1目でわかるようなHPがあれば私のことをよく知ってもらえると思い、作成しました。
      `,
      },
      {
        title: "意識したこと",
        content: `・SSRでなく、SGで動作するようにしました。
      ・SGサイトでもお問い合わせができるよう、お問い合わせ処理はサーバレスで実装しました。また、AWSのリソースは全てClooudFormationを利用して作成しました。
      ・アトミックデザインを参考に、プログラムを管理、修正しやすいようにしました。
      `,
      },
      {
        title: "Github",
        content: "https://github.com/Akiyoshi999/portfolio-site",
      },
    ],
    usedSkills: ["JavaScript", "HTML/CSS", "React/MUI", "AWS"],
  },
  {
    title: "Ouraスコア収集プログラム",
    image: "/images/product/OuraGet/oura-1.png",
    images: [
      "/images/product/OuraGet/oura-1.png",
      "/images/product/OuraGet/oura-2.png",
    ],
    describe: [
      {
        title: "概要",
        content: `Oura Ringのウェアラブルデバイスで収集したデータをLINEに通知するプログラム。
        当日のスコアを確認するには専用のAppを開かないといけないのが面倒だったので、その手間を省きたいのと、AWSを利用したサービスを作りたいと思い作成しました。
      `,
      },
      {
        title: "工夫したこと",
        content: `・Code Buildを使用してCI/CD環境を作成しました。
        ・各Lambdaの単体テストを作成し、テスト結果をCodeBuildレポートで表示するようにしました。
        ・CodeBuildをローカル環境でデバックし、その後Code Buildで実行するようにしました。
      `,
      },
      {
        title: "Github",
        content: "https://github.com/Akiyoshi999/Oura_data_get_for_AWS",
      },
    ],
    usedSkills: ["Python/Pytest", "Docker", "AWS SAM"],
  },
  {
    title: "犬・猫推定アプリ",
    image: "/images/product/CatdogClassifiy/top.jpg",
    images: ["/images/product/CatdogClassifiy/demo.gif"],
    describe: [
      {
        title: "概要",
        content: `Web上でアップロードされた画像に対して、猫か犬かを推定するアプリです。
        機械学習を使用したアプリとDjangoを使用したアプリを作成してみたかったので、作成しました。
        *現在は、Herokuの無料枠がなくなったので使用できなくなりました。
      `,
      },
      {
        title: "工夫したこと",
        content: `・推定モデルにVGG16の転移学習したものを利用して学習精度を高めました。
・ローカル環境でデータを取得、モデルの学習をすると容量が圧迫されるのと、モデルの学習に時間がかかるため「google colaboratory」を利用して学習しました。`,
      },
      {
        title: "Github",
        content: "https://github.com/Akiyoshi999/CatdogClassifiy",
      },
    ],
    usedSkills: ["Python", "Django", "Heroku", "Colaboratory"],
  },
  {
    title: "学習帳ex",
    body: "このWebページです。",
    image: "/images/test.png",
    images: ["/images/test.png", "/images/yukari.jpg"],
    describe: [{ title: "意識したこと2", content: dummyText[0] }],
    usedSkills: ["JavaScript", "HTML/CSS", "Git", "React/MUI", "AWS"],
    preparationFlg: true,
  },
];

export { productSection, products };
