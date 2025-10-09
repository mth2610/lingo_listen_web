'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "558868a7e195a2b8a5ae0efbfd9288ba",
"version.json": "c4321e23c3ed01642d2523d4cc110f28",
"index.html": "4683eac43c474c720bf627f168f42d77",
"/": "4683eac43c474c720bf627f168f42d77",
"main.dart.js": "ad9b1dea7a012a9440d840ee8c6e2593",
"sqlite3.wasm": "c78938b24bbe18f20172a341bbd5fc92",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sqflite_sw.js": "1f359fd9e7f9eb7adbfd806749473a17",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d3fcd2488d6278e9bb24eedceda103c2",
"assets/AssetManifest.json": "69691fe2912a4c43c9fb8dc29afab3d7",
"assets/NOTICES": "d2e1c21db3202caa4e6b3ce6ce7219f9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "3881b49387dcae0b0ced11b47f36b215",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ffe58465c7c2ac6ae491e04cc995280b",
"assets/fonts/MaterialIcons-Regular.otf": "9b0f7aaf8f5ad4ce3e9022f2e997eb11",
"assets/assets/audio/phonemes/v.mp3": "b147b094437fc8c87b43abddf716bdc3",
"assets/assets/audio/phonemes/w.mp3": "5617095674f40285ad1a8f5c7b86d5f4",
"assets/assets/audio/phonemes/o_long.mp3": "1d81499d6ed9bcba7175a6ee81046147",
"assets/assets/audio/phonemes/b.mp3": "83e9907676face29f00f238507a91cd4",
"assets/assets/audio/phonemes/t.mp3": "c27b165e6bbd6f562e5a7c2bb54f76a3",
"assets/assets/audio/phonemes/p.mp3": "f1f9628a3cc17c03c53235f5e3cacd2b",
"assets/assets/audio/phonemes/g.mp3": "43bd40177db795db0ddd669f90ccd688",
"assets/assets/audio/phonemes/f.mp3": "8461f61348b7a89d65da04695bb5a685",
"assets/assets/audio/phonemes/ou.mp3": "7aec649a87c081a3c693839db5fa759c",
"assets/assets/audio/phonemes/s.mp3": "ddc6401c6b40fbe3674f4a8cdb5b7f2d",
"assets/assets/audio/phonemes/ai.mp3": "efc42486f311ced22df539688c2e4b18",
"assets/assets/audio/phonemes/d.mp3": "c733ed1c70807890ba0b6a1a7557971b",
"assets/assets/audio/phonemes/e.mp3": "f95a5264bbbb3e854d93410587a65c82",
"assets/assets/audio/phonemes/r.mp3": "ccf7d9fcc72cc0db4545fb5104e7dbe3",
"assets/assets/audio/phonemes/ng.mp3": "21a2c0a618a05dbafe41c64f7afbd329",
"assets/assets/audio/phonemes/ie.mp3": "3503a047f5d8f233da3e62026ab5c33c",
"assets/assets/audio/phonemes/i_short.mp3": "84fed94d108f394d20937565b785940f",
"assets/assets/audio/phonemes/er.mp3": "4725013d9fc3400f24ff705881e145df",
"assets/assets/audio/phonemes/sh.mp3": "65b283f4e8970965e66c7df377c5bb40",
"assets/assets/audio/phonemes/ea.mp3": "16511369962165c55f9b183e6c43b8f8",
"assets/assets/audio/phonemes/i_long.mp3": "e09a639d71aae9c84841a895c0073fcb",
"assets/assets/audio/phonemes/o_short.mp3": "6cb5c8a362962d7e83c4143a2c522353",
"assets/assets/audio/phonemes/ei.mp3": "3b90bd8e1afd4104e0508854451e5e0f",
"assets/assets/audio/phonemes/schwa.mp3": "2ab28ddd15ab7d3a904610cd55be5b4f",
"assets/assets/audio/phonemes/h.mp3": "246963b45da80873edca7e9cfbc38b78",
"assets/assets/audio/phonemes/ae.mp3": "caf1ff7112810921d1f2e022595aee34",
"assets/assets/audio/phonemes/a_long.mp3": "e3c36a174e4d734cd5c0310fd992b68d",
"assets/assets/audio/phonemes/k.mp3": "1dc3c36ccc3d7f39c1270578a017d00e",
"assets/assets/audio/phonemes/j.mp3": "1669e3ce83b6076f143773e9ef2a9bea",
"assets/assets/audio/phonemes/n.mp3": "598059bae7e25d85ec30353bd48524f9",
"assets/assets/audio/phonemes/y.mp3": "5e8fa23a794bc625f4df1b0bccdc747d",
"assets/assets/audio/phonemes/au.mp3": "f52ced7bba04a62f12a87cb3b7cc16f4",
"assets/assets/audio/phonemes/oi.mp3": "bb568a3dfa1032d759429d08e8e11279",
"assets/assets/audio/phonemes/u_short.mp3": "f2699a61abeb0522f428aa1ec040f986",
"assets/assets/audio/phonemes/zh.mp3": "456a4a6a587f0c1409b6e4e117cad41c",
"assets/assets/audio/phonemes/up.mp3": "612dd66b0e3151f45fbd5e49f5db7ba8",
"assets/assets/audio/phonemes/th_voiced.mp3": "ea04e23a308213b3eaa406c6eafdf9fb",
"assets/assets/audio/phonemes/ue.mp3": "419374cdd1354f67719b37de67cb02b5",
"assets/assets/audio/phonemes/m.mp3": "71682651f9ba8b889758be29a258aac3",
"assets/assets/audio/phonemes/ch.mp3": "34d8cb3bb11a94c3a0d44c5eadd2fbc2",
"assets/assets/audio/phonemes/z.mp3": "71e92048d2b85fd16da616c2f8441856",
"assets/assets/audio/phonemes/th_voiceless.mp3": "5fbcefdf481bda0438a308c45c0498f6",
"assets/assets/audio/phonemes/l.mp3": "972eb394e696d4dd8aa3863660d02dba",
"assets/assets/audio/phonemes/u_long.mp3": "be2aa21a8d27ff97011b2163f744f4a9",
"assets/assets/audio/words/piece.mp3": "82b5ac069a57e042166f4f99568c783d",
"assets/assets/audio/words/job.mp3": "c3609efe6ab960bd743197dd4c23db02",
"assets/assets/audio/words/sun.mp3": "f6c68c186f3211931cd4f7ef986c24d4",
"assets/assets/audio/words/of.mp3": "2461b92d4c5e3acd77b0dd684ad4210b",
"assets/assets/audio/words/my.mp3": "e98aede8cc85e7fbc60a855204829a02",
"assets/assets/audio/words/love.mp3": "017ba9bc4a5127536bcf237654a9bbab",
"assets/assets/audio/words/voice.mp3": "8ea520e407000c5a2dc44edc82f734b9",
"assets/assets/audio/words/about.mp3": "bb1071a35b4df544c7bb161af904b2a2",
"assets/assets/audio/words/more.mp3": "4e46a76c0a159361325722d452369818",
"assets/assets/audio/words/sure.mp3": "035da13f6f015d11ba5260e6f75c88f1",
"assets/assets/audio/words/bus.mp3": "67a64998a7ed4f1f82ef89c783eba37c",
"assets/assets/audio/words/turn.mp3": "fdd37fb8d0571825ac76fd599d612c4f",
"assets/assets/audio/words/judge.mp3": "0c193b8440a6b926a5d425ce9829a819",
"assets/assets/audio/words/nice.mp3": "abf6b2299c081d5a06482de57e6d4f8f",
"assets/assets/audio/words/hard.mp3": "fe5d399965c29be3ed64ddb879540acb",
"assets/assets/audio/words/some.mp3": "224f33ea46670507525095d1d7a5d413",
"assets/assets/audio/words/hot.mp3": "d9c7d2ec414ce300295ddbf04831e701",
"assets/assets/audio/words/large.mp3": "0cc6577edf280f26d3fd32a855f7335e",
"assets/assets/audio/words/try.mp3": "b15c5821f2bc8a73406f540f20aae63c",
"assets/assets/audio/words/measure.mp3": "efc3d250eca5fd8e9db5ae08e8ddaf30",
"assets/assets/audio/words/banana.mp3": "05e4cdd9bd44612b75ff70785d8f9653",
"assets/assets/audio/words/here.mp3": "f2a1ea141710b7f8979c6ffa644ff2ac",
"assets/assets/audio/words/now.mp3": "6490a1d0dff6f8890fe856da7c94bdc4",
"assets/assets/audio/words/first.mp3": "e517c18bbcd5e04da0bb8e1ade8e71af",
"assets/assets/audio/words/father.mp3": "ba4424ef8ddf724ae3418e58cc68e3de",
"assets/assets/audio/words/right.mp3": "7e3582d13b06155be8c45125b5b1c524",
"assets/assets/audio/words/wait.mp3": "4d75e43f8c26c11c75c7173e376d42f2",
"assets/assets/audio/words/lazy.mp3": "6fc2636312296f468b8067e829eb34ab",
"assets/assets/audio/words/near.mp3": "0b2771a98c976ca6f3c89fd526b94826",
"assets/assets/audio/words/sock.mp3": "24b5deebe97b1e9296d9caaa3c516b0f",
"assets/assets/audio/words/fat.mp3": "02863c1fcd574515d217b6e6d4c57331",
"assets/assets/audio/words/age.mp3": "20ffd5d1f7ebf09cef5b700a8bc620ce",
"assets/assets/audio/words/full.mp3": "1dd63fad02ffb6ac86243e1bfe58086b",
"assets/assets/audio/words/red.mp3": "ca81b13d81189126a9af32125d6b8e3b",
"assets/assets/audio/words/fish.mp3": "d6af8410113646415fc28780961ee483",
"assets/assets/audio/words/great.mp3": "fa16710516d2a78f8319b2fb635ad4a8",
"assets/assets/audio/words/copy.mp3": "d36208170e716722879d45cf176943d8",
"assets/assets/audio/words/high.mp3": "4c3b359a50bc0cd099d23049fc085cd0",
"assets/assets/audio/words/live.mp3": "b4f8e14beee12d76e565dce94227ff50",
"assets/assets/audio/words/coin.mp3": "1c23685ba2cd276fec62339971b184fb",
"assets/assets/audio/words/boy.mp3": "66653b5edff62867d92ee2045ec6e571",
"assets/assets/audio/words/long.mp3": "a7d85d5c9de8ebbb377ce5be722671c6",
"assets/assets/audio/words/say.mp3": "bcbc90a3f09652980724e97c36b3dc9c",
"assets/assets/audio/words/this.mp3": "0425d6cccc218c975d5adf133a5d64e4",
"assets/assets/audio/words/tea.mp3": "91a11fe98c46bfbbf9b12b33de7e09c1",
"assets/assets/audio/words/bad.mp3": "488b0656d0baf4eb71aa1ef4886dcc0a",
"assets/assets/audio/words/box.mp3": "20f27efa323f4b2cacd5c053007d0a97",
"assets/assets/audio/words/usual.mp3": "502ca720415b7dfd63f45cae7381bf50",
"assets/assets/audio/words/quick.mp3": "e54d955a6ce5d3bcea520978ad546695",
"assets/assets/audio/words/sit.mp3": "ccd2e08cd11aa5c50bc74d56821fbd6a",
"assets/assets/audio/words/eight.mp3": "b2c71fc6693030fbf4e32e7c017d555f",
"assets/assets/audio/words/cat.mp3": "07310ef2279157b853d5f65db7ce3bb2",
"assets/assets/audio/words/other.mp3": "0856bc535ecac15f5a05f9c8658f59da",
"assets/assets/audio/words/food.mp3": "2b974fb823edd8706f2efa94d8409d96",
"assets/assets/audio/words/any.mp3": "96db4a46e1eeea309c1c162928e19ea6",
"assets/assets/audio/words/go.mp3": "fbeba0e96b8ce583864abb42e1d1ad4e",
"assets/assets/audio/words/chair.mp3": "df272be185b59f3979b01d5b3b4a9693",
"assets/assets/audio/words/cup.mp3": "8220bb757e6c49ade4f7788ca9929c71",
"assets/assets/audio/words/walk.mp3": "8db8383256936b396e978234d2e7b086",
"assets/assets/audio/words/nation.mp3": "bf616e454c7f590218e50659792b2b92",
"assets/assets/audio/words/green.mp3": "1016a88800ef7e48482b0729b69edcf9",
"assets/assets/audio/words/leg.mp3": "4064d2f9fc5c611ac0d986b0130d48e6",
"assets/assets/audio/words/student.mp3": "8e2a5bd9f6aabcb86ff9a36482fdd191",
"assets/assets/audio/words/lady.mp3": "e3c1ce20ce2f3a0f185b7a43702a950c",
"assets/assets/audio/words/heart.mp3": "13cc4753e0c7cda03dd8aec63fa0d8ad",
"assets/assets/audio/words/sofa.mp3": "61bc59899c901297cf45580cb5eb2e79",
"assets/assets/audio/words/apple.mp3": "d2ea82a7e56bdf7bd89bd387395a793b",
"assets/assets/audio/words/again.mp3": "094e546c6e28516ba2954a70143429b3",
"assets/assets/audio/words/when.mp3": "cfacd0ace83535fa679bc7afe0b9a965",
"assets/assets/audio/words/man.mp3": "bd82453278a904c674ac99d1d5a255f2",
"assets/assets/audio/words/she.mp3": "5a3e6a41728a745a5f8cf09868998b5a",
"assets/assets/audio/words/top.mp3": "f83275199cdbb72d631157ba532ddba8",
"assets/assets/audio/words/smooth.mp3": "070768c46cfec9fdf9744386bd10e0d8",
"assets/assets/audio/words/heat.mp3": "26029e266bf01abf9b47619517358676",
"assets/assets/audio/words/new.mp3": "1d2ecd7fe1a55c7c86d99573c21414ee",
"assets/assets/audio/words/learn.mp3": "2849bc8aa1ee4665699a4b43ccd4a806",
"assets/assets/audio/words/nature.mp3": "663d2e950770c4a873cd8bbaa44f62e0",
"assets/assets/audio/words/car.mp3": "8720e0b70a943bd6158ec68da41c10f1",
"assets/assets/audio/words/pleasure.mp3": "1551a0fc149e510344ec10783968ab38",
"assets/assets/audio/words/share.mp3": "1b0b0e4b67eb0b4fb5f52de638e8da31",
"assets/assets/audio/words/said.mp3": "ff1a4127f7faa7919a32883fbffaa66b",
"assets/assets/audio/words/cure.mp3": "d758bedac0c319ef9aa8110bd9cf560c",
"assets/assets/audio/words/foot.mp3": "cd31021367dc7c9add6361d628948a7b",
"assets/assets/audio/words/match.mp3": "5b6423f466ec3cb1cdedbf7cdbd41abb",
"assets/assets/audio/words/phone.mp3": "68178fc0da519c3819648c1c403fd03e",
"assets/assets/audio/words/wet.mp3": "c3e69439cfd4d14ba87e367d07db357a",
"assets/assets/audio/words/think.mp3": "1f954176a4c8ad6f8d5f052a43403879",
"assets/assets/audio/words/come.mp3": "30eab00bd5a712455747b979b1948b22",
"assets/assets/audio/words/head.mp3": "c4b1c47f8f47d5cb78108335eafe656a",
"assets/assets/audio/words/see.mp3": "3ef411805454673f02671359a47909f1",
"assets/assets/audio/words/zoo.mp3": "2a69a1fa682e1400090fbc6278df705c",
"assets/assets/audio/words/one.mp3": "70da183f669dfea905733d2286075d5b",
"assets/assets/audio/words/view.mp3": "343d32246439772d4b6033f7a7ada142",
"assets/assets/audio/words/money.mp3": "4242d557680a2b1a6879d2761a59bc4d",
"assets/assets/audio/words/behind.mp3": "f582ecd09335009734982b3bf009bb80",
"assets/assets/audio/words/dear.mp3": "dc28bbcdacbfd6afaf287292abdeb66c",
"assets/assets/audio/words/water.mp3": "4ee32fa0a516e1963114b2ac5efe7724",
"assets/assets/audio/words/hello.mp3": "60f27848dabb280b35163bce1ef7c569",
"assets/assets/audio/words/furious.mp3": "ca0acae74aefd1babc60c23bc65a74cc",
"assets/assets/audio/words/door.mp3": "13582e713cc336f41f54d488c60979f3",
"assets/assets/audio/words/year.mp3": "66d907030a27beefc0b219b5d58fb443",
"assets/assets/audio/words/church.mp3": "9f72508bd6a5bf12127559479a6f08f9",
"assets/assets/audio/words/blue.mp3": "a9e11653160cb7a5abb75ff6c8896361",
"assets/assets/audio/words/television.mp3": "d0f1334ee803a3274152dbeb8d822aa4",
"assets/assets/audio/words/out.mp3": "2bca6fa2f939bfdea97378cd686bbcfc",
"assets/assets/audio/words/throw.mp3": "b8f322482ef15e89aaa7c14193ea5b85",
"assets/assets/audio/words/bird.mp3": "1552f71012cac358808e0a24edccc207",
"assets/assets/audio/words/clear.mp3": "6e71db2a12bd817f84e06c5da7bfe762",
"assets/assets/audio/words/yellow.mp3": "ef42e8274d6e5b21d4abb894736ac30b",
"assets/assets/audio/words/move.mp3": "a6f49cc2d412b92d476e176ffaf79c9d",
"assets/assets/audio/words/city.mp3": "3507e2f54908f16c62519113072ef190",
"assets/assets/audio/words/did.mp3": "d14387206cf3da0c558aeafba9f6f997",
"assets/assets/audio/words/address.mp3": "15628c6b34a0673f2a455d2cbe294fc6",
"assets/assets/audio/words/laugh.mp3": "07f90686f4d5f6ea2306ff06849e44d3",
"assets/assets/audio/words/show.mp3": "7acae85c94b517ac8fdac0cc901dab60",
"assets/assets/audio/words/map.mp3": "4d093ce6b970226e4ddb08308a1509ce",
"assets/assets/audio/words/toy.mp3": "cfe23d6e62c38910bfc578a5a48f09cf",
"assets/assets/audio/words/thing.mp3": "883cc9b2beafc814dd3a7ccfff15153d",
"assets/assets/audio/words/yes.mp3": "ca3346cc2bbbbcddb005207154919456",
"assets/assets/audio/words/house.mp3": "3a38c95078f6d84971154acc83804027",
"assets/assets/audio/words/big.mp3": "298b03ca8725a2944827bc98fe11f23f",
"assets/assets/audio/words/will.mp3": "05ec5ad6ce4823a133e123e8ad4f2696",
"assets/assets/audio/words/pure.mp3": "b9e55074e55ec8b0bf5a9039e24e5256",
"assets/assets/audio/words/bed.mp3": "849ce78e9edd11caa684f9c8ea0fa84c",
"assets/assets/audio/words/four.mp3": "d7f4bce79c2cf4ca3f188e0aa4539eb3",
"assets/assets/audio/words/hand.mp3": "0ec0cb611d3eea38a5e4691af5e1215e",
"assets/assets/audio/words/very.mp3": "0d6bdbb471e812a78aa6bd88b3e43de7",
"assets/assets/audio/words/shoe.mp3": "c4e6e92d115e755413121abad935d997",
"assets/assets/audio/words/system.mp3": "f93c555cfacd4704c7979366a1b22fa3",
"assets/assets/audio/words/like.mp3": "87dead3e3f5bc69e6d4c4d8c98ea6b19",
"assets/assets/audio/words/friend.mp3": "af943a0935d3a216f3b508ce05e9f213",
"assets/assets/audio/words/wear.mp3": "8dec96c205c060a223bc5dbbe51088a7",
"assets/assets/audio/words/who.mp3": "47c8c103d0521d3b5f76b98daabcec3e",
"assets/assets/audio/words/buzz.mp3": "b273e16836cf7e6f94ff1b83146e73f1",
"assets/assets/audio/words/put.mp3": "0d3b9c694132849b6d7d30622739d460",
"assets/assets/audio/words/know.mp3": "d200e80f41399c939ceca7659fb228d8",
"assets/assets/audio/words/two.mp3": "f3eeb114e8c5cb5558059646d7c84718",
"assets/assets/audio/words/home.mp3": "ba1babcd8af5684467d103438582599a",
"assets/assets/audio/words/path.mp3": "e8f7dfad112404c13b76c8373474c51f",
"assets/assets/audio/words/black.mp3": "f3b1d72765a8f3f3f51aef41510ca71a",
"assets/assets/audio/words/mother.mp3": "330221bf5c3425504d57212c75afa8a2",
"assets/assets/audio/words/sorry.mp3": "5128f9ee6982b2a3fcb0454e601e5cc1",
"assets/assets/audio/words/why.mp3": "256a759e3c3f93133e032a191bbc2640",
"assets/assets/audio/words/join.mp3": "a833ebf664eb6b3d1f86951c0c509557",
"assets/assets/audio/words/you.mp3": "f003b016c288d0d81f1ed8d8e8da3cbd",
"assets/assets/audio/words/teacher.mp3": "b62b1d7c972c51a444ee9af6c839caa9",
"assets/assets/audio/words/stop.mp3": "a9e7736befdaf8e80fb96483e53df98d",
"assets/assets/audio/words/hair.mp3": "9ae77f18d8978a1a900791c94cb9ef73",
"assets/assets/audio/words/mouth.mp3": "74eb5d1ae1835ca3e58f1cb7c68d5023",
"assets/assets/audio/words/hat.mp3": "13ff85fe4b10b07448cd2754a218785a",
"assets/assets/audio/words/day.mp3": "c96de0019b295395f2406eb4994f184e",
"assets/assets/audio/words/month.mp3": "23c11c71b994d1f129177d58c001e401",
"assets/assets/audio/words/book.mp3": "621cd656ed12ca1b2353ba2e38843f64",
"assets/assets/audio/words/during.mp3": "90910bffa2c5df38d5b6cb61d31e17fb",
"assets/assets/audio/words/coffee.mp3": "e9baa73953a241ad6270034c3a96437f",
"assets/assets/audio/words/team.mp3": "f682af7509daba04c86ec350aa61eb9c",
"assets/assets/audio/words/king.mp3": "e3d446e0f47dc80fc0996d974d1d4c7f",
"assets/assets/audio/words/happy.mp3": "c17a34e46f30151c100c13b13498f4b8",
"assets/assets/audio/words/watch.mp3": "6cfd03f0a8da9d83b41724e56ce5d34e",
"assets/assets/audio/words/work.mp3": "f1580f2673cce240f5981857e1b194a6",
"assets/assets/audio/words/boat.mp3": "8ad8996c538cf69f9de8f2dee027bd68",
"assets/assets/audio/words/saw.mp3": "64c5132620fb695c1e94ef7d8eeb0629",
"assets/assets/audio/words/ten.mp3": "666d7626baa48c10d687685b64857d32",
"assets/assets/audio/words/paper.mp3": "11f4aedf900455a7f2a8d3f111f6d704",
"assets/assets/audio/words/care.mp3": "4f6abf67bd26ab2e31149e6da2e70b48",
"assets/assets/audio/words/good.mp3": "50af168c374ba0d80f40fced7d6ca194",
"assets/assets/audio/words/sing.mp3": "57d90964768c6a1398fabb985490112d",
"assets/assets/audio/words/buy.mp3": "0cd7afa877c47c3bb7cbc1981a40e936",
"assets/assets/audio/words/queen.mp3": "1351fae8860beb94aa3d3b415d5a895c",
"assets/assets/audio/words/pen.mp3": "a9e8a7ed9b7cb68efc902e8344489aba",
"assets/assets/audio/words/get.mp3": "6b4a05f452b25068917b8184ab916ede",
"assets/assets/audio/words/key.mp3": "4fe0acc9ff63849256bd2e43caccd84e",
"assets/assets/audio/words/town.mp3": "1f0e0ffdde28b8b3f5e9b4f3eedffeb7",
"assets/assets/audio/words/ship.mp3": "86b9ac8c42e17ce1158c47e1052c75bf",
"assets/assets/audio/words/give.mp3": "80b0c3a8c43be74e5e5535cf8777a1d0",
"assets/assets/audio/words/pin.mp3": "91d87e6d35de2a311e8906a166ce23a3",
"assets/assets/audio/words/time.mp3": "299ac5a01bae393488c4950f634f9a0e",
"assets/assets/audio/words/make.mp3": "c096f501f8fcd3484889cee9fd241747",
"assets/assets/audio/words/soldier.mp3": "7fb4b5b87747c68561ec29d54103c9ef",
"assets/assets/audio/words/no.mp3": "f476ec4bfe87941f74c7bd66f8f5f615",
"assets/assets/audio/words/they.mp3": "10262207ff9da6eded745343fcf248af",
"assets/assets/audio/words/vision.mp3": "2a7b977a06c218491ded463c1e8afca1",
"assets/assets/audio/words/park.mp3": "32acae113ba15e6b707892b99e84c122",
"assets/assets/audio/words/three.mp3": "2671823d5ef07b6edc9d48f5ae23e2a3",
"assets/assets/audio/words/school.mp3": "df1a3c14a66b4397a29ef7bfa78a32fa",
"assets/assets/audio/words/rose.mp3": "7a2fb772070fcf11191204bf198e4a98",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
