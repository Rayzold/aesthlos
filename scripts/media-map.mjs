// Maps original Wix media ids -> readable local paths under /public/images.
// maxW = longest side to keep for the web version (originals stay in archive/media locally).
export const mediaMap = {
  // shared
  '21375d_212d27a3e8cf4c16852e9bbc8efc88a8_mv2.png': { out: 'shared/logo-white-02', maxW: 1200 },
  '21375d_b427210cdca9411e9f335576ecb5f02e_mv2.png': { out: 'shared/logo-white-01', maxW: 800 },
  '21375d_6c144d26bc1e4a1c84d0f8288486ccef_mv2.png': { out: 'shared/page-background', maxW: 2560 },
  '21375d_55f5ac61a3654cdca48a4917c323badf_mv2.jpg': { out: 'shared/og-ourphilosophy', maxW: 1920 },

  // home
  '21375d_572ef7f0212b4dd2ab457369b48e019d_mv2.png': { out: 'home/aesthlos-all-hero', maxW: 2560 },
  '11062b_fac51a38acf24ea2aa030216e01a0ea3f000.jpg': { out: 'home/infinity-video-poster', maxW: 2560 },
  '21375d_4530e055be6647f8835f3ebfea087c46_mv2.jpg': { out: 'home/infinity-product', maxW: 1600 },
  '21375d_28c6e932d5a946b4809816aa36651611_mv2.png': { out: 'home/composition-earth', maxW: 800 },
  '21375d_3ab7426ed12b418fbf94c984a0cf9bff_mv2.png': { out: 'home/composition-water', maxW: 800 },
  '21375d_794fe81cf2b14a2d802bcce00a4bfd9f_mv2.png': { out: 'home/composition-fire', maxW: 800 },
  '21375d_e1a3e973eaf3476094e6024fb5571886_mv2.png': { out: 'home/composition-air', maxW: 800 },
  '21375d_6cee9aa3fd114d599dd72643434db2ae_mv2.png': { out: 'home/composition-aether', maxW: 800 },
  '21375d_c7a29b5c417240b290097eea0395807a_mv2.png': { out: 'home/aesthlos-honey', maxW: 1920 },

  // ourphilosophy
  '21375d_852f216e9e05438085eaab6716a40a67_mv2.jpg': { out: 'ourphilosophy/section-background', maxW: 2560 },
  '21375d_60ef95dd5b4f420ab4e86c5ba201c425_mv2.png': { out: 'ourphilosophy/slide-1', maxW: 1600 },
  '21375d_abb2bc907b694c988671d43813228e0e_mv2.avif': { out: 'ourphilosophy/slide-2', maxW: 1600 },
  '21375d_db0c2a9e35474311b1f3622922651c03_mv2.avif': { out: 'ourphilosophy/slide-3', maxW: 1600 },
  '21375d_0845d4f325f54674bf4620381b49d7af_mv2.avif': { out: 'ourphilosophy/slide-4', maxW: 1600 },
  '21375d_5171ff074bc64747894bd0502f74ce97_mv2.avif': { out: 'ourphilosophy/slide-5', maxW: 1600 },
  '21375d_030a5d89b2a44930a7e8766e35002969_mv2.avif': { out: 'ourphilosophy/slide-6', maxW: 1600 },
  '21375d_ef28d88c26dd487180ceaa888de9af84_mv2.png': { out: 'ourphilosophy/symbol-earth', maxW: 400 },
  '21375d_b47046b103344638947e50f7af1a2811_mv2.png': { out: 'ourphilosophy/symbol-water', maxW: 400 },
  '21375d_4a8c6a6db0ef478badd2b6a56e469c29_mv2.png': { out: 'ourphilosophy/symbol-fire', maxW: 400 },
  '21375d_810359c0d35e4f758df4f8789045f821_mv2.png': { out: 'ourphilosophy/symbol-air', maxW: 400 },
  '21375d_19d0c371aafc48bb915543e9ed82f84b_mv2.png': { out: 'ourphilosophy/symbol-aether', maxW: 400 },
  '21375d_feae852610ab4961b60a36ae7eb87ea1_mv2.png': { out: 'ourphilosophy/therafoods-fire-composition', maxW: 1500 },
  '21375d_a78b194587f54913ba6f1f012a6d59c4_mv2.png': { out: 'ourphilosophy/honey-formulations', maxW: 1200 },

  // thegreekhoneys
  '21375d_08801509d3e1480a988b25175ff686a4_mv2.png': { out: 'thegreekhoneys/intro-tall', maxW: 1920 },
  '21375d_3b6b476abf5a4897a10c9fcb0af867b5_mv2.png': { out: 'thegreekhoneys/tuv-certification', maxW: 400 },
  '21375d_6fbcd7e7b44c44e0bade78de87b4c8e6_mv2.png': { out: 'thegreekhoneys/eu-non-eu-certification', maxW: 400 },
  '21375d_81d6a38788814448a5163dd0b5a0780d_mv2.png': { out: 'thegreekhoneys/honeys-square', maxW: 1600 },

  // thecompositions
  '21375d_2dadbc5bc2ff48b9b7c715e2b8290211_mv2.png': { out: 'thecompositions/header', maxW: 2560 },
  '21375d_d1cc13c4df624598b1108c2cc1a4a2d5_mv2.jpg': { out: 'thecompositions/tile-earth', maxW: 1400 },
  '21375d_926b539bc53b41dfb94fad31f46c4d51_mv2.jpg': { out: 'thecompositions/tile-water', maxW: 1400 },
  '21375d_3b0730f1115347b8afb525250fcf0af7_mv2.jpg': { out: 'thecompositions/tile-fire', maxW: 1400 },
  '21375d_c8012382c8654134b023e45926e59264_mv2.jpg': { out: 'thecompositions/tile-air', maxW: 1400 },
  '21375d_b8ec79ea9dd34d19aff2767be7eea77b_mv2.jpg': { out: 'thecompositions/tile-aether', maxW: 1400 },

  // honeycollection
  '11062b_44a48dd0e9d043c8a1c1837e9dfeee8df000.jpg': { out: 'honeycollection/video-poster', maxW: 2560 },

  // contact
  '21375d_4baf0168c35e43a18b35ef6c6a0678b2_mv2.jpg': { out: 'contact/greek-honey', maxW: 1600 },

  // products
  '21375d_d9ce0a959f8e428c9cfd2a0e0acd929b_mv2.jpg': { out: 'products/infinity', maxW: 1800 },
  '21375d_2e474d6aa7464c15af6878c4f90af2c8_mv2.png': { out: 'products/earth', maxW: 1800 },
  '21375d_fc83b429b2f3465a85b3a2a98e4ba0bd_mv2.png': { out: 'products/water', maxW: 1800 },
  '21375d_9ca68b1e85e3406882c3ef3fb1d00749_mv2.jpg': { out: 'products/fire', maxW: 1800 },
  '21375d_441f9fbce8c7400d8b0dd88dc70480b8_mv2.png': { out: 'products/air', maxW: 1800 },
  '21375d_519d0b9ffa664439a315fe2fd5da11b7_mv2.png': { out: 'products/aether', maxW: 1800 },
  '21375d_468726de56ea406cba9c2a6902934a61_mv2.jpg': { out: 'products/aether-de', maxW: 1800 },

  // honeys
  '21375d_8875409240004734b04214c090de156c_mv2.png': { out: 'honeys/wild-oak-bees', maxW: 1000 },
  '21375d_375d6491c54e41b88e070b8785c20324_mv2.png': { out: 'honeys/wild-oak-catalog', maxW: 1800 },
  '21375d_84d6c30d000c4c07aabc63af6e8d5cf8_mv2.jpg': { out: 'honeys/wild-oak-honey', maxW: 1000 },
  '21375d_a65aa9db393c4a618ada63feaff55532_mv2.png': { out: 'honeys/forest-honey', maxW: 1800 },
};

export const fileMap = {
  '21375d_6ed06d5b5ec74e3eabf40badfe90cb8a.pdf': 'aesthlos-pistopoiisi.pdf',
  '21375d_64d52d0eb9de4b8ebb210f34ad4cb305.pdf': 'antioxeidotiki-drasi-melion.pdf',
  '21375d_4af6af938b46400392669fb091b07c93.pdf': 'chimikes-analyseis-meli-agrias-velanidias.pdf',
  '21375d_73eb672f52df443291f93878977596e0.pdf': 'chimikes-analyseis-meli-dasous.pdf',
};

export const videoMap = {
  '11062b_fac51a38acf24ea2aa030216e01a0ea3-1080p.mp4': 'home-infinity.mp4',
  '11062b_44a48dd0e9d043c8a1c1837e9dfeee8d-1080p.mp4': 'honeycollection.mp4',
};
