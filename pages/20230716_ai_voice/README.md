---
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: 音声合成イガロイド
---

<style>
  #slideshow {
    background: black;
  }

  .my-auto {
    height: 100%;
  }

  .background {
    width: 100%;
    height: 100%;
  }

  .background .title {
    margin: auto;
    width: 73%;
  }
</style>

<div class="background">
  <img class="title" src="/title.jpeg">
</div>

---

学習モデル作成するまでに時間がなかったので今回は調査だけ

mycoeiroinkを試してみる  
https://zenn.dev/kun432/scraps/8e963a8a4948b2

MYCOEIROINKをGoogleに課金して作ってみた結果コスパ良すぎて草ｗ【音声合成】  
https://www.youtube.com/watch?v=q9PrZ4p4fuA

をみて試してみようとしたが...

---

<style>
  .background .zenn {
    margin: auto;
    width: 100%;
  }
</style>

<div class="background">
  <img class="zenn" src="/zenn.png">
</div>

---

<style>
  .background .macbook {
    margin: auto;
    width: 46%;
  }
</style>

<div class="background">
  <img class="macbook" src="/macbook.png">
</div>

---

| GPU | 料金 | 実行時間 | メモリ |
| ----- | ----- | ----- | ----- |
| Colab (Tesla K80) | 無料 | 12H | 12GB |
| Colab Pro (Tesla T4 / P100) | $9.99/mo | 24H | 25GB |
| GeForce RTX 4090 | ¥249800 | ∞ | 24GB |
| GeForce RTX 4070 Ti | ¥119800 | ∞ | 24GB |
| GeForce RTX 2080 Ti | ¥149800 | ∞ | 11GB |
| Radeon Pro 560X | MacBook + ¥30000ぐらい? | ∞ | 4GB |
| Intel UHD Graphics 630 (Intel Core i9) | MacBook + ¥わすれた | ∞ | 1.5GB |

---

対ありでした  
金と時間で解決するクソゲーでした


とはいえこれやればそれっぽいことができることや  
Google Colabpratory可能性を見いだせた  

COEIROINKも無償でできる数少ない手段としてあることがわかった  

---

Google Colabpratory  
https://colab.research.google.com/drive/1BqaB-Zv5RuaQp-OW0effsFVGCYwvaJ4R?usp=sharing

MarkdownとPythonの実行環境が一緒になったような環境と  
GCPなのでBigQueryとかの連携もできて良さそう

<style>
  .background .colabpratory {
    margin: auto;
    width: 68%;
  }
</style>

<div class="background">
  <img class="colabpratory" src="/colabpratory.png">
</div>

---

COEIROINKのサンプリング  
サンプルの音声ファイルがあったので自分の声でやろうとしなかったが  
サンプリングしようとなるとこれ朗読するのか

<style>
  .background .text {
    margin: auto;
    width: 53%;
  }
</style>

<div class="background">
  <img class="text" src="/text.png">
</div>

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
