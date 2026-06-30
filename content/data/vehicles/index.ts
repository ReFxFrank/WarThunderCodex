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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
  }
];
