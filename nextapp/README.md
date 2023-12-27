## Lotties と Figma を使用してアニメーションをページに追加

# Free Animations を使用する

対象のアニメーションを選択し、Download から Save to workspace to download を選び、Lotties アカウント内のマイプロジェクトに保存する
Download & export から Lottie JSON を選択しダウンロードする
ダウンロードした JSON を任意のパスに保存する（サンプルは/nextapp/public/lotties）
以下スクリプト例の通りに page に追加する

```javascript
import Lottie from "lottie-react";
import animationData from "@/public/lotties/animation.json";

<div className="flex flex-col w-full justify-center items-center">
  <Lottie
    animationData={animationData}
    className="flex justify-center items-center"
    loop={true}
  />
</div>;
```

# Figma で作成した自作素材を使用する

Figma アカウントにて Lotties のプラグインを追加する
対象のコンポーネント、コネクションを全て選択し、プラグインにて Export to Lottie を使用し、Lotties アカウント内のマイプロジェクトに保存する
Lotties アカウントにアニメーションが保存されるため、Free Animation 利用時と同手順でスクリプトを追加する
