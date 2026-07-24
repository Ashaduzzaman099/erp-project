const products = [
  /* ===================== C ===================== */
  {
    id: "chury-2-5-ec",
    name: "Chury-2.5 EC",
    packSizes: [
      { optionId: "1ltr-10", label: "1 Ltr x 10", unitPrice: 6194 },
      { optionId: "500ml-10", label: "500 ml x 10", unitPrice: 3125 },
      { optionId: "100ml-30", label: "100 ml x 30", unitPrice: 2216 },
      { optionId: "50ml-30", label: "50 ml x 30", unitPrice: 1250 },
    ],
  },

  /* ===================== D ===================== */
  {
    id: "dominant-80-wdg",
    name: "Dominant-80 WDG",
    packSizes: [
      { optionId: "300gm-20", label: " 300gm x 20", unitPrice: 14500 },
      // { optionId: "300gm-10", label: " 300gm x 10", unitPrice: 7250 },
      { optionId: "100gm-20", label: " 100gm x 20", unitPrice: 5000 },
      { optionId: "50gm-20", label: " 50gm  x 20", unitPrice: 2700 },
    ],
  },

  /* ===================== H ===================== */
  {
    id: "hi-root-naa",
    name: "Hi Root Naa-98%",
    packSizes: [{ optionId: "1kg-10", label: "1kg x 10", unitPrice: 853 }],
  },

  /* ===================== L ===================== */
  {
    id: "liger-50-wp",
    name: "Liger-50 WP",
    packSizes: [{ optionId: "100gm-40", label: "100gm x 40", unitPrice: 9091 }],
  },

  /* ===================== M ===================== */
  {
    id: "maburi-80-wdg",
    name: "Maburi-80 WDG",
    packSizes: [
      { optionId: "300gm-20", label: "300gm x 20", unitPrice: 14319 },
      { optionId: "100gm-40a", label: "100gm x 40", unitPrice: 10000 },
    ],
  },
  {
    id: "malaka-80-wdg",
    name: "Malaka-80 WDG",
    packSizes: [
      { optionId: "100gm-20", label: "100gm x 20", unitPrice: 11250 },
      { optionId: "50gm-20", label: "50gm x 20", unitPrice: 6023 },
    ],
  },
  {
    id: "manamu-35-sc",
    name: "Manamu-35 SC",
    packSizes: [
      { optionId: "500ml-10", label: "500ml x 10", unitPrice: 14432 },
      { optionId: "250ml-20", label: "250ml x 20", unitPrice: 15000 },
      { optionId: "100ml-30", label: "100ml x 30", unitPrice: 9205 },
      { optionId: "50ml-20", label: "50ml x 20", unitPrice: 3182 },
    ],
  },

  /* ===================== R ===================== */
  {
    id: "rival-1-8-me",
    name: "Rival-1.8 ME",
    packSizes: [
      // { optionId: "400ml-10", label: "400ml x 10", unitPrice: null },
      { optionId: "100ml-30", label: "100ml x 30", unitPrice: 2950 },
      { optionId: "50ml-30", label: "50ml x 30", unitPrice: 1580 },
    ],
  },

  /* ===================== S ===================== */
  {
    id: "sistop-32-5-sc",
    name: "Sistop-32.5 SC",
    packSizes: [
      { optionId: "500ml-10", label: "500ml x 10", unitPrice: 14432 },
      // { optionId: "500ml-12", label: "500ml x 12", unitPrice: 17319 },
      { optionId: "250ml-12", label: "250ml x 12", unitPrice: 9000 },
      { optionId: "100ml-30", label: "100ml x 30", unitPrice: 9205 },
      { optionId: "50ml-30", label: "50ml x 30", unitPrice: 4875 },
    ],
  },
  {
    id: "senatron-55-ec",
    name: "Senatron-55 EC",
    packSizes: [
      { optionId: "1ltr-10", label: "1ltr x 10", unitPrice: 10522 },
      { optionId: "500ml-10", label: "500ml x 10", unitPrice: 5421 },
      { optionId: "100ml-30", label: "100ml x 30", unitPrice: 3387 },
      { optionId: "50ml-30", label: "50ml x 30", unitPrice: 1819 },
    ],
  },
  {
    id: "spoil-80-wdg",
    name: "Spoil-80 WDG",
    packSizes: [
      { optionId: "100gm-20", label: "100gm x 20", unitPrice: 11250 },
      { optionId: "50gm-20", label: "50gm x 20", unitPrice: 6023 },
    ],
  },

  /* ===================== UCC ===================== */
  // {
  //   id: "ucc-boron-20",
  //   name: "Ucc Born 20%",
  //   packSizes: [{ optionId: "500gm-10", label: "500gm x 10", unitPrice: null }],
  // },
  {
    id: "ucc-boric-17",
    name: "Ucc Boric 17%",
    packSizes: [{ optionId: "500gm-20", label: "500gm x 20", unitPrice: 2960 }],
  },
  {
    id: "ucc-ga-3",
    name: "Ucc GA 3",
    packSizes: [{ optionId: "10gm-10", label: "10gm x 10", unitPrice: 810 }],
  },
  {
    id: "ucc-gyp",
    name: "Ucc Gyp",
    packSizes: [{ optionId: "10kg-1", label: "10 kg x 1", unitPrice: 341 }],
  },
  {
    id: "ucc-zinc-10",
    name: "Ucc Zinc 10%",
    packSizes: [{ optionId: "17gm-60", label: "17gm x 60", unitPrice: 1365 }],
  },
  /* ===================== V ===================== */
  {
    id: "voltage-4-cpa",
    name: "Voltage-4 CPA",
    packSizes: [
      { optionId: "5ltr-1", label: "5 Ltr x 1", unitPrice: 1705 },
      { optionId: "1ltr-10", label: "1 Ltr x 10", unitPrice: 3750 },
      { optionId: "500ml-10", label: "500 ml x 10", unitPrice: 2103 },
      { optionId: "100ml-30", label: "100 ml x 30", unitPrice: 1807 },
    ],
  },

  /* ===================== 9 ===================== */
  // {
  //   id: "bluejeb-72-wp",
  //   name: "BlueJeb 72 WP",
  //   packSizes: [
  //     { optionId: "500gm-12", label: "500gm x 12", unitPrice: 7200 },
  //     { optionId: "100gm-36", label: "100gm x 36", unitPrice: 4619 },
  //   ],
  // },
  // {
  //   id: "nishajeb-80-wp",
  //   name: "Nishajeb 80 WP",
  //   packSizes: [
  //     { optionId: "1kg-10", label: "1kg x 10", unitPrice: 9035 },
  //     { optionId: "500gm-20", label: "500gm x 20", unitPrice: 9273 },
  //     { optionId: "100gm-36", label: "100gm x 36", unitPrice: 3478 },
  //   ],
  // },

  /* ===================== 14 ===================== */
  // {
  //   id: "ucc-zinc-10",
  //   name: "Ucc Zinc 10%",
  //   packSizes: [{ optionId: "17gm-40", label: "17gm x 40", unitPrice: 1365 }],
  // },

  /* ===================== 15 ===================== */
  // {
  //   id: "ucc-mag",
  //   name: "Ucc Mag",
  //   packSizes: [
  //     { optionId: "1kg-20", label: "1kg x 20", unitPrice: null },
  //   ],
  // },

  /* ===================== 23 ===================== */
  // {
  //   id: "bluejeb-72-wp-extended",
  //   name: "BlueJeb 72 WP",
  //   packSizes: [
  //     { optionId: "1kg-10", label: "1kg x 10", unitPrice: 9035 },
  //     { optionId: "500gm-20", label: "500gm x 20", unitPrice: 9273 },
  //   ],
  // },
];

export default products;
