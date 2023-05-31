# Akiyoshi Portfolio サイト

## 概要

齋藤のスキル、経歴、趣味が 1 目でわかるような Web サイト。
レスポンシブデザインに対応しているので、PC、タブレット、スマホどの端末から見ても見やすい web ページとなっている。

## 工夫した点

- Github では Issue や Issue 毎にブランチを切って、実際の開発現場を意識して開発しました。
- SSR ではなく、SG で実装しました。機能的に SSR である必要がなかったことと、SG の方がコストが低かったので。
- レスポンシブデザインでみやすいレイアウトにしました。
- SG サイトではあるが、お問い合わせ機能はほしかったので、お問い合わせ処理をサーバレスで実装しました。
  お問い合わせ処理のコードはこちら：　https://github.com/Akiyoshi999/static-site-mail-server
- サーバレスは AWS を使用して、Cloud Formation を利用して作成しました。
- アトミックデザイン（Atomic Design）を意識し、プログラムを管理、修正しやすいようコンポーネントを作成しました。

## 課題や次回挑戦したいこと。

- デザインやレイアウトはその場、その場で修正して時間がかかってしまった。次回は、Figma などでデザインを決めて、実装したいと思います。
- サーバレスの AWS サービスが好きなので、次回は DynamoDB などを利用したサービスを作成してみたい。

## HP
### webサイト画面

<img width="1097" alt="スクリーンショット 2023-05-31 23 14 50" src="https://github.com/Akiyoshi999/portfolio-site/assets/47466766/3245d644-0fce-4055-9613-6989533bcfc9">

### サイト構成

![hp-1-org](https://github.com/Akiyoshi999/portfolio-site/assets/47466766/4cde3923-c9e3-42ff-994c-dbbda6814c7e)

### サイトURL

https://d2xafxxoj79o5e.cloudfront.net/
