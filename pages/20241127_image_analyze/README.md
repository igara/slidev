---
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: 最近画像識別頑張ってる
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

# 最近画像識別頑張ってる

---

## 最近やってること

<style>
  .youtube_desk_list {
    height: 30%;
  }
</style>

- [英傑大戦ツール](https://igara.github.io/eiketsu-taisen-tool/)作成中
- [[ImageHash] YouTubeのサムネから英傑大戦のデッキを作成する](https://zenn.dev/igara/articles/youtube_eiketsu_deck)
  - [YouTube 頂上対決 カードランキング](https://igara.github.io/eiketsu-taisen-tool/youtube/card_ranking/?date_from=2024-11-01&date_to=2024-11-27)というのができました
    - 今月は伊達政宗が環境トップでした
  - YouTube 頂上対決リンク より対戦時のカードの一覧表示対応しました

<video controls class="youtube_desk_list">
  <source src="/youtube_desk_list.mov.webm" type="video/webm" />
</video>   

- [ブラウザから起動したカメラでTCGのカードを識別する方法](https://zenn.dev/igara/articles/tcg_recognition_browser_camera)
  - [英傑カメラ](https://igara.github.io/eiketsu-taisen-tool/camera/)ができました

---

## つらかった点

- 画像識別つらかったImageHash編
- 画像識別つらかった機械学習編
  - 英傑カメラ

---

<style>
  .youtube_thumnail {
    margin: auto;
    width: 46%;
  }
</style>

## 画像識別つらかったImageHash編

ImageHashとは〜画像のハッシュ化し、画像の類似度を比較することができる

ちなみにこちらがYouTubeのサムネでこの画像からデッキを構成しました

<div>
  <img class="youtube_thumnail" src="/red_blue_card.jpg">
</div>


---

## 画像識別つらかったImageHash編

- つらかった点
  - ゲームのUIが変わってカードの座標変わってて画像取得ミスってた
  - 誤検知しまくる
    - カード設置していないとこでもカードとして識別されることがあった
      - やたら斎藤一が検出される
      - 誤検知防止としてで[ダミー画像](https://github.com/igara/eiketsu-taisen-tool/tree/main/data/data/dummy/dummy)の比較もし始めた

<div>
  <img class="youtube_thumnail" src="/no_card.png">
</div>

---

## 画像識別つらかったImageHash編

- つらかった点
  - ゲームのUIが変わってカードの座標変わってて画像取得ミスってた
  - 誤検知しまくる
    - カード設置していないとこでもカードとして識別されることがあった
      - やたら斎藤一が検出される
  - 処理のループがつらい
    - 動画1200件 * ユーザ2人 * 設置カード8枚と全カード860枚 + ダミー画像の比較

---

## 画像識別つらかった機械学習編

- つらかった点
  - カメラ想定だったので画像のコントラスト考慮
    - めっちゃ[グラデーション画像](https://zenn.dev/igara/articles/tcg_recognition_browser_camera#%E5%AD%A6%E7%BF%92%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AB%E5%BF%85%E8%A6%81%E3%81%AA%E7%94%BB%E5%83%8F%E3%83%87%E3%83%BC%E3%82%BF%E4%BD%9C%E6%88%90)作成した
  - 学習モデル大きくなりがち
    - [リサイズ](https://zenn.dev/igara/articles/tcg_recognition_browser_camera#%E5%AD%A6%E7%BF%92%E3%83%A2%E3%83%87%E3%83%AB%E4%BD%9C%E6%88%90-1)や[分割](https://zenn.dev/igara/articles/tcg_recognition_browser_camera#%E5%AD%A6%E7%BF%92%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AE%E5%88%86%E5%89%B2)で頑張った
  - tensorflowのロジック難しい
    - ChatGPTさんでなんとか対応
  
---

## それぞれの良い点

- ImageHash
  - 元のデータと近い形であればおそらく最速
- 機械学習
  - 雑な画像でも検知しやすい
    - 学習のモデルにもよるが足せば強化できる

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
