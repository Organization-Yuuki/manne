# 依存早見表

|          | API通信 | グローバルstate | Style | 依存関係        |
| -------- | ------- | --------------- | ----- | --------------- |
| parts    | ×       | ×               | ○     | 無              |
| template | △       | ○               | ○     | parts, template |
| views    | ○       | ○               | △     | parts, template |
| pages    | ×       | ×               | ×     | views           |
