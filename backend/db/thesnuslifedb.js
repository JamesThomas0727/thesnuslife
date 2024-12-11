/*
 Navicat Premium Dump Script

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 80004 (8.0.4)
 Source Host           : localhost:27017
 Source Schema         : thesnuslifedb

 Target Server Type    : MongoDB
 Target Server Version : 80004 (8.0.4)
 File Encoding         : 65001

 Date: 11/12/2024 12:38:13
*/


// ----------------------------
// Collection structure for currency_rates
// ----------------------------
db.getCollection("currency_rates").drop();
db.createCollection("currency_rates");

// ----------------------------
// Documents of currency_rates
// ----------------------------
db.getCollection("currency_rates").insert([ {
    _id: ObjectId("67598329721f84cc7907d351"),
    currency_id: 1,
    currency_name: "AUD",
    currency_rate: 1.6,
    registered: ISODate("2024-12-11T12:24:04.835Z")
} ]);
db.getCollection("currency_rates").insert([ {
    _id: ObjectId("675983a1721f84cc7907d352"),
    currency_id: 2,
    currency_name: "CAD",
    currency_rate: 1.47,
    registered: ISODate("2024-12-11T12:24:37.25Z")
} ]);
db.getCollection("currency_rates").insert([ {
    _id: ObjectId("675983a1721f84cc7907d353"),
    currency_id: 3,
    currency_name: "EUR",
    currency_rate: 0.95,
    registered: ISODate("2024-12-11T12:25:11.402Z")
} ]);
db.getCollection("currency_rates").insert([ {
    _id: ObjectId("675983a2721f84cc7907d354"),
    currency_id: 4,
    currency_name: "GBP",
    currency_rate: 0.78,
    registered: ISODate("2024-12-11T12:25:24.227Z")
} ]);
db.getCollection("currency_rates").insert([ {
    _id: ObjectId("675983a5721f84cc7907d355"),
    currency_id: 5,
    currency_name: "USD",
    currency_rate: 1,
    registered: ISODate("2024-12-11T12:25:40.347Z")
} ]);

// ----------------------------
// Collection structure for faqs
// ----------------------------
db.getCollection("faqs").drop();
db.createCollection("faqs");

