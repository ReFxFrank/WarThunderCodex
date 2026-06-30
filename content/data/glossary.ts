import type { GlossaryTerm } from "@/lib/schema";

// The acronym + term reference the rest of the site links into.
// Generated in Phase 2 from the content workflow; original, concise definitions.
export const glossary: GlossaryTerm[] = [
  {
    "term": "BR",
    "aka": [
      "Battle Rating"
    ],
    "definition": "A numeric value (currently 1.0 to 14.0) that rates a vehicle's combat strength and decides which other vehicles it faces in matchmaking; each vehicle has separate BRs for AB, RB, and SB.",
    "seeAlso": [
      "uptier",
      "downtier",
      "lineup",
      "RB/AB/SB",
      "BR compression"
    ]
  },
  {
    "term": "BR compression",
    "aka": [
      "compression",
      "decompression"
    ],
    "definition": "The complaint that too many vehicles of widely differing capability are squeezed into a narrow BR range, forcing mismatches; 'decompression' is Gaijin spreading the range out to fix it.",
    "seeAlso": [
      "BR",
      "uptier"
    ]
  },
  {
    "term": "RP",
    "aka": [
      "Research Points"
    ],
    "definition": "The experience currency earned in battle, spent to unlock new vehicles and modifications in the tech tree.",
    "seeAlso": [
      "spaded",
      "stock",
      "Talisman",
      "Premium Account",
      "Free RP",
      "Convert RP"
    ]
  },
  {
    "term": "Free RP",
    "aka": [
      "Universal RP",
      "Convertible RP"
    ],
    "definition": "A flexible pool of research points that can be applied to any vehicle in any tree, accumulated as a small fraction of normal RP earnings and toppable with Golden Eagles.",
    "seeAlso": [
      "RP",
      "Convert RP",
      "GE"
    ]
  },
  {
    "term": "Convert RP",
    "aka": [
      "RP Conversion"
    ],
    "definition": "Spending Golden Eagles to turn the convertible RP a vehicle has banked into Free RP that can unlock anything else, skipping grind.",
    "seeAlso": [
      "Free RP",
      "RP",
      "GE"
    ]
  },
  {
    "term": "SL",
    "aka": [
      "Silver Lions"
    ],
    "definition": "The standard in-game silver currency earned from battles, used to buy vehicles, modifications, crews, and to pay repair costs.",
    "seeAlso": [
      "GE",
      "Repair Cost",
      "Premium Account"
    ]
  },
  {
    "term": "GE",
    "aka": [
      "Golden Eagles",
      "GJN"
    ],
    "definition": "War Thunder's premium currency, bought with real money (or occasionally won), used for premium vehicles, premium account, Talismans, converting RP, and other shortcuts.",
    "seeAlso": [
      "SL",
      "Talisman",
      "Premium Account",
      "Battle Pass",
      "Convert RP"
    ]
  },
  {
    "term": "RB/AB/SB",
    "aka": [
      "Realistic Battles",
      "Arcade Battles",
      "Simulator Battles",
      "Sim"
    ],
    "definition": "The three main game modes. Arcade is the most forgiving with simplified physics and full markers; Realistic adds realistic ballistics, single spawns, and limited markers; Simulator is the most hardcore with cockpit/instrument views, no enemy markers, and full controls.",
    "seeAlso": [
      "BR"
    ]
  },
  {
    "term": "uptier",
    "aka": [
      "full uptier"
    ],
    "definition": "Being matched against vehicles with a higher BR than your own (typically up to +1.0 BR), putting you at a relative disadvantage.",
    "seeAlso": [
      "BR",
      "downtier",
      "BR compression"
    ]
  },
  {
    "term": "downtier",
    "aka": [
      "full downtier"
    ],
    "definition": "Being matched against vehicles with a lower BR than your own (typically down to -1.0 BR), giving you a relative advantage.",
    "seeAlso": [
      "BR",
      "uptier"
    ]
  },
  {
    "term": "spaded",
    "aka": [
      "fully researched",
      "aced"
    ],
    "definition": "A vehicle with all of its modifications unlocked and installed, making it fully upgraded to its best performance.",
    "seeAlso": [
      "stock",
      "RP"
    ]
  },
  {
    "term": "stock",
    "definition": "A newly researched vehicle that has no modifications unlocked yet, usually performing poorly (low-penetration ammo, no upgrades) until research progresses.",
    "seeAlso": [
      "spaded",
      "RP",
      "stock grind"
    ]
  },
  {
    "term": "stock grind",
    "aka": [
      "stock pain"
    ],
    "definition": "The frustrating early phase of using a freshly unlocked vehicle while it still lacks key modifications like better ammo, parts, or engine upgrades.",
    "seeAlso": [
      "stock",
      "spaded",
      "RP"
    ]
  },
  {
    "term": "lineup",
    "definition": "A set of vehicles around the same BR brought into a single battle so a player can respawn into multiple complementary vehicles instead of one.",
    "seeAlso": [
      "BR",
      "CAS",
      "SPAA",
      "spawn point"
    ]
  },
  {
    "term": "spawn point",
    "aka": [
      "SP",
      "Spawn Cost"
    ],
    "definition": "The respawn currency earned during a battle by scoring actions; respawning into another vehicle in your lineup costs SP, with heavier or air units costing more.",
    "seeAlso": [
      "lineup",
      "scouting"
    ]
  },
  {
    "term": "CAS",
    "aka": [
      "Close Air Support"
    ],
    "definition": "Using aircraft with bombs, rockets, or missiles to attack enemy ground vehicles in combined-arms battles.",
    "seeAlso": [
      "CAP",
      "SPAA",
      "ATGM"
    ]
  },
  {
    "term": "CAP",
    "aka": [
      "Combat Air Patrol"
    ],
    "definition": "Flying fighters to control the airspace and shoot down enemy aircraft, often to protect friendly ground forces from CAS.",
    "seeAlso": [
      "CAS"
    ]
  },
  {
    "term": "SPAA",
    "aka": [
      "Self-Propelled Anti-Aircraft",
      "AA"
    ],
    "definition": "A ground vehicle armed with anti-aircraft guns or missiles meant to shoot down aircraft, though often also effective against lightly armored ground targets.",
    "seeAlso": [
      "SAM",
      "SPAAG",
      "CAS"
    ]
  },
  {
    "term": "SAM",
    "aka": [
      "Surface-to-Air Missile"
    ],
    "definition": "A guided missile fired from the ground to destroy aircraft, mounted on advanced SPAA vehicles at higher BRs.",
    "seeAlso": [
      "SPAA",
      "IR/SARH/ARH missiles",
      "RWR"
    ]
  },
  {
    "term": "SPAAG",
    "aka": [
      "Self-Propelled Anti-Aircraft Gun"
    ],
    "definition": "A gun-armed SPAA vehicle (as opposed to a missile-armed SAM carrier), typically using rapid-fire autocannons against aircraft and light targets.",
    "seeAlso": [
      "SPAA",
      "SAM"
    ]
  },
  {
    "term": "ATGM",
    "aka": [
      "Anti-Tank Guided Missile"
    ],
    "definition": "A guided missile used against armored vehicles, typically steered by the gunner via wire or laser (SACLOS/MCLOS) and penetrating with a HEAT warhead.",
    "seeAlso": [
      "HEAT",
      "Tandem",
      "ERA",
      "SACLOS",
      "MCLOS"
    ]
  },
  {
    "term": "MBT",
    "aka": [
      "Main Battle Tank"
    ],
    "definition": "A modern tank combining heavy protection, firepower, and mobility; the standard top-tier ground vehicle, typically firing APFSDS and protected by composite armour.",
    "seeAlso": [
      "APFSDS",
      "composite armour",
      "IFV"
    ]
  },
  {
    "term": "IFV",
    "aka": [
      "Infantry Fighting Vehicle",
      "light tank"
    ],
    "definition": "A fast, lightly armored vehicle usually armed with an autocannon and often ATGMs, valued for scouting, flanking, and shooting down aircraft rather than slugging it out.",
    "seeAlso": [
      "scouting",
      "ATGM",
      "MBT",
      "SPAA"
    ]
  },
  {
    "term": "scouting",
    "aka": [
      "scout",
      "spotting"
    ],
    "definition": "Marking an enemy vehicle (a light tank/IFV ability) so teammates see it on the map, earning bonus RP/SL and spawn points when a marked target is destroyed.",
    "seeAlso": [
      "IFV",
      "spawn point"
    ]
  },
  {
    "term": "AP",
    "aka": [
      "Armour-Piercing",
      "Solid Shot"
    ],
    "definition": "A solid metal round that relies on kinetic energy to punch through armor, damaging by fragmentation and the projectile itself, with no explosive filler.",
    "seeAlso": [
      "APHE",
      "APCR",
      "APDS",
      "APFSDS"
    ]
  },
  {
    "term": "APHE",
    "aka": [
      "Armour-Piercing High-Explosive",
      "APHEBC",
      "APCBC"
    ],
    "definition": "An armor-piercing shell with an explosive filler and fuze that detonates after penetrating, spraying lethal fragments inside the vehicle; devastating against early tanks.",
    "seeAlso": [
      "AP",
      "spall",
      "fuze"
    ]
  },
  {
    "term": "APCR",
    "aka": [
      "Armour-Piercing Composite Rigid",
      "HVAP"
    ],
    "definition": "A lightweight round with a dense (often tungsten) core reaching very high velocity and penetration up close, but losing penetration quickly over range and dealing little post-penetration damage.",
    "seeAlso": [
      "AP",
      "APDS",
      "normalization"
    ]
  },
  {
    "term": "APDS",
    "aka": [
      "Armour-Piercing Discarding Sabot"
    ],
    "definition": "A round whose dense sub-caliber penetrator is carried by a sabot that falls away after firing, giving high velocity and penetration with relatively little spall behind the armor.",
    "seeAlso": [
      "APCR",
      "APFSDS",
      "spall",
      "sabot"
    ]
  },
  {
    "term": "APFSDS",
    "aka": [
      "Armour-Piercing Fin-Stabilized Discarding Sabot",
      "dart",
      "long rod"
    ],
    "definition": "A modern long, thin fin-stabilized kinetic penetrator (the 'dart') that discards its sabot, delivering very high penetration; the dominant anti-tank round at top tier.",
    "seeAlso": [
      "APDS",
      "overmatch",
      "composite armour",
      "sabot"
    ]
  },
  {
    "term": "HEAT",
    "aka": [
      "High-Explosive Anti-Tank",
      "Chemical"
    ],
    "definition": "A shaped-charge round that penetrates with a focused metal jet on detonation, so its penetration is independent of velocity and range; defeated by ERA, NERA, and spaced armor.",
    "seeAlso": [
      "HEATFS",
      "ERA",
      "NERA",
      "ATGM"
    ]
  },
  {
    "term": "HEATFS",
    "aka": [
      "High-Explosive Anti-Tank Fin-Stabilized"
    ],
    "definition": "A fin-stabilized HEAT round that can be fired accurately from smoothbore (and rifled) guns at range, common as the main anti-tank round on early Cold War tanks.",
    "seeAlso": [
      "HEAT",
      "stock"
    ]
  },
  {
    "term": "HESH",
    "aka": [
      "High-Explosive Squash Head",
      "HEP"
    ],
    "definition": "A round that flattens against armor and detonates, sending a shockwave that breaks off a damaging spall plate inside; effective against thin or flat armor but defeated by spaced and composite armor.",
    "seeAlso": [
      "HE",
      "spall",
      "NERA"
    ]
  },
  {
    "term": "HE",
    "aka": [
      "High-Explosive"
    ],
    "definition": "A shell with a large explosive filler that damages via blast and fragments; weak against thick armor but effective against open-top, lightly armored, and exposed targets.",
    "seeAlso": [
      "overpressure",
      "SAP",
      "HESH"
    ]
  },
  {
    "term": "SAP",
    "aka": [
      "Semi-Armour-Piercing",
      "SAPHE",
      "Common"
    ],
    "definition": "A round with thicker walls and an explosive filler that penetrates moderate armor before detonating; a middle ground between HE and AP, common on naval guns and some autocannons.",
    "seeAlso": [
      "HE",
      "APHE",
      "citadel"
    ]
  },
  {
    "term": "fuze",
    "aka": [
      "fuse",
      "fuze sensitivity"
    ],
    "definition": "The delay mechanism that decides when an explosive-filler shell detonates after impact; if too thin armor is hit, the fuze may not arm, so APHE can pass through without exploding.",
    "seeAlso": [
      "APHE",
      "SAP",
      "overpressure"
    ]
  },
  {
    "term": "ammo rack",
    "aka": [
      "ammo detonation",
      "ammo cookoff"
    ],
    "definition": "The stored shells inside a vehicle; a hit that ignites them causes a catastrophic detonation that usually destroys the vehicle instantly, making reduced ammo loads a common survival tactic.",
    "seeAlso": [
      "spall",
      "APHE"
    ]
  },
  {
    "term": "ERA",
    "aka": [
      "Explosive Reactive Armour"
    ],
    "definition": "Armor blocks containing explosive that detonate outward when struck, disrupting incoming HEAT jets and (in heavy variants) kinetic darts; defeated by tandem warheads.",
    "seeAlso": [
      "NERA",
      "HEAT",
      "Tandem",
      "ATGM"
    ]
  },
  {
    "term": "NERA",
    "aka": [
      "Non-Explosive Reactive Armour",
      "Non-Energetic Reactive Armour"
    ],
    "definition": "Layered armor with an inert (non-explosive) interlayer that flexes when hit to disrupt HEAT jets and kinetic penetrators; a key component of modern composite armor.",
    "seeAlso": [
      "ERA",
      "composite armour",
      "HEAT"
    ]
  },
  {
    "term": "composite armour",
    "aka": [
      "Combined Armour"
    ],
    "definition": "Multi-layered armor combining materials like steel, ceramics, and NERA to defeat both kinetic and chemical rounds far more effectively than the same thickness of solid steel.",
    "seeAlso": [
      "NERA",
      "APFSDS",
      "HEAT"
    ]
  },
  {
    "term": "overmatch",
    "definition": "When a projectile's caliber is significantly larger than the armor plate's thickness, reducing the effect of the plate's slope and making penetration easier.",
    "seeAlso": [
      "normalization",
      "APFSDS",
      "ricochet"
    ]
  },
  {
    "term": "normalization",
    "definition": "The tendency of a penetrating round to turn toward the perpendicular as it enters sloped armor, effectively reducing the armor's line-of-sight thickness; APCR/APDS normalize less than AP.",
    "seeAlso": [
      "overmatch",
      "ricochet",
      "AP"
    ]
  },
  {
    "term": "ricochet",
    "aka": [
      "bounce"
    ],
    "definition": "When a round strikes armor at a shallow angle and deflects off instead of penetrating, dealing no damage.",
    "seeAlso": [
      "normalization",
      "overmatch",
      "angling"
    ]
  },
  {
    "term": "spall",
    "aka": [
      "spalling",
      "fragments"
    ],
    "definition": "The shower of metal fragments thrown off inside a vehicle when a round penetrates the armor (or from HESH/HE), which is what actually kills crew and breaks modules.",
    "seeAlso": [
      "APHE",
      "HESH",
      "spall liner"
    ]
  },
  {
    "term": "spall liner",
    "aka": [
      "Anti-Spall Lining"
    ],
    "definition": "A protective layer inside a hull or turret that catches and reduces the spray of fragments after a penetration, protecting crew and modules.",
    "seeAlso": [
      "spall",
      "composite armour"
    ]
  },
  {
    "term": "overpressure",
    "definition": "A damage mechanic where a powerful explosive round (large HE, bombs) detonating near or inside a vehicle creates a pressure spike that can kill the whole crew without penetrating armor, especially through weak spots like cupolas or barrels.",
    "seeAlso": [
      "HE",
      "fuze"
    ]
  },
  {
    "term": "BnZ",
    "aka": [
      "Boom and Zoom",
      "Energy Tactics"
    ],
    "definition": "An air combat tactic of diving from a height advantage to attack, then climbing back to safety rather than staying in a turning fight; favored by fast, heavy, energy-retaining aircraft.",
    "seeAlso": [
      "TnB",
      "energy fighting"
    ]
  },
  {
    "term": "TnB",
    "aka": [
      "Turn and Burn",
      "Turn Fighting",
      "Dogfighting"
    ],
    "definition": "An air combat tactic of out-turning the opponent in sustained horizontal maneuvers; favored by highly maneuverable but often slower aircraft.",
    "seeAlso": [
      "BnZ",
      "energy fighting"
    ]
  },
  {
    "term": "energy fighting",
    "aka": [
      "Energy Management"
    ],
    "definition": "Managing your aircraft's total energy (altitude plus speed) relative to the enemy's so you can attack and disengage on your terms; the core skill behind boom-and-zoom tactics.",
    "seeAlso": [
      "BnZ",
      "TnB"
    ]
  },
  {
    "term": "WEP",
    "aka": [
      "War Emergency Power",
      "Boost"
    ],
    "definition": "A temporary engine overboost that gives extra speed and climb for a limited time before the engine risks overheating, used in critical moments of an air fight.",
    "seeAlso": [
      "energy fighting",
      "BnZ"
    ]
  },
  {
    "term": "vulching",
    "aka": [
      "vulture",
      "base camping"
    ],
    "definition": "Loitering over the enemy airfield or spawn to pick off aircraft as they take off or climb, before they can build speed or altitude.",
    "seeAlso": [
      "CAP",
      "airfield AA"
    ]
  },
  {
    "term": "airfield AA",
    "aka": [
      "airfield guns",
      "base defense AA"
    ],
    "definition": "The automated anti-aircraft guns defending a friendly airfield in air battles that will shred enemy planes flying too low or slow over it, offering a safe haven to repair and rearm.",
    "seeAlso": [
      "vulching",
      "CAP"
    ]
  },
  {
    "term": "J out",
    "aka": [
      "jay out",
      "J-out"
    ],
    "definition": "Pressing the J key to abandon a doomed aircraft, instantly ending the sortie instead of waiting to crash; lets you respawn or rejoin sooner.",
    "seeAlso": [
      "RB/AB/SB"
    ]
  },
  {
    "term": "IR/SARH/ARH missiles",
    "aka": [
      "Infrared",
      "Semi-Active Radar Homing",
      "Active Radar Homing",
      "Fox-1/Fox-2/Fox-3"
    ],
    "definition": "The three guidance types for air-to-air missiles: IR (heat-seeking, fire-and-forget), SARH (homes on radar energy the launching aircraft must keep painting on the target), and ARH (carries its own radar to go fully active in the terminal phase).",
    "seeAlso": [
      "all-aspect",
      "IRCCM",
      "flares",
      "chaff",
      "notching"
    ]
  },
  {
    "term": "all-aspect",
    "aka": [
      "All-Aspect IR"
    ],
    "definition": "An infrared missile sensitive enough to lock a target's heat signature from any angle, including head-on, rather than only chasing the hot engine exhaust from behind.",
    "seeAlso": [
      "IR/SARH/ARH missiles",
      "IRCCM",
      "flares"
    ]
  },
  {
    "term": "IRCCM",
    "aka": [
      "Infrared Counter-Countermeasures"
    ],
    "definition": "Logic in advanced heat-seeking missiles that lets them reject decoy flares and stay locked on the actual aircraft.",
    "seeAlso": [
      "flares",
      "all-aspect",
      "IR/SARH/ARH missiles"
    ]
  },
  {
    "term": "RWR",
    "aka": [
      "Radar Warning Receiver"
    ],
    "definition": "A sensor that alerts the pilot when the aircraft is being tracked by an enemy radar or radar-guided missile, often indicating the threat's direction.",
    "seeAlso": [
      "IR/SARH/ARH missiles",
      "MAWS",
      "notching",
      "chaff"
    ]
  },
  {
    "term": "MAWS",
    "aka": [
      "Missile Approach Warning System"
    ],
    "definition": "A sensor that warns the pilot of an incoming missile (including IR missiles an RWR cannot detect), prompting evasive action and countermeasures.",
    "seeAlso": [
      "RWR",
      "flares",
      "chaff"
    ]
  },
  {
    "term": "notching",
    "aka": [
      "beaming"
    ],
    "definition": "Flying perpendicular to an enemy radar (placing it on your 3 or 9 o'clock) so your Doppler velocity drops near zero and the radar filters you out as ground clutter, defeating radar lock and SARH/ARH missiles.",
    "seeAlso": [
      "chaff",
      "RWR",
      "IR/SARH/ARH missiles"
    ]
  },
  {
    "term": "chaff",
    "definition": "Bundles of metallic strips dispensed to create a false radar return, decoying radar-guided (SARH/ARH) missiles and breaking radar locks.",
    "seeAlso": [
      "flares",
      "notching",
      "IR/SARH/ARH missiles"
    ]
  },
  {
    "term": "flares",
    "aka": [
      "Countermeasures",
      "CM"
    ],
    "definition": "Hot pyrotechnic decoys dispensed to lure heat-seeking (IR) missiles away from the aircraft's engine signature.",
    "seeAlso": [
      "chaff",
      "IRCCM",
      "IR/SARH/ARH missiles",
      "MAWS"
    ]
  },
  {
    "term": "CCIP/CCRP",
    "aka": [
      "Continuously Computed Impact Point",
      "Continuously Computed Release Point",
      "bombing computer"
    ],
    "definition": "Computerized bombing aids on modern aircraft: CCIP shows where ordnance will land right now for direct aiming, while CCRP cues a timed release toward a marked ground target.",
    "seeAlso": [
      "CAS"
    ]
  },
  {
    "term": "LRF",
    "aka": [
      "Laser Rangefinder",
      "Rangefinder"
    ],
    "definition": "A device that instantly measures the exact distance to a target with a laser so the gun sight adjusts for an accurate first shot; some types trigger a laser warning on the target.",
    "seeAlso": [
      "thermals",
      "crew skills",
      "laser warning"
    ]
  },
  {
    "term": "laser warning",
    "aka": [
      "LWS",
      "Laser Warning System"
    ],
    "definition": "A sensor that alerts a tank crew when an enemy laser rangefinder or designator is pointed at them, hinting they have been ranged and may be about to be fired upon.",
    "seeAlso": [
      "LRF",
      "RWR"
    ]
  },
  {
    "term": "thermals",
    "aka": [
      "Thermal Imaging",
      "TVD",
      "IRST"
    ],
    "definition": "An infrared optic that displays heat signatures, letting crews spot and target vehicles through darkness, smoke, and foliage; available in generations of increasing resolution.",
    "seeAlso": [
      "LRF"
    ]
  },
  {
    "term": "neutral steering",
    "aka": [
      "Neutral Steer",
      "Pivot Turn"
    ],
    "definition": "A tank's ability to rotate in place by driving its tracks in opposite directions, turning on the spot without moving forward or back.",
    "seeAlso": [
      "angling"
    ]
  },
  {
    "term": "angling",
    "aka": [
      "Angled Armour",
      "Hull Down"
    ],
    "definition": "Turning a tank's hull and turret to present armor at an angle to incoming fire, increasing its effective (line-of-sight) thickness; hull-down means exposing only the turret over cover.",
    "seeAlso": [
      "ricochet",
      "normalization",
      "overmatch",
      "neutral steering"
    ]
  },
  {
    "term": "citadel",
    "definition": "In naval battles, the heavily armored central section of a ship containing its magazines and engines; a penetrating 'citadel hit' here can cause catastrophic damage or instantly sink the vessel.",
    "seeAlso": [
      "SAP",
      "HE"
    ]
  },
  {
    "term": "Talisman",
    "aka": [
      "Wager"
    ],
    "definition": "A Golden Eagle booster that permanently doubles the RP a specific vehicle earns, greatly speeding research while crewing that vehicle.",
    "seeAlso": [
      "RP",
      "GE",
      "Premium Account"
    ]
  },
  {
    "term": "crew skills",
    "aka": [
      "Crew Qualification"
    ],
    "definition": "Per-crew upgrades bought with crew points (and SL/GE to qualify) that improve performance such as reload speed, targeting, repair time, G-tolerance, and stamina.",
    "seeAlso": [
      "SL",
      "GE",
      "LRF"
    ]
  },
  {
    "term": "Repair Cost",
    "aka": [
      "RC",
      "Auto-Repair"
    ],
    "definition": "The Silver Lion fee charged to repair a vehicle after it is damaged or destroyed in battle; it varies widely by tier and premium status and strongly affects net SL income.",
    "seeAlso": [
      "SL",
      "Premium Account"
    ]
  },
  {
    "term": "Premium Account",
    "aka": [
      "Premium Time"
    ],
    "definition": "A time-based subscription bought with Golden Eagles that boosts RP and SL earnings from every battle while active.",
    "seeAlso": [
      "GE",
      "Talisman",
      "Battle Pass",
      "RP",
      "SL"
    ]
  },
  {
    "term": "Battle Pass",
    "aka": [
      "BP",
      "Season Pass"
    ],
    "definition": "A seasonal progression system where playing battles earns levels that unlock rewards such as vehicles, currencies, boosters, and cosmetics, with extra rewards on the paid (premium) track.",
    "seeAlso": [
      "GE",
      "Premium Account"
    ]
  },
  {
    "term": "premium vehicle",
    "aka": [
      "Premium",
      "Pack Vehicle"
    ],
    "definition": "A vehicle bought with Golden Eagles or real money that earns bonus RP and SL and needs no research, often used to grind a tech tree or train crews faster.",
    "seeAlso": [
      "GE",
      "Talisman",
      "RP",
      "SL"
    ]
  },
  {
    "term": "sabot",
    "definition": "The lightweight carrier (the 'shoe') that grips a sub-caliber penetrator in the barrel for a tight gas seal, then separates and falls away after the round leaves the muzzle.",
    "seeAlso": [
      "APDS",
      "APFSDS",
      "APCR"
    ]
  },
  {
    "term": "Tandem",
    "aka": [
      "Tandem Warhead",
      "Tandem HEAT"
    ],
    "definition": "A warhead (on ATGMs and some rockets) with two shaped charges in series: a small precursor sets off reactive armor, then the main charge penetrates the bare armor behind it.",
    "seeAlso": [
      "ERA",
      "ATGM",
      "HEAT"
    ]
  },
  {
    "term": "SACLOS",
    "aka": [
      "Semi-Automatic Command to Line of Sight"
    ],
    "definition": "An ATGM guidance method where the operator just keeps the sight on the target and the system automatically steers the missile onto that line, easier than fully manual MCLOS.",
    "seeAlso": [
      "ATGM",
      "MCLOS"
    ]
  },
  {
    "term": "MCLOS",
    "aka": [
      "Manual Command to Line of Sight"
    ],
    "definition": "An older ATGM guidance method where the operator manually flies the missile to the target with a joystick, demanding far more skill than SACLOS.",
    "seeAlso": [
      "ATGM",
      "SACLOS"
    ]
  },
  {
    "term": "tech tree",
    "aka": [
      "Research Tree"
    ],
    "definition": "A nation's branching layout of researchable vehicles by type and rank, through which players progress by spending RP earned in battle.",
    "seeAlso": [
      "RP",
      "stock",
      "spaded",
      "rank",
      "foldername"
    ]
  },
  {
    "term": "rank",
    "aka": [
      "Tier"
    ],
    "definition": "A vehicle's broad progression tier in the tech tree (Rank I through Rank VIII), roughly tied to era and gating access to higher-rank vehicles and rewards; distinct from BR.",
    "seeAlso": [
      "BR",
      "tech tree"
    ]
  },
  {
    "term": "booster",
    "definition": "A consumable bonus (earned or bought) that temporarily increases the RP or SL gained from battles by a set percentage, for yourself or the whole team.",
    "seeAlso": [
      "RP",
      "SL",
      "Battle Pass"
    ]
  },
  {
    "term": "squadron vehicle",
    "aka": [
      "SQB"
    ],
    "definition": "A vehicle unlocked with Squadron Research Points earned by playing in a squadron (clan), then bought with SL; often strong, discounted options for their BR.",
    "seeAlso": [
      "RP",
      "SL"
    ]
  },
  {
    "term": "foldername",
    "aka": [
      "Folder",
      "Folder Vehicle"
    ],
    "definition": "A tech-tree grouping where several similar vehicles share one slot; you research them in sequence and only the first must be unlocked to progress past the folder.",
    "seeAlso": [
      "tech tree",
      "RP"
    ]
  },
  {
    "term": "ghost shell",
    "aka": [
      "Non-Pen",
      "Bug-Out"
    ],
    "definition": "Slang for a shot that visibly hits and should penetrate but deals no damage due to game mechanics or net issues, or more generally a hit that passes through empty internal space without striking crew or modules.",
    "seeAlso": [
      "spall",
      "APHE"
    ]
  },
  {
    "term": "nuke",
    "aka": [
      "tactical nuke",
      "tac nuke"
    ],
    "definition": "A powerful air-dropped nuclear bomb a player can earn by racking up many kills/assists in a single ground battle; delivering it wipes out a large area but the carrier aircraft is often shot down trying.",
    "seeAlso": [
      "CAS",
      "spawn point"
    ]
  },
  {
    "term": "Gaijin",
    "aka": [
      "the snail",
      "Snail"
    ],
    "definition": "Gaijin Entertainment, War Thunder's developer; 'the snail' is the community's affectionate-to-exasperated nickname, often invoked over monetization and balance decisions.",
    "seeAlso": [
      "GE",
      "Premium Account",
      "BR compression"
    ]
  },
  {
    "term": "uptier/downtier markers",
    "aka": [
      "matchmaker spread",
      "MM spread"
    ],
    "definition": "The way the matchmaker arranges a battle's BR range; you sit at the top of the spread in a downtier (advantaged) or the bottom in an uptier (disadvantaged), each up to 1.0 BR wide.",
    "seeAlso": [
      "uptier",
      "downtier",
      "BR"
    ]
  },
  {
    "term": "parts and FPE",
    "aka": [
      "Parts",
      "FPE",
      "Fire Prevention Equipment"
    ],
    "definition": "Two early ground modifications: Parts enables field repair of damaged modules and crew, while FPE automatically puts out fires; both are top priorities to research on a stock vehicle.",
    "seeAlso": [
      "stock",
      "crew skills"
    ]
  }
];
