import type { Ammo } from "@/lib/schema";

// Seeded ammunition — generated from the Phase 4 research/verify workflow.
// Penetration tables sourced; unverifiable figures are null and listed in unverified[].
export const ammo: Ammo[] = [
  {
    "id": "br-365k",
    "name": "BR-365K (APHE)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 148,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 143,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 126,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 106,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 90,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 77,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "BR-365K is a sharp-nosed armor-piercing round that carries a small explosive charge with a delayed fuse rather than relying on solid mass alone. On contact the hardened body punches through the target plate, and once it is past the armor the fuse delay lets the projectile travel a short way into the interior before the filler detonates. That timing is what gives the round its lethality: instead of releasing fragments at the face of the plate, it bursts inside the fighting compartment, throwing armor spall and shell fragments outward in a cone that can strike crew, ammunition, and modules clustered behind the entry point. Compared with a bare solid shot the explosive charge widens and intensifies the post-penetration debris, raising the odds of a single-shot crew knockout or an ammunition or fuel-tank ignition. The trade-off is that the filler is modest, so the internal effect is concentrated and directional rather than a large blast, and the round must actually defeat the plate first to do anything useful; against steeply sloped or thick armor the lack of a ballistic or armor-piercing cap leaves it more prone to losing penetration at angle than capped rounds, so it rewards squarer hits aimed at crew, ammo stowage, or the engine bay.",
    "sources": [
      {
        "label": "T-34-85 (1944, ZIS-S-53) — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_85_zis_53",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM",
      "ricochetAnglesDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "o-365k",
    "name": "O-365K (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 19,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 18,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 17,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 16,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 15,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 14,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The O-365K is the 85 mm high-explosive round for the ZiS-S-53 (and related Soviet 85 mm guns), and it damages targets with blast and fragmentation instead of kinetic energy. When it strikes, the bursting charge detonates at the surface, throwing an overpressure wave and a shower of casing splinters outward from the point of impact. Its nominal armour penetration is small and falls off only slowly with distance, going from 19 mm at 10 m down to 14 mm at 2,000 m. That is enough to defeat the thin plating of soft-skinned and very lightly protected vehicles, letting the explosion vent inside and knock out crew and modules with a single hit. Against well-armoured targets the shell cannot pierce the plate, so it relies on the external overpressure and spall that HE can deliver against exposed crew, sights, tracks, or the gun barrel when it bursts on the surface. It is consequently most effective against trucks, half-tracks, open-topped tank destroyers, and anti-aircraft mounts, while the gun's armour-piercing and APCR shells stay the better answer to anything with real protection.",
    "sources": [
      {
        "label": "War Thunder Wiki - T-34-85 (ZiS-S-53) unit page, O-365K (HE) penetration table",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_85_zis_53",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM",
      "ricochetAnglesDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "br-365p",
    "name": "BR-365P (APCR)",
    "type": "APCR",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 195,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 187,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 154,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 122,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 96,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 76,
        "angleDeg": 0
      }
    ],
    "velocityMps": 1050,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "BR-365P is the tungsten-cored APCR shot for the 85 mm ZiS-S-53. Carrying no explosive filler, it relies entirely on the kinetic energy of its small, dense core to defeat armor, and its post-penetration effect comes from the spall cone thrown off as that core punches through plate. Because the surviving fragment is a single narrow rod rather than a broad shower, the cone of damaging debris behind the hole is comparatively tight, so it tends to disable whatever crew or modules lie directly along its line of travel while leaving offset components untouched. It produces no internal detonation and no overpressure, meaning a hit that grazes the fighting compartment without striking a crewman or ammunition rack can pass through with disappointingly little effect. Its very high 1,050 m/s muzzle velocity gives an extremely flat trajectory and the gun's best raw penetration at close range (195 mm at 10 m), but the light 4.99 kg projectile sheds velocity quickly, dropping to 122 mm at 1,000 m and only 76 mm at 2,000 m, so its lethality advantage is concentrated in short-range engagements where the spall it generates is most reliable. Its ricochet thresholds are also high (around 66 degrees), so very steeply angled plates that would deflect other rounds can bounce it outright.",
    "sources": [
      {
        "label": "War Thunder Wiki — T-34-85 (1944) unit page (85 mm ZiS-S-53, BR-365P penetration)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_85_zis_53",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki (old) — ZIS-S-53 (85 mm) ammunition characteristics (BR-365P velocity, mass, ricochet)",
        "url": "https://old-wiki.warthunder.com/index.php?title=ZIS-S-53_(85_mm)",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "ricochetAnglesDeg": {
      "min": 66,
      "max": 72
    }
  },
  {
    "id": "m72-ap",
    "name": "M72 (AP)",
    "type": "AP",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 91,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 88,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 78,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 67,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 57,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 49,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "M72 is a solid full-bore armor-piercing shot for the 75 mm M3 gun and carries no explosive filler, so it relies entirely on kinetic energy and the spall it generates once it breaks through a plate. After penetration the shot and the fragments it tears from the rear face of the armor scatter into the fighting compartment, and that fragment cone is the only thing doing damage, since there is no internal burst or overpressure. Lethality therefore depends heavily on what lies directly behind the entry point: a hit that crosses crew stations, the breech, or stored ammunition tends to be decisive, whereas a clean pass through a lightly occupied section can leave a target functional. Without a fuse the round neither arms nor detonates, so it cannot defeat spaced or interior obstructions the way a delayed filler shell can. Penetration is moderate and declines steadily with distance, from 91 mm at 10 m to 49 mm at 2000 m, which suits it to close and medium-range engagements against lightly and moderately armored opponents, and like any uncapped AP shot it loses effectiveness against steeply sloped plate where it is increasingly likely to deflect rather than bite.",
    "sources": [
      {
        "label": "War Thunder Wiki - M4A1 (1942) Sherman (unit page; confirms M72 shot penetration for the 75 mm M3)",
        "url": "https://wiki.warthunder.com/unit/us_m4a1_1942_sherman",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki - M4A1",
        "url": "https://wiki.warthunder.com/M4A1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM",
      "ricochetAnglesDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m61-apcbc",
    "name": "M61 (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 104,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 102,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 93,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 84,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 75,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 68,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M61 is an armour-piercing capped, ballistic-capped (APCBC) round fired from the US 75 mm M3 gun. Its hardened piercing cap helps the shot bite into sloped or face-hardened plate instead of shattering, while the outer ballistic cap streamlines the nose to reduce drag. Behind the kinetic penetrator it carries a small explosive filler set off by a base-detonating fuze, so once the round defeats the armour the charge bursts inside the vehicle, scattering fragments through the fighting compartment rather than relying on impact spall alone. This gives the M61 a strong chance of disabling crew or igniting stowed ammunition on a clean penetration. Penetration is solid for its class at short range (about 104 mm at point-blank on the M4A1) but falls off steadily with distance, dropping to roughly 68 mm by 2000 m, so it is most reliable against medium-armoured targets at closer ranges.",
    "sources": [
      {
        "label": "War Thunder Wiki — M4A1 (M3 75 mm, M61 shot penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m4a1_1942_sherman",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki — M4 Sherman (75mm) (M61 shell, 65 g explosive filler, 104 mm point-blank)",
        "url": "https://wiki.warthunder.com/842-m4-sherman-75mm-the-backbone-of-the-u-s-armored-forces",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM",
      "ricochetAnglesDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m48-he",
    "name": "M48 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 10,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 10,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 10,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 10,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 10,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 10,
        "angleDeg": 0
      }
    ],
    "velocityMps": 463,
    "explosiveMassTntEqG": 666,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.2,
    "mechanics": "The M48 is the high-explosive fragmentation shell for the 75 mm M3 cannon, and it trades kinetic performance for blast and splinter effect. Its listed armour penetration is a flat 10 mm at every range from 10 m out to 2000 m, so it should never be relied upon to defeat armour by impact alone. Instead the kill comes from the 666 g TNT-equivalent filler: on contact the round detonates at or just behind the surface and sprays fragments while generating overpressure inside the point of impact. This makes it well suited to open-topped tank destroyers, anti-aircraft mounts, soft-skinned vehicles, and exposed crew, where the explosion can incapacitate the target without first punching through a plate. Against anything shielded by more than its nominal 10 mm of effective armour at the contact point the shell tends to burst on the surface and waste most of its energy, achieving little beyond a possible module or crew shock on very thin sections. The very low fuse sensitivity of 0.1 mm means the round arms against almost any obstacle it touches, including light sheet metal, tracks, and gun barrels, while the short 0.2 m fuse delay keeps the detonation tight against the impact face. The relatively modest 463 m/s muzzle velocity produces a noticeable ballistic drop, so engaging targets at longer ranges calls for deliberate elevation hold-over and lead.",
    "sources": [
      {
        "label": "War Thunder Wiki - M4A1 (1942) Sherman: M48 shell stats (type, penetration 10 mm at all ranges, velocity, projectile mass, TNT-equivalent filler, fuze delay, fuze sensitivity)",
        "url": "https://wiki.warthunder.com/unit/us_m4a1_1942_sherman",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg",
      "ricochetAnglesDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m89-smoke",
    "name": "M89 (smoke)",
    "type": "other",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 3,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 3,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 3,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 3,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 3,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 3,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M89 is a smoke round for the 75 mm M3 gun and carries essentially no anti-armour capability: its listed penetration is a flat 3 mm at every range, meaning it is stopped by all but the thinnest plating and yields no useful post-penetration effect. With no armour-piercing core and no high-explosive bursting charge, a direct hit will neither knock out nor reliably damage an armoured target. Its function is utility rather than destruction: on impact it generates a smoke screen that obscures lines of sight, blinds enemy gunners, and covers the movement of friendly vehicles that lack their own smoke-grenade launchers. In practice it is best placed on the ground in front of an enemy firing position or across a contested approach rather than aimed at a hull, since striking a vehicle accomplishes little. Because it is a non-combat projectile, the in-game ammunition table records only the constant 3 mm penetration figure and omits the velocity and warhead statistics shown for the gun's fighting shells.",
    "sources": [
      {
        "label": "War Thunder Wiki — M4A1 (75 mm M3 ammunition table, M89 Smoke)",
        "url": "http://wiki.warthunder.com/M4A1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki — M3 GMC (shared 75 mm M3 gun, M89 Smoke penetration)",
        "url": "https://wiki.warthunder.com/unit/us_halftrack_m3_75mm_gmc",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM",
      "ricochetAnglesDeg",
      "projectileMass",
      "smokeFiller",
      "fuseType"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "pzgr39-42",
    "name": "PzGr 39/42 (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 192,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 188,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 173,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 156,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 140,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 126,
        "angleDeg": 0
      }
    ],
    "velocityMps": 935,
    "explosiveMassTntEqG": 28.9,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "The PzGr 39/42 is the armour-piercing capped, ballistic-capped shell for the 7.5 cm KwK42 carried by the Panther family. Unlike a true solid shot, it is modelled with a small bursting charge of 28.9 g (TNT equivalent), so it behaves as a capped APHE-style round: the projectile first punches through the plate using its piercing cap, then the fuse triggers a delayed internal detonation. The fuse arms only against armour at least 14 mm thick and detonates after roughly 1.2 m of travel inside the vehicle, which means most of the killing power is delivered just past the entry point as a combination of kinetic spall and the explosive burst scattering fragments through the crew compartment. The hard piercing cap helps the round bite into sloped and harder plate before shattering, while the streamlined ballistic cap keeps drag low for a flat trajectory at 935 m/s, supporting a gently decaying penetration curve from 192 mm at 10 m to 126 mm at 2000 m. Because effectiveness depends on the shell going off among crew, ammunition or the engine, angled shots that route the projectile through occupied volume tend to be far more lethal than hits that pass through empty hull. The round resists ricochet well at moderate obliquity, with ricochet chance only beginning around 48 degrees and becoming certain near 71 degrees, making it a dependable one-to-two-shot killer at the Panther's battle rating.",
    "sources": [
      {
        "label": "War Thunder Wiki — KwK42 (75 mm) gun, shell details and penetration tables",
        "url": "https://old-wiki.warthunder.com/index.php?title=KwK42_(75_mm)",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki — Pzkpfw V Ausf. D Panther (penetration table)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_V_ausf_d_panther",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "ricochetAnglesDeg": {
      "min": 48,
      "max": 71
    }
  },
  {
    "id": "pzgr40-42",
    "name": "PzGr 40/42 (APCR)",
    "type": "APCR",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 228,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 224,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 204,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 182,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 162,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 145,
        "angleDeg": 0
      }
    ],
    "velocityMps": 1120,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The PzGr 40/42 is the rigid sub-calibre armour-piercing composite round for the 75 mm KwK42, pairing a slim tungsten-carbide core with a light alloy carrier to reach an exceptionally high muzzle velocity. That speed gives it the best close-range armour penetration available from this gun, well above what the standard capped shot manages, making it the tool of choice when an enemy's frontal plate cannot be beaten by the regular round head-on. It carries no bursting charge and no fuse, so all of its effect comes from the bare core once it defeats a plate; behind the armour it produces a comparatively narrow, sparse spray of fragments rather than a wide damaging burst, which means hits often pass through and harm only the crew or components lying directly along the shot line. Effective use therefore rewards aiming deliberately at ammunition, the engine bay, or a tight cluster of crew. Being light for its calibre, the core bleeds off velocity and penetration quickly with distance, so the strong muzzle figures fall away faster downrange than a heavier full-calibre shot would, and the dense narrow projectile handles sloped armour poorly, starting to glance off at moderate obliquity and ricocheting reliably past roughly seventy degrees. It is best saved for heavily armoured opponents engaged at short to medium range where its raw flat-on penetration is decisive.",
    "sources": [
      {
        "label": "old-wiki.warthunder.com — KwK42 (75 mm) Ammunition (raw wikitext)",
        "url": "https://old-wiki.warthunder.com/index.php?title=KwK42_(75_mm)/Ammunition&action=raw",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "old-wiki.warthunder.com — KwK42 (75 mm) Ammunition",
        "url": "https://old-wiki.warthunder.com/wiki/KwK42_(75_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "explosiveMassTntEqG",
      "fuseDelayM",
      "fuseSensitivityMm",
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)",
    "ricochetAnglesDeg": {
      "min": 66,
      "max": 72
    }
  },
  {
    "id": "sprgr42",
    "name": "Sprgr 42 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 13,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 12,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 11,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 11,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 11,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 11,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Sprgr 42 is the high-explosive round carried by the 7.5 cm KwK 42, intended for soft targets rather than armor defeat. Its listed armor penetration is minimal, dropping from 13 mm at 10 m to a stable 11 mm past 500 m, which means it will not reliably bore through the plating of a properly armored tank. Damage instead comes from the contact-fuzed burst on impact: the explosion throws blast and fragments outward from the point of detonation, which is effective at killing exposed crew and wrecking lightly protected or open-topped vehicles, anti-air mounts, and unarmored transports. Fired at an enclosed armored vehicle, most of the blast spends itself against the exterior and comparatively little energy reaches the crew compartment, so the round tends to scratch paint rather than knock out the tank. Use it deliberately for thin-skinned and exposed targets where a near hit is enough, and switch to the gun's armor-piercing ammunition whenever you need to actually punch through plate.",
    "sources": [
      {
        "label": "War Thunder Wiki - Panther D unit page (Sprgr. 42 penetration table)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_V_ausf_d_panther",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM",
      "ricochetAnglesDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  }
];
