---
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: Storybook Driven
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

  .background .titleLion {
    height: 100%;
    opacity: 0.1;
    margin-left: auto;
  }
</style>

<div class="background">
  <img class="titleLion" src="/lion.png">
</div>

# Storybook Driven

---

## Storybook導入した背景

- Next.js上の実装とは別にコンポーネントの開発したい
  - APIのモック化
    - APIの通信状態でのUI確認
    - 0件の場合のUI確認
    - データ量が多い場合のUI確認
  - モジュールモック化もしたい（検討中）
    - 日付ライブラリなど
  - UIの出力パターンのカタログ化

example: https://github.com/igara/storybook8-test/blob/main/src/features/pages/app/users/default.stories.tsx

---

<style>
  .mock {
    height: 88%;
  }
</style>

<video controls>
  <source src="/mock.webm" type="video/webm" />
</video>

---

<style>
  .background .lion2 {
    height: 100%;
    opacity: 0.3;
    margin-left: auto;
  }
</style>

<div class="background">
  <img class="lion2" src="/lion.png">
</div>

先ほどの箇条書きを言い直すと

- Next.js上の実装とは別にコンポーネントの開発したい
  - -> テスト駆動的に開発したい
    - -> ifなどの条件分離確認など
- APIのモック化
  - -> 正常 / 異常系のテストしたい
- UIの出力パターンのカタログ化
  - -> 単体テストケース化

Next.js上の確認はlocalhostであっても結合テスト寄りの確認として  
テストフェイズの分離をさらに細分化する視点ができる  

Storybookで細かいテストケースを作成していくことで結合テストの手間を減らすことができる  
-> 単体テスト段階で気づけるものが増える

結合テストはAPIのリクエストテスト、データベースのデータ確認ぐらいで終わらせたい  
-> API側の単体テストでカバーできるとこもある

---

## こんなこともできる

- アクセシビリティの確認

<style>
  .accessibility {
    height: 90%;
  }
</style>

<img class="accessibility" src="/accessibility.png">

---

## こんなこともできる

- Storybook内でpropsの変更確認

argsの設定が必要であるが

example: https://github.com/igara/storybook8-test/blob/main/src/components/Snackbar/default.stories.tsx

<style>
  .args_chaeck {
    height: 70%;
  }
</style>

<video controls class="args_chaeck">
  <source src="/args_chaeck.webm" type="video/webm" />
</video>

---

## こんなこともできる

- 自動入力テスト

example: https://github.com/igara/storybook8-test/blob/main/src/features/users/AddUserDialog/default.stories.tsx

<style>
  .auto_input {
    height: 70%;
  }
</style>

<video controls class="auto_input">
  <source src="/auto_input.webm" type="video/webm" />
</video>

---

## こんなこともできる

- リグレッションテスト

example: https://github.com/igara/storybook8-test/actions/runs/9156482010

mainブランチとmainブランチを比較したもの  

GitHub Actionsのworkflow_dispatchっていうGitHubページ内で手動実行できる機能と  
ArtifactsにDOMの変更差分のレポートを出力している  
レポートは出力から10日間で消えるように設定している  
レポートはスマホ、PCのサイズでスクショを撮るようにしている

<style>
  .artifacts {
    height: 30%;
  }
</style>

<img class="artifacts" src="/artifacts.png">

---

<style>
  .github_actions {
    height: 90%;
  }
</style>

<img class="github_actions" src="/github_actions.png">

---

<style>
  .vrt {
    height: 90%;
  }
</style>

<video controls class="vrt">
  <source src="/vrt.webm" type="video/webm" />
</video>

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
