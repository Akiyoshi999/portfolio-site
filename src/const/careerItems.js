import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import MicIcon from "@mui/icons-material/Mic";
import ComputerIcon from "@mui/icons-material/Computer";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const careerSection = { title: "My Career", body: "" };
const careers = [
  {
    date: { before: "2018-10", after: "2020-10" },
    icon: <AirplanemodeActiveIcon fontSize="inherit" />,
    title: "航空管制システム開発、保守",
    contents: [
      "結合テストの試験項目作成",
      "結合テストの試験実施",
      "結合テストのログ確認",
    ],
  },
  {
    date: { before: "2020-10", after: "2020-11" },
    icon: <MicIcon fontSize="inherit" />,
    title: "音声モニタリング分析ソフトの開発",
    contents: [
      "ダミーAPIの作成",
      "Ubuntuの開発環境構築、ネットワーク周り設定",
      "Raspberrypiのセットアップ、開発環境構築",
      "ローカルIPの検索プログラム作成",
      "テスト仕様書作成",
    ],
  },
  {
    date: { before: "2020-12", after: "2021-01" },
    icon: <ComputerIcon fontSize="inherit" />,
    title: "AWSサーバレスアプリの構築",
    contents: [
      "Lambda、APIGW、DynamoDBを利用してAPIの作成",
      "作成したAPIの単体テスト作成",
    ],
  },
  {
    date: { before: "2021-12", after: "" },
    icon: <ManageSearchIcon fontSize="inherit" />,
    title: "ログデータ収集・可視化製品(Splunk)の保守対応および、環境構築",
    contents: [
      "Splunk製品に関する顧客対応",
      "Splunk の環境構築に関する詳細設計書、単体テスト、結合テスト項目書作成",
      "Splunk環境の構築、単体テスト、結合テスト試験実施",
    ],
  },
];

export { careers, careerSection };
