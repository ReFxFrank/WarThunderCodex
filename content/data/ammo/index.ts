import type { Ammo } from "@/lib/schema";

// Seeded ammunition — generated from the research/verify workflow.
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
  },
  {
    "id": "br-471-d25t",
    "name": "BR-471 (APHE)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 205,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 201,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 182,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 161,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 143,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 126,
        "angleDeg": 0
      }
    ],
    "velocityMps": 795,
    "explosiveMassTntEqG": 246,
    "normalizationDeg": null,
    "fuseSensitivityMm": 19,
    "fuseDelayM": 1.2,
    "mechanics": "The BR-471 is the IS-2's stock armor-piercing high-explosive round, pairing a sizable 122 mm slug with an A-IX-2 filler that yields a 246 g TNT-equivalent burst once the fuze trips inside the target. Its large post-penetration explosion can wreck an entire crew compartment in a single hit, making placement forgiving compared with solid-shot rounds. Penetration is solid for its battle rating but bleeds off noticeably with range, dropping from 205 mm at point blank to 126 mm at 2 km. Without a ballistic cap it also sheds more performance against sloped plate, so flat-on shots are preferred.",
    "sources": [
      {
        "label": "IS-2 — War Thunder Wiki (unit page, D-25T ammunition)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_2_1943",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "br-471b-d25t",
    "name": "BR-471B (APHEBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 205,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 203,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 192,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 178,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 166,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 155,
        "angleDeg": 0
      }
    ],
    "velocityMps": 795,
    "explosiveMassTntEqG": 246,
    "normalizationDeg": null,
    "fuseSensitivityMm": 19,
    "fuseDelayM": 1.2,
    "mechanics": "The BR-471B is the IS-2's researchable upgrade over the stock APHE, adding a ballistic cap (APHEBC) to the same 25 kg projectile and A-IX-2 filler. The cap improves penetration retention across distance and against angled armor, so it holds 155 mm at 2 km versus the BR-471's 126 mm and copes better with sloped plate. It carries the identical 246 g TNT-equivalent charge and 1.2 m fuze delay, so its post-penetration lethality matches the stock round while ballistics improve. This is the preferred general-purpose shell for the IS-2 once unlocked.",
    "sources": [
      {
        "label": "IS-2 — War Thunder Wiki (unit page, D-25T ammunition)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_2_1943",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "of-471-d25t",
    "name": "OF-471 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 37,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 37,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 37,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 37,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 37,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 37,
        "angleDeg": 0
      }
    ],
    "velocityMps": 795,
    "explosiveMassTntEqG": 3600,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.3,
    "mechanics": "The OF-471 is a high-explosive fragmentation shell packing a massive 3.6 kg TNT charge, the heaviest filler available to the D-25T. Its near-instant fuze (0.1 mm sensitivity, 0.3 m delay) detonates on the lightest contact, making it devastating against open-topped vehicles, light armor, exposed crew, and gun barrels. Direct armor penetration is a flat 37 mm regardless of range or angle, so it is ineffective against the front of heavy tanks but lethal where blast and fragmentation can reach soft targets. It also fills the anti-aircraft and demolition niche when an AP hit is not needed.",
    "sources": [
      {
        "label": "IS-2 — War Thunder Wiki (unit page, D-25T ammunition)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_2_1943",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "dm13-l7a3",
    "name": "DM13 (APDS)",
    "type": "APDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 350,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 347,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 333,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 317,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 302,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 287,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": 0,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "DM13 is the Leopard 1's high-velocity armour-piercing discarding-sabot round and its flattest-shooting, longest-ranged anti-armour option. A dense sub-calibre penetrator sheds its sabot at the muzzle and retains lethality past 2 km, but as a solid kinetic shot it carries no explosive filler, so post-penetration damage relies entirely on spalling and fragments striking crew and modules. It suffers reduced penetration against heavily sloped plate because discarding-sabot rounds normalise poorly, so aim for flat or lightly angled armour.",
    "sources": [
      {
        "label": "Leopard I — War Thunder Wiki (unit page, 105 mm L7A3 penetration table)",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_I",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "dm512-l7a3",
    "name": "DM512 (HESH)",
    "type": "HESH",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 127,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 127,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 127,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 127,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 127,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 127,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "DM512 is a high-explosive squash-head shell whose 127 mm penetration is constant at every range, since chemical-energy rounds do not lose effect with distance. On impact the soft filler spreads against the plate and detonates, either punching through thin armour or, against thicker plate, blasting off a scab of metal that sprays the crew compartment with spall. It is most effective against lightly armoured targets, exposed crew, and as a follow-up to disable modules, but it is defeated by spaced armour and angled plate.",
    "sources": [
      {
        "label": "Leopard I — War Thunder Wiki (unit page, 105 mm L7A3 penetration table)",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_I",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "dm12-l7a3",
    "name": "DM12 (HEATFS)",
    "type": "HEATFS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 400,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 400,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 400,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 400,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 400,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 400,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "DM12 is a fin-stabilised high-explosive anti-tank round delivering a constant 400 mm of penetration regardless of range, making it the Leopard 1's most reliable answer to well-armoured frontal targets at any distance. Its shaped-charge jet is unaffected by impact angle for penetration purposes, so it bites into sloped armour that defeats kinetic rounds, but its lower velocity demands more shell drop compensation at long range. Spaced armour, tracks, and other stand-off obstacles can prematurely trigger the charge and sharply reduce its effect.",
    "sources": [
      {
        "label": "Leopard I — War Thunder Wiki (unit page, 105 mm L7A3 penetration table)",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_I",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m79-shot-76mm-m1",
    "name": "M79 shot (AP)",
    "type": "AP",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 134,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 132,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 121,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 109,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 99,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 89,
        "angleDeg": 0
      }
    ],
    "velocityMps": 792,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M79 is a solid uncapped armour-piercing shot with no explosive filler, so it relies purely on kinetic energy and spalling to disable a target. It holds penetration well across range and is the stock round, but its blunt, uncapped nose ricochets readily off sloped plate and post-penetration damage is limited to the fragments it throws. Aim for crew, ammo, or engine to maximise its single-line-of-effect damage.",
    "sources": [
      {
        "label": "M18 GMC — War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m18_hellcat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "M1 (76 mm)/Ammunition — War Thunder Wiki (shell characteristics)",
        "url": "https://old-wiki.warthunder.com/index.php?title=M1_(76_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m42a1-shell-76mm-m1",
    "name": "M42A1 shell (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 16,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 16,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 14,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 13,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 11,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 10,
        "angleDeg": 0
      }
    ],
    "velocityMps": 823,
    "explosiveMassTntEqG": 390,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.2,
    "mechanics": "The M42A1 is a high-explosive shell that detonates on contact via a very sensitive fuse, making it best against open-topped vehicles, exposed crew, anti-aircraft mounts, and trucks. Its negligible armour penetration means it will not defeat any meaningful plate, so it is used to blast soft or unarmoured targets rather than as an anti-tank round. The sizeable TNT-equivalent charge produces a wide fragmentation pattern that can wreck multiple crew on a thin-skinned target.",
    "sources": [
      {
        "label": "M18 GMC — War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m18_hellcat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "M1 (76 mm)/Ammunition — War Thunder Wiki (shell characteristics)",
        "url": "https://old-wiki.warthunder.com/index.php?title=M1_(76_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m62-shell-76mm-m1",
    "name": "M62 shell (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 149,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 146,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 133,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 119,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 106,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 95,
        "angleDeg": 0
      }
    ],
    "velocityMps": 792,
    "explosiveMassTntEqG": 63.7,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "The M62 is an armour-piercing capped, ballistic-capped round with an explosive filler that detonates after a short fuse delay once inside the target, scattering fragments through the crew compartment. The armour-piercing cap improves bite against sloped and face-hardened plate compared to the bare M79, while the ballistic cap helps it retain velocity at range. This combination of solid penetration and post-penetration explosive damage makes it the recommended general-purpose anti-tank round for the Hellcat.",
    "sources": [
      {
        "label": "M18 GMC — War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m18_hellcat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "M1 (76 mm)/Ammunition — War Thunder Wiki (shell characteristics)",
        "url": "https://old-wiki.warthunder.com/index.php?title=M1_(76_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m93-shot-76mm-m1",
    "name": "M93 shot (APCR)",
    "type": "APCR",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 191,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 186,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 168,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 147,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 129,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 113,
        "angleDeg": 0
      }
    ],
    "velocityMps": 1036,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M93 is a lightweight, high-velocity armour-piercing composite rigid shot with a dense tungsten-carbide core that delivers the highest point-blank penetration of any Hellcat round. Its flat trajectory and best-in-class up-close penetration make it ideal for cracking heavily armoured frontal plate at short range, but the light projectile bleeds velocity quickly so penetration falls off faster than the M62 at distance. With no explosive filler, post-penetration damage relies on the core and spall, so precise aim at internal modules is required.",
    "sources": [
      {
        "label": "M18 GMC — War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m18_hellcat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "M1 (76 mm)/Ammunition — War Thunder Wiki (shell characteristics)",
        "url": "https://old-wiki.warthunder.com/index.php?title=M1_(76_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m88-smoke-76mm-m1",
    "name": "M88 (smoke)",
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
    "velocityMps": 274,
    "explosiveMassTntEqG": 50,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M88 is a smoke shell that generates a screening cloud where it lands, used to block enemy lines of sight, cover an advance, or mask a retreat rather than to damage vehicles. Its near-zero penetration makes it useless as an anti-tank round, but a well-placed smoke wall lets the lightly armoured, fast Hellcat reposition without being shot. The low muzzle velocity and arcing trajectory mean the round must be lobbed, so account for significant drop when placing the screen.",
    "sources": [
      {
        "label": "M18 GMC — War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m18_hellcat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "M1 (76 mm)/Ammunition — War Thunder Wiki (shell characteristics)",
        "url": "https://old-wiki.warthunder.com/index.php?title=M1_(76_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "t33-m3-90",
    "name": "T33 shot (APBC)",
    "type": "AP",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 175,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 172,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 161,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 149,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 137,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 126,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The T33 is the Pershing's stock armour-piercing ballistic-capped solid shot, carrying no explosive filler. Its blunt ballistic cap helps it bite into sloped plate and resist shattering, but with no bursting charge its post-penetration effect relies entirely on the kinetic spalling of the slug. Penetration is merely average for the battle rating, so shot placement on crew and ammunition is essential. It is best replaced as soon as the M82 unlocks.",
    "sources": [
      {
        "label": "M26 Pershing — War Thunder Wiki (unit/us_m26_pershing)",
        "url": "https://wiki.warthunder.com/unit/us_m26_pershing",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m82-m3-90",
    "name": "M82 shot (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 185,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 183,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 173,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 161,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 150,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 140,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M82 is an armour-piercing capped ballistic-capped shell and the Pershing's workhorse round. Its armour-piercing cap improves performance against face-hardened and angled plate while the ballistic cap preserves velocity downrange, giving it better penetration than the T33 at every distance. A respectable high-explosive filler detonates behind the armour, frequently disabling or destroying lightly protected targets in a single hit. It is the recommended general-purpose shell for the gun.",
    "sources": [
      {
        "label": "M26 Pershing — War Thunder Wiki (unit/us_m26_pershing)",
        "url": "https://wiki.warthunder.com/unit/us_m26_pershing",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m304-m3-90",
    "name": "M304 shot (APCR)",
    "type": "APCR",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 287,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 281,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 259,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 234,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 211,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 191,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M304 is an armour-piercing composite rigid shot with a dense tungsten-carbide core in a lightweight carrier. It leaves the muzzle at very high velocity, giving it by far the strongest flat-on penetration of the Pershing's rounds, ideal for cracking heavily armoured frontal plates. However, the light projectile bleeds velocity quickly, normalizes poorly against sloped armour, and carries no explosive filler, so post-penetration damage is limited to the narrow core's spall cone. Carry a few rounds as a dedicated heavy-armour solution.",
    "sources": [
      {
        "label": "M26 Pershing — War Thunder Wiki (unit/us_m26_pershing)",
        "url": "https://wiki.warthunder.com/unit/us_m26_pershing",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m71-m3-90",
    "name": "M71 shell (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 20,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 20,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 18,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 17,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 16,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 16,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M71 is a high-explosive shell that detonates on contact, scattering fragments and blast over its impact point. Its negligible armour penetration makes it ineffective against tanks, but it excels at knocking out open-topped vehicles, anti-aircraft guns, and exposed crew. It is also useful for destroying soft targets and structures. Most Pershing crews carry few or none in favour of armour-piercing rounds.",
    "sources": [
      {
        "label": "M26 Pershing — War Thunder Wiki (unit/us_m26_pershing)",
        "url": "https://wiki.warthunder.com/unit/us_m26_pershing",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m313-m3-90",
    "name": "M313 (Smoke)",
    "type": "other",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 5,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M313 is a smoke shell that bursts on impact to deploy a screening cloud of obscurant downrange. It deals no meaningful damage and is purely a utility round, used to block enemy lines of sight, cover an advance, or screen a retreat across open ground. Crews typically carry only a couple for situational use.",
    "sources": [
      {
        "label": "M26 Pershing — War Thunder Wiki (unit/us_m26_pershing)",
        "url": "https://wiki.warthunder.com/unit/us_m26_pershing",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "br-412-d10tg",
    "name": "BR-412 (APHE)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 218,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 212,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 189,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 164,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 142,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 123,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The BR-412 is a sharp-nosed armour-piercing round carrying a small high-explosive bursting charge behind a base fuse, so a successful penetration sprays the crew compartment with fragments rather than relying on a single solid slug. Lacking any ballistic or armour-piercing cap, it loses penetration quickly at angle and over distance and is more prone to shattering against sloped plate than the capped BR-412B and BR-412D rounds. It is the stock 100 mm projectile and is best used at close range against lightly sloped armour.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "of-412-d10tg",
    "name": "OF-412 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 27,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 27,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 26,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 24,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 23,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 21,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The OF-412 is a thin-walled high-explosive shell that relies on blast and fragmentation rather than kinetic penetration, with its listed armour figure reflecting only how much plate the detonation can blow through. It is effective against open-topped vehicles, anti-aircraft guns, exposed crew, and light armour, but is almost useless against any tank with meaningful frontal protection. The large explosive filler makes it a useful tool for finishing damaged targets or knocking out unarmoured equipment.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "br-412b-d10tg",
    "name": "BR-412B (APHEBC)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 218,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 215,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 201,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 184,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 169,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 155,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The BR-412B adds a blunt armour-piercing cap and a ballistic cap to the basic APHE design, which improves performance against sloped and face-hardened armour and greatly reduces shatter at oblique angles. It retains penetration far better than the uncapped BR-412 at range, while still carrying an explosive filler for strong post-penetration damage. It is a solid all-round AP choice that bridges the gap between the stock round and the better BR-412D.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "br-412d-d10tg",
    "name": "BR-412D (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 239,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 236,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 220,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 202,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 185,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 170,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The BR-412D is the top armour-piercing-capped ballistic-capped round for the D-10T, offering the highest kinetic penetration in the 100 mm AP line along with an explosive filler for reliable post-penetration spalling. The combined caps give it excellent behaviour against angled armour and consistent normalization, making it the recommended general-purpose shell for the T-54. It penetrates and kills with a single hit against most contemporaries, and trades only modest velocity for its superior cap design.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "br-412p-d10tg",
    "name": "BR-412P (APCR)",
    "type": "APCR",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 224,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 216,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 186,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 153,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 127,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 105,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The BR-412P is a composite rigid armour-piercing round with a lightweight body and dense tungsten-carbide core, giving high muzzle velocity and strong penetration at point-blank range. Its low mass bleeds velocity quickly, so penetration falls off sharply with distance and it becomes the weakest AP option beyond about a kilometre. With no explosive filler it relies on the solid core for behind-armour damage, so it is best reserved for close-range shots on heavily armoured frontal plates.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "3bm-8-d10tg",
    "name": "3BM-8 (APDS)",
    "type": "APDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 336,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 332,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 317,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 299,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 282,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 265,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The 3BM-8 is an armour-piercing discarding-sabot round whose sub-calibre penetrator is launched at very high velocity inside a sabot that falls away after the muzzle, delivering by far the highest penetration of the T-54's solid-shot options. Its flat trajectory and excellent velocity retention make long-range gunnery much easier than with the full-calibre AP rounds. Carrying no explosive filler, it produces a narrow spall cone, so precise aiming at crew and modules is needed to secure quick kills.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "3bk-5-d10tg",
    "name": "3BK-5 (HEATFS)",
    "type": "HEATFS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 380,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 380,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 380,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The 3BK-5 is a fin-stabilized high-explosive anti-tank round that defeats armour with a shaped-charge jet, so its penetration is constant at all ranges and independent of striking velocity. At 380 mm it out-penetrates every kinetic round in the gun and is the answer to the most heavily armoured opponents the T-54 faces. Its drawback is a thin penetration channel and modest behind-armour effect, so it is best treated as a specialist backup rather than the primary shell.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "3d3-d10tg",
    "name": "3D3 (Smoke)",
    "type": "other",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 5,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The 3D3 is a smoke shell that bursts on impact to produce a dense screen for concealing movement, breaking line of sight, or covering a retreat. It carries no meaningful armour-piercing capability and its nominal penetration figure is incidental to its purpose. It is a utility round used to control engagement geometry rather than to damage the enemy directly.",
    "sources": [
      {
        "label": "T-54 (1951) — War Thunder Wiki (unit page, ammunition/penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "velocityMps",
      "explosiveMassTntEqG",
      "normalizationDeg",
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "pzgr39-kwk36",
    "name": "PzGr 39 (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 165,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 162,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 151,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 139,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 127,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 117,
        "angleDeg": 0
      }
    ],
    "velocityMps": 773,
    "explosiveMassTntEqG": 108.8,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "The stock armour-piercing capped, ballistic-capped round is the Tiger H1's reliable workhorse against armour. Its piercing cap defeats sloped and face-hardened plate while the ballistic cap preserves velocity, holding penetration well past 1 km, and the small bursting charge sprays the crew compartment once the fuse trips behind the plate. With a 14 mm fuse-sensitivity threshold and a 1.2 m delay, it needs a meaningful plate to arm, so very thin or empty structures can be over-penetrated without detonation.",
    "sources": [
      {
        "label": "Tiger H1 — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_h1_tiger",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK36 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK36_(88_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "pzgr-kwk36",
    "name": "Pzgr. (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 153,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 151,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 140,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 128,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 116,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 106,
        "angleDeg": 0
      }
    ],
    "velocityMps": 810,
    "explosiveMassTntEqG": 215.04,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "This alternative armour-piercing capped, ballistic-capped shell trades a little raw penetration for a markedly larger bursting charge, nearly double the TNT-equivalent of the PzGr 39. The extra filler makes post-penetration damage devastating, often knocking out an entire crew compartment in a single hit. Its lower penetration means it is best reserved for closer engagements or lighter targets where punching through is not in doubt.",
    "sources": [
      {
        "label": "Tiger H1 — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_h1_tiger",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK36 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK36_(88_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "hlgr39-kwk36",
    "name": "Hl.Gr 39 (HEAT)",
    "type": "HEAT",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 110,
        "angleDeg": 0
      }
    ],
    "velocityMps": 600,
    "explosiveMassTntEqG": 1100,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.3,
    "fuseDelayM": 0,
    "mechanics": "The shaped-charge round penetrates by a focused metal jet rather than kinetic energy, so its 110 mm of penetration is constant at every range, making it useful for long-range shots where the kinetic rounds have dropped off. It carries a very large explosive filler, giving strong post-penetration effect, but its low 600 m/s muzzle velocity produces heavy shell drop that demands careful range estimation. The jet is easily disrupted by spaced armour, tracks, or any standoff, so it is situational rather than a primary anti-armour pick.",
    "sources": [
      {
        "label": "Tiger H1 — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_h1_tiger",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK36 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK36_(88_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sprgr-l45-kwk36",
    "name": "Sprgr. L/4.5 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 18,
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
        "penMm": 15,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 14,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 13,
        "angleDeg": 0
      }
    ],
    "velocityMps": 820,
    "explosiveMassTntEqG": 900,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.2,
    "fuseDelayM": 0.1,
    "mechanics": "The high-explosive shell relies on blast and fragmentation rather than penetration, with its negligible 13-18 mm of armour piercing serving only against unarmoured panels. It is the go-to round for open-topped vehicles, anti-aircraft guns, trucks, and exposed crews, where the 900 g TNT-equivalent burst can disable or destroy in one shot. Carry only a small number; it is useless against properly armoured tanks.",
    "sources": [
      {
        "label": "Tiger H1 — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_h1_tiger",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK36 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK36_(88_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "normalizationDeg"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  }
];
