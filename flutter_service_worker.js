'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "47a0be44487531249bb5628a1996e395",
".git/config": "de5b979e7385ab635a9ffe11d856a548",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1d40a3f70ec94c207433cddc7f4d600b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "508e3e734d98a8dc4dd61158edf67c60",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dff9ec61ab04fffd912ebda9e387e43e",
".git/logs/refs/heads/master": "dff9ec61ab04fffd912ebda9e387e43e",
".git/logs/refs/remotes/origin/flutter-one": "bd48dd674a7eeb8483e6f8310d0d3c86",
".git/logs/refs/remotes/origin/flutter-one-deploy": "713fad7d9a0b49ceb4200b668cfd846d",
".git/logs/refs/remotes/origin/master": "91325e51cbe48f79477e7dfa1abd2068",
".git/logs/refs/remotes/origin/ONE": "d1667bbda65f88a55cb8a5b0139732cc",
".git/logs/refs/remotes/origin/WIP": "bfbf97061884ab5aef6f1b4701fc356f",
".git/MERGE_HEAD": "e0c044d4b064d5e65807050bfe9091ad",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "92aed6da5d7395f8f79e85b361b478f1",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/05/003a3e09c232f31b01cc88c99389a92f2ffff4": "5a87650171fc07bf90abea8e78138b44",
".git/objects/08/a98f64222a9b98fb05e85c6654e88b6e86bfdc": "fc81f093fc01eca411da42ebc1da1492",
".git/objects/0b/dd56c32f19ceb3ae9751f412c65a043dda7a8b": "eeed86c5ccac304777974c1cb9f6b483",
".git/objects/0e/6216199cd9e11f25474a1713c0bdde9027c6bc": "0452ca3faf4de9e0e1d9118e68e08c9e",
".git/objects/0f/931bde12aad570d664de74c2735e8d97d6480c": "7ad473e246a6f1c28004bd6a795db23c",
".git/objects/10/4246e8c252a456a704a02c8f256774f9977262": "d02f5ff9c70e67434c72268d359da51a",
".git/objects/11/8137441bc6c4ec7a0892b1f3644971851b673b": "deb60bdbe8b817821d3e211336b47552",
".git/objects/11/aa9ced98196f067809f9a78cb6d9d052957776": "d857f51f110729385399a9224b652006",
".git/objects/1e/11c9212423e792ee7653888431ace6c13738ed": "df92abe76ab849b367dd50706ee6538e",
".git/objects/28/c4ce23cc689676bc09e766a2b5be4322acc1ea": "37ada20a25d0593b3749b819610068d4",
".git/objects/2d/696ecca627b6ad1ef287013d83efc43ea481aa": "7d863f48616a0d512a9e4b8517b69903",
".git/objects/2f/50f90b16abb7f31c2e195b7099cca2db0c8492": "8c8f92b772f175bbfe854cada23c8030",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/1a64ff4327980420027fa0b0b65de440c0fe5e": "4b21c42d13e668928b30b740a0b6da74",
".git/objects/40/c216000006ee230b54db2d8bef29de3f91ca1a": "ef469de92c65bf1a2d545fa423cbf6f8",
".git/objects/45/503494d478681fec2dcf23e0f170a55becac9f": "97168d0cf4856efb293ae1cc71d59cf8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/5b5a9216e5bce04aad95c347a77e009ad80f1d": "a32ff7fc944e51181967c4a04847d422",
".git/objects/52/e87f6f14ea6cae890c2726e0192f566faa02b9": "3d10dfaf98b9a934229251381363a4d1",
".git/objects/53/3b925c25b5bd3c77b1092f69ca5524e472f9ce": "3851f7981a034c76d3f5474a19da0689",
".git/objects/55/80f440083041e8b7a5967571af900bc7e8ce8e": "320f89e8f6e02b6f291b6670aa3b4570",
".git/objects/5b/1d78362352e4e0d9fc6e0912ea8cd9c1ebb735": "e5355eb3eba6a769ff79c84e75beba99",
".git/objects/5d/27d12d4d160ebbc6d30ea64fdd7a97d8eb72a8": "811edace0649de25b197f28c0de0fd2b",
".git/objects/5f/150aa34af809a7b7822d7e34c5a4cb9f76bff1": "e51e86737583b51dfd7b72681b23c6a0",
".git/objects/62/b2331274497606ece913509054839591f5b211": "ca1dbdbb2993359ab27143d030a2bb9e",
".git/objects/63/1d50505729d236a762c5b8937e8f53f665fb25": "9bea610eb62e7a089342d4b7c535559d",
".git/objects/6c/4429b3082e4cc1a3a58e60dbdaa0274f823cf2": "d457abc06c382fc8dd6f8a20a17d6e29",
".git/objects/6e/2b42569d85d1ad1d5db8b3e7e754539136fdca": "4efd7ba83531bdb68df5dd3589a76791",
".git/objects/6e/4539fe07cfd560cef57ec65488399d74edd8da": "b49af9c69afac3bd77ed595b4e66484b",
".git/objects/71/ab4687fe1c18aeda2955d799db6a717c12b877": "3c178343643226f8ed3d9ef6e84eeeb1",
".git/objects/71/c026422cae7998468662abd873554b6c2cb681": "b3096d85e4c971f1f6ae7a34dbae583a",
".git/objects/77/a6949664530a1b9c5c3e2646ed0ddeec066f8e": "dae03d8ecab61be98a80f4b152ed67bc",
".git/objects/78/16323b792a439f37cb2d8770d38f6c4accbea0": "f6c30c5e81de157fa1f9c9a35592ea1c",
".git/objects/78/1c5d0db7b6c44d48afa2e53b1003e810737129": "2d4f58c94523bcbb4811d77efd9eafda",
".git/objects/78/2bceed8be3d71ce6b34f16166e7960d68dc5fb": "5f595f7b3c3e91b5b52d4964bc49f53d",
".git/objects/78/fe5aa3c10ac08ac886820bc007ecf701ae4d74": "681b1c1093cecf11248bc814d95b090e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/e43a2831f3594cede63b05e2313bd14d3581d4": "b1f48b6d21cda72cd63798cb241c6d06",
".git/objects/89/b7465f23fe5d7438d8f1d28f9dcf1428a96ed7": "8b3f03f052ecde33696655dfbd503916",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/67eee8fdab3af340a2df56fdbac3ba7b9c4ce4": "4a2158bb53106b29f707331cdcb323ba",
".git/objects/92/83c7e8286a61ea58d4fa9653e764aeca0417d3": "8ece7b29ac39723c4213a4e3fd5cc39d",
".git/objects/95/7fe8cfb8f8ea564e5d84d6fbc58d1b7400f473": "8f118278444d627aeb09f46a090c1f1a",
".git/objects/96/3b9a600c40150b8c799ed58e6158b1b62b4678": "fd74d12e9995711bb13b974c3b880f7f",
".git/objects/98/6da1c6f7fdebddb0233ea7858a998abbeecf9d": "82310fc24c1b5ad79c2bd9e3b6ac9edf",
".git/objects/99/ed148b870b020208f18a94be22bb7b3a9922bb": "0b3ea46b43667b9a0340a9c8ceab6ea4",
".git/objects/9a/a737b570714bf5e79c7458733bbff1c018bdca": "eaaaca66bd54a15bc4c397b66dea9888",
".git/objects/9c/4ebc135299144f9869ef55b4f6048a22e2b3dd": "ea8135c40e171d3f7c70749884092e97",
".git/objects/9c/9a800bb4be3a455d6f0df695354cab2b750897": "c406fc8a9497642c4f2877899ad5ee19",
".git/objects/9c/fd72c278f2be85e3cccc9178c6714182e182d3": "fc6b314e19480635c4d217ac19a051c5",
".git/objects/9d/85ac9fce5a2a09d14c893b256d08b4873a0577": "2e14dbf5bdecedfba7062effcd266fa1",
".git/objects/a0/053fc04acd31491987c98c31c4f9cb60b7316a": "ef93796702232fe4c8d57c1f49b2d547",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/7a3784c58bef8d07b91b143455cf63f8cf15cd": "1901400306ea8e37776d6262af824639",
".git/objects/a4/e492adb2d986eb865ea29ded05b14f14f227b7": "7b2fdc9ea2368101862c37a0389a282b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/364919a3804a0911ee937c96203c914dded73a": "7a1255a750e2974ec42e06636b7c9b13",
".git/objects/a9/8dd80a5239959480b57ecb1700ebd44a8cf97e": "b700818e82126b3ff5704ecff7f2027e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/0aeafe7f464641ea05e4729fffc845ddbc25f5": "66e685ee09d87cf2094b6a2f3584fd0d",
".git/objects/ad/bc6963de8021b0957ccd4d55c5d1b6dc38cac9": "6801afa1c09cc3ae526f2036a0e09741",
".git/objects/b0/af51b44df2d07e9f2c866b2fe3a157563f026c": "450aa04f163841608b085cdf9fdcc655",
".git/objects/c0/e0679cdb8e0f41eda64c7e4c8f9cbdee206e8a": "9da3b2007568ca1dce855aba993cafe4",
".git/objects/c1/e0dec03469b4c8226c741dabc14636919a6a54": "324d732877ce25536af8eb3d8d5f4086",
".git/objects/c2/41947593cab7c358862fd113259e4bd740f8ff": "55ac2b780823938a040a6832cf006dab",
".git/objects/c2/5355689789ac66cc89428295de077075eefaf6": "4d44226320d755eaed2047a6a3edeefe",
".git/objects/d3/6c31811ac47594b8e7eca769790f8115da7c82": "c3ef0ba6c47d08f80bc900deeed881e1",
".git/objects/d7/fc6541f7570aac26599bf44a02007d2050954a": "5bf4890c0db73e78e93c0251cc28d5b6",
".git/objects/db/da464a4a554deaa48bd988c579cc9a70e6ebe5": "a28e8959de8550bd5287130e64f4337f",
".git/objects/e5/52b47189d5456518ed26e0438f6bb5a84b64f7": "4b888abe4b4f7157c8ad5156c0af4dc9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/a11ba71da9026d42fd65c9fd6727995feb99b7": "32b3eb819339ec8498927ba529715fd1",
".git/objects/f5/aefbf1bb38eb385d618f8769de1988934f97e4": "b85666450db2fc36d1d389d482e1ee9b",
".git/objects/fb/62c4aa9ebab9ce9f648dc4f2e0f3809bc20449": "ff60343669e31e2b7cdf6035b83c5a76",
".git/objects/pack/pack-dbfc91a40c16fa01d7d8ce392da7b897baa60dd5.idx": "26ad4d99dd179011c71852f8a0318f3c",
".git/objects/pack/pack-dbfc91a40c16fa01d7d8ce392da7b897baa60dd5.pack": "717f443ab60fbc76f5197242352a2e85",
".git/ORIG_HEAD": "64d7e2964092f02d19d5e6d39167a82c",
".git/refs/heads/master": "64d7e2964092f02d19d5e6d39167a82c",
".git/refs/remotes/origin/flutter-one": "07ab389b7aa872c42d1030e4bb5535d2",
".git/refs/remotes/origin/flutter-one-deploy": "e0c044d4b064d5e65807050bfe9091ad",
".git/refs/remotes/origin/master": "c86577d50f4699a313ef0db7878de2af",
".git/refs/remotes/origin/ONE": "0777e622ac77d901510f114e255aeedf",
".git/refs/remotes/origin/WIP": "5ecc61185400c4456972179f05b23cc6",
"assets/AssetManifest.json": "b63847d5dfe3979f5c34427fe78f9ebb",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/email.svg": "6c341a8b5b57f1a7b50e4200779a05ac",
"assets/assets/icons/github.svg": "8e7a3ffddd70234cb8843694f84e01ba",
"assets/assets/icons/linkedin.svg": "2cc91a3bec4aaf505ee23d2bb54eba72",
"assets/assets/images/bg-subtraction-region-growing/bg-subtraction-01.PNG": "7bb651f60ff5a2afa9ed10b547726216",
"assets/assets/images/bg-subtraction-region-growing/bg-subtraction-02.PNG": "92b38232f5ef84e59ca55cba18c5b28c",
"assets/assets/images/bg-subtraction-region-growing/rg-01.jpg": "16191bbaa5288fa63b8ede57e1304305",
"assets/assets/images/bg-subtraction-region-growing/rg-02.jpg": "d791a0efbccd46b6ffb9308776f735e2",
"assets/assets/images/bg-subtraction-region-growing/rg-auto-01.JPG": "17169cc15b5678be9d9b603cc32143a4",
"assets/assets/images/bg-subtraction-region-growing/rg-auto-02.JPG": "a47304074ed29c0420aa735528e82fcd",
"assets/assets/images/cryptotrack/cryptotrack-banner.jpg": "f385c4fdbf224b1da2c8010d402f462f",
"assets/assets/images/cryptotrack/cryptotrack-converter-crypto.jpg": "a1ad74622ed4dfe40905b017d44141da",
"assets/assets/images/cryptotrack/cryptotrack-converter-fiat.jpg": "19a18320aaea213d5ffb498dc830cd6c",
"assets/assets/images/cryptotrack/cryptotrack-converter.jpg": "de5c9570cbd02e21143957b9da2de230",
"assets/assets/images/cryptotrack/cryptotrack-details-page-1D.jpg": "a150f63cb40f60636e0dffa1bcd7f80b",
"assets/assets/images/cryptotrack/cryptotrack-details-page-6M.jpg": "d479a0a655aa8041b5237cf2d56447d7",
"assets/assets/images/cryptotrack/cryptotrack-fav-page-drag.jpg": "de2499da32f1e7028b8b9698c9af8701",
"assets/assets/images/cryptotrack/cryptotrack-fav-page.jpg": "99e9d37081a510806f2ceadad72d2d89",
"assets/assets/images/cryptotrack/cryptotrack-home-page-bottom.jpg": "8c3d9318469a8028f7d19d9b7dc9a541",
"assets/assets/images/cryptotrack/cryptotrack-home-page-top.jpg": "1c38844f3be2a4d28dbda82d07d362db",
"assets/assets/images/cryptotrack/cryptotrack-search-page-searching.jpg": "6ae4329ec9d7d961d13133413aec474a",
"assets/assets/images/cryptotrack/cryptotrack-search-page-sort-modal.jpg": "25808c2b277551d75ac8f7fbe015b7a9",
"assets/assets/images/cryptotrack/cryptotrack-search-page.jpg": "b38a30156675363aedd993a3c9a3c2d6",
"assets/assets/images/home-banners/animated-mesh-neon.gif": "669c491470627d5c5c1798c8b347e5aa",
"assets/assets/images/home-banners/space.gif": "950f3683bea6963fc2ce72bfdfdbdcbc",
"assets/assets/images/orbital-defense/orbital-defense-banner.JPG": "9da20331928c5a92e8c54ad847df40d9",
"assets/assets/images/orbital-defense/orbital-defense-gameover-screen.JPG": "4432924645821183015a8ee903fd348d",
"assets/assets/images/orbital-defense/orbital-defense-home-screen.JPG": "d719497f19459799ecc6d005005c0ad9",
"assets/assets/images/orbital-defense/orbital-defense-ingame-01.JPG": "ed8e2b48cf0213dc2b91dda05cc0716d",
"assets/assets/images/orbital-defense/orbital-defense-ingame-02.JPG": "542be513a83d537183da2e5a4234ea9a",
"assets/assets/images/pac-man/pac-man-01.PNG": "948d8630f4a277d42d01a99c795c8869",
"assets/assets/images/pac-man/pac-man-02.PNG": "2e260dc6c5b0d63dde94252fdcf59254",
"assets/assets/images/pac-man/pac-man-03.PNG": "272f1ecabd4f05f46b28c4967f2e4642",
"assets/assets/images/pac-man/pac-man-04.PNG": "c10ee68cea2266372b39767c5f4b575d",
"assets/assets/images/pac-man/pac-man-banner.PNG": "3ca55e26866ccb134956803f8c784198",
"assets/assets/images/photo_victor_1000x1000.jpg": "ba3c2591fd49aa30d6379b4a59d0dc5b",
"assets/assets/images/pom-vcity/lyon_1er_hdv_terreaux_musee_beaux_arts.png": "e77db3e2108a3324deed7cb97c60fdc4",
"assets/assets/images/pom-vcity/lyon_1er_opera.png": "cff05b9a291ebe2210ae3df0a806511d",
"assets/assets/images/pom-vcity/lyon_3eme.png": "987d15236f44598047d29c4ba4848769",
"assets/assets/images/pom-vcity/lyon_3eme_desgenettes.png": "a8fab664ca36633f9bfd45ac483c4ede",
"assets/assets/images/pom-vcity/lyon_5eme_fourviere_02.png": "73d589f8176f0b6346b5045d03e46d18",
"assets/assets/images/pom-vcity/mont_d_or.png": "e2d3ae111ba626c378388436bbd79039",
"assets/assets/images/pom-vcity/villeurbanne.png": "a3804477ae767204aa8570b962806290",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/icons/email.svg": "6c341a8b5b57f1a7b50e4200779a05ac",
"assets/icons/github.svg": "8e7a3ffddd70234cb8843694f84e01ba",
"assets/icons/linkedin.svg": "2cc91a3bec4aaf505ee23d2bb54eba72",
"assets/images/bg-subtraction-region-growing/bg-subtraction-01.PNG": "7bb651f60ff5a2afa9ed10b547726216",
"assets/images/bg-subtraction-region-growing/bg-subtraction-02.PNG": "92b38232f5ef84e59ca55cba18c5b28c",
"assets/images/bg-subtraction-region-growing/rg-01.jpg": "16191bbaa5288fa63b8ede57e1304305",
"assets/images/bg-subtraction-region-growing/rg-02.jpg": "d791a0efbccd46b6ffb9308776f735e2",
"assets/images/bg-subtraction-region-growing/rg-auto-01.JPG": "17169cc15b5678be9d9b603cc32143a4",
"assets/images/bg-subtraction-region-growing/rg-auto-02.JPG": "a47304074ed29c0420aa735528e82fcd",
"assets/images/cryptotrack/cryptotrack-banner.jpg": "f385c4fdbf224b1da2c8010d402f462f",
"assets/images/cryptotrack/cryptotrack-converter-crypto.jpg": "a1ad74622ed4dfe40905b017d44141da",
"assets/images/cryptotrack/cryptotrack-converter-fiat.jpg": "19a18320aaea213d5ffb498dc830cd6c",
"assets/images/cryptotrack/cryptotrack-converter.jpg": "de5c9570cbd02e21143957b9da2de230",
"assets/images/cryptotrack/cryptotrack-details-page-1D.jpg": "a150f63cb40f60636e0dffa1bcd7f80b",
"assets/images/cryptotrack/cryptotrack-details-page-6M.jpg": "d479a0a655aa8041b5237cf2d56447d7",
"assets/images/cryptotrack/cryptotrack-fav-page-drag.jpg": "de2499da32f1e7028b8b9698c9af8701",
"assets/images/cryptotrack/cryptotrack-fav-page.jpg": "99e9d37081a510806f2ceadad72d2d89",
"assets/images/cryptotrack/cryptotrack-home-page-bottom.jpg": "8c3d9318469a8028f7d19d9b7dc9a541",
"assets/images/cryptotrack/cryptotrack-home-page-top.jpg": "1c38844f3be2a4d28dbda82d07d362db",
"assets/images/cryptotrack/cryptotrack-search-page-searching.jpg": "6ae4329ec9d7d961d13133413aec474a",
"assets/images/cryptotrack/cryptotrack-search-page-sort-modal.jpg": "25808c2b277551d75ac8f7fbe015b7a9",
"assets/images/cryptotrack/cryptotrack-search-page.jpg": "b38a30156675363aedd993a3c9a3c2d6",
"assets/images/home-banners/animated-mesh-neon.gif": "669c491470627d5c5c1798c8b347e5aa",
"assets/images/home-banners/space.gif": "950f3683bea6963fc2ce72bfdfdbdcbc",
"assets/images/orbital-defense/orbital-defense-banner.JPG": "9da20331928c5a92e8c54ad847df40d9",
"assets/images/orbital-defense/orbital-defense-gameover-screen.JPG": "4432924645821183015a8ee903fd348d",
"assets/images/orbital-defense/orbital-defense-home-screen.JPG": "d719497f19459799ecc6d005005c0ad9",
"assets/images/orbital-defense/orbital-defense-ingame-01.JPG": "ed8e2b48cf0213dc2b91dda05cc0716d",
"assets/images/orbital-defense/orbital-defense-ingame-02.JPG": "542be513a83d537183da2e5a4234ea9a",
"assets/images/pac-man/pac-man-01.PNG": "948d8630f4a277d42d01a99c795c8869",
"assets/images/pac-man/pac-man-02.PNG": "2e260dc6c5b0d63dde94252fdcf59254",
"assets/images/pac-man/pac-man-03.PNG": "272f1ecabd4f05f46b28c4967f2e4642",
"assets/images/pac-man/pac-man-04.PNG": "c10ee68cea2266372b39767c5f4b575d",
"assets/images/pac-man/pac-man-banner.PNG": "3ca55e26866ccb134956803f8c784198",
"assets/images/photo_victor_1000x1000.jpg": "ba3c2591fd49aa30d6379b4a59d0dc5b",
"assets/images/pom-vcity/lyon_1er_hdv_terreaux_musee_beaux_arts.png": "e77db3e2108a3324deed7cb97c60fdc4",
"assets/images/pom-vcity/lyon_1er_opera.png": "cff05b9a291ebe2210ae3df0a806511d",
"assets/images/pom-vcity/lyon_3eme.png": "987d15236f44598047d29c4ba4848769",
"assets/images/pom-vcity/lyon_3eme_desgenettes.png": "a8fab664ca36633f9bfd45ac483c4ede",
"assets/images/pom-vcity/lyon_5eme_fourviere_02.png": "73d589f8176f0b6346b5045d03e46d18",
"assets/images/pom-vcity/mont_d_or.png": "e2d3ae111ba626c378388436bbd79039",
"assets/images/pom-vcity/villeurbanne.png": "a3804477ae767204aa8570b962806290",
"assets/NOTICES": "47eb2b0e1786b5b2f901ef9432a9432f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "3880d2074c79fb70672a2a95906095a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "987378730a2998d893fbb85c5da4247a",
"/": "987378730a2998d893fbb85c5da4247a",
"main.dart.js": "614704d9fac906e934135ccac29fc89f",
"manifest.json": "33f800ebfef064613f8dec323b266c5b",
"version.json": "c442cf15f61f5f4eb0931ac9eb5e50d6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
