# nHentai-js

### Example
Getting a doujin:
```js
const nhentai = require('nhentai-js')

nhentai.getDoujin('147476')
    .then(console.log)
/*
{ title:
   '(Reitaisai 12) [Kuma-tan Flash! (Yamu)] Tanetsuke Oji-san Hazard | Jizz Geezer Hazard (Touhou Project) [English]',
  details:
   { parodies: [ 'touhou project (10,479)' ],
     characters: [ 'satori komeiji (536)' ],
     tags:
      [ 'nakadashi (19,279)',
        'impregnation (8,836)',
        'dilf (6,935)',
        'bbm (5,469)',
        'unusual pupils (2,189)' ],
     artists: [ 'yamu (77)' ],
     groups: [ 'kuma-tan flash (84)', 'reverse noise (69)' ],
     languages: [ 'translated (60,245)', 'english (45,046)' ],
     categories: [ 'doujinshi (138,514)' ] },
  pages:
   [ 'https://i.nhentai.net/galleries/865683/1.png',
     'https://i.nhentai.net/galleries/865683/2.png',
     'https://i.nhentai.net/galleries/865683/3.png',
     'https://i.nhentai.net/galleries/865683/4.png',
     'https://i.nhentai.net/galleries/865683/5.png',
     'https://i.nhentai.net/galleries/865683/6.png' ] }
*/
```

Checking if a doujin exists (convenience sake. getDoujin() will reject while this resolves to a boolean)

```js
const nhentai = require('nhentai-js')

nhentai.exists('147476')
    .then(console.log)
//true
```