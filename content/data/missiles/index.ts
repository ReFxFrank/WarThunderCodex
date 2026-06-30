import type { Missile } from "@/lib/schema";

// Seeded missiles — generated from the Phase 4 research/verify workflow.
export const missiles: Missile[] = [
  {
    "id": "aim-9b-sidewinder",
    "name": "AIM-9B Sidewinder",
    "kind": "air-to-air",
    "guidance": "IR",
    "maxRangeM": 4000,
    "minRangeM": null,
    "maxMach": 1.7,
    "overloadG": 10,
    "seekerFovDeg": null,
    "notes": "The AIM-9B is the earliest and least capable Sidewinder in the game and is purely a tail-chase weapon: it needs a clean rear-aspect view of the target's exhaust and a settled firing solution before launch. The Tier-1 wiki lists a maximum speed of 1.7 Mach, 10 G of available overload, a rear-aspect lock range of 4 km, a launch range of 10 km, and a 20-second guidance time. With only 10 G to work with it bleeds energy fast and slips its lock the moment a bandit pulls hard or maneuvers out of plane, so it performs best fired from directly astern of a co-speed, low-aspect target at close range where impact comes before the enemy can react. Longer shots toward the listed launch range really only connect against aircraft holding straight and level. Detonation is by proximity fuze backed by contact, and the 4.76 kg HBX warhead (7.62 kg TNT equivalent) means even a near miss across the tail can cripple control surfaces. All-aspect IR engagement does not arrive until later Sidewinders such as the AIM-9L. The seeker field of view / gimbal angle is not exposed on any retrievable Tier-1 page and is left null.",
    "sources": [
      {
        "label": "AIM-9B Sidewinder - War Thunder Wiki (old-wiki, Tier-1; fetchable index.php form. Characteristics table: max speed 1.7 M, max overload 10 G, lock range 4 km, launch range 10 km, guidance time 20 s, mass 72 kg, warhead 4.76 kg HBX / 7.62 kg TNT eq.)",
        "url": "https://old-wiki.warthunder.com/index.php?title=AIM-9B_Sidewinder",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "AIM-9B Sidewinder missile | Weaponry | War Thunder Wiki (new wiki, Tier-1; carrier list only, no stat block)",
        "url": "https://wiki.warthunder.com/collections/weapon/aim9b_sidewinder",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "minRangeM",
      "seekerFovDeg (seeker field of view / gimbal angle in degrees)",
      "irccm strength (presence inferred as none, but no Tier-1 numeric value)",
      "flare/countermeasure resistance values",
      "propellant burn time / time of flight (only 20 s guidance time is published)"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "allAspect": false,
    "irccm": false,
    "flareResistanceNote": "The AIM-9B carries no infrared counter-countermeasures, so its seeker latches onto whichever hot source dominates its narrow view and is easily lured off a target by decoys. A single flare is generally enough to pull the lock, and since the missile already depends on an unobstructed rear-aspect exhaust signature, even a hard break that masks the engine nozzle tends to defeat it without any countermeasures at all. No numeric flare-resistance value is published on a Tier-1 page."
  },
  {
    "id": "aim-7e-sparrow",
    "name": "AIM-7E Sparrow",
    "kind": "air-to-air",
    "guidance": "SARH",
    "maxRangeM": 50000,
    "minRangeM": null,
    "maxMach": 4,
    "overloadG": 25,
    "seekerFovDeg": null,
    "notes": "Semi-active radar-homing air-to-air missile that rides the continuous-wave (CW) illumination from the launching aircraft's radar, so the launch platform has to keep the target within its radar gimbals for the missile's whole flight or it goes ballistic. The in-game stat card lists it as front-aspect only: it homes on the closing return from the target's frontal hemisphere and is not a true all-aspect weapon. After launch it needs about 1.8 s before it starts tracking the target and roughly another 2.7 s after that before it is fully maneuverable, so very close shots (under a few kilometres) are unreliable because the missile cannot turn or reach speed in time. Maximum sustained pull is 25 G and top speed is Mach 4, with a 40 s guidance window; the missile masses 205 kg and operates in radar band I on a CW signal. The warhead is a 30 kg MK 38 MOD 0 continuous-rod type carrying 9 kg of PBXN-4, which the current in-game card rates at a 7.5 kg TNT equivalent (an older wiki article quoted 11.52 kg; the live stat card value is used here). Listed launch range is 50 km and lock range 25 km, but those are idealized figures against a high, head-on, non-maneuvering target and practical ranges are far shorter. The stat card exposes no numeric value for seeker field of view, minimum launch range, fuse type, or chaff resistance, so those are left unverified.",
    "sources": [
      {
        "label": "F-104S unit page (in-game AIM-7E Sparrow stat card) - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/f-104s",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "AIM-7E Sparrow article (latest revision) - War Thunder Wiki (old)",
        "url": "https://old-wiki.warthunder.com/index.php?diff=156750&title=AIM-7E_Sparrow",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "AIM-7 Sparrow weapon collection - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/collections/weapon/aim7_sparrow",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "minRangeM",
      "seekerFovDeg",
      "explicit numeric flare/chaff resistance values",
      "penetration table (not applicable to this air-to-air missile; none listed)",
      "fuse type and proximity fuse parameters"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "allAspect": false,
    "irccm": false,
    "flareResistanceNote": "Unaffected by infrared flares. Because the missile homes on continuous-wave radar energy reflected from the target rather than on a heat source, IR decoys do nothing to it. It is instead countered by chaff and by the target defeating the launch aircraft's illuminating radar lock through notching/Doppler beaming or by masking against ground clutter. The War Thunder stat card does not publish a numeric chaff-resistance figure."
  },
  {
    "id": "bgm-71-tow",
    "name": "BGM-71 TOW",
    "kind": "atgm",
    "guidance": "SACLOS",
    "maxRangeM": null,
    "minRangeM": null,
    "maxMach": null,
    "overloadG": null,
    "seekerFovDeg": null,
    "notes": "The base BGM-71 TOW modelled in War Thunder is the BGM-71B-class round (explicitly labelled BGM-71B TOW on the Israeli M113A1 (TOW) wiki page). Its in-game HEAT warhead delivers a flat 430 mm of penetration at 0 degrees impact at every range the wiki lists (10, 100, 500, 1000, 1500, and 2000 m), confirmed on two Tier-1 vehicle pages. The penetration stays constant because a shaped-charge jet defeats armour chemically rather than by kinetic energy, so it does not decay with the missile's velocity loss downrange. As a SACLOS wire-guided weapon the gunner must keep the reticle on the target for the missile's whole flight, with corrections fed through the control wires; the carrier vehicle can only creep while firing (the wiki notes firing on the move up to about 5 km/h on the M113A1 mount) and must hold line of sight to impact, which keeps the launcher exposed. This base round should not be confused with the higher-penetration BGM-71C I-TOW (630 mm), which the same vehicles carry as an upgrade, nor with the TOW-2 family. Maximum range and missile flight speed are described only loosely on the wiki (text refers to roughly four kilometres and roughly 300 m/s) and are not printed as exact figures on a Tier-1 stat table, so they are left null. Minimum range, overload, seeker field of view, and warhead/missile mass are likewise absent from Tier-1 pages and are left null. The air-to-air-style fields (Mach, overload G, seeker FoV, all-aspect, IRCCM, flare behaviour) do not apply to a wire-guided ATGM.",
    "sources": [
      {
        "label": "War Thunder Wiki — M113A1 (TOW), Italy (BGM-71B TOW, 430 mm at all ranges)",
        "url": "https://wiki.warthunder.com/unit/it_m113a1_tow",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki — M113A1 (TOW), Israel (labels BGM-71B TOW, 430 mm at all ranges)",
        "url": "https://wiki.warthunder.com/unit/il_m113a1_tow",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki — Anti-tank guided missiles (ATGM) mechanics (SACLOS wire guidance)",
        "url": "https://wiki.warthunder.com/mechanics/240-anti-tank-guided-missiles-atgm",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "maxRangeM",
      "minRangeM",
      "maxMach",
      "overloadG",
      "seekerFovDeg",
      "explosiveMassKg",
      "missileMassKg",
      "maxSpeedMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "allAspect": false,
    "irccm": false,
    "flareResistanceNote": "Not applicable. The BGM-71 TOW is a wire-guided SACLOS anti-tank missile with no infrared seeker, so flares, IRCCM, and all-aspect IR considerations have no bearing on it. Steering commands travel down the trailing control wires while the gunner holds the sight on the target; nothing about the round responds to heat sources, and countermeasures built to defeat IR seekers cannot affect it."
  }
];
