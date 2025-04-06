import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const BurkinaFasoCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Burkina Faso",
    slug: "burkina-faso",
    continent: "Africa",
    capital: "Ouagadougou",
    languageOfficial: "French",
    languagesSpoken: ["French", "Mooré", "Dioula", "Fulfuldé", "Gourmanchéma"],
    currency: "West African CFA Franc (XOF)",
    population: 21510181,
    area: 274200,
    timeZones: ["GMT+0 (UTC)"],
    callingCode: "+226",
    drivingSide: "right" as const,
    flagImageUrl: "https://cdn.pixabay.com/photo/2012/04/16/12/43/flag-35845_1280.png",
    description: "Burkina Faso, formerly known as Upper Volta, is a landlocked West African country known for its cultural richness, diverse ethnic groups, and artistic traditions. Despite facing significant challenges including political instability and environmental pressures, the country maintains vibrant cultural festivals, impressive traditional architecture, and renowned handicrafts that reflect its artistic heritage.",
    whyVisit: "Burkina Faso offers travelers an authentic West African experience defined by extraordinary cultural richness and warm hospitality. Unlike more tourist-oriented destinations, Burkina preserves traditions that have largely disappeared elsewhere, from the mask dances of the Bobo and Bwa peoples to the intricate bronze casting techniques of Ouagadougou artisans. The country's remarkable architectural heritage features distinctive mud-brick structures including the UNESCO-listed ruins of Loropéni and the extraordinary mosque at Bobo-Dioulasso. For music enthusiasts, Burkina holds special significance as home to one of Africa's most important film festivals (FESPACO) and vibrant musical traditions that have influenced global artists. Nature lovers can explore the wildlife of Arli and W National Parks, where elephants, hippos, and rare birds inhabit landscapes ranging from savannah to forested river valleys. The country's handicraft markets showcase exquisite cotton textiles, bronze statues, wooden masks, and leather goods created by master artisans. Though infrastructure remains basic in many areas and recent security challenges have affected some regions, travelers willing to venture beyond conventional tourist destinations will discover a profoundly hospitable culture where visitor status brings special respect, meaningful cultural exchanges, and memories of a West Africa that exists increasingly only in historical accounts.",
    bestTimeToVisit: {
      text: "The best time to visit Burkina Faso is during the dry season from November to February when temperatures are moderate (25-30°C/77-86°F), rainfall is minimal, and roads are accessible. This period offers optimal conditions for wildlife viewing and cultural festivals. The months of March to May bring intense heat (often exceeding 40°C/104°F), while the rainy season (June-September) creates lush landscapes but can make rural areas difficult to access.",
      months: ["November", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "Summer (June to September) constitutes Burkina Faso's rainy season, with regular downpours typically occurring as afternoon thunderstorms rather than all-day rainfall. Temperatures moderate slightly from the extreme heat of spring, ranging from 25-32°C (77-90°F), but high humidity can make it feel warmer. The landscape transforms dramatically during these months, with previously parched savannah becoming lush and green, seasonal rivers flowing, and agricultural activities intensifying across rural areas. While the rain brings welcome relief from dust and heat, it also creates challenges for travelers as dirt roads become muddy or impassable, especially in remote regions. Wildlife viewing improves as animals disperse with increased water availability, though thick vegetation can make spotting them more difficult.",
      winter: "Winter (December to February) represents the most pleasant season in Burkina Faso, characterized by warm days and cooler nights. Daytime temperatures typically range from 25-32°C (77-90°F), dropping to a comfortable 15-20°C (59-68°F) at night—in northern regions, nighttime temperatures can occasionally fall below 15°C (59°F), requiring light jackets or sweaters. This period falls within the dry season, with clear skies, virtually no rainfall, and moderate humidity levels creating ideal conditions for exploration. The Harmattan wind from the Sahara occasionally brings dust haze that can reduce visibility and cause respiratory discomfort for sensitive travelers. Most cultural festivals occur during these months, coinciding with the agricultural off-season when communities have time for celebrations and traditional ceremonies.",
      spring: "Spring (March to May) brings the hottest and driest conditions of the year, with temperatures regularly exceeding 40°C (104°F), particularly in April and May. Humidity drops to its lowest levels, and the landscape reaches maximum aridity with dried-out vegetation and dusty conditions prevailing across most regions. Water sources diminish significantly, concentrating wildlife around remaining rivers and waterholes in national parks. The extreme heat makes midday activities challenging, with most locals and visitors limiting outdoor excursions to early morning or evening hours. Despite these challenges, this period offers certain advantages for wildlife viewing as animals gather predictably at water sources, and the sparse vegetation improves visibility. Traditional mask ceremonies sometimes occur during this pre-planting season in rural communities.",
      fall: "Fall (October to November) represents a transitional period as Burkina Faso shifts from the rainy season to the dry season. October often sees the final rains before a gradual drying pattern establishes. Temperatures remain moderate, typically ranging from 25-35°C (77-95°F), with decreasing humidity as the season progresses. The landscape appears at its most verdant early in this period before gradually beginning to dry. Agricultural harvesting activities dominate rural areas, sometimes accompanied by harvest festivals and celebrations. For travelers, these months offer a good compromise—the worst heat hasn't yet arrived, the heavy rains have ended making transportation easier, and the countryside retains much of its greenery. Wildlife viewing gradually improves as vegetation thins and animals begin concentrating near permanent water sources."
    },
    majorCities: [
      {
        name: "Ouagadougou",
        description: "Burkina Faso's capital and largest city serves as the country's cultural, administrative, and economic heart. Known locally as 'Ouaga,' the city blends traditional elements with urban development. Key attractions include the National Museum featuring impressive displays of traditional masks, textiles, and artifacts; the bustling central market (Grand Marché) where merchants sell everything from food to handicrafts; and the striking Cathédrale de l'Immaculée-Conception. Ouaga is especially known for hosting FESPACO (Pan-African Film and Television Festival), Africa's largest film festival held biennially. The city's vibrant music scene features live performances at venues like Jardin de la Musique Reemdoogo, while its artisan centers showcase master craftspeople creating bronze sculptures, leather goods, and cotton textiles using traditional techniques."
      },
      {
        name: "Bobo-Dioulasso",
        description: "Burkina Faso's second-largest city maintains a more relaxed atmosphere than the capital and serves as the country's economic and cultural center for the western region. The city's crown jewel is the Grand Mosque, an extraordinary example of Sudano-Sahelian architecture built in 1880 with its distinctive mud-brick construction and wooden support beams projecting from the façade. The historic Kibidwe quarter preserves traditional Bobo architecture with narrow alleyways between mud-brick compounds. At the central market and artisan center, visitors can purchase the city's renowned textiles, particularly the distinctive mud cloth (bogolan) and indigo-dyed fabrics. Just outside town, the sacred Dafra fishing pond holds religious significance for local populations, while the surrounding region offers opportunities to witness traditional mask dances in Bobo villages."
      },
      {
        name: "Banfora",
        description: "Situated in southwestern Burkina Faso near the Mali and Ivory Coast borders, Banfora serves as gateway to the country's most spectacular natural attractions. The town itself features a relaxed atmosphere with its central market and artisan centers, but visitors primarily use it as a base for exploring the surrounding region. The nearby Sindou Peaks present a dramatic landscape of eroded rock formations creating a mini-mountain range with narrow corridors between towering pillars. Tengrela Lake, just outside town, offers close encounters with hippopotamuses from dugout canoes guided by local fishermen. The Karfiguéla Falls (Cascades de Banfora) create a series of refreshing natural pools ideal for swimming beneath multiple cascades, particularly spectacular during and after the rainy season. The surrounding countryside also features numerous Senoufo and Gouin villages where traditional lifestyles continue."
      },
      {
        name: "Koudougou",
        description: "Burkina Faso's third-largest city, located west of Ouagadougou, has developed as an important market center and educational hub with the country's second university. The city hosts Burkina Faso's largest weekly market every Sunday, drawing traders and shoppers from throughout the region with its extensive selection of agricultural products, livestock, textiles, and handicrafts. Koudougou gained cultural significance for its association with President Thomas Sankara, the revolutionary leader whose progressive policies transformed the country in the 1980s. The city serves as capital of Boulkiemdé Province and features the Regional Museum displaying cultural artifacts from central Burkina. Visitors use Koudougou as a base for exploring surrounding Mossi villages where traditional chiefs maintain significant influence and ceremonial practices continue around ancestral shrines."
      },
      {
        name: "Gaoua",
        description: "The main town of southwestern Burkina Faso serves as the cultural capital of the Lobi people, known for their distinctive architecture, artistic traditions, and historical resistance to outside influences. The excellent Poni Museum presents comprehensive exhibits on Lobi culture, including their unique architectural style featuring flat-roofed fortress-like family compounds designed for defense. The surrounding region offers opportunities to visit traditional Lobi villages (with proper local guidance and permission) where ancient customs continue, including distinctive scarification practices and veneration of protective sculptures called bateba. The area also features important archaeological sites with ancient ruins and rock paintings. Markets in Gaoua showcase authentic Lobi artifacts including distinctive wooden sculptures, pottery, and brass figurines used in traditional religious practices."
      }
    ],
    famousFor: [
      "Traditional mask dances and ceremonies, particularly among the Bobo and Bwa ethnic groups",
      "Bronze casting tradition with artisans creating intricate sculptures using lost-wax technique",
      "FESPACO (Pan-African Film and Television Festival), Africa's largest film festival held biennially",
      "Impressive mud-brick architecture including the Grand Mosque of Bobo-Dioulasso",
      "Rich musical heritage that has influenced global artists, particularly in percussion traditions"
    ],
    topAttractions: [
      {
        name: "Ruins of Loropéni",
        description: "This UNESCO World Heritage site represents the best-preserved example of the region's defensive stone ruins, with massive walls enclosing an area of over 11,000 square meters. Constructed approximately 1,000 years ago and abandoned in the 19th century, Loropéni served as an important fortified settlement along trans-Saharan gold trade routes. The impressive stone walls, standing up to 6 meters tall and 1.5 meters thick, were built without mortar using laterite blocks that have withstood centuries of harsh weather. Archaeological evidence suggests the site functioned as a secure storage facility for gold and other valuable trade goods, as well as providing protection during conflicts between regional powers. Local communities maintain spiritual connections to the ruins, conducting occasional ceremonies there. Visitors can explore the partially restored walls, remnant structures within the enclosure, and the small on-site museum providing historical context. The site's remote location in southwestern Burkina Faso, approximately 40 kilometers from Gaoua, requires dedicated travel arrangements, but rewards visitors with insights into pre-colonial West African civilization and trade networks that connected the region to North Africa and beyond.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Sindou Peaks",
        description: "This extraordinary natural formation near Banfora features a dramatic chain of narrow, craggy rock spires created through millions of years of erosion. Rising unexpectedly from the surrounding plains, these ancient sandstone formations create a labyrinthine landscape of narrow corridors, hidden chambers, and spectacular viewpoints. Local Senoufo people consider the area sacred, using specific sites within the formation for initiation ceremonies and spiritual practices that have continued for centuries. Guided hikes through the peaks range from easy one-hour walks to challenging full-day explorations reaching the highest points for panoramic views across the surrounding countryside. Dawn visits offer the most spectacular experience as the rising sun casts dramatic shadows and bathes the orange-hued rocks in golden light. The peaks feature distinctive pointed tops resembling a row of organ pipes when viewed from certain angles. Local guides not only navigate the complex terrain but also explain the cultural significance of specific locations and share legends associated with unusual rock formations. The site remains relatively undeveloped with minimal infrastructure, preserving its natural character and cultural authenticity despite growing recognition as one of West Africa's most spectacular landscapes.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Grand Mosque of Bobo-Dioulasso",
        description: "This magnificent example of Sudano-Sahelian religious architecture stands as Burkina Faso's most impressive traditional building. Constructed in 1880 using indigenous architectural techniques, the mosque's distinctive mud-brick structure features a forest of wooden support beams (torons) projecting from its façade, serving both structural purposes and as permanent scaffolding for annual maintenance. The building's harmonious proportions include a prayer hall supported by 89 pillars and twin minarets resembling sharpened towers from which the muezzin calls the faithful to prayer. Its earthen construction utilizes local materials including banco (clay mixed with straw and other organic materials) covered with protective clay plaster that creates smooth, organic lines softened by generations of re-plastering during community maintenance events. Inside, the cool, dim prayer hall accommodates hundreds of worshippers with its forest of columns creating intimate spaces despite the building's size. While non-Muslims cannot enter during prayer times, visitors can tour the mosque with local guides who explain its architectural significance and ongoing religious importance. The surrounding old quarter (Dioulassoba) preserves additional examples of traditional architecture, creating a living museum of pre-colonial urban design where narrow alleyways wind between mud-brick compounds still housing extended families according to centuries-old social patterns.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Karfiguéla Falls (Cascades de Banfora)",
        description: "This series of cascading waterfalls near Banfora creates one of Burkina Faso's most refreshing natural attractions. The Komoé River descends through multiple levels of rock formations, creating a sequence of small and medium-sized waterfalls interspersed with natural pools ideal for swimming. Lush vegetation surrounds the falls, providing welcome shade and creating a microclimate noticeably cooler than the surrounding savannah landscape. The falls appear most spectacular during and immediately after the rainy season (July-October) when water volume increases dramatically, though they maintain year-round flow even during the dry season. Several viewing platforms allow visitors to appreciate different sections of the cascades, while local guides help navigate to swimming areas with varying depths suitable for different comfort levels. Beyond recreation, the site holds cultural significance for local communities who consider certain pools sacred and occasionally conduct traditional ceremonies there. The surrounding area supports small-scale agriculture, particularly sugar cane plantations that benefit from irrigation systems drawing from the river. Visits early in the morning often provide opportunities for birdwatching, as numerous species frequent the riparian habitat. Simple facilities include changing areas, basic refreshment stands operated by local vendors, and handicraft sellers offering souvenirs, though development remains minimal to preserve the site's natural character.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      },
      {
        name: "Tiébélé Painted Houses",
        description: "In the southeastern corner of Burkina Faso near the Ghana border, the royal court of Tiébélé preserves one of Africa's most distinctive architectural traditions. The Kassena people who inhabit this region create elaborate geometric patterns on their earthen dwellings using natural pigments including clay, chalk, and charcoal mixed with binding agents like gum arabic and plant extracts. These intricate designs—featuring bold zigzags, checkerboards, representations of sacred animals, and symbolic motifs—transform functional mud-brick structures into extraordinary works of living art. The painting tradition remains exclusively women's work, with techniques and symbolic meanings transmitted across generations through practical apprenticeship. Beyond aesthetic value, the compounds demonstrate ingenious adaptation to local conditions, with thick walls providing natural insulation against extreme temperatures and raised foundations protecting against seasonal flooding. The royal court compound features particularly elaborate decoration reflecting its ceremonial importance, with specific structures dedicated to different ritual functions including ancestor veneration. Visitation requires advance arrangements coordinated through local guides who negotiate community permissions and explain cultural protocols, as these remain active living spaces rather than museum exhibits. A modest visitor center provides context about Kassena culture, while purchases of handicrafts directly support community members. This remarkable architectural tradition received wider recognition after being featured in National Geographic, though it remains vulnerable to modernization pressures and climate change impacts on traditional building materials.",
        imageUrl: "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg"
      }
    ],
    localCuisine: {
      description: "Burkina Faso's cuisine reflects its agricultural traditions with millet, sorghum, maize, and rice serving as staple grains. Meals typically feature a starchy base accompanied by vegetable sauces flavored with commonly available ingredients like tomatoes, onions, and hot peppers. Meat appears sparingly in everyday cooking due to its cost, though it features prominently during celebrations and special occasions. Cooking techniques emphasize slow simmering to maximize flavor from simple ingredients, with meals often prepared in a single pot over wood fires. Street food culture thrives in urban areas with small roadside stands serving grilled meats, bean fritters, and other portable foods. Regional variations exist across the country, with northern areas showing stronger Sahelian influences including more millet-based dishes, while southwestern cuisines incorporate more tubers and forest products. French colonial influence appears mainly in urban areas through baguettes and pastries. Meals traditionally involve communal eating from a shared bowl using the right hand, though Western-style individual servings have become common in restaurants and hotels catering to visitors.",
      famousDishes: [
        "Tô - A thick porridge made from millet, sorghum, or maize flour, eaten with various sauces as the main staple food",
        "Riz Gras (Fat Rice) - Rice cooked with tomatoes, onions, vegetables, and sometimes meat in a single pot until flavorful and slightly oily",
        "Babenda - A nutritious green leaf stew made with sorrel, spinach, or other local greens mixed with ground peanuts and fish",
        "Brochettes - Skewered and grilled meat (usually goat or beef) seasoned with spices and served with raw onions and salt",
        "Dégué - A refreshing dessert or snack made from millet couscous mixed with yogurt, sugar, and sometimes fruit"
      ]
    },
    culturalCustoms: [
      "Greetings are extremely important; take time to shake hands with everyone present and ask about family before discussing business",
      "The right hand is used for eating, giving, and receiving items; using the left hand for these purposes is considered impolite",
      "Remove shoes before entering someone's home or a sacred space like a mosque",
      "Ask permission before photographing people, particularly in rural areas where cameras may be associated with spiritual concerns",
      "Respect traditional chiefs and elders, who maintain significant influence in community decision-making"
    ],
    travelTips: [
      "Carry a photocopy of your passport while keeping the original secure in your accommodation",
      "Pack lightweight, modest clothing that covers shoulders and knees, especially when visiting rural communities",
      "Bring adequate supplies of any necessary medications, as pharmacies outside major cities may have limited stock",
      "Purchase a local SIM card for your phone upon arrival for affordable data and calls; coverage is surprisingly good in populated areas",
      "Check current travel advisories before planning your trip, as security situations can change in certain regions",
      "Arrange transportation through reliable sources; public transportation options exist but can be unpredictable outside major routes"
    ],
    safetyInfo: "Burkina Faso has experienced increased security challenges in recent years, particularly in northern and eastern border regions where various armed groups operate. Most governments advise against travel to provinces bordering Mali and Niger and recommend heightened vigilance throughout the country. The capital Ouagadougou and major tourist areas like Bobo-Dioulasso generally remain safer, though they have experienced isolated terrorist incidents targeting foreign visitors. Travelers should register with their embassy, maintain awareness of surroundings, avoid political gatherings, and follow local news. Beyond security concerns, health risks include malaria (prevention medication essential), waterborne illnesses, and limited medical facilities outside major cities, making comprehensive travel insurance with evacuation coverage strongly recommended. Road safety presents significant challenges due to poor infrastructure, limited lighting, and mixed traffic including animals and carts. Petty crime exists primarily in urban areas; minimize risk by avoiding displays of wealth, using hotel safes, and being cautious with ATM usage. Despite these challenges, many visitors report positive experiences, emphasizing that personal connections with local guides and common-sense precautions significantly enhance safety while traveling in accessible regions.",
    sustainableTourism: "Burkina Faso's tourism sector remains relatively undeveloped, creating both challenges and opportunities for sustainable practices. The country's conservation efforts focus on protecting national parks and reserves including W National Park (shared with Niger and Benin), where anti-poaching initiatives attempt to preserve elephant populations and other threatened species despite limited resources. Community-based tourism initiatives have emerged in several regions, including the Lobi country and areas around Bobo-Dioulasso, where villages receive direct benefits from visitor fees and handicraft purchases. These programs typically involve local guides who negotiate appropriate interactions with traditional communities while ensuring fair compensation for cultural sharing. Sustainable travelers should select tour operators with established relationships in communities they visit, respect cultural sensitivities including appropriate dress and photography permissions, purchase handicrafts directly from artisans rather than through multiple intermediaries, conserve water (a precious resource in this semi-arid environment), avoid single-use plastics which lack proper disposal systems in many areas, support restaurants serving locally-grown food, and consider carbon offset programs to mitigate long-distance travel impacts. The government's Ministry of Tourism has developed a sustainable tourism framework emphasizing cultural preservation and environmental protection, though implementation resources remain limited.",
    visaRequirements: "Most visitors to Burkina Faso require a visa, with few exemptions primarily limited to citizens of ECOWAS (Economic Community of West African States) member countries. Tourist visas typically allow stays of up to 90 days and must be obtained in advance from Burkinabé embassies or consulates, as visa-on-arrival options remain inconsistent. Application requirements include a passport valid for at least six months beyond the planned departure date, completed application forms, passport photos, proof of accommodation arrangements, yellow fever vaccination certificate, and payment of visa fees (approximately $50-100 USD depending on nationality and processing time). Visa processing typically takes 3-7 business days but can extend longer during peak periods or for certain nationalities. Upon arrival, visitors must register with local authorities within 48 hours; most hotels handle this process automatically for guests. Land border crossings with neighboring countries operate with varying efficiency; carry printed copies of all relevant documentation. For stays beyond the initial visa period, extensions can be arranged through the Direction Générale de la Police Nationale in Ouagadougou, though the process requires patience and possibly multiple visits. Ensure all entry and exit stamps are properly recorded in your passport to avoid complications during departure.",
    budget: {
      budget: "$25-40 (15,000-25,000 XOF) per day for basic guesthouses, street food and simple restaurants, public transportation, and minimal entrance fees",
      midRange: "$50-100 (30,000-60,000 XOF) per day for comfortable hotels with air conditioning, restaurant meals, hired drivers for day trips, and cultural experiences with guides",
      luxury: "$150+ (90,000+ XOF) per day for the best available accommodations, private transportation, professional guides, and customized cultural experiences"
    },
    transportationOptions: [
      "Shared taxis (taxi-brousse) connect major towns with departures when vehicles fill completely",
      "Bus services including STAF and TCV operate between major cities with scheduled departures and air conditioning",
      "Car rentals with drivers provide the most flexible and comfortable option for exploring the country",
      "Domestic flights connect Ouagadougou with Bobo-Dioulasso, though schedules can be inconsistent",
      "Motorcycle taxis offer affordable transportation within towns and cities for short distances"
    ],
    neighboringCountries: [
      "Mali (to the north and west)",
      "Niger (to the east)",
      "Benin (to the southeast)",
      "Togo (to the southeast)",
      "Ghana (to the south)",
      "Ivory Coast (to the southwest)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Cultural Experience", "Traditional Architecture", "Historical Sites", "Artisan Crafts", "UNESCO Heritage",
    "Off the Beaten Path", "Wildlife Viewing", "Natural Wonders", "Indigenous Culture", "Budget Travel"
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Content will be added in subsequent edits */}
      </main>
      <Footer />
    </>
  );
};

export default BurkinaFasoCountry; 