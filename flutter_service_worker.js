'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "23b103ea9f67f77b3483f85f6e83475e",
"assets/assets/7ZAS.gif": "94d1ba0f78cd5306d80b4b6ce4ec591e",
"assets/assets/animation/1.jpg": "fae2df9ef7b59deaf1e599a5ec946728",
"assets/assets/animation/10.jpg": "d172a726c072b5311f50c294fa282a31",
"assets/assets/animation/100.jpg": "ce94d5fb1bf94093b6ed4e986e40ff51",
"assets/assets/animation/101.jpg": "ae2df28eafaa561f66f59f9965d0ce3c",
"assets/assets/animation/102.jpg": "79f8b08d2f8e49f40167c34f75407b93",
"assets/assets/animation/103.jpg": "3c373d5dcb1587bd04d95d4e6d36fe59",
"assets/assets/animation/104.jpg": "fd451c8fe3c356eaf3a19aaea1fbfda1",
"assets/assets/animation/105.jpg": "bf1d9e764a78f99e46d7f199c722ebfe",
"assets/assets/animation/106.jpg": "97c61307e975142186289bfd4c00e1e5",
"assets/assets/animation/107.jpg": "e0560df83557f95b843de2d68e20487a",
"assets/assets/animation/108.jpg": "721b13ad5d133293b9e199bf001430d6",
"assets/assets/animation/109.jpg": "e78982cb9ce744558198cd4f30161312",
"assets/assets/animation/11.jpg": "0fc5accc0e611e29736c72d8feb1144d",
"assets/assets/animation/110.jpg": "63ae1d9020664c412124a6b824f6c12f",
"assets/assets/animation/111.jpg": "6201ae54932bc42e2403437f2b8aa985",
"assets/assets/animation/112.jpg": "3a21d1acde9ae7cbf4cc6763ce154c4e",
"assets/assets/animation/113.jpg": "da1f3647e54bfc1381f34f29549e0636",
"assets/assets/animation/114.jpg": "1ed92d0adfceeb636414d6b597c1a059",
"assets/assets/animation/115.jpg": "5209f17428b322a3bb8d3ab645d1fdbb",
"assets/assets/animation/116.jpg": "1916334fe2c7ac66eeafb4313573658e",
"assets/assets/animation/117.jpg": "a977894c97b86742abd1f2f18fed5284",
"assets/assets/animation/118.jpg": "15147191a0f31ea5c02054130caa1cee",
"assets/assets/animation/119.jpg": "81411ee0e93c581a774e90ca89651068",
"assets/assets/animation/12.jpg": "5a6e2dd1c2dd81c9d98acb15603130b9",
"assets/assets/animation/120.jpg": "c2b11b398d6c9d8ea3e794ebc82ce9d4",
"assets/assets/animation/121.jpg": "7733f7f80a1b918171a7d8229e3aeb8f",
"assets/assets/animation/122.jpg": "b0d9a07b93f505df64ea1f941ee264d4",
"assets/assets/animation/123.jpg": "5ce1fd913efbd9f4aeda7083966c56da",
"assets/assets/animation/124.jpg": "b9ac226e3b4d6b1913505dfc45d283d3",
"assets/assets/animation/125.jpg": "5f2b6af0debbabad71b3931232d74d75",
"assets/assets/animation/126.jpg": "dc2af54f7aaf1bf897075ba5fb3ec4f0",
"assets/assets/animation/127.jpg": "08e6fc27fcc6c7bd5504ed15d7774383",
"assets/assets/animation/128.jpg": "a4ff2e6bc8041f687a8ea482c69019d7",
"assets/assets/animation/129.jpg": "0406a3d8f2ca4c0d2ab691a8eace0d47",
"assets/assets/animation/13.jpg": "a9bbc3d37a89b3fda3f26ba4e77519f8",
"assets/assets/animation/130.jpg": "8abec2bffe6d6fe2789355b3b7dfe0a1",
"assets/assets/animation/131.jpg": "c5261b27b36ed0741687bac85c6b4765",
"assets/assets/animation/132.jpg": "968381453dbb71b4a41b0d747ca694f3",
"assets/assets/animation/133.jpg": "aec625e623c2bb1854b56211fc9d3cf9",
"assets/assets/animation/134.jpg": "e52fb4647701f88bdf86940364fdf4e3",
"assets/assets/animation/135.jpg": "648b30a33ea09b022100d147bc8fb2ff",
"assets/assets/animation/136.jpg": "8753a56b685507fff2e3ae5778dfc04f",
"assets/assets/animation/137.jpg": "f678cd5c79afad534b740da823aef6e1",
"assets/assets/animation/138.jpg": "1fa8941d09c389b17f448585993b61e7",
"assets/assets/animation/139.jpg": "332a47a91900adf2cfbce6b6a3cd9b72",
"assets/assets/animation/14.jpg": "7bf5224fb1287abf34c91c21ce4b8d9f",
"assets/assets/animation/140.jpg": "bf40dfc120cbb63aaf9ce7070e4f83b0",
"assets/assets/animation/141.jpg": "b48ad5f14be3829ef154beaeed355d64",
"assets/assets/animation/142.jpg": "76463b154bf1b46bd3455dc2ce919bb3",
"assets/assets/animation/143.jpg": "af1c2c525ec48517bcc1effe39046b88",
"assets/assets/animation/144.jpg": "c8af77d0faebdc8773d59f756abbb8f5",
"assets/assets/animation/145.jpg": "17341cb7bee8059ab552afef41d9ae32",
"assets/assets/animation/146.jpg": "54b0b05d72dc3fcff9507cb2cfe49a23",
"assets/assets/animation/147.jpg": "cc457786b96df0db2662e44e3bee4ef7",
"assets/assets/animation/148.jpg": "9aa977e0b08cf14bca75a32a49551204",
"assets/assets/animation/149.jpg": "b1f218dd4380784efa5a2e8a9742ecad",
"assets/assets/animation/15.jpg": "34cc21ea434dd081a02bcda5a8161f6c",
"assets/assets/animation/150.jpg": "59602f496fb612e2c9ea793a5a54f36a",
"assets/assets/animation/151.jpg": "d4c11b241b713d63384f157f5508bf92",
"assets/assets/animation/152.jpg": "3b2adfa17e6ce21a18e67b0cdaff59a7",
"assets/assets/animation/153.jpg": "8ec81505ae9dcddbca0e9bae1e4a2bb4",
"assets/assets/animation/154.jpg": "4116700e93f042f15a7a8a2ad045ef9f",
"assets/assets/animation/155.jpg": "6959999c48cb3cf6ab1dcac70102c5be",
"assets/assets/animation/156.jpg": "3552eb069dd51a27dc41818b627be065",
"assets/assets/animation/157.jpg": "6a318a6935b0b1705f819cf01001f366",
"assets/assets/animation/158.jpg": "4d94e4de72529092b200771dc7fe0f11",
"assets/assets/animation/159.jpg": "9b3dcf5d5f39b1dfe7c0e889c8574a77",
"assets/assets/animation/16.jpg": "92f7c90c8a7f7596ba8dbc5f226c18ee",
"assets/assets/animation/160.jpg": "55e19e597e799c6bfc6f998fc4144db6",
"assets/assets/animation/161.jpg": "9da6843ae051b475e8b6b77e5992e179",
"assets/assets/animation/162.jpg": "b63e84cea26a012bb318c6cf76671d73",
"assets/assets/animation/163.jpg": "dfdb607f523253487b75d9553ab7a2e4",
"assets/assets/animation/164.jpg": "010934868a9c02ee6e60bb9082f761c1",
"assets/assets/animation/165.jpg": "f84817cc815067b2be8a4669e7cc10ed",
"assets/assets/animation/166.jpg": "e7d271480eab3002c6a7ee96886b4d01",
"assets/assets/animation/167.jpg": "57e3b0e217a59c952802378268babed4",
"assets/assets/animation/168.jpg": "9b2748652fcdf5a78be3faed42778b9e",
"assets/assets/animation/169.jpg": "9e538a31008d6118fc99bb60816e1da1",
"assets/assets/animation/17.jpg": "878eb79dfdd8c84568097850d73d84c0",
"assets/assets/animation/170.jpg": "352157f457bd210ed0519d8a59d72ab3",
"assets/assets/animation/171.jpg": "4850dccd996f3b7f7574979c7d46384d",
"assets/assets/animation/172.jpg": "cd709a1489da50684fd4176e11ff13c8",
"assets/assets/animation/173.jpg": "b29ac1ce76608ab9369c50254072286a",
"assets/assets/animation/174.jpg": "003ec9a8c27cc5f46c68d2d9f6f9b824",
"assets/assets/animation/175.jpg": "4ffc5d8cec2792ecc84d430bd351981b",
"assets/assets/animation/176.jpg": "c7a07fd69a3c0346dfb445caf5be3d42",
"assets/assets/animation/177.jpg": "510d919869403ecf18e4000db81614cd",
"assets/assets/animation/178.jpg": "c44351cb6f250a1b1732073d069881dc",
"assets/assets/animation/179.jpg": "cd40adcb5b4f8ef10fdede664fd03ab8",
"assets/assets/animation/18.jpg": "9190dfcc6d00f1bd1f82c61f04b73d32",
"assets/assets/animation/180.jpg": "086bd43ce23b3bb00c12ecaf3aca5dba",
"assets/assets/animation/181.jpg": "9c43e87c032293566fefe0425a593ca9",
"assets/assets/animation/182.jpg": "56dea0ad3342c51eae14a5c0c68789e3",
"assets/assets/animation/183.jpg": "07a716c3c4ca185479f5c8c0964e7fae",
"assets/assets/animation/184.jpg": "226cec46523e96a1c3a3dd4a1ac86969",
"assets/assets/animation/185.jpg": "6e71b4a23be6b980a1216a7b17bc509c",
"assets/assets/animation/186.jpg": "f697652465a58cb71ea8ef4870632d25",
"assets/assets/animation/187.jpg": "6a9eafc446549102756655cf5e578751",
"assets/assets/animation/188.jpg": "8541dc5b2cb42597dc541fb14f907533",
"assets/assets/animation/189.jpg": "5b5cee822a0189db85c4c7738b2af6f2",
"assets/assets/animation/19.jpg": "206f60b0c976e23136a1a53cae19e1e6",
"assets/assets/animation/190.jpg": "b711bc2df5e6e609b623f9a246c75da9",
"assets/assets/animation/191.jpg": "2781943f568254265bb8d73f1a3b8d38",
"assets/assets/animation/192.jpg": "d49cb51375d8cf1a3149bb7c1d363f4b",
"assets/assets/animation/193.jpg": "9114914102715ca69acbb9b5d2b473a0",
"assets/assets/animation/194.jpg": "7126064d6800e0c9b8fa37bf20f5875b",
"assets/assets/animation/195.jpg": "ccea382f4a32996953aae43ebaef72b9",
"assets/assets/animation/196.jpg": "026c5fb2c1760c747d43748cf1170274",
"assets/assets/animation/197.jpg": "da08511b7865bddaabf14817937d2784",
"assets/assets/animation/198.jpg": "3f9458aea2209576ab55ea3add16c6d5",
"assets/assets/animation/199.jpg": "88a5f3ad2299366f4968bb40141da152",
"assets/assets/animation/2.jpg": "bd8f0767b43e0ad29e691516c12fc0e3",
"assets/assets/animation/20.jpg": "8390981963cee2f2f5843b5bb81cc167",
"assets/assets/animation/200.jpg": "3cbe1555c995c53dab62c800f28ad2a3",
"assets/assets/animation/201.jpg": "8a53940d306b26edf9cdfa3a02f23ddb",
"assets/assets/animation/202.jpg": "a84b03d0fad49ad4721b55838f2ae06e",
"assets/assets/animation/203.jpg": "220c3aaed740a109c8df2c8a38109fa9",
"assets/assets/animation/204.jpg": "7be902db1f7c47cfc5481a76a5d629e2",
"assets/assets/animation/205.jpg": "09763d32610e0a95b42b0284418383a7",
"assets/assets/animation/206.jpg": "c4f5c8fc456cfdb5982c0a4d4bf9f834",
"assets/assets/animation/207.jpg": "896a193616e4600a86587deefeba152b",
"assets/assets/animation/208.jpg": "b6c109a43a14aa0e4866aea0908c2d5a",
"assets/assets/animation/209.jpg": "772a40a5d0ee97d4e09820475b5c6c55",
"assets/assets/animation/21.jpg": "d9c23fe01031c5c7009b18d65ebf5744",
"assets/assets/animation/210.jpg": "41340f02797dc87557b0249aa34502f0",
"assets/assets/animation/211.jpg": "9a6b50179ded5b318e7ea540b27f32e1",
"assets/assets/animation/212.jpg": "6ed95475485b85e33d82537b7c27b6dd",
"assets/assets/animation/213.jpg": "f6bd685d72033c559992924bdc9f55ae",
"assets/assets/animation/214.jpg": "fc12eeeba630660272bfd95733a35797",
"assets/assets/animation/215.jpg": "ebb6ac72afd1cafc2a7f87c5693a33b8",
"assets/assets/animation/216.jpg": "33dac08ff00edb9b4f433d27948282d7",
"assets/assets/animation/217.jpg": "156ca521b58ebfd8218123ac1d13260d",
"assets/assets/animation/218.jpg": "389d7a2f4af3153412848cfcc0b46b3d",
"assets/assets/animation/219.jpg": "2717bf2519a297027813ff6032d9d59f",
"assets/assets/animation/22.jpg": "6a7c6ef5abb0d90e766977b44c4bf193",
"assets/assets/animation/220.jpg": "3a097b069aa762c3f8086d862f0ff991",
"assets/assets/animation/221.jpg": "5e71b9d3e866806322ba2231d8fc713d",
"assets/assets/animation/222.jpg": "723417c96d999c7027a0651cfb397f3d",
"assets/assets/animation/223.jpg": "e4aba5a789f4a559d26d2cf6496abc3f",
"assets/assets/animation/224.jpg": "ff38fc6cab8d8897e82480437e67f718",
"assets/assets/animation/225.jpg": "ac44fb528cf12de3a26ef223a2efff57",
"assets/assets/animation/226.jpg": "f69155823c7dbaeaf6eab9531949fc8c",
"assets/assets/animation/227.jpg": "26427801571bdfca4a578a91048867c7",
"assets/assets/animation/228.jpg": "19fed75e76b1c4ba423b93e8313ef817",
"assets/assets/animation/229.jpg": "9b08c74ef2b74a808492b2a73788626c",
"assets/assets/animation/23.jpg": "248fcc875b651032db85269a9ac86e96",
"assets/assets/animation/230.jpg": "b7d60ae4459f15e35b592ed4058c9d83",
"assets/assets/animation/231.jpg": "5e257de56efac523df5b6a8926762631",
"assets/assets/animation/232.jpg": "954b7e5fac0555f75a5434e30b31f89c",
"assets/assets/animation/233.jpg": "ee9bd2d32c5bcb440f9b9f673aaaf0b2",
"assets/assets/animation/234.jpg": "3a39abd0fed2ab219a07b47005063e34",
"assets/assets/animation/235.jpg": "296963f1243a8ab8ba9179ce3a000b96",
"assets/assets/animation/236.jpg": "d84ee52126221cae3918c2b8c33a5413",
"assets/assets/animation/237.jpg": "f44fe5ac2831143cc3da5f0d997bbcaf",
"assets/assets/animation/238.jpg": "51a9e4ebae6a66925889dc271ac1916a",
"assets/assets/animation/239.jpg": "5ab4bc6c91c15985f82a4d560be127b5",
"assets/assets/animation/24.jpg": "521898127b742de2a7a0ee64244f2b2a",
"assets/assets/animation/240.jpg": "a7f688d2e3c16a79a86d4ae86945d467",
"assets/assets/animation/25.jpg": "c2eb791331a8a7ebade343f6e1be9955",
"assets/assets/animation/26.jpg": "0c27479950e26eee9f5b3f4dc93855bd",
"assets/assets/animation/27.jpg": "a66f7f75cb2b7c83bc46e4dbc12730a9",
"assets/assets/animation/28.jpg": "e00dabf4e0f19231cea753d5fd98111d",
"assets/assets/animation/29.jpg": "a916b01ac07cc009059f8dd754af6200",
"assets/assets/animation/3.jpg": "315dd43622e431dc8aa8fd341a802fa5",
"assets/assets/animation/30.jpg": "4423cf717fbd3f3b59bfdf4dc410b0f9",
"assets/assets/animation/31.jpg": "d835f819db3ff9f390d4c0b2a06191b1",
"assets/assets/animation/32.jpg": "8a4ec09287075f180d30b668fde1fef4",
"assets/assets/animation/33.jpg": "125478787935485a4d7c580d365904c3",
"assets/assets/animation/34.jpg": "3c370660fbec4a5668c6be15643a7a0f",
"assets/assets/animation/35.jpg": "4b0ff530ba92faedaae91de4c7711539",
"assets/assets/animation/36.jpg": "dc5b4c77f8db3c2551c1f2352cdbe3d1",
"assets/assets/animation/37.jpg": "45683caaad1a82e4afe892a6753ac0c4",
"assets/assets/animation/38.jpg": "adbb39f1399bc5f2e6f39f97c39ee393",
"assets/assets/animation/39.jpg": "215a5b657003e169a119c0a4bc4750c8",
"assets/assets/animation/4.jpg": "301d13edf278a1b1f682f41a07298ace",
"assets/assets/animation/40.jpg": "998f70da2ff94ed14a4a5a86c4d38ef7",
"assets/assets/animation/41.jpg": "fe4882c3a31af0b9aa6ca887fdb2733e",
"assets/assets/animation/42.jpg": "d549ddba2868bc47936cf0c8cdbf5c34",
"assets/assets/animation/43.jpg": "9b189d9ded46e220167668c1509bd1e1",
"assets/assets/animation/44.jpg": "3df9ef2c9bb30d2d2bf659881b1cc482",
"assets/assets/animation/45.jpg": "590ca0081fcdbcd40fcc5a8a0be11f29",
"assets/assets/animation/46.jpg": "6837db8f9608274ae4b6b0a881ba17db",
"assets/assets/animation/47.jpg": "fa6ec057f82e12e1bc2e735a752734f1",
"assets/assets/animation/48.jpg": "bbc37452b572ddbc315e4a60a18c9ec9",
"assets/assets/animation/49.jpg": "dd6becc4ba1b16dc46f65b55bdd669e3",
"assets/assets/animation/5.jpg": "a55ff57255db6346679d844c4cd5dd8e",
"assets/assets/animation/50.jpg": "56bc50b806abe04dbe656d359c1a3f89",
"assets/assets/animation/51.jpg": "a9d0396334573fd3af93fb4b0b784baf",
"assets/assets/animation/52.jpg": "099a2da79cf5b684ba8599f11d1aedd1",
"assets/assets/animation/53.jpg": "91288abfd792174903e9e3b47e029e78",
"assets/assets/animation/54.jpg": "6f44ba49afb285f8fdcede0e08b6547a",
"assets/assets/animation/55.jpg": "bcd527caad46c4a890cdd354ae4fb348",
"assets/assets/animation/56.jpg": "8ccd9cfb0969037f5ad92495e356eb5c",
"assets/assets/animation/57.jpg": "39009730f8fb31f25f12655f5c418d52",
"assets/assets/animation/58.jpg": "74214e292b8ba2bfc52fa0bc90552929",
"assets/assets/animation/59.jpg": "65de469715bf64614e22be4a555327ae",
"assets/assets/animation/6.jpg": "3f8fb3fbebd30e2dbcb49fbe208c9f2f",
"assets/assets/animation/60.jpg": "2bd898f08a25f8c062094db81bcadc10",
"assets/assets/animation/61.jpg": "0ec6a56185c208fe31e5a92eb9d80bc6",
"assets/assets/animation/62.jpg": "73d46d35de18f90290fa0b67e020c466",
"assets/assets/animation/63.jpg": "6c58fc1d573aed524a4eaf334547f051",
"assets/assets/animation/64.jpg": "24bd0fb4f701ebc72ad7fc1add98a1f4",
"assets/assets/animation/65.jpg": "13b515b41235f1c5e19487a07e181c77",
"assets/assets/animation/66.jpg": "0b0bfcf39cb0fed8249cc983198d3153",
"assets/assets/animation/67.jpg": "a56c715407c7fcdee6a804db83c08321",
"assets/assets/animation/68.jpg": "ee7a31bc7429dd33f263c1c85f96cc12",
"assets/assets/animation/69.jpg": "ad1a521e94d71a8e02a44e3e2e0862af",
"assets/assets/animation/7.jpg": "a806573a49bc12211e44a057bf30d8e4",
"assets/assets/animation/70.jpg": "039db25934dae1e536c57cd790a09548",
"assets/assets/animation/71.jpg": "dd7fe97c78feb028c7b37d9a48e04b81",
"assets/assets/animation/72.jpg": "49b0b7a087ed70138981117832dcb1f4",
"assets/assets/animation/73.jpg": "bcd38695bd44408a1b2d8e662c8f9fe8",
"assets/assets/animation/74.jpg": "34d873b5c6376e23cf5b1c37ef99c680",
"assets/assets/animation/75.jpg": "7484a491889f0e930ddde3ca1dc0cc3f",
"assets/assets/animation/76.jpg": "2900131f5f15956ca08fd4d026824040",
"assets/assets/animation/77.jpg": "c967254e5129856a788215afa3b7f460",
"assets/assets/animation/78.jpg": "f2255af41c3732027b2e514f30cb053c",
"assets/assets/animation/79.jpg": "ef79a8b000b1e1783920913e5eb58324",
"assets/assets/animation/8.jpg": "4563e6cdf92b79af25f447b4b4e8472d",
"assets/assets/animation/80.jpg": "bc1691807415228664482a2eb7395d13",
"assets/assets/animation/81.jpg": "e3a56ee778824b33d6da9b48ddf9fce8",
"assets/assets/animation/82.jpg": "6048da7b02cc68c9ef9a97c46b1ccb30",
"assets/assets/animation/83.jpg": "ba1d6f5294663c5e5319fddde52c8ffb",
"assets/assets/animation/84.jpg": "4891744535a5d479032aece944760b64",
"assets/assets/animation/85.jpg": "9d55a6c60d19ca05a171e5803553f501",
"assets/assets/animation/86.jpg": "60d6b64eab08c038bb5024c0fbea56a4",
"assets/assets/animation/87.jpg": "84c745fb1395df0a4f285242392cdc60",
"assets/assets/animation/88.jpg": "90f7abaeea0569de44e4f0d60b7e9a72",
"assets/assets/animation/89.jpg": "900900c40b4794523ccae3551ebaa2ba",
"assets/assets/animation/9.jpg": "96aaea97740face377356d5c72622029",
"assets/assets/animation/90.jpg": "4f747471dce62f446df864171ffd4889",
"assets/assets/animation/91.jpg": "e246d15cb9c8f34e389a859e1d4930ef",
"assets/assets/animation/92.jpg": "bf6c7cc6a44fb9e2042b7b32cf0a0d85",
"assets/assets/animation/93.jpg": "a1cb71bf4c36a1e682765b962f75ac27",
"assets/assets/animation/94.jpg": "2c140cac076ffec8cb994f69ebe0b342",
"assets/assets/animation/95.jpg": "02df56f37720def88ed8c543a3fb7040",
"assets/assets/animation/96.jpg": "d63d71203c4add020a2814e8db2c1b69",
"assets/assets/animation/97.jpg": "648353ef91cb41b23af880c8ff5f4130",
"assets/assets/animation/98.jpg": "9b7b3330290b615883523630fe664977",
"assets/assets/animation/99.jpg": "16c9bc44ffea0cd5958bd512887266dc",
"assets/assets/bubble.svg": "5b2516139ec20812e4bf89ee6659f95f",
"assets/assets/bubble2.png": "d0640e5e667edc32147bebed21a9ece1",
"assets/assets/code.jpg": "2b7760ffc4f8d6e478dc4de3f630c91b",
"assets/assets/electronics.jpg": "8798c729ca3521dbce19e630bd4cee89",
"assets/assets/flutter.png": "d14238023e08433880b2c011f231e3a0",
"assets/assets/logo.png": "dcf2526d79cb056808090b6b24bd74fe",
"assets/assets/square.png": "8040b633df346bd3f1379ddb90490a64",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4810a787b6b33475164cc087125bdbf8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8513acc8b67804afb5abe60a7ad129ad",
"/": "8513acc8b67804afb5abe60a7ad129ad",
"main.dart.js": "8f9571771d3818fa5f322e1e07e33213",
"manifest.json": "785b07c22c78ef4c8be41883506a4ba8",
"version.json": "b43426cbf0146da74d98e34e04e3140d"
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
