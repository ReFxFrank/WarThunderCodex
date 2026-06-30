import type { Vehicle } from "@/lib/schema";

// Seeded vehicle records — generated from the research/verify workflow.
// Every numeric stat is sourced; unverifiable fields are null and listed in unverified[].
// media[] holds license-verified real-world photos (PD/CC) with credit.
export const vehicles: Vehicle[] = [
  {
    "id": "t-34-85-1944",
    "name": "T-34-85 (1944)",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 5.7,
      "realistic": 5.7,
      "simulator": 5.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The T-34-85 (1944) is a rank III Soviet medium tank that mates the classic sloped T-34 hull to a larger three-crew turret carrying the 85 mm ZIS-S-53. It is an agile, all-purpose mid-tier vehicle whose punchy gun and good speed offset its modest flat-plate protection.",
    "prosCons": {
      "pros": [
        "Potent 85 mm ZIS-S-53 with strong post-penetration effect",
        "Good acceleration and top speed for flanking and relocating",
        "Sloped frontal hull rewards careful angling",
        "Generous 60-round ammunition load supports long fights",
        "Three-crew turret improves survivability versus older T-34s"
      ],
      "cons": [
        "45 mm flat armour offers little protection at its rating",
        "Limited -5 degrees gun depression weakens hull-down play",
        "Large profile is easy to detect and hit",
        "Reload feels slow until the crew is leveled up",
        "Sides and rear fold quickly to flanking shots"
      ]
    },
    "playstyle": "Treat it as a mobile flanker and second-line supporter, not a stand-and-trade brawler. Exploit the strong acceleration and top speed to reach advantageous angles quickly, keep the hull angled so the 45 mm plates present more effective thickness, and let the ZIS-S-53 disable targets before they can punish your fragile sides. With only -5 degrees of depression, hull-down ridge fighting is awkward, so favour flat terrain and tight corner peeks, and stay in motion because a stationary T-34-85 is a large, easily penetrated target for almost any gun it meets.",
    "history": "Adopted by the Red Army in 1944, the T-34-85 was the up-gunned answer to heavier German tanks like the Panther and Tiger, fitting an 85 mm gun into an enlarged turret that finally gave the design a real chance against thick frontal armour. Cheap to build in huge numbers yet still mobile and well-armed, it became one of the most significant tanks of the war and remained in service with many nations long after 1945.",
    "media": [
      {
        "src": "/vehicles/t-34-85-1944.jpg",
        "alt": "A preserved real-world Soviet T-34-85 medium tank on display at the Parola Tank Museum in Finland, shown in exterior profile (not the in-game model).",
        "credit": "Richard Allen from Nottingham, UK · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — T-34-85 (ussr_t_34_85_zis_53)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_85_zis_53",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": 500,
      "weightTons": 32.2,
      "powerToWeight": 15.4,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "zis-s-53-85mm",
      "reloadBaseSec": 9.6,
      "reloadAcedSec": 7.4,
      "vertGuidanceDeg": [
        -5,
        22
      ],
      "turretTraverseDegSec": 17.5,
      "ammoCapacity": 60,
      "ammoTypeIds": [
        "br-365k",
        "o-365k",
        "br-365p"
      ]
    },
    "armor": {
      "hullMm": {
        "front": "45",
        "side": "45",
        "rear": "45"
      },
      "turretMm": {
        "front": "90",
        "side": "75",
        "rear": "52"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m4a1-sherman",
    "name": "M4A1 Sherman",
    "nation": "usa",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 3.7,
      "realistic": 3.7,
      "simulator": 3.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M4A1 Sherman is a rank II American medium tank carrying the 75 mm M3 cannon and sitting at 3.7 in all three modes. It combines a rounded cast hull, a snappy reload, and generous gun depression into a versatile mid-tier all-rounder that rewards careful positioning over brute armour.",
    "prosCons": {
      "pros": [
        "Generous -12 degrees of gun depression suits hull-down and ridge play",
        "Quick reload (6.5 s stock, 5.0 s aced) allows fast follow-up shots",
        "Rounded cast turret front (76 mm) bounces some same-rank fire",
        "Five-man crew adds a survivability cushion against penetrations",
        "Roomy 90-round ammo stowage"
      ],
      "cons": [
        "Thin hull front (51 mm) is defeated by most same-rank guns",
        "Fairly tall silhouette is easy to spot and target",
        "Modest side and rear plating (38 mm) is exposed when flanked",
        "Several mobility figures could not be cleanly confirmed from the wiki's stat table"
      ]
    },
    "playstyle": "Make the most of the M4A1's -12 degrees of gun depression by working ridgelines and reverse slopes, showing only the rounded turret while the thinner hull stays out of sight. With a reload that drops to 5 seconds when the crew is aced, the tank rewards landing the first hit and trading aggressively, then repositioning before the enemy recovers. Steer clear of drawn-out head-on fights against guns that punch through the 51 mm hull front, and treat the five-man crew as a margin that lets you keep shooting after taking a penetrating hit.",
    "history": "The M4A1 was among the first production members of the M4 Sherman family, set apart by its one-piece cast upper hull in place of the welded structure used on most other variants. Armed with the 75 mm gun, it served extensively with United States and Allied armies through the Second World War and earned a reputation as a dependable workhorse across the North African, Italian, and later campaigns.",
    "media": [
      {
        "src": "/vehicles/m4a1-sherman.jpg",
        "alt": "A side view of a real-world American M4A1 Sherman medium tank preserved at the Fort Lewis Military Museum, showing its cast hull and sloped armor (not the in-game model).",
        "credit": "Articseahorse · CC BY-SA 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "M4A1 (1942) Sherman — wiki.warthunder.com unit page",
        "url": "https://wiki.warthunder.com/unit/us_m4a1_1942_sherman",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "M4A1 — old-wiki.warthunder.com page",
        "url": "https://old-wiki.warthunder.com/index.php?title=M4A1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "enginePowerHp",
      "powerToWeight",
      "reverseGears",
      "neutralSteering",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 30.6,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m3-75mm",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        -12,
        18
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 90,
      "ammoTypeIds": [
        "m72-ap",
        "m61-apcbc",
        "m48-he",
        "m89-smoke"
      ]
    },
    "armor": {
      "hullMm": {
        "front": "51",
        "side": "38",
        "rear": "38"
      },
      "turretMm": {
        "front": "76",
        "side": "51",
        "rear": "51"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "panther-d",
    "name": "Panther D",
    "nation": "germany",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 5.7,
      "realistic": 5.3,
      "simulator": 5.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Panther D is the German tech-tree gateway to the Panther line, a rank III medium tank that combines the hard-hitting 7.5 cm KwK 42 L/70 cannon with a steeply sloped 80 mm glacis. It thrives in long-range engagements where its accurate, high-velocity gun and frontal protection dominate, while paying for it with a vulnerable turret front, a sluggish hand-cranked turret traverse, and an almost non-existent reverse gear.",
    "prosCons": {
      "pros": [
        "Hard-hitting 7.5 cm KwK 42 L/70 with strong penetration and a very flat trajectory",
        "Well-angled 80 mm upper front plate deflects many incoming rounds",
        "Quick reload for the calibre (9.6 s stock, 7.4 s aced)",
        "Useful -8 degrees of gun depression for fighting from ridgelines",
        "Solid forward mobility once the engine and tracks are upgraded"
      ],
      "cons": [
        "Slow turret traverse, particularly in Realistic, punishes flanking enemies",
        "Reverse speed of only 4 km/h makes any disengagement risky",
        "Flat turret front and mantlet zone form a notable weak spot",
        "Tall silhouette is easy for opponents to spot and hit",
        "Thin 40 mm side armour leaves it exposed to flankers"
      ]
    },
    "playstyle": "Treat the Panther D as a long-range sniper and second-line support tank. Hold distance, angle the hull only slightly so the sloped glacis can deflect incoming fire, and let the L/70 gun defeat almost anything it meets at this rating with a single well-placed shot. Because the turret rotates slowly and the tank can only crawl backwards at 4 km/h, steer clear of close-quarters brawls and any position you cannot calmly reverse out of; pre-aim toward likely enemy lanes rather than depending on reactive turret rotation. Watch your own lower front plate, the flat turret cheeks beside the mantlet, and the driver and machine-gun ports, all of which give opponents dependable weak points.",
    "history": "The Panzerkampfwagen V Panther Ausf. D was the first production model of Germany's Panther medium tank, hurried into service in 1943 and fielded in quantity at the Battle of Kursk. Conceived as an answer to the Soviet T-34, it married sloped armour to the long 7.5 cm KwK 42 gun, yet early vehicles were plagued by mechanical troubles, especially with the engine and final drives.",
    "media": [
      {
        "src": "/vehicles/panther-d.jpg",
        "alt": "An original 1943 German Panther Ausf. D (Panzerkampfwagen V) preserved as a war memorial in Breda, Netherlands, photographed as a real-world surviving vehicle (not the in-game model).",
        "credit": "Pellynl · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Panther D unit page",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_V_ausf_d_panther",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki — Panther D",
        "url": "https://wiki.warthunder.com/Panther_D",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "reverseGears",
      "neutralSteering",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 61,
      "maxRevKph": 4,
      "enginePowerHp": 650,
      "weightTons": 45.3,
      "powerToWeight": 12.8,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "kwk42-75mm",
      "reloadBaseSec": 9.6,
      "reloadAcedSec": 7.4,
      "vertGuidanceDeg": [
        -8,
        20
      ],
      "turretTraverseDegSec": 11.3,
      "ammoCapacity": 79,
      "ammoTypeIds": [
        "pzgr39-42",
        "pzgr40-42",
        "sprgr42"
      ]
    },
    "armor": {
      "hullMm": {
        "front": "80",
        "side": "40",
        "rear": "40"
      },
      "turretMm": {
        "front": "100",
        "side": "45",
        "rear": "45"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "bf-109-f-4",
    "name": "Bf 109 F-4",
    "nation": "germany",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.3,
      "realistic": 4,
      "simulator": 4
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Bf 109 F-4 is a rank III German single-engine fighter that refines the 109 line into a fast, clean-handling energy fighter. It pairs a hard-hitting hub-mounted 20 mm MG 151 cannon with two cowl machine guns, trading raw gun count for excellent climb and dive performance.",
    "prosCons": {
      "pros": [
        "Hard-hitting hub-mounted 20 mm MG 151 cannon with no convergence issues",
        "Strong rate of climb and good energy retention for vertical fighting",
        "High structural speed limit allows aggressive dives",
        "Clean, responsive handling typical of the 109 F series"
      ],
      "cons": [
        "Light secondary armament of just two 7.92 mm machine guns",
        "Limited cannon ammunition rewards trigger discipline",
        "Single nose cannon means low overall burst mass compared to multi-cannon rivals",
        "Mounting underwing gun pods for extra firepower degrades flight performance"
      ]
    },
    "playstyle": "Fly the F-4 as a boom-and-zoom energy fighter: climb above the fight at the match start, then dive on isolated targets and zoom back up to altitude rather than committing to flat turns. The centerline 20 mm is accurate and rewards short, well-aimed bursts, so prioritize firing solutions where convergence is not an issue. Avoid prolonged turnfights with dedicated dogfighters; instead use vertical maneuvers, your strong climb, and superior energy retention to dictate when and how each engagement happens. Watch your limited cannon ammo and disengage cleanly when low on energy.",
    "history": "The Messerschmitt Bf 109 F (\"Friedrich\") was a major aerodynamic refinement of the 109 family, introducing rounded wingtips, a cleaner cowling, and the more powerful Daimler-Benz DB 601E engine. The F-4 variant standardized the 20 mm MG 151/20 engine-mounted cannon and saw extensive service from 1941, widely regarded as one of the best-handling marks of the 109.",
    "media": [
      {
        "src": "/vehicles/bf-109-f-4.jpg",
        "alt": "A real-world Messerschmitt Bf 109 F-4 preserved at the Canada Aviation Museum in Ottawa, not the in-game model.",
        "credit": "Ahunt · Public Domain (released worldwide by the copyright holder) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Bf 109 F-4",
        "url": "https://wiki.warthunder.com/unit/bf-109f-4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "enginePowerHp",
      "powerToWeight",
      "takeoffWeightT",
      "reloadStockSec",
      "reloadAcedSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 642,
      "maxSpeedAltM": 6000,
      "climbMps": 16.4,
      "turnTimeSec": 20,
      "structuralLimitKph": 790,
      "ceilingM": 11600,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "mg151-20",
          "count": 1
        },
        {
          "weaponId": "mg17",
          "count": 2
        }
      ],
      "suspended": [
        "2 x 15 mm MG 151 gun pods (underwing gondolas)",
        "1 x 250 kg SC250JA bomb",
        "4 x 50 kg SC50JA bombs",
        "1 x Flam C 250 incendiary bomb"
      ]
    }
  },
  {
    "id": "spitfire-mk-vb",
    "name": "Spitfire Mk Vb",
    "nation": "britain",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "II",
    "battleRatings": {
      "arcade": 4,
      "realistic": 4,
      "simulator": 3.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A rank II British fighter built around two 20 mm Hispano cannons and four rifle-calibre Brownings, the Spitfire Mk Vb pairs respectable energy retention with the famously tight turning of its airframe. It is a forgiving, all-round dogfighter that rewards patient, sustained-turn flying at mid altitudes.",
    "prosCons": {
      "pros": [
        "Excellent turn rate, especially once the airframe modifications are unlocked",
        "Hard-hitting twin 20 mm Hispano cannons backed by four Brownings",
        "Strong rate of climb when upgraded",
        "High service ceiling for high-altitude engagements",
        "Forgiving handling that suits newer pilots"
      ],
      "cons": [
        "Limited 20 mm cannon ammunition demands disciplined trigger control",
        "Mediocre stock performance until key modules are researched",
        "Lower top speed than many rivals at its battle rating",
        "Rifle-calibre Brownings lack stopping power on their own",
        "Vulnerable in extended dives and vertical fights against faster opponents"
      ]
    },
    "playstyle": "Fly it as a sustained-turn fighter rather than a boom-and-zoom platform: its strength is the ability to out-rotate most contemporaries while keeping speed up. Climb to a moderate altitude advantage at the start, then engage opponents who commit to turn fights or who have already bled their energy. Use the 20 mm cannons in short, deliberate bursts because total cannon ammunition is limited, and lean on the Brownings to finish lighter targets. Avoid prolonged vertical extensions against faster German fighters, and respect the airframe limits when diving to follow a target.",
    "history": "The Spitfire Mk V was a mid-war development that mated the proven Spitfire airframe with the more powerful Merlin 45 engine to counter improved Luftwaffe fighters. The \"b\" wing configuration combined two 20 mm cannons with four .303 machine guns, and the type served in large numbers across multiple theatres from 1941 onward.",
    "media": [
      {
        "src": "/vehicles/spitfire-mk-vb.jpg",
        "alt": "A wartime photograph of a real Supermarine Spitfire Mk VB of No. 165 Squadron at Gravesend in October 1942, not the in-game model.",
        "credit": "Royal Air Force official photographer (Imperial War Museums) · Public Domain (United Kingdom Government / Crown Copyright expired; IWM) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Spitfire Mk Vb stat card",
        "url": "https://wiki.warthunder.com/unit/spitfire_mk5b_notrop",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "enginePower"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 620,
      "maxSpeedAltM": 4878,
      "climbMps": 24.2,
      "turnTimeSec": 15.6,
      "structuralLimitKph": 760,
      "ceilingM": 10500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "hispano-mk-ii-20mm",
          "count": 2
        },
        {
          "weaponId": "browning-303",
          "count": 4
        }
      ]
    }
  },
  {
    "id": "uss-fletcher",
    "name": "USS Fletcher",
    "nation": "usa",
    "class": "naval",
    "subclass": "Destroyer",
    "rank": "II",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "releaseUpdate": "1.79 \"Project X\"",
    "summary": "The USS Fletcher is a rank II American destroyer mounting five rapid-firing 5-inch/38 dual-purpose guns and ten 533 mm torpedoes, making it one of the most well-rounded gunboat destroyers at its battle rating. Its fast-cycling main battery and dense anti-aircraft suite let it punish enemy ships and aircraft alike while staying mobile.",
    "prosCons": {
      "pros": [
        "Five fast-firing 5-inch dual-purpose guns with a strong reload (3.6s stock, 2.8s aced)",
        "Ten 533 mm torpedoes from two quintuple launchers for heavy alpha strikes",
        "Excellent anti-aircraft coverage from 40 mm Bofors and 20 mm Oerlikon mounts",
        "Large main ammo reserve of 1,800 rounds for sustained fire",
        "Dual-purpose main battery doubles as effective AA"
      ],
      "cons": [
        "Very thin armour (16 mm hull, 4 mm superstructure) offers little protection",
        "Vulnerable to heavier cruiser fire in extended engagements",
        "Relies on positioning and mobility rather than survivability",
        "Torpedoes must be used carefully due to limited reload opportunities"
      ]
    },
    "playstyle": "Play the Fletcher as an aggressive gun-first destroyer: keep moving and use your five quick-loading 5-inch mounts to chew through enemy destroyers and torpedo boats before they can close. Stagger fire to keep at least one mount cooling while the others reload, and always keep the broadside angled so the rear mounts can contribute. Hold your ten torpedoes for ambushes against larger, slower targets or for area denial in choke points rather than spraying them early. Lean on the dual-purpose main battery plus the Bofors and Oerlikon mounts to swat incoming aircraft, and avoid prolonged duels with cruisers whose heavier shells will exploit your thin, near-unarmoured hull.",
    "history": "USS Fletcher (DD-445) was the lead ship of the prolific Fletcher class, laid down in October 1941 and commissioned on 30 June 1942. She was named after Rear Admiral Frank Friday Fletcher, a Medal of Honor recipient. Fletcher served extensively in the Pacific theatre during World War II, was decommissioned in 1969, and was ultimately scrapped in 1972.",
    "media": [
      {
        "src": "/vehicles/uss-fletcher.jpg",
        "alt": "A real-world example: the lead Fletcher-class destroyer USS Fletcher underway off New York in July 1942, not the in-game model.",
        "credit": "U.S. Navy Bureau of Ships photo (19-N-31245), Naval History & Heritage Command · Public Domain (work of the U.S. Navy / U.S. federal government) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki - USS Fletcher (stat card)",
        "url": "https://wiki.warthunder.com/unit/us_destroyer_fletcher",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Devblog - Fletcher Class Destroyer",
        "url": "https://warthunder.com/en/news/4807-development-fletcher-class-destroyer-en",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "beltMm",
      "deckMm",
      "citadel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 2924,
      "lengthM": null,
      "crew": 273
    },
    "propulsion": {
      "maxKnots": 40
    },
    "armament": {
      "mainBattery": "5 x 127 mm (5-inch)/38 Mk.12 cannons; reload 3.6 s stock to 2.8 s aced; 1,800 rounds",
      "secondary": "2 x 40 mm Bofors L/60 Mark 1; 4,000 rounds",
      "aa": "6 x 20 mm/70 Oerlikon Mk.II; 10,800 rounds",
      "torpedoes": "10 x 533 mm Mk.15 (2 x quintuple launchers)",
      "depthCharges": true
    },
    "survivability": "Survivability rests on mobility and a large 273-man crew rather than protection; the hull is only 16 mm thick with a 4 mm superstructure and 3/3/3 mm gun shields, so the ship relies on avoiding hits rather than absorbing them. The detailed belt, deck, and citadel values are not itemized on the Tier-1 stat card and are left unverified."
  },
  {
    "id": "type-97-chi-ha",
    "name": "Type 97 Chi-Ha",
    "nation": "japan",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "I",
    "battleRatings": {
      "arcade": 1.3,
      "realistic": 1.3,
      "simulator": 1.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Type 97 Chi-Ha is a rank I Japanese medium tank sitting at 1.3 across Arcade, Realistic and Simulator, armed with a short 57 mm Type 97 cannon and wrapped in thin 25 to 32 mm plating. It plays as a low-pressure support vehicle whose forgiving gun handling and four-man crew count for more than its slight armour or firepower.",
    "prosCons": {
      "pros": [
        "Generous gun depression suits ridgeline and hull-down play",
        "Large 120-round ammunition load supports long engagements",
        "Four-man crew gives a small survivability cushion for the rank",
        "Low profile and light weight make it easy to reposition"
      ],
      "cons": [
        "57 mm gun has weak penetration and a slow, looping shell flight",
        "Thin 25 to 32 mm armour is defeated by nearly everything it faces",
        "Sluggish turret traverse leaves it vulnerable to fast flankers",
        "Modest 4.3 s stock reload until the crew is trained up"
      ]
    },
    "playstyle": "Use the Chi-Ha as a close-to-mid range support tank rather than a frontline brawler. The 57 mm gun is short on penetration and slow to the target, so favour the flanks, tracks and exposed crew of enemies over frontal duels, and lead moving targets to account for the lobbed shell. The generous depression lets you peek from ridgelines and dips in the ground while keeping the fragile hull tucked away, and the deep 120-round magazine sustains fire from a held spot. Stay mobile and keep the hull angled, because 25 mm of frontal plate stops almost nothing and the unhurried turret leaves you exposed if a quick flanker reaches your side.",
    "history": "The Type 97 Chi-Ha served as the Imperial Japanese Army's standard medium tank for much of the Second World War, reaching units in the late 1930s with a short 57 mm gun chosen mainly to support advancing infantry. Capable enough against fortifications and soft targets in the war's opening years, it fell behind Allied armour as the conflict wore on and was eventually rearmed as the Shinhoto Chi-Ha to extend its usefulness.",
    "media": [
      {
        "src": "/vehicles/type-97-chi-ha.jpg",
        "alt": "A real-world example: a preserved Imperial Japanese Army Type 97 Chi-Ha medium tank, photographed at a museum rather than the in-game model.",
        "credit": "Max Smith (Megapixie at English Wikipedia) · Public Domain (released into the public domain worldwide by the author) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Type 97 Chi-Ha unit page",
        "url": "https://wiki.warthunder.com/unit/jp_type_97_chi_ha",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "reverseGears",
      "neutralSteering",
      "enginePowerHp",
      "powerToWeight",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 45,
      "maxRevKph": 13,
      "enginePowerHp": null,
      "weightTons": 15.3,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "type-97-57mm",
      "reloadBaseSec": 4.3,
      "reloadAcedSec": 3.3,
      "vertGuidanceDeg": [
        -15,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 120,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "25",
        "side": "25",
        "rear": "20"
      },
      "turretMm": {
        "front": "32",
        "side": "25",
        "rear": "25"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "amx-13-75",
    "name": "AMX-13 (FL11)",
    "nation": "france",
    "class": "ground",
    "subclass": "Light tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.3,
      "realistic": 4.3,
      "simulator": 4.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The AMX-13 (FL11) is a rank III French light tank that pairs a feather-light 12.7 t hull with the FL-11 turret and a 75 mm SA49 cannon. With paper-thin armour but excellent mobility and a fast-traversing turret, it plays as a hit-and-run flanker that trades durability for speed and a punchy gun.",
    "prosCons": {
      "pros": [
        "Very light and mobile, ideal for early caps and flanking",
        "Fast turret traverse helps snap onto exposed enemies",
        "75 mm SA49 packs a meaningful punch for its rating",
        "Generous -8 degrees of gun depression aids ridge play",
        "Small, low-profile light tank is easy to conceal"
      ],
      "cons": [
        "Extremely thin armour (40 mm hull and turret) stops almost nothing",
        "Only 3 crew, so penetrations often disable or knock it out",
        "Reload is sluggish until the crew is leveled up",
        "No protective angling possible against most same-rank guns",
        "Punished hard by any return fire when caught in the open"
      ]
    },
    "playstyle": "Play the AMX-13 as a scout and flanker rather than a frontline fighter — its 40 mm hull and 40 mm turret will not stop much, so every engagement should happen on your terms. Use the high top speed to seize early caps and reach the flanks of the enemy advance, then exploit the quick turret traverse to snap shots onto exposed sides before relocating. The 75 mm SA49 hits hard enough to knock out most same-rank targets, but the slow stock reload means you must place each round well; avoid prolonged trades, never get caught in the open, and lean on cover, smoke, and constant repositioning to stay alive in a tank that dies to almost any direct hit.",
    "history": "The AMX-13 was a French post-war light tank known for its oscillating turret and autoloader-fed gun, designed to be air-transportable and highly mobile. The FL-11 turret variant mounted a 75 mm gun and represented an earlier configuration of the widely exported AMX-13 family, which went on to serve in numerous armies around the world for decades.",
    "media": [
      {
        "src": "/vehicles/amx-13-75.jpg",
        "alt": "A real-world example: a preserved French AMX-13 light tank on display at the Cavalry Tank Museum, India, not the in-game model.",
        "credit": "Mohit S from Mumbai, India (via Flickr) · CC-BY-2.0 (Creative Commons Attribution 2.0 Generic) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — AMX-13 (FL11) (fr_amx_13_fl_11)",
        "url": "https://wiki.warthunder.com/unit/fr_amx_13_fl_11",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "enginePowerHp",
      "powerToWeight",
      "turretTraverseDegSec",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 12.7,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "sa49-75mm",
      "reloadBaseSec": 7.8,
      "reloadAcedSec": 6,
      "vertGuidanceDeg": [
        -8,
        15
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 37,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "40",
        "side": "20",
        "rear": "15"
      },
      "turretMm": {
        "front": "40",
        "side": "20",
        "rear": "20"
      },
      "crewCount": 3,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "strv-m42",
    "name": "Strv m/42 DT",
    "nation": "sweden",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 5,
      "realistic": 5,
      "simulator": 5
    },
    "acquisition": [
      "tech-tree"
    ],
    "releaseUpdate": "1.97 \"Viking Fury\"",
    "summary": "The Strv m/42 DT is a rank III Swedish medium tank whose stand-out trait is a remarkably fast-reloading 75 mm cannon paired with light armour and a brisk turn of speed. It plays as a fragile but punchy flanker that lives or dies by landing rapid, repeated shots before the enemy can answer.",
    "prosCons": {
      "pros": [
        "Very fast reload for its rank, enabling rapid follow-up shots",
        "75 mm gun with a capable APCBC round for reliable penetration",
        "Good power-to-weight gives strong acceleration and agility",
        "Generous gun depression (-10 degrees) suits ridgeline fighting",
        "Roomy 42-round ammo stowage for sustained engagements"
      ],
      "cons": [
        "Thin armour (60 mm maximum) is defeated by most guns it faces",
        "Poor reverse speed makes disengaging dangerous",
        "Fragile profile punishes any head-on trading",
        "Modest 75 mm penetration ceiling versus better-armoured foes at the rating"
      ]
    },
    "playstyle": "Treat the Strv m/42 DT as an aggressive flanker and opportunist sniper rather than a frontline brawler. Its key advantage is the roughly three-second aced reload, which lets you stack hits faster than almost anything at its rating, so prioritise positions where you can put several rounds into a target before it can return fire. The hull and turret are no thicker than 60 mm, so any direct trade is a losing proposition; stay mobile, use cover and side angles, and pick off distracted or reloading opponents from the flank. Be especially mindful when withdrawing, since the reverse speed is poor (and currently unconfirmed) and getting caught mid-relocation usually means death; lean on the rapid follow-up shots to win brief exchanges, then break contact along a route you have scouted in advance.",
    "history": "The Swedish Stridsvagn m/42 was a domestically developed medium tank of the early 1940s, built to give Sweden a modern armoured vehicle during its wartime neutrality. The \"DT\" (Delat Torn, or \"split turret\") designation refers to a variant whose turret was reworked around a mechanised loading arrangement for its 75 mm gun, giving it an unusually high rate of fire for its era. A mock-up appeared in 1944 and a prototype in 1945, but after trials in 1946 the design was judged unsuccessful and shelved rather than entering service.",
    "media": [
      {
        "src": "/vehicles/strv-m42.jpg",
        "alt": "A real-world example: a preserved Swedish Stridsvagn m/42 tank seen at a 2012 P7 regiment event in Revinge, not the in-game model.",
        "credit": "Jorchr · CC-BY-SA-3.0 (Creative Commons Attribution-ShareAlike 3.0 Unported) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Strv m/42 DT (sw_strv_m42_delat_torn)",
        "url": "https://wiki.warthunder.com/unit/sw_strv_m42_delat_torn",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": 410,
      "weightTons": 23.5,
      "powerToWeight": 17.4,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "pvkan-m43-75mm",
      "reloadBaseSec": 3.9,
      "reloadAcedSec": 3,
      "vertGuidanceDeg": [
        -10,
        12
      ],
      "turretTraverseDegSec": 10.58,
      "ammoCapacity": 42,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "55",
        "side": "30",
        "rear": "20"
      },
      "turretMm": {
        "front": "60",
        "side": "30",
        "rear": "30"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m51-isherman",
    "name": "M-51",
    "nation": "israel",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6.3,
      "realistic": 6.3,
      "simulator": 6.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M-51 is a rank IV Israeli medium tank that mounts a hard-hitting 105 mm cannon firing a potent HEAT shell on a heavily modernized Sherman hull. Its single-shot lethality is balanced by thin armour, a crawling reverse, and no gun stabiliser, so it rewards patient, well-positioned play rather than aggressive brawling.",
    "prosCons": {
      "pros": [
        "105 mm HEAT round hits extremely hard with strong one-shot potential",
        "Good gun depression and elevation (-8 / +20 degrees) suit ridgeline fighting",
        "Generous 56-round ammunition stowage",
        "Five-man crew provides a buffer against a single penetration",
        "Smoke shell helps break line of sight when repositioning"
      ],
      "cons": [
        "Thin armour all round (63 mm hull front, 76 mm turret front) is easily penetrated at its rating",
        "No gun stabiliser, so accurate fire on the move is impractical",
        "Very slow 5 km/h reverse makes disengaging dangerous",
        "Modest forward mobility (about 38 km/h) limits flanking and relocation",
        "Long 9.7 s stock reload punishes any missed shot"
      ]
    },
    "playstyle": "Treat the M-51 as a cautious ambusher and second-line support tank that relies entirely on its 105 mm HEAT round to knock out targets with one well-placed hit. Favour hull-down ridgelines or flank routes where you can fire first, then pull back into cover during the long reload instead of trading shots. The 63 mm hull and 76 mm turret front rarely stop same-rating guns, so avoid open ground and head-on duels. With no stabiliser, halt completely before firing and skip shots on the move; the modest forward speed near 38 km/h and the very slow 5 km/h reverse mean you should choose positions you can hold and leave deliberately rather than react under pressure.",
    "history": "The M-51 was an Israeli rebuild of the American M4 Sherman, rearmed with a modified French 105 mm gun and given an uprated engine to handle the heavier weapon. Worked up during the 1960s, these so-called Super Shermans kept the ageing chassis competitive against newer armour and saw notable use in Israel's mid-century wars.",
    "media": [
      {
        "src": "/vehicles/m51-isherman.jpg",
        "alt": "A preserved real-world Israeli M-51 Sherman, an upgunned Sherman fitted with a 105 mm gun, on display at the Kubinka Tank Museum (not the in-game model).",
        "credit": "Alan Wilson from Stilton, Peterborough, Cambs, UK · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — M-51 (il_m_51)",
        "url": "https://wiki.warthunder.com/unit/il_m_51",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 38.42,
      "maxRevKph": 5,
      "enginePowerHp": 460,
      "weightTons": 40,
      "powerToWeight": 11.5,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "cn-105-f1",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -8,
        20
      ],
      "turretTraverseDegSec": 16.8,
      "ammoCapacity": 56,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "63",
        "side": "38",
        "rear": "38"
      },
      "turretMm": {
        "front": "76",
        "side": "51",
        "rear": "51"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "type-62",
    "name": "Type 62",
    "nation": "china",
    "class": "ground",
    "subclass": "Light tank",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6.7,
      "realistic": 6.7,
      "simulator": 6.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Type 62 is a rank IV Chinese light tank sitting at 6.7 in every mode, mating a thinly armoured 21-ton hull to the 85 mm Type 63 cannon. It leans on low weight and a quick turret to scout and flank, rather than standing and trading blows on the front line.",
    "prosCons": {
      "pros": [
        "Light 21-ton hull with a strong 20.5 hp/t makes repositioning and flanking effortless",
        "Quick turret rotation (up to 108.5 deg/s when aced) helps it meet close threats",
        "Effective 85 mm Type 63 gun with a manageable 7.4 s aced reload",
        "Generous 47-round stowage sustains longer fights",
        "Pair of machine guns (12.7 mm and 7.62 mm) handles soft targets and low aircraft"
      ],
      "cons": [
        "Paper-thin protection everywhere (35 mm hull front, 50 mm turret front) is trivially penetrated",
        "A mere -5 degrees of depression cramps hull-down and ridge tactics",
        "No ERA, composite, or APS while facing far heavier guns",
        "Top speed is unremarkable for a light tank meant to outpace danger",
        "Severely punished when a flanker catches it stopped or mid-reload"
      ]
    },
    "playstyle": "Treat the Type 62 as a mobility-first flanker that wins through positioning, because 35 mm of hull front and 50 mm of turret front will stop almost nothing at this rating. Spend the 20.5 hp/t early to seize map edges and unwatched angles, put the 85 mm into enemy sides and rears, then relocate before the return shot lands. The brisk turret rotation helps it answer close-range surprises, but the shallow -5 degrees of depression makes cresting ridges clumsy, so favour level firing spots and stay mobile, since a parked Type 62 dies to nearly anything that sees it.",
    "history": "The Type 62 emerged in China during the early 1960s as a lightened offshoot of the Type 59 medium tank, conceived for the soft ground and narrow roads and bridges of southern China where heavier armour struggled to operate. By shedding weight and armour for the sake of mobility, it entered broad service with Chinese forces and was exported to several nations across a lengthy operational life.",
    "media": [
      {
        "src": "/vehicles/type-62.jpg",
        "alt": "A real-world Chinese Type 62 light tank preserved at the Beijing Military Museum, shown front-on (not the in-game model).",
        "credit": "Max Smith · Public Domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Type 62 (cn_type_62)",
        "url": "https://wiki.warthunder.com/unit/cn_type_62",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 66,
      "maxRevKph": 9,
      "enginePowerHp": 430,
      "weightTons": 21,
      "powerToWeight": 20.5,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "type-62-85mm",
      "reloadBaseSec": 9.6,
      "reloadAcedSec": 7.4,
      "vertGuidanceDeg": [
        -5,
        22
      ],
      "turretTraverseDegSec": 108.5,
      "ammoCapacity": 47,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "35",
        "side": "25",
        "rear": "15"
      },
      "turretMm": {
        "front": "50",
        "side": "35",
        "rear": "32"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "tiger-h1",
    "name": "Tiger H1",
    "nation": "germany",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 5.7,
      "realistic": 5.7,
      "simulator": 5.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Tiger H1 is Germany's first heavy tank in the tech tree, pairing the hard-hitting 88 mm KwK36 cannon with thick, flat armour plates that reward angling. At its battle rating it can frontally penetrate most opponents while bouncing a good share of return fire, making it a centerpiece of mid-rank German lineups.",
    "prosCons": {
      "pros": [
        "88 mm KwK36 has strong penetration and a flat trajectory for accurate long-range shots",
        "Thick, flat armour plates can bounce many same-BR rounds when properly angled",
        "Generous 92-round ammo capacity supports prolonged engagements",
        "Five-man crew improves survivability against crew-knockout hits",
        "Good gun depression of -8 degrees suits hull-down positions"
      ],
      "cons": [
        "Slow and heavy, with a sluggish top speed and very slow reverse",
        "Flat armour is easy to penetrate when caught unangled or flanked",
        "Large, tall profile is hard to hide and easy to spot",
        "Side armour is vulnerable to flanking light and medium tanks",
        "Reload remains lengthy until the crew is well trained"
      ]
    },
    "playstyle": "Play the Tiger H1 as a long-range sniper and mid-range bully rather than a brawler. Its mobility is sluggish, so pick a hull-down or supported firing position early and let enemies come to you, using the 88 mm gun's flat trajectory and strong penetration to land first shots from afar. Angle the hull so the flat front and side plates present greater effective thickness, but watch the relatively weak side armour against flanking light tanks and the modest reverse speed, which makes disengaging slow. Spread the five-man crew advantage by trading blows: the tank can usually absorb a hit and keep fighting where thinner-crewed opponents cannot.",
    "history": "The Panzerkampfwagen VI Ausf. H, better known as the Tiger I, entered German service in 1942 as a heavy breakthrough tank built around the formidable 88 mm gun derived from anti-aircraft and anti-tank designs. Its thick armour and powerful cannon made it a feared opponent on the battlefield, though its weight, mechanical complexity, and high production cost limited the numbers that could be fielded.",
    "media": [
      {
        "src": "/vehicles/tiger-h1.jpg",
        "alt": "The real-world German Tiger I heavy tank 'Tiger 131', the world's only running example, displayed at the Bovington Tank Museum in England (not the in-game model).",
        "credit": "Morio · CC BY-SA 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Tiger H1 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_h1_tiger",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "enginePowerHp",
      "powerToWeight",
      "reverseGears",
      "neutralSteering",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 48,
      "maxRevKph": 9,
      "enginePowerHp": null,
      "weightTons": 57.3,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "kwk36-88mm",
      "reloadBaseSec": 9.6,
      "reloadAcedSec": 7.4,
      "vertGuidanceDeg": [
        -8,
        16
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 92,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "100",
        "side": "80",
        "rear": "80"
      },
      "turretMm": {
        "front": "100",
        "side": "80",
        "rear": "80"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "macchi-c202",
    "name": "Macchi C.202 Folgore",
    "nation": "italy",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "II",
    "battleRatings": {
      "arcade": 3,
      "realistic": 3,
      "simulator": 2.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "releaseUpdate": "1.69 \"Regia Aeronautica\"",
    "summary": "The Macchi C.202 Folgore is a nimble rank II Italian fighter built around energy retention and a tight turn rather than raw firepower. Armed with a pair of nose-mounted 12.7 mm Breda-SAFAT machine guns alongside two 7.7 mm guns, it rewards precise gunnery and patient air-superiority play over brute-force passes.",
    "prosCons": {
      "pros": [
        "Tight, responsive turn and good energy retention for its rank",
        "High structural strength — an 845 km/h IAS limit lets it dive hard without shedding wings",
        "Compact nose-mounted gun layout removes convergence guesswork at close range",
        "Light, clean airframe stays agile and easy to point in a knife fight"
      ],
      "cons": [
        "Very light armament — only two 12.7 mm guns plus two rifle-calibre 7.7 mm guns means low burst damage",
        "No bombs or rockets, so it offers nothing for ground targets",
        "No defensive armament and minimal protection make it fragile under return fire",
        "Needs sustained trigger time on target, which is risky in crowded furballs"
      ]
    },
    "playstyle": "Fly the Folgore as a clean dogfighter and energy trader: climb on the merge, keep your speed up, and use the airframe's strong turn to bleed faster, heavier opponents into your gunsight. Because the armament is light and centred on two heavy machine guns backed by twin rifle-calibre 7.7 mm guns, you must close to short range and aim for fuel tanks, the pilot, and control surfaces rather than expecting a single deflection burst to do the job. Avoid prolonged low-speed scissors against equally agile fighters where your limited firepower drags fights out; instead, fight in the vertical, recover energy in shallow dives, and disengage cleanly when outnumbered since you carry no armour cushion against return fire. With no bombs or rockets, treat the C.202 strictly as a fighter and stay near friendly altitude to pick off distracted or low-energy targets.",
    "history": "Italy's Macchi C.202 paired Mario Castoldi's refined C.200-derived airframe with a license-built Daimler-Benz DB 601 inline engine (the R.A.1000 RC.41), giving the Regia Aeronautica one of its most capable wartime fighters. The result was fast and agile but, like many Italian designs of the period, comparatively lightly armed, leaning on flying qualities rather than weight of fire.",
    "media": [
      {
        "src": "/vehicles/macchi-c202.jpg",
        "alt": "A real-world Macchi C.202 Folgore preserved at the National Air and Space Museum, one of only two surviving examples, not the in-game model.",
        "credit": "Cliff (Flickr user 28567825@N03) · CC-BY 2.0 (Creative Commons Attribution 2.0 Generic) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "C. 202 — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/mc-202_italy",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "A Brief History Of The Macchi M.C.202 \"Folgore\" — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/3097-a-brief-history-of-the-macchi-m-c-202-folgore",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "enginePowerHp",
      "armor"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 580,
      "maxSpeedAltM": 5000,
      "climbMps": 12.8,
      "turnTimeSec": 20,
      "structuralLimitKph": 845,
      "ceilingM": 10200,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "breda-safat-12.7mm",
          "count": 2
        }
      ]
    }
  },
  {
    "id": "p-51d-5",
    "name": "P-51D-5 Mustang",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "III",
    "battleRatings": {
      "arcade": 4,
      "realistic": 4,
      "simulator": 5
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The P-51D-5 is a rank III American fighter built around six wing-mounted 12.7 mm Browning machine guns, a high service ceiling, and excellent energy retention. It excels as a high-altitude boom-and-zoom platform that punishes opponents from above rather than committing to sustained turn fights.",
    "prosCons": {
      "pros": [
        "High service ceiling of 12,700 m for commanding altitude advantage",
        "Strong top speed and good energy retention for boom-and-zoom tactics",
        "Six 12.7 mm Brownings deliver a concentrated, reliable hitting punch",
        "Large total ammunition pool of 2,080 rounds supports many passes",
        "Flexible secondary loadout of bombs and rockets for ground attack"
      ],
      "cons": [
        "Not a natural turn fighter against more nimble opponents",
        "Relies on altitude and energy, punishing for pilots who fly it flat",
        "Stock performance is noticeably weaker until key modules are unlocked",
        "Machine-gun-only armament can struggle against well-armoured targets",
        "Higher SB battle rating exposes it to stiffer competition in simulator"
      ]
    },
    "playstyle": "Play the P-51D-5 as an energy fighter: climb high at the start of a match and use the strong top speed and 12,700 m ceiling to dictate engagements from above. Pick targets that have already bled their speed, make a single diving pass with the concentrated six-gun battery, then zoom back up to altitude rather than turning to re-engage. Avoid prolonged horizontal turn fights against dedicated dogfighters, manage the airframe carefully in steep dives, and use bombs or rockets opportunistically for ground targets when the air is clear.",
    "history": "The P-51D was the definitive production variant of the North American Mustang, distinguished by its bubble canopy and a battery of six .50-calibre Browning machine guns. Powered by a Packard-built licence version of the Rolls-Royce Merlin, it combined long range with strong high-altitude performance and became one of the most important Allied escort fighters of the later war years.",
    "media": [
      {
        "src": "/vehicles/p-51d-5.jpg",
        "alt": "A wartime photograph of a real North American P-51D Mustang named \"American Beauty,\" flown by Capt. John Voll in 1944, not the in-game model.",
        "credit": "United States Army Air Forces · Public Domain (work of the U.S. Army Air Forces) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — P-51D-5 stat card",
        "url": "https://wiki.warthunder.com/unit/p-51d-5",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki (old, printable) — P-51D-5",
        "url": "https://old-wiki.warthunder.com/index.php?printable=yes&title=P-51D-5",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 698,
      "maxSpeedAltM": 7620,
      "climbMps": 18,
      "turnTimeSec": 23,
      "structuralLimitKph": null,
      "ceilingM": 12700,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m2-browning-50",
          "count": 6
        }
      ],
      "suspended": [
        "Up to 2 x 1,000 lb AN-M65A1 bombs",
        "Up to 10 x HVAR rockets",
        "Up to 6 x M8 rockets"
      ]
    }
  }
];
