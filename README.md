express-pandoc
====

Overview

pandoc as a service

## Description
pandocをラップしたブラウザUIとAPI

## Demo
[ブラウザ]('http://10.107.201.122/pandoc')

cURL
```
curl '$ http://10.107.201.122/pandoc/api/pandoc?from=markdown&to=textile&srcText=%23+h1%0A%23%23+h2'
{"from":"markdown","to":"textile","srcText":"# h1\n## h2","dstText":"h1(#h1). h1\n\nh2(#h2). h2\n\n"}
```

サーバー止まってたらごめんなさい

## Requirement

node.js 0.10.x

pandoc

## API Usage

クロスドメインで使用可能

```
GET /api/pandoc
```

### Parameters
| name       | type     | description  |
|:-----------|---------:|:------------:|
| from       | string   | 変換前の言語(markdown, texttile, html)|
| to         | string   | 変換後の言語(markdown, texttile, html)|
| srcText    | string   | 変換する文字列 |

### response
| name       | type     | description  |
|:-----------|---------:|:------------:|
| from       | string   | 変換前の言語(markdown, texttile, html)|
| to         | string   | 変換後の言語(markdown, texttile, html)|
| srcText    | string   | 変換する文字列 |
| dstText    | string   | 変換した文字列 |

## Install & Start

```
$ npm install && npm start
```

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)