// ----------------------------
// Documents of faqs
// ----------------------------
db.getCollection("faqs").insert([ {
    _id: ObjectId("67584f161f33d6272100d192"),
    question_id: 1,
    question: "What are nicotine pouches?",
    answer: "Nicotine pouches are a smokeless, tobacco-free product designed to deliver nicotine without the use of cigarettes. They are considered an evolution of traditional snus which is a type of moist, smokeless tobacco popular in Scandinavia. Unlike snus, which contains tobacco, nicotine pouches are made from a blend of nicotine, flavourings, and plant-based fibres, typically in a small pouch similar to a small teabag This evolution from traditional snus to nicotine pouches represents a significant shift towards products that aim to reduce the harm associated with tobacco use. Nicotine pouches provide a similar experience to snus, through the same nicotine delivery system, but without the tobacco-related risks. This makes them an option for those looking to avoid tobacco while still satisfying nicotine cravings. They are available in a plethora of strengths and flavours, appealing to a broad range of preferences. You will be pleased to know we have the largest product range in the UK and one of the largest in the whole of Europe.",
    registered: ISODate("2024-12-11T12:31:01.468Z")
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("6758540e1f33d6272100d1a9"),
    question_id: 2,
    question: "How to use Nicotine pouches?",
    answer: "Select a nicotine pouch that matches your preference for flavour and strength Place the pouch between your gum and upper lip, it’s usually more comfortable to position it to the side. The pouch will begin to release nicotine soon after placement. You'll feel a tingling sensation - that’s normal Keep the pouch in for 5 to 60 minutes depending on your comfort and the product’s instructions. After use, dispose of the pouch in a waste bin. Most brands offer a discreet disposal catch lid to store your used pouches.",
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("6758542d1f33d6272100d1aa"),
    answer: "A pouch is placed between the gum and upper lip.\r\nThe nicotine in the pouch is absorbed into the bloodstream through the mucous membranes of the mouth.\r\nThe pouch gradually releases nicotine, providing a steady and controlled nicotine experience without the need for smoking or vaping\r\nA pouch is placed between the gum and upper lip.\r\nThe nicotine in the pouch is absorbed into the bloodstream through the mucous membranes of the mouth.\r\nThe pouch gradually releases nicotine, providing a steady and controlled nicotine experience without the need for smoking or vaping\r\nA pouch is placed between the gum and upper lip.\r\nThe nicotine in the pouch is absorbed into the bloodstream through the mucous membranes of the mouth.\r\nThe pouch gradually releases nicotine, providing a steady and controlled nicotine experience without the need for smoking or vaping\r\nA pouch is placed between the gum and upper lip.\r\nThe nicotine in the pouch is absorbed into the bloodstream through the mucous membranes of the mouth.\r\nThe pouch gradually releases nicotine, providing a steady and controlled nicotine experience without the need for smoking or vaping",
    question: "How do Nicotine pouches work?",
    question_id: 3,
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("6758542e1f33d6272100d1ab"),
    question_id: 4,
    answer: "Nicotine pouches provide a tobacco-free way to consume nicotine discreetly and without smoke. Nicotine pouches can help manage cravings, come in various strengths for controlled intake, and are available in multiple flavours for an enjoyable experience. They are designed for adult users seeking a convenient, smokeless nicotine option.",
    question: "What do Nicotine pouches do?",
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("6758542f1f33d6272100d1ac"),
    question_id: 5,
    answer: "Nicotine pouches can be a tool for those looking to quit smoking, offering a smoke-free and tobacco-free nicotine alternative. They allow users to gradually reduce their nicotine intake thanks to the various strengths available. By providing a discreet way to manage nicotine cravings without cigarettes, nicotine pouches can be part of a broader quitting strategy.",
    question: "Can Nicotine pouches help me quit smoking?",
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("675854301f33d6272100d1ad"),
    question_id: 6,
    answer: "They offer a discreet, smokeless nicotine experience without the need for devices or batteries. There’s no vapour or odour making them more socially acceptable in various settings. They provide a controlled nicotine intake by having different strengths available and they eliminate concerns about lung health associated with inhaling smoke or vapour. Additionally, nicotine pouches require no maintenance, unlike vaping equipment, making them a convenient choice for on-the-go use.",
    question: "Why are Nicotine pouches preferable to vaping?",
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("675854301f33d6272100d1ae"),
    question_id: 7,
    question: "What are the effects of Nicotine pouches?",
    answer: "Nicotine pouches offer several positive effects, including the provision of a smokeless and discreet way to consume nicotine which reduces exposure to harmful tobacco smoke. They can aid in managing nicotine cravings helping people to quit smoking for good. The controlled dosage allows for gradual reduction in nicotine intake. Users also report a sense of mental clarity, focus, and stress relief after use.",
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("675854311f33d6272100d1af"),
    question_id: 8,
    answer: "Nicotine pouches are used by Premier League football players as well as athletes in many other professional sports mainly for their stimulant effects which include increased focus, alertness, and stress reduction. They offer a tobacco-free and smokeless alternative for athletes helping avoid the health risks associated with traditional smoking or vaping.",
    question: "Nicotine pouches in professional sports?",
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("675854311f33d6272100d1b0"),
    question_id: 9,
    answer: "Nicotine pouches are a cost-effective alternative to tobacco products, particularly in countries & areas where tobacco is heavily taxed like the UK. The price advantage stems from factors like lower usage quantities compared to cigarettes and the absence of the need accessories such as lighters and ashtrays. Their longer-lasting use and the potential for reduced health-related costs make them economically advantageous for many users over time.",
    question: "Are Nicotine pouches cheaper than smoking and vaping?",
    registered: "2024-12-11 12:31:01.468"
} ]);
db.getCollection("faqs").insert([ {
    _id: ObjectId("6758545d1f33d6272100d1b1"),
    question_id: 10,
    answer: "All of our products have a best before date typically of 12 or 24 months but nicotine pouches are completely fine to use even after this date. We have a high turnover rate at our warehouse with deliveries coming and going several times a day. Meaning that at The Snus Life your pouches are always as fresh as possible from the factory",
    question: "Does Snus have a shelf life?",
    registered: "2024-12-11 12:31:01.468"
} ]);

