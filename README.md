express-pandoc
====

Overview

Web UI for pandoc.

## Description
pandocをラップしたブラウザUIとAPI

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

MIT
