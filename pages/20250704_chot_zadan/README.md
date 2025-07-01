---
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: ちょっと知りたい！サイト高速化について
---

<style>
  #slideshow {
    background: white;
  }

  .slidev-layout {
    color: black;
  }

  .my-auto {
    height: 100%;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

# ちょっと知りたい！サイト高速化について 五十嵐資料

---

<style>
  .eiketsu_list_image {
    margin-right: auto;
    width: 26%;
  }
  .pine {
    position: fixed;
  }
</style>

## 最近やったサイト高速化（自己紹介）

- [英傑大戦ツール](https://igara.github.io/eiketsu-taisen-tool/)の仮想スクロール対応
  - 武将のデータが1000件超えるようになり、流石にそのままmapで描画するのは無理があった
    - Lighthouse、PageSpeed Insightsもタイムアウトするレベル
    - APIサーバ欲しいけどGitHub Pagesのみで運用、友人のためにお金使いたくなかった

<img class="eiketsu_list_image" src="/eiketsu_list.png">

<div class="pine">
  ´A`また英傑だぁ！
</div>

---

<style>
  .copilot_image {
    margin-right: auto;
    width: 46%;
  }
  .pine {
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
</style>

## 最近やったサイト高速化（自己紹介）

- [英傑大戦ツール](https://igara.github.io/eiketsu-taisen-tool/)の仮想スクロール対応
  - [@tanstack/react-virtual](https://tanstack.com/virtual/latest)
    - 武将のデータが計略の説明で縦幅が固定じゃないので調整大変だった
      - Copilotニキに助けられた

<img class="copilot_image" src="/copilot.png">

<div class="pine">
  ´A`また英傑だぁ！
</div>

---

## 本題

---

## いいたいこと（本題）

- Core Web Vitalsって組織横断するような話だよなって
  - マーケ、SEO、離脱率観点
  - リアーキテクト検討の際にあった話
- 推測するな、計測せよ
  - パフォーマンス界隈でよく言われるやつ
  - Sentryとかの監視ツールから始めてみるのもいいかも

---

## Core Web Vitalsって組織横断するような話だよなって

- マーケ、SEO、離脱率観点
  - 表示速度 (LCP: Largest Contentful Paint)
    - Googleよりページの読み込み時間が1秒から3秒に増加すると、離脱率が32%増加するという結果があるらしい
  - 離脱率
    - 各社で定義は異なるかも
      - Must: ユーザ登録画面ならユーザ登録完了まで
      - Must: ECサイトならカートに商品を入れてもらうまで
      - Must: 資料請求・お問い合わせまで ...etc
    - 推測するな、計測せよの念が強まる
      - A/Bテストがしやすい環境が好まれる

---

## Core Web Vitalsって組織横断するような話だよなって

- リアーキテクト検討の際にあった話
  - Next.js使いたい
    - Core Web Vitals
      - next/imageによる画像最適化の自動化
        - ImageOptimによる画像圧縮を手動でやるとかはもうやりたくない
        - LCPに影響する
      - SSRによる既存フロントエンドの再利用性
    - 生産性向上
      - 既存システム運用の属人化
        - いわゆる秘伝のタレ状態
      - モダン化による情報知識の更新
        - 検索しやすくなる
    - 部分的なアプリケーションで試験導入
      - 工数・予算の都合上

---

## 推測するな、計測せよ

- Sentryとかの監視ツールから始めてみるのもいいかも
  - Insights
    - ページの一覧のCore Web Vitalsのスコアを確認できる

---

<style>
  .sentry_insights_1 {
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  .pine {
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
</style>

<img class="sentry_insights_1" src="/sentry_insights_1.png">

<div class="pine">
  ´A`また英傑だぁ！また英傑だぁ！
</div>

---

<style>
  .sentry_insights_2 {
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  .pine {
    position: fixed;
    right: 16px;
    bottom: 16px;
  }
</style>

<img class="sentry_insights_2" src="/sentry_insights_2.png">

<div class="pine">
  ´A`また英傑だぁ！また英傑だぁ！
</div>

---

## 推測するな、計測せよ

- Sentryとかの監視ツールから始めてみるのもいいかも
  - Explores > Replays
    - リプレイ上でもCore Web Vitalsのスコアを確認できる
      - 反応性 (INP: Input Delay)の検証に良さそう

---

<style>
  .sentry_replay {
    height: 100%;
    margin: auto;
  }
</style>

<video controls class="sentry_replay">
  <source src="/sentry_replay.mov.webm" type="video/webm" />
</video>   

---

「推測するな、計測せよ」を言いたいだけでした

---

<style>
  .comp {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 300px;

    animation: fadeIn 0.7s ease 0.7s 1 normal backwards;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(-1000px);
    }
    to {
      transform: translateY(0);
    }
  }
</style>

<div class="comp">完</div>
