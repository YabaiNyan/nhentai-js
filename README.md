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
     'https://i.nhentai.net/galleries/865683/6.png' ]
  link: 'https://nhentai.net/g/147476/'
}
*/
```

Checking if a doujin exists (convenience sake. getDoujin() will reject while this resolves to a boolean)

```js
const nhentai = require('nhentai-js')

nhentai.exists('147476')
    .then(console.log)
//true
```

Getting homepage
```js
nhentai.getHomepage(1)
    .then(console.log)
/*
{ results:
   [ { bookId: '262542',
       thumbnail: 'https://t.nhentai.net/galleries/1361883/thumb.jpg',
       title: '[Suto] 百合えっち本再録' },
     { bookId: '262541',
       thumbnail: 'https://t.nhentai.net/galleries/1361912/thumb.jpg',
       title: '『俺の愛しの脇』 by KANEKO Ako' },
     { bookId: '262540',
       thumbnail: 'https://t.nhentai.net/galleries/1361873/thumb.jpg',
       title: 'Armpit Job~ Mastrubating With Elder Brother\'s Arnpit' },
     { bookId: '262539',
       thumbnail: 'https://t.nhentai.net/galleries/1361858/thumb.jpg',
       title:
        '[Hadairozanmai (Mitei)] Imouto no Oppai wa Onii-chan no Tame ni Arun dakara! [English] [q91] [Digital]' },
     { bookId: '262538',
       thumbnail: 'https://t.nhentai.net/galleries/1361848/thumb.jpg',
       title:
        '[Hakaba] Nikubenki Secchihou <Seitokaichou Kanzaki Hitomi no Baai> | Meat toilet law establishment. Student council president Kanzaki Hitomi\'s case (COMIC Mugen Tensei 2019-01) [English] [Digital]' },
     { bookId: '262537',
       thumbnail: 'https://t.nhentai.net/galleries/1361846/thumb.jpg',
       title: 'Terujirou - 晃次郎 - Badi  Bʌ́di (バディ) 133 (Mar 2017)' },
     { bookId: '262536',
       thumbnail: 'https://t.nhentai.net/galleries/1361845/thumb.jpg',
       title: 'Terujirou - 晃次郎 - Badi  Bʌ́di (バディ) 122 (Apr 2016)' },
     { bookId: '262535',
       thumbnail: 'https://t.nhentai.net/galleries/1361844/thumb.jpg',
       title: 'Terujirou - 晃次郎 - Badi  Bʌ́di (バディ) 119 (Jan 2016)' },
     { bookId: '262534',
       thumbnail: 'https://t.nhentai.net/galleries/1361843/thumb.jpg',
       title: 'Terujirou - 晃次郎 - Badi  Bʌ́di (バディ) 118 (Dec 2015)' },
     { bookId: '262533',
       thumbnail: 'https://t.nhentai.net/galleries/1361842/thumb.jpg',
       title: 'Terujirou - 晃次郎 - Badi  Bʌ́di (バディ) 116 (Oct 2015)' },
     { bookId: '262532',
       thumbnail: 'https://t.nhentai.net/galleries/1361834/thumb.jpg',
       title:
        '[Hadairo Rooibos Tea (Pandain)] Taimanin Satori 3 | 对魔忍觉3 (Touhou Project) [Chinese] [布洛基个人汉化] [Digital]' },
     { bookId: '262531',
       thumbnail: 'https://t.nhentai.net/galleries/1361832/thumb.jpg',
       title: '[Kanbayashi Takaki] Koukan Mesu Ochi Otokonoko [Digital]' },
     { bookId: '262530',
       thumbnail: 'https://t.nhentai.net/galleries/1361831/thumb.png',
       title:
        '[Mareo] Boku no Koto Suki nan janai no!? (Tamakoro) [English] [mysterymeat3] [Digital]' },
     { bookId: '262529',
       thumbnail: 'https://t.nhentai.net/galleries/1361821/thumb.jpg',
       title:
        '(C95) [Attendance Number 26 (Niro)] Bunshin Shite Hamakaze to Sanketsu Ecchi (Kantai Collection -KanColle-) [Decensored]' },
     { bookId: '262528',
       thumbnail: 'https://t.nhentai.net/galleries/1361777/thumb.jpg',
       title: '[Takeda Hiromitsu] Sister Breeder Bonus Chapters [English]' },
     { bookId: '262527',
       thumbnail: 'https://t.nhentai.net/galleries/1361774/thumb.jpg',
       title:
        '[LOLI Seiyouken (PANBAI)] Pochi Mesuyouken Choukyou [Chinese] [盲鸡汉化组] [Digital]' },
     { bookId: '262526',
       thumbnail: 'https://t.nhentai.net/galleries/1361772/thumb.jpg',
       title:
        '(C95) [LOLI Seiyouken (PANBAI)] Seiyouken Choukyou 1.5 [Chinese] [盲鸡汉化组]' },
     { bookId: '262525',
       thumbnail: 'https://t.nhentai.net/galleries/1361760/thumb.jpg',
       title:
        '(C95) [Azuki Yogashiten (Shinsou Komachi)] Ura Kill Me 1 (Kill Me Baby)' },
     { bookId: '262524',
       thumbnail: 'https://t.nhentai.net/galleries/1361759/thumb.jpg',
       title:
        '[San Sheng Wan] A Rebel\'s Journey:  Chang\'e [Chinese]  (Ongoing)' },
     { bookId: '262523',
       thumbnail: 'https://t.nhentai.net/galleries/1361757/thumb.jpg',
       title:
        '(C95) [Machednia (Sachuma)] FanFanBox36 (THE IDOLM@STER CINDERELLA GIRLS)' },
     { bookId: '262522',
       thumbnail: 'https://t.nhentai.net/galleries/1360011/thumb.jpg',
       title:
        '(C91) [Shichimen Soka (Sturkey)] Honoo no Majo ni Oshiri Ijirareru Hon | 被炎之魔女玩弄屁股的本本 (Witch Craft Works) [Chinese] [漢化組漢化組]' },
     { bookId: '262521',
       thumbnail: 'https://t.nhentai.net/galleries/1361755/thumb.jpg',
       title:
        '(C95) [CAMRISM (Kitou Sakeru)] Futanari Akiyama-dono ga Nishizumi-san de Panzer High!! (Girls und Panzer)  [Chinese] [沒有漢化]' },
     { bookId: '262520',
       thumbnail: 'https://t.nhentai.net/galleries/1361756/thumb.jpg',
       title:
        '(C95) [Mabo Udon Teishoku (Yakisobapantarou, Negitoroko)] Musashi Love ~Cosplay Hen~ (Fate/Grand Order)' },
     { bookId: '262519',
       thumbnail: 'https://t.nhentai.net/galleries/1361750/thumb.jpg',
       title:
        '(C95) [Bunbukumodoki (@uni)] Paula-chan to Ero Trap Dungeon! (Sennen Sensou Aigis)' },
     { bookId: '262518',
       thumbnail: 'https://t.nhentai.net/galleries/1361748/thumb.jpg',
       title:
        '[Tanaka-Ex] TOKI to MEKI -Tomatta Sekai de Majiwaru Toiki- [Digital]' } ],
  lastPage: '10308' }
*/
```
Searching nHentai by tag

```js
nhentai.search('stockings')
    .then(console.log)

