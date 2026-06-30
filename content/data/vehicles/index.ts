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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
    "media": [],
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
  }
];
