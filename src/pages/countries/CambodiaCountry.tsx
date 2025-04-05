import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CambodiaCountry: React.FC = () => {
  // Real country data
  const countryData = {
    name: "Cambodia",
    slug: "cambodia",
    continent: "Asia",
    capital: "Phnom Penh",
    languageOfficial: "Khmer",
    languagesSpoken: ["Khmer", "English", "French", "Vietnamese", "Chinese"],
    currency: "Cambodian Riel (KHR)",
    population: 16718965,
    area: 181035,
    timeZones: ["GMT+7 (ICT)"],
    callingCode: "+855",
    drivingSide: "right" as const,
    flagImageUrl: "https://images.unsplash.com/photo-1616165415772-f5b95c811a05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Cambodia is a Southeast Asian nation known for its ancient temples, complex history, and resilient people. Once home to the powerful Khmer Empire, the country features magnificent archaeological sites including Angkor Wat, the world's largest religious monument. After emerging from decades of conflict in the late 20th century, Cambodia has developed into a destination that offers both profound historical experiences and natural beauty, from the Mekong River's dolphin habitats to pristine coastal areas.",
    whyVisit: "Cambodia offers travelers an intoxicating mix of ancient wonders and vibrant modern culture. The majestic temples of Angkor represent one of humanity's most impressive architectural achievements, with hundreds of intricately carved structures emerging from the jungle to tell stories of a civilization at its zenith. Beyond these iconic ruins, Cambodia provides authentic cultural experiences through floating villages on Tonlé Sap Lake, traditional Khmer cooking classes, and encounters with rare wildlife in its national parks. The country's tragic recent history under the Khmer Rouge regime is sensitively preserved at sites like the Killing Fields and Tuol Sleng Genocide Museum, offering essential historical context and honoring victims' memories. Travelers will find Cambodia remarkably affordable compared to neighboring countries, with excellent value accommodations, dining, and activities available at all budget levels. Perhaps most compelling is the genuine warmth of Cambodian people, who despite historical hardships welcome visitors with remarkable kindness and resilience. From the historic grandeur of Phnom Penh to undeveloped paradise islands in the south, Cambodia rewards travelers with experiences both profound and uplifting.",
    bestTimeToVisit: {
      text: "The best time to visit Cambodia is during the cool, dry season from November to February when temperatures range from 24-32°C (75-90°F) with minimal rainfall, creating ideal conditions for temple exploration and outdoor activities. The shoulder months of October and March offer fewer crowds while still providing relatively manageable weather. The hot season (March-May) brings intense heat often exceeding 35°C (95°F), while the rainy season (May-October) features afternoon downpours that can complicate travel to remote areas but rewards visitors with lush landscapes and dramatically reduced tourist numbers.",
      months: ["November", "December", "January", "February"]
    },
    weatherInfo: {
      summer: "Summer in Cambodia (June-August) falls within the wet season, characterized by high humidity and regular rainfall typically occurring as afternoon downpours rather than continuous precipitation. Temperatures average 25-32°C (77-90°F), with the frequent rain providing welcome relief from the heat and transforming the landscape into vibrant green vistas. The rain replenishes Tonlé Sap Lake, causing its dramatic annual expansion. Despite the precipitation, most days offer several hours of sunshine, particularly during mornings. Sites like Angkor Wat are considerably less crowded, and photographers appreciate the enhanced colors and dramatic skies. Rural roads may become difficult to navigate, particularly in more remote regions, though main highways generally remain passable. The rainfall creates lush, atmospheric conditions in temple complexes, with moss and vegetation thriving on ancient stones and mist often rising from surrounding forests in the early morning.",
      winter: "Winter (December-February) represents Cambodia's peak tourist season, delivering comfortably warm days with temperatures ranging from 24-30°C (75-86°F) and minimal rainfall. Evenings can feel surprisingly cool, especially in northern regions near Siem Reap, occasionally dropping to 18°C (64°F) and requiring a light sweater. Humidity reaches its lowest levels of the year, creating ideal conditions for exploring temple complexes and cities without the discomfort of intense heat or rain. The Tonlé Sap Lake retreats to its smallest size during this period, concentrating fishing activities and changing the character of floating villages. Clear skies provide excellent conditions for photography and sunset viewing at iconic locations like Angkor Wat, though popular sites become significantly more crowded. The pleasant climate coincides with several important festivals, including Cambodian Independence Day (November 9) and Chinese New Year (January/February, varying by lunar calendar).",
      spring: "Spring (March-May) brings Cambodia's hottest period, with temperatures frequently exceeding 35°C (95°F) and occasionally reaching 40°C (104°F), particularly in April—the warmest month. Humidity begins rising as the wet season approaches, creating increasingly sultry conditions. The landscape appears at its driest, with dusty roads and parched rice fields awaiting the coming rains. This intense heat makes midday outdoor activities challenging, especially around temple complexes with limited shade; most visitors adjust by exploring early mornings and late afternoons. The period concludes with the onset of early wet season showers in May, bringing welcome relief from the heat. The Khmer New Year (Chaul Chnam Thmey) in mid-April represents Cambodia's most significant celebration, offering visitors unique cultural experiences despite the challenging weather. Water levels in rivers and Tonlé Sap Lake reach their annual minimum, altering fishing patterns and revealing expanses of shoreline normally underwater.",
      fall: "Fall (September-November) represents Cambodia's transition from wet to dry season, with gradually decreasing rainfall and humidity as the months progress. September still experiences regular showers, while November typically offers predominantly dry conditions. Temperatures range from 24-30°C (75-86°F), trending cooler as the season advances. The landscape appears at its most verdant following the monsoon months, with rice paddies at their greenest and waterfalls flowing at full capacity. The Tonlé Sap Lake reaches its maximum size in September/October before beginning its gradual retreat. The Bon Om Touk (Water Festival) in November celebrates this annual flow reversal of the Tonlé Sap River with boat races and festivities throughout the country. Wildlife viewing opportunities improve as conditions dry, particularly in reserves like Mondulkiri. Tourist numbers begin increasing in November as the weather stabilizes, though October offers an excellent balance of good weather and relatively thin crowds. Occasional flooding can still affect low-lying areas in early fall, particularly around the Mekong and Tonlé Sap, though conditions rarely impact major tourist destinations significantly."
    },
    majorCities: [
      {
        name: "Phnom Penh",
        description: "Cambodia's capital and largest city blends French colonial architecture with traditional Khmer influences and modern development along the banks of the Mekong and Tonlé Sap rivers. Once known as the 'Pearl of Asia,' Phnom Penh offers essential historical context through sites like the Royal Palace complex with its Silver Pagoda housing thousands of silver floor tiles and priceless Buddha statues. The National Museum houses the world's finest collection of Khmer sculpture, while the somber Tuol Sleng Genocide Museum and Choeung Ek Killing Fields memorial provide crucial insights into Cambodia's tragic recent history. The city's vibrant riverside promenade comes alive each evening as locals gather for exercise, socializing, and outdoor dining at the many restaurants serving both Khmer and international cuisine. Markets including the art deco Central Market (Phsar Thmei) and sprawling Russian Market (Phsar Tuol Tom Poung) offer everything from fresh produce to antiques and souvenirs. The city's burgeoning arts scene includes contemporary galleries, traditional dance performances at the National Museum, and an emerging independent film movement."
      },
      {
        name: "Siem Reap",
        description: "The gateway to the temples of Angkor has evolved from a small village into a vibrant tourism hub while maintaining considerable charm. The compact city center features the lively Pub Street area with its concentration of restaurants, bars, and night markets selling crafts, clothing, and street food. The riverside area offers a more relaxed atmosphere with upscale hotels, galleries, and cafes housed in restored French colonial buildings. The Angkor National Museum provides historical context for temple visits with its extensive collection of Khmer artifacts and multimedia presentations. Beyond temple touring, visitors can experience traditional Khmer culture through apsara dance performances, cooking classes, and visits to Artisans Angkor workshops where young Cambodians learn traditional crafts including silk weaving, stone carving, and lacquerware production. The surrounding countryside offers opportunities to visit floating villages on Tonlé Sap Lake, discover little-known temples hidden in the jungle, or experience rural Cambodian life through community tourism initiatives focusing on sustainable development."
      },
      {
        name: "Battambang",
        description: "Cambodia's second-largest city offers the country's best-preserved colonial architecture along quiet riverside streets largely untouched by mass tourism. The compact city center features numerous French-era buildings now housing boutique hotels, cafes, and art galleries contributing to Battambang's reputation as Cambodia's arts hub. The surrounding countryside reveals rural Cambodia at its most authentic, with traditional wooden stilt houses among emerald rice paddies and ancient temple ruins predating the Angkor period. The quirky Bamboo Train (nori) provides a unique travel experience on improvised rail platforms powered by small engines traversing warped, single-track rails through picturesque landscapes. Phare Ponleu Selpak, a non-profit arts school, presents spectacular circus performances combining traditional and contemporary themes while providing opportunities for disadvantaged youth. Nearby caves at Phnom Sampeau contain sobering memorials to Khmer Rouge atrocities but also host the spectacular natural phenomenon of millions of bats emerging at sunset. The city's developing food scene includes excellent Khmer restaurants, coffee shops showcasing locally-grown beans, and cooking schools teaching traditional techniques using fresh market ingredients."
      },
      {
        name: "Sihanoukville (Preah Sihanouk)",
        description: "Cambodia's primary coastal city has undergone dramatic transformation in recent years due to massive Chinese investment and casino development, creating distinct zones within the greater urban area. Visitors seeking traditional beach experiences increasingly head to nearby islands or alternative coastal towns, though some original beach areas like Otres remain relatively undeveloped. The port city serves as gateway to Cambodia's southern islands including Koh Rong and Koh Rong Sanloem, where pristine beaches, bioluminescent plankton, and low-key accommodation options offer alternatives to the increasingly developed mainland. Ream National Park just outside the city preserves mangrove forests, pristine beaches, and coral reefs accessible through boat tours that sometimes encounter rare Irrawaddy dolphins. Fresh seafood remains a highlight, with beachside restaurants serving catch-of-the-day preparations incorporating Khmer flavors. While much of the city center continues rapid development catering primarily to Chinese tourists and investors, outskirts areas maintain traditional Cambodian character with fishing communities and local markets largely unchanged by tourism."
      },
      {
        name: "Kampot",
        description: "This charming riverside town near Cambodia's south coast attracts visitors with its relaxed atmosphere, well-preserved French colonial architecture, and stunning natural surroundings dominated by Bokor Mountain. The sleepy center features crumbling colonial buildings alongside renovated structures housing boutique hotels, art galleries, and cafes serving the region's famous Kampot pepper in creative culinary applications. The Praek Tuek Chhu River provides the focal point for many activities, with kayaking, sunset cruises, and riverside dining among popular options. Nearby Bokor National Park preserves mountain ecosystems and an abandoned French hill station featuring the atmospheric ruins of a grand hotel, casino, and church gradually being reclaimed by jungle vegetation. The surrounding countryside produces Cambodia's most famous culinary export—Kampot pepper—with various farms offering tours explaining the cultivation, harvesting, and grading of this internationally protected geographical indication product. The town's proximity to the Gulf of Thailand provides access to fresh seafood, particularly the region's famous crab with Kampot pepper. Kampot's relaxed pace attracts digital nomads and artists, contributing to a small but thriving creative community that organizes occasional events and exhibitions."
      }
    ],
    famousFor: [
      "Angkor Wat and the surrounding temple complex, representing the world's largest religious monument",
      "Khmer cuisine featuring complex flavor profiles built on ingredients like lemongrass, galangal, and fish sauce",
      "Traditional Apsara dance, recognized by UNESCO as Intangible Cultural Heritage",
      "Kampot pepper, revered by chefs worldwide for its complex flavor and protected geographical status",
      "Tonlé Sap Lake, Southeast Asia's largest freshwater lake with unique floating villages and extraordinary ecosystem"
    ],
    topAttractions: [
      {
        name: "Angkor Archaeological Park",
        description: "This UNESCO World Heritage site represents one of humanity's most magnificent architectural achievements, encompassing over 400 square kilometers of temples, hydraulic structures, and ancient urban planning. The iconic Angkor Wat stands as the largest religious monument in the world, combining spiritual symbolism with artistic mastery in its 900-year-old stone reliefs depicting Hindu mythology and everyday Khmer life. Beyond this centerpiece, the walled city of Angkor Thom contains the enigmatic Bayon Temple with its 216 smiling stone faces, while Ta Prohm (famously featured in 'Tomb Raider') demonstrates nature's reclamation as massive strangler fig trees embrace ancient stonework. The vastness of the archaeological park means that even during peak season, visitors can find solitude at lesser-known temples like Banteay Srei—the 'Citadel of Women'—renowned for its intricate pink sandstone carvings considered the most delicate in Khmer art. Sunrise at Angkor Wat has become an iconic experience, as the temple's distinctive silhouette gradually reveals itself against the lightening sky, reflected in the lotus pools before it. Archaeological research continues to reveal new insights about the site, including recent lidar surveys uncovering extensive hidden structures beneath the forest floor, affirming Angkor as the largest pre-industrial urban complex in the world. Most visitors base themselves in nearby Siem Reap, exploring the temples over multiple days with options ranging from traditional tours by air-conditioned vehicle to atmospheric bicycle journeys through jungle-lined paths connecting major structures. Conservation efforts balance tourism access with preservation, with ongoing restoration projects visible throughout the complex.",
        imageUrl: "https://images.unsplash.com/photo-1458104806333-30018ec69be4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Royal Palace and Silver Pagoda",
        description: "Phnom Penh's most distinctive landmark combines spectacular architecture with profound cultural significance as the official residence of Cambodia's king. Established in 1866 when the capital moved from Oudong, the extensive complex features classic Khmer roofs and gilded details set amid immaculately maintained tropical gardens. The Silver Pagoda (Wat Preah Keo Morokat) within the palace grounds houses national treasures including the 'Emerald Buddha' dating from the 17th century and a life-sized gold Buddha decorated with 9,584 diamonds. The pagoda derives its name from its floor covered with over 5,000 silver tiles weighing approximately five tons. Adjacent throne halls and pavilions display royal regalia, ceremonial costumes, and ancient artifacts offering insights into coronation rituals and court ceremonies that continue today. The Moonlight Pavilion provides the setting for classical dance performances and other significant royal events. Gardens feature distinctive topiary, fragrant frangipani trees, and stupas containing ashes of former royals. While portions remain closed to the public as private royal quarters, the accessible areas provide essential context for understanding Cambodia's monarchy, which despite interruptions during the Khmer Rouge period, continues to play a central role in national identity. Visitors must dress respectfully with covered shoulders and knees, removing shoes before entering temple buildings. English-speaking guides are available to explain the significance of various structures and elaborate murals depicting scenes from the Reamker (Cambodian version of the Ramayana) that adorn palace walls. The complex opens daily except during official ceremonies, with photography permitted in most areas.",
        imageUrl: "https://images.unsplash.com/photo-1599570798338-599d4a7d079e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      },
      {
        name: "Tuol Sleng Genocide Museum",
        description: "This former high school transformed into the notorious S-21 prison during the Khmer Rouge regime stands as a sobering memorial to Cambodia's darkest period. Between 1975 and 1979, approximately 20,000 prisoners were detained, tortured, and executed at this facility in central Phnom Penh, with only seven known survivors. The site has been preserved much as it was found when Vietnamese forces liberated the city in 1979, with sparse cells, torture implements, and thousands of prisoner photographs creating an unflinching historical record. Exhibition rooms display original documents, confessions extracted under torture, and implements of suffering that communicate the systematic nature of the atrocities committed. Survivor testimonies provide personal dimensions to the historical record, while audio guides available in multiple languages offer essential context about the Khmer Rouge's brutal four-year rule that resulted in approximately 1.7 million deaths from execution, starvation, and disease. The museum grounds include a memorial stupa containing victims' remains and commemorative plaques. While undeniably harrowing, the museum serves a crucial educational purpose in documenting genocide and preserving historical memory to prevent recurrence. Many visitors combine this site with the Choeung Ek Killing Fields located approximately 15 kilometers outside the city, where most S-21 prisoners were ultimately executed. The museum employs some survivors as guides, offering firsthand accounts that provide powerful personal testimony. The site continues evolving as a center for genocide education with ongoing research, documentation efforts, and international cooperation with similar memorial sites worldwide.",
        imageUrl: "https://images.unsplash.com/photo-1594222082226-ac7b1e035d2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Tonlé Sap Lake and Floating Villages",
        description: "Southeast Asia's largest freshwater lake demonstrates one of the world's most remarkable hydrological phenomena, with its flow direction reversing seasonally and its size expanding up to five times during monsoon season. This UNESCO Biosphere Reserve sustains extraordinary biodiversity including endangered water birds, fish species found nowhere else, and one of the most productive freshwater fisheries on earth. The lake has shaped Cambodian civilization for millennia, with communities adapting to its rhythm through floating villages that rise and fall with changing water levels. Several accessible floating communities welcome visitors, including Chong Khneas (closest to Siem Reap but increasingly touristy), Kampong Phluk (featuring houses on tall stilts towering up to seven meters above the dry-season shore), and Kampong Khleang (the largest and most authentic, with a mix of stilted and floating structures housing over 10,000 residents). Life in these villages unfolds entirely on water, with floating schools, churches, basketball courts, markets, and even crocodile farms demonstrating ingenious adaptation to this unique environment. Boat tours provide the primary access method, ideally arranged through community tourism initiatives that ensure direct benefits to residents. Early morning visits offer opportunities to observe fishing activities and vibrant markets where goods are traded entirely by boat. The dramatic seasonal transformation means experiences differ significantly depending on visit timing—dry season (March-July) reveals the stilted architecture in full height above cracked earth, while wet season (August-February) finds water reaching the floor level of homes with increased boat activity. Beyond village visits, the lake offers excellent birdwatching at the Prek Toal sanctuary, which hosts rare species including spot-billed pelicans, milky storks, and greater adjutants.",
        imageUrl: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
      },
      {
        name: "Koh Rong and Cambodian Islands",
        description: "Cambodia's southern coastline harbors a largely undeveloped archipelago featuring pristine beaches, phosphorescent waters, and marine ecosystems that offer quieter alternatives to Thailand's more commercialized islands. Koh Rong, the largest and most developed, spans approximately 78 square kilometers of predominantly undeveloped jungle interior ringed by over 30 beaches. Its western shore features seven kilometers of uninterrupted white sand lined with pine-like casuarina trees, where accommodations range from basic bungalows to emerging luxury resorts while maintaining a laid-back atmosphere. The island's clear waters support vibrant coral reefs accessible to snorkelers, while deeper dive sites encounter seahorses, nudibranchs, and occasional reef sharks. Perhaps most magical are nighttime swims among bioluminescent plankton that illuminate the water with blue sparkles in response to movement—a natural phenomenon visible most nights, particularly during darker moon phases. Neighboring Koh Rong Sanloem offers a even quieter experience focused on Saracen Bay's perfect crescent beach and small-scale, environmentally conscious development. More remote islands accessible through multi-day boat trips include Koh Tang and Koh Prins, where pristine reefs remain virtually untouched. Despite increasing development, the islands maintain environmental consciousness through initiatives like marine protected areas, plastic reduction programs, and solar power implementation. Most islands lack roads, with beaches connected by forest trails or boat transfers. Access comes via regular ferry services and speedboats from Sihanoukville, with journey times ranging from 45 minutes to several hours depending on destination and vessel type. While amenities have improved, visitors should expect more limited infrastructure compared to established island destinations elsewhere in Southeast Asia.",
        imageUrl: "https://images.unsplash.com/photo-1583159734263-1c13ed82b5b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      }
    ],
    localCuisine: {
      description: "Cambodian cuisine offers a distinctive culinary experience often overshadowed by its Thai and Vietnamese neighbors despite equally complex flavor profiles and ancient heritage. Khmer cooking balances four fundamental flavors—salty, sweet, sour, and bitter—often within a single dish, creating harmonious contrasts that reflect the country's agricultural abundance. Central to most meals is prahok, a pungent fermented fish paste that provides depth and umami similar to fish sauce but with more complexity. Fresh herbs including lemongrass, kaffir lime leaves, galangal, and wild pepper leaves feature prominently, as do aromatic spices like cardamom, star anise, and cloves. Rice forms the foundation of Cambodian nutrition, with the country's fertile fields producing several distinctive varieties including fragrant jasmine types. Meals typically follow a communal format with multiple shared dishes accompanied by rice, though Western-oriented restaurants increasingly serve individual portions. Regional variations exist across the country, with coastal areas emphasizing seafood, while northwestern cuisine shows Thai influences with increased chili usage. Preparation methods emphasize freshness, with markets visited daily and ingredients often prepared from scratch rather than using pre-made pastes or powders. The French colonial period contributed baguettes and pâté to the culinary landscape, most evident in the popular street food sandwich num pang. Contemporary Cambodian cuisine continues evolving, with a new generation of chefs exploring both heritage recipes and innovative fusion approaches.",
      famousDishes: [
        "Amok Trey - Fish mousse with coconut curry steamed in banana leaves, considered Cambodia's national dish",
        "Lok Lak - Stir-fried marinated beef cubes served over lettuce, tomatoes, and onions with a lime-pepper dipping sauce",
        "Num Banh Chok - Rice noodles topped with fish-based green curry, fresh vegetables, and wild herbs, often eaten for breakfast",
        "Kuy Teav - Rice noodle soup with pork or beef, bean sprouts, and herbs, topped with fried garlic and served with lime",
        "Bai Sach Chrouk - Grilled marinated pork served with broken rice, pickled vegetables, and broth, a popular breakfast dish"
      ]
    },
    culturalCustoms: [
      "Greet others with the traditional sampeah (pressing palms together at chest or head level) rather than handshakes or hugs",
      "Remove shoes before entering homes, temples, and many businesses including some restaurants and shops",
      "Dress modestly when visiting temples or rural areas, with shoulders and knees covered for both men and women",
      "Avoid touching anyone's head (considered the most sacred part of the body) or pointing with feet (the lowest part)",
      "Ask permission before photographing monks or people in rural communities where cameras remain uncommon",
      "When invited to a Cambodian home, bring fruit, desserts, or drinks as gifts, but avoid wrapping in white paper (associated with funerals)"
    ],
    travelTips: [
      "Carry U.S. dollars, which are widely accepted throughout Cambodia alongside the local riel (used primarily for small purchases and change)",
      "Purchase a local SIM card upon arrival for inexpensive data and calls; coverage is surprisingly good even in rural areas",
      "Stay hydrated and use sun protection—Cambodia's heat and humidity can cause rapid dehydration, particularly during temple exploration",
      "Negotiate tuk-tuk and taxi fares in advance; ride-hailing apps like PassApp and Grab provide fair, consistent pricing in major cities",
      "Plan temple visits for early morning or late afternoon to avoid midday heat and capture better lighting for photography",
      "Consider supporting responsible tourism by choosing community-based tour operators that ensure benefits reach local communities"
    ],
    safetyInfo: "Cambodia ranks as a generally safe destination for travelers, with violent crime against foreigners relatively rare. Primary safety concerns involve petty theft in crowded areas like markets and nightlife districts, particularly in Phnom Penh and Siem Reap. Maintain awareness of belongings, avoid displaying expensive jewelry or electronics, and use hotel safes for valuables. Traffic presents significant hazards due to limited regulation enforcement and diverse vehicle types sharing roads; exercise extreme caution when crossing streets or if renting motorbikes (which requires international driving permits and is not covered by most travel insurance policies). Health considerations include protecting against mosquito-borne illnesses through repellent and appropriate clothing, particularly during rainy season when dengue fever risk increases. While malaria exists in remote border regions and forested areas, most tourism destinations including Angkor, Phnom Penh, and coastal regions have minimal risk. Food safety practices include choosing busy restaurants with high turnover, avoiding raw vegetables in basic establishments, and drinking bottled or purified water. Medical facilities in Phnom Penh and Siem Reap provide adequate care for minor ailments, but serious conditions require evacuation to Thailand, making comprehensive travel insurance essential. The country's remaining unexploded ordnance primarily affects remote rural areas well away from established tourist routes; visitors should never stray from marked paths when hiking in less-developed regions. Many travelers report feeling particularly safe due to the warmth and helpfulness of Cambodian people, though standard precautions remain advisable.",
    sustainableTourism: "Cambodia faces significant sustainability challenges as tourism development accelerates, with initiatives emerging to balance economic benefits with environmental and cultural preservation. Conservation efforts focus particularly on the Cardamom Mountains, which contain Southeast Asia's largest remaining rainforest and critical habitat for endangered species including Asian elephants, clouded leopards, and sun bears. Organizations like Wildlife Alliance conduct ranger patrols combating illegal logging and poaching while developing community-based ecotourism providing alternative livelihoods. Marine conservation programs around the southern islands implement coral restoration projects, monitor endangered species including seahorses and marine turtles, and establish protected areas with sustainable fishing practices. Cultural preservation efforts include traditional craft revival through organizations like Artisans Angkor, which trains young Cambodians in ancient techniques including stone carving, silk weaving, and lacquerware production while providing fair employment. Responsible visitors can support sustainability by selecting accommodations with environmental certifications (e.g., Travelife, Green Growth 2050), using refillable water bottles to reduce plastic waste, participating in community-based tourism initiatives directly benefiting local populations, and avoiding wildlife exploitation including elephant rides and performances involving wild animals. Travelers should research tour operators' environmental policies and community involvement, particularly for visits to sensitive ecological areas or traditional communities. The country's emerging farm-to-table movement connects restaurants directly with organic producers, reducing chemical use and transportation impacts while supporting small-scale agriculture. Several voluntourism opportunities exist, though careful research remains essential to ensure projects create genuine community benefits rather than dependency relationships.",
    visaRequirements: "Most visitors to Cambodia require a visa, with several convenient options available. The e-visa system allows travelers from most countries to apply online through the official government website (evisa.gov.kh) at least three days before arrival, receiving electronic approval valid for a 30-day stay at major entry points including Phnom Penh and Siem Reap airports and several land borders with Thailand, Vietnam, and Laos. Requirements include a passport valid for at least six months beyond the planned departure date, a recent digital photograph, and payment of $36 USD fee by credit card. Alternatively, visas on arrival remain available at international airports and most land crossings, requiring a passport photo and $30 USD cash payment. Business travelers need additional documentation and pay $35 USD for specified-duration visas. Southeast Asian nationals benefit from various exemptions, with citizens of ASEAN countries generally permitted stays between 14-30 days without visas. For longer stays, tourists can extend their visa once for an additional 30 days through travel agencies in major cities or directly at the immigration department in Phnom Penh for approximately $45 USD. Those planning extended periods in Cambodia should consider business or ordinary visas (E-class) which allow multiple extensions without leaving the country. All visitors must carry their passport or a notarized copy when traveling within Cambodia, particularly when crossing provincial boundaries where occasional checkpoints operate. Overstaying visas incurs fines of $10 USD per day, collected upon departure.",
    budget: {
      budget: "$25-35 (100,000-140,000 KHR) per day for dormitory or guesthouse accommodation, street food and local restaurants, public transportation, and basic activities",
      midRange: "$50-100 (200,000-400,000 KHR) per day for comfortable hotels with air conditioning, meals at higher-end restaurants, private transportation, and guided tours of major attractions",
      luxury: "$150+ (600,000+ KHR) per day for luxury hotels and resorts, fine dining, private guides, exclusive experiences, and internal flights between destinations"
    },
    transportationOptions: [
      "Tuk-tuks (motorized rickshaws) offer convenient short-distance transportation within cities, with trips typically costing $1-5 depending on distance",
      "Ride-hailing apps including PassApp and Grab operate in major cities, providing fixed-price alternatives to negotiating with drivers",
      "Shared taxis connect major cities and towns, departing when full from central transportation hubs with affordable fares",
      "Air-conditioned buses serve major routes between tourist destinations, with companies like Giant Ibis and Mekong Express offering premium services including onboard WiFi",
      "Domestic flights connect Phnom Penh with Siem Reap and Sihanoukville, saving significant travel time for those with limited schedules",
      "Boat services operate seasonally between Siem Reap and Phnom Penh (approximately 6 hours), and from Sihanoukville to offshore islands"
    ],
    neighboringCountries: [
      "Thailand (northwest and northern borders)",
      "Laos (northeast border)",
      "Vietnam (east and southeast borders)"
    ]
  };

  // Tags for recommender system
  const tags = [
    "Historical Sites", "Ancient Temples", "UNESCO Heritage", "Beach Destinations", "Cultural Experience",
    "Budget Travel", "Culinary Adventure", "Island Paradise", "Wildlife Viewing", "Off the Beaten Path"
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">{countryData.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">{countryData.description}</p>
            
            <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden">
              <img 
                src={countryData.flagImageUrl} 
                alt={`${countryData.name} scenery`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-white text-2xl font-bold">{countryData.name}</h2>
                <p className="text-white/90">{countryData.continent}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why Visit {countryData.name}</h2>
              <p className="mb-4">{countryData.whyVisit}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <Link to={`/recommender?tags=${encodeURIComponent(tag)}`} key={tag}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-secondary">
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            
            <Tabs defaultValue="attractions" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="attractions">Top Attractions</TabsTrigger>
                <TabsTrigger value="cities">Major Cities</TabsTrigger>
                <TabsTrigger value="cuisine">Local Cuisine</TabsTrigger>
                <TabsTrigger value="customs">Cultural Customs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="attractions" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Must-See Attractions</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {countryData.topAttractions.map((attraction) => (
                    <Card key={attraction.name} className="overflow-hidden">
                      <div className="h-[200px] relative">
                        <img 
                          src={attraction.imageUrl} 
                          alt={attraction.name}
                          className="absolute inset-0 w-full h-full object-cover" 
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg mb-1">{attraction.name}</h4>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cities" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Major Cities</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {countryData.majorCities.map((city) => (
                    <Card key={city.name}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-lg mb-1">{city.name}</h4>
                        <p className="text-sm text-muted-foreground">{city.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cuisine" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Local Cuisine</h3>
                <p className="mb-4">{countryData.localCuisine.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Famous Dishes:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {countryData.localCuisine.famousDishes.map((dish) => (
                      <li key={dish} className="text-muted-foreground">{dish}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="customs" className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Cultural Customs</h3>
                <ul className="list-disc pl-5 space-y-3">
                  {countryData.culturalCustoms.map((custom) => (
                    <li key={custom} className="text-muted-foreground">{custom}</li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:w-1/3">
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Quick Facts</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Capital</span>
                    <span className="font-medium">{countryData.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Continent</span>
                    <span className="font-medium">{countryData.continent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population</span>
                    <span className="font-medium">{countryData.population.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Area</span>
                    <span className="font-medium">{countryData.area.toLocaleString()} km²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Currency</span>
                    <span className="font-medium">{countryData.currency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span className="font-medium">{countryData.languagesSpoken.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Zones</span>
                    <span className="font-medium">{countryData.timeZones.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Driving Side</span>
                    <span className="font-medium capitalize">{countryData.drivingSide}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Best Time to Visit</h3>
                <p className="mb-2 text-sm text-muted-foreground">{countryData.bestTimeToVisit.text}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {countryData.bestTimeToVisit.months.map((month) => (
                    <Badge key={month} variant="secondary">{month}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Weather Information</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Summer</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.summer}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Winter</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.winter}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Spring</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.spring}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Fall</h4>
                    <p className="text-sm text-muted-foreground">{countryData.weatherInfo.fall}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Travel Tips</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {countryData.travelTips.map((tip) => (
                    <li key={tip} className="text-sm text-muted-foreground">{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Budget Guidance</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Budget</h4>
                    <p className="text-sm text-muted-foreground">{countryData.budget.budget}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Mid-Range</h4>
                    <p className="text-sm text-muted-foreground">{countryData.budget.midRange}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Luxury</h4>
                    <p className="text-sm text-muted-foreground">{countryData.budget.luxury}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-4">Safety Information</h3>
                <p className="text-sm text-muted-foreground">{countryData.safetyInfo}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CambodiaCountry; 