/*
{ results:
   [ { bookId: '262532',
       thumbnail: 'https://t.nhentai.net/galleries/1361834/thumb.jpg',
       title:
        '[Hadairo Rooibos Tea (Pandain)] Taimanin Satori 3 | 对魔忍觉3 (Touhou Project) [Chinese] [布洛基个人汉化] [Digital]' },
     { bookId: '262528',
       thumbnail: 'https://t.nhentai.net/galleries/1361777/thumb.jpg',
       title: '[Takeda Hiromitsu] Sister Breeder Bonus Chapters [English]' },
     { bookId: '262512',
       thumbnail: 'https://t.nhentai.net/galleries/1361732/thumb.jpg',
       title:
        '(C95) [Kaiyuu Kikaku (Suzui Narumi)] Torokechau Hodo Issho ni Isasete (Kantai Collection -KanColle-)' },
     { bookId: '262511',
       thumbnail: 'https://t.nhentai.net/galleries/1361731/thumb.jpg',
       title:
        '(C95) [Tekomenchi (Techi)] Sanae-san to Sweet Night (Touhou Project)' },
     { bookId: '262494',
       thumbnail: 'https://t.nhentai.net/galleries/1361673/thumb.jpg',
       title:
        '(C95) [Deshutte Itteru Neko (Kotomaro)] Cosplayer X Alter (Fate/Grand Order)' },
     { bookId: '262493',
       thumbnail: 'https://t.nhentai.net/galleries/1361655/thumb.jpg',
       title:
        '(C85) [Setoran (Itou Seto, Tanno Ran)] Gokusen (Kantai Collection -KanColle-)' },
     { bookId: '262487',
       thumbnail: 'https://t.nhentai.net/galleries/1361622/thumb.jpg',
       title:
        '[CatJellyFish (Vanadium)] creamer (THE IDOLM@STER CINDERELLA GIRLS) [Digital]' },
     { bookId: '262483',
       thumbnail: 'https://t.nhentai.net/galleries/1361608/thumb.jpg',
       title:
        '(C95) [Kirintei (Kirin Kakeru, Kouri)] NOLIVE NOLIFE (THE IDOLM@STER CINDERELLA GIRLS)' },
     { bookId: '262472',
       thumbnail: 'https://t.nhentai.net/galleries/1361553/thumb.jpg',
       title:
        '[Alsiel (Yuu)] Tayotte Amaete Ippai Ippai Aishite (Kantai Collection -KanColle-) [Digital]' },
     { bookId: '262468',
       thumbnail: 'https://t.nhentai.net/galleries/1361532/thumb.jpg',
       title:
        '(C95) [Nasi-pasuya (Nasipasuta)] SEXY CODE (Fate/Grand Order)' },
     { bookId: '262467',
       thumbnail: 'https://t.nhentai.net/galleries/1361510/thumb.jpg',
       title:
        '(C95) [TIES (Takei Ooki)] Akebono-chan wa Nonoshiritai! (Kantai Collection -KanColle-)' },
     { bookId: '262454',
       thumbnail: 'https://t.nhentai.net/galleries/1361473/thumb.jpg',
       title:
        '[Alsiel (Yuu)] Tayotte Amaete Ippai Ippai Aishite (Kantai Collection -KanColle-) [Chinese] [脸肿汉化组] [Digital]' },
     { bookId: '262446',
       thumbnail: 'https://t.nhentai.net/galleries/1361441/thumb.jpg',
       title:
        '[Caustica] Onna Kishiou Shoukan DeliHeal (Fate/Grand Order)' },
     { bookId: '262441',
       thumbnail: 'https://t.nhentai.net/galleries/1361432/thumb.jpg',
       title:
        '[TSF no F (Hyouga.)] Gal-iro ni Somaru [Textless] [Digital]' },
     { bookId: '262431',
       thumbnail: 'https://t.nhentai.net/galleries/1361373/thumb.jpg',
       title:
        '(C92) [Morishigeru Laboratory (Umineko Akira)] OKEBE na Maid-san Vol. 17 (Hanaukyo Maid Tai) [English] [Tigoris Translates]' },
     { bookId: '262410',
       thumbnail: 'https://t.nhentai.net/galleries/1361290/thumb.jpg',
       title:
        '[Ginhaha]  Gotoubun no Eros (Gotoubun no Hanayome) [Chinese]' },
     { bookId: '262408',
       thumbnail: 'https://t.nhentai.net/galleries/1361289/thumb.jpg',
       title:
        '(C95) [Water Garden (Hekyu)] Erotic to Knight (Fate/Grand Order)' },
     { bookId: '262402',
       thumbnail: 'https://t.nhentai.net/galleries/1361257/thumb.jpg',
       title:
        '[Crimson] D.Q.Fight 2: Fleurette (Dragon Quest) {N04h} (English)' },
     { bookId: '262401',
       thumbnail: 'https://t.nhentai.net/galleries/1361250/thumb.jpg',
       title: '[Ayana Mizuki] イモウトもうえぇ [Digital]' },
     { bookId: '262397',
       thumbnail: 'https://t.nhentai.net/galleries/1361230/thumb.jpg',
       title:
        '(C95) [Haiiro Koubou Betsumune (Taira Issui)] Tenshi wa Mayonaka ni Saezuru (Azur Lane)' },
     { bookId: '262396',
       thumbnail: 'https://t.nhentai.net/galleries/1361231/thumb.jpg',
       title:
        '(C95) [C.R\'s NEST (C.R)] Kochira Taihou 03 -Sono Ni- (Azur Lane)' },
     { bookId: '262374',
       thumbnail: 'https://t.nhentai.net/galleries/1361094/thumb.png',
       title:
        '[Magifuro Konnyaku] Chucchu shite Pyuppyu (Tamakoro) [English] [mysterymeat3] [Digital]' },
     { bookId: '262362',
       thumbnail: 'https://t.nhentai.net/galleries/1361016/thumb.jpg',
       title:
        '[FRAC (Motomiya Mitsuki)] Amai Yume | 甜美壹夢 [Chinese] [夢之行蹤漢化組] [Digital]' },
     { bookId: '262360',
       thumbnail: 'https://t.nhentai.net/galleries/1360999/thumb.jpg',
       title:
        '[Koniro Kajitsu (Konka)] Illya to Issho ni Shiyo | Doing it with Illya (Fate/Grand Order) [English] [ATF]' },
     { bookId: '262347',
       thumbnail: 'https://t.nhentai.net/galleries/1360863/thumb.jpg',
       title: '(Crimson | Carmine) D.Q.Desire Alena [English] {webdriver}' } ],
  lastPage: '2162' }
 */
```