// ----------------------------
// Collection structure for products
// ----------------------------
db.getCollection("products").drop();
db.createCollection("products");

// ----------------------------
// Documents of products
// ----------------------------
db.getCollection("products").insert([ {
    _id: ObjectId("6758505d1f33d6272100d193"),
    product_id: 1,
    product_name: "Ace X Xmas Edition - 16mg",
    old_price: 5.99,
    new_price: 6.36,
    brand: "Bundle Deals",
    flavor: "American",
    pot: 5,
    product_type: "Caffeine",
    product_avatar_id: 1,
    registered: ISODate("2024-12-11T11:22:47.523Z"),
    currency_type: 4,
    product_description: [
        "Flavours, American",
        "Portion Size, ABC",
        "Strength, Strong",
        "Nicotine Level, 16mg",
        "Net Weight, 29mg",
        "Product Type, Caffeine"
    ]
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675850c01f33d6272100d194"),
    product_id: 2,
    product_name: "Velo Ruby Berry (UK) - 24mg",
    old_price: null,
    new_price: 6.36,
    product_type: "Caffeine",
    brand: "Ace",
    pot: 7,
    product_avatar_id: 2,
    flavor: "BlueBerry",
    registered: "2024-12-11 11:22:47.523",
    currency_type: 3,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675850f61f33d6272100d195"),
    product_id: 3,
    product_name: "Velo Peppermint Storm (UK) - 24mg",
    old_price: 6.99,
    new_price: 5.99,
    product_type: "Nicotine",
    brand: "Ace",
    pot: 8,
    product_avatar_id: 3,
    flavor: "Apple",
    registered: ISODate("2024-12-11T11:24:22.468Z"),
    currency_type: 2,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851121f33d6272100d196"),
    product_id: 4,
    product_name: "Velo Orange Spark (UK) - 24mg",
    old_price: null,
    new_price: 5.99,
    product_type: "Nicotine",
    flavor: "American",
    pot: 5,
    brand: "Bundle Deals",
    product_avatar_id: 4,
    registered: ISODate("2024-12-11T11:24:34.793Z"),
    currency_type: 1,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6758512b1f33d6272100d197"),
    new_price: 4.99,
    old_price: 5.99,
    product_id: 5,
    product_name: "Supreme 5 pack",
    product_type: "Killa Cold Mint\r\n",
    pot: 10,
    flavor: "Apple",
    brand: "Ace",
    product_avatar_id: 5,
    registered: ISODate("2024-12-11T11:25:20.326Z"),
    currency_type: 0,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851331f33d6272100d198"),
    new_price: 4.99,
    product_id: 6,
    product_name: "Maggie Lite Try 'em All - 16mg",
    product_type: "Caffeine",
    pot: 3,
    flavor: "Berry",
    brand: "77",
    product_avatar_id: 6,
    registered: ISODate("2024-12-11T11:25:30.278Z"),
    currency_type: 1,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851371f33d6272100d199"),
    new_price: 4.99,
    old_price: 5.99,
    product_id: 7,
    product_name: "Maggie Try 'em All - 60mg",
    product_type: "Killa Cold Mint\r\n",
    pot: 2,
    flavor: "American",
    brand: "Bundle Deals",
    product_avatar_id: 7,
    registered: ISODate("2024-12-11T11:25:40.743Z"),
    currency_type: 2,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851451f33d6272100d19a"),
    new_price: 5.23,
    old_price: 5.99,
    product_id: 8,
    product_name: "Pick 'n' Mix - 5 pots",
    product_type: "Nicotine",
    pot: 3,
    flavor: "Berry",
    brand: "Ace",
    product_avatar_id: 8,
    registered: ISODate("2024-12-11T11:27:01.365Z"),
    currency_type: 3,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851491f33d6272100d19b"),
    new_price: 5.23,
    product_id: 9,
    product_name: "Pick 'n' Mix - 10 pots",
    product_type: "Caffeine",
    pot: 8,
    flavor: "Apple",
    brand: "77",
    product_avatar_id: 9,
    registered: "2024-12-11 11:26:53.975",
    currency_type: 4,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6758514d1f33d6272100d19c"),
    new_price: 5.23,
    old_price: 5.99,
    product_id: 10,
    product_name: "Mystery Box 75 - 100mg",
    product_type: "Killa Cold Mint\r\n",
    pot: 7,
    flavor: "Berry",
    brand: "Ace",
    product_avatar_id: 10,
    registered: "2024-12-11 11:26:53.975",
    currency_type: 3,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851af1f33d6272100d19d"),
    product_id: 11,
    product_name: "Mystery Box 30 - 50mg",
    new_price: 25.44,
    product_type: "Nicotine",
    pot: 6,
    flavor: "American",
    brand: "Bundle Deals",
    product_avatar_id: 11,
    registered: ISODate("2024-12-11T11:26:53.975Z"),
    currency_type: 2,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b01f33d6272100d19e"),
    product_id: 12,
    product_name: "Mystery Box 110 - 150mg",
    new_price: 25.44,
    product_type: "NoNic@",
    pot: 4,
    flavor: "Blueberry",
    brand: "Ace",
    product_avatar_id: 12,
    registered: "2024-12-11 11:26:53.975",
    currency_type: 1,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b11f33d6272100d19f"),
    product_id: 13,
    new_price: 25.44,
    product_name: "Iceberg 4 Pack - 50mg\r\nIceberg 4 Pack - 50mg\r\n",
    old_price: 39.99,
    product_type: "NoNic@",
    pot: 7,
    flavor: "Cactus",
    brand: "Apparel",
    product_avatar_id: 13,
    registered: ISODate("2024-12-11T11:27:09.583Z"),
    currency_type: 0,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b21f33d6272100d1a0"),
    product_id: 14,
    new_price: 25.44,
    product_name: "Iceberg 4 Pack - 50mg\r\nCuba 150mg 4 pack",
    old_price: 39.99,
    product_type: "Caffeine",
    pot: 6,
    flavor: "Apple",
    brand: "Ace",
    product_avatar_id: 14,
    registered: "2024-12-11 11:26:25.846",
    currency_type: 4,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b31f33d6272100d1a1"),
    product_id: 15,
    new_price: 25.44,
    product_name: "Iceberg Rising Sun 4 Pack",
    product_type: "Nicotine",
    pot: 7,
    flavor: "Cactus",
    brand: "Bundle Deals",
    product_avatar_id: 15,
    registered: ISODate("2024-12-11T11:26:25.846Z"),
    currency_type: 3,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b51f33d6272100d1a2"),
    product_id: 16,
    new_price: 40.99,
    product_name: "Mystery Box 10 - 25mg",
    product_type: "NoNic@",
    pot: 9,
    flavor: "Cactus",
    brand: "Apparel",
    product_avatar_id: 16,
    registered: "2024-12-11 11:26:25.846",
    currency_type: 2,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b61f33d6272100d1a3"),
    product_id: 17,
    new_price: 40.99,
    product_name: "Premium Pick 'n' Mix - 10 Pots",
    old_price: 39.99,
    product_type: "NoNic@",
    pot: 8,
    flavor: "American",
    brand: "Apparel",
    product_avatar_id: 17,
    registered: "2024-12-11 11:26:34.318",
    currency_type: 1,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b71f33d6272100d1a4"),
    product_id: 18,
    new_price: 25.44,
    product_name: "Premium Pick 'n' Mix - 5 Pots",
    product_type: "Caffeine",
    pot: 7,
    flavor: "Berry",
    brand: "Bundle Deals",
    product_avatar_id: 18,
    registered: ISODate("2024-12-11T11:26:34.318Z"),
    currency_type: 2,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851b91f33d6272100d1a5"),
    product_id: 19,
    new_price: 25.44,
    product_name: "The Snus Life Apparel Cap - Blue",
    product_type: "Nicotine",
    pot: 6,
    flavor: "Berry",
    brand: "Bundle Deals",
    product_avatar_id: 19,
    registered: ISODate("2024-12-11T11:26:46.87Z"),
    currency_type: 3,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675851bf1f33d6272100d1a6"),
    product_id: 20,
    new_price: 25.44,
    product_name: "he Snus Life Apparel Cap - Black",
    old_price: 39.99,
    product_type: "Killa Cold Mint\r\n",
    pot: 5,
    flavor: "Apple",
    brand: "Apparel",
    product_avatar_id: 20,
    registered: "2024-12-11 11:26:34.318",
    currency_type: 4,
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675852581f33d6272100d1a7"),
    product_name: "The Snus Life Apparel Hoodie - Blue",
    new_price: 29.9,
    product_id: 21,
    product_type: "NoNic@",
    pot: 4,
    flavor: "Apple",
    brand: "Bundle Deals",
    product_avatar_id: 21,
    registered: "2024-12-11 11:26:34.318",
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6758525f1f33d6272100d1a8"),
    product_name: "The Snus Life Apparel Hoodie - Black",
    new_price: 30.99,
    old_price: 39.99,
    product_id: 22,
    product_type: "NoNic@",
    pot: 7,
    flavor: "American",
    brand: "Bundle Deals",
    product_avatar_id: 22,
    registered: "2024-12-11 11:26:34.318",
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("6759239bd5231e7da70c7b81"),
    product_name: "The Snus Life Apparel Hoodie - Black",
    new_price: 30.99,
    old_price: 39.99,
    product_id: 23,
    product_type: "NoNic@",
    pot: 7,
    flavor: "American",
    brand: "Bundle Deals",
    product_avatar_id: 23,
    registered: ISODate("2024-12-11T11:26:18.681Z"),
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675923a6d5231e7da70c7b82"),
    product_name: "The Snus Life Apparel Hoodie - Black",
    new_price: 30.99,
    old_price: 39.99,
    product_id: 24,
    product_type: "NoNic@",
    pot: 7,
    flavor: "American",
    brand: "Bundle Deals",
    product_avatar_id: 24,
    registered: ISODate("2024-12-11T11:26:11.965Z"),
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675923bdd5231e7da70c7b83"),
    brand: "Bundle Deals",
    flavor: "American",
    new_price: 30.99,
    old_price: 39.99,
    pot: 7,
    product_avatar_id: 25,
    product_id: 25,
    product_name: "The Snus Life Apparel Hoodie - Black",
    product_type: "NoNic@",
    registered: ISODate("2024-12-11T11:26:04.934Z"),
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675923bdd5231e7da70c7b84"),
    product_id: 26,
    brand: "Apparel",
    flavor: "Cactus",
    new_price: 40.99,
    pot: 9,
    product_name: "Mystery Box 10 - 25mg",
    product_type: "NoNic@",
    product_avatar_id: 26,
    registered: ISODate("2024-12-11T11:25:57.951Z"),
    product_description: "(Array) 6 Elements"
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("675923bdd5231e7da70c7b85"),
    product_id: 27,
    brand: "Apparel",
    flavor: "Cactus",
    new_price: 7.27,
    pot: 9,
    product_name: "Mystery Box 10 - 25mg",
    product_type: "NoNic@",
    old_price: 20.01,
    product_avatar_id: 27,
    registered: ISODate("2024-12-11T11:25:50.385Z"),
    product_description: "(Array) 6 Elements"
} ]);

// ----------------------------
// Collection structure for system.views
// ----------------------------
db.getCollection("system.views").drop();
db.createCollection("system.views");

// ----------------------------
// Documents of system.views
// ----------------------------
