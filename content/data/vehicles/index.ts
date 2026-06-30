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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
  }
];
