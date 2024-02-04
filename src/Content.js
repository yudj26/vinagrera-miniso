import React from "react";
import Module from "./Module";
import Subnav from "./Subnav";
import News from "./News";
import Footer from "./Footer";

const navItems = [
  {
    imageSrc: "images/superior1.png",
    imageHoverSrc: "images/superior1_h.png",
    caption: "Household Items",
    link: "javascript:void(0)",
  },
  {
    imageSrc: "images/superior2.png",
    imageHoverSrc: "images/superior2_h.png",
    caption: "Daily Life Products",
    link: "javascript:void(0)",
  },
  {
    imageSrc: "images/superior3.png",
    imageHoverSrc: "images/superior3_h.png",
    caption: "Health & Beauty",
    link: "javascript:void(0)",
  },
  {
    imageSrc: "images/superior4.png",
    imageHoverSrc: "images/superior4_h.png",
    caption: "Fashion Accessories",
    link: "javascript:void(0)",
  },
  {
    imageSrc: "images/superior7.png",
    imageHoverSrc: "images/superior7_h.png",
    caption: "Digital Products",
    link: "javascript:void(0)",
  },
  {
    imageSrc: "images/superior9.png",
    imageHoverSrc: "images/superior9_h.png",
    caption: "Food & Beverage",
    link: "javascript:void(0)",
  },
];
const productItems = [
  [
    {
      link: "/EN/Product/Details?id=100000029526656",
      imageSrc: "images/111.jpg",
      title: "Plush Doll",
      description:
        "Comfortable and skin-friendly, soft and extrusion resistant; Say NO to shoddy cotton, insist on using high-quality cotton filling, provide you with a surprising soft touch; Microcomputer controlling cutting machine - imported electromechanical embroidery machine - sewing - full cotton - precision sewing.",
      altText: "Plush Doll",
    },
    {
      link: "/EN/Product/Details?id=100000030932469",
      imageSrc: "images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(23).jpg",
      title: "Little M Night Light",
      description:
        "The small night light was designed by the Norwegian designer team Permafrost of MINISO. Four designers of Permafrost graduated from the Oslo School of Architecture (Norway’s top three design school), who designed products for Adidas and other famous brands, and now are serving MINISO. Simple, practical and humanized design style.",
      altText: "Little M Night Light",
    },
    {
      link: "/EN/Product/Details?id=100000065947813",
      imageSrc: "images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(1).jpg",
      title: "Noodles Bowl",
      description:
        "Colorful, enlarge and deepen the sizes, can be both used to make instant noodles and retain freshness of food; Using 304 stainless steel inside, and environmental friendly food-grade PP materials externally. Lid sealing and anti-overflow functions, air vent and pressure release design, easy to carry; Household uses, avoid smell leakage; Easy to bring food to work and keep food fresh; Take it for a picnic and enjoy your meal.",
      altText: "Noodles Bowl",
    },
    {
      link: "/EN/Product/Details?id=100000028886744",
      imageSrc: "images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(2).jpg",
      title: "Scent Diffuser",
      description:
        'Cooperate with "Givaudan", the world-class supplier with 180 years of history, which is also serving top brands such as DIOR, CHANEL, GUCCI and so on; Natural plant extract essence, 5 kinds of scent, elegant fragrance, farewell to peculiar smell, relaxing and soothing; Nordic style, adding a little bit elegance to your house.',
      altText: "Scent Diffuser",
    },
  ],
  [
    {
      link: "/EN/Product/Details?id=100000032345648",
      imageSrc: "images/%E6%97%85%E8%A1%8C%E6%94%B6%E7%BA%B3.jpg",
      title: "Storage Bag",
      description:
        "Different thickness of the bag leads to different tactility. If the bag is too thick that it will weight too heavy, which may affect the user experience; while it may be easy to frazzle if it is too thin of the bag. After many times of researches and development, it was finally determined that the thickness was just right.",
      altText: "Storage Bag",
    },
    {
      link: "/EN/Product/Details?id=100000031687339",
      imageSrc:
        "images/%E7%A5%A5%E4%BA%91%E7%B3%BB%E5%88%97%E9%A4%90%E5%85%B7.jpg",
      title: "Tableware",
      description:
        "Imported plates, mainly are the fine 18-10 stainless steel plates from the Outokumpu; Surface degree of finish of stainless steel tableware is higher than national standard (Ra<0.1um), hard to be infected by germs and easy to clean, ensuring food safety; Bending angle shaped by moulds, showing elegant curvature.",
      altText: "Tableware",
    },
    {
      link: "/EN/Product/Details?id=100000028127891",
      imageSrc: "images/%E7%91%9E%E8%BF%AA%E4%BF%9D%E9%B2%9C%E7%9B%92.jpg",
      title: "Food Container",
      description:
        "Made of natural glass material, both practical and environmental friendly; Free of PVC and other harmful substances, using safe silicone to maintain safety; Unique design that makes two to be one, seperating food to avoid taint of odor, saying goodbye to heavy meal box set, more portable; Smooth round glass, easy to clean, can be used in microwave, oven and dishwasher.",
      altText: "Food Container",
    },
    {
      link: "/EN/Product/Details?id=100000027473768",
      imageSrc: "images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(24).jpg",
      title: "Card Bag",
      description:
        "Using environmental friendly kraft paper materials, vintage style, simple and decent, showing your good taste. Exquisite workmanship, high quality hardware zipper, smooth and unstuck zip, very durable; Be made of high tenacity nylon thread, which is reinforced and sewn by high precision machine. Multi-card design, small size with large capacity, be able to accommodate more bank cards, portable and convenient.",
      altText: "Card Bag",
    },
  ],
  [
    {
      link: "/EN/Product/Details?id=100000037923433",
      imageSrc: "images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(25).jpg",
      title: "Deodorant Sprayer",
      description:
        "One bottle with two usages, fresh scents, natural plant extract essence, farewell to peculiar smell, portable. Natural plant extract essence, four kinds of odors give you pleasant feelings; Cooperating with Chinese top fragrance suppliers, with natural plant extract essence, blended and made by professional flavorists, four kinds of sweet perfume smell fresh and make you feel like you were in the flowers.",
      altText: "Deodorant Sprayer",
    },
    {
      link: "/EN/Product/Details?id=100000037289486",
      imageSrc: "images/%E8%8A%A6%E8%8D%9F%E9%9D%A2%E8%86%9C.jpg",
      title: "Mask",
      description:
        "Moisturizing and restoring, fine, smooth and transparent, fall in love with nature, to meet a better you; Austrian tencel mask, 100% derived from plant fiber, forming a light and soft texture; good breathability and strong water-absorbability. The 3D mesh cross-cutting fits facial contour closely, and the essence can gently penetrate into deep skin to nourish the skin more comprehensively.",
      altText: "Mask",
    },
    {
      link: "/EN/Product/Details?id=100000036596328",
      imageSrc: "images/%E4%BF%8F%E5%A5%B3%E5%AD%A9%E9%A6%99%E6%B0%B4.jpg",
      title: "Girl Perfume",
      description:
        "Lovely Girl Perfume, sweet, pure, clean and a little bit of icy cold, just like our age of youth, which is lively with a little worry; Made by Carine Boin, the chief perfumer of Givaudan, the Lovely Girl Perfume is gentle and sweet. The fresh flower and fruit fragrance, and the dream pink perfume, form a romantic sweet smell.",
      altText: "Girl Perfume",
    },
    {
      link: "/EN/Product/Details?id=100000035816534",
      imageSrc: "images/%E6%9C%AA%E6%A0%87%E9%A2%98-1(8).jpg",
      title: "Liquid Lipstick",
      description:
        'MINI PONI make-up series, "fantasy mythic makeup to express youself"; Formula researched and developed by INTERCOS, a world-class luxury supplier; Fashionable colors to create the dream makeup for girls; 6 optional colors, velvet texture, perfect lip color outlined by a single lipstick.',
      altText: "Liquid Lipstick",
    },
  ],
  [
    {
      link: "/EN/Product/Details?id=100000043548597",
      imageSrc:
        "images/%E7%9C%BC%E7%BD%A9-%E4%BC%98%E9%80%89%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8%E5%9B%BE(1).jpg",
      title: "Eyeshade",
      description:
        "Common eye masks can only be used when you take a rest. You can&#39;t play with your cell phone or read a book when you put on your eye masks. While the visible-design eye mask can make you see through the eye mask and have a SPA for your eyes at the same time; 5 patterns optional, masked ball style, go and invite your besties to have a masked ball with you.",
      altText: "Eyeshade",
    },
    {
      link: "/EN/Product/Details?id=100000042874233",
      imageSrc: "images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(26).jpg",
      title: "Bath Slippers",
      description:
        "EVA material and thick sole make the slippers anti-skidding and comfortable. Difficult to crack, good quality, soft and elastic, without peculiar smell, protecting your feet from scratches; Geometric pattern sole, EVA material, waterproof, anti-skidding and protecting your feet from scratches; Light and comfortable, toes massage, essential for homeware and travelling.",
      altText: "Bath Slippers",
    },
    {
      link: "/EN/Product/Details?id=100000041424626",
      imageSrc: "images/%E7%9C%BC%E7%BD%A9.jpg",
      title: "Cotton Eye Mask",
      description:
        "On the premise of simplicity and comfort, the concept of improving sleep quality and relieving eye fatigue, the two-side cotton eye mask using soft and breathable fabric,is of zero pressure to eyeballs, and curved edge design fits facial structure more perfectly.",
      altText: "Cotton Eye Mask",
    },
    {
      link: "/EN/Product/Details?id=100000040742184",
      imageSrc: "images/%E4%BA%A7%E5%93%81%E5%88%97%E8%A1%A8(27).jpg",
      title: "Umbrella",
      description:
        "Everything seems hot in summer. We want to go out but we dare not to do so. Of course, people can always find a way. You can hardly go out without a sunshade in the hot summer; In every sunny day, wish you may have an umbrella to hold up a moving cool for you and let you become the beauty itself. This summer, let&#39;s meet under the MINISO umbrella!",
      altText: "Umbrella",
    },
  ],
  [
    {
      link: "/EN/Product/Details?id=100000047099551",
      imageSrc:
        "images/%E8%93%9D%E7%89%99%E9%9F%B3%E7%AE%B1%E5%88%97%E8%A1%A8%E5%9B%BE.jpg",
      title: "Bluetooth Speaker",
      description:
        "The ventilated metal mesh surface is matched with the ABS plastic shell of pure color, showing the elegant and refined design style and keeping the natural sound effects at the same time. Simple and decent, easy operation, comfortable feeling, Chinese red shows noble, and classic black looks more decent; Bluetooth + TF card + USB drive + AUX connection, four play modes, built-in 2000mA battery, long endurance, 4W*2 high power output, shocking bass pitch quality.",
      altText: "Bluetooth Speaker",
    },
    {
      link: "/EN/Product/Details?id=100000046389686",
      imageSrc: "images/%E8%80%B3%E6%9C%BA.jpg",
      title: "Headphone",
      description:
        "The standard pieces of the young people of vitality, simple, sharp and comfortable. Soft earmuffs, perfect feeling, environmental friendly, durable and easy maintenance; Support mobile phone, tablet accessories and most of the Bluetooth device connections or AUX cable control connections.",
      altText: "Headphone",
    },
    {
      link: "/EN/Product/Details?id=100000044994413",
      imageSrc: "images/%E9%94%AE%E7%9B%98.jpg",
      title: "Mechanical Keyboard",
      description:
        "High keycap structure and backlit mechanical wired keyboard, suitable for desktop and laptop computers; Laser carving keycap, hard to fade, compatible with Windows:2000/ME/XP(X64)/ vista7/8/10 /Mac OS X(V10.4 above) and other systems.",
      altText: "Mechanical Keyboard",
    },
    {
      link: "/EN/Product/Details?id=100000044286821",
      imageSrc: "images/%E6%9C%AA%E6%A0%87%E9%A2%98-1(9).jpg",
      title: "Screen Protector",
      description:
        "Anti-peep tempered glass screen protector, 180 ° anti-peep, protect you from being peeped; 9H hardness, wear-resistant and scratch-resistant, leaving no marks by being scratched by keys, knives and other hard objects; Anti-fingerprint surface, hydrophobic and does not disperse water and oil, hard to adhere fingerprint, so that the screen will remain clean for a long time.",
      altText: "Screen Protector",
    },
  ],
  [
    {
      link: "/EN/Product/Details?id=100000051941927",
      imageSrc: "images/%E7%88%86%E7%B1%B3%E8%8A%B1.jpg",
      title: "Popcorn",
      description:
        "Select imported American corn (non-GMO), big and full grain, uniform color, healthy nutrition, taste sweet; processing with refined vegetable oil, farewell to the traditional image of sticky and low nutritional value, experience the natural and crisp taste.",
      altText: "Popcorn",
    },
    {
      link: "/EN/Product/Details?id=100000051251988",
      imageSrc: "images/%E8%8D%89%E8%8E%93%E5%B9%B2.jpg",
      title: "Strawberries",
      description:
        "High quality fresh strawberries selected from Shandong Province, greenhouse planting, do not use swelling agent, each straberry is plump and sweet; Using special technology to preserve the original taste of fresh fruit, making it chewy with tender taste. Each strawberry has a bright and attractive color, containing the right amount of sugar.",
      altText: "Strawberries",
    },
    {
      link: "/EN/Product/Details?id=100000050545447",
      imageSrc: "images/%E7%8C%AA%E8%82%89%E8%84%AF.jpg",
      title: "Meat / Seafood",
      description:
        "Grilled by fruitwood charcoal, unique taste, delicious, fine but not greasy; The pork is of high quality, and the meat is thick and chewy. Baked at 220 ℃ for 8 hours, making it be evenly heated, so that it can has a good mouthfeel and becomes dull-red and glossy.",
      altText: "Meat / Seafood",
    },
    {
      link: "/EN/Product/Details?id=100000049811954",
      imageSrc: "images/%E5%88%97%E8%A1%A8%E5%86%B0%E6%B3%89.jpg",
      title: "Mineral Water",
      description:
        "Originating from the water source of nature reserve of the United Nations, with the forest coverage rate reaching 95%, which is China's largest natural mountain spring production base, and China's first national nature reserve; Low sodium content/low mineralization, sweet taste; Sodium content is less than or equal to 1.0mg/L, potassium content is less than or equal to 0.4mg/L, and magnesium content is less than or equal to 0.1mg/L.",
      altText: "Mineral Water",
    },
  ],
];
const newsItems = [
  {
    id: "100000324529679",
    imageUrl:
      "images/%E5%85%A8%E7%90%83%E4%BB%A3%E7%90%86%E5%95%86%E5%A4%A7%E4%BC%9A.png",
    title:
      "Global Lifestyle Retailer MINISO Announces New Partnerships and Expansion Plans in Four Markets",
    content:
      "Global lifestyle retailer MINISO has announced its plans to expand operations into three new markets, namely Angola, Trinidad and Tobago, and Latvia. With Panama, the four new partnerships were unveiled during MINISO’s Global Partners Summit, held in Guangzhou, China, in March 2023.",
  },
  {
    id: "100000323827981",
    imageUrl: "images/%E5%9B%BE%E7%89%877(2).png",
    title:
      "MINISO expands its U.S. operations southwards, opening six new stores in Florida and Texas",
    content:
      "On November 25th, MINISO opened four new stores in Texas and two in Florida, doubling the global value retailer’s store count in these states.",
  },
  {
    id: "100000323146574",
    imageUrl:
      "images/%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16788503316324.png",
    title:
      "Miniso Malaysia: Present the best and happiest things to everyone on earth",
    content:
      "Most people’s impressions of MINISO are that it has all kinds of products, ranging from children’s toys, electronic products, snacks, hygiene products, perfumes, and even lipsticks! You can find them all in MINISO stores!",
  },
];

const Content = () => {
  return (
    <div className="content">
      <Module
        leftLink="/brand"
        leftImgSrc="/images/brandconceptnew.jpg"
        leftTitle="Brand Profile"
        leftSubTitle=""
        centerText="Franchise Information"
        centerSubText="We are looking for master franchisee !"
        centerMoreLink="/franchise"
        rightLink="/franchise"
        rightImgSrc="/images/distributor.jpg"
        rightTitle="Franchise"
      />
      <Subnav navItems={navItems} productItems={productItems} />
      <News newsItems={newsItems} />
      <Footer />
    </div>
  );
};

export default Content;
