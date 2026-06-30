import type { Vehicle } from "@/lib/schema";

// Seeded vehicle records — generated from the Phase 3 research/verify workflow.
// Every numeric stat is sourced; unverifiable fields are null and listed in unverified[].
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
  },
  {
    "id": "is-2",
    "name": "IS-2",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6.3,
      "realistic": 6.3,
      "simulator": 6.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The IS-2 is a Soviet rank IV heavy tank built around the enormous 122 mm D-25T gun. A single hit from its high-explosive-filled APHE shell can wreck almost any opponent it meets, but the trade-off is a punishingly slow reload and a magazine of just 28 separated-charge rounds. Frontally the cast turret and sloped glacis shrug off many shots, making the IS-2 a brawler that rewards patience and good first-shot discipline over rate of fire.",
    "prosCons": {
      "pros": [
        "122 mm gun delivers devastating one-shot potential against nearly any target",
        "Well-sloped turret and front hull armour bounce a lot of incoming fire",
        "Strong overpressure and post-penetration effect from the large APHE filler"
      ],
      "cons": [
        "Very long reload leaves you exposed between shots",
        "Small ammunition load of 28 rounds demands shot economy",
        "Limited gun depression restricts use of hull-down and uneven terrain"
      ]
    },
    "playstyle": "Fight on your own terms: pick angles where you can land the first shot, then back off into cover during the long reload. Use the thick frontal armour to bully opponents at medium range, but avoid open brawls against faster-firing tanks that can chip you down between your shots. Manage your limited ammunition carefully and prioritise high-value targets.",
    "history": "The IS-2 succeeded the IS-1 in 1943 as the Soviet Union's answer to heavily armoured German tanks. Mounting the 122 mm D-25T derived from a field gun, it could defeat Tiger and Panther armour at combat ranges and doubled as a breakthrough vehicle, smashing fortifications ahead of advancing infantry. It became one of the most recognisable heavy tanks of the late war on the Eastern Front.",
    "media": [
      {
        "src": "/vehicles/is-2.jpg",
        "alt": "A preserved Soviet IS-2M heavy tank on display at the Imperial War Museum, Duxford, photographed in real life, not the in-game model.",
        "credit": "Alan Wilson from Peterborough, Cambridgeshire, UK · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "IS-2 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_2_1943",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "enginePowerHp",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 46,
      "powerToWeight": 11.31,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "d-25t-122mm",
      "reloadBaseSec": 27.1,
      "reloadAcedSec": 20.8,
      "vertGuidanceDeg": [
        -3,
        20
      ],
      "turretTraverseDegSec": 9.8,
      "ammoCapacity": 28,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "120",
        "side": "90",
        "rear": "60"
      },
      "turretMm": {
        "front": "100",
        "side": "100",
        "rear": "100"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m26-pershing",
    "name": "M26 Pershing",
    "nation": "usa",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6.7,
      "realistic": 6.7,
      "simulator": 6.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M26 Pershing is the United States' first heavy tank in the tech tree, pairing a quick-firing 90 mm M3 cannon with a well-balanced cast hull and turret. Where the IS-2 trades everything for one big punch, the Pershing leans on a fast reload, excellent gun handling, and a generous 70-round magazine to win extended trades. Its armour is good for its weight but not impenetrable, so positioning still matters.",
    "prosCons": {
      "pros": [
        "90 mm M3 reloads quickly and handles smoothly with strong depression",
        "Generous 70-round ammunition stowage supports sustained engagements",
        "Sloped cast frontal armour is effective for a vehicle of its weight"
      ],
      "cons": [
        "Penetration is only average for its battle rating",
        "Side and rear armour is thin and easily defeated",
        "Mobility is unremarkable, so repositioning is slow"
      ]
    },
    "playstyle": "Play the Pershing as a flexible mid-line fighter. Use the strong gun depression to fight hull-down over ridges, exploit the fast reload to win one-on-one duels, and angle the hull to make the most of your frontal protection. Avoid getting flanked, since your sides give up easy penetrations, and rely on accurate, repeated fire rather than a single decisive shot.",
    "history": "Developed late in the Second World War, the M26 Pershing reached Europe in early 1945 in limited numbers, too late to change the war's outcome but proving capable against German armour. Reclassified after the war as a medium tank, it went on to serve in the Korean War before being phased out, bridging the gap between wartime US designs and the Patton series that followed.",
    "media": [
      {
        "src": "/vehicles/m26-pershing.jpg",
        "alt": "A real M26 Pershing on exhibit at the U.S. Army Basic Combat Training Museum, Fort Jackson, South Carolina, not the in-game model.",
        "credit": "Andrew McIntyre (U.S. Army) · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "M26 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m26_pershing",
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
      "weightTons": 41.6,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m3-90mm",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 70,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "101",
        "side": "76",
        "rear": "51"
      },
      "turretMm": {
        "front": "101",
        "side": "76",
        "rear": "76"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "jagdpanther",
    "name": "Jagdpanther",
    "nation": "germany",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6.3,
      "realistic": 6.3,
      "simulator": 6.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Jagdpanther mounts the formidable 8.8 cm Pak 43 in a low, well-sloped casemate on the proven Panther chassis. It combines a hard-hitting, flat-shooting gun with respectable mobility and a sloped frontal plate that can deflect rounds at range. As a casemate tank destroyer it has no rotating turret, so the whole hull must be turned to aim — making it deadly from prepared positions but vulnerable when caught out of place.",
    "prosCons": {
      "pros": [
        "8.8 cm Pak 43 has excellent penetration and a very flat trajectory",
        "Sloped frontal casemate armour can bounce shots at distance",
        "Good mobility for a tank destroyer thanks to the Panther chassis"
      ],
      "cons": [
        "No turret — must traverse the entire hull to track targets",
        "Thin side and rear armour offers little protection from flanks",
        "Long, tall casemate is easy to spot once it fires"
      ]
    },
    "playstyle": "Fight at long range from hull-down or concealed positions where the strong frontal armour and powerful gun are decisive. Pre-aim toward likely enemy approaches so you do not need to swing the hull under fire, relocate after firing to avoid being flanked, and never expose your vulnerable sides. Patience and sightlines win games in the Jagdpanther.",
    "history": "Introduced in 1944, the Jagdpanther married the Panther's hull and running gear to the powerful 8.8 cm Pak 43 anti-tank gun, producing one of the most capable tank destroyers of the war. Only a few hundred were built before Germany's collapse, but the type earned a fearsome reputation for being able to knock out Allied armour well before its targets could reply.",
    "media": [
      {
        "src": "/vehicles/jagdpanther.jpg",
        "alt": "A preserved German Jagdpanther (Sd.Kfz. 173) tank destroyer at the Bovington Tank Museum, photographed in real life, not the in-game model.",
        "credit": "Simon Q from United Kingdom · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Jagdpanther G1 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_panzerjager_panther",
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
      "weightTons": 46,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "pak43-88mm",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -8,
        14
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 49,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "80",
        "side": "40",
        "rear": "40"
      },
      "turretMm": {
        "front": "80",
        "side": "50",
        "rear": "40"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "churchill-vii",
    "name": "Churchill Mk VII",
    "nation": "britain",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": 4.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Churchill Mk VII is a slow, immensely well-protected British infantry tank built around survivability rather than punch. Its thick, well-shaped frontal plate shrugs off most rounds it meets at its battle rating, but the short 75 mm OQF gun trades penetration for a fast reload, making the tank a patient brawler that wins by absorbing fire and grinding down opponents up close.",
    "prosCons": {
      "pros": [
        "Very thick, well-distributed frontal armour for its rank",
        "Five crew members spread damage and reduce one-shot risk",
        "Fast gun reload lets it trade shots favourably at close range",
        "Long, stable hull is steady when firing on the move"
      ],
      "cons": [
        "Low top speed and sluggish acceleration make repositioning slow",
        "75 mm gun has weak penetration and low muzzle velocity",
        "Large, tall profile is easy to spot and flank",
        "Struggles against angled or heavily armoured frontal opponents"
      ]
    },
    "playstyle": "Play it as a mobile pillbox. Push slowly into contested ground, angle the hull slightly to make the already strong armour even harder to defeat, and use the quick reload to win short-range exchanges. Avoid open sniping duels where the weak penetration and low shell velocity let you down; instead force enemies into close fights where your armour and rate of fire dominate. Lean on the large crew to keep fighting after taking hits.",
    "history": "The Churchill grew out of a 1939 British requirement for an infantry tank able to cross broken ground and survive enemy anti-tank fire, with speed treated as secondary. Named in 1940 for morale during the dark days of the Battle of Britain, it first saw heavy combat at Dieppe in 1942 before maturing through successive marks. The Mk VII (A22F) was a major redesign with markedly thicker, better-shaped frontal armour and the 75 mm gun, and it served extensively from the Normandy landings through the end of the war in north-west Europe and Italy, prized as a dependable infantry-support tank.",
    "media": [
      {
        "src": "/vehicles/churchill-vii.jpg",
        "alt": "A real Churchill Mark VII Crocodile infantry tank on display at the Bovington Tank Museum, Dorset, not the in-game model.",
        "credit": "Jim Linwood from London · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Churchill VII | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_a_22f_mk_7_churchill_1944",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "The Churchill: The Iron Prime Minister | War Thunder Wiki (history)",
        "url": "https://wiki.warthunder.com/3468-the-churchill-the-iron-prime-minister",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "enginePowerHp",
      "weightTons",
      "powerToWeight",
      "reverseGears",
      "neutralSteering",
      "turretTraverseDegSec",
      "maxFwdKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 23,
      "maxRevKph": 2,
      "enginePowerHp": null,
      "weightTons": null,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "qf-75mm-mk5",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        12,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 84,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "152",
        "side": "95",
        "rear": "51"
      },
      "turretMm": {
        "front": "152",
        "side": "95",
        "rear": "95"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "a6m5-zero",
    "name": "A6M5 Zero",
    "nation": "japan",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 5,
      "simulator": 4.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The A6M5 is the definitive late-production Zero, blending the famous low-speed agility of the type with a strengthened airframe that allows higher dive speeds than earlier models. It remains one of the best-turning fighters at its rank, but its modest top speed and light, slow-firing armament mean it must dictate the fight on its own terms rather than chase faster, harder-hitting opponents.",
    "prosCons": {
      "pros": [
        "Outstanding low-speed turn rate and energy retention in a turn",
        "Stronger airframe permits higher dive speeds than earlier Zeros",
        "Mixed cannon-and-machine-gun battery is forgiving to aim",
        "Excellent visibility and gentle, predictable handling"
      ],
      "cons": [
        "Low top speed leaves it unable to disengage from faster fighters",
        "Light armament and slow cannon rate of fire give short bursts limited punch",
        "Minimal protection for pilot and fuel",
        "Loses badly in pure boom-and-zoom energy fights"
      ]
    },
    "playstyle": "Fight on the horizontal. Bait faster opponents into turning with you, where your superb agility lets you reverse onto their tail, and snap-shoot with the cannons while the machine guns help you walk rounds onto target. Avoid prolonged climbs and high-speed dives against energy fighters; if you lose energy you cannot run, so keep speed up, stay in the merge, and pick off aircraft that overcommit to turning with you.",
    "history": "The A6M5 Model 52 was the most numerous wartime variant of Mitsubishi's Type 0 carrier fighter, introduced in 1943 to keep the ageing Zero competitive against newer Allied fighters. It featured redesigned, shorter wings with rounded tips and a revised exhaust arrangement that extracted extra thrust from the Sakae engine. While it preserved the Zero's legendary manoeuvrability, it could not match the speed, firepower and protection of contemporary American types, and it served through the increasingly desperate air battles of the Pacific war's final years, including use in late-war strike and special-attack roles.",
    "media": [
      {
        "src": "/vehicles/a6m5-zero.jpg",
        "alt": "A preserved Mitsubishi A6M5 Zero (Model 52) on display at the Yushukan museum, Yasukuni Shrine, Tokyo, not the in-game model.",
        "credit": "Paul Richter · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "A6M5 | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/a6m5_zero",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 565,
      "maxSpeedAltM": 6000,
      "climbMps": 15.6,
      "turnTimeSec": 16,
      "structuralLimitKph": 703,
      "ceilingM": 10900,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "type-99-mk2-20mm",
          "count": 2
        },
        {
          "weaponId": "type-97-7mm",
          "count": 2
        }
      ]
    }
  },
  {
    "id": "fw-190-a-5",
    "name": "Fw 190 A-5",
    "nation": "germany",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "IV",
    "battleRatings": {
      "arcade": 5.3,
      "realistic": 4.3,
      "simulator": 4.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Fw 190 A-5 is a German rank IV radial-engine fighter that turns the Würger's heavy four-cannon battery into a textbook boom-and-zoom platform. With an armoured BMW 801 up front, self-sealing tanks, and a brutal roll rate, it bullies anything it can dive on and rips wings off pursuers who try to follow it down. It is fragile in a sustained turn fight but devastating in the vertical and on the energy game.",
    "prosCons": {
      "pros": [
        "Heavy four-cannon armament shreds airframes in a single pass",
        "Excellent roll rate lets it reverse and switch targets instantly",
        "Strong dive acceleration and high structural speed for boom-and-zoom",
        "Armoured radial engine and protected fuel tanks shrug off light hits",
        "Good low-to-medium altitude performance against contemporaries"
      ],
      "cons": [
        "Poor sustained turn time bleeds energy fast in a dogfight",
        "Performance falls off noticeably at high altitude",
        "Heavy controls and mushy elevator at high speed",
        "Relatively short cannon ammo count rewards trigger discipline",
        "Spins readily if over-pulled at low speed"
      ]
    },
    "playstyle": "Climb to a comfortable altitude advantage at the match start, then convert that height into speed in slashing diving attacks. Pick one target per pass, fire a short burst with the cannons at convergence, and keep the speed to zoom back up out of reach. Never commit to a flat turn fight; if an enemy gets on your tail, roll hard and dive away, using your superior roll and dive to break the lock. Save your limited cannon rounds for high-percentage shots and let the energy game do the rest.",
    "history": "Developed in 1942, the A-5 sub-variant lengthened the engine mount to shift the centre of gravity and free up payload capacity aft, giving the airframe room for the additional equipment and ordnance that later defined the Focke-Wulf 190 family. The type served the Luftwaffe across the Western Front, the Eastern Front, North Africa, and home defence in fighter, fighter-bomber, ground-attack, and night-fighter roles. At low and medium altitude it proved superior to the Spitfire Mk V, though its performance tapered off in the thinner air at height.",
    "media": [
      {
        "src": "/vehicles/fw-190-a-5.jpg",
        "alt": "A captured Focke-Wulf Fw 190A in flight during U.S. Navy testing at Patuxent River, Maryland, in April 1944, not the in-game model.",
        "credit": "U.S. Navy · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Fw 190 A-5 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/fw-190a-5_cannons",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Fw 190 A-5 — old-wiki.warthunder.com (official, legacy)",
        "url": "https://old-wiki.warthunder.com/Fw_190_A-5",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 6300,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 912,
      "ceilingM": 10300,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "mg17",
          "count": 2
        },
        {
          "weaponId": "mg151-20",
          "count": 4
        }
      ]
    }
  },
  {
    "id": "hms-mohawk",
    "name": "HMS Mohawk",
    "nation": "britain",
    "class": "naval",
    "subclass": "Destroyer",
    "rank": "II",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": null
    },
    "acquisition": [
      "premium",
      "event"
    ],
    "summary": "HMS Mohawk is a British rank II Tribal-class destroyer that leans hard into the gunboat role. Four 4.7-inch guns in two twin mounts give it heavy, fast-firing broadsides for a destroyer of its rating, backed by a quartet of torpedoes for finishing wounded targets. Lightly built like all destroyers, it lives and dies by positioning and accurate gunnery rather than soaking damage. NOTE: this entry stands in for the requested HMS Cossack, which is not present in War Thunder as of this version.",
    "prosCons": {
      "pros": [
        "Heavy 4.7-inch main battery hits hard for a low-rank destroyer",
        "Four torpedoes provide a strong secondary punch against larger ships",
        "Good crew count for a destroyer aids damage-control survivability",
        "Capable AA and depth-charge fit for its rating"
      ],
      "cons": [
        "Thin plating offers almost no protection from gunfire",
        "Large hull is an easy target for enemy destroyers and aircraft",
        "Limited gun count compared with later, larger destroyers",
        "Relies on positioning; trades poorly in a stand-up gun duel with cruisers"
      ]
    },
    "playstyle": "Fight from the edges of an engagement, using islands and smoke to control sightlines. Open with gunfire on enemy destroyers, walking your shells onto the waterline to start fires and knock out their guns, then break off before return fire finds you. Hold the torpedoes for cruisers or distracted destroyers and launch in spreads from concealment. Keep the ship moving and angled, and pull back to repair the moment you take crew or steering hits rather than trading blows toe-to-toe.",
    "history": "The Tribal class were a series of 27 large destroyers built before and during the Second World War for the Royal Navy and the Commonwealth navies, designed to carry a heavier gun armament than the destroyers that preceded them. HMS Mohawk served in the early war period before being lost in action. The class as a whole earned a hard-fighting reputation across the Mediterranean, Atlantic, and Arctic theatres.",
    "media": [
      {
        "src": "/vehicles/hms-mohawk.jpg",
        "alt": "Royal Navy official photograph of the Tribal-class destroyer HMS Mohawk (F31), taken in September 1938, not the in-game model.",
        "credit": "Royal Navy official photographer · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "HMS Mohawk — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_destroyer_tribal_mohawk",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Tribal-class destroyer family — War Thunder Wiki (official; confirms in-game roster excludes HMS Cossack)",
        "url": "https://wiki.warthunder.com/collections/family/tribal-class_destroyer",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "beltMm",
      "deckMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 2559,
      "lengthM": null,
      "crew": 260
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "4 x 120 mm",
      "secondary": "4 x 40 mm 2pdr QF Mk.IIc",
      "aa": "8 x 12.7 mm Vickers Mk.V",
      "torpedoes": "4 x 533 mm Mk.IX",
      "depthCharges": true
    },
    "armor": {
      "citadel": "3 / 3 / 0 mm (fire control tower)"
    },
    "survivability": "As a destroyer, HMS Mohawk has effectively no belt or deck armour and survives by not being hit. Its only meaningful plating is a few millimetres on the fire-control tower and the 16 mm steel hull, neither of which stops cruiser-calibre shells. Survivability rests on its 260-man crew for damage control, on careful angling so hits pass through rather than detonating in vital spaces, and on staying mobile and at range. A single well-placed torpedo or a magazine penetration is fatal, so the ship must avoid trading fire in the open and lean on cover and disengagement."
  },
  {
    "id": "uss-helena",
    "name": "USS Helena",
    "nation": "usa",
    "class": "naval",
    "subclass": "Light cruiser",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6.3,
      "realistic": 6.3,
      "simulator": null
    },
    "acquisition": [
      "premium"
    ],
    "summary": "USS Helena is a premium American rank IV Brooklyn-class light cruiser built around an enormous fifteen-gun main battery of 6-inch rifles with an exceptionally fast reload. That volume of fire lets it smother destroyers and rival light cruisers in a wall of shells, while a strong dual-purpose secondary battery and heavy Bofors and Oerlikon AA make it dangerous to aircraft too. It is fast and manoeuvrable but only modestly armoured, so it wins by output rather than endurance.",
    "prosCons": {
      "pros": [
        "Fifteen 6-inch guns deliver overwhelming volume of fire",
        "Very fast main-battery reload sustains a punishing rate of fire",
        "Strong dual-purpose 5-inch secondaries add reach and AA",
        "Heavy 40 mm Bofors and 20 mm Oerlikon AA suite",
        "Fast and manoeuvrable for a cruiser"
      ],
      "cons": [
        "Light cruiser armour offers limited protection against cruiser-calibre fire",
        "Large profile makes it an easy target at range",
        "Premium ship locked behind Golden Eagles",
        "Ammunition magazines are vulnerable to plunging fire and torpedoes"
      ]
    },
    "playstyle": "Play to the gun count: find a firing line where you can pour shells onto a single target and overwhelm its damage control before it can answer. Stay angled and keep moving to make incoming fire glance off the thin belt, and use your speed to dictate range against slower battlecruisers and battleships. Engage destroyers at distance where your reload turns them to scrap quickly, and keep the AA suite hot for aircraft. Avoid stationary slugging matches with heavy cruisers; reposition and reset rather than trade citadels.",
    "history": "Laid down on 9 December 1936 and commissioned on 18 September 1939, USS Helena (CL-50) was the ninth and final Brooklyn-class light cruiser. She was torpedoed at Pearl Harbor and, after repair and refit, returned to service in 1942 for the Guadalcanal campaign. During the Battle of Kula Gulf on the night of 5-6 July 1943 she sank the destroyer Niizuki before being struck by multiple Japanese torpedoes; the damage proved fatal and Helena went down.",
    "media": [
      {
        "src": "/vehicles/uss-helena.jpg",
        "alt": "Historical photograph of the American light cruiser USS Helena (CL-50) underway in March 1943 after overhaul in Sydney, not the in-game model.",
        "credit": "Australian War Memorial · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "USS Helena — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_cruiser_brooklyn_class_helena",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "beltMm",
      "deckMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 13327,
      "lengthM": null,
      "crew": 1188
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "15 x 152 mm",
      "secondary": "8 x 127 mm",
      "aa": "16 x 40 mm Bofors, 12 x 20 mm Oerlikon",
      "torpedoes": "None",
      "depthCharges": false
    },
    "armor": {
      "citadel": "95 / 127 / 51 mm"
    },
    "survivability": "USS Helena trades protection for firepower and speed. Its citadel armour is on the order of 95 to 127 mm, enough to resist destroyer guns at range but not the heavy cruiser shells it will often face, and there is no thick belt to lean on. The hull plating is only millimetres thick, so the ship must avoid presenting a flat broadside to large-calibre fire. Survivability comes from its 1,188-man crew for damage control, from angling and speed to deflect or outrun incoming rounds, and from killing threats quickly with its volume of fire before they can land magazine or steering hits. Plunging fire and torpedoes are the principal dangers, as the magazines that feed its many guns are a tempting and vulnerable target."
  },
  {
    "id": "yak-3",
    "name": "Yak-3",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": 4.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A light, low-altitude Soviet fighter that trades range and high-altitude punch for blistering speed and turn performance near the deck. The Yak-3 is one of the most agile piston fighters of its rating, rewarding pilots who keep the fight low and fast where few opponents can follow.",
    "prosCons": {
      "pros": [
        "Excellent low-altitude speed and acceleration",
        "Very strong turn rate, especially below 3,000 m",
        "Responsive, forgiving handling that suits dogfighting",
        "Compact airframe is a hard target to hit"
      ],
      "cons": [
        "Performance falls off sharply at high altitude",
        "Light armament with limited ammunition for sustained fights",
        "Short fuel endurance limits time on station",
        "Airframe is fragile and punishes overspeeding"
      ]
    },
    "playstyle": "Stay low and use the Yak-3's energy retention to dictate engagements. Drag higher-altitude opponents down into your performance band, then out-turn or out-accelerate them. Conserve cannon ammunition for decisive passes and avoid prolonged climbs that strand you with no energy advantage.",
    "history": "Developed late in the Second World War as a refinement of the Yak fighter line, the type emphasised light weight and aerodynamic cleanliness to wring maximum agility from a modest engine. It reached frontline squadrons in 1944 and earned a reputation as a dangerous adversary in the close, low-altitude knife fights that characterised much of the Eastern Front air war.",
    "media": [
      {
        "src": "/vehicles/yak-3.jpg",
        "alt": "A restored Yakovlev Yak-3U (N130AM) on display at the Planes of Fame Air Museum, Chino, California, not the in-game model.",
        "credit": "kitmasterbloke (Steve Knight) · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Yak-3 | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/yak-3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 4100,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 685,
      "ceilingM": 10400,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "shvak-20mm",
          "count": 1
        },
        {
          "weaponId": "ubs-12mm",
          "count": 2
        }
      ]
    }
  },
  {
    "id": "la-5fn",
    "name": "La-5FN",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "III",
    "battleRatings": {
      "arcade": 4,
      "realistic": 3.7,
      "simulator": 4
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The most refined of the radial-engined Lavochkin fighters, the La-5FN pairs a fuel-injected engine with twin 20 mm cannons to deliver outstanding low- and medium-altitude performance. It is a punchy, well-rounded dogfighter that hits hard and climbs respectably for its rating.",
    "prosCons": {
      "pros": [
        "Strong, reliable twin-cannon armament concentrated in the nose",
        "Excellent acceleration and speed at low to medium altitude",
        "Good roll and energy retention for boom-and-zoom or turn fights",
        "Sturdy radial engine shrugs off frontal hits better than inline types"
      ],
      "cons": [
        "Performance tapers off at higher altitudes",
        "Turn time is unremarkable compared to lighter Yak fighters",
        "Limited cannon ammunition demands disciplined firing",
        "Cockpit visibility and endurance are mediocre"
      ]
    },
    "playstyle": "Fight in the low-to-medium altitude band where the engine is happiest. Use nose-mounted cannons for precise, high-damage snapshots, then extend and re-engage rather than committing to prolonged turn fights against dedicated turn-fighters. Manage your throttle to keep the injected engine in its sweet spot.",
    "history": "Introduced as a parallel development to the earlier La-5F rather than a successor, the FN variant centred on a fuel-injected radial that sustained high output for several minutes of combat. Comparative trials against contemporary German fighters showed clear advantages in speed and manoeuvrability at lower altitudes, and the type became a mainstay of Soviet fighter regiments in the war's later years.",
    "media": [
      {
        "src": "/vehicles/la-5fn.jpg",
        "alt": "A preserved Lavochkin La-5 on display at the Aviation Museum of the UMMC Museum Complex, not the in-game model.",
        "credit": "Msgevans00 · CC BY 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "La-5FN | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/la-5fn",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 620,
      "maxSpeedAltM": 6100,
      "climbMps": 17.7,
      "turnTimeSec": 20.1,
      "structuralLimitKph": 735,
      "ceilingM": 11350,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "shvak-20mm",
          "count": 2
        }
      ]
    }
  },
  {
    "id": "d-520",
    "name": "D.520",
    "nation": "france",
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
    "summary": "France's most capable early-war monoplane fighter, the D.520 is a tidy-handling interceptor with a single nose cannon and four rifle-calibre wing guns. It is not a record-setter for speed or climb, but its solid turn and stable gun platform make it effective in patient, energy-aware hands.",
    "prosCons": {
      "pros": [
        "Good turn time for its rank",
        "High structural speed limit tolerates steep dives",
        "Central cannon plus four machine guns gives reliable convergence-free aim",
        "Stable, predictable handling that suits new pilots"
      ],
      "cons": [
        "Low top speed compared to contemporaries",
        "Weak rate of climb leaves it on the back foot in energy fights",
        "Small 20 mm magazine forces careful trigger discipline",
        "Rifle-calibre wing guns lack stopping power"
      ]
    },
    "playstyle": "Lean on the airframe's dive resistance and turn rate rather than chasing speed contests. Hold altitude where you can, commit to boom-and-zoom passes against faster enemies, and fall back on the tight turn as a defensive escape. Save the cannon rounds for clean firing solutions and let the machine guns soften targets.",
    "history": "The Dewoitine D.520 was regarded as the finest French fighter to see service in 1940, combining a clean low-drag airframe with a Hispano-Suiza inline engine and a hub-firing cannon. It fought in the Battle of France and later in colonial theatres on both Vichy and Free French sides, acquitting itself respectably against more numerous and often faster opposition.",
    "media": [
      {
        "src": "/vehicles/d-520.jpg",
        "alt": "A preserved Dewoitine D.520 fighter on display at the Musee de l'Air et de l'Espace, Le Bourget, France, not the in-game model.",
        "credit": "PpPachy · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "D.520 | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/d_520_france",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 550,
      "maxSpeedAltM": 5000,
      "climbMps": 13.9,
      "turnTimeSec": 19.1,
      "structuralLimitKph": 800,
      "ceilingM": 11200,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "hs-404-20mm",
          "count": 1
        },
        {
          "weaponId": "mac-1934-7mm",
          "count": 4
        }
      ]
    }
  },
  {
    "id": "m13-40",
    "name": "M13/40",
    "nation": "italy",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "I",
    "battleRatings": {
      "arcade": 1.7,
      "realistic": 1.7,
      "simulator": 1.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "An early Italian medium tank that opens the ground tree at a low rank. It pairs a hard-hitting 47 mm gun with reasonably angled armour, but is held back by a sluggish hull and an unhurried reload, rewarding a patient, defensive style of play.",
    "prosCons": {
      "pros": [
        "47 mm APHE shell can one-shot most contemporaries at close range",
        "Sloped frontal armour bounces a surprising amount of fire when angled",
        "Large ammunition stowage of 104 rounds",
        "Four-man crew is harder to knock out than two- or three-man rivals at the rank"
      ],
      "cons": [
        "Top speed is poor and acceleration is leisurely",
        "Reverse speed is almost non-existent, making repositioning dangerous",
        "Gun reload is slow for the rank, punishing missed shots",
        "Side and rear armour are thin and easily defeated"
      ]
    },
    "playstyle": "Play it as a defensive brawler. Pick a position with cover, angle the hull to make the most of the frontal plate, and let enemies come to you so your single powerful shot lands first. Avoid open ground where your low speed and weak reverse leave you exposed, and never get caught reloading in the open.",
    "history": "The M13/40 grew out of the earlier M11/39 programme, adding a fully traversing turret with a 47 mm gun and a fourth crewman to serve it. Adopted by the Italian army in 1940, it became the backbone of Italy's armoured divisions in North Africa, where its protection and firepower were competitive on introduction but were soon outclassed as the war progressed. Production figures are uncertain because many hulls were later rebuilt into the improved M14/41.",
    "media": [
      {
        "src": "/vehicles/m13-40.jpg",
        "alt": "A preserved Italian Fiat M13/40 medium tank on display at the Belgrade Military Museum, photographed in real life, not the in-game model.",
        "credit": "Pudelek (Marcin Szala) · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "M13/40 (I) | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_m13_40_serie_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "enginePowerHp",
      "powerToWeight",
      "turretTraverseDegSec",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 32,
      "maxRevKph": 5,
      "enginePowerHp": null,
      "weightTons": 13.6,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "cannone-47-32",
      "reloadBaseSec": 5.2,
      "reloadAcedSec": 4,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 104,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "30",
        "side": "25",
        "rear": "25"
      },
      "turretMm": {
        "front": "45",
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
    "id": "p40",
    "name": "P40",
    "nation": "italy",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 3.3,
      "realistic": 3.3,
      "simulator": 3.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Italy's heaviest wartime tank in-game, the P40 carries a capable 75 mm gun behind 50 mm of frontal armour. It plays like a slow but tough mid-rank brawler whose unusually fast reverse lets it trade shots and back off to cover.",
    "prosCons": {
      "pros": [
        "75 mm gun has APCBC and HEAT, giving it answers to most foes at the rank",
        "Fast reverse speed makes peek-and-retreat tactics very effective",
        "50 mm frontal armour shrugs off many autocannons and light guns",
        "Decent gun elevation for working uneven terrain"
      ],
      "cons": [
        "Low top speed and weak acceleration make rotations slow",
        "Flat armour plates offer little protection when not angled",
        "Reload is on the slow side, so first-shot placement matters",
        "Large profile is easy to spot and hit"
      ]
    },
    "playstyle": "Anchor a flank or a contested lane. Use the strong reverse to expose only the front of the tank from behind cover, fire, then pull back to reload safely. Carry HEAT for heavily armoured targets and APCBC for everything else. Because the hull is slow, plan positions ahead of the cap rather than chasing fights across the map.",
    "history": "Designated P26/40 for its 26-tonne weight and 1940 design year, the P40 was Italy's attempt at a heavier breakthrough tank to fight alongside its mediums. Development dragged on as the intended gun grew from a short 75 mm howitzer to a longer high-velocity weapon, and the vehicle only reached service in 1943. Very few were completed before the armistice, after which German forces took over the design and built additional examples, frequently emplacing turretless hulls as fixed defensive positions.",
    "media": [
      {
        "src": "/vehicles/p40.jpg",
        "alt": "A wartime photograph of the Italian Carro Armato P26/40 (P40) heavy tank, not the in-game model.",
        "credit": "Unknown author · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "P40 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_p_40",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "enginePowerHp",
      "powerToWeight",
      "turretTraverseDegSec",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 40,
      "maxRevKph": 45,
      "enginePowerHp": null,
      "weightTons": 26,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "cannone-75-34",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        -10,
        23
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 63,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "50",
        "side": "45",
        "rear": "40"
      },
      "turretMm": {
        "front": "50",
        "side": "45",
        "rear": "45"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "j21a-1",
    "name": "J21A-1",
    "nation": "sweden",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "IV",
    "battleRatings": {
      "arcade": 5.3,
      "realistic": 4.3,
      "simulator": 3.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A distinctive twin-boom, pusher-prop Swedish fighter whose strength is its heavy nose-mounted battery. It is not especially fast or agile, but its concentrated firepower and tough airframe make it a strong energy fighter and bomber-interceptor.",
    "prosCons": {
      "pros": [
        "Dense nose armament of a 20 mm cannon and four heavy machine guns hits very hard",
        "Guns are nose-mounted, so there is no convergence to manage in head-ons",
        "Holds energy well and is fast in level flight and dives",
        "Durable airframe absorbs damage better than many rivals"
      ],
      "cons": [
        "Turn time is mediocre, so it loses sustained dogfights",
        "Climb rate is unremarkable for the battle rating",
        "Pusher layout means a belly bail-out rather than a normal canopy escape in some situations",
        "Rolls and decelerates poorly once energy is bled off"
      ]
    },
    "playstyle": "Fly it as a boom-and-zoom energy fighter. Climb and keep speed, then make slashing diving passes and use the heavy nose battery to destroy targets in a single firing window. Avoid prolonged turn fights; extend, reset, and re-engage. Its firepower also makes it an excellent bomber- and attacker-interceptor.",
    "history": "Designed by Frid Wanstrom under Sweden's wartime rearmament drive, the SAAB 21 broke with convention as a single-engine, twin-boom aircraft with the propeller mounted behind the cockpit in a pusher configuration. Powered by a licence-built Daimler-Benz DB 605 engine, the J21A-1 entered Swedish service after the war and, though it never saw combat, more than 300 of the series were produced to strengthen Sweden's air defences. The basic airframe later proved adaptable enough to be converted to jet power as the J21R.",
    "media": [
      {
        "src": "/vehicles/j21a-1.jpg",
        "alt": "A preserved SAAB 21 (J21) twin-boom pusher fighter, serial 21364, at the Flygvapenmuseum in Malmen, Sweden, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "J21A-1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/saab_j21a_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 640,
      "maxSpeedAltM": 4300,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 683,
      "ceilingM": 10800,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "akan-m41a-20mm",
          "count": 1
        },
        {
          "weaponId": "akan-m39a-13mm",
          "count": 4
        }
      ]
    }
  },
  {
    "id": "ijn-yugumo",
    "name": "IJN Yugumo",
    "nation": "japan",
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
    "summary": "The IJN Yugumo is a rank II Japanese destroyer that leans hard on a devastating torpedo broadside while keeping a respectable trio of dual 127 mm turrets. She blends solid mobility, a healthy crew complement, and one of the deadliest spreads of Type 93 'Long Lance' torpedoes available at her rating, rewarding players who time a salvo into a choke point or an unaware capital ship.",
    "prosCons": {
      "pros": [
        "Outstanding torpedo punch: up to sixteen 610 mm Type 93 torpedoes for crippling alpha strikes",
        "Three twin 127 mm turrets give a flexible mix of anti-ship and limited anti-air fire",
        "Well-rounded mobility and a large crew pool for its rank, improving sustained survivability",
        "Strong main-gun layout with good firing arcs for a destroyer"
      ],
      "cons": [
        "Thin, lightly armored hull typical of a destroyer; vulnerable to cruiser fire and aircraft",
        "Light dedicated AA (25 mm autocannons) struggles against determined air attack",
        "Torpedo reliance means a missed salvo can leave you exposed during the long reload",
        "Open mounts and modest fire-tower protection leave gun crews exposed to fragmentation"
      ]
    },
    "playstyle": "Play the Yugumo as an ambush striker. Use islands, smoke, and angles to close to torpedo range, launch a wide spread at predictable targets, then fall back on your guns and speed before the enemy ranges in on you. Keep maneuvering to avoid return fire, and conserve torpedoes for high-value cruisers and battleships rather than spamming them at distant destroyers.",
    "history": "Yugumo was the lead ship of her class of Imperial Japanese Navy destroyers, laid down at Maizuru in 1940 and commissioned in late 1941. She escorted carrier forces through several Pacific actions, including operations in the Solomons campaign, and torpedoed an American destroyer during a night surface engagement off Vella Lavella in 1943 before being overwhelmed and sunk by concentrated enemy fire.",
    "media": [
      {
        "src": "/vehicles/ijn-yugumo.jpg",
        "alt": "Historical photograph of the Imperial Japanese Navy destroyer Naganami, a Yugumo-class sister ship of Yugumo, not the in-game model.",
        "credit": "Shizuo Fukui · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "IJN Yugumo | War Thunder Wiki (official /unit/ page)",
        "url": "https://wiki.warthunder.com/unit/jp_destroyer_yugumo",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "secondary",
      "beltMm",
      "deckMm",
      "citadel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 2560,
      "lengthM": null,
      "crew": 228
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "3 x 2 x 127 mm",
      "aa": "2 x 2 x 25 mm",
      "torpedoes": "16 x 610 mm",
      "depthCharges": true
    },
    "survivability": "As a destroyer, the Yugumo trades armor for agility: her hull plating is only around 16 mm of steel with 4 mm superstructure and barely a few millimeters protecting the fire tower, so she relies on speed, evasion, and a comparatively generous crew count to stay in the fight rather than on belt or deck armor. A single well-placed shell can knock out a turret or start fires, making damage control and constant movement essential to surviving cruiser-caliber return fire and strafing aircraft."
  },
  {
    "id": "soobrazitelny",
    "name": "Soobrazitelny",
    "nation": "ussr",
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
    "summary": "The Soobrazitelny is a rank II Soviet Project 7U destroyer armed with four single 130 mm B-13 guns and a layered automatic anti-aircraft suite. Her separated machinery layout and large crew make her a sturdier-than-average destroyer for her rating, while her hard-hitting main guns and torpedoes let her contest caps and trade blows with other destroyers.",
    "prosCons": {
      "pros": [
        "Four powerful 130 mm B-13 main guns with strong shell performance for a destroyer",
        "Comprehensive automatic AA (multiple 37 mm and 12.7 mm mounts) deters aircraft",
        "Project 7U split machinery layout improves resistance to single crippling hits",
        "Large crew complement for sustained survivability"
      ],
      "cons": [
        "Manually traversed main turrets are slow to swing onto new targets",
        "Single-mount main guns limit broadside weight compared to twin-turret rivals",
        "Light hull armor leaves her exposed to cruiser fire",
        "Only six torpedoes, so spreads must be chosen carefully"
      ]
    },
    "playstyle": "Position the Soobrazitelny so her slow-turning guns are already pointed where the action will be, then hold ground and let the 130 mm guns and dense AA do the work. Pre-aim before peeking, support allies on the cap with accurate fire, and save torpedoes for ships that wander into a tight firing solution. Avoid getting flanked, since rotating the manual turrets across the deck is punishingly slow.",
    "history": "Soobrazitelny was a Soviet Storozhevoy-class (Project 7U) destroyer, an improved derivative of the Project 7 design with separated boiler and engine rooms to reduce the chance of a single hit immobilizing the ship. Commissioned in 1941, she served in the Black Sea, supporting the defense of Odessa and Sevastopol, raiding Romanian coastal targets, and earning Guards honors before stepping back from frontline action later in the war.",
    "media": [
      {
        "src": "/vehicles/soobrazitelny.jpg",
        "alt": "Wartime photograph of the Soviet Project 7U destroyer Soobrazitelny (right) receiving evacuees from the leader Tashkent off Sevastopol on 27 July 1942, not the in-game model.",
        "credit": "Unknown author · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Soobrazitelny | War Thunder Wiki (official /unit/ page)",
        "url": "https://wiki.warthunder.com/unit/ussr_destroyer_7y",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "beltMm",
      "deckMm",
      "citadel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 2404,
      "lengthM": null,
      "crew": 271
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "4 x 130 mm",
      "secondary": "2 x 76 mm",
      "aa": "7 x 37 mm, 4 x 12.7 mm, 2 x 2 x 12.7 mm",
      "torpedoes": "6 x 533 mm",
      "depthCharges": true
    },
    "survivability": "The Soobrazitelny is a lightly armored destroyer, with roughly 16 mm of hull steel and only 4 mm superstructure plating, so she depends on her large crew and the Project 7U separated-machinery layout rather than on belt armor to stay operational. The split engine arrangement means a single penetrating hit is less likely to leave her dead in the water than on the original Project 7, but she remains highly vulnerable to cruiser shells, fires, and flooding and must rely on damage control and maneuver to endure."
  },
  {
    "id": "rn-bartolomeo-colleoni",
    "name": "RN Bartolomeo Colleoni",
    "nation": "italy",
    "class": "naval",
    "subclass": "Light cruiser",
    "rank": "III",
    "battleRatings": {
      "arcade": 5,
      "realistic": 5,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The RN Bartolomeo Colleoni is a rank III Italian Condottieri-class light cruiser built around speed. With four twin 152 mm turrets, a dual-purpose 100 mm secondary battery, and torpedoes, she is fast enough to grab caps and chase down lighter ships, but her thin protection and slow main-gun reload mean she must fight on her own terms rather than slug it out with heavier cruisers.",
    "prosCons": {
      "pros": [
        "Eight 152 mm guns in four twin turrets with wide firing arcs for easy broadsides",
        "Exceptional speed for rapid cap control and disengaging on her terms",
        "Dual-purpose 100 mm secondaries add anti-ship and anti-air flexibility",
        "Carries torpedoes for opportunistic strikes"
      ],
      "cons": [
        "Very thin armor for a cruiser; punished badly by heavier cruiser fire",
        "Slow main-gun reload limits sustained damage output",
        "Lightly protected to save weight for speed, so citadel hits are dangerous",
        "Outmatched by true heavy cruisers in a stand-up gunnery duel"
      ]
    },
    "playstyle": "Exploit the Colleoni's speed: rush objectives early, harass light targets and torpedo boats, and use cover, smoke, and angles to break contact whenever a heavier ship turns its guns on you. Plan each engagement around her slow reload by picking targets you can hit decisively, and never let yourself get cornered where her fragile hull can be bracketed.",
    "history": "RN Bartolomeo Colleoni was a Condottieri-class (Di Giussano subgroup) light cruiser of the Italian Regia Marina, commissioned in the early 1930s and named after the Renaissance condottiero. The design prioritized very high speed at the expense of armor. She was lost at the Battle of Cape Spada in July 1940 after Allied gunfire jammed her steering and devastated her superstructure, leaving her dead in the water to be finished by torpedoes.",
    "media": [
      {
        "src": "/vehicles/rn-bartolomeo-colleoni.jpg",
        "alt": "Royal Navy official photograph of the Italian Condottieri/di Giussano-class light cruiser Bartolomeo Colleoni during the Battle of Cape Spada, 19 July 1940, not the in-game model.",
        "credit": "Royal Navy official photographer · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "RN Bartolomeo Colleoni | War Thunder Wiki (official /unit/ page)",
        "url": "https://wiki.warthunder.com/unit/it_cruiser_bartolomeocolleoni_1940",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "deckMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 6954,
      "lengthM": null,
      "crew": 521
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "4 x 2 x 152 mm",
      "secondary": "3 x 2 x 100 mm",
      "aa": "2 x 40 mm, 4 x 2 x 13.2 mm",
      "torpedoes": "8 x 533 mm",
      "depthCharges": false
    },
    "armor": {
      "beltMm": "25 mm (hull)",
      "citadel": "20 / 24 / 20 mm"
    },
    "survivability": "The Colleoni is a thinly protected light cruiser by design, sacrificing armor for speed. Her hull plating is around 25 mm of steel, the fire tower carries roughly 23 mm, and the citadel is shielded by only about 20-24 mm, so she offers little resistance to cruiser-caliber shells and is extremely vulnerable to citadel penetrations, fires, and flooding. Her best defenses are her speed and the ability to disengage; standing and trading fire with better-armored opponents will quickly prove fatal."
  },
  {
    "id": "mig-15bis",
    "name": "MiG-15bis",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "V",
    "battleRatings": {
      "arcade": 8.7,
      "realistic": 8.3,
      "simulator": 8.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The MiG-15bis is the refined production MiG-15, swapping in the more powerful Klimov VK-1 turbojet for a notable boost to acceleration, climb and top speed. It pairs a brutal mixed cannon battery with a swept wing that stays controllable to very high speed, making it one of the defining early Soviet jets at the top of the prop-to-jet transition.",
    "prosCons": {
      "pros": [
        "Heavy-hitting mixed battery: a single 37 mm shell or a short 23 mm burst can shred most contemporaries",
        "Strong energy retention and a high top speed for its battle rating",
        "Generous structural speed limit lets it dive and extend aggressively",
        "Excellent high-altitude performance with a very tall service ceiling"
      ],
      "cons": [
        "The 37 mm and 23 mm cannons have different ballistic arcs, so converging fire at range takes practice",
        "Small total ammunition pool, especially the 40-round 37 mm, punishes spray-and-pray",
        "Can depart controlled flight or snap in hard, low-speed turns if mishandled",
        "Air brakes and energy bleed mean a sustained turnfight is rarely in its favour"
      ]
    },
    "playstyle": "Fight in the vertical and trade altitude for speed rather than committing to flat turns. Use the VK-1's thrust to climb above the merge, then make slashing boom-and-zoom passes; line the target up before squeezing so the heavy cannons land in the same instant. Disengage upward after each pass and let energy do the work instead of bleeding it in a dogfight.",
    "history": "The bis (\"second\") revision of the MiG-15 entered Soviet service in the early 1950s, built around the indigenous Klimov VK-1 engine that replaced the licence-derived Nene-pattern powerplant of the original. The added thrust and aerodynamic refinements made it the standard frontline MiG-15 of the period and a widely exported fighter.",
    "media": [
      {
        "src": "/vehicles/mig-15bis.jpg",
        "alt": "A real Mikoyan-Gurevich MiG-15bis jet fighter on display at the Museum of Flight in Seattle, not the in-game model.",
        "credit": "Articseahorse · CC BY-SA 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "MiG-15bis — War Thunder Wiki (unit stat card)",
        "url": "https://wiki.warthunder.com/unit/mig-15",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 1076,
      "maxSpeedAltM": 0,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1132,
      "ceilingM": 15500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "n-37d-37mm",
          "count": 1
        },
        {
          "weaponId": "nr-23-23mm",
          "count": 2
        }
      ]
    }
  },
  {
    "id": "f-86f-25",
    "name": "F-86F-25",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "V",
    "battleRatings": {
      "arcade": 7.7,
      "realistic": 8.3,
      "simulator": 8.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The F-86F-25 is a later, more powerful Sabre that drops the early jet's leading-edge slats and gains the J47-GE-27 engine and the all-flying tail. The result is a clean, fast, high-Mach swept-wing fighter that excels at controlled high-speed manoeuvring, balanced against a comparatively light all-machine-gun armament.",
    "prosCons": {
      "pros": [
        "Outstanding high-speed handling and control authority thanks to the all-flying tail",
        "High top speed and a very high structural speed limit for energy fighting",
        "Forgiving, stable gun platform that is easy to learn",
        "Six fast-firing M3 Brownings with a large combined ammo pool for sustained fire"
      ],
      "cons": [
        ".50-cal armament lacks one-pass killing power against well-built targets",
        "Slatless wing trades away some of the early Sabre's low-speed agility",
        "Modest thrust-to-weight means it must protect its energy carefully",
        "Climb is unremarkable, so it can be out-zoomed if it starts low"
      ]
    },
    "playstyle": "Keep the speed up and use the F-86F's superb high-Mach control to dictate the fight: extend, build energy, then return on the attacker's blind side. Aim for concentrated bursts since the machine guns reward time-on-target rather than snapshots. Avoid prolonged flat turnfights against cannon-armed opponents and instead use rudder-assisted high-speed scissors and vertical extensions to set up clean firing solutions.",
    "history": "The F-86F was a major Sabre subtype fielded during and after the Korean War, fitting a stronger engine and the hard-edged \"6-3\" wing on later blocks. The F-86F-25 (NA-193 contract) and the F-86F-30 (NA-191) were essentially the same aircraft differing mainly in the production factory.",
    "media": [
      {
        "src": "/vehicles/f-86f-25.jpg",
        "alt": "A real North American F-86F Sabre in Republic of Korea Air Force markings at the War Memorial of Korea, Seoul, not the in-game model.",
        "credit": "Mosbatho · CC BY 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "F-86F-25 — War Thunder Wiki (unit stat card)",
        "url": "https://wiki.warthunder.com/unit/f-86f-25",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 1106,
      "maxSpeedAltM": 0,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1170,
      "ceilingM": 14700,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m3-browning-12mm",
          "count": 6
        }
      ]
    }
  },
  {
    "id": "me-262-a-1a",
    "name": "Me 262 A-1a",
    "nation": "germany",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "V",
    "battleRatings": {
      "arcade": 7.3,
      "realistic": 7,
      "simulator": 7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Me 262 A-1a Schwalbe is the world's first operational jet fighter and Germany's foundational jet in the tree. Twin Jumo 004 turbojets give it a commanding speed advantage over the piston fighters it usually faces, while four 30 mm MK 108 cannons turn a single firing pass into a kill against almost anything it hits.",
    "prosCons": {
      "pros": [
        "Devastating nose battery of four 30 mm MK 108s: a brief burst destroys most targets",
        "Large speed margin over the propeller fighters it commonly meets",
        "Good high-altitude performance and a roomy service ceiling",
        "Stable, predictable firing platform when held straight and level for a pass"
      ],
      "cons": [
        "MK 108 shells are slow with heavy drop, demanding close-range, well-timed bursts",
        "Sluggish acceleration and poor throttle response from the early turbojets",
        "Turns and energy bleed badly; it must never be drawn into a dogfight",
        "Fragile engines and airframe are unforgiving of rough handling or overspeed"
      ]
    },
    "playstyle": "Treat it as a fast interceptor, not a dogfighter. Use the speed advantage to climb above the fight, pick a single target and make one committed slashing pass, holding fire until close so the short-ranged MK 108 rounds connect. Then extend in a shallow climb to rebuild speed before re-engaging. Manage the throttle gently to avoid flaming out, and never bleed energy trying to follow a turning opponent.",
    "history": "The Me 262 entered Luftwaffe service in mid-1944 as the first operational jet-powered combat aircraft, flying its early sorties against Allied reconnaissance and bomber formations. Persistent engine reliability problems and its late introduction limited its strategic impact despite its clear performance edge.",
    "media": [
      {
        "src": "/vehicles/me-262-a-1a.jpg",
        "alt": "A real Messerschmitt Me 262 jet fighter in flight, U.S. Air Force photograph, not the in-game model.",
        "credit": "U.S. Air Force · Public Domain (PD-USGov-Military-Air Force) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Me 262 A-1a — War Thunder Wiki (unit stat card)",
        "url": "https://wiki.warthunder.com/unit/me-262a-1a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 865,
      "maxSpeedAltM": 6000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1050,
      "ceilingM": 12500,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "mk108-30mm",
          "count": 4
        }
      ]
    }
  },
  {
    "id": "t-54-1951",
    "name": "T-54 (1951)",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "V",
    "battleRatings": {
      "arcade": 8,
      "realistic": 8,
      "simulator": 8
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The T-54 Model 1951 is the mid-production member of the Soviet T-54 line, distinguished by its rounded hemispherical turret that replaced the earlier egg-shaped casting. At a moderate-high battle rating it pairs a sloped, well-protected hull and a thick cast turret with the hard-hitting 100 mm D-10T. It is a compact, low-profile gun platform that rewards patient, hull-down or angled play over a brawl in the open.",
    "prosCons": {
      "pros": [
        "Heavily sloped 100 mm upper glacis and a thick cast turret that bounce many same-tier rounds when angled",
        "100 mm D-10T hits hard with good post-penetration effect from its APHE shells",
        "Low silhouette makes it easy to hide hull-down and hard to spot",
        "Access to HEATFS for situational high-penetration shots"
      ],
      "cons": [
        "Very limited gun depression of only -4 degrees restricts use of ridgelines and hull-down positions",
        "Reverse speed of just 8 km/h makes disengaging after a peek slow and dangerous",
        "Cramped four-crew layout means ammo or crew knockouts can disable it quickly",
        "Stock grind before the better rounds and reload upgrade is painful"
      ]
    },
    "playstyle": "Play the T-54 (1951) as an angled gun platform rather than a sniper. Use its sloped armour by sidescraping and presenting the hull at an angle so incoming rounds skip off the glacis and turret cheeks. Because depression is poor, favour flat firing lanes and gentle reverse slopes instead of steep ridges. Keep speed up when relocating, but remember the weak reverse: pick fights you can win on the first or second shot, and avoid over-extending where you would need to back out quickly.",
    "history": "The T-54 family emerged in the late 1940s as the Soviet Union's standard medium tank, refining the wartime T-44 into a cleaner, better-protected design built around the 100 mm gun. The 1951 production standard introduced the rounded turret profile that would become iconic across the later T-54/T-55 series, alongside detail improvements to the sight and fire-suppression arrangements. Built in enormous numbers, the T-54 and its T-55 successor went on to serve in dozens of armies and saw combat across the Cold War's many regional conflicts.",
    "media": [
      {
        "src": "/vehicles/t-54-1951.jpg",
        "alt": "An early Soviet T-54 medium tank preserved at a museum, showing the original dome-shaped turret of the late-1940s production; this is a real-world preserved vehicle, not the in-game model.",
        "credit": "Alan Wilson from Stilton, Peterborough, Cambs, UK · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "T-54 (1951) | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxRevKph_byMode",
      "powerToWeight",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 50,
      "maxRevKph": 8,
      "enginePowerHp": 520,
      "weightTons": 35.5,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "d-10t-100mm",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -4,
        17
      ],
      "turretTraverseDegSec": 7.6,
      "ammoCapacity": 34,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "100",
        "side": "80",
        "rear": "45"
      },
      "turretMm": {
        "front": "200",
        "side": "160",
        "rear": "65"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "leopard-1",
    "name": "Leopard I",
    "nation": "germany",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "V",
    "battleRatings": {
      "arcade": 8,
      "realistic": 8,
      "simulator": 8
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Leopard I is West Germany's first post-war main battle tank and the embodiment of the Cold War mobility-over-armour doctrine. It is thinly armoured by design but extremely fast and agile, and it carries the superb 105 mm L7-pattern gun. In game it is a flanker and gun-runner: it uses its speed, excellent gun depression, and fast turret to win first-shot duels and then relocate before it can be answered.",
    "prosCons": {
      "pros": [
        "Outstanding mobility with a high top speed and strong acceleration for repositioning and flanking",
        "Excellent -9 degree gun depression makes it superb in hull-down and on ridgelines",
        "Powerful 105 mm L7A3 with access to high-velocity rounds",
        "Fast turret traverse for reactive close-range fights"
      ],
      "cons": [
        "Almost no protective armour; vulnerable to autocannons, machine guns, and HE",
        "Frontal hits frequently knock out crew or ammo because there is little steel to absorb them",
        "Relies entirely on positioning and first shots; loses any prolonged trade",
        "Large profile relative to its protection makes it easy to hit when caught in the open"
      ]
    },
    "playstyle": "Treat the Leopard I as a glass cannon. Never lead an assault: use the map to flank, take side shots, and exploit your speed to reach firing positions before the enemy. Lean on the strong gun depression to fight hull-down over crests, exposing only the turret, and back off the moment you are spotted. Pick your engagements, fire first, and keep moving; standing still in the open is fatal because there is no armour to fall back on.",
    "history": "Developed in the late 1950s and entering Bundeswehr service in 1965, the Leopard 1 answered a NATO requirement for a fast, well-armed medium tank under the assumption that growing ammunition lethality made thick armour a poor trade against mobility. Built around the British-designed 105 mm L7 gun and a powerful MTU diesel, it prioritised speed, a stable gun, and good optics. The Leopard 1 became one of the most widely exported tanks of the Cold War, serving across NATO and beyond in continually upgraded variants.",
    "media": [
      {
        "src": "/vehicles/leopard-1.jpg",
        "alt": "West German-designed Leopard 1 main battle tanks in Italian Army service in 1977, showing the lean, lightly armored hull and mantlet of the early Leopard 1; this is a real-world wartime-era service photo, not the in-game model.",
        "credit": "SSGT Steven D. Boyer (U.S. military) · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Leopard I | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_I",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "powerToWeight",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 65,
      "maxRevKph": 25,
      "enginePowerHp": 830,
      "weightTons": 40,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "l7-105mm",
      "reloadBaseSec": 8.7,
      "reloadAcedSec": 6.7,
      "vertGuidanceDeg": [
        -9,
        20
      ],
      "turretTraverseDegSec": 16.8,
      "ammoCapacity": 60,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "70",
        "side": "35",
        "rear": "25"
      },
      "turretMm": {
        "front": "65",
        "side": "45",
        "rear": "52"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "centurion-mk-10",
    "name": "Centurion Mk 10",
    "nation": "britain",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "V",
    "battleRatings": {
      "arcade": 8,
      "realistic": 8,
      "simulator": 8
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Centurion Mk 10 is a late variant of Britain's archetypal post-war medium, mating the proven Centurion hull and turret to the 105 mm Royal Ordnance L7 gun. Unlike the lightly armoured Leopard, it leans on solid frontal protection and one of the best gun depressions in the game, making it a patient hull-down sniper. It is slow, but its armour and gun let it hold ground and win head-on trades from prepared positions.",
    "prosCons": {
      "pros": [
        "Excellent -10 degree gun depression, ideal for hull-down ridgeline fighting",
        "Well-armoured turret front and a respectable glacis for its tier",
        "Accurate 105 mm L7 gun with strong ammunition options",
        "Large 70-round ammo stowage supports long engagements"
      ],
      "cons": [
        "Low top speed and sluggish acceleration make repositioning slow",
        "Heavy at over 50 tonnes with limited engine power, hurting mobility",
        "Slow to relocate, so a poor position is hard to escape",
        "Modest turret traverse compared with faster contemporaries"
      ]
    },
    "playstyle": "Fight the Centurion Mk 10 as a defensive sniper and hull-down anchor. Its standout -10 degree depression lets it crest hills exposing only the heavily armoured turret, where it can soak hits while landing accurate L7 shots. Because it is slow, choose your position early and hold it rather than chasing flanks. Angle the hull to make the most of the frontal armour, and let the enemy come to you across firing lanes you already control.",
    "history": "The Centurion entered service just too late for the Second World War but became the benchmark Western tank of the early Cold War, prized for its gun, optics, and steady gun platform. The Mk 10, produced from 1960, standardised the 105 mm L7 gun across the line and added thicker frontal protection. Centurions served widely abroad and saw heavy combat in Middle Eastern wars and elsewhere, earning a reputation for toughness and accuracy that cemented the design's legacy.",
    "media": [
      {
        "src": "/vehicles/centurion-mk-10.jpg",
        "alt": "A preserved British Centurion (Mark 13) on museum display, representative of the long-serving Centurion line that includes the Mk 10; this is a real-world preserved vehicle, not the in-game model.",
        "credit": "Alan Wilson from Stilton, Peterborough, Cambs, UK · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Centurion Mk 10 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_centurion_mk_10",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "powerToWeight",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 35,
      "maxRevKph": 12,
      "enginePowerHp": 650,
      "weightTons": 51.8,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "l7a1-105mm",
      "reloadBaseSec": 8.7,
      "reloadAcedSec": 6.7,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": 14.1,
      "ammoCapacity": 70,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "76",
        "side": "51",
        "rear": "32"
      },
      "turretMm": {
        "front": "152",
        "side": "89",
        "rear": "89"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "ztz59",
    "name": "Type 59",
    "nation": "china",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "V",
    "battleRatings": {
      "arcade": 8,
      "realistic": 8,
      "simulator": 8
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Type 59 is China's first domestically built medium tank, a license-produced descendant of the Soviet T-54A. In game it plays as a classic post-war medium: a hard-hitting 100 mm rifled gun mounted in a well-rounded cast turret, backed by sloped frontal armour that bounces shots when angled, but hampered by a sluggish single-speed reverse and modest engine power.",
    "prosCons": {
      "pros": [
        "Strong, heavily sloped cast turret front that trades well against same-rank rounds when hull-down",
        "Capable 100 mm gun with a competitive reload and access to APDS for reliable penetration at its battle rating",
        "Compact silhouette and good gun depression behaviour for a Soviet-pattern hull, making ridgelines workable",
        "Solid all-round medium-tank protection scheme for ambush and angled engagements"
      ],
      "cons": [
        "Very poor reverse speed, which punishes mistakes and makes peeking dangerous",
        "Limited engine power and power-to-weight, so repositioning across open ground is slow",
        "Lower glacis and turret cheeks can be defeated by more modern APFSDS and HEAT-FS at uptiers",
        "Limited gun depression compared with Western contemporaries restricts hull-down play on steep terrain"
      ]
    },
    "playstyle": "Fight as a second-line medium that leans on its turret armour. Find a ridge or hard cover, expose only the turret, and use the strong gun to trade favourably; angle the hull when you must show it so the sloped glacis works for you. Avoid open-field duels where the weak reverse and low power leave you stranded, and pick your repositioning carefully since you cannot reverse out of trouble quickly.",
    "history": "Production of the Type 59 began in the late 1950s as a license-built copy of the Soviet T-54A, making it the first medium tank manufactured in the People's Republic of China. It became the backbone of the People's Liberation Army Ground Force for decades and was produced in enormous numbers, with later domestic upgrade programmes adding improved fire control, suspension, and protection to keep the platform relevant well into the 1990s.",
    "media": [
      {
        "src": "/vehicles/ztz59.jpg",
        "alt": "A Chinese Type 59 (WZ120) main battle tank at the Beijing Military Museum, viewed from the front right; this is a real-world preserved vehicle, not the in-game model.",
        "credit": "Max Smith · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Type 59 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_type_59",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "reverseGears",
      "neutralSteering",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": 8,
      "enginePowerHp": 520,
      "weightTons": 36,
      "powerToWeight": 14.4,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "type-59-100mm",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -5,
        18
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 34,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "100",
        "side": "80",
        "rear": "45"
      },
      "turretMm": {
        "front": "200",
        "side": "155",
        "rear": "65"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "amx-30",
    "name": "AMX-30",
    "nation": "france",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "V",
    "battleRatings": {
      "arcade": 8,
      "realistic": 8,
      "simulator": 8
    },
    "acquisition": [
      "premium"
    ],
    "summary": "The AMX-30 is France's Cold-War main battle tank built around the philosophy that mobility and firepower beat heavy armour. In game it is a fast, agile, thinly armoured platform with a potent 105 mm gun whose star round is the OCC-105-F1 HEAT shell, letting it punch through almost anything from any angle as long as it shoots first and stays out of return fire.",
    "prosCons": {
      "pros": [
        "Excellent mobility and high power-to-weight for quick flanks and repositioning",
        "Powerful 105 mm gun with full-caliber HEAT that penetrates consistently regardless of range or angle",
        "Good gun depression for using terrain and going hull-down",
        "As a premium it earns boosted research and Silver Lion rewards"
      ],
      "cons": [
        "Extremely thin armour all round; it is reliably penetrated by almost any threat that lands a hit",
        "Relies on its HEAT round, which is defeated by spaced or volumetric obstacles and screens",
        "Large, lightly protected crew compartment makes it prone to one-shot knockouts",
        "No special protection (no composite, ERA, or APS), so survivability depends entirely on not being hit"
      ]
    },
    "playstyle": "Play it like a glass cannon: use speed to reach firing positions on the flanks before the enemy, fire, and relocate before they can answer. Lean on the strong HEAT round to defeat heavily armoured targets that would shrug off an AP shell, and exploit gun depression to fight from ridgelines. Never brawl head-on or sit still in the open; your survival comes from positioning and first-shot kills, not armour.",
    "history": "The AMX-30 entered French service in the mid-1960s as the nation's main battle tank and remained the backbone of France's armoured forces until the Leclerc arrived in the 1990s. French doctrine of the era concluded that no realistic armour thickness could reliably stop modern shaped-charge warheads, so designers deliberately traded protection for agility, betting that a tank that was hard to hit and could deliver a powerful gun quickly would survive better than a heavily armoured but ponderous one. Over 3,500 were built and the type was widely exported.",
    "media": [
      {
        "src": "/vehicles/amx-30.jpg",
        "alt": "A French AMX-30 (AMX-30C2 modernized variant) preserved at the Musée des Blindés in Saumur, France; this is a real-world preserved vehicle, not the in-game model.",
        "credit": "Alf van Beem · CC0 1.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "AMX-30 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_amx_30",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "reverseGears",
      "neutralSteering",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": 680,
      "weightTons": 36,
      "powerToWeight": 18.9,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "cn-105-f1",
      "reloadBaseSec": 8.7,
      "reloadAcedSec": 6.7,
      "vertGuidanceDeg": [
        -8,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 50,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "79",
        "side": "35",
        "rear": "30"
      },
      "turretMm": {
        "front": "80",
        "side": "41",
        "rear": "30"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "merkava-mk-1",
    "name": "Merkava Mk.1",
    "nation": "israel",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9.3,
      "realistic": 9.3,
      "simulator": 9.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Merkava Mk.1 is Israel's first indigenous main battle tank, a survivability-first design with its engine mounted in the front to act as extra protection for the crew. In game it is a tough, well-armed but slow platform: the 105 mm gun and good fire control let it trade hard, while the unusual layout and dense frontal protection help it absorb hits that would knock out lighter tanks.",
    "prosCons": {
      "pros": [
        "Front-mounted engine and dense frontal layout give strong crew survivability against frontal hits",
        "Capable 105 mm gun with good fire control and a solid reload for its rank",
        "Good gun depression for hull-down fighting from terrain",
        "Heavy, stable platform that shrugs off many hits that would cripple thinner tanks"
      ],
      "cons": [
        "Low mobility and modest power-to-weight; slow to reposition and to reach cover",
        "Very poor reverse speed makes disengaging from a bad peek dangerous",
        "At its battle rating it faces APFSDS and ATGMs that can defeat the frontal protection if aimed well",
        "Tall profile and heavy weight make it hard to hide and slow to relocate under fire"
      ]
    },
    "playstyle": "Use it as a frontal anchor. Push into a position, point the well-protected front at the enemy, and trade shots while leaning on the front-engine layout to soak hits and protect the crew. Exploit gun depression to fight hull-down from ridges. Plan your moves in advance because the weak reverse and low power mean you cannot reposition quickly, so commit to firing lanes where your protection and gun do the work.",
    "history": "Developed under General Israel Tal and entering service in the late 1970s, the Merkava Mk.1 was Israel's first domestically designed and built main battle tank, conceived in the aftermath of the Yom Kippur War with crew survivability as the paramount goal. Its most distinctive feature is the front-mounted engine, which places a large mass of machinery between incoming fire and the crew, and a rear hatch that allows the crew to evacuate or the tank to carry infantry under cover. The design prioritised protection and firepower over raw speed, reflecting hard lessons from Israel's armoured battles.",
    "media": [
      {
        "src": "/vehicles/merkava-mk-1.jpg",
        "alt": "An Israeli Merkava Mark 1 main battle tank on display, showing its distinctive front-mounted engine and rear crew hatch layout; this is a real-world preserved vehicle, not the in-game model.",
        "credit": "Tom733 · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Merkava Mk.1 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/il_merkava_mk_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "reverseGears",
      "neutralSteering",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": 900,
      "weightTons": 61,
      "powerToWeight": 14.8,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m68-105mm",
      "reloadBaseSec": 8.7,
      "reloadAcedSec": 6.7,
      "vertGuidanceDeg": [
        -8,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 54,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "90",
        "side": "50",
        "rear": "30"
      },
      "turretMm": {
        "front": "65",
        "side": "65",
        "rear": "65"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "wirbelwind",
    "name": "Wirbelwind",
    "nation": "germany",
    "class": "ground",
    "subclass": "SPAA",
    "rank": "III",
    "battleRatings": {
      "arcade": 4,
      "realistic": 3.7,
      "simulator": 3.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Wirbelwind (Flakpanzer IV Sd.Kfz. 161/4) mounts an open-top, nine-sided turret carrying a quadruple 20 mm Flak 38 mount on a Panzer IV chassis. It is a low-rank German anti-aircraft platform whose four barrels throw out a dense wall of fragmentation rounds, shredding aircraft and lightly armoured ground targets alike, while the crew rely on the chassis rather than the thin turret for protection.",
    "prosCons": {
      "pros": [
        "Quad 20 mm mount delivers a very high combined volume of fire",
        "Full 90 degree gun elevation makes high-angle deflection shots easy",
        "Panzer IV chassis is well armoured at the front for an SPAA, surviving small-calibre fire",
        "Large 3,200-round ammo pool lets it hose targets without constant resupply"
      ],
      "cons": [
        "Open-topped, thinly armoured turret leaves the crew exposed to strafing, shrapnel and HE",
        "20 mm rounds bleed energy quickly and struggle against anything beyond light armour at range",
        "Tall, boxy silhouette is easy to spot and the gunner sits high",
        "Slow, WWII-era chassis cannot reposition quickly against fast jets"
      ]
    },
    "playstyle": "Hold back from the immediate front line and treat the Wirbelwind as a roving flak post: park near cover with a clear sky view, lead aircraft generously, and walk the four-barrel stream onto them. Against ground targets, ambush exposed flanks and rear armour of light vehicles, then relocate before return fire finds the open turret.",
    "history": "Conceived in mid-1944 by SS-Hauptsturmfuehrer Karl Wilhelm Krause as a stopgap to give German armoured columns mobile flak cover, the Wirbelwind married the Flakvierling 38 quad 20 mm mount to a turreted Panzer IV hull. Only a limited number were built before production shifted to the heavier-hitting Ostwind, but the design proved the value of a fully traversable, tracked anti-aircraft turret.",
    "media": [
      {
        "src": "/vehicles/wirbelwind.jpg",
        "alt": "A German Wirbelwind (Flakpanzer IV) SPAA preserved at the Worthington Tank Museum, CFB Borden, not the in-game model.",
        "credit": "Balcer · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Wirbelwind | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_flakpanzer_IV_Wirbelwind",
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
      "weightTons": 25,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "flak38-20mm",
      "reloadBaseSec": 5.2,
      "reloadAcedSec": 4,
      "vertGuidanceDeg": [
        -10,
        90
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 3200,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "80",
        "side": "30",
        "rear": "20"
      },
      "turretMm": {
        "front": "16",
        "side": "16",
        "rear": "16"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m42-duster",
    "name": "M42 Duster",
    "nation": "usa",
    "class": "ground",
    "subclass": "SPAA",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.3,
      "realistic": 4,
      "simulator": 4
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M42 Duster is a lightly armoured American self-propelled anti-aircraft gun built on the M41 Walker Bulldog chassis, carrying a twin 40 mm Bofors M2A1 mount in an open turret. Fast and nimble, it trades armour for mobility and uses its hard-hitting twin autocannons against both aircraft and light ground targets.",
    "prosCons": {
      "pros": [
        "Twin 40 mm Bofors rounds hit hard and can knock out light vehicles and aircraft in a single burst",
        "Very mobile chassis, ideal for flanking and repositioning",
        "Good 85 degree elevation for engaging diving aircraft",
        "Large 480-round ammo supply for a heavy-calibre SPAA"
      ],
      "cons": [
        "Open-top turret with paper-thin 8-12 mm armour offers almost no crew protection",
        "Slow 120 rpm fire rate per the wiki means each clip-fed burst must count",
        "Limited -3 degree gun depression hampers shooting downhill",
        "Large profile and exposed crew make it fragile in close combat"
      ]
    },
    "playstyle": "Exploit the M42's speed to reach flanking positions and elevated ground with a wide field of fire. Use the twin Bofors against aircraft at medium range where their hitting power tells, and ambush light vehicles from the side; never trade shots frontally given the negligible armour and exposed crew.",
    "history": "Developed in the early 1950s to replace the M19 on the newer M41 chassis, the M42 Duster paired the dual 40 mm Bofors gun with a fast, air-transportable hull. Although designed for air defence, the advent of jet aircraft soon outpaced its optically aimed guns, and it found its real fame in Vietnam as a devastating direct-fire weapon against ground troops and ambushes.",
    "media": [
      {
        "src": "/vehicles/m42-duster.jpg",
        "alt": "An American M42 Duster SPAA in Bundeswehr colors at the Anti-Aircraft Museum, Tuusula, Finland, not the in-game model.",
        "credit": "Ojp · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "M42 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m42_duster",
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
      "weightTons": 22.5,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "bofors-m2a1-40mm",
      "reloadBaseSec": 0.6,
      "reloadAcedSec": 0.5,
      "vertGuidanceDeg": [
        -3,
        85
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 480,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "12",
        "side": "12",
        "rear": "12"
      },
      "turretMm": {
        "front": "12",
        "side": "8",
        "rear": "8"
      },
      "crewCount": 6,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "zsu-57-2",
    "name": "ZSU-57-2",
    "nation": "ussr",
    "class": "ground",
    "subclass": "SPAA",
    "rank": "V",
    "battleRatings": {
      "arcade": 7,
      "realistic": 7,
      "simulator": 7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The ZSU-57-2 is a Soviet self-propelled anti-aircraft gun built on a lightened T-54 chassis, mounting twin 57 mm S-68 autocannons in a large open turret. Its big-bore guns are far heavier than typical SPAA armament, making it a dangerous tank-hunter and bomber-killer, though its low fire rate and clip feed demand precise gunnery.",
    "prosCons": {
      "pros": [
        "Twin 57 mm S-68 guns hit extremely hard and can destroy aircraft or light tanks outright",
        "Strong penetration lets it threaten the side and rear of medium tanks",
        "High 85 degree elevation and full traverse cover the whole sky",
        "Tracer-rich 57 mm rounds make leading aircraft easier than smaller-calibre SPAA"
      ],
      "cons": [
        "Only 120 rpm with 4-round clips means a brief, low-volume burst before reloading",
        "Open-top turret with thin 13-15 mm armour leaves the crew highly vulnerable",
        "Very poor reverse speed makes disengaging slow",
        "Limited -5 degree depression restricts hull-down and downhill shots"
      ]
    },
    "playstyle": "Play the ZSU-57-2 as a hybrid flak/tank-destroyer: take overwatch positions where you can punish aircraft with heavy bursts and snipe the flanks of advancing armour with its potent 57 mm rounds. Manage the short 4-round clips by firing controlled bursts, and avoid prolonged exposure given the open, lightly armoured turret.",
    "history": "Designed by NII-58 between 1947 and 1950 and produced from 1955 to 1960, the ZSU-57-2 placed the powerful S-68 anti-aircraft gun atop a thinned-down T-54 hull. Around 857 were built and the type was widely exported, seeing action in conflicts from Vietnam and the Six-Day War to later Middle Eastern and Balkan fighting, frequently repurposed as a direct-fire support weapon.",
    "media": [
      {
        "src": "/vehicles/zsu-57-2.jpg",
        "alt": "A Soviet ZSU-57-2 SPAA on display at the Army History Museum and Park in Kecel, Hungary, not the in-game model.",
        "credit": "Cooper6 · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "ZSU-57-2 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_zsu_57_2",
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
      "weightTons": 28,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "s-68-57mm",
      "reloadBaseSec": 2.6,
      "reloadAcedSec": 2,
      "vertGuidanceDeg": [
        -5,
        85
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 296,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "15",
        "side": "15",
        "rear": "10"
      },
      "turretMm": {
        "front": "15",
        "side": "13",
        "rear": "13"
      },
      "crewCount": 6,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "mig-21f-13",
    "name": "MiG-21F-13",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 8.7,
      "realistic": 9.3,
      "simulator": 9.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The MiG-21F-13 is a rank VI Soviet supersonic jet fighter and the first of the delta-wing MiG-21 line in the tech tree. It pairs a single 30 mm NR-30 cannon with a 60-round magazine and a pair of R-3S infrared missiles, leaning on raw speed, a high service ceiling, and early IR-missile gunnery rather than turning power.",
    "prosCons": {
      "pros": [
        "Very high top speed and excellent acceleration in a dive",
        "Carries early R-3S infrared air-to-air missiles for stand-off kills",
        "Hard-hitting 30 mm NR-30 cannon for finishing passes",
        "High service ceiling lets it dictate engagement altitude"
      ],
      "cons": [
        "Tiny 60-round cannon belt punishes spray-and-pray gunnery",
        "Poor low-speed handling and weak energy retention in sustained turns",
        "R-3S missiles are easily defeated by flares and hard maneuvers",
        "Bleeds energy quickly if dragged into a flat turnfight"
      ]
    },
    "playstyle": "Treat the MiG-21F-13 as a high-speed interceptor, not a dogfighter. Keep your speed up, climb to altitude, and use the R-3S infrared missiles for opening shots against unaware or non-maneuvering targets at range, remembering they are simple seekers that flares and hard turns will beat. Reserve the single 30 mm NR-30 for committed finishing passes, since the 60-round belt empties almost instantly. Avoid prolonged low-speed turnfights where the delta wing bleeds energy badly; instead extend, reset, and re-engage on your terms using the jet's superior speed and ceiling.",
    "history": "The MiG-21F-13 was an early production mark of the Mikoyan-Gurevich MiG-21, a single-engine delta-wing interceptor that became one of the most widely produced supersonic aircraft in history. The F-13 standardized the K-13 (R-3S) infrared missile, a design reverse-engineered from a captured AIM-9 Sidewinder, and to fit the associated equipment one of the aircraft's twin cannons was deleted, leaving a single 30 mm NR-30.",
    "media": [
      {
        "src": "/vehicles/mig-21f-13.jpg",
        "alt": "A real Mikoyan-Gurevich MiG-21F-13 (MG-78) preserved at the Karhula aviation museum, Finland, not the in-game model.",
        "credit": "MKFI · Public Domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — MiG-21F-13",
        "url": "https://wiki.warthunder.com/unit/mig-21_f13",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 2196,
      "maxSpeedAltM": 13000,
      "climbMps": 98,
      "turnTimeSec": 34.6,
      "structuralLimitKph": 1312,
      "ceilingM": 16000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "nr-30-30mm",
          "count": 1
        }
      ]
    }
  },
  {
    "id": "j-5",
    "name": "Shenyang F-5",
    "nation": "china",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9,
      "realistic": 9,
      "simulator": 9
    },
    "acquisition": [
      "premium"
    ],
    "summary": "The Shenyang F-5 is China's license-built MiG-17F, a transonic swept-wing jet fighter offered as a premium. It carries the classic heavy MiG-17 gun fit of one 37 mm and two 23 mm cannons, rewarding patient energy fighting and decisive, well-aimed gun passes over high-speed missile play.",
    "prosCons": {
      "pros": [
        "Devastating mixed 37 mm + twin 23 mm cannon battery",
        "Strong energy retention and good sustained turn for its rating",
        "Reliable transonic performance with a high service ceiling",
        "Forgiving, well-rounded handling typical of the MiG-17 line"
      ],
      "cons": [
        "Low cannon velocities make leading distant targets difficult",
        "Small 40-round belt on the 37 mm cannon limits sustained fire",
        "No radar and only short-range PL-2 IR missiles for air combat",
        "Severe compression and control stiffening at high speed"
      ]
    },
    "playstyle": "Fly the Shenyang F-5 as an energy fighter that wins with guns. Keep your speed in the band where controls stay responsive, and use the MiG-17's good energy retention to stay above and behind opponents. The 37 mm and twin 23 mm battery is brutal up close but the shells are slow, so close the distance and fire short, aimed bursts rather than sniping. Manage the small 37 mm belt carefully, use the PL-2 missiles only against unaware or non-maneuvering targets at short range, and disengage vertically if a fight stalls out at low speed.",
    "history": "After the Soviet Union agreed to help build China's aviation industry in the early 1950s, Factory 112 (later Shenyang Aircraft Corporation) was selected to license-produce the MiG-17F. The first Chinese-assembled jet flew in 1956 and entered People's Liberation Army Air Force service shortly after. Aircraft of this type, including examples supplied to allied air arms, saw extensive combat over the following years against opposing piston and jet aircraft.",
    "media": [
      {
        "src": "/vehicles/j-5.jpg",
        "alt": "A real Shenyang J-5, the Chinese-built MiG-17, on display at the Military Museum of the Chinese People's Revolution in Beijing, not the in-game model.",
        "credit": "Morio · CC BY-SA 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Shenyang F-5",
        "url": "https://wiki.warthunder.com/unit/mig-17_f5",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 1094,
      "maxSpeedAltM": 2000,
      "climbMps": 59.1,
      "turnTimeSec": 22.7,
      "structuralLimitKph": 1150,
      "ceilingM": 15500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "n-37d-37mm",
          "count": 1
        },
        {
          "weaponId": "nr-23-23mm",
          "count": 2
        }
      ]
    }
  },
  {
    "id": "ouragan",
    "name": "M.D.450B (29)",
    "nation": "israel",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "V",
    "battleRatings": {
      "arcade": 7.3,
      "realistic": 7.7,
      "simulator": 7.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M.D.450B (29) is a rank V Israeli early jet fighter-bomber, a version of the French Dassault MD.450 Ouragan operated by the Israeli Air Force. It mounts a heavy battery of four 20 mm M50 cannons and a useful ground-attack load, making it a versatile but transonic platform best flown as an energy fighter and strike aircraft.",
    "prosCons": {
      "pros": [
        "Four 20 mm cannons deliver a heavy, concentrated burst",
        "Generous 500-round total ammunition pool for its class",
        "Solid air-to-ground load of rockets and bombs",
        "Sturdy airframe that tolerates hard maneuvering at moderate speed"
      ],
      "cons": [
        "Modest top speed leaves it slow against contemporary jets",
        "Unremarkable climb rate for its battle rating",
        "No air-to-air missiles, so all aerial kills come from guns",
        "Handling stiffens and controls compress as speed builds"
      ]
    },
    "playstyle": "Fly the M.D.450B as a hybrid energy fighter and strike jet. In air battles, conserve energy, fight in the vertical against faster opponents you cannot out-run, and bring all four 20 mm cannons to bear in short, decisive bursts where the concentrated firepower shines. Against ground targets, use the rocket and bomb load on early passes, then revert to air-to-air gunnery. Avoid drawn-out flat turnfights against more agile jets and respect the modest top speed by picking engagements you can disengage from cleanly.",
    "history": "The Dassault MD.450 Ouragan was France's first mass-produced jet fighter and the first jet built in series by Dassault. Israel acquired Ouragans in the mid-1950s, with the first examples arriving in 1955 and equipping a newly formed squadron. The type saw combat during the 1956 Suez campaign, including ground-attack and anti-shipping strikes, before later serving in secondary roles.",
    "media": [
      {
        "src": "/vehicles/ouragan.jpg",
        "alt": "A real Dassault MD.450 Ouragan in Israeli Air Force 107 Squadron markings at the Israeli Air Force Museum near Hatzerim, not the in-game model.",
        "credit": "Oren Rozen · CC BY-SA 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — M.D.450B (29) (Israel)",
        "url": "https://wiki.warthunder.com/unit/md_450b_ouragan_iaf_29",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": null,
      "climbMps": 23.1,
      "turnTimeSec": 25.4,
      "structuralLimitKph": 1030,
      "ceilingM": 12000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m50-20mm",
          "count": 4
        }
      ]
    }
  },
  {
    "id": "z25",
    "name": "Z25",
    "nation": "germany",
    "class": "naval",
    "subclass": "Destroyer",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.3,
      "realistic": 4.3,
      "simulator": null
    },
    "acquisition": [
      "battle-pass"
    ],
    "summary": "The Z25 is a Type 1936A destroyer that trades one of its centrally mounted 15 cm turrets for a dense battery of 3.7 cm and 2 cm flak, turning a hard-hitting gunboat into one of the strongest dedicated anti-air destroyers at its rank. Its 15 cm guns fire slowly compared with the 12.8 cm boats of the German line, but their armour-piercing shells punch well above their weight against other destroyers and exposed light cruisers.",
    "prosCons": {
      "pros": [
        "15 cm armour-piercing shells deal heavy damage per hit, devastating other destroyers",
        "Exceptional anti-aircraft suite of 3.7 cm and 2 cm autocannons shreds attacking aircraft",
        "Eight 533 mm G7a torpedoes give a strong long-range ambush option",
        "Generous 336-man crew absorbs damage and keeps modules manned"
      ],
      "cons": [
        "Low main-gun rate of fire compared with the 12.8 cm Type 1936 sisters",
        "Thin protection (16 mm hull) leaves it vulnerable to enemy AP and HE",
        "Large hull is an easy target for torpedoes and bombers",
        "Locked behind Battle Pass seasons, so not freely available in the tree"
      ]
    },
    "playstyle": "Hold at medium range and lean on the AP punch of the 15 cm guns, picking off enemy destroyers before they can close. Stay angled and keep moving to spoil incoming fire, since the hull offers little protection. Lead torpedo spreads against capital ships and let the heavy flak battery deter or destroy attacking aircraft rather than relying on dodging alone.",
    "history": "Built to the Type 1936A standard, Z25 was laid down in 1939 and launched the following year, entering service with German destroyer flotillas during the Second World War. The 1936A boats were a heavier-gunned evolution of the Type 1936 design, originally intended to carry 15 cm guns for greater hitting power. Z25 served in northern and Baltic waters, escorting and skirmishing through the mid-war years, and survived to be handed over as a war prize after Germany's defeat.",
    "media": [
      {
        "src": "/vehicles/z25.jpg",
        "alt": "A real Type 1936A destroyer, sister ship Z29, photographed by the U.S. Navy in 1945 (no photo of Z25 itself was found), not the in-game model.",
        "credit": "U.S. Navy · Public Domain (PD-US-Navy) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Z25 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_destroyer_class1936a_z25",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "deckMm",
      "brSimulator",
      "secondary"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 3543,
      "lengthM": null,
      "crew": 336
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "4 x 150 mm/48 KC/36 (two single mounts aft, one twin mount forward)",
      "aa": "3.7 cm Flak M42 and 2 cm Flak 38 (twin and quad mounts plus single 2 cm)",
      "torpedoes": "8 x 533 mm G7a",
      "depthCharges": true
    },
    "armor": {
      "beltMm": "16",
      "citadel": "Main fire tower 30 / 20 / 5 mm"
    },
    "survivability": "Survivability rests almost entirely on the large 336-man crew and redundant modules rather than armour, since the 16 mm hull and 8 mm superstructure stop little more than fragments and small-calibre fire. Enemy AP shells pass through cleanly, so the boat relies on absorbing hits without losing too many systems at once; ammunition and engine spaces are the most dangerous places to take a penetration. The strong flak battery improves effective survivability against aircraft by destroying bombers and strafers before they can land hits."
  },
  {
    "id": "fr_destroyer_jaguar_class_chacal",
    "name": "Chacal",
    "nation": "france",
    "class": "naval",
    "subclass": "Destroyer",
    "rank": "I",
    "battleRatings": {
      "arcade": 4,
      "realistic": 4,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Chacal is the lead ship of France's Jaguar-class contre-torpilleurs (large torpedo-boat destroyers) and one of the early reserve-rank ships of the French fleet line. It carries a heavy five-gun battery of 130 mm cannons and a strong torpedo armament, but it is a glass cannon: armour is almost non-existent and it has no dedicated short-range anti-aircraft guns.",
    "prosCons": {
      "pros": [
        "Five 130 mm main guns give strong broadside firepower for its rank",
        "Six 550 mm torpedoes threaten larger ships",
        "Available early in the French tree as a tech-tree vessel",
        "Long, fast contre-torpilleur hull suited to flanking and torpedo runs"
      ],
      "cons": [
        "No dedicated short-range anti-aircraft guns, leaving it helpless against aircraft",
        "Paper-thin protection (16 mm hull) offers little against AP or HE",
        "Modest 221-man crew is drained quickly by sustained fire",
        "Main guns are not fast-firing, so it must make hits count"
      ]
    },
    "playstyle": "Fight at range where the five 130 mm guns can land aimed salvos while the thin hull stays out of close brawls. Use the torpedoes opportunistically against cruisers and capital ships during flanking runs. Because there is no real anti-air, treat aircraft as a serious threat and keep near friendly cover or break off when planes appear rather than trying to dodge bombs in the open.",
    "history": "The Jaguar class, sometimes called the Chacal class after this lead ship, were among the first contre-torpilleurs built for the French Navy in the 1920s, large fast destroyers intended to scout and screen the fleet and to overwhelm enemy destroyers with heavy gun and torpedo armament. Chacal herself was launched in the mid-1920s and served into the Second World War. The class was named for big cats and predators, with sisters including Jaguar, Leopard, Lynx, Panthere and Tigre.",
    "media": [
      {
        "src": "/vehicles/fr_destroyer_jaguar_class_chacal.jpg",
        "alt": "A real Chacal-class (Jaguar-class) destroyer moored off Brest in 1937 (a sister ship, as no clear photo of Chacal itself was found), U.S. Navy photo, not the in-game model.",
        "credit": "U.S. Navy (Office of Naval Intelligence) · Public Domain (PD-US-Navy) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Chacal | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_destroyer_jaguar_class_chacal",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "deckMm",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 3075,
      "lengthM": null,
      "crew": 221
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "5 x 130 mm/40 model 1919",
      "secondary": "2 x 75 mm/50 model 1922",
      "torpedoes": "6 x 550 mm model 1923DT",
      "depthCharges": false
    },
    "armor": {
      "beltMm": "16",
      "citadel": "Main fire tower 10 / 10 / 0 mm"
    },
    "survivability": "Chacal is extremely fragile: the 16 mm hull and 8 mm superstructure stop almost nothing, and the conning tower armour is token at best. Incoming AP shells will routinely overpenetrate or wreck modules, so survival depends on staying at range, presenting a narrow profile, and avoiding focused fire. With only 221 crew, repeated hits quickly knock out guns and flooding control, and the total lack of short-range flak means a single determined attack aircraft can be lethal."
  },
  {
    "id": "jp_cruiser_furutaka",
    "name": "IJN Furutaka",
    "nation": "japan",
    "class": "naval",
    "subclass": "Heavy cruiser",
    "rank": "IV",
    "battleRatings": {
      "arcade": 5.7,
      "realistic": 5.7,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "IJN Furutaka is the lead ship of the Furutaka-class scout cruiser, an early Japanese heavy cruiser sitting between light and heavy classes in capability. She carries six 203 mm guns in three twin turrets, a respectable secondary and AA fit, and a heavy torpedo armament, combining solid continuous firepower with the mobility expected of a Japanese cruiser.",
    "prosCons": {
      "pros": [
        "Six 203 mm guns in three twin turrets deliver strong sustained firepower",
        "Sixteen 610 mm Type 93 torpedoes are devastating against capital ships",
        "Good mobility for a heavy cruiser, aiding repositioning and angling",
        "Citadel and turret protection help against smaller-calibre fire"
      ],
      "cons": [
        "Armour is light for a heavy cruiser and vulnerable to larger guns",
        "Anti-aircraft suite of 25 mm and 13.2 mm guns is modest for the BR",
        "Large torpedo storage can detonate catastrophically if hit",
        "Slower than her sister Kako and outranged by later heavy cruisers"
      ]
    },
    "playstyle": "Fight at medium to long range, angling the hull so the citadel belt deflects fire while putting steady 203 mm salvos onto enemy cruisers and destroyers. Keep the broadside hidden when reloading to limit exposure of the torpedo magazines, which can cause a fatal detonation. Launch the large Type 93 torpedo spreads against capital ships at choke points, and stay mobile to avoid concentrated fire that the light armour cannot absorb.",
    "history": "Furutaka was the name ship of a class of scout heavy cruisers designed in the early 1920s to counter contemporary American Omaha-class and British Hawkins-class cruisers with superior speed and firing range. She entered Imperial Japanese Navy service in the mid-1920s and fought through the early Pacific War with Cruiser Division 6, taking part in operations around the Solomons. Furutaka was lost at the Battle of Cape Esperance in October 1942 after sustained American gunfire detonated her torpedo stowage.",
    "media": [
      {
        "src": "/vehicles/jp_cruiser_furutaka.jpg",
        "alt": "A real Imperial Japanese Navy cruiser Furutaka photographed off Nagasaki on 5 April 1926, not the in-game model.",
        "credit": "Imperial Japanese Navy · Public Domain (PD-Japan-oldphoto) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "IJN Furutaka | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_cruiser_furutaka",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "beltMm",
      "deckMm",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 11273,
      "lengthM": null,
      "crew": 680
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "3 x 2 x 203 mm (3rd year type)",
      "secondary": "4 x 120 mm/45 10th year type",
      "aa": "25 mm/60 Type 96 (twin mounts) and 13.2 mm Type 93 machine guns (twin mounts)",
      "torpedoes": "16 x 610 mm Type 93 Model 1 Mod 2",
      "depthCharges": false
    },
    "armor": {
      "citadel": "Citadel 76 / 76 / 34 mm; conning tower 25 / 25 / 25 mm; hull 25 mm"
    },
    "survivability": "Furutaka is tougher than a destroyer but lightly built for a heavy cruiser, with a 76 mm citadel and 25 mm hull that resist destroyer and light-cruiser fire but give way to larger naval guns. Her 680-man crew lets her soak damage and keep fighting, yet the greatest threat is internal: the large Type 93 torpedo stowage can detonate and destroy the ship outright, exactly as happened to the real vessel. Angling to protect the citadel and shielding the torpedo spaces from incoming fire are key to staying afloat."
  },
  {
    "id": "tiger-ii-h",
    "name": "Tiger II (H)",
    "nation": "germany",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "IV",
    "battleRatings": {
      "arcade": 7,
      "realistic": 6.7,
      "simulator": 6.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Tiger II (H) is the Henschel-turreted production King Tiger: a heavily armoured German heavy tank built around the long 8.8 cm KwK43, which combines flat-shooting accuracy with deep penetration at any range typically seen in battle. Its sloped frontal hull and thick mantlet make it a punishing frontal opponent, but its considerable weight and limited engine output leave it ponderous and exposed to flanking.",
    "prosCons": {
      "pros": [
        "Long 8.8 cm KwK43 with excellent accuracy and penetration at range",
        "Well-sloped frontal hull armour that bounces many rounds head-on",
        "Strong gun mantlet and turret cheeks",
        "Generous 70-round ammo stowage"
      ],
      "cons": [
        "Heavy and underpowered, so acceleration and turning are sluggish",
        "Flat turret cheeks and ammo racks can be punished by flankers",
        "Long reload compared with lighter-gunned rivals",
        "Large profile makes it easy to spot and target"
      ]
    },
    "playstyle": "Fight at medium to long range where the KwK43's accuracy and the angled hull pay off. Hull-down or angled behind cover, present the strong front and let the gun do the work; avoid open-ground turns where your weak sides and slow traverse get exploited. Pre-aim chokepoints rather than trading reloads up close.",
    "history": "Developed by Henschel in 1943 as a successor to the Tiger I, the Panzerkampfwagen Tiger Ausf. B paired thick, sloped armour with the powerful long 88 mm gun. The Henschel turret was the standard production type after early vehicles used the rounded Porsche-design turret. Heavy and fuel-hungry, it nonetheless ranked among the most formidable heavy tanks of the war when mechanically sound.",
    "media": [
      {
        "src": "/vehicles/tiger-ii-h.jpg",
        "alt": "A German Tiger II 'King Tiger' with the production Henschel turret, captured in 1944 and preserved at the Patriot Museum in Kubinka, Russia; this is a real-world preserved vehicle, not the in-game model.",
        "credit": "Alan Wilson from Stilton, Peterborough, Cambs, UK · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Tiger II | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_b_tiger_IIh",
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
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 69.8,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "kwk43-88mm",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -8,
        15
      ],
      "turretTraverseDegSec": 13.3,
      "ammoCapacity": 70,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "150",
        "side": "80",
        "rear": "80"
      },
      "turretMm": {
        "front": "185",
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
    "id": "is-3",
    "name": "IS-3",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "V",
    "battleRatings": {
      "arcade": 7.3,
      "realistic": 7.3,
      "simulator": 7.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The IS-3 is a Soviet heavy tank that introduced the pike-nose hull and a thick, rounded turret that would define postwar Soviet design. It carries the hard-hitting 122 mm D-25T and trades a slow reload and shallow gun depression for armour that is extremely difficult to penetrate frontally at its battle rating.",
    "prosCons": {
      "pros": [
        "Heavily armoured pike-nose hull deflects many frontal shots",
        "Thick, rounded turret front is hard to defeat head-on",
        "Powerful 122 mm D-25T with strong post-penetration effect",
        "Relatively light for a heavy, so it reaches a decent top speed"
      ],
      "cons": [
        "Very long reload leaves you exposed between shots",
        "Shallow -3° gun depression limits hull-down and ridge play",
        "Sluggish to turn from a standstill and slow acceleration",
        "Small 28-round ammo load"
      ]
    },
    "playstyle": "Lead with the strong pike nose and turret, angling slightly to thicken the sides while keeping the cheeks safe. Pick fights where you can land the first 122 mm shot and retreat behind cover during the long reload. Avoid cresting steep ridges because the limited depression forces you to over-expose the hull.",
    "history": "The IS-3 entered production in the closing weeks of World War II, with the first vehicles completed in May 1945. Its dramatically sloped pike-nose hull and dome-shaped turret were a leap in protection layout, but it saw little wartime combat and instead became a Cold War symbol, paraded in Berlin in 1945 and serving across numerous fronts thereafter.",
    "media": [
      {
        "src": "/vehicles/is-3.jpg",
        "alt": "A Soviet IS-3 heavy tank (IS-3M modernized variant, number 111) at the Kubinka Tank Museum, showing the signature pike-nose hull and dome turret; this is a real-world preserved vehicle, not the in-game model.",
        "credit": "Alan Wilson from Stilton, Peterborough, Cambs, UK · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "IS-3 | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_3",
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
      "maxFwdKph": 40,
      "maxRevKph": 15,
      "enginePowerHp": 671,
      "weightTons": 48,
      "powerToWeight": 10.89,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "d-25t-122mm",
      "reloadBaseSec": 26,
      "reloadAcedSec": 20,
      "vertGuidanceDeg": [
        -3,
        20
      ],
      "turretTraverseDegSec": 6.35,
      "ammoCapacity": 28,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "110",
        "side": "90",
        "rear": "60"
      },
      "turretMm": {
        "front": "250",
        "side": "172",
        "rear": "70"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "t29",
    "name": "T29",
    "nation": "usa",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "IV",
    "battleRatings": {
      "arcade": 7,
      "realistic": 7,
      "simulator": 6.7
    },
    "acquisition": [
      "gift"
    ],
    "summary": "The T29 is an American heavy tank that mounts the powerful 105 mm T5E2 in a large, well-armoured rotating turret. Its thick mantlet and turret face make it an outstanding hull-down brawler, and the 105 mm gun can knock out most contemporaries in a single hit despite the hull being thinner than its turret.",
    "prosCons": {
      "pros": [
        "Excellent 105 mm T5E2 with strong armour-piercing punch",
        "Very tough turret face and mantlet, superb hull-down",
        "Good gun depression for using ridgelines",
        "Large 63-round ammo capacity"
      ],
      "cons": [
        "Hull armour is comparatively thin and easily penetrated",
        "Low top speed; mobility is only average",
        "Large six-man crew turret is a big target",
        "Long reload between its heavy shots"
      ]
    },
    "playstyle": "Play it hull-down: crest a ridge or sit behind a low rise so only the heavily protected turret is exposed, then trade shots from safety. Use the good depression to keep the weak hull hidden. In open ground beware of being flanked, since the side and hull armour offer little protection and the tank is slow to reposition.",
    "history": "The T29 was a late-World-War-II American heavy tank program begun in 1944 to counter heavily armoured German designs such as the Tiger II. Armed with a 105 mm gun in a roomy turret, it arrived too late for wartime service and remained largely a development and testing vehicle, informing later US heavy tank work.",
    "media": [
      {
        "src": "/vehicles/t29.jpg",
        "alt": "The American Heavy Tank T29 (T29E3 development variant) photographed at Aberdeen Proving Ground in 1947, showing its long 105 mm gun and elongated turret; this is a real-world wartime-era photo, not the in-game model.",
        "credit": "Unknown (U.S. Army) · Public domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "T29 | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/us_t29",
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
      "maxFwdKph": 35,
      "maxRevKph": 14,
      "enginePowerHp": 770,
      "weightTons": 64.2,
      "powerToWeight": 12,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "t5e1-105mm",
      "reloadBaseSec": 19.4,
      "reloadAcedSec": 14.9,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": 12.6,
      "ammoCapacity": 63,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "102",
        "side": "76",
        "rear": "51"
      },
      "turretMm": {
        "front": "203",
        "side": "158",
        "rear": "102"
      },
      "crewCount": 6,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m18-hellcat",
    "name": "M18 Hellcat",
    "nation": "usa",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "III",
    "battleRatings": {
      "arcade": 5.3,
      "realistic": 6,
      "simulator": 6
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M18 GMC, nicknamed the Hellcat, is the purest expression of the U.S. tank-destroyer doctrine: trade away armour entirely for blistering speed and a fully traversable turret carrying a 76 mm gun. It darts to a firing position, lands a shot, and relocates before the enemy can answer.",
    "prosCons": {
      "pros": [
        "Exceptional top speed and acceleration for fast repositioning",
        "Full 360-degree turret traverse, rare among tank destroyers of its tier",
        "76 mm gun with capable armour-piercing rounds for its battle rating",
        "Low silhouette compared to many casemate destroyers"
      ],
      "cons": [
        "Paper-thin armour: roughly 12 mm everywhere, vulnerable to autocannons and even heavy machine guns",
        "Any penetrating hit tends to knock out multiple crew or critical modules",
        "Open-topped roof leaves the crew exposed to strafing and artillery",
        "No survivability margin in a head-on brawl"
      ]
    },
    "playstyle": "Play to the Hellcat's mobility. Use its speed to reach flanks and elevated overwatch positions before the enemy arrives, fire from concealment at exposed sides, and reverse out the moment you are spotted. Never trade blows frontally; even a single return shot is usually fatal. Pre-aim chokepoints and let the fast turret correct onto targets that appear.",
    "history": "Developed by Buick from the T70 prototype, the M18 was standardized in 1943 as a fast self-propelled anti-tank vehicle embodying the wartime U.S. doctrine of countering armour with speed and a hard-hitting gun rather than protection. It served with U.S. tank-destroyer battalions in the final years of the Second World War.",
    "media": [
      {
        "src": "/vehicles/m18-hellcat.jpg",
        "alt": "An American M18 Hellcat tank destroyer preserved at the Kubinka Tank Museum, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "M18 GMC — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m18_hellcat",
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
      "maxFwdKph": 80,
      "maxRevKph": 26,
      "enginePowerHp": null,
      "weightTons": 17.7,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m1-76mm",
      "reloadBaseSec": 7.9,
      "reloadAcedSec": 6.1,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 45,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "12 mm",
        "side": "12 mm",
        "rear": "12 mm"
      },
      "turretMm": {
        "front": "25 mm",
        "side": "12 mm",
        "rear": "12 mm"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "su-100",
    "name": "SU-100",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6,
      "realistic": 6,
      "simulator": 6
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The SU-100 is a Soviet casemate tank destroyer built on the T-34 chassis and armed with the hard-hitting 100 mm D-10S. With no rotating turret it relies on its powerful gun, sloped frontal plate, and patient positioning to dominate at range.",
    "prosCons": {
      "pros": [
        "Potent 100 mm D-10S with strong penetration and post-penetration damage",
        "Well-sloped 75 mm front plate that can deflect rounds at its battle rating",
        "T-34-derived chassis gives good cross-country mobility",
        "Compact casemate presents a relatively low frontal profile"
      ],
      "cons": [
        "Fixed casemate gun with only a narrow horizontal traverse arc",
        "Long reload punishes a missed shot",
        "Very limited gun depression hampers fighting from ridgelines",
        "Slow reverse makes disengaging from a bad position difficult"
      ]
    },
    "playstyle": "Treat the SU-100 as a long-range sniper and ambusher. Hold hull-down or covered positions where the sloped front is angled toward likely threats, and engage enemies at distance before they can flank the fixed gun. Because the casemate cannot rotate quickly, pre-aim down lanes and avoid close-quarters fights where a faster turret will out-cycle you.",
    "history": "Designed in 1944 under L. I. Gorlitskiy and produced at Uralmash, the SU-100 mated the T-34 chassis with the 100 mm D-10S to counter heavily armoured German tanks at range. It entered service in the last year of the Second World War and remained in use for decades with Soviet allies.",
    "media": [
      {
        "src": "/vehicles/su-100.jpg",
        "alt": "A Soviet SU-100 tank destroyer on display at the Imperial War Museum, Duxford, not the in-game model.",
        "credit": "David Merrett · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "SU-100 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_su_100_1945",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "enginePowerHp",
      "powerToWeight",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": 8,
      "enginePowerHp": null,
      "weightTons": 31.6,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "d-10s-100mm",
      "reloadBaseSec": 13.7,
      "reloadAcedSec": 10.5,
      "vertGuidanceDeg": [
        -3,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 33,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "75 mm",
        "side": "45 mm",
        "rear": "45 mm"
      },
      "turretMm": {
        "front": "75 mm",
        "side": "45 mm",
        "rear": "45 mm"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "dicker-max",
    "name": "Dicker Max",
    "nation": "germany",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "II",
    "battleRatings": {
      "arcade": 4,
      "realistic": 3.7,
      "simulator": 3.7
    },
    "acquisition": [
      "premium"
    ],
    "summary": "The Dicker Max (Pz.Sfl.IVa) is a German open-casemate tank destroyer on a Panzer IV chassis carrying a 105 mm K.18 gun. At its battle rating its armour-piercing round overmatches almost anything it meets, but its thin, open superstructure offers little protection in return.",
    "prosCons": {
      "pros": [
        "105 mm K.18 with overwhelming penetration for its battle rating",
        "Heavy single-shot punch that can disable most opponents outright",
        "Generous gun depression for an open casemate, good for ridgeline work",
        "Comfortable battle rating where its gun outclasses enemy armour"
      ],
      "cons": [
        "Thin armour that almost any opponent can penetrate frontally",
        "Open-topped casemate exposes the crew to strafing, shrapnel and artillery",
        "Long reload makes every shot count",
        "Sluggish, with a narrow fixed-gun traverse arc"
      ]
    },
    "playstyle": "Use the Dicker Max as a long-range first-strike platform. Set up in cover or behind teammates, pick off the most dangerous targets at distance with its high-penetration round, and relocate after firing so return fire cannot find the exposed casemate. Lean on its good depression to peek over crests while keeping the vulnerable hull hidden.",
    "history": "Conceived in 1939 as a mobile bunker-buster for the Maginot Line, the 105 mm K.18 Panzer Selbstfahrlafette IV Ausf. A arrived too late for that role; only two were built in early 1941. The pair saw combat on the Eastern Front, where the powerful gun proved effective against armour despite the vehicle's fragility.",
    "media": [
      {
        "src": "/vehicles/dicker-max.jpg",
        "alt": "A wartime photo of the German Dicker Max with the crew of schwere Panzerjager-Abteilung 521 in May 1941, not the in-game model.",
        "credit": "Unknown author · Public Domain (PD-Mark 1.0) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Dicker Max — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_pzsfl_IVa_dickermax",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxRevKph",
      "enginePowerHp",
      "powerToWeight",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 28,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 21,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "k18-105mm",
      "reloadBaseSec": 11.7,
      "reloadAcedSec": 9,
      "vertGuidanceDeg": [
        -15,
        10
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 26,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "50 mm",
        "side": "20 mm",
        "rear": "20 mm"
      },
      "turretMm": {
        "front": "30 mm",
        "side": "20 mm",
        "rear": "20 mm"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "bt-7",
    "name": "BT-7",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Light tank",
    "rank": "I",
    "battleRatings": {
      "arcade": 1.3,
      "realistic": 1.3,
      "simulator": 1.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The BT-7 is an early Soviet 'fast tank' (bystrokhodny tank) that trades armour for blistering speed. Built on the Christie suspension lineage shared with the BT-5, it pairs a thin but adequately sloped hull with the 45 mm 20-K cannon, making it a darting flanker that punishes slower opponents at the bottom of the ground tree. Its mobility is its survival: it cannot win a straight slugging match, so it relies on speed to reach side and rear shots before the enemy can react.",
    "prosCons": {
      "pros": [
        "Excellent top speed and acceleration for its battle rating",
        "45 mm 20-K gun penetrates most contemporaries from the flank",
        "Large 188-round ammunition stowage",
        "Small, low-profile hull is easy to hide"
      ],
      "cons": [
        "Paper-thin armour offers no protection against most shells",
        "Only three crew, so a single penetration often disables it",
        "Limited gun depression of -6 degrees hampers hull-down play",
        "Lightly armed against anything with frontal armour"
      ]
    },
    "playstyle": "Use the BT-7 as a scout and flanker rather than a brawler. Push wide on the map with your speed, get behind enemy lines, and aim the 45 mm 20-K at side and rear plates where it reliably penetrates. Stay moving, since standing still in such thin armour is fatal, and avoid head-on duels with anything heavier than another light tank.",
    "history": "The BT-7 was developed in the mid-1930s as the most refined of the Soviet BT series of fast tanks, derived from the American Christie design. Powered by the Mikulin M-17T, a licensed copy of the German BMW VI aircraft engine, it served from the Spanish Civil War through the Winter War with Finland and into the opening stages of Operation Barbarossa, with roughly 5,700 examples built.",
    "media": [
      {
        "src": "/vehicles/bt-7.jpg",
        "alt": "A Soviet BT-7 light tank preserved at the Verkhnyaya Pyshma Museum, not the in-game model.",
        "credit": "Tygydymhorse · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "BT-7 — official War Thunder wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_bt_7_1937",
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
      "maxFwdKph": 60,
      "maxRevKph": 12,
      "enginePowerHp": null,
      "weightTons": 13.7,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "20k-45mm",
      "reloadBaseSec": 3.8,
      "reloadAcedSec": 2.9,
      "vertGuidanceDeg": [
        -6,
        25
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 188,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "20",
        "side": "15",
        "rear": "13"
      },
      "turretMm": {
        "front": "15",
        "side": "15",
        "rear": "13"
      },
      "crewCount": 3,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "crusader-mk-ii",
    "name": "Crusader Mk II",
    "nation": "britain",
    "class": "ground",
    "subclass": "Light tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 2.7,
      "realistic": 2.7,
      "simulator": 2.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Crusader II (Tank, Cruiser Mk VIA) is a British cruiser tank that pairs a fast-firing 40 mm QF 2-pounder with a five-man crew and a tall, riveted hull. The 2-pounder lacks high-explosive shells but reloads quickly and tracks targets well, rewarding precise solid-shot aim at crew and modules. Its mobility is good but not exceptional, and its armour, though improved over the Crusader I, is still vulnerable to most guns it faces.",
    "prosCons": {
      "pros": [
        "Fast-reloading 40 mm QF 2-pounder with good accuracy",
        "Excellent gun depression of -15 degrees for hull-down positions",
        "Five-man crew improves survivability against single penetrations",
        "Reasonable mobility for flanking"
      ],
      "cons": [
        "2-pounder has no HE shell, limiting its use against soft targets",
        "Tall, lightly armoured hull is easy to hit and penetrate",
        "Very poor reverse speed makes retreating difficult",
        "Solid-shot rounds rely on hitting crew or ammo to kill"
      ]
    },
    "playstyle": "Play the Crusader II as a patient sniper and hull-down defender, exploiting the generous -15 degrees of gun depression to fight from ridgelines while keeping the hull hidden. Aim the 2-pounder at crew compartments and ammo racks since it has no HE. Plan escapes in advance because the reverse speed is dismal, and avoid open ground where its thin, tall hull is an easy target.",
    "history": "The A15 Crusader was one of Britain's principal cruiser tanks of the early Second World War, used heavily in the North African campaign. The Crusader II added thicker frontal armour over the Crusader I while retaining the 40 mm Ordnance QF 2-pounder, a gun that was effective against early Axis armour but increasingly outclassed as the war progressed and heavier vehicles appeared.",
    "media": [
      {
        "src": "/vehicles/crusader-mk-ii.jpg",
        "alt": "A British Crusader cruiser tank (Mk III shown) at The Tank Museum, Bovington, not the in-game model.",
        "credit": "Roland Turner · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Crusader II — official War Thunder wiki",
        "url": "https://wiki.warthunder.com/unit/uk_crusader_mk_2",
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
      "maxFwdKph": 47,
      "maxRevKph": 8,
      "enginePowerHp": null,
      "weightTons": 16.3,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "qf-2pdr-40mm",
      "reloadBaseSec": 3.6,
      "reloadAcedSec": 2.8,
      "vertGuidanceDeg": [
        -15,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 110,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "20",
        "side": "28",
        "rear": "14"
      },
      "turretMm": {
        "front": "52",
        "side": "24",
        "rear": "30"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m24-chaffee",
    "name": "M24 Chaffee",
    "nation": "usa",
    "class": "ground",
    "subclass": "Light tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 3.7,
      "realistic": 4,
      "simulator": 4
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M24 Chaffee is a late-war American light tank that mounts a 75 mm M6 cannon, a far harder-hitting gun than the autocannons and small-bore weapons on earlier US light tanks. It combines good mobility, an excellent reverse speed, and a low profile to excel at peek-a-boo tactics, darting out from cover to fire its 75 mm and pulling straight back before return fire arrives. Its armour is negligible, so positioning and timing matter more than any plate.",
    "prosCons": {
      "pros": [
        "Hard-hitting 75 mm M6 gun for a light tank",
        "Strong reverse speed enables quick peek-a-boo retreats",
        "Good mobility and a low silhouette",
        "Five-man crew aids survivability"
      ],
      "cons": [
        "Thin armour penetrated by almost everything it meets",
        "Slow 75 mm reload limits its rate of fire in brawls",
        "Limited 48-round ammunition capacity",
        "Modest gun depression of -10 degrees"
      ]
    },
    "playstyle": "Lean into peek-a-boo tactics: position behind cover, use the strong reverse gear to expose only briefly, fire the 75 mm M6, and pull back before the enemy can range you. Flank when possible and aim for weak points, since the slow reload punishes missed shots. Never trade blows in the open, as the M24's armour will not save it.",
    "history": "The M24 Chaffee entered service in late 1944 as a replacement for the M3/M5 Stuart light tank series, with roughly 4,731 built between 1944 and 1945. It first saw combat during the Battle of the Bulge and went on to a long postwar career in numerous armies, prized for its mobility and the relatively potent 75 mm gun fitted to a light chassis.",
    "media": [
      {
        "src": "/vehicles/m24-chaffee.jpg",
        "alt": "An American M24 Chaffee light tank in U.S. Army markings at the Auto und Technik Museum Sinsheim, not the in-game model.",
        "credit": "Alf van Beem · CC0 1.0 (Public Domain) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "M24 — official War Thunder wiki",
        "url": "https://wiki.warthunder.com/unit/us_m24_chaffee",
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
      "maxFwdKph": 63,
      "maxRevKph": 26,
      "enginePowerHp": null,
      "weightTons": 18.4,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m6-75mm",
      "reloadBaseSec": 8.4,
      "reloadAcedSec": 6.5,
      "vertGuidanceDeg": [
        -10,
        15
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 48,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "25",
        "side": "25",
        "rear": "19"
      },
      "turretMm": {
        "front": "25",
        "side": "25",
        "rear": "25"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "b-17e-flying-fortress",
    "name": "B-17E Flying Fortress",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Bomber",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": 5.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The B-17E is the first four-engine heavy bomber in the American aviation line. It pairs a heavy bristle of defensive .50-cal turrets with a respectable bomb load, rewarding patient high-altitude work over a level run to the target.",
    "prosCons": {
      "pros": [
        "Dense all-around defensive coverage from multiple 12.7 mm turrets",
        "Four engines give redundancy and the airframe absorbs considerable punishment",
        "High service ceiling lets it operate above most piston interceptors",
        "Flexible payload from many small bombs up to a pair of 2,000 lb bombs"
      ],
      "cons": [
        "Ponderous and slow to manoeuvre; cannot evade a determined fighter",
        "No forward-firing offensive guns, so it is helpless head-on",
        "Long, predictable bombing runs expose it to flak and interceptors",
        "AI gunners are unreliable against fast, jinking attackers"
      ]
    },
    "playstyle": "Climb to altitude on the way in, hold a steady heading to set up the bombsight, and let the turret crew handle anything that closes from the sides or rear. Keep speed up in shallow descents to make deflection shots harder, and never try to dogfight; the airframe is for delivering ordnance, not for turning. Spread the bomb load across multiple targets if the situation allows, since the bay carries a useful mix of sizes.",
    "history": "The B-17E was the first Flying Fortress built in large numbers, introducing the enlarged tail surfaces, a tail-gunner position, and powered dorsal and ventral turrets that defined the type's heavily defended look. Those additions added weight and prompted uprated Wright Cyclone engines. It saw early Pacific and European service before being superseded by the further-refined F and G models.",
    "media": [
      {
        "src": "/vehicles/b-17e-flying-fortress.jpg",
        "alt": "A color wartime photograph of a Boeing B-17E Flying Fortress (serial 41-2393) in flight circa 1942, not the in-game model.",
        "credit": "U.S. Air Force · Public Domain (PD-USGov-Military-Air Force) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "B-17E | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/b-17e",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": null,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 11156,
      "engineCount": 4
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "16 x 250 lb AN-M57 bombs",
        "8 x 500 lb AN-M64A1 bombs",
        "12 x 500 lb AN-M64A1 bombs",
        "6 x 1000 lb AN-M65A1 bombs",
        "2 x 2000 lb AN-M66A2 bombs"
      ]
    }
  },
  {
    "id": "he-111-h-6",
    "name": "He 111 H-6",
    "nation": "germany",
    "class": "aviation",
    "subclass": "Bomber",
    "rank": "II",
    "battleRatings": {
      "arcade": 2.7,
      "realistic": 2.7,
      "simulator": 2.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The He 111 H-6 is a versatile German medium bomber that trades speed for a deep and varied payload, including heavy single bombs, torpedoes, and a Fritz X guided bomb. It is at its best on early-tier bases and ground targets.",
    "prosCons": {
      "pros": [
        "Very flexible loadout spanning small-bomb carpets, heavy single bombs, torpedoes, and a guided bomb",
        "Two heavy bombs are enough to flatten a base at its battle rating",
        "Seven defensive machine guns give wide coverage including a tail position",
        "Low battle rating makes it forgiving to learn level bombing"
      ],
      "cons": [
        "Airframe tears apart easily under stress; not built for dive bombing",
        "Defensive gunners are weak and the rifle-calibre guns are inaccurate",
        "Slow and an easy mark for any fighter that gets close",
        "No forward-firing offensive guns to threaten head-on attackers"
      ]
    },
    "playstyle": "Fly straight, fly level, and deliver the bombs; this aircraft punishes any attempt at violent manoeuvres with structural failure. Pick the payload to suit the job, heavy bombs for bases, the torpedo or Fritz X for shipping. Stay out of the way of enemy fighters rather than relying on the gunners, and avoid steep dives entirely since the wings will not take it.",
    "history": "The H-6 was one of the most-produced He 111 sub-variants, introducing uprated Jumo 211F engines and improved defensive positions over earlier H models. It served across the Luftwaffe's bombing and anti-shipping campaigns and was adapted to carry torpedoes and early guided weapons, reflecting Germany's mid-war push toward precision strike.",
    "media": [
      {
        "src": "/vehicles/he-111-h-6.jpg",
        "alt": "A wartime photograph of a German Heinkel He 111 (variant unspecified) bombing Warsaw in September 1939, not the in-game model.",
        "credit": "PWN / EAST NEWS (anonymous) · Public Domain (PD-anon-70-EU) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "He 111 H-6 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/he-111h-6",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": null,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 480,
      "ceilingM": 8500,
      "engineCount": 2
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "32 x 50 kg SC50JA bombs",
        "8 x 250 kg SC250JA bombs",
        "8 x Flam C 250 incendiary bombs",
        "2 x 1000 kg SC1000L2 bombs",
        "2 x 1000 kg PC1000 bombs",
        "2 x 1000 kg SC1000L2 + 1 x 250 kg SC250JA bombs",
        "2 x F5W torpedoes",
        "1 x PC 1400 X (Fritz X) guided bomb"
      ]
    }
  },
  {
    "id": "pe-8",
    "name": "Pe-8",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Bomber",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.3,
      "realistic": 4.3,
      "simulator": 5.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Pe-8 is the Soviet Union's lone four-engine heavy bomber, and in-game it is famous for hauling the enormous 5,000 kg FAB-5000 bomb. It carries cannon-armed defensive turrets that bite harder than most bombers of its tier.",
    "prosCons": {
      "pros": [
        "Can carry the gigantic 5,000 kg FAB-5000, capable of wrecking clustered targets",
        "Defensive turrets include 20 mm ShVAK cannons that genuinely threaten attackers",
        "Four engines and a large airframe make it durable",
        "Good range of payloads from small-bomb carpets to a few very heavy bombs"
      ],
      "cons": [
        "Slow and unwieldy, with no chance of out-turning a fighter",
        "No forward-firing offensive guns",
        "Long bombing runs leave it exposed for extended periods",
        "Heaviest loads sharply reduce climb and handling"
      ]
    },
    "playstyle": "Decide the payload before takeoff: small bombs to spread across many targets, or the FAB-5000 for a single devastating drop on a packed objective. Climb steadily, hold a level run for accuracy, and use the cannon turrets to make attacking fighters pay rather than counting on evasion. Keep the nose pointed at the target and let the defensive crew cover the rear quarters.",
    "history": "Designed by Vladimir Petlyakov's team in the late 1930s, the Pe-8 was the only Soviet four-engine heavy bomber to see service in the Second World War. Built in small numbers, it was used for prestige long-range raids deep into German territory, including strikes on Berlin in 1941, before later examples were diverted to transport and Arctic duties.",
    "media": [
      {
        "src": "/vehicles/pe-8.jpg",
        "alt": "A 1942 U.S. Navy photograph of the Petlyakov Pe-8 (TB-7, Wnr. 42066) that flew the Soviet delegation to Washington D.C., not the in-game model.",
        "credit": "U.S. Navy (National Archives 80-G-16118) · Public Domain (PD-USGov-Navy) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Pe-8 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/pe-8_m82",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": null,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 535,
      "ceilingM": 10500,
      "engineCount": 4
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "40 x 50 kg FAB-50sv bombs",
        "40 x 100 kg FAB-100sv bombs",
        "12 x 250 kg FAB-250sv bombs",
        "6 x 500 kg FAB-500sv bombs",
        "4 x 1000 kg FAB-1000 bombs",
        "1 x 5000 kg FAB-5000 bomb"
      ]
    }
  },
  {
    "id": "ju-87-b-2",
    "name": "Ju 87 B-2",
    "nation": "germany",
    "class": "aviation",
    "subclass": "Dive bomber",
    "rank": "I",
    "battleRatings": {
      "arcade": 1.3,
      "realistic": 1,
      "simulator": 1.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Ju 87 B-2 is the first Stuka in the German line: a single-engine dive bomber whose entire identity is the bomb it carries rather than how it flies. For its rank it hauls an exceptional payload, topping out at a single 1,000 kg bomb, and its airframe takes a near-vertical dive without complaint. Level speed and turning are both poor, so the airplane lives or dies by setting up the run from altitude and pulling away before fighters arrive.",
    "prosCons": {
      "pros": [
        "Outsized bomb load for the BR, including a single 1,000 kg bomb",
        "Sturdy airframe that holds together in steep dives",
        "Generous suspended-ordnance options for ground and base targets",
        "Forgiving dive characteristics make pinpoint bombing easy to learn"
      ],
      "cons": [
        "Very poor level speed leaves it helpless once spotted",
        "Sluggish, wide-turning, and unable to dogfight",
        "Only two rifle-caliber forward guns for self defense and strafing",
        "Single rear gunner is light defensive cover against fighters"
      ]
    },
    "playstyle": "Climb to a comfortable height, line up the target, and roll into a steep dive to plant bombs precisely, then bleed your dive speed into a flat run away from the fight. Never try to turn or out-run a fighter; instead use the airframe's dive resilience to reset altitude. In ground battles the heavy bombs make it a reliable pillbox- and column-killer.",
    "history": "The Junkers Ju 87, nicknamed the Stuka from Sturzkampfflugzeug (dive-bombing aircraft), became the emblem of German close support early in the war. The B-2 production block refined the earlier B-1 with oil-hydraulic cowl flaps and fittings for tropical and winter service; roughly 225 B-2 airframes were built. Its accurate dive bombing made it devastating against soft targets when the Luftwaffe held air superiority, but its slow speed and weak defenses turned it into easy prey once enemy fighters could contest the sky.",
    "media": [
      {
        "src": "/vehicles/ju-87-b-2.jpg",
        "alt": "A Bundesarchiv wartime photograph showing a Junkers Ju 87 B Stuka of II./StG 2 alongside a Messerschmitt Me 109 E, not the in-game model.",
        "credit": "Bundesarchiv / Billhardt · CC BY-SA 3.0 Germany (CC-BY-SA 3.0 DE) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Ju 87 B-2 | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/ju-87b-2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 4100,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 680,
      "ceilingM": 7000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "mg17",
          "count": 2
        }
      ],
      "suspended": [
        "2 x 50 kg SC50JA bombs",
        "1 x 250 kg SC250JA bomb",
        "1 x 500 kg SC500K bomb",
        "1 x 1,000 kg SC1000L2 bomb",
        "1 x Flam C 250 incendiary bomb",
        "1 x Flam C 500 incendiary bomb"
      ]
    }
  },
  {
    "id": "il-2-1942",
    "name": "IL-2 (1942)",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Attacker",
    "rank": "II",
    "battleRatings": {
      "arcade": 3,
      "realistic": 3,
      "simulator": 2.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The IL-2 (1942), sometimes called the IL-2I, is the cannon-heavy Sturmovik that swaps the earlier ShVAK pairing for two hard-hitting 23 mm VYa-23 autocannons backed by two fast-firing 7.62 mm ShKAS machine guns. It pairs that gun battery with a flexible rocket and bomb suspension, all wrapped in the IL-2's famously armored tub. The trade-off is the usual one: it is heavy, slow to maneuver, and demands you fight on your own terms.",
    "prosCons": {
      "pros": [
        "Two 23 mm VYa-23 cannons shred light armor and aircraft alike",
        "Heavy, well-protected armored airframe absorbs punishment",
        "Versatile rocket and bomb suspension for varied ground targets",
        "Effective at the close-support role it was designed for"
      ],
      "cons": [
        "Heavy and unmaneuverable in a turning fight",
        "Modest top speed makes disengaging difficult",
        "Limited 23 mm ammunition count rewards trigger discipline",
        "Vulnerable to fighters that dive on it from above"
      ]
    },
    "playstyle": "Approach targets at low to medium altitude, use the VYa-23 cannons in short bursts to conserve the 300-round pool, and salvo rockets or bombs on hardened targets. Keep energy up and avoid sustained turns; let the armor shrug off return fire while you reposition for another firing pass. Against fighters, drag them toward friendlies rather than dueling.",
    "history": "The Ilyushin IL-2 was the most-produced military aircraft of the war and the backbone of Soviet ground attack. The 23 mm Volkov-Yartsev VYa-23 had been the originally intended armament, prioritized to defeat German armor, and a small number of IL-2s were re-equipped with the cannon as the IL-2I. In service the type's thick armored bathtub protecting the engine, cockpit, and fuel let it press low attacks that lighter aircraft could not survive, earning it a fearsome reputation among German ground forces.",
    "media": [
      {
        "src": "/vehicles/il-2-1942.jpg",
        "alt": "A 1940s black-and-white photograph of an Ilyushin Il-2 Sturmovik ground-attack aircraft, not the in-game model.",
        "credit": "Unknown (Soviet, uploaded by Mattes) · Public Domain (PD-Russia-1996) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "IL-2 (1942) | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/il-2i",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 2500,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 620,
      "ceilingM": 9500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "vya-23-23mm",
          "count": 2
        },
        {
          "weaponId": "shkas-7mm",
          "count": 2
        }
      ],
      "suspended": [
        "4 x ROS-82 rockets",
        "4 x RBS-82 rockets",
        "4 x ROS-132 rockets",
        "4 x ROFS-132 rockets",
        "4 x RBS-132 rockets",
        "Bomb options up to 2 x 250 kg, plus 2 x 100 kg, 2 x 50 kg, and 6 x 25 kg loads"
      ]
    }
  },
  {
    "id": "sbd-3-dauntless",
    "name": "SBD-3 Dauntless",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Dive bomber",
    "rank": "I",
    "battleRatings": {
      "arcade": 1.7,
      "realistic": 2,
      "simulator": 1.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The SBD-3 Dauntless is one of the first American bombers in the tree and the carrier dive bomber that made its name at Midway. In game it benefits from an air spawn that lets it reach and bomb a target before climbing fighters can interfere. Two cowl-mounted .50 cals give it real teeth for a bomber, and it is surprisingly nimble, able to win turn fights against heavier opponents.",
    "prosCons": {
      "pros": [
        "Air spawn enables fast, early bombing runs",
        "Two forward 12.7 mm Brownings make it dangerous head-on",
        "Maneuverable enough to out-turn many early fighters",
        "Wide selection of bombs including heavy armor-piercing options"
      ],
      "cons": [
        "Low top speed limits its ability to escape",
        "Light defensive turret against determined fighters",
        "Low service ceiling compared to dedicated bombers",
        "Bomb load is modest once the air-spawn advantage is spent"
      ]
    },
    "playstyle": "Use the air spawn to commit to bases or ground targets immediately, dropping ordnance before enemy fighters gain altitude. If intercepted, lean on the airframe's agility to turn-fight lighter early-war fighters, and use the nose .50s aggressively. Pick the heavier bombs for ships and hardened targets and save the smaller loads for soft objectives.",
    "history": "The Douglas SBD Dauntless was the U.S. Navy's principal carrier dive bomber from 1940 through late 1944. Its defining moment came at the Battle of Midway in June 1942, where SBD squadrons sank the Japanese carriers Akagi, Kaga, Soryu, and Hiryu in a matter of minutes, turning the course of the Pacific war. Rugged and accurate, it remained a trusted strike aircraft well after newer designs were available.",
    "media": [
      {
        "src": "/vehicles/sbd-3-dauntless.jpg",
        "alt": "A U.S. Marine Corps photograph of Douglas SBD Dauntless dive bombers in formation over the Solomon Islands circa 1943, not the in-game model.",
        "credit": "SSgt Greitzer, U.S. Marine Corps · Public Domain (PD-USGov-Military-Marines) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "SBD-3 | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/sbd-3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 4500,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 740,
      "ceilingM": 5700,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m3-browning-12mm",
          "count": 2
        }
      ],
      "suspended": [
        "1 x 100 lb AN-M30A1 bomb",
        "1 x 500 lb AN-M64A1 bomb",
        "1 x 1,000 lb AN-M65A1 bomb",
        "1 x 1,000 lb AP AN-Mk 33 bomb",
        "1 x 1,600 lb AP AN-Mk 1 bomb",
        "1 x 1,000 lb Type A Mark I aircraft magnetic mine"
      ]
    }
  },
  {
    "id": "wellington-mk-ic",
    "name": "Wellington Mk Ic",
    "nation": "britain",
    "class": "aviation",
    "subclass": "Bomber",
    "rank": "II",
    "battleRatings": {
      "arcade": 2,
      "realistic": 2.3,
      "simulator": 2.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Wellington Mk Ic is a rank II British twin-engine medium bomber built on Barnes Wallis's distinctive geodetic airframe. For its battle rating it offers surprising agility, a generous and unusually varied ordnance selection, and a high structural tolerance, making it a flexible base-bomber and anti-shipping platform. Its Achilles' heel is rifle-calibre-only defensive armament, so survival leans on altitude and a careful approach rather than fending off interceptors.",
    "prosCons": {
      "pros": [
        "Wide ordnance menu spanning small bombs, heavy AP bombs, the 4,000 lb H.C. blockbuster, and a pair of torpedoes",
        "Geodetic airframe is forgiving and soaks up structural punishment well",
        "Manoeuvrable for a bomber, helping it reposition or dodge a single attacker",
        "High ceiling lets it bomb from altitudes many low-tier fighters reach slowly"
      ],
      "cons": [
        "Defensive armament is entirely rifle-calibre 7.7 mm and easily suppressed",
        "Modest top speed makes diving away from interceptors difficult",
        "Large airframe is an easy target once an enemy closes in",
        "Climb to bombing altitude is slow"
      ]
    },
    "playstyle": "Climb steadily on the way to your target rather than racing in low, since speed is not this aircraft's strength. Pick an ordnance loadout to match the battle: heavy bombs or the 4,000 lb blockbuster for ground and base targets, or the twin torpedoes against ships. Bomb from as high as is practical to stay out of light flak and snap-shooting fighters, and if intercepted, use the airframe's agility to spoil one pass and let your tail and beam gunners trade fire while you head back to friendly cover. Do not expect the defensive guns to win a sustained duel.",
    "history": "Designed to Air Ministry Specification B.9/32, the Vickers Wellington introduced Barnes Wallis's geodetic lattice construction, which produced a light yet remarkably damage-tolerant structure. The Mk Ic was among the most numerous early variants, deleting the troublesome ventral turret in favour of beam gun positions. It served as a mainstay of RAF Bomber Command's early-war night offensive before being progressively relegated to maritime patrol, transport, and training as four-engine heavies took over the strategic role.",
    "media": [
      {
        "src": "/vehicles/wellington-mk-ic.jpg",
        "alt": "An Imperial War Museums photograph of Vickers Wellington Mk IC bombers of No. 149 Squadron in flight circa August 1940, not the in-game model.",
        "credit": "Ministry of Information press agency photographer (Imperial War Museums) · Public Domain (PD-UKGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Wellington Mk Ic | War Thunder Wiki (unit page; rank, BR, performance card, armament, ordnance)",
        "url": "https://wiki.warthunder.com/unit/wellington_mk1c",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 4572,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 530,
      "ceilingM": 6500,
      "engineCount": 2
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "10 x 250 lb G.P. Mk.IV bomb",
        "18 x 250 lb G.P. Mk.IV bomb",
        "9 x 500 lb G.P. Mk.IV bomb",
        "2 x 1,000 lb G.P. Mk.I bomb + 6 x 250 lb G.P. Mk.IV bomb",
        "2 x 18-inch Mark XII torpedo",
        "1 x 4,000 lb H.C. Mk.II bomb",
        "9 x 500 lb S.A.P. Mk.II bomb",
        "2 x 2,000 lb A.P. Mk.I bomb"
      ]
    }
  },
  {
    "id": "ki-21-i",
    "name": "Ki-21-Ia",
    "nation": "japan",
    "class": "aviation",
    "subclass": "Bomber",
    "rank": "I",
    "battleRatings": {
      "arcade": 2,
      "realistic": 1.7,
      "simulator": 1.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Ki-21-Ia is a rank I Japanese twin-engine bomber, the first production form of the Type 97 Heavy Bomber. Conceived as a fast, long-range raider that would outpace interceptors rather than outgun them, it pairs a high ceiling with light defensive armament and a modest bomb load. In game it serves as an entry-level base bomber that rewards altitude and discretion over confrontation.",
    "prosCons": {
      "pros": [
        "High service ceiling lets it operate above much of the early-tier opposition",
        "Twin engines give reasonable reliability for a starter bomber",
        "Good agility for its class helps shake a lone pursuer",
        "Several bomb setups, including 500 kg bombs, for flexible base and pillbox bombing"
      ],
      "cons": [
        "Defensive armament is rifle-calibre 7.7 mm only and weak against determined fighters",
        "Light bomb tonnage compared with contemporary medium bombers",
        "Unarmoured and prone to fires when hit",
        "No forward-firing offensive guns for self-defence on the approach"
      ]
    },
    "playstyle": "Treat the Ki-21-Ia as a stealthy altitude bomber: climb steadily, cruise to your target high enough that climbing interceptors arrive slow and out of energy, and drop on bases or hardened targets. Spread your bombs across multiple passes if the loadout allows so a single intercept does not waste the whole sortie. The 7.7 mm defensive guns are best used to discourage rather than destroy attackers, so position your turret arcs toward the threat and head back toward friendly airspace the moment you are committed to a fighter.",
    "history": "The Mitsubishi Ki-21 (Army Type 97 Heavy Bomber) answered a 1936 Imperial Japanese Army requirement for a modern monoplane bomber emphasising speed and range over armour and load. The Ki-21-Ia was the first production model and saw extensive use over China and in the opening campaigns of the Pacific War. As Allied fighter performance grew, the type's thin protection and light defensive battery left it increasingly vulnerable, and it was steadily supplanted and shifted to transport and secondary duties.",
    "media": [
      {
        "src": "/vehicles/ki-21-i.jpg",
        "alt": "A wartime photograph of a Mitsubishi Ki-21 (Type 97 Heavy Bomber, Ki-21-III variant shown) circa 1944, not the in-game model.",
        "credit": "IJA military reporter · Public Domain (PD-Japan-oldphoto) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Ki-21-Ia | War Thunder Wiki (unit page; rank, BR, performance card, armament, ordnance)",
        "url": "https://wiki.warthunder.com/unit/ki_21_1ko",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 400,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 540,
      "ceilingM": 8600,
      "engineCount": 2
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "20 x 50 kg Army Type 94 GPHE bomb",
        "10 x 100 kg Army Type 94 GPHE bomb",
        "4 x 250 kg Army Type 92 GPHE bomb",
        "2 x 500 kg Army Type 92 GPHE bomb"
      ]
    }
  },
  {
    "id": "sm-79",
    "name": "S.M.79 serie 1",
    "nation": "italy",
    "class": "aviation",
    "subclass": "Bomber",
    "rank": "I",
    "battleRatings": {
      "arcade": 2,
      "realistic": 1.7,
      "simulator": 2
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The S.M.79 serie 1 'Sparviero' is a rank I Italian three-engine medium bomber. Its trio of engines gives it a respectably high cruise for the low-tier matches it sees, and unusually for a bomber it carries a single pilot-aimed fixed forward 12.7 mm Breda-SAFAT for strafing. Defensive fire arcs are awkward and the bomb selection is modest, so it plays best as a fast, high-flying base bomber that occasionally noses down to strafe soft ground targets.",
    "prosCons": {
      "pros": [
        "Three engines provide good speed and redundancy for an early bomber",
        "Fixed forward 12.7 mm Breda lets the pilot strafe trucks, light AA, and the occasional aircraft",
        "Two 12.7 mm defensive guns hit harder than the rifle-calibre guns on many rivals",
        "Decent ceiling for bombing above low-tier interceptors"
      ],
      "cons": [
        "Defensive fire arcs leave large blind spots",
        "Limited bomb tonnage compared with German twin-engine bombers it competes with",
        "Fixed forward gun is a single light machine gun, weak against armoured targets",
        "Three-engine layout is a large, flammable target once cornered"
      ]
    },
    "playstyle": "Use the Sparviero's speed to reach bombing altitude quickly and strike bases or clusters of ground targets before interceptors organise. The fixed forward 12.7 mm rewards shallow strafing runs on trucks and light vehicles between bomb drops, but do not linger low where you lose your speed and altitude advantages. When defending, angle the aircraft so your 12.7 mm dorsal and ventral guns bear on the attacker and try to keep threats out of the blind zones; the heavier defensive rounds can punish a careless fighter, but evasion and friendly support remain your best protection.",
    "history": "The Savoia-Marchetti S.M.79 Sparviero began as a fast civil transport before being adapted into a three-engine bomber, becoming the most recognisable Italian bomber of the era. Blooded during the Spanish Civil War, it served throughout the Second World War, earning particular fame in the torpedo-bomber role over the Mediterranean where its crews pressed home daring low-level attacks on Allied shipping. Distinctive for its mixed wood-and-metal construction and dorsal 'hump', it remained a frontline type for the Regia Aeronautica well into the conflict.",
    "media": [
      {
        "src": "/vehicles/sm-79.jpg",
        "alt": "A wartime photograph of a Savoia-Marchetti S.M.79 Sparviero Italian bomber in flight, not the in-game model.",
        "credit": "Unknown (Regia Aeronautica) · Public Domain (PD-Italy / PD-1996) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "S.M.79 serie 1 | War Thunder Wiki (unit page; rank, BR, performance card, armament, ordnance)",
        "url": "https://wiki.warthunder.com/unit/sm_79_1936_italy",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 4000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 530,
      "ceilingM": 6800,
      "engineCount": 3
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "breda-safat-12.7mm",
          "count": 1
        }
      ],
      "suspended": [
        "12 x 50 kg GP 50 bomb",
        "12 x 100 kg GP 100T bomb",
        "5 x 250 kg GP 250 bomb",
        "2 x 500 kg GP 500 bomb"
      ]
    }
  },
  {
    "id": "t-72a",
    "name": "T-72A",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9.3,
      "realistic": 9.3,
      "simulator": 9.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The T-72A is the Soviet tech-tree's second-generation production T-72, blending a heavily armoured composite turret face, a 125 mm 2A46 smoothbore fed by a carousel autoloader, and a compact silhouette. It trades the brisk reverse and handling of its NATO rivals for a low, hard-to-hit hull and a punchy main gun.",
    "prosCons": {
      "pros": [
        "Composite armour gives a genuinely tough turret front against many same-BR rounds",
        "125 mm 2A46 hits hard with a deep APFSDS roster and HEAT-FS",
        "Carousel autoloader keeps reload consistent regardless of crew injuries",
        "Low, compact hull is easy to hide hull-down"
      ],
      "cons": [
        "Carousel ammo storage rings the crew, so a turret-ring penetration often detonates it",
        "Sluggish reverse speed and hull traverse punish positional mistakes",
        "Only three crew, so a single hit can knock the tank out",
        "Limited gun depression restricts hull-down play on ridgelines"
      ]
    },
    "playstyle": "Play the T-72A as a patient ambusher. Use the low hull to peek hull-down or to wait in cover, fire, and roll back behind concealment before the autoloader cycles. Avoid prolonged duels in the open where its weak reverse and ringed ammo carousel get exploited; instead let teammates spot while you trade single, well-aimed shots.",
    "history": "The T-72A entered Soviet service in the late 1970s as an improved Ural, adding a laser rangefinder, upgraded fire control, composite turret armour and provisions for mounting explosive reactive armour. It became one of the most widely produced main battle tanks of the Cold War and the baseline for many export and licence-built derivatives.",
    "media": [
      {
        "src": "/vehicles/t-72a.jpg",
        "alt": "A Soviet/Russian T-72A main battle tank preserved at the Australian Armoured and Artillery Museum in Cairns, not the in-game model.",
        "credit": "Ank Kumar (Ank gsx) · CC BY-SA 4.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "T-72A | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_72a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "reverseGears",
      "neutralSteering",
      "reloadBaseSec",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": 45,
      "enginePowerHp": 780,
      "weightTons": 41.8,
      "powerToWeight": 18.7,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "2a46-125mm",
      "reloadBaseSec": null,
      "reloadAcedSec": 7,
      "vertGuidanceDeg": [
        -6,
        13
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 44,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "110 mm",
        "side": "80 mm",
        "rear": "40 mm"
      },
      "turretMm": {
        "front": "125 mm",
        "side": "102 mm",
        "rear": "65 mm"
      },
      "crewCount": 3,
      "era": false,
      "composite": true,
      "aps": false
    }
  },
  {
    "id": "m1-abrams",
    "name": "M1 Abrams",
    "nation": "usa",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VII",
    "battleRatings": {
      "arcade": 10.7,
      "realistic": 10.7,
      "simulator": 10.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M1 Abrams is the first turbine-powered American MBT in the tree, pairing blistering acceleration and speed with composite armour and a 105 mm M68A1 rifled gun. It rewards aggressive flanking and flowing, mobile play over static armour trading.",
    "prosCons": {
      "pros": [
        "Gas-turbine engine delivers outstanding acceleration and top speed",
        "Strong composite armour and excellent reverse speed enable confident hull-down peeking",
        "Fast 105 mm reload and good gun handling",
        "Generous gun depression suits ridgeline and hill fighting"
      ],
      "cons": [
        "105 mm M68A1 penetration lags behind the 120/125 mm guns at its battle rating",
        "Large, tall profile is hard to conceal",
        "Hull ammo and fuel can be vulnerable to lower-plate hits",
        "Turbine is thirsty and its acoustic signature gives away movement"
      ]
    },
    "playstyle": "Exploit speed and reverse: rush to commanding positions early, fight hull-down where the turret cheeks shrug off many rounds, and back off the instant you are spotted. Flank with the turbine's pace to land side shots that offset the 105 mm's lighter punch, and avoid head-on slugfests against better-penetrating guns.",
    "history": "The M1 Abrams entered U.S. Army service in 1980 as the replacement for the M60 series, introducing a gas-turbine powerplant, Chobham-type composite armour and a modern fire-control system. The initial M1 retained the 105 mm M68 rifled gun before later variants moved to the 120 mm smoothbore.",
    "media": [
      {
        "src": "/vehicles/m1-abrams.png",
        "alt": "An early 105 mm-armed US M1 Abrams photographed at Grafenwöhr Training Area, Germany, in 1986, not the in-game model.",
        "credit": "W. B. Wilson · CC0 1.0 (also Public Domain under US law) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "M1 Abrams | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/us_m1_abrams",
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
      "weightTons": 55.7,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m68a1-105mm",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 55,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "133 mm",
        "side": "60 mm",
        "rear": "32 mm"
      },
      "turretMm": {
        "front": "139 mm",
        "side": "120 mm",
        "rear": "13 mm"
      },
      "crewCount": 4,
      "era": false,
      "composite": true,
      "aps": false
    }
  },
  {
    "id": "leopard-2a4",
    "name": "Leopard 2A4",
    "nation": "germany",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VII",
    "battleRatings": {
      "arcade": 10.7,
      "realistic": 10.7,
      "simulator": 10.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Leopard 2A4 is Germany's benchmark third-generation MBT, marrying the 120 mm Rh120 L/44 smoothbore to composite hull and turret armour and brisk mobility. Its flat, well-protected turret face and strong gun make it a classic balanced peek-and-shoot platform.",
    "prosCons": {
      "pros": [
        "120 mm Rh120 L/44 delivers excellent APFSDS penetration",
        "Composite armour in hull and turret with a strong flat turret front",
        "Good mobility and reverse speed for repositioning",
        "Generous gun depression for hull-down ridge play"
      ],
      "cons": [
        "Thin hull sides and roof leave it exposed to flanking fire",
        "Large turret and overall profile are hard to hide",
        "Lower front plate is a reliable weak spot",
        "No reactive armour to backstop the composite package"
      ]
    },
    "playstyle": "Fight hull-down and let the flat turret cheeks bounce incoming rounds while the L/44 punishes anything in your sights. Use the strong mobility to claim early angles, but keep the weak hull behind cover and avoid exposing your sides; reposition rather than brawl when flanked.",
    "history": "Introduced in the mid-1980s, the Leopard 2A4 was the most-produced Leopard 2 variant, adding an all-digital fire-control system, an automatic fire-and-explosion suppression system and an upgraded turret with improved flat armour. It became one of the most widely exported Western MBTs of its era.",
    "media": [
      {
        "src": "/vehicles/leopard-2a4.jpg",
        "alt": "A German-built Leopard 2A4 main battle tank in Finnish Defence Forces service during a parade in Lahti, 2005, not the in-game model.",
        "credit": "Olli-Jukka Paloneva · CC BY-SA 2.5 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Leopard 2A4 | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_2a4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "enginePowerHp",
      "weightTons",
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
      "weightTons": null,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "rh120-l44-120mm",
      "reloadBaseSec": 7.8,
      "reloadAcedSec": 6,
      "vertGuidanceDeg": [
        -9,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 42,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "80 mm",
        "side": "65 mm",
        "rear": "25 mm"
      },
      "turretMm": {
        "front": "80 mm",
        "side": "80 mm",
        "rear": "25 mm"
      },
      "crewCount": 4,
      "era": false,
      "composite": true,
      "aps": false
    }
  },
  {
    "id": "f-4c-phantom",
    "name": "F-4C Phantom II",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VII",
    "battleRatings": {
      "arcade": 10.7,
      "realistic": 10,
      "simulator": 10.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The F-4C is the first USAF production variant of the Phantom II and War Thunder's quintessential mid-to-high-tier American multirole. Two J79 turbojets give it brutal acceleration and a Mach 2-plus top end, and a deep pylon menu lets it swing between radar-guided BVR interception, IR dogfighting and a heavy strike load. Crucially it carries no built-in cannon, so engagements lean entirely on missiles unless you bolt on a draggy 20 mm gun pod.",
    "prosCons": {
      "pros": [
        "Excellent acceleration and very high top speed from twin J79 engines",
        "AIM-7 Sparrow radar missiles allow beyond-visual-range engagements",
        "Flexible loadout covers air superiority and ground strike on the same airframe",
        "Strong energy retention rewards boom-and-zoom play"
      ],
      "cons": [
        "No internal cannon; close-in gun work requires a heavy, draggy gun pod",
        "Sluggish sustained turn compared with dedicated dogfighters",
        "Early Sparrows and Sidewinders are easy to defeat with maneuvers and flares",
        "Large airframe is an easy target once it bleeds energy"
      ]
    },
    "playstyle": "Fight on the vertical and keep your speed high. Use the radar and AIM-7 Sparrows to threaten enemies before the merge, then convert energy into climbs and dives rather than trying to out-turn nimbler opponents. Save AIM-9 Sidewinders for cleanup shots on distracted or slow targets, and disengage to rebuild energy whenever you lose the advantage. Reserve a gun pod only if you expect to be forced into a knife fight, since it noticeably hurts performance.",
    "history": "McDonnell Douglas developed the F-4C as the US Air Force's adaptation of the Navy's F-4B. The first production aircraft flew in May 1963 and exceeded Mach 2 on its maiden flight. Produced from 1963 to 1966, the type saw extensive combat over Vietnam and soldiered on in USAF and Air National Guard service into the late 1980s. Its lack of an internal gun, reflecting contemporary missile-centric doctrine, became a recurring lesson that later Phantom variants and US fighter design would address.",
    "media": [
      {
        "src": "/vehicles/f-4c-phantom.jpg",
        "alt": "A USAF McDonnell Douglas F-4C Phantom II (serial 64-0829, a MiG-killer over Vietnam) at the National Museum of the United States Air Force, not the in-game model.",
        "credit": "U.S. Air Force · Public Domain (PD-USGov-Military-Air Force) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "F-4C Phantom II | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/f-4c",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 2228,
      "maxSpeedAltM": 12192,
      "climbMps": 172,
      "turnTimeSec": 26,
      "structuralLimitKph": 1458,
      "ceilingM": 16000,
      "engineCount": 2
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "4 x AIM-7D Sparrow",
        "4 x AIM-9B/9E Sidewinder",
        "AGM-12B/12C Bullpup air-to-ground missiles",
        "Mk 81 / Mk 82 / Mk 83 / Mk 84 bombs",
        "M117 / M118 bombs",
        "BLU-1 / BLU-27 incendiary bombs",
        "FFAR Mighty Mouse rockets (57)",
        "Zuni Mk 32 rockets (12)",
        "20 mm gun pods",
        "600 gal drop tanks"
      ]
    }
  },
  {
    "id": "mig-23m",
    "name": "MiG-23M",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VII",
    "battleRatings": {
      "arcade": 11.3,
      "realistic": 11,
      "simulator": 11
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The MiG-23M is the Soviet tech tree's first true variable-geometry interceptor and its first fighter with medium-range radar missiles for BVR work. A single powerful R-29 turbojet pushes it past Mach 2, swing-wings let it trade dogfight agility for raw acceleration, and an IRST paired with R-23T missiles gives it interception tricks few rivals can match. It pays for this with a fragile airframe that sheds wings under hard maneuvering and a notably small countermeasure load.",
    "prosCons": {
      "pros": [
        "First Soviet fighter with R-23R/R-23T medium-range BVR missiles",
        "IRST enables passive infrared launches with the R-23T",
        "Very high top speed and strong acceleration from the R-29 engine",
        "Variable-geometry wing tunes the aircraft between agility and speed",
        "Fast-firing GSh-23L cannon for close-range work"
      ],
      "cons": [
        "Fragile airframe rips its wings when overstressed",
        "Very limited countermeasures (chaff/flares)",
        "Poor sustained turn rate; relies on energy rather than maneuver",
        "Only 200 rounds for the cannon"
      ]
    },
    "playstyle": "Lean on avionics, not the airframe. Open engagements with radar and R-23R missiles at range, then close with R-23T infrared shots cued by the IRST against flaring targets. Keep the wings swept and your speed high to exploit acceleration, and avoid prolonged turning fights that will both bleed your energy and risk a structural failure. Husband your countermeasures and disengage early when threatened.",
    "history": "The MiG-23 (NATO: Flogger) was Mikoyan-Gurevich's variable-geometry successor to the MiG-21, intended to combine high speed, useful range and beyond-visual-range missile capability. The MiG-23M was the first large-scale production fighter variant, fitted with the Sapfir-23D radar and a TP-23 IRST, which allowed it to employ the R-23R and R-23T medium-range missiles. It became one of the most widely produced Soviet fighters of its era and served across the Warsaw Pact and many export operators.",
    "media": [
      {
        "src": "/vehicles/mig-23m.jpg",
        "alt": "A Mikoyan MiG-23MF 'Flogger-B' (serial 3646) preserved at the Prague Aviation Museum, not the in-game model.",
        "credit": "Alf van Beem · CC0 1.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "MiG-23M | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/mig_23m",
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
      "maxSpeedKph": 2358,
      "maxSpeedAltM": 13000,
      "climbMps": 170,
      "turnTimeSec": 35,
      "structuralLimitKph": null,
      "ceilingM": 16000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "gsh-23l-23mm",
          "count": 1
        }
      ],
      "suspended": [
        "R-23R radar-guided missiles",
        "R-23T infrared missiles",
        "R-60M infrared missiles",
        "R-13M1 infrared missiles",
        "R-3S infrared missiles",
        "Kh-23M air-to-ground missiles",
        "S-5KP rockets (16/32)",
        "S-8KO rockets (20)",
        "S-24B rockets",
        "FAB-250M-62 / FAB-500M-62 bombs",
        "OFAB-100 bombs (4)",
        "ZB-500 incendiary bomb",
        "drop tank"
      ]
    }
  },
  {
    "id": "mirage-iiic",
    "name": "Mirage IIIC",
    "nation": "france",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VII",
    "battleRatings": {
      "arcade": 10.3,
      "realistic": 10,
      "simulator": 10.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Mirage IIIC is the opening French delta jet, a single-engine interceptor that flies supersonically at any altitude and combines excellent flight performance with strong maneuverability for its tier. A single Atar 9B with afterburner drives it past Mach 2, twin 30 mm DEFA cannons give it real punching power, and a handful of pylons carry early radar and infrared missiles. Light wing loading makes it a more willing turner than most of its Mach 2 contemporaries.",
    "prosCons": {
      "pros": [
        "Excellent overall flight performance; supersonic at any altitude",
        "Light wing loading makes it surprisingly agile for a delta",
        "Two hard-hitting 30 mm DEFA cannons",
        "Carries both infrared and radar-guided missiles"
      ],
      "cons": [
        "Delta wing bleeds energy badly in sustained turns",
        "Early missiles are easily defeated by maneuvering and flares",
        "Single engine offers no redundancy",
        "Modest missile count compared with later jets"
      ]
    },
    "playstyle": "Exploit the delta's energy and altitude. Climb to use the aircraft's supersonic performance, then make slashing high-speed passes with the DEFA cannons rather than committing to a turning duel that drains the delta's energy. Use AIM-9B or Matra missiles to pressure targets before the merge, and keep your speed up so you can extend, reset and re-engage on your terms.",
    "history": "The Mirage IIIC was the first production model of Dassault's Mirage III family, derived closely from the preproduction IIIA with a revised fuselage. Built as both interceptor and dogfighter, it paired a tailless delta wing with an Atar 09B afterburning turbojet and could lift a supersonic drop tank or a modest strike load. Around 95 were produced, and the type served until 1988, helping establish the long and influential line of Dassault deltas.",
    "media": [
      {
        "src": "/vehicles/mirage-iiic.jpg",
        "alt": "A French Air Force Dassault Mirage IIIC at Orange Air Base open day in May 2008, not the in-game model.",
        "credit": "Jerry Gunner · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Mirage IIIC | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/mirage_3c",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 2160,
      "maxSpeedAltM": 12000,
      "climbMps": 140,
      "turnTimeSec": 28,
      "structuralLimitKph": 1460,
      "ceilingM": 16000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "defa-552-30mm",
          "count": 2
        }
      ],
      "suspended": [
        "AIM-9B Sidewinder missiles",
        "Matra R530 / R530E radar/IR missiles",
        "Matra R550 Magic 1 infrared missiles",
        "Matra R511 missiles",
        "AS-30 Nord air-to-ground missiles",
        "FZ49 HEAT rockets (7)",
        "Type 23 SNEB rockets (18)",
        "250 / 400 kg bombs (standard or retarded)",
        "1300 L drop tank",
        "SEPR 841 rocket booster"
      ]
    }
  },
  {
    "id": "type-74",
    "name": "Type 74",
    "nation": "japan",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9,
      "realistic": 9,
      "simulator": 9
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Japan's home-grown second-generation main battle tank, the Type 74 pairs the proven 105 mm L7 rifled gun with hydropneumatic suspension that lets it pitch the hull to gain extra gun depression or hunker down behind cover. Armour is thin by the standards of its battle rating, so it lives and dies on positioning, its laser rangefinder, and that adjustable stance.",
    "prosCons": {
      "pros": [
        "Hydropneumatic suspension adjusts hull height and pitch for hull-down and ridge fighting",
        "105 mm L7 fires the full Western APFSDS/HEATFS suite with reliable post-penetration effect",
        "Laser rangefinder speeds up first-shot accuracy at range",
        "Compact silhouette is easy to hide"
      ],
      "cons": [
        "Thin hull and turret armour offer little protection at its BR",
        "Modest gun depression in the neutral stance until suspension is adjusted",
        "Average reverse and acceleration make repositioning slow",
        "Four-man crew with exposed ammo stowage is fragile once penetrated"
      ]
    },
    "playstyle": "Fight from prepared positions and ridgelines where the suspension can be tilted to expose only the turret while keeping the hull hidden. Range targets with the laser rangefinder, take the first accurate shot, then back off and relocate before return fire arrives. Avoid open brawls; the armour will not save you, so trade angles and sightlines instead of frontal exposure.",
    "history": "Developed by Mitsubishi Heavy Industries as the successor to the Type 61, the Type 74 entered service in 1975 to give Japan a tank competitive with contemporary Western designs. It standardised on the British-derived 105 mm L7 rifled gun and introduced a hydropneumatic suspension allowing the hull to be raised, lowered, and tilted to suit terrain. Roughly 870 were built through the late 1980s, and the type served as a mainstay of the Japan Ground Self-Defense Force for decades.",
    "media": [
      {
        "src": "/vehicles/type-74.jpg",
        "alt": "A Japanese JGSDF Type 74 main battle tank displayed at the JGSDF Ordnance School in Tsuchiura, not the in-game model.",
        "credit": "Megapixie (Max Smith) · Public Domain (released by author) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Type 74 (E) — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/jp_type_74",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxRevKph",
      "reverseGears",
      "neutralSteering",
      "era",
      "composite",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 53.59,
      "maxRevKph": null,
      "enginePowerHp": 870,
      "weightTons": 39.938,
      "powerToWeight": 21.82,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "l7-105mm",
      "reloadBaseSec": 8.7,
      "reloadAcedSec": 6.7,
      "vertGuidanceDeg": [
        -6,
        9
      ],
      "turretTraverseDegSec": 16.8,
      "ammoCapacity": 50,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "80 mm",
        "side": "30 mm",
        "rear": "20 mm"
      },
      "turretMm": {
        "front": "132 mm",
        "side": "67 mm",
        "rear": "37 mm"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "chieftain-mk-3",
    "name": "Chieftain Mk 3",
    "nation": "britain",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VI",
    "battleRatings": {
      "arcade": 8.7,
      "realistic": 8.7,
      "simulator": 8.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Britain's heavy-hitting Cold War main battle tank, the Chieftain Mk 3 trades speed for a very well-armoured turret and the hard-punching 120 mm L11 rifled gun. Deep gun depression and a strong mantlet make it a natural hull-down sniper, while the lower front plate remains a classic weak spot to protect.",
    "prosCons": {
      "pros": [
        "120 mm L11 delivers heavy single-shot damage with potent APDS/HESH",
        "Thick, well-shaped turret front excels in hull-down positions",
        "Generous -10 degrees of gun depression for ridge fighting",
        "Large 53-round ammunition stowage"
      ],
      "cons": [
        "Sluggish — low power-to-weight makes repositioning and pushing slow",
        "Weak lower front hull plate is easily penetrated frontally",
        "Long reload compared with autoloader-equipped peers",
        "Bulky profile is hard to conceal when on the move"
      ]
    },
    "playstyle": "Play it as a defensive sniper: find a hull-down spot, expose only the heavily armoured turret, and use the deep depression to cover approaches while keeping the vulnerable hull plate hidden. Let the 120 mm punish anything that shows itself. Avoid flanking duties and open ground — the poor mobility and exposed lower plate make aggressive play risky.",
    "history": "The Chieftain entered British Army service in the 1960s as a successor to the Centurion, emphasising firepower and protection over mobility. It introduced the rifled 120 mm L11 gun firing separated ammunition and a heavily armoured cast turret, along with a reclined driving position to keep the hull profile low. The Mk 3 was a mid-life production standard with engine and auxiliary improvements; the family soldiered on into the 1990s and influenced later British designs.",
    "media": [
      {
        "src": "/vehicles/chieftain-mk-3.jpg",
        "alt": "A British FV4201 Chieftain Mk.11C main battle tank preserved at The Tank Museum, Bovington, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Chieftain Mk 3 — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_chieftain_mk_3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "reverseGears",
      "neutralSteering",
      "era",
      "composite",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 49.54,
      "maxRevKph": 11.13,
      "enginePowerHp": 660,
      "weightTons": 56.41,
      "powerToWeight": 11.8,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "l11-120mm",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": 14.1,
      "ammoCapacity": 53,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "86 mm",
        "side": "38 mm",
        "rear": "25 mm"
      },
      "turretMm": {
        "front": "280 mm",
        "side": "86 mm",
        "rear": "45 mm"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "j29-tunnan",
    "name": "J29A",
    "nation": "sweden",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "V",
    "battleRatings": {
      "arcade": 8,
      "realistic": 7.7,
      "simulator": 8
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Sweden's first mass-produced jet fighter, the barrel-shaped J29 'Tunnan' was one of Europe's earliest swept-wing jets. The early J29A is light, nimble for its era, and armed with a battery of four 20 mm cannon, rewarding pilots who keep it in the turn fight rather than the energy fight against faster contemporaries.",
    "prosCons": {
      "pros": [
        "Four 20 mm cannon give a dense, hard-hitting forward battery",
        "Good low- to medium-speed manoeuvrability for a first-generation jet",
        "Compact airframe is a small target",
        "Comfortable cannon ammunition load"
      ],
      "cons": [
        "Modest top speed and acceleration versus later jets at its rating",
        "Early swept wing bleeds energy quickly in sustained turns",
        "Limited and dated armament options compared with missile-armed peers",
        "Compression and handling limits at high speed"
      ]
    },
    "playstyle": "Fight at the speeds where the Tunnan is comfortable: merge, then use its turn rate to gain angles rather than trying to out-run faster jets. Conserve energy, avoid prolonged high-speed dives, and bring the four cannon to bear in short decisive bursts. Disengage and re-position if an opponent forces a vertical energy fight you cannot win.",
    "history": "Designed by SAAB in the late 1940s, the SAAB 29 'Flygande Tunnan' (Flying Barrel) was among the first European jets to adopt swept wings, a layout informed by captured German aerodynamic research. Powered by a license-built de Havilland Ghost turbojet, it gave Sweden a genuinely modern fighter alongside the MiG-15 and F-86. The type served the Swedish Air Force for years and even flew UN peacekeeping sorties over the Congo in the early 1960s, making it the first Swedish-designed jet to see combat.",
    "media": [
      {
        "src": "/vehicles/j29-tunnan.jpg",
        "alt": "A Saab 29 Tunnan (S 29C, registration 29970) preserved at the Swedish Air Force Museum in Linköping, not the in-game model.",
        "credit": "Stefan Sjogren (Brorsson) · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "J29A — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/saab_j29a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "climbMps",
      "turnTimeSec",
      "suspended"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 1028,
      "maxSpeedAltM": 0,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1102,
      "ceilingM": 13500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "akan-m47c-20mm",
          "count": 4
        }
      ]
    }
  },
  {
    "id": "ah-1g-cobra",
    "name": "AH-1G Cobra",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "V",
    "battleRatings": {
      "arcade": 8.7,
      "realistic": 8,
      "simulator": 8
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The AH-1G is the opening rotor-wing vehicle of the US helicopter line: a slim, single-engine gunship adapted from the UH-1 airframe. It leans on a chin turret packed with miniguns and 40 mm grenade launchers plus stub-wing rocket and gun pods, making it a saturation-fire platform rather than a precision tank hunter.",
    "prosCons": {
      "pros": [
        "Dense, sustained suppressive fire from twin miniguns with a very large ammo pool",
        "Flexible chin turret pairs miniguns with 40 mm grenade launchers",
        "Slim profile is a smaller target than bulkier gunships",
        "Generous selection of rocket and gun pods for stub-wing loadouts"
      ],
      "cons": [
        "No guided anti-tank missiles, so armour kills rely on rockets and gunnery",
        "Single engine and light structure offer little survivability under fire",
        "Modest top speed limits the ability to disengage quickly"
      ]
    },
    "playstyle": "Hover or skim at low altitude near cover, walk the turret onto soft targets and exposed crews, and salvo unguided rockets at armour or emplacements. Without ATGMs you must close to gun range, so use terrain to mask your approach and pull back the moment SPAA spots you.",
    "history": "Bell had explored helicopter gunships since the late 1950s, mating fixed guns, a turret and stub-wing hardpoints to a sleeker development of the proven UH-1 Iroquois. The prototype first flew on 7 September 1965, drew strong official interest, and won the production contract in April 1966, making the AH-1G the first model of the long-lived Cobra family.",
    "media": [
      {
        "src": "/vehicles/ah-1g-cobra.jpg",
        "alt": "A Bell AH-1 Cobra single-engine attack helicopter in low-level flight during exercise Brave Shield XIX (1979), not the in-game model.",
        "credit": "SSGT Bob Fehringer, U.S. Air Force / U.S. Department of Defense · Public Domain (PD-USGov-Military-Air Force) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "AH-1G | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ah_1g",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 1000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 3475,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m134-minigun-762mm",
          "count": 2
        },
        {
          "weaponId": "m129-grenade-40mm",
          "count": 2
        }
      ],
      "suspended": [
        "7 x FFAR Mighty Mouse rockets",
        "19 x FFAR Mighty Mouse rockets",
        "7.62 mm M134 Minigun gun pod",
        "20 mm M195 cannon pod",
        "M18A1 gun pod",
        "XM-35 gun pod"
      ]
    }
  },
  {
    "id": "mi-24p",
    "name": "Mi-24P",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 10,
      "realistic": 9.7,
      "simulator": 9.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Mi-24P is the dedicated anti-armour version of the heavily built Hind gunship. In place of the Mi-24V's gunner-aimed chin turret it carries a fixed side-mounted twin-barrel 30 mm cannon borrowed from the Su-25, backed by Shturm guided missiles, rocket pods and a choice of air-to-air missiles for self-defence.",
    "prosCons": {
      "pros": [
        "Hard-hitting fixed 30 mm cannon with a very high rate of fire",
        "Shturm ATGMs give reliable stand-off anti-tank capability",
        "Twin engines and a sturdy armoured airframe improve survivability",
        "Can carry R-60 / R-60M air-to-air missiles to fend off aircraft"
      ],
      "cons": [
        "Fixed cannon must be aimed with the whole airframe rather than a turret",
        "Large, heavy silhouette is easy for SPAA to spot and engage",
        "Handling is less nimble than lighter scout-style gunships"
      ]
    },
    "playstyle": "Fight at the edge of your missile range, launching Shturms from behind cover and ducking back down before SPAA reacts. The fixed 30 mm rewards committed gun runs on light vehicles and helicopters, while R-60 missiles let you punish careless attackers, but always respect your own bulk and stay low.",
    "history": "In 1981 a dedicated anti-tank Hind was developed by replacing the Mi-24V's gunner-controlled 12.7 mm nose turret with a pilot-controlled fixed twin-barrel 30 mm cannon adapted from the Su-25. The resulting Mi-24P entered service quickly and was widely exported alongside the Mi-24V, becoming one of the most recognisable Soviet attack helicopters.",
    "media": [
      {
        "src": "/vehicles/mi-24p.jpg",
        "alt": "A Mil Mi-24P (Hind-F) gunship in former East German markings preserved at the Luftwaffenmuseum Berlin-Gatow, not the in-game model.",
        "credit": "MoRsE · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Mi-24P | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/mi_24p",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 1000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 4950,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "gsh-30k-30mm",
          "count": 1
        }
      ],
      "suspended": [
        "9M114 Shturm ATGMs",
        "S-8KO rocket pods",
        "S-24 rockets",
        "R-60 air-to-air missiles",
        "R-60M air-to-air missiles",
        "GSh-23L 23 mm cannon pod",
        "GShG-7.62 / YaK-B machine gun pods",
        "OFAB-250sv 250 kg bomb",
        "FAB-500M-54 500 kg bomb"
      ]
    }
  },
  {
    "id": "bo-105-pah-1",
    "name": "Bo 105 PAH-1",
    "nation": "germany",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9.7,
      "realistic": 9.3,
      "simulator": 9.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Bo 105 PAH-1 is West Germany's light anti-tank helicopter: tiny, quick and agile, built around a roof-mounted launcher for HOT guided missiles. It carries no built-in cannon, trading armour and firepower for a small profile and the ability to pop up, fire missiles and slip back behind cover.",
    "prosCons": {
      "pros": [
        "Small, light and very manoeuvrable, hard to spot and hit",
        "HOT-1 ATGMs deliver accurate, hard-hitting anti-tank fire",
        "Fast for its class, making hit-and-run attacks easy",
        "Twin engines for a light helicopter"
      ],
      "cons": [
        "No fixed cannon or machine gun, so it is helpless once missiles run dry",
        "Essentially no armour; small-arms or SPAA fire can cripple it instantly",
        "Limited defensive options beyond countermeasures and optional gun pods"
      ]
    },
    "playstyle": "Play it as a missile sniper: stay masked by terrain, rise just enough to lock and guide a HOT missile onto armour, then drop back down. With no cannon you should never trade fire directly, so manage missile stocks carefully and lean on your speed and small size to relocate after each shot.",
    "history": "Derived from the Bo 105M multi-purpose helicopter by MBB, the Bo 105 PAH-1 (Panzerabwehrhubschrauber, 'anti-tank helicopter') could carry up to six HOT missiles. Between 1979 and 1984 the West German Army received 212 examples. Its inability to fight at night and its fragility eventually saw it replaced by the Eurocopter Tiger, with the last German Bo 105s retiring in 2016.",
    "media": [
      {
        "src": "/vehicles/bo-105-pah-1.jpg",
        "alt": "A German Army MBB Bo 105P (the PAH-1 anti-tank variant), serial 87+08, on display at Hermeskeil, not the in-game model.",
        "credit": "Alf van Beem · CC0 1.0 (Public Domain Dedication) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "BO 105 PAH-1 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/bo_105pah1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 0,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 5180,
      "engineCount": 2
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "HOT-1 ATGMs (up to 6)",
        "12.7 mm FN M3P machine gun pods",
        "FFAR Mighty Mouse rocket pods",
        "Countermeasures (30)"
      ]
    }
  },
  {
    "id": "sa-342m-gazelle",
    "name": "SA.342M Gazelle",
    "nation": "france",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9.3,
      "realistic": 9.7,
      "simulator": 9.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A light French scout-attack helicopter built around the HOT anti-tank missile. The 342M trades the earlier 341F's nose autocannon for a second weapon pylon and adds a thermal imager, making it a quick, nimble missile carrier that relies on standoff range and small size rather than armour to survive.",
    "prosCons": {
      "pros": [
        "Carries up to four HOT ATGMs with strong penetration",
        "Thermal imaging gunner sight for spotting and night targeting",
        "Small, agile airframe that hides well in terrain",
        "Can mount Mistral air-to-air missiles for self-defence"
      ],
      "cons": [
        "No fixed gun, so no quick answer to nearby threats",
        "Very fragile - a single hit can be fatal",
        "Modest top speed and climb limit repositioning",
        "Light ordnance load compared with dedicated gunships"
      ]
    },
    "playstyle": "Hover or perch behind cover at the edge of the map, pop up to lase and guide HOT missiles onto armour, then drop back down before return fire arrives. Use the thermal sight to find targets first. Keep Mistrals ready for enemy helicopters, and never get drawn into a close-range knife fight - with no gun and paper-thin survivability, distance is the only defence.",
    "history": "The SA.342M was the French Army (ALAT) anti-tank variant of the Aerospatiale Gazelle, fielded from the mid-1980s with a more powerful Astazou engine, upgraded optics and avionics, and pylons for the HOT wire-guided missile. Gazelles of this type saw combat in the Gulf War and remained a frontline ALAT type for decades before being gradually retired.",
    "media": [
      {
        "src": "/vehicles/sa-342m-gazelle.jpg",
        "alt": "A French Army (ALAT) Aerospatiale SA 342M Gazelle photographed in flight over the Pyrenees in 2001, not the in-game model.",
        "credit": "Eric Gaba (Sting) · CC BY-SA 2.5 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "SA.342M Gazelle | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sa_342m",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": null,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 5000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "HOT-1 ATGMs",
        "HOT-2 ATGMs",
        "Mistral air-to-air missiles",
        "FFAR Mighty Mouse rocket pods"
      ]
    }
  },
  {
    "id": "a129-mangusta",
    "name": "A129CBT",
    "nation": "italy",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VII",
    "battleRatings": {
      "arcade": 9.7,
      "realistic": 11,
      "simulator": 9.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Italy's purpose-built attack helicopter, the Mangusta Combat pairs a chin-mounted 20 mm turret cannon with a deep, flexible weapons load - TOW-2 and Hellfire ATGMs, Hydra-70 rockets, and both ATAS and Mistral air-to-air missiles. It is a true gunship rather than a light scout.",
    "prosCons": {
      "pros": [
        "Chin turret 20 mm cannon for close defence and soft targets",
        "Carries both TOW-2 and AGM-114B Hellfire ATGMs",
        "ATAS and Mistral missiles give real air-to-air teeth",
        "Twin-engine design and Hydra-70 rocket options"
      ],
      "cons": [
        "High Realistic battle rating faces top-tier opposition",
        "Still a helicopter - vulnerable to SPAA and fighters",
        "Cannon ammo pool is limited for sustained strafing",
        "Large signature compared with a light scout helicopter"
      ]
    },
    "playstyle": "Use the turret cannon to deal with light vehicles and to fend off helicopters at close range, but lead with standoff ATGMs from cover. Mix Hellfires for fire-and-forget shots with TOWs when you need them, and keep ATAS or Mistral selected to ambush enemy helicopters. Respect the high BR matchups - stay masked by terrain and let the missiles do the long-range work.",
    "history": "The Agusta A129 Mangusta was the first dedicated attack helicopter designed and built entirely in Western Europe, developed for the Italian Army from the late 1970s and first flown in 1983. The A129CBT (Combat) upgrade brought modernised avionics and an expanded Western weapons fit; Italian Mangustas served in theatres including Iraq and Afghanistan.",
    "media": [
      {
        "src": "/vehicles/a129-mangusta.jpg",
        "alt": "An Italian Army Agusta A129 Mangusta attack helicopter at the Giornata Azzurra 2006 airshow, Pratica di Mare, not the in-game model.",
        "credit": "SCDBob · CC BY-SA 2.5 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "A129CBT | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/a_129_cbt",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": null,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 5400,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "tm197b-20mm",
          "count": 1
        }
      ],
      "suspended": [
        "BGM-71D TOW-2 ATGMs",
        "AGM-114B Hellfire ATGMs",
        "Hydra-70 M247 70 mm rocket pods",
        "ATAS (AIM-92) air-to-air missiles",
        "Mistral air-to-air missiles"
      ]
    }
  },
  {
    "id": "lynx-ah1",
    "name": "Lynx AH.Mk.1",
    "nation": "britain",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9.7,
      "realistic": 10.7,
      "simulator": 10
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A fast, agile British utility helicopter pressed into the attack role. The Lynx AH.Mk.1 has no built-in gun but hauls a versatile suspended load: TOW-2 and Hellfire ATGMs, Hydra-70 rockets, ATAS missiles, and an optional 20 mm Oerlikon gun pod.",
    "prosCons": {
      "pros": [
        "Fast and very maneuverable for a helicopter",
        "Carries both TOW-2 and AGM-114B Hellfire ATGMs",
        "Optional 20 mm Oerlikon gun pod adds gun firepower",
        "ATAS missiles allow helicopter-vs-helicopter combat"
      ],
      "cons": [
        "No permanently fixed gun - cannon is an optional pod",
        "Low ceiling limits high-altitude standoff",
        "Lightly protected and easy to destroy if caught",
        "Carrying a gun pod competes with missile capacity"
      ]
    },
    "playstyle": "Exploit the Lynx's speed to reach firing positions quickly, then guide TOWs or fire-and-forget Hellfires from behind terrain. Add the 20 mm Oerlikon pod when you expect close engagements or light targets, and keep ATAS ready for enemy helicopters. Because protection is minimal, treat every pop-up as brief: lase, launch, and re-mask before SPAA can range you.",
    "history": "The Westland Lynx grew out of a 1960s Westland programme to replace the Scout and Wasp; the prototype first flew in 1971. The AH.Mk.1 army variant served the British Army Air Corps in conflicts from the Falklands and the Gulf War to the Balkans and anti-piracy patrols off Somalia, typically armed with TOW anti-tank missiles.",
    "media": [
      {
        "src": "/vehicles/lynx-ah1.jpg",
        "alt": "A Westland Lynx AH.7 (Mk 7) carrying soldiers externally during flight operations, not the in-game model.",
        "credit": "U.S. Government (Technical Order 00-105e-9) · Public Domain (PD-USGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Lynx AH.Mk.1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/lynx_ah_mk1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": null,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 3500,
      "engineCount": 2
    },
    "armament": {
      "fixed": [],
      "suspended": [
        "BGM-71D TOW-2 ATGMs",
        "AGM-114B Hellfire ATGMs",
        "Hydra-70 M247 70 mm rocket pods",
        "ATAS (AIM-92) air-to-air missiles",
        "20 mm Oerlikon KAD-B gun pod"
      ]
    }
  },
  {
    "id": "ka-50",
    "name": "Ka-50",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 10.7,
      "realistic": 11.3,
      "simulator": 10.3
    },
    "acquisition": [
      "premium"
    ],
    "summary": "Single-seat Soviet anti-tank helicopter built around the long-reach Vikhr beam-riding missile and a hull-mounted 30 mm 2A42 autocannon. The coaxial rotor layout gives it tight, tail-rotor-free handling and a high top speed for a rotorcraft.",
    "prosCons": {
      "pros": [
        "Vikhr ATGMs reach far out (long stand-off engagement range)",
        "Powerful, accurate hull-mounted 30 mm 2A42 with a deep 460-round magazine",
        "Coaxial rotors remove tail-rotor vulnerability and aid agility",
        "Igla air-to-air missiles for self-defence against other helicopters and slow aircraft"
      ],
      "cons": [
        "Single seat means the pilot manages flying and targeting alone",
        "Cannon is fixed to the airframe, so the whole helicopter must be aimed",
        "Faces top-tier SPAA and radar-guided missiles at its battle rating",
        "Premium-only acquisition"
      ]
    },
    "playstyle": "Hold stand-off range and pop up from terrain masking to loose Vikhr missiles, then duck back behind cover. Use the 2A42 for light vehicles, exposed crews, and finishing damaged targets up close, and keep Iglas ready for enemy helicopters.",
    "history": "The Ka-50 (NATO reporting name Hokum) grew out of the Kamov V-80 program of the 1980s as a single-seat dedicated anti-armour helicopter, an unusual choice meant to cut weight and lean on automation. Its coaxial twin rotors dispense with a tail rotor and give it distinctive agility. In War Thunder it arrived as a premium pack in Update 1.93 'Shark Attack'.",
    "media": [
      {
        "src": "/vehicles/ka-50.jpg",
        "alt": "A Russian Air Force Kamov Ka-50 'Black Shark' (27 yellow) in flight at Kubinka Air Base in 2010, not the in-game model.",
        "credit": "Toshiro Aoki (jp-spotters.com) · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Ka-50 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ka_50",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedAltM",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 251,
      "maxSpeedAltM": 1000,
      "climbMps": 12.5,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 5400,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "2a42-30mm",
          "count": 1
        }
      ],
      "suspended": [
        "6 x 9K121 Vikhr anti-tank guided missiles",
        "Up to 80 x S-8 unguided rockets (S-8KO)",
        "2 x 9M39 Igla air-to-air missiles",
        "Optional 23 mm GSh-23L gun pod",
        "OFAB-250sv 250 kg bombs",
        "FAB-500M-62 500 kg bombs"
      ]
    }
  },
  {
    "id": "ah-64a-apache",
    "name": "AH-64A Apache",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 10.3,
      "realistic": 11.7,
      "simulator": 10.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The U.S. Army's flagship attack helicopter, fielding fire-and-forget Hellfire missiles, a flexible chin-mounted 30 mm M230 chain gun, and a third-generation thermal sight that lets it find and kill targets at long range.",
    "prosCons": {
      "pros": [
        "AGM-114 Hellfire fire-and-forget missiles need no continuous guidance after launch",
        "Chin-turret 30 mm M230 chain gun slews independently of the airframe",
        "Excellent thermal optics for spotting and engaging at distance",
        "Versatile loadout mixing Hellfires, Hydra rockets, and air-to-air missiles"
      ],
      "cons": [
        "High realistic battle rating drops it into heavy radar-SPAA territory",
        "Large airframe is easy to spot when it unmasks",
        "30 mm chin gun fires HEDP only, limited against heavier armour",
        "Hellfire count is modest compared with some peer helicopters"
      ]
    },
    "playstyle": "Use terrain masking and the thermal sight to detect armour first, then unmask just long enough to lock and launch Hellfires before dropping back. The slewable M230 turret handles soft targets and helicopters; mount air-to-air missiles when contesting other rotorcraft.",
    "history": "The AH-64A came out of the U.S. Army's Advanced Attack Helicopter program begun in 1972 to replace the AH-1 Cobra, with the YAH-64 prototype selected in 1976. It entered War Thunder in Update 1.97 'Viking Fury', sitting near the top of the U.S. helicopter line.",
    "media": [
      {
        "src": "/vehicles/ah-64a-apache.jpg",
        "alt": "A Hellenic Army AH-64A+ Apache attack helicopter at the Archangel 2005 airshow, not the in-game model.",
        "credit": "Georgios Pazios (Alaniaris) · Attribution only (CC BY-equivalent free attribution license) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "AH-64A — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ah_64a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 1000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 5400,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m230-30mm",
          "count": 1
        }
      ],
      "suspended": [
        "Up to 16 x AGM-114K Hellfire II anti-tank guided missiles",
        "Hydra-70 70 mm unguided rockets (M247 HEAT and others)",
        "AGR-20 APKWS II laser-guided rockets",
        "AIM-9L Sidewinder air-to-air missiles",
        "AIM-92 ATAS (Air-to-Air Stinger) missiles"
      ]
    }
  },
  {
    "id": "ah-1s-kisarazu",
    "name": "AH-1S Kisarazu",
    "nation": "japan",
    "class": "aviation",
    "subclass": "Attack helicopter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 9.7,
      "realistic": 9.7,
      "simulator": 9.7
    },
    "acquisition": [
      "premium"
    ],
    "summary": "Japan's license-built Cobra gunship, carrying TOW anti-tank missiles with thermal sights and a three-barrel 20 mm M197 turret. A premium pack notable for its commemorative 'Kisarazu Sisters' livery and crew.",
    "prosCons": {
      "pros": [
        "TOW-2 missiles with thermal night-vision sighting for clear target acquisition",
        "Slewable 20 mm M197 turret traverses independently of the airframe",
        "Slim Cobra silhouette is hard to spot head-on",
        "Comparatively low battle rating for a missile-armed attack helicopter"
      ],
      "cons": [
        "TOW missiles are SACLOS — you must keep the target tracked the whole flight",
        "Single engine and modest top speed limit repositioning",
        "20 mm cannon is weak against modern armour",
        "Premium-only, bought with Golden Eagles"
      ]
    },
    "playstyle": "Stay at stand-off range behind cover, lift just enough to guide a TOW onto target while holding the sight steady through impact, then re-mask. Lean on the M197 turret and rockets for light vehicles and emergencies.",
    "history": "The AH-1S is the Japanese license-produced Cobra (a Step-3 / AH-1F-equivalent) built by Fuji Heavy Industries for the Ground Self-Defense Force. The Kisarazu pack in War Thunder, added in Update 1.89 'Imperial Navy', honours the 20th anniversary of the JGSDF 4th Anti-Tank Helicopter Unit at Kisarazu with a special illustrated livery and was the first vehicle in the game with a female flight crew.",
    "media": [
      {
        "src": "/vehicles/ah-1s-kisarazu.jpg",
        "alt": "A Japan Ground Self-Defense Force (JGSDF) Fuji-built Bell AH-1S Cobra photographed in 2023, not the in-game model.",
        "credit": "MIKI Yoshihito · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "AH-1S Kisarazu — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ah_1s",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "maxSpeedAltM",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 1000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 3475,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m197-20mm",
          "count": 1
        }
      ],
      "suspended": [
        "Up to 8 x BGM-71D TOW-2 anti-tank guided missiles",
        "FFAR Mighty Mouse 70 mm unguided rockets",
        "Optional 7.62 mm M134 Minigun pod"
      ]
    }
  },
  {
    "id": "uss-arizona",
    "name": "USS Arizona",
    "nation": "usa",
    "class": "naval",
    "subclass": "Battleship",
    "rank": "VI",
    "battleRatings": {
      "arcade": 7.3,
      "realistic": 7.3,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The USS Arizona is a Pennsylvania-class battleship modelled in her 1938 refit. She carries twelve 14-inch rifles across four triple turrets, trading the high-rate-of-fire secondary suite of later refits for a heavy main armament, and sits at the top of the US bluewater tech tree as a slow but hard-hitting line battleship.",
    "prosCons": {
      "pros": [
        "Twelve 14-inch main guns deliver a heavy broadside for her battle rating",
        "Four triple turrets allow the battery to be split across multiple targets",
        "Thick conning-tower and barbette protection over the citadel",
        "Large crew complement absorbs a great deal of punishment before going dark"
      ],
      "cons": [
        "Very long main-battery reload punishes a wasted salvo",
        "Slow top speed leaves little room to disengage from a bad position",
        "1938-refit anti-aircraft fit is comparatively light against air attack",
        "No torpedo armament to threaten ships at close range"
      ]
    },
    "playstyle": "Position Arizona at a stand-off range where her twelve rifles can land full broadsides while you angle the hull to keep the citadel from being punched through. Because the reload is punishingly long, split the four turrets onto separate targets so you always have guns coming online rather than emptying everything into one ship and waiting helplessly. Keep her bow or stern angled toward the heaviest fire and lean on the deep crew pool to ride out hits.",
    "history": "USS Arizona was the second of the two Pennsylvania-class battleships, laid down in 1914 and commissioned at the end of 1916. Her First World War service was limited to home waters, after which she famously formed part of the escort that carried President Woodrow Wilson to the Paris Peace Conference. Through the interwar years she served largely in training and fleet roles before being destroyed in a catastrophic magazine explosion during the attack on Pearl Harbor, where her wreck remains today as a memorial.",
    "media": [
      {
        "src": "/vehicles/uss-arizona.jpg",
        "alt": "The Pennsylvania-class battleship USS Arizona underway with President Herbert Hoover aboard in March 1931, not the in-game model.",
        "credit": "U.S. Navy, Naval History & Heritage Command (unknown photographer) · Public Domain (PD-USGov-Navy) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "USS Arizona | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_battleship_arizona_1931",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "torpedoes",
      "beltMm",
      "deckMm",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 35929,
      "lengthM": null,
      "crew": 1390
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "4 x 3 x 14 inch/45 Mk.8",
      "secondary": "12 x 5 inch/51 Mk.7",
      "aa": "8 x 5 inch/25 Mk.11; 8 x 12.7 mm Browning AN-M2",
      "depthCharges": false
    },
    "armor": {
      "citadel": "330 / 343 / 121 mm"
    },
    "survivability": "Arizona relies on her sheer bulk and a 1,390-strong crew to stay in the fight; a single salvo rarely knocks her out, and damage tends to accumulate over an engagement rather than ending it outright. Her thickest protection wraps the conning tower and the citadel zone, so angling the hull to keep incoming rounds off the broadside belt is essential. The weak point is endurance against sustained large-calibre fire and her vulnerability from the air, since the lighter 1938 anti-aircraft fit gives attacking aircraft and bombers room to work."
  },
  {
    "id": "scharnhorst",
    "name": "Scharnhorst",
    "nation": "germany",
    "class": "naval",
    "subclass": "Battlecruiser",
    "rank": "VI",
    "battleRatings": {
      "arcade": 7.3,
      "realistic": 7.3,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Scharnhorst is the German capital ship that splits the difference between a battlecruiser and a fast battleship. She pairs nine fast-firing 283 mm rifles with heavy protection and a high top speed, and she is the rare large warship in her bracket to carry torpedo tubes, making her a powerful close-to-mid-range brawler.",
    "prosCons": {
      "pros": [
        "Nine 283 mm guns fire quickly, putting out high sustained damage",
        "Heavily armoured for a ship her size, built to a battleship standard",
        "High top speed for a capital ship, allowing aggressive repositioning",
        "Carries 533 mm torpedoes, unusual for a vessel of this size",
        "Dense, layered anti-aircraft battery"
      ],
      "cons": [
        "283 mm main calibre is light against true battleships' belt armour",
        "Aggressive brawling playstyle exposes her to crossfire",
        "Citadel can be penetrated by heavier-calibre opponents"
      ]
    },
    "playstyle": "Use Scharnhorst's speed to dictate the range and close into the mid-to-short band where her fast-cycling 283 mm guns overwhelm targets with volume of fire rather than per-shell penetration. Angle the well-armoured hull while you advance, exploit her mobility to flank slower battleships, and keep the torpedoes ready for opportunistic launches against ships that drift too close. Avoid a static long-range duel against heavier-gunned battleships, where her smaller calibre is at its weakest.",
    "history": "Scharnhorst and her sister Gneisenau were conceived by the Kriegsmarine as battleships, but treaty limits and Germany's lack of heavy-gun production capacity at the time saw them armed with 283 mm main guns instead of a larger calibre. Launched in early 1939, Scharnhorst spent the opening years of the war raiding Atlantic convoys, took part in the Norwegian campaign, and engaged Allied warships including the loss of HMS Glorious. In December 1943 she was caught by a British task force during a convoy interception attempt and sunk at the Battle of the North Cape, with only a handful of survivors.",
    "media": [
      {
        "src": "/vehicles/scharnhorst.jpg",
        "alt": "The German battleship Scharnhorst photographed in 1939, not the in-game model.",
        "credit": "Deutsches Bundesarchiv (German Federal Archive), DVM 10 Bild-23-63-07 · CC BY-SA 3.0 de · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Scharnhorst | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_battleship_scharnhorst",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "beltMm",
      "deckMm",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 37902,
      "lengthM": null,
      "crew": 1908
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "3 x 3 x 283 mm/54.5 SK C/34",
      "secondary": "4 x 2 x 15 cm/55 SK C/28; 4 x 15 cm/55 SK C/28",
      "aa": "7 x 2 x 10.5 cm/60 SK C/33; 8 x 2 x 3.7 cm SK C/30; 6 x 4 x 2 cm/65 C/38; 10 x 2 cm/65 C/38",
      "torpedoes": "14 x 533 mm G7a",
      "depthCharges": false
    },
    "armor": {
      "citadel": "150 / 320 / 80 mm"
    },
    "survivability": "Scharnhorst is protected to a true battleship standard despite her lighter armament, so her citadel shrugs off a great deal of fire that would cripple a cruiser, and her very large crew gives her excellent staying power. The thick conning-tower face and citadel walls reward keeping the hull angled, while her speed lets her break off before damage compounds. Her vulnerability is to genuinely heavy-calibre battleship guns, which can defeat the citadel, and the aggressive close-range role she excels at naturally exposes her to multiple attackers at once."
  },
  {
    "id": "kongo",
    "name": "IJN Kongo",
    "nation": "japan",
    "class": "naval",
    "subclass": "Battlecruiser",
    "rank": "VI",
    "battleRatings": {
      "arcade": 7.3,
      "realistic": 7.3,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "IJN Kongo is a Japanese fast battleship modelled in her 1944 configuration, the lead ship of her class. She trades raw gun count and armour for speed, carrying eight 36 cm rifles and a dense battery of 25 mm anti-aircraft cannon, and plays as a mobile capital ship that uses agility to make up for thinner protection.",
    "prosCons": {
      "pros": [
        "High speed lets her reach positions and react faster than rival battleships",
        "Quick to angle her hull thanks to good mobility",
        "Eight 36 cm main guns hit hard for her bracket",
        "Extensive 25 mm anti-aircraft suite covers the medium-to-close air threat"
      ],
      "cons": [
        "Thinner armour than most contemporary battleships",
        "Fewer main guns than the heavier capital ships she faces",
        "Relies on maneuver rather than raw protection to survive",
        "No torpedo armament"
      ]
    },
    "playstyle": "Lean on Kongo's speed: get to commanding firing positions early, and use her quick turn-in to angle the comparatively thin armour against incoming salvos so shells skip or land on the thickest plate. Pick your engagements rather than trading blows toe-to-toe with better-armoured battleships, and use the mobility to relocate when focused. Her thick anti-aircraft battery means she can hold her own against medium- and close-range air attack while she repositions.",
    "history": "Kongo was the lead ship of her class and the last major Japanese capital ship built abroad, designed by British naval engineer George Thurston and laid down in 1911 as a battlecruiser. Commissioned in 1913, she patrolled the Chinese coast during the First World War, then underwent two major reconstructions that raised her speed and protection enough for her to be reclassified as a fast battleship. She fought through many of the Pacific War's major surface actions before being torpedoed and sunk by a submarine while in transit in November 1944.",
    "media": [
      {
        "src": "/vehicles/kongo.jpg",
        "alt": "The Japanese battlecruiser Kongo during full-power trials in the Irish Sea on 8 May 1913, not the in-game model.",
        "credit": "Unknown (published in Scientific American, 1913; Sankey Family Photographic Collection) · Public Domain (PD-Japan-oldphoto) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "IJN Kongo | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_battlecruiser_kongo",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "torpedoes",
      "beltMm",
      "deckMm",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 38767,
      "lengthM": null,
      "crew": 1437
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "4 x 2 x 36 cm/45 Type 41",
      "secondary": "8 x 15 cm/50 Type 41",
      "aa": "6 x 2 x 5 inch/40 Type 89; 18 x 3 x 25 mm/60 Type 96; 30 x 25 mm/60 Type 96",
      "depthCharges": false
    },
    "armor": {
      "citadel": "279 / 203 / 127 mm"
    },
    "survivability": "Kongo is the lightly armoured member of the battleship class, so survival depends on movement and angling rather than soaking hits. Her best protection is concentrated around the conning tower and citadel, and her speed and quick turn-in let her present that armour at the most favourable angle while staying mobile enough to leave a losing exchange. The trade-off is that careless broadside exposure to heavier guns can punch through, and her thinner plate offers less margin for error than the slower, better-protected battleships she fights alongside."
  },
  {
    "id": "hms-hood",
    "name": "HMS Hood",
    "nation": "britain",
    "class": "naval",
    "subclass": "Battlecruiser",
    "rank": "VI",
    "battleRatings": {
      "arcade": 7.7,
      "realistic": 7.7,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "HMS Hood is Britain's top-rank battlecruiser, a 'fast battleship' in all but name that pairs eight 15-inch guns with a battleship-grade armour belt and battlecruiser speed. Her main battery is noted for exceptionally hard-hitting capped shells, making her one of the most threatening capital ships at her battle rating.",
    "prosCons": {
      "pros": [
        "Eight 15-inch main guns with powerful penetration",
        "Heavy belt armour for a battlecruiser, comparable to contemporary battleships",
        "High top speed lets her dictate engagement range",
        "Strong secondary and anti-aircraft batteries",
        "Carries torpedoes for close-range threats"
      ],
      "cons": [
        "Deck protection remains a battlecruiser weakness, vulnerable to plunging fire",
        "Large silhouette is easy to hit and citadel",
        "Magazine layout reflects the historical vulnerability that doomed the real ship",
        "Long turret traverse and reload demand careful positioning"
      ]
    },
    "playstyle": "Use Hood's speed to control the range, opening at distance to land 15-inch salvoes while keeping her belt angled toward the enemy. Avoid presenting the deck to high-arc fire and disengage if focused by multiple battleships. The secondary battery and torpedoes punish smaller ships that close in.",
    "history": "Laid down on 31 May 1916, the same day as the Battle of Jutland, Hood was the first of four planned Admiral-class battlecruisers and the only one completed. Redesigned after Jutland to carry a heavier belt, she combined battleship-level protection with battlecruiser speed and was for two decades the largest warship in the world, a symbol of British naval power. In May 1941 she was sent to intercept the German battleship Bismarck and was lost in the Denmark Strait when a salvo triggered a catastrophic magazine explosion, killing all but three of her crew.",
    "media": [
      {
        "src": "/vehicles/hms-hood.jpg",
        "alt": "The British battlecruiser HMS Hood photographed on 17 March 1924, not the in-game model.",
        "credit": "Allan C. Green (State Library of Victoria); restoration by Adam Cuerden · Public Domain (PD-Australia) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "HMS Hood - War Thunder official wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_battlecruiser_hood",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "deckMm",
      "beltMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 48360,
      "lengthM": null,
      "crew": 1418
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "8 x 381 mm (15 inch)/42 BL Mark I (4 turrets, 2 guns each)",
      "secondary": "14 x 102 mm (4 inch)/45 Mark XVI (7 twin turrets)",
      "aa": "24 x 40 mm 2pdr QF Mk.VIII; 16 x 12.7 mm Vickers Mk.V machine guns",
      "torpedoes": "12 x 533 mm Mk.IV torpedoes",
      "depthCharges": false
    },
    "armor": {
      "beltMm": "25 mm hull plating (wiki does not list a separate main belt value)",
      "citadel": "127 / 304 / 50 mm"
    },
    "survivability": "Hood's strength is her armoured belt, which on the citadel sides reaches values comparable to a contemporary battleship and can shrug off many incoming rounds when properly angled. Her weakness is the thin deck and the historical reality of her magazine arrangement: plunging fire and well-placed shells can reach the citadel and cause devastating ammunition detonations. Crew numbers are high, so flooding and fires can be absorbed for a time, but a single magazine hit remains a real risk."
  },
  {
    "id": "marat",
    "name": "Marat",
    "nation": "ussr",
    "class": "naval",
    "subclass": "Battleship",
    "rank": "V",
    "battleRatings": {
      "arcade": 6.7,
      "realistic": 6.7,
      "simulator": null
    },
    "acquisition": [
      "premium"
    ],
    "summary": "Marat is a Soviet premium dreadnought of the Gangut (Sevastopol) class, a near-twin of the Parizhskaya Kommuna. She carries twelve 12-inch guns in four triple turrets along with a heavy secondary and anti-aircraft fit, trading thick armour for a broad firing arc and volume of fire.",
    "prosCons": {
      "pros": [
        "Twelve 12-inch guns give an enormous broadside",
        "Triple-turret layout spreads firepower fore and aft",
        "Strong medium-calibre anti-aircraft battery",
        "Numerous secondary 120 mm guns against light targets",
        "Premium economy bonuses"
      ],
      "cons": [
        "Thin armour by battleship standards leaves the citadel exposed",
        "Low top speed makes disengaging difficult",
        "Large, easily hit hull",
        "WWI-era main guns have modest penetration against modern armour",
        "No longer obtainable from the store"
      ]
    },
    "playstyle": "Play Marat as a gun platform: bring all twelve 12-inch barrels to bear with a broadside and rely on weight of fire rather than armour. Keep at medium range, stay angled, and use the dense AA battery to fend off aircraft. Because she is slow and lightly protected, avoid being flanked or caught in the open against heavier battleships.",
    "history": "Marat was the third Gangut-class dreadnought built for the Imperial Russian Navy before the First World War, named after the French revolutionary Jean-Paul Marat. After the 1917 Revolution she served the Soviet Baltic Fleet, fighting in the Russian Civil War, and underwent a major 1928-1931 refit that converted her boilers to oil firing, strengthened her anti-aircraft armament, and cut down and angled her forward funnel. During the Second World War she was crippled by a German dive-bomber attack at Kronstadt in 1941 but continued to serve as a stationary battery.",
    "media": [
      {
        "src": "/vehicles/marat.jpg",
        "alt": "Aerial view of the Soviet Gangut-class battleship Marat off Spithead for the 1937 Fleet Review, not the in-game model.",
        "credit": "Royal Air Force (assumed), Imperial War Museums (MH 7) · Public Domain (PD-UKGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Marat - War Thunder official wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_battleship_marat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "deckMm",
      "beltMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 26700,
      "lengthM": null,
      "crew": 1286
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "12 x 305 mm (12 inch)/52 pattern 1907 (4 triple turrets)",
      "secondary": "14 x 120 mm/50 pattern 1905",
      "aa": "2 x 76 mm 39-K; 6 x 76 mm 34-K; 6 x 37 mm 70-K; 13 x 12.7 mm DShK machine guns",
      "torpedoes": "12 x 450 mm wet-heater torpedoes pattern 1912",
      "depthCharges": false
    },
    "armor": {
      "beltMm": "25 mm hull plating (wiki does not list a separate main belt value)",
      "citadel": "50 / 225 / 38 mm"
    },
    "survivability": "Marat is lightly armoured for a battleship, with a citadel that can be defeated by heavier guns and a hull that offers little resistance to plunging or close-range fire. Her survivability instead rests on her size and large crew, which let her absorb hits and continue fighting, but a determined opponent can reach her magazines or machinery. The thin protection means careful angling and range control are essential."
  },
  {
    "id": "dunkerque",
    "name": "Dunkerque",
    "nation": "france",
    "class": "naval",
    "subclass": "Battleship",
    "rank": "VI",
    "battleRatings": {
      "arcade": 7,
      "realistic": 7,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Dunkerque is a French fast battleship with a distinctive all-forward main battery: eight 330 mm guns concentrated in two quadruple turrets at the bow. Backed by a powerful dual-purpose 130 mm secondary battery and good speed, she excels at bow-on engagements and is most effective in downtiers.",
    "prosCons": {
      "pros": [
        "Eight 330 mm guns in two forward quad turrets allow strong bow-on fire",
        "Concentrated armament minimises exposure when advancing head-on",
        "Capable dual-purpose 130 mm secondary battery",
        "Good speed for a battleship",
        "Carries an aircraft for spotting and smoke screens"
      ],
      "cons": [
        "All-forward layout means almost no rearward firepower",
        "Quad turrets risk losing four guns to a single disabling hit",
        "Struggles badly in uptiers against heavier battleships",
        "No torpedo armament",
        "Armour is adequate but not exceptional for the battle rating"
      ]
    },
    "playstyle": "Fight Dunkerque bow-on: present the heavily protected front, keep both quad turrets bearing on the target, and exploit her speed to maintain a favourable angle. Because all eight guns face forward, avoid situations that force you to turn away. She rewards aggressive downtier play but should disengage cautiously when outmatched, using her aircraft for smoke when retreating.",
    "history": "Dunkerque was the lead ship of a new class of French fast battleships designed to counter the German Deutschland-class cruisers, commissioned in late 1936 with trials running into 1938. In May 1937 she represented France at the Coronation Naval Review at Portsmouth. At Mers-el-Kebir on 3 July 1940 she was struck by British 15-inch shells that penetrated her engineering spaces and killed many of her crew. After repairs at Toulon she was scuttled there in November 1942 to prevent her capture by advancing German forces.",
    "media": [
      {
        "src": "/vehicles/dunkerque.jpg",
        "alt": "The French battleship Dunkerque after being partially scrapped, photographed 1944-1945, not the in-game model.",
        "credit": "Unknown official U.S. Army photographer · Public Domain (PD-USGov-Military-Army) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Dunkerque - War Thunder official wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_battleship_dunkerque",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "brSimulator",
      "lengthM",
      "maxKnots",
      "deckMm",
      "beltMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 35500,
      "lengthM": null,
      "crew": 1381
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "8 x 330 mm/52 model 1931 (2 quadruple turrets)",
      "secondary": "16 x 130 mm/45 model 1932 (2 twin + 3 quad turrets)",
      "aa": "10 x 37 mm/50 model 1933; 32 x 13.2 mm Hotchkiss machine guns",
      "depthCharges": false
    },
    "armor": {
      "beltMm": "25 mm hull plating (wiki does not list a separate main belt value)",
      "citadel": "210 / 225 / 125 mm"
    },
    "survivability": "Dunkerque's protection is concentrated where it matters for her intended bow-on fighting style, with a citadel that offers solid resistance from the front. The all-forward turret layout means a single well-placed hit can knock out four guns at once, a real liability, and her broadside aspect exposes more vulnerable plating. She holds up well against same-tier opponents but is overmatched by the heaviest battleships, so keeping the armoured bow toward danger is key to staying alive."
  },
  {
    "id": "montecuccoli",
    "name": "RN Raimondo Montecuccoli",
    "nation": "italy",
    "class": "naval",
    "subclass": "Light cruiser",
    "rank": "IV",
    "battleRatings": {
      "arcade": 5.3,
      "realistic": 5.3,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "RN Raimondo Montecuccoli is the lead Condottieri light cruiser of the Italian bluewater line, arriving with the navy's debut in Update 1.99 'Starfighters'. She trades the heavy armour of a true cruiser for a fast, well-laid-out hull carrying eight 152 mm Ansaldo rifles, making her one of the more forgiving early-cruiser openers for the Italian fleet.",
    "prosCons": {
      "pros": [
        "Eight 152 mm guns in four turrets give strong broadside weight for the BR",
        "Fast hull and responsive handling for repositioning and angling",
        "Good gun depression/elevation for engaging close destroyers and aircraft",
        "Optional torpedo and depth-charge loadouts add flexibility"
      ],
      "cons": [
        "Thin protection (citadel only 40/60/30 mm) punishes any broadside exposure",
        "Crew of 648 is modest, so flooding and fires bite quickly",
        "152 mm shells lack the punch of true heavy-cruiser 203 mm guns"
      ]
    },
    "playstyle": "Play her as a mobile knife-fighter rather than a brawler. Keep the bow or stern angled to deny enemy gunners a clean citadel, use the speed to dictate range, and lean on the four turrets to keep a full broadside on target whenever you can safely show your side. Pick the torpedo setup when you expect close, island-cluttered maps.",
    "history": "Laid down in October 1931 and commissioned in June 1935, Raimondo Montecuccoli was the first ship of her sub-class within the broader Condottieri programme of fast Italian light cruisers. During the Second World War she saw action in the Mediterranean, including convoy-interdiction battles in which she engaged British forces. She survived the war and went on to serve the post-war Italian navy as a training cruiser for roughly two decades.",
    "media": [
      {
        "src": "/vehicles/montecuccoli.jpg",
        "alt": "The Italian Condottieri-class light cruiser Raimondo Montecuccoli during a 1938 visit to Australia, not the in-game model.",
        "credit": "Allan C. Green (State Library of Victoria); restoration by Adam Cuerden · Public Domain (PD-Australia) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "RN Raimondo Montecuccoli - War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/it_cruiser_montecuccoli",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Bluewater Fleet (Italy) - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/ships?v=t&t_c=italy",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "brSimulator",
      "beltMm",
      "deckMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 8995,
      "lengthM": null,
      "crew": 648
    },
    "propulsion": {
      "maxKnots": 39.2
    },
    "armament": {
      "mainBattery": "8 x 152/55 mm O.T.O. Mod.1929 (4 turrets x 2)",
      "secondary": "6 x 100 mm/47 O.T.O. Mod.1928 (3 turrets x 2)",
      "aa": "4 x 37 mm/54 Breda Mod.38; 10 x 20 mm/70 Oerlikon 3S",
      "torpedoes": "8 x 533 mm steam-turbine Type M (optional setup)",
      "depthCharges": true
    },
    "armor": {
      "citadel": "40/60/30 mm citadel; 70/22/22 mm main fire tower; 25 mm hull; 8 mm superstructure"
    },
    "survivability": "Survivability is the classic light-cruiser compromise: speed and a roomy hull layout instead of meaningful armour. The 40/60/30 mm citadel and 25 mm hull stop little more than splinters and autocannon fire, so any 152 mm or heavier hit on the broadside can reach magazines or machinery. The 648-strong crew gives some redundancy against single penetrations, but sustained fire, flooding and chained fires will overwhelm her. Stay angled and keep moving to survive."
  },
  {
    "id": "eugenio-di-savoia",
    "name": "RN Eugenio di Savoia",
    "nation": "italy",
    "class": "naval",
    "subclass": "Light cruiser",
    "rank": "IV",
    "battleRatings": {
      "arcade": 5.7,
      "realistic": 5.7,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "RN Eugenio di Savoia is a later, heavier Duca d'Aosta sub-class Condottieri light cruiser. She keeps the eight-gun 152 mm broadside of the line but adds displacement and slightly thicker citadel plating, sitting a notch above Montecuccoli in both protection and battle rating.",
    "prosCons": {
      "pros": [
        "Eight 152 mm guns with good rate of fire for the class",
        "Improved citadel (50/70/35 mm) and fire-tower armour over earlier Condottieri",
        "Strong layered AA of 37 mm and 20 mm mounts",
        "Fast, manoeuvrable hull typical of the Condottieri family"
      ],
      "cons": [
        "Still lightly armoured by cruiser standards; broadside exposure is dangerous",
        "152 mm main calibre is outmatched by 203 mm heavy cruisers at her uptiers",
        "Larger hull is an easier target than the lithe Montecuccoli"
      ]
    },
    "playstyle": "Fight at the edge of effective range, using speed to keep heavy cruisers from landing clean citadel hits while your eight 152s work their armour and superstructure down. Angle constantly, prioritise enemy destroyers and light cruisers you can out-gun, and use the dense AA suite to swat attackers when air spawns are active.",
    "history": "Eugenio di Savoia was the second ship of the Duca d'Aosta sub-class of Condottieri cruisers, launched in 1935. She took part in operations during the Spanish Civil War and saw extensive Mediterranean service in the Second World War, including convoy escort and surface actions against the Royal Navy. After the war she was handed to Greece as reparations, serving the Hellenic Navy under a new name.",
    "media": [
      {
        "src": "/vehicles/eugenio-di-savoia.jpg",
        "alt": "The Italian Condottieri-class light cruiser Eugenio di Savoia, not the in-game model.",
        "credit": "Marina Militare Italiana (Italian Navy) · Public Domain (PD-Italy / PD-1996) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "RN Eugenio di Savoia - War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/it_cruiser_eugenio_di_savoia",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Bluewater Fleet (Italy) - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/ships?v=t&t_c=italy",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "brSimulator",
      "beltMm",
      "deckMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 10672,
      "lengthM": null,
      "crew": 694
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "8 x 152/53 mm O.T.O. Mod.1929 (4 turrets x 2)",
      "secondary": "6 x 100 mm/47 O.T.O. Mod.1928 (3 turrets x 2)",
      "aa": "4 x 37 mm/54 Breda Mod.32; 10 x 20 mm/70 Oerlikon 3S",
      "torpedoes": "6 x 533 mm steam-turbine Type M",
      "depthCharges": true
    },
    "armor": {
      "citadel": "50/70/35 mm citadel; 90/30/30 mm main fire tower; 25 mm hull; 8 mm superstructure"
    },
    "survivability": "Eugenio di Savoia is a step up from the earliest Condottieri in toughness but is still a light cruiser at heart. The 50/70/35 mm citadel and 90 mm fire-tower face will shrug off destroyer fire and resist 152 mm hits at oblique angles, yet a square broadside to a heavy cruiser remains lethal. The 694-man crew and larger hull absorb more punishment before going down, but fire and flooding control are the real keys to staying afloat in a prolonged exchange."
  },
  {
    "id": "duca-degli-abruzzi",
    "name": "RN Duca degli Abruzzi",
    "nation": "italy",
    "class": "naval",
    "subclass": "Light cruiser",
    "rank": "V",
    "battleRatings": {
      "arcade": 5.7,
      "realistic": 5.7,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "RN Luigi di Savoia Duca degli Abruzzi is the most advanced of the Italian Condottieri-family light cruisers, introduced in Update 'Apex Predators'. She mounts a heavy ten-gun 152 mm Ansaldo Mod.1934 battery in mixed triple and twin turrets, the strongest main armament of the Italian light-cruiser line, paired with a thicker citadel than her predecessors.",
    "prosCons": {
      "pros": [
        "Ten 152 mm guns (2 triple + 2 twin turrets) give the heaviest light-cruiser broadside in the tree",
        "100 mm citadel face is well protected for a light cruiser",
        "Solid layered AA of 37 mm and 20 mm Breda mounts",
        "Large crew (772) improves resistance to single penetrations"
      ],
      "cons": [
        "Sits at a high BR where 203 mm heavy cruisers and capital ships are common",
        "Still a light cruiser hull, so it struggles against same-BR heavyweights",
        "Slower turret traverse and reload than the lighter Condottieri"
      ]
    },
    "playstyle": "Treat her as a long-range gunboat: open at distance where the ten 152s can rain accurate fire while keeping you out of heavy-cruiser citadel range. Angle the bow to make the 100 mm citadel work, manage the larger crew across damage control priorities, and avoid knife-fights with 203 mm ships that will out-penetrate you up close.",
    "history": "Duca degli Abruzzi was the first ship of her sub-class within the Condottieri programme, commissioned on 1 December 1937. Her wartime service was relatively limited: she fought at the Battle of Punta Stilo without scoring hits, and in November 1941 had her stern blown off by an air-dropped torpedo from a Malta-based aircraft, later repaired. After the 1943 Armistice she surrendered at Malta and went on to serve the post-war Italian navy until 1961.",
    "media": [
      {
        "src": "/vehicles/duca-degli-abruzzi.jpg",
        "alt": "The Italian Condottieri-class light cruiser Duca degli Abruzzi in 1944 with co-belligerent markings, not the in-game model.",
        "credit": "Unknown · Public Domain (PD-Italy) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "RN Duca degli Abruzzi - War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/it_cruiser_garibaldi_class_abruzzi",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Bluewater Fleet (Italy) - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/ships?v=t&t_c=italy",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "brSimulator",
      "beltMm",
      "deckMm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 11542,
      "lengthM": null,
      "crew": 772
    },
    "propulsion": {
      "maxKnots": 34.5
    },
    "armament": {
      "mainBattery": "10 x 152/55 mm Ansaldo Mod.1934 (2 triple + 2 twin turrets)",
      "secondary": "8 x 100 mm/47 O.T.O. Mod.1928 (4 turrets x 2)",
      "aa": "8 x 37 mm/54 Breda Mod.38 (4 x 2); 8 x 20 mm/65 Breda (4 x 2); 2 x 20 mm/65 Breda",
      "torpedoes": "12 x 533 mm steam-turbine Tipo M",
      "depthCharges": true
    },
    "armor": {
      "citadel": "100/100/40 mm citadel; 25 mm hull; 8 mm superstructure"
    },
    "survivability": "The best-protected of the Italian light cruisers, Duca degli Abruzzi's 100 mm citadel face genuinely resists 152 mm fire when angled and will defeat most destroyer guns outright. Her 772-man crew gives strong redundancy against floods and fires. Even so, she is still a light cruiser fighting at a heavy-cruiser battle rating, so 203 mm shells will punch through a flat broadside and the thin 25 mm hull leaves the ends vulnerable to flooding. Disciplined angling and fast damage control keep her in the fight."
  },
  {
    "id": "f-16a",
    "name": "F-16A",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VIII",
    "battleRatings": {
      "arcade": 12.3,
      "realistic": 12.3,
      "simulator": 12.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The F-16A is the USA's nimble single-engine, fourth-generation multirole fighter, prized for its blistering energy retention and tight sustained turns at the top of the jet tree.",
    "prosCons": {
      "pros": [
        "Excellent sustained turn rate and instantaneous maneuverability",
        "Strong thrust-to-weight ratio and high top speed",
        "Reliable all-aspect AIM-9L infrared missiles",
        "Wide nine-g airframe and responsive controls"
      ],
      "cons": [
        "Lacks radar-guided missiles, limiting beyond-visual-range options",
        "Single engine means a single point of catastrophic failure",
        "Modest cannon ammunition load for prolonged gun fights",
        "Large radar and heat signature make it easy to lock"
      ]
    },
    "playstyle": "Fight at the merge or just before it. Keep your speed high, force opponents into a turning contest where the airframe excels, and conserve your AIM-9L shots for clean all-aspect rear or front shots rather than spamming them at range.",
    "history": "The General Dynamics F-16 emerged from the U.S. Air Force Lightweight Fighter program of the 1970s, prioritizing agility and affordability over the heavier designs of the era. Its relaxed-stability fly-by-wire layout, bubble canopy and reclined seat became hallmarks of the type, and the early A-model entered service in the late 1970s as a day fighter that would go on to serve dozens of air forces worldwide.",
    "media": [
      {
        "src": "/vehicles/f-16a.jpg",
        "alt": "A U.S. Navy General Dynamics F-16A Fighting Falcon operated by the Naval Strike and Air Warfare Center at NAS Fallon, Nevada; an early single-seat F-16A airframe, not the in-game model.",
        "credit": "U.S. Navy / Naval Air Systems Command (USN) · Public Domain (PD-USGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "F-16A | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/f_16a_block_10",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 10973,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1555,
      "ceilingM": 15240,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m61-vulcan-20mm",
          "count": 1
        }
      ],
      "suspended": [
        "AIM-9J Sidewinder",
        "AIM-9L Sidewinder"
      ]
    }
  },
  {
    "id": "mig-29",
    "name": "MiG-29",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VIII",
    "battleRatings": {
      "arcade": 12.7,
      "realistic": 13,
      "simulator": 13
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The MiG-29 (9-13) is the USSR's twin-engine fourth-generation fighter, combining brutal acceleration and a strong radar-missile suite with a helmet-mounted sight for off-boresight infrared shots.",
    "prosCons": {
      "pros": [
        "Twin RD-33 engines give exceptional thrust and acceleration",
        "Carries potent R-27ER radar missiles and R-73 dogfight missiles",
        "Helmet-mounted sight enables wide off-boresight launches",
        "High structural speed limit tolerates aggressive dives"
      ],
      "cons": [
        "Bleeds energy quickly in sustained hard turns",
        "Limited cannon ammunition rewards disciplined gunnery",
        "Radar missiles are vulnerable to chaff and notching",
        "Airframe gets sluggish at lower speeds"
      ]
    },
    "playstyle": "Use the twin-engine acceleration to dictate the engagement, open with R-27ER shots at range, then close to merge with R-73s slaved to the helmet sight. Avoid prolonged low-speed scissors where the airframe loses its edge.",
    "history": "The Mikoyan MiG-29 was the Soviet Union's answer to the new generation of Western fighters, conceived as a frontline air-superiority aircraft to operate alongside the heavier Su-27. Entering service in the early 1980s, its blended fuselage, twin tail fins and twin afterburning turbofans gave it a fearsome reputation for short-field performance and close-in agility, and the type was widely exported across the Warsaw Pact and beyond.",
    "media": [
      {
        "src": "/vehicles/mig-29.jpg",
        "alt": "A preserved Mikoyan MiG-29 'Fulcrum-A' at the Patriot Park museum, Kubinka, Russia; this is the early 9.12 production variant rather than the 9-13, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 (Creative Commons Attribution-Share Alike 2.0 Generic) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "MiG-29 (9-13) | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/mig_29_9_13",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 14000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1575,
      "ceilingM": 16000,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "gsh-30-1-30mm",
          "count": 1
        }
      ],
      "suspended": [
        "R-73",
        "R-27R",
        "R-27ER",
        "R-27T",
        "R-27ET"
      ]
    }
  },
  {
    "id": "jas39-gripen",
    "name": "JAS39A",
    "nation": "sweden",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VIII",
    "battleRatings": {
      "arcade": 13,
      "realistic": 13,
      "simulator": 13
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The JAS39A Gripen is Sweden's compact single-engine delta-canard fourth-generation fighter, blending razor-sharp instantaneous turn rate with strong all-aspect missiles at the top of the Swedish tree.",
    "prosCons": {
      "pros": [
        "Delta-canard layout gives outstanding instantaneous turn rate",
        "Carries Rb 74 (AIM-9L-class) all-aspect infrared missiles",
        "Strong thrust-to-weight from the RM12 engine",
        "Small airframe is hard to spot and lock"
      ],
      "cons": [
        "Single engine is a single point of failure",
        "Bleeds energy heavily when pulling hard with the deltas",
        "Modest cannon ammunition load",
        "Limited fuel and reach compared with twin-engine rivals"
      ]
    },
    "playstyle": "Exploit the explosive instantaneous turn to win the first merge, snap an Rb 74 onto a fleeing target, then extend to rebuild energy before re-engaging. Treat sustained dogfights cautiously since the deltas drain speed fast.",
    "history": "Saab's JAS 39 Gripen was developed in the 1980s as a lightweight, cost-effective multirole replacement for Sweden's Viggen and Draken fleets, embodying the country's doctrine of dispersed road-base operations. Its close-coupled delta-canard configuration and digital fly-by-wire flight controls deliver agility out of proportion to its small size, and the type entered Swedish service in the 1990s as a true swing-role fighter.",
    "media": [
      {
        "src": "/vehicles/jas39-gripen.jpg",
        "alt": "A single-seat Saab JAS-39 Gripen of the Czech Air Force photographed at Caslav in 2005; this is the JAS-39C single-seat variant, not the in-game model.",
        "credit": "Jan Kouba / Ministry of Defence and Armed Forces of the Czech Republic · MDAFCR custom attribution-only license (commercial use and derivatives permitted with attribution; CC BY-equivalent) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "JAS39A | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/saab_jas39a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 11000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1543,
      "ceilingM": 14500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "bk27-27mm",
          "count": 1
        }
      ],
      "suspended": [
        "Rb 74",
        "Rb 74(M)",
        "Rb 71"
      ]
    }
  },
  {
    "id": "challenger-1",
    "name": "Challenger 1",
    "nation": "britain",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VII",
    "battleRatings": {
      "arcade": 10.3,
      "realistic": 10.3,
      "simulator": 10.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "British third-generation main battle tank derived from the Shir 2 export project. It pairs Chobham composite turret protection with the 120 mm L11 rifled gun, first-generation thermal optics and a laser rangefinder, making it a strong long-range hull-down defender despite only adequate mobility.",
    "prosCons": {
      "pros": [
        "Well-protected Chobham composite turret rewards hull-down play",
        "120 mm L11 rifled gun with capable APFSDS and HESH options",
        "First-generation thermal sight plus laser rangefinder for long-range gunnery",
        "Large 52-round ammunition stowage"
      ],
      "cons": [
        "Only average mobility for its battle rating",
        "Slow on-the-spot turning and modest turret traverse",
        "Engine bulge severely limits effective fire to the rear",
        "Thin hull armour leaves the lower front vulnerable"
      ]
    },
    "playstyle": "Fight from prepared, hull-down positions where the thick composite turret can soak hits while the weak hull stays covered. Use the thermals and rangefinder to spot and ping targets first, then trade carefully. Avoid open flanking sprints; the sluggish turn rate and inability to fire well backwards punish over-extension.",
    "history": "The FV4030/4 Challenger 1 grew out of the Shir 2 project that Vickers Defence Systems had designed for export to Iran. After the order was cancelled, the design was adopted by the British Army and entered service in 1983, retaining the powerful 120 mm rifled gun and Chobham composite armour. It served as Britain's main battle tank until being superseded by the Challenger 2 around 2001.",
    "media": [
      {
        "src": "/vehicles/challenger-1.jpg",
        "alt": "A British Challenger 1 main battle tank displayed at the 2024 Tanks, Trucks and Firepower Show, not the in-game model.",
        "credit": "Airwolfhound (Tim Felce) · CC BY-SA 4.0 (Creative Commons Attribution-Share Alike 4.0 International) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Challenger Mk.2 (FV4030/4 Challenger 1) — War Thunder Wiki unit page",
        "url": "https://wiki.warthunder.com/unit/uk_challenger_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "turretTraverseDegSec",
      "reverseGears",
      "neutralSteering",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": 1314,
      "weightTons": 64.8,
      "powerToWeight": 20.3,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "l11-120mm",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 52,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "80 mm",
        "side": "38 mm",
        "rear": "25 mm"
      },
      "turretMm": {
        "front": "110 mm",
        "side": "80 mm",
        "rear": "44 mm"
      },
      "crewCount": 4,
      "era": false,
      "composite": true,
      "aps": false
    }
  },
  {
    "id": "type-90",
    "name": "Type 90",
    "nation": "japan",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VII",
    "battleRatings": {
      "arcade": 11.7,
      "realistic": 11.7,
      "simulator": 11.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Japanese third-generation main battle tank built by Mitsubishi Heavy Industries for the JGSDF. It is the only production tank to mate an autoloader to the German-pattern 120 mm L/44 smoothbore, giving a constant 4-second reload, and trades armour for a small, light, fast hull.",
    "prosCons": {
      "pros": [
        "Autoloaded 120 mm L/44 delivers a consistent 4-second reload",
        "Excellent power-to-weight ratio and high top speed",
        "Compact, low silhouette is easy to hide",
        "Capable fire-control with automatic target tracking and composite armour"
      ],
      "cons": [
        "Thin armour offers little protection against APFSDS",
        "Poor gun depression of only -7° hampers hull-down play",
        "Three-man crew is fragile and easily knocked out",
        "Light weight makes it prone to being shoved or flipped"
      ]
    },
    "playstyle": "Lean on speed and the steady autoloader rather than armour. Use mobility to seize firing angles and flanks, fire and reposition before return fire arrives, and avoid head-on duels where its thin plating fails. The shallow -7° depression means picking gentle crests or staying mobile instead of fully hull-down.",
    "history": "Developed by Mitsubishi Heavy Industries through the 1980s, the Type 90 was accepted into Japanese Ground Self-Defense Force service in 1990 to replace the Type 61 and Type 74. It adopted the Rheinmetall 120 mm L/44 smoothbore, license-built in Japan, paired with an indigenous autoloader, advanced fire-control computer and automatic tracking system.",
    "media": [
      {
        "src": "/vehicles/type-90.jpg",
        "alt": "A Japan Ground Self-Defense Force Type 90 main battle tank at the JGSDF Ordnance School in Tsuchiura, Japan, not the in-game model.",
        "credit": "Max Smith · Public Domain (released into the public domain by the author) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Type 90 — War Thunder Wiki unit page",
        "url": "https://wiki.warthunder.com/unit/jp_type_90",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "maxRevKph",
      "powerToWeight",
      "turretTraverseDegSec",
      "reverseGears",
      "neutralSteering",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": 1500,
      "weightTons": 50.2,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "type90-120mm",
      "reloadBaseSec": 4,
      "reloadAcedSec": 4,
      "vertGuidanceDeg": [
        -7,
        10
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 40,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "40 mm",
        "side": "35 mm",
        "rear": "25 mm"
      },
      "turretMm": {
        "front": "35 mm",
        "side": "80 mm",
        "rear": "25 mm"
      },
      "crewCount": 3,
      "era": false,
      "composite": true,
      "aps": false
    }
  },
  {
    "id": "ariete",
    "name": "Ariete",
    "nation": "italy",
    "class": "ground",
    "subclass": "Main battle tank",
    "rank": "VII",
    "battleRatings": {
      "arcade": 11.7,
      "realistic": 11.7,
      "simulator": 11.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Italy's domestically developed third-generation main battle tank, built by OTO Melara/Iveco for the Italian Army. The C1 Ariete carries a 120 mm smoothbore firing potent APFSDS, good optics and a capable fire-control system, but is the most lightly armoured top-tier MBT in its bracket.",
    "prosCons": {
      "pros": [
        "Strong 120 mm smoothbore with high-penetration DM53 APFSDS",
        "Good gunner and commander thermal optics and fire control",
        "Generous +20° gun elevation and respectable mobility",
        "Reasonable reload that improves with crew skill"
      ],
      "cons": [
        "Lightest armour of any top-tier MBT, vulnerable everywhere",
        "Crew and ammunition are easily knocked out by penetrating hits",
        "Relies on optional add-on protection to survive frontal hits",
        "Punished hard in close brawls against better-armoured tanks"
      ]
    },
    "playstyle": "Play it as a sniper and second-line supporter, exploiting the strong APFSDS and thermals to kill at range before the enemy can return fire. Stay mobile, use cover and avoid being the front of a push; its thin armour means most penetrations are fatal. Pick angles where the +20° elevation lets it engage from reverse-slope positions.",
    "history": "The C1 Ariete was developed by OTO Melara (turret and armament) and Iveco Fiat (hull and powerpack) during the late Cold War so the Italian Army could field a modern tank capable of countering Warsaw Pact and Yugoslav armour. It entered Italian service in the mid-1990s, equipping the army's armoured brigades with an indigenous 120 mm-gunned MBT.",
    "media": [
      {
        "src": "/vehicles/ariete.jpg",
        "alt": "An Italian Army C1 Ariete main battle tank of the 132nd Tank Regiment during an exercise in Italy in 2022, not the in-game model.",
        "credit": "Italian Army (Esercito Italiano, www.esercito.difesa.it) · CC BY 2.5 (Creative Commons Attribution 2.5 Generic) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Ariete (C1 Ariete) — War Thunder Wiki unit page",
        "url": "https://wiki.warthunder.com/unit/it_c1_ariete",
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
      "neutralSteering",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 59.554,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "oto-120-44",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        -9,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 42,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "110 mm",
        "side": "65 mm",
        "rear": "20 mm"
      },
      "turretMm": {
        "front": "140 mm",
        "side": "60 mm",
        "rear": "20 mm"
      },
      "crewCount": 4,
      "era": false,
      "composite": true,
      "aps": false
    }
  },
  {
    "id": "pt-109",
    "name": "PT-109",
    "nation": "usa",
    "class": "naval",
    "subclass": "Motor torpedo boat",
    "rank": "II",
    "battleRatings": {
      "arcade": 1.7,
      "realistic": 1.7,
      "simulator": null
    },
    "acquisition": [
      "premium"
    ],
    "summary": "The PT-109 is a premium Elco 80 ft motor torpedo boat, famous as the wartime command of future U.S. president John F. Kennedy. In game it is a fast, lightly built craft that trades durability for a heavy torpedo broadside and a useful spread of machine guns and a single 20 mm autocannon.",
    "prosCons": {
      "pros": [
        "Four 21-inch Mk.8 torpedoes deliver a devastating broadside against larger ships",
        "High top speed and quick handling let it dictate engagement range",
        "Twin .50-cal mounts plus a stern 20 mm Oerlikon shred enemy boats and aircraft",
        "Low battle rating means it routinely overmatches similar early reserve craft"
      ],
      "cons": [
        "Wooden hull offers almost no protection; crew loss happens fast under fire",
        "No depth charges or mines for objective/area denial",
        "Slow torpedoes are easy to dodge at range; best used in close ambushes",
        "Premium status means it cannot be researched as a learning step"
      ]
    },
    "playstyle": "Flank wide and use speed to close on the enemy's beam before launching all four torpedoes from short range where they cannot be evaded. Between torpedo runs, weave at high speed and rake exposed crew and ammo with the .50-cals and 20 mm. Avoid head-on gun duels with armored gunboats; the wooden hull means a single solid hit can cripple the crew.",
    "history": "PT-109 was an Elco 80-foot patrol torpedo boat ordered in 1942 and built at Bayonne, New Jersey, the seventh boat of the PT-103 production batch. Delivered to the U.S. Navy in mid-1942, she was shipped to the South Pacific and joined the PT squadrons operating from Tulagi in the Solomon Islands. Lieutenant John F. Kennedy took command in April 1943 and led night strikes against the Japanese 'Tokyo Express' supply runs. On the night of 1-2 August 1943, during a confused action in Blackett Strait, the boat was rammed and cut in two by the Japanese destroyer Amagiri; two crewmen were killed, and Kennedy's efforts to save the survivors became part of his later political legend.",
    "media": [
      {
        "src": "/vehicles/pt-109.jpg",
        "alt": "The Elco 80-foot motor torpedo boat USS PT-109 secured aboard the Liberty ship SS Joseph Stanton at Norfolk Navy Yard in 1942; this is the actual PT-109, not the in-game model.",
        "credit": "U.S. Navy Bureau of Ships Collection (U.S. National Archives #19-N-33165) · Public Domain (PD-USGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "PT-109 - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_elco_80ft_pt109_boat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "PT-109 - War Thunder Wiki (legacy)",
        "url": "https://old-wiki.warthunder.com/PT-109",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 38,
      "lengthM": null,
      "crew": 12
    },
    "propulsion": {
      "maxKnots": 41
    },
    "armament": {
      "mainBattery": "2 x turret, each 2 x 12.7 mm Browning AN-M2 machine gun",
      "secondary": "20 mm/70 Oerlikon Mk.II autocannon",
      "torpedoes": "4 x 21 in wet-heating Mk.8 torpedo",
      "depthCharges": false
    },
    "survivability": "Survivability is poor: the hull and superstructure are unarmoured wood, so the boat relies entirely on speed and a small profile to stay alive. There is no belt, deck, or citadel protection. Incoming fire that reaches the open crew positions, fuel, or torpedo warheads can disable or destroy the boat quickly, so staying mobile and never lingering in the open are essential."
  },
  {
    "id": "s-100",
    "name": "S-100",
    "nation": "germany",
    "class": "naval",
    "subclass": "Motor torpedo boat",
    "rank": "II",
    "battleRatings": {
      "arcade": 2.3,
      "realistic": 2.3,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The S-100 is a German Schnellboot (fast attack craft) of the late-war S-100 series. It pairs a strong autocannon armament built around twin 2 cm Flak and a 3.7 cm gun with four 533 mm torpedoes, making it a flexible gun-and-torpedo boat that can also lay mines. Its armoured wheelhouse is a notable improvement over earlier S-boats, but the wooden hull still limits survivability.",
    "prosCons": {
      "pros": [
        "Heavy mixed battery: twin 2 cm Flak plus a 3.7 cm Flak M42 for sustained firepower",
        "Four 533 mm G7a torpedoes for a powerful long-range strike option",
        "Can swap in EMF moored magnetic mines for area denial",
        "Excellent speed and agility typical of the Schnellboot family",
        "Improved armoured wheelhouse protects key crew better than earlier S-boats"
      ],
      "cons": [
        "Wooden hull means low overall survivability despite the armoured bridge",
        "No depth charges",
        "Large displacement for a coastal boat makes it a sizeable target",
        "Torpedo tubes are fixed-forward, requiring the whole boat to aim"
      ]
    },
    "playstyle": "Use the boat's speed to take an angle on the target, then volley the 2 cm and 3.7 cm guns to strip light targets and aircraft while keeping the torpedoes for larger ships. Line the bow up early for torpedo runs since the tubes fire forward. When playing objectives, the EMF mine option lets the S-100 deny chokepoints. Keep the armoured wheelhouse pointed toward threats and avoid prolonged broadside exposure of the wooden hull.",
    "history": "The S-100 gave its name to the most numerous late-war class of German Schnellboote, built primarily at the Lurssen yard near Bremen from 1943 onward. The design introduced an armoured wheelhouse and other refinements drawn from hard wartime experience, improving crew protection and firepower over earlier boats. The lead boat entered service in 1943 and operated in the coastal-strike role before being lost to British air attack on Le Havre in June 1944. Hundreds of S-100-pattern boats served across the North Sea, English Channel, Baltic, and Mediterranean.",
    "media": [
      {
        "src": "/vehicles/s-100.jpg",
        "alt": "The German Kriegsmarine Schnellboot S 204 flying a white flag of surrender at Felixstowe in May 1945; a sister S-boot rather than an S-100-class boat, not the in-game model.",
        "credit": "Lt. J. E. Russell, Royal Navy official photographer (Imperial War Museums A 28558) · Public Domain (PD-UKGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "S-100 - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_s_100_class",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "S-100 - War Thunder Wiki (legacy)",
        "url": "https://old-wiki.warthunder.com/S-100",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 117,
      "lengthM": null,
      "crew": 21
    },
    "propulsion": {
      "maxKnots": 42
    },
    "armament": {
      "mainBattery": "2 x 2 cm/65 Flakzwilling 38 automatic cannon",
      "secondary": "3.7 cm Flak M42 mounting",
      "aa": "2 x turret, each 7.92 mm MG15 machine gun",
      "torpedoes": "4 x 533 mm G7a torpedo (alternatively 4 x EMF moored magnetic mine)",
      "depthCharges": false
    },
    "survivability": "The S-100 is better protected than earlier S-boats thanks to its armoured wheelhouse, but the main hull is wood and offers no belt, deck, or citadel armour. Crew clustered in the open gun positions remain vulnerable, and concentrated autocannon fire can disable the boat despite its size. Protection therefore comes mainly from the hardened bridge plating, speed, and aggressive maneuvering rather than from any structural armour scheme."
  },
  {
    "id": "mo-4",
    "name": "MO-4",
    "nation": "ussr",
    "class": "naval",
    "subclass": "Sub chaser",
    "rank": "I",
    "battleRatings": {
      "arcade": 1,
      "realistic": 1,
      "simulator": null
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The MO-4 is a small Soviet submarine chaser and reserve-tier coastal craft. It carries two 45 mm cannons fore and aft plus twin 12.7 mm DShK machine guns, and can be fitted with depth charges or a large bank of M-8 rockets, giving a versatile boat that punches above its low battle rating against other early coastal vessels.",
    "prosCons": {
      "pros": [
        "Two 45 mm cannons hit hard against early boats and lightly armoured targets",
        "Twin 12.7 mm DShK mounts add anti-boat and anti-air sting",
        "Optional 64 M-8 rockets deliver a brutal close-range salvo",
        "Depth charges available for objective and area work",
        "Very low battle rating; a strong, forgiving entry point to coastal play"
      ],
      "cons": [
        "Wooden hull gives weak survivability under sustained fire",
        "Modest top speed compared with dedicated torpedo boats",
        "No torpedoes for striking larger ships",
        "45 mm guns in single mounts limit sustained rate of fire"
      ]
    },
    "playstyle": "As a reserve gunboat the MO-4 rewards patient, accurate fire: use the 45 mm cannons to land aimed hits on enemy crew and modules while the DShKs suppress and finish lightly built boats. Save the M-8 rocket salvo for a point-blank pass on a clustered or stationary target where the spread guarantees hits. Keep moving to avoid return fire, and lean on the boat's flexibility - guns, rockets, or depth charges - to suit the match.",
    "history": "The MO-4 was the fourth and most widely produced variant of the Soviet MO-class small guard/sub-chaser boats, with roughly 250 built during the Second World War. These compact wooden craft served across Soviet fleets in anti-submarine patrol, convoy escort, and amphibious-landing support roles. Their experience fed directly into the later, larger BMO class introduced in 1945. Cheap to build and easy to operate, the MO boats were a workhorse of the Soviet coastal defence forces.",
    "media": [
      {
        "src": "/vehicles/mo-4.jpg",
        "alt": "The Soviet Northern Fleet MO-4-type small guard ship/sub chaser MO-125 carrying a landing party during WWII; a sister MO-IV-class boat, not the in-game model.",
        "credit": "Yevgeny Khaldei (TASS) · Public Domain (PD-Russia) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "MO-4 - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_mo_4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "MO-4 - War Thunder Wiki (legacy)",
        "url": "https://old-wiki.warthunder.com/index.php?title=MO-4&printable=yes",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 52,
      "lengthM": null,
      "crew": 22
    },
    "propulsion": {
      "maxKnots": 36
    },
    "armament": {
      "mainBattery": "2 x turret, each 45 mm/68 21-KM cannon",
      "secondary": "2 x turret, each 12.7 mm DShK machine gun",
      "depthCharges": true
    },
    "survivability": "The MO-4 has a wooden hull and superstructure with no belt, deck, or citadel armour, so survivability is low. It depends on its small size, maneuvering, and keeping enemies at the range of its 45 mm guns rather than any protective plating. Open crew positions mean concentrated machine-gun or autocannon fire can quickly knock out the boat, so it should be played as a hit-and-move gun platform."
  },
  {
    "id": "isu-152",
    "name": "ISU-152",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": 4.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Soviet heavy assault gun built on the IS chassis, mounting the enormous 152 mm ML-20S howitzer in a fixed casemate. A single hit from its high-explosive shell can disable or outright destroy almost any opponent it faces, earning the platform its 'Zveroboy' (beast-killer) reputation.",
    "prosCons": {
      "pros": [
        "152 mm shell delivers devastating one-shot potential against any target",
        "Thick, well-shaped casemate front shrugs off many same-rank guns",
        "High explosive round stays lethal even on a near miss",
        "Large-calibre punch is effective against fortified and grouped targets"
      ],
      "cons": [
        "Punishing reload leaves long windows of vulnerability",
        "Small 20-round magazine demands disciplined shot selection",
        "Fixed casemate forces the whole hull to be turned onto a target",
        "Minimal gun depression limits use on uneven ground and ridgelines"
      ]
    },
    "playstyle": "Fight from a hull-down or angled overwatch position where the casemate front can absorb return fire, and pick off targets one at a time. Commit fully to each shot because the reload is unforgiving; reposition or rotate behind cover while the gun is loading rather than trading in the open. Lean on the explosive filler against light and grouped enemies, and let teammates spot and screen for you given the limited traverse.",
    "history": "The ISU-152 entered Red Army service in 1943 as a successor to the SU-152, swapping the KV chassis for the more available IS hull while retaining the 152 mm gun-howitzer. It served in the heavy self-propelled artillery role through the late war, firing on bunkers, fortifications, and enemy armour alike, and remained in service for decades after 1945.",
    "media": [
      {
        "src": "/vehicles/isu-152.jpg",
        "alt": "A Soviet ISU-152 heavy assault gun on display at the Kubinka Tank Museum, Russia; this is the real-world vehicle, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — ISU-152",
        "url": "https://wiki.warthunder.com/unit/ussr_isu_152",
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
      "weightTons": 46,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "ml-20s-152mm",
      "reloadBaseSec": 27.7,
      "reloadAcedSec": 21.3,
      "vertGuidanceDeg": [
        -3,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 20,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "90",
        "side": "90",
        "rear": "60"
      },
      "turretMm": {
        "front": "90",
        "side": "75",
        "rear": "60"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "brummbar",
    "name": "Sturmpanzer (Brummbär)",
    "nation": "germany",
    "class": "ground",
    "subclass": "Assault gun",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.3,
      "simulator": 4.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "German assault gun built on the Panzer IV chassis, carrying a short 150 mm StuH 43 howitzer behind a heavily armoured casemate. Designed to flatten fortifications and infantry, its enormous explosive shell makes it brutally effective against armour at close to medium range.",
    "prosCons": {
      "pros": [
        "150 mm high explosive shell can one-shot most opponents at its rank",
        "Thick 100 mm casemate front resists many enemy guns head-on",
        "Generous gun elevation suits firing over obstacles and at elevated targets",
        "Compact, low profile is easy to conceal in urban or broken terrain"
      ],
      "cons": [
        "Very long reload leaves it helpless between shots",
        "Sluggish mobility and almost no reverse speed make repositioning slow",
        "Fixed casemate and slow traverse force the hull onto each target",
        "Low muzzle velocity demands careful range estimation"
      ]
    },
    "playstyle": "Set up in towns and choke points where engagement ranges are short and the slow gun handling matters less. Use buildings and rubble to hide the hull while keeping the casemate front toward likely threats, and make every shot count given the long reload. Avoid open ground where the poor mobility and crawling reverse speed will get you flanked.",
    "history": "The Sturmpanzer IV, nicknamed Brummbär ('Grouch') by Allied intelligence, was developed in 1943 to provide heavy direct-fire support against fortified positions and built on the proven Panzer IV chassis. Roughly 300 were produced through the end of the war, first seeing action around Kursk and serving in urban fighting where its 150 mm howitzer could demolish defended buildings.",
    "media": [
      {
        "src": "/vehicles/brummbar.jpg",
        "alt": "A German Sturmpanzer IV \"Brummbär\" assault gun preserved at the Musée des Blindés in Saumur, France; this is the real-world vehicle, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Brummbär",
        "url": "https://wiki.warthunder.com/unit/germ_sturmpanzer_IV_brummbar",
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
      "maxFwdKph": 40,
      "maxRevKph": 7,
      "enginePowerHp": null,
      "weightTons": 27.8,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "stuh43-150mm",
      "reloadBaseSec": 22.4,
      "reloadAcedSec": 17.2,
      "vertGuidanceDeg": [
        -8,
        30
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 38,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "100",
        "side": "40",
        "rear": "20"
      },
      "turretMm": {
        "front": "100",
        "side": "50",
        "rear": "80"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m36-jackson",
    "name": "M36 GMC",
    "nation": "usa",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "III",
    "battleRatings": {
      "arcade": 5.3,
      "realistic": 5.3,
      "simulator": 5.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "American tank destroyer mating the M10 hull to an open-topped turret armed with the powerful 90 mm M3 gun. Unlike most casemate destroyers of its era, its rotating turret lets it engage flexibly while the high-velocity gun punches through well-armoured opponents.",
    "prosCons": {
      "pros": [
        "Hard-hitting 90 mm M3 defeats heavy armour frontally at its rank",
        "Full rotating turret allows engaging without exposing the whole hull",
        "Good gun depression suits hull-down and ridge fighting",
        "Fast reload for the calibre keeps up a strong rate of fire"
      ],
      "cons": [
        "Thin hull and turret armour offer little protection",
        "Open-topped turret leaves the crew exposed to strafing and shrapnel",
        "Slow turret traverse can be caught out by close flankers",
        "Lightly built — most penetrating hits do serious crew damage"
      ]
    },
    "playstyle": "Play it as a sniper and second-line support vehicle, using the strong 90 mm gun to kill heavy targets from range where its weak armour is less exposed. Take hull-down positions to exploit the good depression, and rely on the turret to shift fire without giving away your whole hull. Stay out of brawls and watch your flanks, since the slow traverse and paper armour punish being caught up close.",
    "history": "The M36 Gun Motor Carriage was rushed into service in 1944 to counter heavy German armour that the 76 mm-armed tank destroyers struggled against, mounting the 90 mm gun in a new turret on the M10/M4-derived chassis. It proved highly effective in the late-war fighting in Europe and continued to serve with the US and allied nations well after 1945, including in Korea.",
    "media": [
      {
        "src": "/vehicles/m36-jackson.jpg",
        "alt": "A US M36 GMC tank destroyer displayed at Chengkungling, Taiwan, showing its 90 mm gun; this is the real-world vehicle, not the in-game model.",
        "credit": "玄史生 (Xuán Shǐ Shēng) · CC BY-SA 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — M36 GMC",
        "url": "https://wiki.warthunder.com/unit/us_m36",
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
      "maxRevKph": 67,
      "enginePowerHp": null,
      "weightTons": 28.1,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m3-90mm",
      "reloadBaseSec": 9.7,
      "reloadAcedSec": 7.5,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 47,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "38",
        "side": "19",
        "rear": "19"
      },
      "turretMm": {
        "front": "76",
        "side": "31",
        "rear": "25"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "p-47d-thunderbolt",
    "name": "P-47D-28 Thunderbolt",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "III",
    "battleRatings": {
      "arcade": 4,
      "realistic": 4.7,
      "simulator": 4.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The P-47D-28 Thunderbolt is a rank III American single-engine fighter built around mass, altitude performance, and a devastating battery of eight .50-cal Brownings. It is heavy and slow to turn but dives ferociously and shrugs off damage, making it a quintessential high-altitude boom-and-zoom platform.",
    "prosCons": {
      "pros": [
        "Eight 12.7 mm M2 Brownings deliver an overwhelming weight of fire",
        "Excellent high-altitude performance from its turbocharged engine",
        "Rugged airframe absorbs a remarkable amount of damage",
        "Strong, stable diving platform with a high never-exceed speed",
        "Generous ammunition load supports sustained gun runs"
      ],
      "cons": [
        "Heavy airframe accelerates and climbs sluggishly at low altitude",
        "Wide turn radius leaves it vulnerable in flat dogfights",
        "Performance suffers badly when it bleeds energy down low",
        "Large profile is an easy target when slow",
        "Relies on keeping speed and altitude advantage to stay competitive"
      ]
    },
    "playstyle": "Climb high at the start of the match and let the turbocharged engine give you an altitude edge most opponents cannot match, then convert that height into speed with steep, committed dives onto isolated targets. The eight-gun battery destroys anything it touches in a brief pass, so line up a single firing solution, fire a short burst, and zoom back to altitude rather than lingering. Never get dragged into a slow, turning fight near the deck, where the Thunderbolt's weight and modest low-speed climb become liabilities; instead trade altitude for energy, extend, reset, and dive again.",
    "history": "The Republic P-47 Thunderbolt was one of the largest and heaviest single-engine fighters of the war, defined by its big turbocharged R-2800 radial that gave it exceptional high-altitude performance. The D-28 was a late bubble-canopy production block; rugged and heavily armed, Thunderbolts excelled as bomber escorts and, increasingly, as hard-hitting ground-attack aircraft over Europe.",
    "media": [
      {
        "src": "/vehicles/p-47d-thunderbolt.jpg",
        "alt": "A real-world Republic P-47D-22-RE Thunderbolt (serial 42-25969) in a U.S. Air Force photograph, not the in-game model.",
        "credit": "US Air Force · Public Domain (PD-USGov-Military-Air Force) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — P-47D-28",
        "url": "https://wiki.warthunder.com/unit/p-47d-28",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "suspended"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 7071,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 885,
      "ceilingM": 12500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m3-browning-12mm",
          "count": 8
        }
      ],
      "suspended": [
        "Bombs and rockets available as selectable ground-attack payloads (exact loadout not split into reliable per-item figures from the wiki render)"
      ]
    }
  },
  {
    "id": "typhoon-mk-ib",
    "name": "Typhoon Mk Ib",
    "nation": "britain",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "III",
    "battleRatings": {
      "arcade": 3.7,
      "realistic": 4.3,
      "simulator": 4
    },
    "acquisition": [
      "premium",
      "gift"
    ],
    "summary": "The Typhoon Mk Ib is a rank III British premium gift fighter powered by the big Napier Sabre engine and armed with four 20 mm Hispano cannon. It is a fast, heavy low-altitude fighter-bomber that excels in the dive and on the deck rather than in classic high-altitude duels.",
    "prosCons": {
      "pros": [
        "Four 20 mm Hispano Mk.II cannon deliver a hard-hitting punch",
        "Strong low-altitude speed and acceleration from the Sabre engine",
        "Robust airframe well suited to dive-and-extend tactics",
        "Doubles effectively as a fighter-bomber with suspended ordnance",
        "Good high never-exceed speed for committed dives"
      ],
      "cons": [
        "Performance falls off at higher altitudes",
        "Heavy controls and wide turns punish slow dogfighting",
        "Limited cannon ammunition rewards trigger discipline",
        "Climb is unremarkable for its rating once energy is lost",
        "Large airframe is an easy target when it slows down"
      ]
    },
    "playstyle": "Fight the Typhoon at low to medium altitude where the Sabre engine gives it real speed, using boom-and-zoom passes and energy retention rather than flat turns. The four-cannon battery wrecks targets in a short burst, so set up clean diving attacks, fire briefly, and extend away to rebuild speed before re-engaging. Avoid prolonged turnfights and high-altitude duels; instead exploit your dive performance and low-level pace, and lean on the aircraft's secondary fighter-bomber role to strike ground targets when air opposition thins out.",
    "history": "The Hawker Typhoon was designed as a high-altitude interceptor but struggled in that role; it found its calling lower down as one of the RAF's most effective ground-attack aircraft, hammering targets with cannon, bombs, and rockets after D-Day. The Mk Ib standardized the four 20 mm Hispano cannon armament and the powerful but troublesome Napier Sabre engine.",
    "media": [
      {
        "src": "/vehicles/typhoon-mk-ib.jpg",
        "alt": "A real-world Hawker Typhoon Mk Ib (in the livery of JP656) preserved at the Caen Memorial museum, not the in-game model.",
        "credit": "Falcon® Photography · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Typhoon Mk Ib",
        "url": "https://wiki.warthunder.com/unit/typhoon_mk1b",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "suspended"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 6339,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 845,
      "ceilingM": 10500,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "hispano-mk-ii-20mm",
          "count": 4
        }
      ],
      "suspended": [
        "Bombs and rockets available as selectable fighter-bomber payloads (exact loadout not split into reliable per-item figures from the wiki render)"
      ]
    }
  },
  {
    "id": "ki-84-hayate",
    "name": "Ki-84 Hayate",
    "nation": "japan",
    "class": "aviation",
    "subclass": "Fighter",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6,
      "realistic": 5.3,
      "simulator": 5
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Ki-84 ko Hayate is a rank IV Japanese single-engine fighter combining excellent climb, strong energy retention, and balanced handling with a mixed cannon-and-machine-gun battery. It is one of Japan's most capable late-war fighters, comfortable in both vertical and turning engagements.",
    "prosCons": {
      "pros": [
        "Excellent rate of climb and good energy retention",
        "Well-rounded handling for both vertical and turning fights",
        "Mixed 20 mm and 12.7 mm battery is effective against fighters",
        "Strong top-end performance for a late-war Japanese fighter",
        "High ceiling allows it to contest altitude"
      ],
      "cons": [
        "Relatively light armament burst mass compared to cannon-heavy rivals",
        "Handling becomes less responsive and can lose control at high speeds",
        "Airframe is not especially durable under concentrated fire",
        "Limited cannon ammunition rewards accurate shooting",
        "Faces tough fast opposition at its battle rating"
      ]
    },
    "playstyle": "Play to the Hayate's strengths in the vertical: use its strong climb to gain an early altitude advantage, then dictate engagements with zoom climbs and well-timed dives rather than committing to drawn-out flat turns against dedicated dogfighters. The mixed 20 mm Ho-5 and 12.7 mm Ho-103 battery rewards getting close and firing concentrated bursts. Be mindful of control stiffening at high speed, so avoid over-committing in steep high-speed dives, and conserve cannon ammunition for decisive firing solutions while leaning on energy fighting to stay alive at a demanding rating.",
    "history": "The Nakajima Ki-84 Hayate (\"Gale\") was among the best Japanese Army fighters of the war, combining strong climb, speed, and firepower in a package intended to counter increasingly capable Allied aircraft. Though hampered late in the war by manufacturing-quality and fuel problems, a well-built and well-flown Hayate was a formidable opponent.",
    "media": [
      {
        "src": "/vehicles/ki-84-hayate.jpg",
        "alt": "A real-world Nakajima Ki-84 Hayate (\"Frank\") photographed at Ontario Airport, California, in 1970, not the in-game model.",
        "credit": "RuthAS · CC BY 3.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Ki-84 ko",
        "url": "https://wiki.warthunder.com/unit/ki_84_ko",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "suspended"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 6000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 837,
      "ceilingM": 13000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "ho-5-20mm",
          "count": 2
        },
        {
          "weaponId": "ho-103-12mm",
          "count": 2
        }
      ],
      "suspended": [
        "Bombs available as selectable payloads (exact loadout not split into reliable per-item figures from the wiki render)"
      ]
    }
  },
  {
    "id": "pz-iv-g",
    "name": "Pz.Kpfw.IV Ausf.G",
    "nation": "germany",
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
    "summary": "The Ausf.G marks the moment the Panzer IV stopped being a support tank and became a genuine medium gunfighter. Bolting the long 75 mm KwK40 L/43 onto the familiar boxy hull gave Germany an early-war answer to the T-34 and Sherman, trading the old stubby howitzer for a flat-shooting cannon that can punch through almost anything it faces at its battle rating.",
    "prosCons": {
      "pros": [
        "Long 75 mm KwK40 hits hard with a flat trajectory and excellent penetration for the rank",
        "Generous -10 degrees of gun depression suits hull-down and hill-crest fighting",
        "Large 87-round ammo load lets it stay in the fight",
        "Strong 80 mm hull front shrugs off many same-rank shells head-on"
      ],
      "cons": [
        "Thin 30 mm sides and 50 mm turret front are easy to defeat from angles",
        "Modest mobility leaves it slow to reposition",
        "Tall, slab-sided silhouette is hard to hide",
        "Five-man crew is spread thin against fast-killing autocannons and large-caliber HE"
      ]
    },
    "playstyle": "Fight at range where the L/43's penetration and flat shot let you trade favourably while your hull armour does the work. Use the deep gun depression to peek over ridgelines, expose only the well-armoured upper front, and pull back before flankers reach your weak sides. Avoid brawls; the side and turret armour will not survive a close-range exchange.",
    "history": "The Ausf.G was produced from 1942 and standardised the up-gunning of the Panzer IV with the long 7.5 cm KwK 40, first in the L/43 and later the L/48 length. The change was a direct field response to the shock of encountering well-armoured Soviet T-34 and KV tanks, and it kept the Panzer IV relevant as Germany's workhorse medium tank through the middle of the war.",
    "media": [
      {
        "src": "/vehicles/pz-iv-g.jpg",
        "alt": "A German Panzer IV Ausf. G (Sd.Kfz. 161) with the 75 mm KwK 40 L/48 gun, on display at the Patriot Museum, Kubinka; this is the real-world vehicle, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Pz.Kpfw.IV Ausf.G — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_IV_ausf_G",
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
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 23.7,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "kwk40-75mm",
      "reloadBaseSec": 7.6,
      "reloadAcedSec": 5.9,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": 11.2,
      "ammoCapacity": 87,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "80",
        "side": "30",
        "rear": "20"
      },
      "turretMm": {
        "front": "50",
        "side": "30",
        "rear": "30"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "t-34-1941",
    "name": "T-34 (1941)",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 4,
      "realistic": 4,
      "simulator": 4
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The 1941 T-34 is the early sloped-armour medium that taught the world a hard lesson in protection. Its angled 45 mm plates behave like far thicker armour, and the 76 mm F-34 gun can deal with most of what it meets, making it a fast, hard-to-kill brawler that rewards aggressive, angled play.",
    "prosCons": {
      "pros": [
        "Steeply sloped hull armour deflects and absorbs shots far above its nominal 45 mm",
        "Capable 76 mm F-34 gun with a solid ammo selection",
        "Good mobility for flanking and seizing positions",
        "Compact, low front profile is awkward for enemies to penetrate cleanly"
      ],
      "cons": [
        "Very poor -5 degrees of gun depression makes ridgeline and hull-down play difficult",
        "Cramped four-man crew with no dedicated loader slows the gun and is fragile",
        "Flat turret sides and rear are vulnerable to flankers",
        "Two-man turret overloads the commander, hurting situational awareness"
      ]
    },
    "playstyle": "Play to the armour: keep the hull angled around 30 degrees so the sloped plates bounce incoming fire, and stay mobile to flank rather than sit still. Because gun depression is so limited, favour flat ground and avoid cresting hills. Pick your shots, since the small crew means every penetration tends to be crippling.",
    "history": "The T-34 entered service in 1940 and stunned German forces in 1941 with its combination of sloped armour, wide tracks, a diesel engine, and a hard-hitting 76 mm gun. Early models like this one used the two-man turret that overworked the commander, a flaw later addressed by the 85 mm three-man-turret variants, but the design's overall balance made it one of the most influential tanks of the war.",
    "media": [
      {
        "src": "/vehicles/t-34-1941.jpg",
        "alt": "A Soviet T-34 model 1941 with the 76 mm F-34 gun, on display in Hall 9 of the Patriot Museum, Kubinka; this is the real-world vehicle, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "T-34 (1941) — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
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
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 28.3,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "f-34-76mm",
      "reloadBaseSec": 9,
      "reloadAcedSec": 6.9,
      "vertGuidanceDeg": [
        -5,
        30
      ],
      "turretTraverseDegSec": 17.5,
      "ammoCapacity": 77,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "45",
        "side": "45",
        "rear": "40"
      },
      "turretMm": {
        "front": "45",
        "side": "45",
        "rear": "45"
      },
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "sherman-firefly",
    "name": "Sherman Firefly",
    "nation": "britain",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": 4.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Firefly is the British answer to heavier German armour: take a reliable Sherman hull and cram in the formidable QF 17-pounder. The result is an unremarkable medium tank carrying one of the hardest-hitting guns at its rank, capable of knocking out targets that shrug off ordinary Sherman fire.",
    "prosCons": {
      "pros": [
        "QF 17-pounder delivers outstanding penetration and shell power for the battle rating",
        "Decent turret front protection for a Sherman at 76 mm",
        "Large 80-round ammo capacity",
        "Reliable, well-understood Sherman platform"
      ],
      "cons": [
        "Thin 51 mm hull front is easy to penetrate frontally",
        "Tall silhouette makes hiding and going hull-down awkward",
        "Limited -4 degrees of gun depression restricts hull-down play",
        "Long gun and big breech crowd the turret, exposing the crew"
      ]
    },
    "playstyle": "Fight at medium to long range and let the 17-pounder do the talking before the enemy can close. Hide the weak hull behind cover or terrain and expose mainly the better-protected turret. Aim carefully; the gun punishes any target it hits, but the thin hull means you cannot afford to take return fire in the open.",
    "history": "The Sherman Firefly was a British field conversion that mated the powerful 17-pounder anti-tank gun to the American M4 Sherman. With Allied tanks struggling against the frontal armour of late-war German heavies, the Firefly gave armoured units a Sherman that could reliably defeat Panthers and Tigers, and German crews were known to prioritise it as a target on the battlefield.",
    "media": [
      {
        "src": "/vehicles/sherman-firefly.jpg",
        "alt": "A British Sherman Firefly armed with the 17-pounder gun, on display at The Tank Museum, Bovington; this is the real-world vehicle, not the in-game model.",
        "credit": "Michael Gaylard · CC BY 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Sherman Firefly — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/Sherman_Firefly",
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
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 37.1,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "qf-17pdr-76mm",
      "reloadBaseSec": 7.6,
      "reloadAcedSec": 5.9,
      "vertGuidanceDeg": [
        -4,
        21
      ],
      "turretTraverseDegSec": 16.8,
      "ammoCapacity": 80,
      "ammoTypeIds": []
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
      "crewCount": 4,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "maus",
    "name": "Maus",
    "nation": "germany",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "V",
    "battleRatings": {
      "arcade": 8,
      "realistic": 7.7,
      "simulator": 7.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Panzerkampfwagen VIII Maus is the heaviest tank in War Thunder, a 188-tonne fortress that trades all mobility for armour and firepower. Its thick, well-angled plating shrugs off most rounds at its rank, and its 128 mm gun deletes nearly anything it hits. The catch is that it crawls into position and turns its turret slowly, so positioning and patience define every match.",
    "prosCons": {
      "pros": [
        "Extremely thick, well-shaped hull and turret armour",
        "128 mm gun penetrates and one-shots most opponents",
        "Secondary 75 mm gun supplements the main armament",
        "Huge crew and internal volume absorb hits"
      ],
      "cons": [
        "Glacial top speed and acceleration",
        "Slow turret traverse leaves it vulnerable to flankers",
        "Enormous silhouette is impossible to hide",
        "Long reload punishes a missed shot"
      ]
    },
    "playstyle": "Pick a firing lane early and hold it. Angle the hull to bounce shots while the autoloader-slow gun cycles, and rely on the secondary 75 mm to finish lightly armoured targets between main-gun reloads. Never let lighter, faster tanks circle the slow turret; keep a wall or teammate covering your flanks.",
    "history": "Designed late in the Second World War as a German super-heavy breakthrough tank, the Maus was the largest fully enclosed armoured fighting vehicle ever built. Only a pair of prototypes were completed before the war ended, and the project never saw combat. Its mating of a 128 mm primary and a 75 mm secondary gun in one turret reflected the doctrine of a mobile pillbox able to engage both armour and soft targets.",
    "media": [
      {
        "src": "/vehicles/maus.jpg",
        "alt": "The surviving German Panzer VIII Maus super-heavy tank on display at the Kubinka Tank Museum, Russia; this is the real-world vehicle, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Official Wiki — Maus",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_Maus",
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
      "weightTons": 188,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "kwk44-128mm",
      "reloadBaseSec": 23.6,
      "reloadAcedSec": 18.2,
      "vertGuidanceDeg": [
        -7,
        23
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 68,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "200",
        "side": "180",
        "rear": "160"
      },
      "turretMm": {
        "front": "232",
        "side": "205",
        "rear": "200"
      },
      "crewCount": 6,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "kv-1",
    "name": "KV-1 (ZiS-5)",
    "nation": "ussr",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 4.7,
      "simulator": 4.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The KV-1 (ZiS-5) is an up-gunned model of the Soviet heavy tank line, pairing the familiar boxy, heavily armoured KV hull with the longer 76 mm ZiS-5 cannon. Its flat 100 mm frontal plate and 90 mm turret are tough to crack at its rating, and the improved gun gives it the punch to answer most contemporaries head-on.",
    "prosCons": {
      "pros": [
        "Thick, simple armour layout bounces many rounds frontally",
        "76 mm ZiS-5 has solid penetration for its battle rating",
        "Generous 135-round ammo stowage",
        "Five-man crew is resilient to knockouts"
      ],
      "cons": [
        "Sluggish acceleration and modest top speed",
        "Limited gun depression restricts hull-down play",
        "Large, slab-sided profile is easy to hit",
        "Long reload between shots"
      ]
    },
    "playstyle": "Use the KV-1's armour to push key chokepoints, angling the hull slightly to defeat shots on the flat plates. Trade carefully given the reload, and avoid cresting steep ridges where the limited depression exposes your roof. Let lighter teammates scout while you anchor a lane.",
    "history": "The KV-1 was the Soviet Union's principal heavy tank in the early years of the German-Soviet war, notorious for shrugging off German anti-tank fire in 1941. The ZiS-5 production model standardised a more powerful 76 mm gun, improving its ability to fight enemy armour while retaining the heavy protection that made the design famous.",
    "media": [
      {
        "src": "/vehicles/kv-1.jpg",
        "alt": "A Soviet KV-1 heavy tank displayed at the Breakthrough of the Leningrad Blockade museum-diorama near Kirovsk, Russia; this is the real-world vehicle, not the in-game model.",
        "credit": "One half 3544 · Public Domain · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Official Wiki — KV-1 (ZiS-5)",
        "url": "https://wiki.warthunder.com/unit/ussr_kv_1_zis_5",
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
      "weightTons": 46.4,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "zis-5-76mm",
      "reloadBaseSec": 9,
      "reloadAcedSec": 6.9,
      "vertGuidanceDeg": [
        -5,
        25
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 135,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "100",
        "side": "75",
        "rear": "70"
      },
      "turretMm": {
        "front": "90",
        "side": "90",
        "rear": "90"
      },
      "crewCount": 5,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m6a1",
    "name": "M6A1",
    "nation": "usa",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 4.7,
      "realistic": 5,
      "simulator": 5
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M6A1 is the United States' early heavy tank, a tall, riveted-and-cast hull carrying a 76 mm M7 main gun alongside a 37 mm gun mounted beside it in the turret. Reasonable frontal armour and a high rate of fire from its 76 mm let it duel medium tanks effectively, though its towering profile makes concealment difficult.",
    "prosCons": {
      "pros": [
        "76 mm M7 reloads quickly for a heavy tank",
        "Secondary 37 mm gun supplements the main armament against light targets",
        "Decent 101 mm frontal hull and turret armour",
        "Good gun depression of -10° suits hull-down positions"
      ],
      "cons": [
        "Very tall silhouette is hard to hide",
        "Weak side and rear armour invite flanking",
        "Mediocre mobility for its weight",
        "Large crew compartment can still be knocked out by big-calibre hits"
      ]
    },
    "playstyle": "Exploit the strong gun depression to fight from ridgelines, exposing only the turret. The fast-reloading 76 mm rewards aggressive trading, while the side-mounted 37 mm can quickly finish lightly armoured vehicles. Keep your thin flanks angled away from the enemy and avoid open-field brawls where your height is exposed.",
    "history": "The M6 was an early American attempt at a heavy tank, developed in the early 1940s. Few were built and none saw combat, as US doctrine favoured the more mobile M4 medium. The M6A1 variant featured a cast hull and mounted a 3-inch (76 mm) gun together with a coaxially-paired 37 mm gun in its turret, reflecting the period's interest in combining a heavy anti-armour weapon with a lighter quick-firing piece.",
    "media": [
      {
        "src": "/vehicles/m6a1.jpg",
        "alt": "A US M6 heavy tank photographed at Fort Knox in 1943 (the file does not specify M6 vs. M6A1 variant); this is the real-world vehicle, not the in-game model.",
        "credit": "U.S. Army · Public Domain (work of U.S. Federal Government) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Official Wiki — M6A1",
        "url": "https://wiki.warthunder.com/unit/us_m6a1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
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
      "maxRevKph": 5,
      "enginePowerHp": null,
      "weightTons": 56.8,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m7-76mm",
      "reloadBaseSec": 7.6,
      "reloadAcedSec": 5.9,
      "vertGuidanceDeg": [
        -10,
        30
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 75,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "101",
        "side": "69",
        "rear": "44"
      },
      "turretMm": {
        "front": "101",
        "side": "82",
        "rear": "82"
      },
      "crewCount": 6,
      "era": false,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "a-10a-thunderbolt",
    "name": "A-10A Thunderbolt II",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Attacker",
    "rank": "VII",
    "battleRatings": {
      "arcade": 10.3,
      "realistic": 10.7,
      "simulator": 10.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The A-10A Thunderbolt II is a rank VII American jet attacker built around its enormous 30 mm GAU-8/A rotary cannon, a gun so potent it can shred tanks from the front and gut light vehicles in a single pass. It trades speed and agility for a heavy, varied ordnance load, twin survivable engines, and a stable gun platform tailored for low-altitude close air support.",
    "prosCons": {
      "pros": [
        "Devastating 30 mm GAU-8/A cannon chews through ground targets",
        "Carries a large, flexible mix of bombs, rockets, and AGM-65D Mavericks",
        "AIM-9L Sidewinders give a real self-defense option against fighters",
        "Twin TF34 engines add redundancy and survivability when hit",
        "Stable, forgiving gun platform for precise strafing runs"
      ],
      "cons": [
        "Very slow for its battle rating, easy prey for jets",
        "Poor acceleration and energy retention after a dive",
        "Large airframe is an easy target for radar and IR missiles",
        "Limited high-altitude performance keeps it tied to the deck",
        "Vulnerable while lining up slow, committed attack runs"
      ]
    },
    "playstyle": "Fly the A-10A as a dedicated ground-pounder that lives at low altitude and never picks a fair fight with fighters. Open engagements with AGM-65D Mavericks from standoff range to thin out armour, then commit to gun and rocket runs on softer targets, always keeping an escape route and friendly cover in mind. Because it is slow and ponderous, stay near your team, use terrain to mask your approach, and break off the moment an enemy fighter turns your way rather than trying to out-turn or out-run it; the AIM-9L is a last-resort deterrent, not a dogfighting tool.",
    "history": "Developed by Fairchild Republic in the 1970s, the A-10 was the first U.S. Air Force aircraft designed specifically for close air support, with the airframe effectively built around the massive GAU-8/A Avenger cannon. Its redundant systems, armoured cockpit 'bathtub', and ability to fly on one engine made it famously survivable, and it earned the affectionate nickname 'Warthog' while serving as a frontline tank-buster for decades.",
    "media": [
      {
        "src": "/vehicles/a-10a-thunderbolt.jpg",
        "alt": "A real-world Fairchild Republic OA-10C Thunderbolt II of the 25th Fighter Squadron taking off from Osan Air Base, a later variant of the A-10A, not the in-game model.",
        "credit": "Staff Sgt. Craig Cisek, U.S. Air Force · Public Domain (PD-USGov-Military-Air Force) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — A-10A Late (a_10a_late)",
        "url": "https://wiki.warthunder.com/unit/a_10a_late",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 0,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 874,
      "ceilingM": 12497,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "gau-8-30mm",
          "count": 1
        }
      ],
      "suspended": [
        "AIM-9L Sidewinder air-to-air missiles",
        "500 lb LDGP Mk 82 bombs (up to 10)",
        "500 lb Mk 82 Snakeye retarded bombs (up to 10)",
        "2000 lb LDGP Mk 84 bombs (up to 6)",
        "70 mm Hydra-70 M247 rockets (pods of 7 or 21)",
        "AGM-65D Maverick air-to-ground missiles (up to 3)"
      ]
    }
  },
  {
    "id": "su-25",
    "name": "Su-25",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Attacker",
    "rank": "VI",
    "battleRatings": {
      "arcade": 10.7,
      "realistic": 10.3,
      "simulator": 10.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Su-25 is a rank VI Soviet jet attacker designed for rugged, low-level close air support, carrying a fixed twin-barrel 30 mm GSh-30-2 cannon and a wide spread of unguided rockets, bombs, and guided Kh-29L missiles. It is tough and well-armed for striking ground targets, but slow and clumsy enough that it must avoid fighters at all costs.",
    "prosCons": {
      "pros": [
        "Hard-hitting GSh-30-2 30 mm cannon with a high rate of fire",
        "Huge variety of rockets and bombs for any ground role",
        "Kh-29L guided missiles deliver heavy standoff strikes",
        "R-60M missiles offer a credible self-defense option",
        "Sturdy airframe and twin engines aid survivability"
      ],
      "cons": [
        "Sluggish top speed and acceleration for its rating",
        "Poor energy retention makes it easy to run down",
        "Large, non-stealthy target for radar and IR threats",
        "Weak turn fight performance against dedicated fighters",
        "Exposed during slow, committed attack passes"
      ]
    },
    "playstyle": "Operate the Su-25 as a low-altitude strike platform that leans on its ordnance rather than its flight performance. Use Kh-29L missiles and rockets to attack armour from a distance, then close in with the GSh-30-2 only against softer targets when the airspace is clear. Stay near the deck, exploit terrain masking, and keep R-60M missiles ready purely as a deterrent; with its modest speed and turn rate, the Su-25 should disengage and rely on friendly cover instead of attempting to dogfight enemy jets.",
    "history": "Entering Soviet service in the early 1980s, the Su-25 'Grach' was the USSR's answer to the dedicated battlefield attacker, emphasising heavy armour around the pilot and engines, simple rugged construction, and a large ordnance load for supporting ground forces. It saw extensive combat in Afghanistan and many later conflicts, earning a reputation as a tough, hard-to-kill close air support aircraft.",
    "media": [
      {
        "src": "/vehicles/su-25.jpg",
        "alt": "A real-world Soviet Sukhoi Su-25UT \"Frogfoot\" (trainer variant) at the 1989 Paris Air Show, not the in-game model.",
        "credit": "Master Sergeant Dave Casey, U.S. DoD · Public Domain (PD-USGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Su-25 (su_25)",
        "url": "https://wiki.warthunder.com/unit/su_25",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 1000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1100,
      "ceilingM": 11000,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "gsh-30-2-30mm",
          "count": 1
        }
      ],
      "suspended": [
        "R-60 / R-60M air-to-air missiles",
        "Kh-25 / Kh-25ML air-to-ground missiles",
        "Kh-29L guided air-to-ground missiles",
        "S-5KP, S-8KO, S-13OF, S-24B, S-25O/OF/OFM unguided rockets",
        "OFAB-100 / OFAB-250sv high-explosive bombs",
        "FAB-500M-62 bombs and retarded variants",
        "ZB-500 incendiary bombs",
        "GSh-23L gun pods",
        "Drop tanks"
      ]
    }
  },
  {
    "id": "harrier-gr1",
    "name": "Harrier GR.1",
    "nation": "britain",
    "class": "aviation",
    "subclass": "Attacker",
    "rank": "VI",
    "battleRatings": {
      "arcade": 10,
      "realistic": 9.7,
      "simulator": 9.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Harrier GR.1 is a rank VI British jet attacker, a subsonic VTOL-capable strike aircraft armed with two 30 mm ADEN cannon and a flexible load of bombs, rockets, and SRAAM air-to-air missiles. It blends respectable straight-line speed with a heavy ground-attack payload, but is best flown as a strike platform rather than a dogfighter.",
    "prosCons": {
      "pros": [
        "Twin 30 mm ADEN cannon hit hard against ground and air targets",
        "Good carrying capacity of bombs and rocket pods",
        "SRAAM missiles provide a short-range self-defense option",
        "Decent low-altitude speed for repositioning between targets",
        "Versatile ordnance suits multiple strike roles"
      ],
      "cons": [
        "Subsonic top speed limits escape against faster jets",
        "Modest turn performance in a sustained dogfight",
        "Large, easily spotted airframe on attack runs",
        "Limited missile defense beyond short-range SRAAMs",
        "Vulnerable while slow and committed to ground attacks"
      ]
    },
    "playstyle": "Use the Harrier GR.1 as a fast strike aircraft that delivers its ordnance and leaves before fighters can engage. Make high-speed bombing and rocket runs at low altitude, relying on the twin ADEN cannon for follow-up passes against softer targets and as an air-to-air option in a pinch. Keep SRAAMs ready to discourage pursuers, but avoid prolonged turn fights; its strengths lie in speed, payload, and hit-and-run tactics rather than classic dogfighting.",
    "history": "The Harrier GR.1 was the first operational variant of the British Aerospace Harrier, a pioneering V/STOL ground-attack jet that could take off and land vertically thanks to its vectored-thrust Pegasus engine. Entering RAF service in 1969, it proved the practicality of jump-jet operations from short, improvised sites and laid the groundwork for the long line of Harriers that followed.",
    "media": [
      {
        "src": "/vehicles/harrier-gr1.jpg",
        "alt": "A real-world Hawker Siddeley Harrier GR.3 (XZ133), the later variant of the GR.1, at the Imperial War Museum Duxford, not the in-game model.",
        "credit": "Alan Wilson · CC BY-SA 2.0 · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "War Thunder Wiki — Harrier GR.1 (harrier_gr1)",
        "url": "https://wiki.warthunder.com/unit/harrier_gr1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 0,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1463,
      "ceilingM": 12192,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "aden-30mm",
          "count": 2
        }
      ],
      "suspended": [
        "SRAAM air-to-air missiles (up to 2)",
        "RP rockets (36 or 72)",
        "Type 23 SNEB rockets (18 or 36)",
        "Mk.M2 540 lb bombs (up to 2)",
        "1000 lb H.E. M.C. Mk.13 bombs (up to 2)",
        "1000 lb high-drag retarded bombs (up to 2)",
        "Mk 77 mod 4 incendiary bombs (up to 4)"
      ]
    }
  },
  {
    "id": "uss-pensacola",
    "name": "USS Pensacola",
    "nation": "usa",
    "class": "naval",
    "subclass": "Heavy cruiser",
    "rank": "IV",
    "battleRatings": {
      "arcade": 5.7,
      "realistic": 5.7,
      "simulator": 5.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Lead ship of the Pensacola class, this American heavy cruiser trades a slightly lighter ten-gun 8-inch main battery and thin armour for a low battle rating. She rewards patient, ranged gunnery and careful angling rather than brawling.",
    "prosCons": {
      "pros": [
        "Ten 8-inch (203 mm) main guns deliver a heavy broadside for the rank",
        "Strong dual-purpose and light AA suite for fending off aircraft",
        "Low battle rating relative to her firepower",
        "Good fire-support gunnery at range"
      ],
      "cons": [
        "Very thin protection that detonates easily when broadside",
        "No torpedo armament for close-range threats",
        "Cramped citadel makes her fragile to plunging fire and large-calibre hits"
      ]
    },
    "playstyle": "Fight at range and keep the bow or stern angled to attackers so incoming shells skip or strike sloped plating rather than the citadel. Use the full ten-gun battery to land early straddles, then walk fire onto the waterline of enemy cruisers. Lean on the heavy AA battery against aircraft, and disengage rather than trade blows up close, since the armour cannot absorb sustained punishment.",
    "history": "USS Pensacola was the name ship of her class of so-called treaty cruisers, completed around 1930 under the displacement limits of the Washington and London naval treaties. Nicknamed the Grey Ghost, she served extensively in the Pacific during the Second World War, taking part in carrier screening, the Battle of Tassafaronga where she was badly damaged by a torpedo, and shore-bombardment duties at island landings such as Iwo Jima and Okinawa. After the war she survived the Operation Crossroads atomic tests before being expended as a target.",
    "media": [
      {
        "src": "/vehicles/uss-pensacola.jpg",
        "alt": "A real-world photograph of USS Pensacola (CA-24) underway at sea in September 1935, not the in-game model.",
        "credit": "Unknown author (U.S. Navy) · Public Domain (PD-USGov-Navy) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "USS Pensacola - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_cruiser_pensacola_class",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "torpedoes",
      "beltMm",
      "deckMm",
      "survivability",
      "brSimulator"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 12050,
      "lengthM": null,
      "crew": 923
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "10 x 203 mm (8 inch/55 Mark 9) cannon in four turrets (two twin, two triple)",
      "secondary": "8 x 127 mm (5 inch/25 Mk.13) dual-purpose cannon",
      "aa": "8 x 1.1 inch/75 Mk.1 (two quad mounts) and 4 x 12.7 mm Browning AN-M2 machine guns",
      "depthCharges": false
    },
    "armor": {
      "citadel": "Citadel 31/76/25 mm; main fire tower 63/19/19 mm; hull 19 mm and superstructure 17 mm (steel)"
    }
  },
  {
    "id": "admiral-graf-spee",
    "name": "Admiral Graf Spee",
    "nation": "germany",
    "class": "naval",
    "subclass": "Heavy cruiser",
    "rank": "IV",
    "battleRatings": {
      "arcade": 6,
      "realistic": 6,
      "simulator": 6
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A Deutschland-class so-called pocket battleship, Graf Spee mounts six 283 mm guns on a cruiser hull. She out-ranges and out-hits any cruiser at her rank but reloads slowly, leaning on her 150 mm secondaries between salvoes.",
    "prosCons": {
      "pros": [
        "Six 283 mm main guns out-range and out-punch any cruiser at her rank",
        "Heavy 150 mm secondary battery sustains damage between main-gun reloads",
        "Thick belt and turret armour for a cruiser",
        "Carries 533 mm torpedoes for close threats"
      ],
      "cons": [
        "Long main-gun reload demands disciplined shot placement",
        "Sluggish for a cruiser, making repositioning slow",
        "Large profile is easy to spot and target"
      ]
    },
    "playstyle": "Open at maximum range and use the 283 mm rifles to land devastating early salvoes on enemy capitals and cruisers, accepting that the long reload means each shot must count. Bridge the reload gaps with the 150 mm secondaries on closer targets. Angle the thick belt to bounce return fire, and hold the torpedoes in reserve for any enemy that closes the distance.",
    "history": "Admiral Graf Spee was the third Deutschland-class ship, a design built under Versailles Treaty tonnage limits that combined battleship-calibre 283 mm guns with diesel propulsion on a heavily armoured cruiser-sized hull, earning the class the nickname pocket battleships. In the opening months of the Second World War she raided Allied merchant shipping in the South Atlantic and Indian Ocean. Intercepted by a Royal Navy squadron at the Battle of the River Plate in December 1939, she was damaged and took refuge in Montevideo, where her captain ordered her scuttled rather than risk her crew in a renewed action.",
    "media": [
      {
        "src": "/vehicles/admiral-graf-spee.jpg",
        "alt": "A real-world photograph of the German pocket battleship (Panzerschiff) Admiral Graf Spee in 1936, not the in-game model.",
        "credit": "Imperial War Museum · Public Domain (PD-UKGov) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "Admiral Graf Spee - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_cruiser_admiral_graf_spee",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "beltMm",
      "deckMm",
      "survivability"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 16320,
      "lengthM": null,
      "crew": 1175
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "6 x 283 mm/52 SK C/28 cannon in two triple turrets",
      "secondary": "8 x 150 mm (15 cm/55 SK C/28) cannon",
      "aa": "6 x 105 mm (10.5 cm/60 SK C/33) AA cannon, 8 x 37 mm (3.7 cm SK C/30) and 14 x 20 mm (2 cm/65 C/30) automatic cannon",
      "torpedoes": "8 x 533 mm G7a torpedoes",
      "depthCharges": false
    },
    "armor": {
      "citadel": "Citadel 100/100/30 mm; main fire tower 140/80/170 mm; hull 25 mm and superstructure 8 mm (steel)"
    }
  },
  {
    "id": "ijn-mogami",
    "name": "IJN Mogami",
    "nation": "japan",
    "class": "naval",
    "subclass": "Heavy cruiser",
    "rank": "V",
    "battleRatings": {
      "arcade": 6,
      "realistic": 6,
      "simulator": 6
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Mogami in her 1940 heavy-cruiser configuration swaps her original 155 mm guns for ten 203 mm rifles. Fast and well rounded, her standout feature is a massive Type 93 Long Lance torpedo armament that can devastate anything that closes in.",
    "prosCons": {
      "pros": [
        "Ten 203 mm main guns in five twin turrets give a strong, fast-firing broadside",
        "Twenty-four 610 mm Type 93 Long Lance torpedoes",
        "Good mobility for a heavy cruiser",
        "Reconnaissance floatplanes aid spotting and capture play"
      ],
      "cons": [
        "Thin protection typical of Japanese treaty cruisers",
        "Torpedo magazines are vulnerable to detonation under fire",
        "Citadel can be penetrated by larger-calibre opponents"
      ]
    },
    "playstyle": "Use her speed to control the engagement range, raking enemy cruisers with the ten-gun 203 mm battery while staying angled to limit penetrating hits. Set up torpedo launches across likely enemy lanes; the long-range Type 93s can sink capital ships that never see them coming. Send the floatplanes to spot and cap, and avoid prolonged close brawls where her thin armour and exposed torpedoes become a liability.",
    "history": "Mogami was the name ship of a class of Japanese cruisers laid down in the early 1930s, initially armed with fifteen 155 mm guns to fit treaty light-cruiser limits but designed for later up-gunning. After early stability problems prompted hull bulging and reconstruction, she was rearmed with ten 203 mm guns, reclassifying her as a heavy cruiser. She fought across the Pacific war, suffered a serious collision at the Battle of Midway, was later rebuilt as an aircraft-carrying cruiser, and was finally lost during the Battle of Leyte Gulf in 1944.",
    "media": [
      {
        "src": "/vehicles/ijn-mogami.jpg",
        "alt": "A real-world photograph of the Imperial Japanese Navy cruiser Mogami running sea trials at full speed in 1935, not the in-game model.",
        "credit": "Unknown author · Public Domain (PD-Japan-oldphoto) · Wikimedia Commons",
        "type": "image"
      }
    ],
    "sources": [
      {
        "label": "IJN Mogami - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_cruiser_mogami",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "lengthM",
      "maxKnots",
      "beltMm",
      "deckMm",
      "survivability"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "hull": {
      "displacementTons": 15091,
      "lengthM": null,
      "crew": 910
    },
    "propulsion": {
      "maxKnots": null
    },
    "armament": {
      "mainBattery": "10 x 203 mm (20.3 cm/50 3rd Year Type No.2) cannon in five twin turrets",
      "secondary": "8 x 127 mm (5 inch/40 Type 89) cannon in four twin turrets",
      "aa": "8 x 25 mm (Type 96) automatic cannon and 4 x 13.2 mm Type 93 machine guns",
      "torpedoes": "24 x 610 mm Type 93 Model 1 Mod 2 torpedoes",
      "depthCharges": false
    },
    "armor": {
      "citadel": "Citadel 105/100/35 mm; main fire tower 25/25/25 mm; hull 25 mm and superstructure 13 mm (steel)"
    }
  },
  {
    "id": "stug-iii-g",
    "name": "StuG III G",
    "nation": "germany",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "II",
    "battleRatings": {
      "arcade": 4.3,
      "realistic": 4,
      "simulator": 4
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The ultimate production variant of the StuG III assault-gun family, the G pairs a low, compact casemate hull with the same long 75 mm StuK40 L/48 found on the Panzer IV. Strong frontal plating and a tiny silhouette make it a natural ambush predator at its battle rating, while the fixed casemate forces deliberate, positional play.",
    "prosCons": {
      "pros": [
        "Long 75 mm StuK40 L/48 with potent armour penetration",
        "Thick 80 mm frontal plate shrugs off many same-tier guns",
        "Very low profile makes it easy to hide and hull-down",
        "Compact and relatively light for its protection"
      ],
      "cons": [
        "Fixed casemate gun has a narrow horizontal arc; flanks are deadly",
        "Limited -6 degrees of gun depression hampers ridge fighting",
        "Thin 30 mm side armour is easily defeated",
        "No turret means slow target switching against multiple threats"
      ]
    },
    "playstyle": "Play it as a sniper and ambusher. Pick a hull-down or concealed position covering a lane, let enemies expose their flanks, and use the strong frontal plate to win head-on duels. Pre-aim the gun since the casemate cannot swing quickly, and reposition before flankers can reach your weak sides.",
    "history": "The Sturmgeschuetz III Ausfuehrung G was the most-produced StuG variant, with roughly 8,400 built between late 1942 and the war's end - a total rivalling all Panzer IV production combined. Armed with the long 75 mm StuK40 L/48, it served as both an infantry-support assault gun and an effective, economical tank destroyer across every German front.",
    "media": [],
    "sources": [
      {
        "label": "StuG III G — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_stug_III_ausf_G",
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
      "turretTraverseDegSec",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 24.4,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "stuk40-75mm",
      "reloadBaseSec": 7.6,
      "reloadAcedSec": 5.9,
      "vertGuidanceDeg": [
        -6,
        17
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 54,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "80",
        "side": "30",
        "rear": "50"
      },
      "turretMm": {
        "front": "80",
        "side": "30",
        "rear": "30"
      },
      "crewCount": 4,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m10-wolverine",
    "name": "M10 GMC",
    "nation": "usa",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "II",
    "battleRatings": {
      "arcade": 3.7,
      "realistic": 3.3,
      "simulator": 3.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Built on a Sherman-derived hull, the M10 GMC carries a hard-hitting 76 mm M7 gun in an open-topped, sloped turret. The high-velocity cannon punches well above the vehicle's battle rating, but a notoriously slow turret traverse means it must fight from prepared positions rather than brawl.",
    "prosCons": {
      "pros": [
        "Powerful 76 mm M7 gun with strong penetration for the rank",
        "Full traversing turret, unlike casemate tank destroyers",
        "Generous -10 degrees gun depression suits hull-down play",
        "Sloped turret front can deflect shots"
      ],
      "cons": [
        "Painfully slow hand-cranked turret traverse",
        "Open-topped turret exposes the crew to strafing and shrapnel",
        "Thin 51 mm hull armour offers little real protection",
        "Tall profile is hard to fully conceal"
      ]
    },
    "playstyle": "Treat it as a mobile sniper. Pre-rotate the turret toward likely contact, since you cannot swing it quickly once engaged. Hold flanks and ridgelines, use the strong gun to land first shots, and keep distance so the open top and weak armour stay out of small-arms and artillery range.",
    "history": "The M10 was created by mating an M4A2 Sherman hull with a larger open-topped turret carrying a high-velocity 3-inch (76 mm) gun originally developed for the M6 heavy tank. First fielded by the 776th and 899th Tank Destroyer Battalions, it saw its combat debut at the Battle of El Guettar on 23 March 1943 and served throughout the war.",
    "media": [],
    "sources": [
      {
        "label": "M10 GMC — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m10",
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
      "turretTraverseDegSec",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 30.4,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m7-76mm",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        -10,
        30
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 54,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "51",
        "side": "25",
        "rear": "25"
      },
      "turretMm": {
        "front": "57",
        "side": "25",
        "rear": "25"
      },
      "crewCount": 5,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "cromwell-v",
    "name": "Cromwell V",
    "nation": "britain",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 3.3,
      "realistic": 3.7,
      "simulator": 3.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A fast British cruiser tank armed with a 75 mm Ordnance QF Mk.V, the Cromwell V trades thick armour for excellent mobility and a fully traversing turret. It is best used as a flanker, exploiting its speed to reach firing positions and strike enemy sides.",
    "prosCons": {
      "pros": [
        "Excellent top speed and acceleration for flanking",
        "Fast turret traverse helps in close-quarters duels",
        "75 mm gun handles most same-tier targets with good HE filler",
        "Generous -12 degrees gun depression for hull-down work"
      ],
      "cons": [
        "Thin armour offers little protection in stand-up fights",
        "75 mm gun lacks penetration against the heaviest threats",
        "Boxy hull presents a large target",
        "Vulnerable to artillery and aircraft when caught in the open"
      ]
    },
    "playstyle": "Use speed as your armour. Race to the flanks or capture points, then strike enemy sides where your 75 mm reliably penetrates. Avoid frontal slugging matches; instead peek, depress over cover, and relocate constantly so the thin plating is never the thing keeping you alive.",
    "history": "The Cromwell was a fast cruiser tank whose 75 mm Ordnance QF Mk.V was produced by boring out the 6-pounder to fire American 75 mm ammunition designed for the Sherman. Mobile and well-liked for its speed despite a cramped fighting compartment, the Cromwell served from the Normandy campaign through to the end of the war and beyond.",
    "media": [],
    "sources": [
      {
        "label": "Cromwell V — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/uk_a27m_cromwell_5",
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
      "turretTraverseDegSec",
      "apsModel"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 28.5,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "qf-75mm-mk5",
      "reloadBaseSec": 6.5,
      "reloadAcedSec": 5,
      "vertGuidanceDeg": [
        -12,
        20
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 64,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "64",
        "side": "46",
        "rear": "32"
      },
      "turretMm": {
        "front": "64",
        "side": "51",
        "rear": "44"
      },
      "crewCount": 5,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "pz-iii-m",
    "name": "Pz.Kpfw.III Ausf.M",
    "nation": "germany",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 3.3,
      "realistic": 3.3,
      "simulator": 3.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The final mainstream production mark of the Panzer III, the Ausf.M pairs the long 50 mm KwK39 L/60 with the chassis's traditional strengths: a fast-turning turret, generous gun handling and a roomy five-man crew. By its battle rating the armour has fallen behind, so it rewards a mobile, supporting playstyle over a brawling one.",
    "prosCons": {
      "pros": [
        "Fast-firing 50 mm with strong stock penetration for the rating",
        "Quick turret rotation and good gun depression of -10 degrees",
        "Five-man crew absorbs hits and keeps the tank fighting",
        "Reasonable top speed of 53 km/h on the move"
      ],
      "cons": [
        "Thin, mostly flat armour is easily defeated by same-rating guns",
        "Sluggish 10 km/h reverse makes peeking and retreating risky",
        "50 mm shells struggle against heavily armoured opponents",
        "Tall profile is hard to hide in cover"
      ]
    },
    "playstyle": "Play it as a flanker and second-line supporter rather than a front-line trader. Use the fast turret and good depression from hull-down or angled positions, fire your quick-loading 50 mm into sides and weak points, and relocate before return fire arrives, since the slow reverse punishes overextension.",
    "history": "The Ausf.M was a late-war refinement of the Panzer III line, retaining the long L/60 50 mm gun while incorporating production simplifications and detail changes such as deep-wading exhaust arrangements. By the time it reached units in numbers, the 50 mm gun and the chassis's modest armour had been outclassed by newer Allied and Soviet medium tanks, and the type was increasingly relegated to secondary roles.",
    "media": [],
    "sources": [
      {
        "label": "War Thunder Official Wiki — Pz.III M",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_III_ausf_M",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "powerToWeight",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": 53,
      "maxRevKph": 10,
      "enginePowerHp": 300,
      "weightTons": 23,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "kwk39-50mm",
      "reloadBaseSec": 4.8,
      "reloadAcedSec": 3.7,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": 14,
      "ammoCapacity": 82,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "53",
        "side": "30",
        "rear": "53"
      },
      "turretMm": {
        "front": "50",
        "side": "30",
        "rear": "30"
      },
      "crewCount": 5,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "chi-nu",
    "name": "Type 3 Chi-Nu",
    "nation": "japan",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 3.3,
      "realistic": 3.3,
      "simulator": 3.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Type 3 Chi-Nu was Japan's attempt to field a medium tank with a genuine anti-tank punch, mounting a 75 mm gun in a roomy turret on the familiar Chi-He-derived chassis. In game it trades the poor mobility and light armour of earlier Japanese mediums for a hard-hitting cannon, making it a patient ambush and support vehicle.",
    "prosCons": {
      "pros": [
        "Hard-hitting 75 mm Type 3 gun with good penetration for the rating",
        "Decent gun depression of -10 degrees suits hull-down play",
        "Five-man crew improves survivability",
        "Large 70-round ammo stowage"
      ],
      "cons": [
        "Thin armour offers little protection against return fire",
        "Slow top speed of around 39 km/h limits repositioning",
        "Very slow reverse of under 8 km/h",
        "Sluggish turret traverse compared with rivals"
      ]
    },
    "playstyle": "Treat the Chi-Nu as a sniper and ambusher. Pick a covered or hull-down spot, let enemies expose themselves, and exploit the 75 mm's penetration to punch through their weak points. Avoid open brawls, since the thin armour and slow reverse leave little margin for error.",
    "history": "Developed late in the Pacific War, the Type 3 Chi-Nu mated a 75 mm field-gun-derived weapon to an enlarged turret on a chassis evolved from the Type 1 Chi-He. It was intended to counter Allied medium tanks that had outclassed Japan's earlier designs, but it arrived too late and in too few numbers to influence the fighting, with most examples retained in the home islands for a defence that never came.",
    "media": [],
    "sources": [
      {
        "label": "War Thunder Official Wiki — Type 3 Chi-Nu",
        "url": "https://wiki.warthunder.com/unit/jp_type_3_chi_nu",
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
      "maxFwdKph": 39,
      "maxRevKph": 7.8,
      "enginePowerHp": 240,
      "weightTons": 18.8,
      "powerToWeight": 12.8,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "type3-75mm",
      "reloadBaseSec": 7.8,
      "reloadAcedSec": 6,
      "vertGuidanceDeg": [
        -10,
        20
      ],
      "turretTraverseDegSec": 10.4,
      "ammoCapacity": 70,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "50",
        "side": "25",
        "rear": "20"
      },
      "turretMm": {
        "front": "50",
        "side": "25",
        "rear": "25"
      },
      "crewCount": 5,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "sav-m43",
    "name": "Sav m/43 (1946)",
    "nation": "sweden",
    "class": "ground",
    "subclass": "Tank destroyer",
    "rank": "II",
    "battleRatings": {
      "arcade": 3,
      "realistic": 3,
      "simulator": 3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Sav m/43 (1946) is a compact Swedish casemate tank destroyer that swaps the earlier 75 mm gun for a hard-hitting 105 mm kan m/44. The big shell delivers a heavy blow per hit, but a long reload, thin armour and a small four-man crew make it a deliberate ambush vehicle rather than a front-line fighter.",
    "prosCons": {
      "pros": [
        "Powerful 105 mm gun that can knock out most rivals in one shot",
        "Low, compact hull is easy to conceal in cover",
        "Good gun depression of -14 degrees for a casemate",
        "Useful elevation of 20 degrees"
      ],
      "cons": [
        "Very long reload of around 13 seconds stock",
        "Thin armour offers little real protection",
        "Fixed casemate with a narrow traverse field of fire",
        "Slow 6 km/h reverse and small four-man crew"
      ]
    },
    "playstyle": "Set up in a concealed, supporting position with a clear field of fire and let the enemy come to you. Land the powerful 105 mm first shot on a weak point, then back off into cover during the long reload. Avoid being flanked, since the fixed casemate cannot quickly answer threats from the side.",
    "history": "The Stormartillerivagn m/43 was a Swedish self-propelled gun built on a tank chassis, fielding a casemate-mounted gun for direct fire support. The 1946 pattern modelled here represents a later up-gunning to a 105 mm weapon, reflecting Sweden's neutral-era practice of steadily modernising a limited domestic armoured fleet rather than replacing it wholesale.",
    "media": [],
    "sources": [
      {
        "label": "War Thunder Official Wiki — Sav m/43 (1946)",
        "url": "https://wiki.warthunder.com/unit/sw_sav_m43_1946",
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
      "maxFwdKph": 41,
      "maxRevKph": 6,
      "enginePowerHp": 160,
      "weightTons": 12,
      "powerToWeight": 13.3,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "sav-kan-m44-105mm",
      "reloadBaseSec": 13,
      "reloadAcedSec": 10,
      "vertGuidanceDeg": [
        -14,
        20
      ],
      "turretTraverseDegSec": 5.6,
      "ammoCapacity": 41,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "50",
        "side": "15",
        "rear": "15"
      },
      "turretMm": {
        "front": "50",
        "side": "13",
        "rear": "13"
      },
      "crewCount": 4,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m3-lee",
    "name": "M3 Lee",
    "nation": "usa",
    "class": "ground",
    "subclass": "Medium tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 2.7,
      "realistic": 2.7,
      "simulator": 2.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "An early American medium tank with an unusual two-tier layout: a powerful 75 mm gun mounted low in the right hull sponson and a smaller 37 mm cannon in the rotating turret. Tall, well-armed, and well-crewed for its battle rating.",
    "prosCons": {
      "pros": [
        "Hard-hitting 75 mm sponson gun with capable APCBC",
        "Large seven-man crew absorbs hits and crew losses well",
        "Turret 37 mm gives a fast-firing secondary option",
        "Generous ammunition stowage"
      ],
      "cons": [
        "Sponson gun has very limited traverse and poor depression on that arc",
        "Very tall silhouette is easy to spot and hit",
        "Thin armour that is easily penetrated by contemporaries",
        "Mediocre mobility for a medium tank"
      ]
    },
    "playstyle": "Fight from hull-down or angled positions where the fixed sponson gun can bear, using terrain to hide the tall hull. Lead with the 75 mm against armour and fall back on the turret 37 mm for quick follow-up shots or lightly armoured targets. Avoid open brawling; the height and thin plating punish exposure.",
    "history": "The M3 was a stopgap design rushed into production while the United States developed a turret capable of mounting a 75 mm gun. Its sponson-mounted main armament echoed earlier multi-turret thinking, and the type saw extensive service with both American and British Commonwealth forces in North Africa, where the British named their variant the Grant.",
    "media": [],
    "sources": [
      {
        "label": "M3 Lee — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m3_lee",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": 56,
      "enginePowerHp": 400,
      "weightTons": 27.7,
      "powerToWeight": 14.4,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m2-75mm",
      "reloadBaseSec": 6.2,
      "reloadAcedSec": 4.8,
      "vertGuidanceDeg": [
        -9,
        20
      ],
      "turretTraverseDegSec": 8.4,
      "ammoCapacity": 50,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "51",
        "side": "38",
        "rear": "38"
      },
      "turretMm": {
        "front": "50",
        "side": "50",
        "rear": "50"
      },
      "crewCount": 7,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "matilda",
    "name": "Matilda",
    "nation": "britain",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "II",
    "battleRatings": {
      "arcade": 2.7,
      "realistic": 2.7,
      "simulator": 2.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A British infantry tank with exceptionally thick, evenly distributed armour for its battle rating, paired with the modest 40 mm 2-pounder. Slow but extremely durable, it shrugs off many low-rank guns from the front. (The wiki unit page lists this as the Matilda III, classed as a heavy tank.)",
    "prosCons": {
      "pros": [
        "Thick, well-rounded armour all over the hull and turret",
        "Excellent gun depression of -20 degrees suits hull-down play",
        "Compact, rounded turret is hard to penetrate reliably",
        "Tough enough to bully most same-BR opponents head-on"
      ],
      "cons": [
        "Very slow top speed and sluggish acceleration",
        "40 mm 2-pounder fires only solid shot with no explosive filler",
        "Limited ammunition penetration against tougher targets",
        "Poor reverse speed makes disengaging difficult"
      ]
    },
    "playstyle": "Push to a strong forward position early and let the armour soak fire while you pick targets. Use the generous depression to hull-down over crests, exposing only the well-protected turret. Aim the 2-pounder at crew and modules since the solid shot has no explosive effect, and avoid being flanked given the weak reverse.",
    "history": "The A12 Matilda II was a heavily armoured British infantry tank designed to advance with foot soldiers against fortified positions. Its protection earned it a fearsome reputation in the early North African campaign, where few Axis guns could defeat it frontally, though its small two-pounder and slow speed limited its offensive punch.",
    "media": [],
    "sources": [
      {
        "label": "Matilda III — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_a_12_mk_2_matilda_2",
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
      "maxFwdKph": 24,
      "maxRevKph": 4,
      "enginePowerHp": 190,
      "weightTons": 25.4,
      "powerToWeight": 7.5,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "qf-2pdr-40mm",
      "reloadBaseSec": 3.6,
      "reloadAcedSec": 2.8,
      "vertGuidanceDeg": [
        -20,
        20
      ],
      "turretTraverseDegSec": 14.1,
      "ammoCapacity": 93,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "75",
        "side": "70",
        "rear": "55"
      },
      "turretMm": {
        "front": "75",
        "side": "75",
        "rear": "75"
      },
      "crewCount": 4,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "arl-44",
    "name": "ARL-44",
    "nation": "france",
    "class": "ground",
    "subclass": "Heavy tank",
    "rank": "III",
    "battleRatings": {
      "arcade": 5.3,
      "realistic": 5.3,
      "simulator": 5.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "An early post-war French heavy tank built on lessons from the occupation, marrying a heavily armoured glacis to a hard-hitting 90 mm gun. Capable frontally but let down by thin turret and side armour and pedestrian mobility.",
    "prosCons": {
      "pros": [
        "Strong, well-sloped frontal hull armour",
        "Powerful 90 mm cannon with good penetration",
        "Solid ammunition load for sustained engagements",
        "Decent gun handling once on target"
      ],
      "cons": [
        "Thin turret sides and rear are easily knocked out",
        "Weak hull sides leave it vulnerable to flanking",
        "Heavy and slow, with very poor reverse speed",
        "Long reload between shots"
      ]
    },
    "playstyle": "Fight head-on from cover so the thick glacis faces the enemy while the fragile turret sides and hull flanks stay hidden. Use the 90 mm to land precise, telling shots given the long reload, and never expose the sides. Pick defensive lanes rather than advancing, since the slow speed and weak reverse make repositioning under fire dangerous.",
    "history": "The ARL-44 was a transitional heavy tank developed in France immediately after liberation, drawing on pre-war heavy tank concepts adapted with wartime experience. Produced only in small numbers, it served as a stepping stone for the rebuilding French armoured forces while more modern designs were prepared.",
    "media": [],
    "sources": [
      {
        "label": "ARL-44 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_arl_44",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxFwdKph",
      "reverseGears",
      "neutralSteering"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": 8,
      "enginePowerHp": 600,
      "weightTons": 50,
      "powerToWeight": 12,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "dca45-90mm",
      "reloadBaseSec": 13,
      "reloadAcedSec": 10,
      "vertGuidanceDeg": [
        -5,
        20
      ],
      "turretTraverseDegSec": 16.8,
      "ammoCapacity": 37,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "120",
        "side": "50",
        "rear": "50"
      },
      "turretMm": {
        "front": "110",
        "side": "30",
        "rear": "30"
      },
      "crewCount": 5,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "f-14a-tomcat",
    "name": "F-14A Tomcat",
    "nation": "usa",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VIII",
    "battleRatings": {
      "arcade": 12.3,
      "realistic": 12.7,
      "simulator": 12.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The F-14A is the United States' carrier-borne fleet-defence interceptor and the first fourth-generation fighter introduced to the game. Its variable-sweep wings let it loiter on station with the wings spread and then knife through the air at over twice the speed of sound with them swept back, and it was the first aircraft to bring an active radar-homing missile, the long-reach AIM-54 Phoenix, into War Thunder.",
    "prosCons": {
      "pros": [
        "Carries the AIM-54 Phoenix, a fire-and-forget active radar missile with exceptional range",
        "Variable-sweep wings give strong low-speed handling and a surprisingly tight turn for its size",
        "Excellent high-speed energy retention and acceleration from twin afterburning engines",
        "Two crew members and a powerful radar give strong situational awareness"
      ],
      "cons": [
        "Very large airframe is easy to spot and to hit",
        "TF30 engines are prone to compressor stalls if the throttle is handled carelessly",
        "Early Sidewinders and Sparrows are mediocre compared with later-generation contemporaries",
        "Faces fully fourth-generation opponents at its battle rating"
      ]
    },
    "playstyle": "Climb and use the AIM-54 to threaten targets from extreme range before the merge, forcing opponents to defend early and bleed energy. Keep the wings sweeping automatically and avoid yanking the stick at low speed to spare the temperamental engines. In a knife fight the swing-wing lets it turn better than expected, but the safer play is to extend, recover energy with its strong acceleration, and re-engage on your terms.",
    "history": "Grumman developed the F-14 Tomcat for the US Navy's VFX programme as a dedicated fleet-defence fighter, tasked with intercepting Soviet bombers and their anti-ship missiles far from the carrier group. First flown in 1970 and entering service in 1974, the type paired variable-geometry wings with the AWG-9 radar and the AIM-54 Phoenix, allowing it to track and engage multiple targets at long range. The early F-14A used the Pratt & Whitney TF30 engine, whose handling limitations were addressed in later variants.",
    "media": [],
    "sources": [
      {
        "label": "F-14A Early — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/f_14a_early",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 12192,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 16764,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m61-vulcan-20mm",
          "count": 1
        }
      ],
      "suspended": [
        "AIM-54A Phoenix (active radar)",
        "AIM-7E-2/F Sparrow (semi-active radar)",
        "AIM-9D/G/H Sidewinder (infrared)",
        "Zuni Mk32 Mod 0 rockets",
        "Mk 81/82/83/84 bombs",
        "Drop tanks"
      ]
    }
  },
  {
    "id": "su-27",
    "name": "Su-27",
    "nation": "ussr",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VIII",
    "battleRatings": {
      "arcade": 13.3,
      "realistic": 13,
      "simulator": 13.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Su-27 Flanker is the Soviet tree's top-tier heavy air-superiority fighter, a large twin-engine machine that blends genuine agility with a heavy missile load. It can carry up to ten air-to-air missiles, mixing infrared R-73s cued by a helmet-mounted sight with the long-range R-27ER under its N001 radar, making it a flexible threat at every range.",
    "prosCons": {
      "pros": [
        "Carries up to ten air-to-air missiles, including the hard-hitting long-range R-27ER",
        "Helmet-mounted sight allows wide off-boresight cueing of the agile R-73",
        "Strong thrust-to-weight and high top speed from twin AL-31F engines",
        "Surprisingly nimble for such a large airframe"
      ],
      "cons": [
        "Large airframe makes it an easy target and easy to spot",
        "N001 radar is competent but trails the best Western sets at its rating",
        "Bleeds energy quickly if forced into a sustained turn fight",
        "Faces the most capable fourth-generation opponents in the game"
      ]
    },
    "playstyle": "Fight as a missile platform first: use the R-27ER's reach to pressure targets head-on, then transition to the R-73 and helmet sight if a fight closes to visual range. Its size and energy bleed reward disciplined energy fighting over prolonged dogfights, so keep speed up, use the strong thrust to reset engagements, and lean on the deep missile magazine to stay in the fight longer than opponents.",
    "history": "The Sukhoi Su-27, NATO reporting name Flanker, was designed in response to the US F-15 as a long-range air-superiority fighter for the Soviet Air Forces. First flown in its definitive T-10S form in 1981 and entering service in the mid-1980s, it combined a blended lifting-body fuselage, relaxed static stability with a fly-by-wire flight control system, and powerful AL-31F engines to achieve exceptional manoeuvrability and range. The Flanker became the basis for a large family of derivatives still in front-line service.",
    "media": [],
    "sources": [
      {
        "label": "Su-27 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/su_27",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 12000,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1540,
      "ceilingM": 16000,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "gsh-30-1-30mm",
          "count": 1
        }
      ],
      "suspended": [
        "R-73 (infrared)",
        "R-27ER (semi-active radar, extended range)",
        "R-27R (semi-active radar)",
        "R-27ET (infrared, extended range)",
        "R-27T (infrared)"
      ]
    }
  },
  {
    "id": "tornado-ids",
    "name": "Tornado IDS MFG",
    "nation": "germany",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VIII",
    "battleRatings": {
      "arcade": 11,
      "realistic": 11.3,
      "simulator": 11.3
    },
    "acquisition": [
      "event"
    ],
    "summary": "The Tornado IDS MFG is the German naval (Marineflieger) variant of the swing-wing strike aircraft, a twin-engine, two-seat machine built jointly by Germany, Britain and Italy. Although it is primarily a high-speed strike platform, the Marineflieger version adds the AS.34 Kormoran anti-ship missile to its arsenal alongside guns, bombs and short-range air-to-air missiles for self-defence.",
    "prosCons": {
      "pros": [
        "Variable-sweep wings allow very high low-altitude speed for strike runs",
        "Carries the AS.34 Kormoran anti-ship missile, useful against naval and ground targets",
        "Two 27 mm Mauser BK27 cannons give strong gun firepower",
        "Twin RB199 engines and a sturdy airframe suit fast, low passes"
      ],
      "cons": [
        "Designed as a strike aircraft, so it turns and dogfights poorly",
        "Limited to short-range AIM-9L Sidewinders for air-to-air defence",
        "Large, draggy airframe loses energy quickly when manoeuvring",
        "Event acquisition makes it hard to obtain"
      ]
    },
    "playstyle": "Play it as a fast strike aircraft: come in low and fast with the wings swept to deliver bombs or Kormoran missiles, then extend away before enemy fighters can convert on you. Avoid turn fights entirely; the two BK27 cannons and AIM-9L missiles are for opportunistic or defensive shots rather than dogfighting. Use terrain masking and high speed as your primary defence.",
    "history": "The Panavia Tornado was developed by Germany, the United Kingdom and Italy under the Multi-Role Combat Aircraft programme, with the Interdictor/Strike (IDS) version optimised for low-level, high-speed penetration strikes. The German Marineflieger (naval aviation) operated Tornado IDS aircraft armed with the AS.34 Kormoran anti-ship missile for the maritime strike role over the Baltic and North Sea. The variable-geometry wing let the aircraft combine short-field performance with very high speed at low level.",
    "media": [],
    "sources": [
      {
        "label": "Tornado IDS MFG (Germany) — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/tornado_ids_de_mfg",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec",
      "structuralLimitKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 11582,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": null,
      "ceilingM": 13000,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "bk27-27mm",
          "count": 2
        }
      ],
      "suspended": [
        "AIM-9L Sidewinder (infrared)",
        "AS.34 Kormoran anti-ship missile",
        "Mk 83 1000 lb bombs (LDGP and ballute-retarded)",
        "Drop tanks"
      ]
    }
  },
  {
    "id": "zsu-23-4-shilka",
    "name": "ZSU-23-4 Shilka",
    "nation": "ussr",
    "class": "ground",
    "subclass": "SPAA",
    "rank": "VI",
    "battleRatings": {
      "arcade": 8,
      "realistic": 8,
      "simulator": 8
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The ZSU-23-4 Shilka is a Soviet radar-directed self-propelled anti-aircraft gun built on a tracked chassis, mounting a quad 23 mm AZP-23 cannon battery. Its onboard RPK-2 'Tobol' gun-laying radar lets it spot and lead aircraft well before they are visible, and the four water-cooled barrels deliver a wall of high-explosive and armour-piercing tracer that shreds aircraft and lightly armoured vehicles alike.",
    "prosCons": {
      "pros": [
        "Quad 23 mm battery throws an overwhelming volume of fire",
        "Onboard search/track radar gives early warning and a lead indicator against aircraft",
        "Very high turret elevation reaches near-vertical targets",
        "Effective against light vehicles and helicopters as well as planes"
      ],
      "cons": [
        "Negligible armour offers no protection against return fire",
        "23 mm rounds lose punch quickly at longer ranges",
        "Radar emissions can be detected by RWR-equipped opponents",
        "Open-topped style crew layout is vulnerable to strafing and shrapnel"
      ]
    },
    "playstyle": "Hang back from the front line and let the radar do the searching, then use the lead indicator to walk tracer onto attacking aircraft and helicopters. Fire in controlled bursts to keep the barrels on target rather than overheating, and reposition after engaging so radar-warning-equipped pilots cannot triangulate your spot. In a pinch the quad cannons will gut flanking light tanks.",
    "history": "Entering Soviet service in the mid 1960s, the ZSU-23-4 Shilka paired four liquid-cooled 23 mm autocannons with the RPK-2 radar to give motorised and tank formations a mobile, all-weather low-altitude air-defence umbrella. It saw extensive combat across the Middle East, Vietnam and numerous later conflicts, where it proved equally adept at engaging ground targets. Decades of upgrades and exports kept it in front-line service long after its introduction.",
    "media": [],
    "sources": [
      {
        "label": "ZSU-23-4 — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_zsu_23_4",
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
      "reloadBaseSec",
      "reloadAcedSec",
      "turretTraverseDegSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "mobility": {
      "maxFwdKph": null,
      "maxRevKph": null,
      "enginePowerHp": null,
      "weightTons": 20.7,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "azp-23-23mm",
      "reloadBaseSec": null,
      "reloadAcedSec": null,
      "vertGuidanceDeg": [
        -4,
        85
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 2000,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "9",
        "side": "9",
        "rear": "7"
      },
      "turretMm": {
        "front": "8",
        "side": "8",
        "rear": "8"
      },
      "crewCount": 4,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "gepard",
    "name": "Flakpanzer Gepard",
    "nation": "germany",
    "class": "ground",
    "subclass": "SPAA",
    "rank": "VI",
    "battleRatings": {
      "arcade": 8.3,
      "realistic": 8.3,
      "simulator": 8.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The Flakpanzer Gepard is a German all-weather self-propelled anti-aircraft gun built on the Leopard 1 chassis, carrying twin 35 mm Oerlikon KDA autocannons flanked by search and tracking radars. The radar pair feeds an accurate lead solution, while the hard-hitting 35 mm shells reach further and hit harder than the lighter cannons on most rival SPAA, letting it threaten aircraft, helicopters and even some armour.",
    "prosCons": {
      "pros": [
        "Twin 35 mm cannons deliver long reach and heavy per-hit damage",
        "Dedicated search and tracking radars provide early detection and a reliable lead indicator",
        "Leopard 1 chassis gives strong mobility for repositioning",
        "Belted HE and AP rounds let it engage both aircraft and light armour"
      ],
      "cons": [
        "Thin armour leaves it exposed to return fire and cannon strafing",
        "Modest 320-round belts and 680-round total demand fire discipline",
        "Radar emissions can warn RWR-equipped pilots",
        "Lower fire rate than quad/six-barrel rivals means bursts must be aimed well"
      ]
    },
    "playstyle": "Use the search radar to detect incoming aircraft early, then switch to tracking and let the lead indicator place the twin 35 mm rounds on target with short, accurate bursts. The long reach lets you engage before strike aircraft can deploy ordnance. Exploit the Leopard chassis to relocate frequently, and remember the cannons can frag exposed light vehicles when the skies are clear.",
    "history": "Developed by West Germany in the 1960s and fielded in the 1970s on the Leopard 1 hull, the Flakpanzer Gepard combined twin 35 mm Oerlikon KDA cannons with separate search and tracking radars to give NATO armoured formations a mobile, all-weather air-defence system. It became a cornerstone of German and allied low-level air defence and was repeatedly modernised, remaining in service for decades and seeing renewed front-line use in later conflicts.",
    "media": [],
    "sources": [
      {
        "label": "Gepard — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_flakpz_I_Gepard",
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
      "weightTons": 46,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "kda-35mm",
      "reloadBaseSec": 1.3,
      "reloadAcedSec": 1,
      "vertGuidanceDeg": [
        -5,
        85
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 680,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "30",
        "side": "25",
        "rear": "20"
      },
      "turretMm": {
        "front": "25",
        "side": "20",
        "rear": "20"
      },
      "crewCount": 3,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "m163-vads",
    "name": "M163 VADS",
    "nation": "usa",
    "class": "ground",
    "subclass": "SPAA",
    "rank": "V",
    "battleRatings": {
      "arcade": 7.7,
      "realistic": 7.3,
      "simulator": 7.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "The M163 VADS (Vulcan Air Defense System) mounts a six-barrelled 20 mm M168 Gatling cannon and a tracking radar on the lightweight, amphibious M113 chassis. The radar provides a ranging and lead solution while the Vulcan's extreme rate of fire saturates the sky, making it a fearsome short-range answer to low-flying aircraft and helicopters and a brutal anti-personnel and anti-light-vehicle weapon.",
    "prosCons": {
      "pros": [
        "20 mm M168 Vulcan fires at a tremendous rate, saturating targets instantly",
        "Tracking radar supplies range and a lead indicator for snap shots",
        "Light M113 chassis is fast and nimble for repositioning",
        "Huge ammunition stowage supports sustained fire"
      ],
      "cons": [
        "20 mm rounds bleed energy and damage at longer ranges",
        "Thin aluminium hull stops only small-arms and shrapnel",
        "High consumption can empty a belt quickly during sustained bursts",
        "Radar emissions can alert RWR-equipped pilots"
      ]
    },
    "playstyle": "Stay mobile on the light chassis and pick firing positions with good sky coverage. Use the radar's range and lead cues to open up on aircraft inside effective range, firing in disciplined bursts so the belt lasts. The torrent of 20 mm tracer also dominates light vehicles and exposed infantry positions, so it doubles as a flanking deterrent when no aircraft are airborne.",
    "history": "The M163 Vulcan Air Defense System entered US Army service around 1969, marrying the air-cooled M61-derived M168 20 mm Gatling cannon and a range-only tracking radar to the ubiquitous M113 armoured personnel carrier. It gave mechanised units a fast, air-portable point-defence weapon and served widely with the US and allied armies, where its enormous rate of fire also made it valuable for suppressing ground targets.",
    "media": [],
    "sources": [
      {
        "label": "M163 — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m163_vulcan",
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
      "weightTons": 11.2,
      "powerToWeight": null,
      "reverseGears": null,
      "neutralSteering": null
    },
    "firepower": {
      "mainGunId": "m168-20mm",
      "reloadBaseSec": 26,
      "reloadAcedSec": 20,
      "vertGuidanceDeg": [
        -5,
        80
      ],
      "turretTraverseDegSec": null,
      "ammoCapacity": 2200,
      "ammoTypeIds": []
    },
    "armor": {
      "hullMm": {
        "front": "38",
        "side": "44",
        "rear": "38"
      },
      "turretMm": {
        "front": "17",
        "side": "17",
        "rear": "17"
      },
      "crewCount": 4,
      "era": true,
      "composite": false,
      "aps": false
    }
  },
  {
    "id": "kfir-c2",
    "name": "Kfir C2",
    "nation": "israel",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VII",
    "battleRatings": {
      "arcade": 11.3,
      "realistic": 11.7,
      "simulator": 11.3
    },
    "acquisition": [
      "event"
    ],
    "summary": "An Israeli reworking of the Mirage 5 airframe re-engined with the American General Electric J79, the Kfir C2 marries delta-wing energy retention to a hard-hitting twin 30 mm battery and a useful all-aspect missile loadout. It is equally at home dragging fights into the vertical against jets or hauling heavy iron onto bases and ground targets.",
    "prosCons": {
      "pros": [
        "Twin 30 mm DEFA cannons hit extremely hard",
        "Strong straight-line acceleration and climb from the J79 engine",
        "All-aspect Python 3 and Shafrir 2 missiles available",
        "Large and varied air-to-ground payload for strike work"
      ],
      "cons": [
        "Delta wing bleeds energy quickly in sustained turns",
        "Mediocre sustained turn time for its battle rating",
        "Limited cannon ammunition relative to the high fire rate",
        "No countermeasures advantage over later contemporaries"
      ]
    },
    "playstyle": "Fly it as an energy fighter: keep speed high, climb to retain an altitude advantage, and pick fights you can resolve in one or two passes. Use the Python 3 and Shafrir 2 to force defensive reactions, then close with the powerful 30 mm guns. Avoid prolonged turning duels where the delta wing washes out your energy.",
    "history": "The Kfir grew out of Israel's need to keep its Mirage-derived fleet competitive after France embargoed further deliveries. Engineers mated the locally produced Nesher airframe to the licence-influenced J79 turbojet already familiar from the F-4 Phantom, producing a faster-climbing, heavier-hitting interceptor and strike aircraft that served the Israeli Air Force for decades and was exported widely.",
    "media": [],
    "sources": [
      {
        "label": "Kfir C.2 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/kfir_c2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": 2376,
      "maxSpeedAltM": 10668,
      "climbMps": 245.4,
      "turnTimeSec": 25.6,
      "structuralLimitKph": 1460,
      "ceilingM": 16000,
      "engineCount": 1
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "defa-552-30mm",
          "count": 2
        }
      ],
      "suspended": [
        "Shafrir 2 air-to-air missiles",
        "Python 3 air-to-air missiles",
        "AIM-9D Sidewinder air-to-air missiles",
        "AIM-9G Sidewinder air-to-air missiles",
        "Up to 8x 1000 lb bombs (Mk 82 / Mk 83 / Mk 84 / M117 / M118 series)",
        "FFAR Mighty Mouse rockets",
        "Zuni Mk32 Mod 0 rockets"
      ]
    }
  },
  {
    "id": "f-1",
    "name": "Mitsubishi F-1",
    "nation": "japan",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VI",
    "battleRatings": {
      "arcade": 10.3,
      "realistic": 10,
      "simulator": 10.3
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "Japan's first domestically designed supersonic combat jet, the Mitsubishi F-1 is a strike-oriented derivative of the T-2 trainer built around an internal JM61 Vulcan and seven hardpoints. In game it is a dedicated air-to-ground platform with self-defence Sidewinders, rewarding pilots who exploit its ordnance flexibility rather than dogfighting.",
    "prosCons": {
      "pros": [
        "Internal 20 mm JM61 Vulcan with very high fire rate",
        "Seven hardpoints for a flexible strike loadout",
        "Carries the ASM-1 anti-ship missile and guided/unguided ground ordnance",
        "Twin-engine reliability and supersonic dash"
      ],
      "cons": [
        "Poor sustained turn performance for the role of a fighter",
        "Only short-range IR Sidewinders for air-to-air defence",
        "Heavy when fully loaded, hurting acceleration and climb",
        "Vulnerable if drawn into a turning fight"
      ]
    },
    "playstyle": "Treat the F-1 as a striker. In ground and air battles, run loadouts of bombs, rockets or the ASM-1 to attack hard targets, staying low and fast on the approach and egressing before enemy fighters arrive. Keep the AIM-9 Sidewinders for emergencies and rely on speed and the Vulcan for close defence.",
    "history": "Developed jointly by Mitsubishi Heavy Industries and Fuji Heavy Industries from the supersonic T-2 trainer, itself influenced by the SEPECAT Jaguar, the F-1 became the first supersonic aircraft both designed and built in Japan. Optimised for anti-ship and ground attack, it equipped the Japan Air Self-Defense Force and replaced ageing F-86 Sabres in the strike role until succeeded by the F-2.",
    "media": [],
    "sources": [
      {
        "label": "F-1 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/f1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph",
      "climbMps",
      "turnTimeSec"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 10975,
      "climbMps": null,
      "turnTimeSec": null,
      "structuralLimitKph": 1365,
      "ceilingM": 15200,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "m61-vulcan-20mm",
          "count": 1
        }
      ],
      "suspended": [
        "AIM-9E Sidewinder air-to-air missiles",
        "AIM-9P Sidewinder air-to-air missiles",
        "ASM-1 anti-ship missiles",
        "500 lb LDGP Mk 82 bombs",
        "750 lb JM117 bombs",
        "FFAR Mighty Mouse rockets",
        "Zuni Mk32 Mod 0 rockets"
      ]
    }
  },
  {
    "id": "j-8",
    "name": "Shenyang J-8B",
    "nation": "china",
    "class": "aviation",
    "subclass": "Jet fighter",
    "rank": "VII",
    "battleRatings": {
      "arcade": 11.3,
      "realistic": 11.3,
      "simulator": 11.7
    },
    "acquisition": [
      "tech-tree"
    ],
    "summary": "A high-speed twin-engine interceptor and a cornerstone of the PLAAF before the 2000s, the Shenyang J-8B pairs blistering top speed and ceiling with a single 23 mm Type 23-3 cannon and a respectable missile fit. It plays as a boom-and-zoom interceptor that punishes climbing or slow targets while staying out of turning fights.",
    "prosCons": {
      "pros": [
        "Outstanding top speed and high-altitude performance",
        "Twin WP-13A engines give strong climb and acceleration",
        "Capable missile loadout including PL-5B and Aspide-1A",
        "High service ceiling for altitude superiority"
      ],
      "cons": [
        "Only a single 23 mm cannon with limited ammunition",
        "Poor sustained turn for a top-rank jet",
        "Reliant on energy tactics; weak if slowed down",
        "Large airframe is an easy target when committed"
      ]
    },
    "playstyle": "Use altitude and speed as your weapons. Climb above the fight, use the radar-guided Aspide-1A and IR PL-5B to strike from energy advantage, and make slashing passes rather than committing to turns. The single 23 mm cannon demands accuracy, so set up clean firing solutions and disengage upward after each attack.",
    "history": "The J-8B was an extensively modernised member of the J-8 family, moving the engine intakes to the fuselage sides to free the nose for a larger radar. Developed through the 1980s as China sought a counter to fast Soviet and Western types such as the MiG-23 and F-16, it entered serial production with upgraded avionics in the early 1990s and served for years as a primary PLAAF interceptor.",
    "media": [],
    "sources": [
      {
        "label": "J-8B — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/j_8b",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxSpeedKph"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "flight": {
      "maxSpeedKph": null,
      "maxSpeedAltM": 12000,
      "climbMps": 235.4,
      "turnTimeSec": 25.6,
      "structuralLimitKph": 1365,
      "ceilingM": 16000,
      "engineCount": 2
    },
    "armament": {
      "fixed": [
        {
          "weaponId": "type23-3-23mm",
          "count": 1
        }
      ],
      "suspended": [
        "PL-5B air-to-air missiles",
        "Aspide-1A air-to-air missiles",
        "Type 90-1 rockets",
        "250 kg bombs",
        "500 kg bombs",
        "Drop tanks"
      ]
    }
  }
];
