---
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
title: スクリプト動画（土善）
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
    width: 100%;
    height: 100%;
  }

  .background .title {
    margin: auto;
    width: 73%;
  }
</style>

<div class="background">
  <img class="title" src="/title.png">
</div>

---

イガロイドできなかったので  
あまり使いこなしたことがない  
HTMLのCanvasから動画作成、音声字幕ツール作成していました

https://igara.github.io/ffmpeg_test/

ページのURLにffmpegって書いてありますが  
（ffmpeg.wasmの読み込み使用できなくて断念しました）

---

MDNにあったCanvasアニメーションを動画ファイル化した

https://developer.mozilla.org/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations#%E7%B5%90%E6%9E%9C_2

https://igara.github.io/ffmpeg_test/canvas_to_webp

<style>
  .background .time {
    margin: auto;
    width: 60%;
  }
</style>

<div class="background">
  <img class="time" src="/time.png">
</div>

---

SpeechRecognition APIを使用した音声認識字幕化ツール

https://igara.github.io/ffmpeg_test/speech_to_text

こういった字幕演出ありそうですよね

<style>
  .background .reg {
    margin: auto;
    width: 100%;
    height: 78%;
  }
</style>

<div class="background">
  <iframe class="reg" src="/slidev/20230717_script_doga/reg.mp4"></iframe>
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
