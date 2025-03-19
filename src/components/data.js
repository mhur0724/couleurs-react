import {
  storeImg,
  lookbookImg,
  graphicsImg,
  hatImg,
  crewnecksImg,
  toteImg,
  hoodieImg,
  shirtImg,
  shortsImg,
  colorfulHoodieImg,
  bwHoodieImg,
  look1Img,
  look2Img,
  look3Img,
  look4Img,
  frontImg,
  graphicsbackground,
  slide3background,
} from "./Images.js";

export const slides = [
  {
    id: 1,
    img: frontImg,
    title: "THE COULEURS MISSION",
    description:
      "Producing aesthetically pleasing products for anyone and everyone.",
    button: "Shop Now",
    backgroundColor: "#9e74d0",
    nav: "/store",
  },
  {
    id: 2,
    img: slide3background,
    title: "We look good together ;)",
    description: "",
    button: "Lookbook",
    backgroundColor: "#ff6991",
    nav: "/lookbook",
  },
  {
    id: 3,
    img: graphicsbackground,
    title: `WE'RE NOT JUST A PRETTY FACE`,
    description: `Check out our graphics collection`,
    button: "GRAPHICS",
    backgroundColor: "#77dd77",
    nav: "/graphics",
  },
];

export const categories = [
  {
    id: 1,
    img: storeImg,
    nav: "/store",
    button: "STORE",
  },
  {
    id: 2,
    img: graphicsImg,
    nav: "/graphics",
    button: "GRAPHICS",
  },
  {
    id: 3,
    img: lookbookImg,
    nav: "/lookbook",
    button: "LOOKBOOKS",
  },
];

const description = [
  {
    crewneck: {
      bullet1: "Regular Fit",
      bullet2: "Crew Neck",
      bullet3: "Mid weight, 5.3 oz/yd2, 24-singles",
      bullet4: "100% combed organic cotton",
      bullet5:
        "Quality cotton grown without the use of herbicides or pesticides - GOTS (Global Organic Textile Standard) certified",
      bullet6:
        "Neck ribbing with twin needle stitch, ribbed cuff, split hem, side seamed, shoulder to shoulder tape, double needle hems, preshrunk to minimize shrinkage",
    },
    hoodie: {
      bullet1: "10 oz (330 gm) cotton/polyester blend 3-end fleece",
      bullet2: "Ring spun cotton",
      bullet3:
        "Solid Colors: 70% Cotton/30% Polyester with 100% cotton 32 singles face yarn for supreme printability and softness",
      bullet4: "Fleece lined hood",
      bullet5: "split stitch double needle sewing on all seams",
      bullet6: "Twill neck tape",
      bullet7: "1x1 ribbing at cuffs and waistband",
    },
    shirt: {
      bullet1: "100% ringspun cotton",
      bullet2: "preshrunk, soft-washed, garment-dyed fabric",
      bullet3: "twill taped shoulder-to-shoulder",
      bullet4: "set-in sleeves",
      bullet5: "double-needle stitched sleeves and bottom hem",
      bullet6: '1" ribbed collar with double-needle topstitched neckline',
    },
  },
];
export const bestSellers = [
  {
    id: 1,
    img: crewnecksImg,
    product: "Crewneck",
    price: "$45.00",
    nav: "/best-sellers/crewnecks",
    sizing: "Fits true to size",
    care: "Machine wash cold, hang dry for increased longevity",
    description: description.crewneck,
  },
  {
    id: 2,
    img: hatImg,
    product: "Hat",
    price: "$20.00",
    nav: "/best-sellers/hat",
  },
  {
    id: 3,
    img: toteImg,
    product: "Tote",
    price: "$30.00",
    nav: "/best-sellers/tote",
  },
  {
    id: 4,
    img: hoodieImg,
    product: "Hoodie",
    price: "$60.00",
    nav: "/best-sellers/hoodie",
    sizing: "Fits true to size",
    care: "Machine wash cold, hang dry for increased longevity",
    description: description.hoodie,
  },
  {
    id: 5,
    img: shirtImg,
    product: "Shirt",
    price: "$25.00",
    nav: "/best-sellers/shirt",
    sizing: "Fits true to size",
    care: "Machine wash cold, hang dry for increased longevity",
    description: description.shirt,
  },
  {
    id: 6,
    img: shortsImg,
    product: "Shorts",
    price: "$35.00",
    nav: "/best-sellers/shorts",
  },
  {
    id: 7,
    img: colorfulHoodieImg,
    product: "Colorful Hoodie",
    price: "$70.00",
    nav: "/product/colorful-hoodie",
    sizing: "Fits true to size",
    care: "Machine wash cold, hang dry for increased longevity",
    description: description.hoodie,
  },
  {
    id: 8,
    img: bwHoodieImg,
    product: "Hoodie",
    price: "$70.00",
    nav: "/product/hoodie",
    sizing: "Fits true to size",
    care: "Machine wash cold, hang dry for increased longevity",
    description: description.hoodie,
  },
];

export const looks = [
  {
    id: 1,
    img: look1Img,
  },
  {
    id: 2,
    img: look2Img,
  },
  {
    id: 3,
    img: look3Img,
  },
  {
    id: 4,
    img: look4Img,
  },
];
