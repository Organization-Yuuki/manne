# pages

pages ディレクトリに格納するのは「**ページの表示を目的にしたコンポーネント**」です。views レイヤーに依存しており、ページのタイトルやディスクリプションなどのメタ情報の設定も責務に含まれています。

## 原則

- ページの表示を目的とする
- viewsに依存する

## 運用

- 「main.tsx」の`const router = ~`にパスを設定しSPAの1ページとして利用する。
