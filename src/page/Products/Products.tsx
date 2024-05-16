import React, { useState } from "react";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import s from "./Products.module.scss";
import { PlayerThreekit } from "../../components/PlayerThreekit/PlayerThreekit";
export const Products = () => {
  const [configProduct, setConfigProduct] = useState({
    Offer: "EXO FEMME",
    Model: "Petite Malle",
    "Model Size": "Petite Malle",
    "Exterior Material": "Crocodilian",
    Shine: "Brillant",
    "Exterior Color": "Rose tourmaline",
    "Lining Material": "Agneau",
    "Lining Color": "ANISETTE",
    "Metallic Finition": "Palladium",
    "Can Have Patch or Engraving": "Yes",
    "Can Have Lock": "No",
    SKU: "P01341",
    "Delivery Time in Days": "42",
    Price: "20000",
    Gender: "Woman",
    "Exterior Color Description": "pale and shiny pink",
    Type: "Wallet",
    "detailed description":
      "Offers a more historical design compared to the modern, straightforward Clutch Thames. Best For: small bag ideal for gala or black tie events. Good for carrying: Phone",
    "Cards / money / keys. Good Alternative Products": "",
    ID: "P01341-EXOTMAT01-EXOTCOLE24-EXOTCOLI22-EXOTMFIN02",
    source: "variants",
    url: "https://lv-vivatech-vector.3kit.com/player?sku=P01341&color=undefined&assetId=fba18074-ecbf-43ad-9921-6e1be983c190",
    assetId: "fba18074-ecbf-43ad-9921-6e1be983c190",
  });
  const listProducts = [
    {
      Offer: "EXO FEMME",
      Model: "Petite Malle",
      "Model Size": "Petite Malle",
      "Exterior Material": "Crocodilian",
      Shine: "Brillant",
      "Exterior Color": "Rose tourmaline",
      "Lining Material": "Agneau",
      "Lining Color": "ANISETTE",
      "Metallic Finition": "Palladium",
      "Can Have Patch or Engraving": "Yes",
      "Can Have Lock": "No",
      SKU: "P01341",
      "Delivery Time in Days": "42",
      Price: "20000",
      Gender: "Woman",
      "Exterior Color Description": "pale and shiny pink",
      Type: "Wallet",
      "detailed description":
        "Offers a more historical design compared to the modern, straightforward Clutch Thames. Best For: small bag ideal for gala or black tie events. Good for carrying: Phone",
      "Cards / money / keys. Good Alternative Products": "",
      ID: "P01341-EXOTMAT01-EXOTCOLE24-EXOTCOLI22-EXOTMFIN02",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=P01341&color=undefined&assetId=fba18074-ecbf-43ad-9921-6e1be983c190",
      assetId: "fba18074-ecbf-43ad-9921-6e1be983c190",
    },
    {
      Offer: "EXO FEMME",
      Model: "City Steamer",
      "Model Size": "City Steamer Mini",
      "Exterior Material": "Ostrich",
      Shine: "Mat",
      "Exterior Color": "Zinc",
      "Lining Material": "Chevre",
      "Lining Color": "Zinc",
      "Metallic Finition": "Palladium",
      "Can Have Patch or Engraving": "No",
      "Can Have Lock": "No",
      SKU: "N85021",
      "Delivery Time in Days": "14",
      Price: "7500",
      Gender: "Woman",
      "Exterior Color Description": "charcoal grey",
      Type: "Handbag",
      "detailed description":
        "More business-oriented with a focus on compartments compared to the more compact and sleek design of the Alma BB.  Best For: A secure and modern luxurious handbag ideal for work, events such as trade shows or distingusihed business travels.. Good for carrying: Ipad",
      "Make up. Good Alternative Products": "Alma BB",
      ID: "N85021-EXOTMAT04-EXOTCOLE303-EXOTCOLI303-EXOTMFIN02",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=N85021&color=undefined&assetId=602d0fbc-7810-4ecf-994f-5a57b2dcd9fb",
      assetId: "602d0fbc-7810-4ecf-994f-5a57b2dcd9fb",
    },

    {
      Offer: "EXO FEMME",
      Model: "City Steamer",
      "Model Size": "City Steamer PM",
      "Exterior Material": "Crocodilian",
      Shine: "Brillant",
      "Exterior Color": "Blanc",
      "Lining Material": "Chevre",
      "Lining Color": "Blanc",
      "Metallic Finition": "Light gold",
      "Can Have Patch or Engraving": "Yes",
      "Can Have Lock": "No",
      SKU: "P01810",
      "Delivery Time in Days": "42",
      Price: "25000",
      Gender: "Woman",
      "Exterior Color Description": "white slightly gray",
      Type: "Handbag",
      "detailed description":
        "More business-oriented with a focus on compartments compared to the more compact and sleek design of the Alma BB.  Best For: A secure and modern luxurious handbag ideal for work, events such as trade shows or distingusihed business travels.. Good for carrying: Ipad",
      "Make up. Good Alternative Products": "Alma BB",
      ID: "P01810-EXOTMAT01-EXOTCOLE20-EXOTCOLI20-EXOTMFIN04",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=P01810&color=undefined&assetId=602d0fbc-7810-4ecf-994f-5a57b2dcd9fb",
      assetId: "602d0fbc-7810-4ecf-994f-5a57b2dcd9fb",
    },

    {
      Offer: "EXO FEMME",
      Model: "City Steamer",
      "Model Size": "City Steamer MM",
      "Exterior Material": "Crocodilian",
      Shine: "Brillant",
      "Exterior Color": "Fuchsia",
      "Lining Material": "Chevre",
      "Lining Color": "Noir",
      "Metallic Finition": "Gold",
      "Can Have Patch or Engraving": "Yes",
      "Can Have Lock": "No",
      SKU: "P01828",
      "Delivery Time in Days": "42",
      Price: "30000",
      Gender: "Woman",
      "Exterior Color Description": "between red and pink",
      Type: "Handbag",
      "detailed description":
        "More business-oriented with a focus on compartments compared to the more compact and sleek design of the Alma BB.  Best For: A secure and modern luxurious handbag ideal for work, events such as trade shows or distingusihed business travels.. Good for carrying: Ipad",
      "Make up. Good Alternative Products": "Alma BB",
      ID: "P01828-EXOTMAT01-EXOTCOLE31-EXOTCOLI01-EXOTMFIN01",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=P01828&color=undefined&assetId=602d0fbc-7810-4ecf-994f-5a57b2dcd9fb",
      assetId: "602d0fbc-7810-4ecf-994f-5a57b2dcd9fb",
    },

    {
      Offer: "HARDSIDED",
      Model: "Courrier Lozine",
      "Model Size": "Courrier Lozine 110",
      "Exterior Material": "Epi",
      Shine: "Mat",
      "Exterior Color": "Indigo",
      "Lining Material": "Microfibre",
      "Lining Color": "Rose pop",
      "Metallic Finition": "Palladium",
      "Can Have Patch or Engraving": "Yes",
      "Can Have Lock": "Yes",
      SKU: "P00803",
      "Delivery Time in Days": "14",
      Price: "57000",
      Gender: "Unisex",
      "Exterior Color Description": "dark blue, close to navy blue",
      Type: "storage box",
      "detailed description":
        "More traditionally styled and larger in size for substantial storage including artworks, compared to more modern and compact travel solutions like the Keepall Bandoulière. Best For: A refined and robust travel trunk, featuring traditional Louis Vuitton styling with its vintage hardware and structured design. Ideal for long trips and as a standout travel piece.. Size Comparison: Smaller than : Malle Haute. Good for carrying: Ideal for storing all types of objects. Good Alternative Products: Malle Haute",
      ID: "P00803-RIGIMAT04-RIGICOLE15-RIGICOLI51-RIGIMFIN02",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=P00803&color=undefined&assetId=ae8217e4-3819-44b9-8044-e7f5ee2b78cd",
      assetId: "ae8217e4-3819-44b9-8044-e7f5ee2b78cd",
    },

    {
      Offer: "HARDSIDED",
      Model: "Courrier Lozine",
      "Model Size": "Courrier Lozine 110",
      "Exterior Material": "Epi",
      Shine: "Mat",
      "Exterior Color": "Piment",
      "Lining Material": "Microfibre",
      "Lining Color": "Turquoise",
      "Metallic Finition": "Palladium",
      "Can Have Patch or Engraving": "Yes",
      "Can Have Lock": "Yes",
      SKU: "P00803",
      "Delivery Time in Days": "42",
      Price: "57000",
      Gender: "Unisex",
      "Exterior Color Description": "orange",
      Type: "storage box",
      "detailed description":
        "More traditionally styled and larger in size for substantial storage including artworks, compared to more modern and compact travel solutions like the Keepall Bandoulière. Best For: A refined and robust travel trunk, featuring traditional Louis Vuitton styling with its vintage hardware and structured design. Ideal for long trips and as a standout travel piece.. Size Comparison: Smaller than : Malle Haute. Good for carrying: Ideal for storing all types of objects. Good Alternative Products: Malle Haute",
      ID: "P00803-RIGIMAT04-RIGICOLE13-RIGICOLI55-RIGIMFIN02",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=P00803&color=undefined&assetId=ae8217e4-3819-44b9-8044-e7f5ee2b78cd",
      assetId: "ae8217e4-3819-44b9-8044-e7f5ee2b78cd",
    },

    {
      Offer: "HARDSIDED",
      Model: "Courrier Lozine",
      "Model Size": "Courrier Lozine 110",
      "Exterior Material": "Monogram",
      Shine: "Mat",
      "Exterior Color": "Macassar",
      "Lining Material": "Microfibre",
      "Lining Color": "Cyan",
      "Metallic Finition": "Palladium",
      "Can Have Patch or Engraving": "Yes",
      "Can Have Lock": "Yes",
      SKU: "P00800",
      "Delivery Time in Days": "42",
      Price: "45000",
      Gender: "Unisex",
      "Exterior Color Description":
        "Monogram Louis Vuitton available in black, the logos are gray on a black canvas. The leather bands are black.",
      Type: "storage box",
      "detailed description":
        "More traditionally styled and larger in size for substantial storage including artworks, compared to more modern and compact travel solutions like the Keepall Bandoulière. Best For: A refined and robust travel trunk, featuring traditional Louis Vuitton styling with its vintage hardware and structured design. Ideal for long trips and as a standout travel piece.. Size Comparison: Smaller than : Malle Haute. Good for carrying: Ideal for storing all types of objects. Good Alternative Products: Malle Haute",
      ID: "P00800-RIGIMAT01-RIGICOLE02-RIGICOLI13-RIGIMFIN02",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=P00800&color=undefined&assetId=ae8217e4-3819-44b9-8044-e7f5ee2b78cd",
      assetId: "ae8217e4-3819-44b9-8044-e7f5ee2b78cd",
    },

    {
      Offer: "EXO FEMME",
      Model: "Zippy Coin Purse Padlock",
      "Model Size": "Zippy Coin Purse Padlock",
      "Exterior Material": "Crocodilian",
      Shine: "Brillant",
      "Exterior Color": "Améthyste",
      "Lining Material": "Chevre",
      "Lining Color": "Améthyste",
      "Metallic Finition": "Gold",
      "Can Have Patch or Engraving": "Yes",
      "Can Have Lock": "No",
      SKU: "P01143",
      "Delivery Time in Days": "42",
      Price: "2500",
      Gender: "Woman",
      "Exterior Color Description": "shiny dark purple",
      Type: "Wallet",
      "detailed description":
        "Smaller and more focused on coin storage than other wallets like the Multiple Wallet. Best For: Ideal for minimalists who need to carry coins and a few cards in a smaller, secure package.. Good for carrying: Cards",
      "Money. Good Alternative Products": "Zippy Wallet Padlock",
      ID: "P01143-EXOTMAT01-EXOTCOLE25-EXOTCOLI25-EXOTMFIN01",
      source: "variants",
      url: "https://lv-vivatech-vector.3kit.com/player?sku=P01143&color=undefined&assetId=e945af92-3110-400a-ac7a-37bd73e23581",
      assetId: "e945af92-3110-400a-ac7a-37bd73e23581",
    },
  ];

  return (
    <div className={s.page}>
      <div className={s.wrap}>
        {listProducts.map((product) => {
          return (
            <CardProduct
              key={product["ID"]}
              isActive={product["ID"] === configProduct["ID"]}
              onChange={() => {
                console.log("product", product);

                setConfigProduct(product);
              }}
              {...product}
            />
          );
        })}
      </div>
      {configProduct && (
        <div className={s.content}>
          <PlayerThreekit {...configProduct} />
        </div>
      )}
    </div>
  );
};
