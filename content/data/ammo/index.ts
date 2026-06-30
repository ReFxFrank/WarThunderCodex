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
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The BR-471 is the baseline armour-piercing high-explosive round for the D-25T, carrying a sizeable explosive charge behind a sharp-nosed steel body. On a solid penetration its filler detonates inside the fighting compartment, frequently knocking out the whole crew in one hit. Its blunt-free nose loses penetration noticeably with range and bites poorly into heavily sloped plate, so it is best aimed at flatter sections of the target.",
    "sources": [
      {
        "label": "IS-3: Assault Wedge — War Thunder Wiki (penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_3",
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
    "id": "br-471b-d25t",
    "name": "BR-471B (APHEBC)",
    "type": "APHE",
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
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The BR-471B adds a ballistic cap to the APHE body, which streamlines the projectile and slows the drop-off in penetration at longer ranges compared with the uncapped BR-471. It retains the same generous explosive filler, so a clean penetration is still likely to be lethal to the entire crew. Because its penetration holds up better past 1000 m, it is a strong general-purpose pick for engagements where range varies.",
    "sources": [
      {
        "label": "IS-3: Assault Wedge — War Thunder Wiki (penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_3",
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
      "type-mapped-from-APHEBC"
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
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The OF-471 is a large high-explosive round whose heavy filler makes it effective against unarmoured and lightly armoured targets through blast and overpressure. Its fixed 37 mm of nominal penetration means it cannot reliably defeat armour by holing it, so it relies on shockwave damage and shrapnel rather than penetration. It is the round of choice against open-topped vehicles, anti-aircraft mounts, and exposed crews where direct penetration is unnecessary.",
    "sources": [
      {
        "label": "IS-3: Assault Wedge — War Thunder Wiki (penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_3",
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
  },
  {
    "id": "l15a3-l11a5",
    "name": "Shot L15A3 (APDS)",
    "type": "APDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 298,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 296,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 288,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 277,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 268,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 258,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The L15A3 is a high-velocity armour-piercing discarding sabot round and the Chieftain's primary anti-tank shell, available from stock. Its sub-calibre tungsten core retains penetration well across distance and pairs with an unusually favourable slope modifier, letting it bite into angled plate that defeats other APDS rounds at the same rating. As a solid kinetic penetrator it carries no explosive filler, so kills depend on the spall cone and on routing the core through crew or modules. Aim for ammunition stowage or the densest cluster of crew, since a single channel of fragments can otherwise leave a target fighting.",
    "sources": [
      {
        "label": "Chieftain Mk 3 — War Thunder Wiki (unit page, available ammunition / penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_chieftain_mk_3",
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
    "id": "l31a7-l11a5",
    "name": "Shell L31A7 (HESH)",
    "type": "HESH",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 152,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 152,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 152,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 152,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 152,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 152,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The L31A7 is a high-explosive squash head round whose soft filler splatters against the target before detonating, blowing a scab of metal off the inside of the plate to wound crew and break modules. Because the effect is chemical rather than kinetic, its rated penetration is essentially flat with range, so it stays useful at distances where APDS has dropped off. It is slow and lobbed, demanding lead and elevation against moving targets, and it is largely defeated by spaced armour or thin screens that absorb the squash before it can form a scab. Treat it as a versatile secondary against lightly armoured vehicles and as a fallback against thick plate that the APDS cannot crack cleanly.",
    "sources": [
      {
        "label": "Chieftain Mk 3 — War Thunder Wiki (unit page, available ammunition / penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_chieftain_mk_3",
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
    "id": "l34-l11a5",
    "name": "L34 (Smoke)",
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
        "rangeM": 500,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
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
    "mechanics": "The L34 is a base-ejecting smoke round, the only unlockable shell on the Chieftain's 120 mm gun, and is fired to throw a concealing cloud rather than to damage anything. On impact it deploys a wall of smoke at the point of aim, useful for screening an advance, breaking a sightline, or covering a withdrawal. Its nominal armour figure is negligible, so it should never be relied on to kill a vehicle even though a direct hit can occasionally rattle an open crew position. Carry only a few and use them tactically, since they consume rounds that could otherwise be APDS or HESH.",
    "sources": [
      {
        "label": "Chieftain Mk 3 — War Thunder Wiki (unit page, available ammunition / penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_chieftain_mk_3",
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
    "id": "dm12-rh120l44",
    "name": "DM12 (HEATFS)",
    "type": "HEATFS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 480,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "DM12 is the stock multi-purpose HEATFS round, relying on a shaped-charge jet rather than kinetic energy, so its 480 mm of penetration holds constant across all ranges. Because it is a chemical round, sloped armour, spaced plating, and especially ERA degrade it heavily, making it unreliable against modern MBTs. It remains useful against lightly armoured vehicles and as a stopgap until the kinetic darts are unlocked.",
    "sources": [
      {
        "label": "Leopard 2A4 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_2a4",
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
    "id": "dm13-rh120l44",
    "name": "DM13 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 393,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 390,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 384,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 376,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 367,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 359,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "DM13 is the first unlockable APFSDS dart, defeating armour through pure kinetic energy with only modest penetration loss over distance (393 mm at 10 m falling to 359 mm at 2000 m). Its flat trajectory and high velocity make ranging and target leading easy, but post-penetration damage from a slim fin-stabilised rod is limited and depends on hitting crew or ammunition. It is a serviceable interim round before DM23 becomes available.",
    "sources": [
      {
        "label": "Leopard 2A4 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_2a4",
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
    "id": "dm23-rh120l44",
    "name": "DM23 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 408,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 407,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 400,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 393,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 385,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 377,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "DM23 is the top tier-4 APFSDS dart for the L/44, offering the highest kinetic penetration of the trio (408 mm at 10 m to 377 mm at 2000 m). It shares the flat, fast trajectory of DM13 but pierces slightly thicker armour at every range, making it the round of choice against contemporary MBTs. Like all APFSDS it carries no explosive filler, so lethality still hinges on accurate shot placement into crew or ammo stowage.",
    "sources": [
      {
        "label": "Leopard 2A4 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_2a4",
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
    "id": "m774-m68a1",
    "name": "M774 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 372,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 371,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 366,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 359,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 352,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 345,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M774 is the top APFSDS dart for the 105 mm M68A1 and the standard armor-piercing answer for the early M1 Abrams. A depleted-uranium long-rod penetrator, it carries no explosive filler and relies on kinetic energy and spalling to kill, so aim for crew, ammo racks, and the breech to maximize internal damage. Its penetration falls only gently with range and it holds up well against sloped plate, giving it markedly better angled performance than the older M735.",
    "sources": [
      {
        "label": "M1 Abrams - War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m1_abrams",
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
    "id": "m735-m68a1",
    "name": "M735 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 292,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 291,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 284,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 275,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 266,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 257,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M735 is the earlier fin-stabilized discarding-sabot round for the M68A1, a tungsten-alloy long-rod dart that predates the M774. With no explosive filler it does its work through kinetic penetration and post-penetration fragmentation, so behind-armor effect depends on hitting crew and modules directly. Its flat trajectory and high velocity make it easy to land at range, but its lower penetration and weaker angled performance leave it outmatched by the M774 against well-protected frontal armor.",
    "sources": [
      {
        "label": "M1 Abrams - War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m1_abrams",
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
    "id": "m456a2-m68a1",
    "name": "M456A2 (HEATFS)",
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
    "mechanics": "The M456A2 is a fin-stabilized HEAT round whose shaped-charge jet delivers a constant 400 mm of penetration regardless of range or impact angle, making it the M1's flexible chemical-energy option. It excels against lightly armored vehicles, SPAA, and IFVs but is readily defeated by spaced armor, ERA, and composite arrays that disrupt the jet. Penetration kills come from the jet and behind-armor spall, so it pairs poorly with modern protected MBTs and is best reserved for soft or thin-skinned targets.",
    "sources": [
      {
        "label": "M1 Abrams - War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m1_abrams",
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
    "id": "m393a2-m68a1",
    "name": "M393A2 (HESH)",
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
    "mechanics": "The M393A2 is a high-explosive squash-head round that flattens against the target and detonates to blow a scab of spall off the inside of the plate, giving a flat 127 mm of penetration at any range. Its low velocity and looping trajectory make long-range hits awkward, and it is stopped by spaced or composite armor that defeats the spall mechanism. Used against thin hull and turret sides, the roof, or unprotected vehicles, it can deliver heavy fragmentation damage inside the crew compartment.",
    "sources": [
      {
        "label": "M1 Abrams - War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m1_abrams",
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
    "id": "m416-m68a1",
    "name": "M416 (Smoke)",
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
    "mechanics": "The M416 is a smoke shell used to screen movement, mask an advance, or break an enemy's line of sight rather than to deal damage; its listed 3 mm of penetration is incidental. On impact it deploys a smoke cloud that obscures the area, useful for covering a retreat, blinding a defended position, or concealing a flank. It has no anti-armor role and should be carried only in small numbers as a utility option.",
    "sources": [
      {
        "label": "M1 Abrams - War Thunder Wiki (unit page, penetration table)",
        "url": "https://wiki.warthunder.com/unit/us_m1_abrams",
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
    "id": "3bm4-u5ts",
    "name": "3BM4 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 284,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 280,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 264,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 244,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 223,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 203,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": 0,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The stock 3BM4 is a fin-stabilised discarding-sabot dart built around a solid steel penetrator. It leaves the smoothbore 115 mm barrel at very high velocity, giving a flat trajectory and short flight time that make long-range gunnery forgiving. As a kinetic round it carries no filler, relying entirely on the rod to punch through and shower the crew with spall, and it holds up well against sloped plate thanks to the slim sabot dart geometry.",
    "sources": [
      {
        "label": "T-62 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_62",
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
    "id": "3bm3-u5ts",
    "name": "3BM3 (APFSDS)",
    "type": "APFSDS",
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
        "penMm": 322,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 300,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 283,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 270,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": 0,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The unlockable 3BM3 is the T-62's premier kinetic round, pairing a steel body with an internal tungsten slug to lift penetration well above the stock dart. Its high muzzle velocity preserves a flat trajectory and excellent armour-piercing performance out to 2 km. With no explosive filler it does its damage through penetrator fragments and spall, so aiming for crew compartments and ammunition stowage is key to one-shot kills.",
    "sources": [
      {
        "label": "T-62 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_62",
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
    "id": "3bk4-u5ts",
    "name": "3BK4 (HEATFS)",
    "type": "HEATFS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 440,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The 3BK4 fin-stabilised HEAT round outpenetrates both APFSDS shells and holds that figure constant at any distance because its shaped-charge jet does not lose energy over range. It also carries an explosive filler, so a penetrating hit produces blast and fragmentation behind the armour rather than relying on kinetic spall alone. The trade-off is a much lower muzzle velocity than the darts, giving a loopier trajectory that demands careful range estimation at long distances.",
    "sources": [
      {
        "label": "T-62 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_62",
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
    "id": "3of11-u5ts",
    "name": "3OF11 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 31,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 31,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 31,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 31,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 31,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 31,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The 3OF11 is a fin-stabilised high-explosive fragmentation shell intended for soft targets such as unarmoured vehicles, anti-aircraft guns and exposed crews. Its negligible armour penetration makes it unreliable against tanks, where it depends on striking thin roof or rear plate to do meaningful damage. Against lightly protected targets the blast and fragment spray can disable or destroy in a single hit, but most players keep only a few rounds aboard.",
    "sources": [
      {
        "label": "T-62 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_62",
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
    "id": "3bm15-2a46",
    "name": "3BM15 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 430,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 420,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 410,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 405,
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
    "mechanics": "The 3BM15 is a finned sub-caliber dart with a tungsten-carbide slug, giving the T-72A its hardest-hitting round and the best penetration of its loadout. Like all APFSDS it loses very little penetration with distance, so it remains effective at long range, and its flat trajectory makes leading moving targets easy. It carries no explosive filler, relying entirely on kinetic energy and spalling, so aim for ammo racks, crew, and engine to disable enemies in one hit.",
    "sources": [
      {
        "label": "T-72A — War Thunder Wiki (penetration statistics)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_72a",
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
    "id": "3bm22-2a46",
    "name": "3BM22 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 425,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 420,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 415,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 405,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 393,
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
    "mechanics": "The 3BM22 is a tungsten-cored APFSDS dart that trades a little raw penetration at point-blank for a more capable warhead overall. As a kinetic round it keeps a flat trajectory and sheds penetration only slowly across the engagement envelope. With no explosive filler it kills through kinetic spall, so target internal modules and crew compartments to maximise post-penetration damage.",
    "sources": [
      {
        "label": "T-72A — War Thunder Wiki (penetration statistics)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_72a",
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
    "id": "3bk12m-2a46",
    "name": "3BK12M (HEATFS)",
    "type": "HEATFS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 440,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 440,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The 3BK12M is a fin-stabilised shaped-charge round whose penetration is constant at all ranges, making it a reliable sniping tool when kinetic darts are still being chosen for the autoloader. Its shaped-charge jet carries an explosive after-effect, so penetrations tend to do good internal damage, but the jet can be disrupted by spaced armour, tracks, or screens. The relatively slow muzzle velocity means significant shell drop and travel time, so lead distant or moving targets generously.",
    "sources": [
      {
        "label": "T-72A — War Thunder Wiki (penetration statistics)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_72a",
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
    "id": "3of26-2a46",
    "name": "3OF26 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 42,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 42,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 42,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 42,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 42,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 42,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The 3OF26 is a high-explosive shell carrying a large filler that relies on blast and overpressure rather than penetration. It excels against open-topped vehicles, anti-aircraft mounts, and lightly armoured targets, where a near hit can knock out the whole crew through overpressure. Against well-armoured MBTs it is largely ineffective frontally and is best reserved for soft targets or finishing damaged enemies.",
    "sources": [
      {
        "label": "T-72A — War Thunder Wiki (penetration statistics)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_72a",
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
    "id": "pzgr3943-kwk43",
    "name": "PzGr 39/43 (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 237,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 234,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 222,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 207,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 193,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 180,
        "angleDeg": 0
      }
    ],
    "velocityMps": 1000,
    "explosiveMassTntEqG": 108.8,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "The default round of the KwK43, this armour-piercing capped ballistic cap shell carries a small bursting charge that detonates after a short fuse delay once it has punched through plate, spraying fragments into the crew compartment. Its blunt penetrating cap helps it bite into sloped armour and resist ricochet better than a bare AP slug, and the high muzzle velocity gives it a flat trajectory and strong penetration retention out past 2 km. It is the workhorse choice for engaging almost any opponent the Tiger II faces, reliably knocking out targets with post-penetration explosive damage. The 14 mm fuse sensitivity means it arms readily against most armour but can over-penetrate very thin structures without fusing.",
    "sources": [
      {
        "label": "Tiger II — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_b_tiger_IIh",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK43 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK43_(88_mm)/Ammunition",
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
    "id": "pzgr4043-kwk43",
    "name": "PzGr 40/43 (APCR)",
    "type": "APCR",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 279,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 273,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 252,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 227,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 205,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 185,
        "angleDeg": 0
      }
    ],
    "velocityMps": 1130,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "This armour-piercing composite rigid round uses a dense tungsten core inside a lightweight carrier, giving it the highest muzzle velocity and best close-range penetration of the gun's belt. Being a solid kinetic penetrator it carries no explosive filler, so post-penetration damage relies on the core and any spalling rather than a bursting charge. Its light projectile bleeds velocity faster than the APCBC, so the penetration advantage shrinks with distance and is eventually overtaken at long range. It is best saved for heavily armoured frontal targets at short to medium range where its extra punch matters most, and it ricochets less readily off sloped plate than the APCBC.",
    "sources": [
      {
        "label": "Tiger II — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_b_tiger_IIh",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK43 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK43_(88_mm)/Ammunition",
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
    "id": "hlgr39-kwk43",
    "name": "Hl.Gr 39 (HEAT)",
    "type": "HEAT",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
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
    "mechanics": "A shaped-charge high-explosive anti-tank round whose penetration comes from a focused metal jet rather than kinetic energy, so its 110 mm of pen is constant at every range. The low muzzle velocity and high drag give it a looping trajectory that demands range estimation at distance, making it awkward compared with the gun's kinetic rounds. Its very sensitive fuse arms against the thinnest contact, and the large explosive filler delivers substantial behind-armour blast and fragmentation when the jet breaks through. It is mainly a niche pick for lightly armoured or angled targets that the APCBC might bounce off, since its modest penetration is outclassed by the standard rounds against thick plate.",
    "sources": [
      {
        "label": "Tiger II — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_b_tiger_IIh",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK43 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK43_(88_mm)/Ammunition",
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
    "id": "sprgr43-kwk43",
    "name": "Sprgr.43 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 19,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 19,
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
        "penMm": 14,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 14,
        "angleDeg": 0
      }
    ],
    "velocityMps": 820,
    "explosiveMassTntEqG": 1000,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.2,
    "mechanics": "A thin-walled high-explosive shell that relies on blast and fragmentation rather than penetration, with only token armour-piercing ability. It is intended for soft targets such as open-topped vehicles, anti-aircraft guns, trucks, and exposed crew, where the large explosive charge can disable or destroy without needing to punch through armour. The very sensitive fuse detonates on the lightest contact, so it bursts on the surface of most plate instead of penetrating. Against properly armoured tanks it is largely ineffective and should be reserved for situations where the kinetic rounds would be wasted.",
    "sources": [
      {
        "label": "Tiger II — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_b_tiger_IIh",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "KwK43 (88 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/KwK43_(88_mm)/Ammunition",
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
    "id": "occ-105-f1-cn105f1",
    "name": "OCC 105 F1 (HEAT)",
    "type": "HEAT",
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
    "velocityMps": 1000,
    "explosiveMassTntEqG": 1020,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.05,
    "mechanics": "The OCC 105 F1 is the AMX-30's primary anti-tank round, a shaped-charge HEAT projectile whose 400 mm of penetration is effectively constant at every range, making it equally lethal point-blank or across the longest sightlines. Because it relies on a chemical jet rather than kinetic energy, sloped armour and spaced or composite plating degrade its effectiveness far more than they would a kinetic dart, and its low fuse sensitivity means thin screens can still trigger detonation prematurely. Its sizable explosive filler delivers strong post-penetration spalling, so a clean hit on the hull or turret face is often a one-shot kill. The trade-off is the modest shell velocity, which forces noticeable lead and drop compensation against moving targets at distance.",
    "sources": [
      {
        "label": "AMX-30 — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_amx_30",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "CN-105-F1 (105 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/CN-105-F1_(105_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "oe-105-f1-mle60-cn105f1",
    "name": "OE 105 F1 Mle.60 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 25,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 25,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 25,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 25,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 25,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 25,
        "angleDeg": 0
      }
    ],
    "velocityMps": 700,
    "explosiveMassTntEqG": 2000,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0,
    "mechanics": "The OE 105 F1 Mle.60 is a high-explosive shell carrying a large filler, intended for soft targets, open-topped vehicles, and exposed crews rather than armoured engagements. With only 25 mm of nominal penetration it cannot defeat tank armour directly, but its substantial blast can disable lightly protected vehicles, anti-aircraft mounts, and gun emplacements in a single hit. The instant fuse with no delay detonates on contact, maximising surface blast and shrapnel against unprotected targets. Its low velocity makes it a poor choice against anything fast or distant.",
    "sources": [
      {
        "label": "AMX-30 — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_amx_30",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "CN-105-F1 (105 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/CN-105-F1_(105_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ofph-105-f1-cn105f1",
    "name": "OFPH 105 F1 (Smoke)",
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
    "velocityMps": 700,
    "explosiveMassTntEqG": 50,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The OFPH 105 F1 is a smoke round used to screen movement, break enemy lines of sight, or mask a retreat rather than to deal damage. On impact it generates a smoke cloud roughly 20 m in radius that deploys over about 5 seconds and lingers for around 25 seconds, long enough to cover a repositioning or a crossing. Its 3 mm of listed penetration is incidental and it has no meaningful anti-armour value. The low muzzle velocity requires the same elevation compensation as the HE shell when placing screens at range.",
    "sources": [
      {
        "label": "AMX-30 — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_amx_30",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "CN-105-F1 (105 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/CN-105-F1_(105_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fuseSensitivityMm",
      "fuseDelayM"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "br-471d-d25t",
    "name": "BR-471D (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 230,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 227,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 215,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 200,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 186,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 173,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The BR-471D is the highest-penetration solid shot for the D-25T, fitted with both an armour-piercing cap and a ballistic cap that improve bite against sloped plate and preserve velocity downrange. It carries a smaller explosive charge than the earlier BR-471 rounds but still delivers strong post-penetration effect, and its superior penetration makes it the preferred shell against better-armoured opponents. Its protected nose and capped design give it the best behaviour against angled armour of the IS-3's ammunition.",
    "sources": [
      {
        "label": "IS-3: Assault Wedge — War Thunder Wiki (penetration table)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_3",
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
    "id": "pzgr39-kwk40-l43",
    "name": "PzGr 39 (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 137,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 135,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 123,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 98,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 87,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The PzGr 39 is the workhorse round of the 75 mm KwK40 L/43, an armour-piercing capped projectile with a ballistic cap and a small explosive filler that detonates after the shot punches through plate. The cap improves penetration against sloped armour and reduces the chance of shatter or ricochet, making this the most reliable choice against the medium armour seen at its battle rating. Aim for crew compartments and ammo stowage so the post-penetration burst disables multiple crew at once. Penetration falls off steadily with range but stays effective enough to threaten most contemporaries out to 1000 m and beyond.",
    "sources": [
      {
        "label": "Pz.IV G — War Thunder Wiki (Available ammunition)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_IV_ausf_G",
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
    "id": "pzgr40-kwk40-l43",
    "name": "PzGr 40 (APCR)",
    "type": "APCR",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 163,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 159,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 143,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 126,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 110,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 96,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The PzGr 40 is an armour-piercing composite rigid round built around a dense tungsten-carbide core inside a lightweight carrier, giving it the highest raw penetration the gun can offer at close range. It carries no explosive filler, so post-penetration damage relies entirely on the core fragmenting and the spall it generates inside the target. Because the light projectile sheds velocity quickly, its penetration advantage over the PzGr 39 shrinks with distance and the two are nearly equal by 1500 m, so reserve it for heavily armoured threats at short to medium range. Its poor performance against sloped plate also means it favours flat, perpendicular hits.",
    "sources": [
      {
        "label": "Pz.IV G — War Thunder Wiki (Available ammunition)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_IV_ausf_G",
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
    "id": "hlgr38b-kwk40-l43",
    "name": "Hl.Gr 38B (HEAT)",
    "type": "HEAT",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 80,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 80,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 80,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 80,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 80,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 80,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Hl.Gr 38B is a shaped-charge round whose penetration comes from a focused jet of metal rather than kinetic energy, so its penetration is constant at all ranges. That flat 80 mm figure is lower than either kinetic round, making it largely redundant on this gun, but the chemical-energy mechanic means it ignores velocity loss and can be useful as a backup against lightly armoured targets at long distance. Its low muzzle velocity demands extra lead and drop compensation at range. In practice most crews skip it in favour of the PzGr 39 and PzGr 40.",
    "sources": [
      {
        "label": "Pz.IV G — War Thunder Wiki (Available ammunition)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_IV_ausf_G",
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
    "id": "sprgr34-kwk40-l43",
    "name": "Sprgr. 34 (HE)",
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
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Sprgr. 34 is a high-explosive shell intended for soft targets rather than armour, with a token 10 mm of blast penetration. It is the round of choice against open-topped vehicles, anti-tank gun crews, exposed infantry, and trucks, where the explosive splash can knock out crew or destroy components outright. Against any properly armoured tank it will fail to penetrate, so its role is purely anti-soft-target. The large filler also makes it useful for finishing off already-damaged enemies through thin top or rear plating.",
    "sources": [
      {
        "label": "Pz.IV G — War Thunder Wiki (Available ammunition)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_IV_ausf_G",
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
    "id": "kgr-rot-nb-kwk40-l43",
    "name": "K.Gr.Rot Nb. (Smoke)",
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
    "mechanics": "The K.Gr.Rot Nb. is a smoke shell that bursts into a screening cloud where it lands, used to obscure lines of sight rather than to damage targets. It has effectively no anti-armour capability, listed at just 3 mm of penetration. Crews fire it to cover an advance across open ground, mask a retreat, or blind an enemy gun line before repositioning. It is a situational utility round that occupies a magazine slot most players leave empty.",
    "sources": [
      {
        "label": "Pz.IV G — War Thunder Wiki (Available ammunition)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_IV_ausf_G",
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
    "id": "shot-mk6-qf17pdr",
    "name": "Shot Mk.6 (AP)",
    "type": "AP",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 171,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 168,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 155,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 139,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 126,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 113,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Shot Mk.6 is the Firefly's stock solid armour-piercing round, a full-bore uncapped steel shot fired by the 17-pounder. Carrying no explosive filler, it relies purely on kinetic energy and the resulting spall to disable crew and modules, so its lethality after penetration depends on hitting something vital. With no penetrating cap it loses effectiveness against heavily sloped plates, where the nose tends to bite poorly compared to the capped rounds.",
    "sources": [
      {
        "label": "Sherman Firefly — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/uk_sherman_vc_firefly",
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
    "id": "shot-mk4-qf17pdr",
    "name": "Shot Mk.4 (APC)",
    "type": "APC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 171,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 168,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 155,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 139,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 126,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 113,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Shot Mk.4 is an armour-piercing capped solid shot: a hardened penetrator fitted with a softer steel cap over the nose. That cap helps the round bite into face-hardened and angled armour and resist shatter, so it tends to hold up better than the uncapped Mk.6 against sloped plates despite matching its flat-on penetration. Like the other 17-pounder solid shots it has no bursting charge and kills through kinetic spalling alone.",
    "sources": [
      {
        "label": "Sherman Firefly — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/uk_sherman_vc_firefly",
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
    "id": "shot-mk8-qf17pdr",
    "name": "Shot Mk.8 (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 190,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 187,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 172,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 155,
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
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Shot Mk.8 is the Firefly's best anti-armour round, an armour-piercing capped, ballistic-capped solid shot. The penetrating cap improves performance against sloped and hardened plate while the pointed ballistic windscreen reduces drag, giving it both the highest penetration and the flattest trajectory of the gun's shells. It is still a filler-less kinetic round, so post-penetration damage comes from fragmentation of the plate and shot rather than an internal burst.",
    "sources": [
      {
        "label": "Sherman Firefly — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/uk_sherman_vc_firefly",
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
    "id": "shell-mk1-qf17pdr",
    "name": "Shell Mk.1 (HE)",
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
        "penMm": 13,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Shell Mk.1 is a high-explosive round meant for soft and lightly armoured targets such as open-topped vehicles, anti-tank guns, and exposed crew. It detonates on impact, relying on blast and fragmentation rather than the negligible kinetic penetration of its thin-walled body. Against any real tank armour it is largely ineffective and is carried mainly as a supplementary anti-soft-target option.",
    "sources": [
      {
        "label": "Sherman Firefly — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/uk_sherman_vc_firefly",
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
    "id": "shell-ss-mk1-qf17pdr",
    "name": "17pdr Shell SS Mk.1 (Smoke)",
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
    "mechanics": "The 17pdr Shell SS Mk.1 is a base-ejection smoke round that produces a screening cloud where it lands, used to block enemy lines of sight or cover a withdrawal. It carries no anti-armour capability beyond its trivial impact penetration, so it is purely a utility shell. Players use it to screen advances across open ground or to obscure a flanking move.",
    "sources": [
      {
        "label": "Sherman Firefly — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/uk_sherman_vc_firefly",
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
    "id": "br-350a-f34",
    "name": "BR-350A (APHEBC)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 87,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 85,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 77,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 69,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 62,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 55,
        "angleDeg": 0
      }
    ],
    "velocityMps": 662,
    "explosiveMassTntEqG": 150,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "BR-350A is an armour-piercing high-explosive round with a soft ballistic cap (APHEBC) carrying the MD-5 fuze. Its large 150 g TNT-equivalent filler makes it the strongest post-penetration round on the F-34, devastating roomy crew compartments once it breaks through. The trade-off is the lowest armour penetration of the AP family, so it struggles against thicker frontal plates at range. The blunt ballistic cap improves bite on sloped armour but the long 1.2 m fuse delay can let the shell over-penetrate thin or empty sections before detonating.",
    "sources": [
      {
        "label": "T-34 (1941) — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "F-34 (76 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/F-34_(76_mm)/Ammunition",
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
    "id": "br-350b-f34",
    "name": "BR-350B (APHEBC)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 96,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 94,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 84,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 74,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 64,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 56,
        "angleDeg": 0
      }
    ],
    "velocityMps": 655,
    "explosiveMassTntEqG": 100.1,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 0.9,
    "mechanics": "BR-350B is the up-armoured-cap APHEBC variant with the MD-8 fuze, trading some of the BR-350A's filler for noticeably higher penetration. With roughly 100 g of TNT-equivalent explosive it still produces strong internal spalling and shrapnel after a clean penetration. The shorter 0.9 m fuse delay encourages detonation inside the target rather than over-penetration, which makes it the best all-round choice for this gun against most early-war and mid-war armour. The ballistic cap aids penetration against angled plates.",
    "sources": [
      {
        "label": "T-34 (1941) — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "F-34 (76 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/F-34_(76_mm)/Ammunition",
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
    "id": "br-350sp-f34",
    "name": "BR-350SP (APBC)",
    "type": "APC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 99,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 96,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 87,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 76,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 66,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 58,
        "angleDeg": 0
      }
    ],
    "velocityMps": 655,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "BR-350SP is a solid armour-piercing ballistic-capped shot (APBC) with no explosive filler, giving it the highest raw penetration of the F-34's standard rounds. Lacking a bursting charge, it relies entirely on the kinetic energy and spalling of the steel slug to disable crew and modules, so it is less reliable than the APHE rounds against lightly manned tanks. The blunt ballistic cap helps it hold penetration against sloped plates where pointed shot would ricochet. It is the preferred shell for cracking the toughest frontal armour this gun can face.",
    "sources": [
      {
        "label": "T-34 (1941) — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "F-34 (76 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/F-34_(76_mm)/Ammunition",
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
    "id": "of-350m-f34",
    "name": "OF-350M (HE)",
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
    "velocityMps": 680,
    "explosiveMassTntEqG": 621,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.05,
    "mechanics": "OF-350M is a high-explosive fragmentation shell built to attack soft and lightly armoured targets rather than tanks. Its large explosive charge detonates on contact thanks to the highly sensitive 0.1 mm fuze, spraying fragments and overpressure that can knock out open-topped vehicles, anti-aircraft mounts, and exposed crew. Against armoured tanks its tiny direct penetration is almost irrelevant, but a hit on a thin roof, hatch, or grille can still cause an overpressure kill. It is the round of choice for clearing gun emplacements and unarmoured threats.",
    "sources": [
      {
        "label": "T-34 (1941) — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "F-34 (76 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/F-34_(76_mm)/Ammunition",
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
    "id": "sh-354t-f34",
    "name": "Sh-354T (shrapnel)",
    "type": "shrapnel",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 35,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 34,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 30,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 26,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 22,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 19,
        "angleDeg": 0
      }
    ],
    "velocityMps": 618,
    "explosiveMassTntEqG": 85,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "Sh-354T is a shrapnel round, a hybrid that behaves like a weak armour-piercing high-explosive shell. It penetrates modest amounts of armour and then bursts a small explosive charge, scattering fragments inside lightly protected targets. With far less penetration and filler than the BR-350 series it is rarely the optimal anti-tank choice, but it can still threaten thin-skinned and open-topped vehicles. It functions much like a low-power APHE thanks to its 14 mm fuze sensitivity and 1.2 m delay.",
    "sources": [
      {
        "label": "T-34 (1941) — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "F-34 (76 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/F-34_(76_mm)/Ammunition",
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
    "id": "d-350a-f34",
    "name": "D-350A (smoke)",
    "type": "other",
    "penetration": [],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "D-350A is a smoke shell used to obscure sightlines rather than deal damage. On impact it deploys a smoke cloud that blocks vision, useful for covering an advance, breaking an enemy's aim, or screening a retreat. It has no meaningful armour penetration or anti-tank capability. The wiki unit table lists no penetration, velocity, or fuze figures for this utility round, so those fields are left unverified.",
    "sources": [
      {
        "label": "T-34 (1941) — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "penetration",
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
    "id": "jm33-type90",
    "name": "JM33 (APFSDS)",
    "type": "APFSDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 481,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 472,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 462,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 451,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 441,
        "angleDeg": 0
      }
    ],
    "velocityMps": 1640,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The JM33 is the Type 90's primary anti-tank round, a licensed Japanese production of the German DM33 long-rod APFSDS dart. It leaves the 120 mm L/44 smoothbore at a very high muzzle velocity, giving a flat trajectory and short flight time that make it forgiving to aim at range. As a kinetic dart it carries no explosive filler, relying on solid-shot post-penetration spalling, so multiple hits on crew and modules are usually needed to disable a target. Its high ricochet thresholds let it bite into steeply sloped plates that would deflect lower-velocity rounds.",
    "sources": [
      {
        "label": "Type 90 — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/jp_type_90",
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
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "jm12a1-type90",
    "name": "JM12A1 (HEATFS)",
    "type": "HEATFS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 480,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 480,
        "angleDeg": 0
      }
    ],
    "velocityMps": 1140,
    "explosiveMassTntEqG": 2150,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.05,
    "mechanics": "The JM12A1 is the Type 90's chemical-energy round, a fin-stabilized shaped charge whose penetration stays constant at all ranges because it depends on the jet formed on impact rather than velocity. It is the go-to option against highly sloped armor and for finishing lightly protected targets, since its explosive filler delivers meaningful post-penetration blast and fragmentation. Being a HEAT round, it is sensitive to spaced plates, tracks, and other standoff that can disrupt the jet before it reaches the main armor. Its lower muzzle velocity gives a more pronounced drop, so range estimation matters more than with the JM33 dart.",
    "sources": [
      {
        "label": "Type 90 — War Thunder Wiki (unit page, ammunition table)",
        "url": "https://wiki.warthunder.com/unit/jp_type_90",
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
    "id": "shot-l28a1-l7a1",
    "name": "Shot L28A1 (APDS)",
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
    "velocityMps": 1478,
    "explosiveMassTntEqG": 0,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The L28A1 is the Centurion Mk 10's flat-shooting kinetic round, launching a sub-caliber tungsten penetrator from a discarding sabot at 1,478 m/s for a very flat trajectory and short lead times at range. With no explosive filler it relies on the penetrator and resulting spall to disable crew and modules, so aim for ammo racks, the breech, or crew clusters to convert a clean penetration into a kill. Its 350 mm of flat penetration up close stays strong out past 2,000 m, but as a solid-shot APDS it normalizes poorly and loses a large fraction of its punch against sharply sloped plates, so favor flatter aspects of enemy armor.",
    "sources": [
      {
        "label": "Centurion Mk 10 - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/uk_centurion_mk_10",
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
    "id": "shell-l35-l7a1",
    "name": "Shell L35 (HESH)",
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
    "velocityMps": 720,
    "explosiveMassTntEqG": 3200,
    "normalizationDeg": null,
    "fuseSensitivityMm": 4,
    "fuseDelayM": 0.1,
    "mechanics": "The L35 is a high-explosive squash head round that flattens its 2 kg RDX charge (3.2 kg TNT equivalent) against the target before detonating, blasting a scab of metal off the inside face to spray the crew compartment with spall. Its penetration is roughly constant at 127 mm regardless of range because the squash-head effect does not depend on impact velocity, making it a flexible general-purpose round against lighter armor and exposed crew. It is highly sensitive to spaced armor, slat screens, and tracks that trigger or disrupt the charge early, and it performs poorly against very thick or angled plate. With a slow 720 m/s muzzle velocity it has a looping trajectory that demands careful lead at distance.",
    "sources": [
      {
        "label": "Centurion Mk 10 - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/uk_centurion_mk_10",
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
    "id": "type-1-aphe-75-type-3",
    "name": "Type 1 APHE (APHE)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 102,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 100,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 91,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 81,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 72,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 64,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Type 1 APHE is the Chi-Nu's only armor-piercing round, a capped solid shot carrying an explosive charge with a delayed fuse. On penetrating armor it bursts behind the plate, spraying fragments that can knock out multiple crew or modules in one hit, making well-placed shots devastating against lightly armored opponents. Its penetration falls off steadily with range but remains workable past 1 km, and its relatively high muzzle velocity helps it land hits at distance compared with contemporary low-velocity 75 mm guns.",
    "sources": [
      {
        "label": "Chi-Nu — War Thunder Wiki (75 mm Type 3 ammunition / penetration table)",
        "url": "https://wiki.warthunder.com/unit/jp_type_3_chi_nu",
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
    "id": "type-94-he-75-type-3",
    "name": "Type 94 HE (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 12,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 12,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 12,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 12,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 12,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 12,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Type 94 HE is a high-explosive shell with a large filler relative to the gun's caliber, detonating on contact with a thin instantaneous fuse. Its minimal armor penetration means it is used against open-topped vehicles, exposed crew, and unarmored targets, or to finish a wounded enemy via blast and fragmentation. Against any meaningfully armored hull it will splash on the surface rather than punch through, so it complements rather than replaces the APHE round.",
    "sources": [
      {
        "label": "Chi-Nu — War Thunder Wiki (75 mm Type 3 ammunition / penetration table)",
        "url": "https://wiki.warthunder.com/unit/jp_type_3_chi_nu",
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
    "id": "type-90-smoke-75-type-3",
    "name": "Type 90 Smoke (Smoke)",
    "type": "other",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 4,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 4,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 4,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 4,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 4,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 4,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The Type 90 Smoke shell is a utility round that bursts on impact to deploy a smoke screen at the point of aim, used to blind enemy gunners, cover an advance, or screen a retreat. It has essentially no anti-armor capability and is not intended to deal damage. Carrying a few rounds is valuable because most low-rank vehicles lack dedicated smoke launchers, giving the Chi-Nu a way to break line of sight on demand.",
    "sources": [
      {
        "label": "Chi-Nu — War Thunder Wiki (75 mm Type 3 ammunition / penetration table)",
        "url": "https://wiki.warthunder.com/unit/jp_type_3_chi_nu",
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
    "id": "shot-mk6-oqf77",
    "name": "Shot Mk.6 (AP)",
    "type": "AP",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 145,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 142,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 131,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 118,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 106,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 96,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "Shot Mk.6 is the basic uncapped solid armour-piercing round for the 77 mm OQF. With no explosive filler it relies entirely on kinetic energy and the spalling thrown off when the slug breaks up inside the hull, so it works best when aimed at crew, the breech, or ammunition stowage. As a bare AP shot it normalises poorly against sloped plate and tends to shatter or ricochet on glancing hits, making it the weakest of the gun's kinetic options.",
    "sources": [
      {
        "label": "Comet I — War Thunder Wiki (unit page, ammunition penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_a_34_comet",
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
    "id": "shell-mk1-oqf77",
    "name": "Shell Mk.1 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 9,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 9,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 9,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 9,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 9,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 9,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "Shell Mk.1 is the high-explosive round, intended for soft targets such as anti-tank guns, trucks, and exposed crew rather than armoured vehicles. Its penetration is negligible (a flat 9 mm at all ranges), so it defeats armour only through blast against thin roofs, decks, or open-topped fighting compartments. Detonation is on contact, scattering fragments that are effective against unarmoured infantry and equipment.",
    "sources": [
      {
        "label": "Comet I — War Thunder Wiki (unit page, ammunition penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_a_34_comet",
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
    "id": "shot-mk4-oqf77",
    "name": "Shot Mk.4 (APC)",
    "type": "APC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 145,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 142,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 131,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 118,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 106,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 96,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "Shot Mk.4 adds a hardened armour-piercing cap over the nose of the solid slug, which protects the projectile tip and improves bite against face-hardened plate compared with the bare Shot Mk.6. Penetration figures are essentially identical to the Mk.6, but the cap gives slightly more consistent behaviour on angled impacts. Like the other solid shot it carries no filler, so kills come from kinetic damage and spalling once it punches through.",
    "sources": [
      {
        "label": "Comet I — War Thunder Wiki (unit page, ammunition penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_a_34_comet",
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
    "id": "shot-mk8-oqf77",
    "name": "Shot Mk.8 (APCBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 161,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 158,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 145,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 131,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 118,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 106,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "Shot Mk.8 combines an armour-piercing cap with an aerodynamic ballistic cap, the best-rounded conventional kinetic round for the 77 mm OQF. The ballistic cap reduces velocity loss over distance while the AP cap aids penetration of sloped and hardened armour, giving it the highest penetration of the gun's solid shot (161 mm at point blank, still 106 mm at 2 km). It remains a solid shot with no explosive filler, so post-penetration effect comes from kinetic damage and fragmentation; it is the recommended general-purpose AP round for most engagements.",
    "sources": [
      {
        "label": "Comet I — War Thunder Wiki (unit page, ammunition penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_a_34_comet",
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
    "id": "shot-sv-mk1-oqf77",
    "name": "Shot SV Mk.1 (APDS)",
    "type": "APDS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 217,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 213,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 199,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 182,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 167,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 153,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "Shot SV Mk.1 is the armour-piercing discarding-sabot round and the Comet's standout shell, firing a sub-calibre tungsten-cored dart that sheds its sabot at the muzzle for very high velocity and the gun's best penetration (217 mm at point blank, 153 mm at 2 km). The flat trajectory and high velocity make long-range hits and snap shots far easier than with the solid shot. The trade-off is the small, fast dart deals less post-penetration damage than a full-calibre slug and normalises poorly, so hits on heavily angled plate can be unreliable; aim at flat surfaces and internal components for best effect.",
    "sources": [
      {
        "label": "Comet I — War Thunder Wiki (unit page, ammunition penetration table)",
        "url": "https://wiki.warthunder.com/unit/uk_a_34_comet",
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
    "id": "m72-shot-oqf-mk-v",
    "name": "M72 shot (AP)",
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
    "velocityMps": 619,
    "explosiveMassTntEqG": 0,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M72 is an uncapped solid armour-piercing shot with no explosive filler, so all of its damage comes from the kinetic energy and spalling of the slug after it punches through. With just under 90 mm of penetration up close, it copes with most contemporary light and medium tanks but bleeds penetration quickly with range. Lacking a ballistic cap, it loses effectiveness sharply against sloped plates, and the absence of filler means post-penetration damage relies entirely on hitting crew or modules directly.",
    "sources": [
      {
        "label": "Cromwell V — War Thunder Wiki (unit page, M72 shot)",
        "url": "https://wiki.warthunder.com/unit/uk_a27m_cromwell_5",
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
    "id": "m61-shot-oqf-mk-v",
    "name": "M61 shot (APCBC)",
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
    "velocityMps": 618,
    "explosiveMassTntEqG": 64,
    "normalizationDeg": null,
    "fuseSensitivityMm": 14,
    "fuseDelayM": 1.2,
    "mechanics": "The M61 is an armour-piercing capped, ballistic-capped round carrying a small Explosive D charge (about 64 g TNT-equivalent) behind an internal fuse. The penetrating cap improves bite against face-hardened and sloped armour, giving it noticeably better numbers than the M72 across all ranges and the best penetration available to this gun. After passing through plate the fuse detonates the filler, adding fragmentation that improves the chance of knocking out crew compared to the solid shot, though the charge is modest. With 14 mm fuse sensitivity it arms reliably against medium-armoured targets.",
    "sources": [
      {
        "label": "Cromwell V — War Thunder Wiki (unit page, M61 shot)",
        "url": "https://wiki.warthunder.com/unit/uk_a27m_cromwell_5",
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
    "id": "m48-shell-oqf-mk-v",
    "name": "M48 shell (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 7,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 7,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 7,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 6,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 5,
        "angleDeg": 0
      }
    ],
    "velocityMps": 463,
    "explosiveMassTntEqG": 666,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.2,
    "mechanics": "The M48 is a high-explosive fragmentation shell whose 666 g of TNT detonate on impact with a very sensitive fuse that arms against the thinnest of surfaces. Its negligible kinetic penetration means it cannot defeat tank armour, but the blast and fragmentation make it effective against open-topped vehicles, anti-aircraft mounts, light SPGs and exposed crews. It is the gun's go-to round for soft targets where the solid shots would simply pass through without effect.",
    "sources": [
      {
        "label": "Cromwell V — War Thunder Wiki (unit page, M48 shell)",
        "url": "https://wiki.warthunder.com/unit/uk_a27m_cromwell_5",
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
    "id": "m89-smoke-oqf-mk-v",
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
    "velocityMps": 259,
    "explosiveMassTntEqG": 0,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.5,
    "fuseDelayM": 0.4,
    "mechanics": "The M89 is a smoke shell that bursts on impact to throw up a screening cloud rather than to deal damage; its 50 g charge is smoke composition, not a high explosive, so it does essentially no harm to armour or crew. It is used to blind enemy gunners, cover an advance or a retreat, or mask a capture point. Its low muzzle velocity and steep trajectory mean it must be lobbed, so ranging the screen takes practice.",
    "sources": [
      {
        "label": "Cromwell V — War Thunder Wiki (unit page, M89 smoke shell)",
        "url": "https://wiki.warthunder.com/unit/uk_a27m_cromwell_5",
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
    "id": "br-540-ml20s",
    "name": "BR-540 (APHE)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 170,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 169,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 161,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 152,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 144,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 136,
        "angleDeg": 0
      }
    ],
    "velocityMps": 600,
    "explosiveMassTntEqG": 739,
    "normalizationDeg": null,
    "fuseSensitivityMm": 19,
    "fuseDelayM": 1.2,
    "mechanics": "The standard armor-piercing high-explosive round of the ML-20S, BR-540 pairs a heavy 48.8 kg projectile with a sizeable A-IX-2 charge worth roughly 739 g of TNT, so a successful penetration sprays lethal fragments through the target's interior and frequently one-shots medium and heavy tanks. Its 600 m/s muzzle velocity gives a looping trajectory that demands lead and range estimation at distance, but penetration holds up well, dropping only from 170 mm at point blank to 136 mm at 2 km. The 19 mm fuze sensitivity means very thin plating may not always arm the fuze, while the 1.2 m delay lets the shell bury itself before bursting. Against heavily sloped or angled armor its modest performance falls off quickly, rewarding shots at flat surfaces.",
    "sources": [
      {
        "label": "War Thunder Wiki — ISU-152 (BR-540, 152 mm ML-20S)",
        "url": "https://wiki.warthunder.com/unit/ussr_isu_152",
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
    "id": "of-540-ml20s",
    "name": "OF-540 (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 23,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 23,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 22,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 20,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 19,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 18,
        "angleDeg": 0
      }
    ],
    "velocityMps": 655,
    "explosiveMassTntEqG": 5900,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.3,
    "mechanics": "OF-540 is a massive 43.6 kg high-explosive fragmentation shell carrying 5.9 kg of TNT, making it one of the most destructive HE rounds at its rank and capable of knocking out lightly armored vehicles, open-top tank destroyers, and SPAA through sheer blast even on a near miss. Its kinetic armor penetration is negligible (about 23 mm at close range), so it relies entirely on overpressure and fragmentation rather than punching through plate. The sensitive 0.1 mm fuze detonates on contact with almost any surface, so it is ideal for splash damage but can be wasted against well-buttoned heavy armor. Use it to clear soft targets, finish damaged enemies, or destroy structures and gun emplacements.",
    "sources": [
      {
        "label": "War Thunder Wiki — ISU-152 (OF-540, 152 mm ML-20S)",
        "url": "https://wiki.warthunder.com/unit/ussr_isu_152",
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
    "id": "br-540b-ml20s",
    "name": "BR-540B (APHEBC)",
    "type": "APHE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 171,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 169,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 160,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 150,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 141,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 133,
        "angleDeg": 0
      }
    ],
    "velocityMps": 600,
    "explosiveMassTntEqG": 739,
    "normalizationDeg": null,
    "fuseSensitivityMm": 19,
    "fuseDelayM": 1.2,
    "mechanics": "BR-540B is the ballistic-capped variant of the ML-20S armor-piercing round, adding a soft cap that improves performance against sloped armor while retaining the same heavy A-IX-2 filler of roughly 739 g TNT equivalent for devastating post-penetration effect. Flat-on penetration is marginally higher than BR-540 at close range (171 mm) but it sheds slightly faster with distance, settling at 133 mm at 2 km. The ballistic cap noticeably helps the round bite into angled plate, so it tends to be the more reliable pick against tanks presenting their armor at a slope. Like the uncapped shell it carries a 19 mm fuze sensitivity and 1.2 m delay, so it needs adequate plate thickness to arm and burst inside the target.",
    "sources": [
      {
        "label": "War Thunder Wiki — ISU-152 (BR-540B, 152 mm ML-20S)",
        "url": "https://wiki.warthunder.com/unit/ussr_isu_152",
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
    "id": "bp-540-ml20s",
    "name": "BP-540 (HEAT)",
    "type": "HEAT",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 250,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 250,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 250,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 250,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 250,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 250,
        "angleDeg": 0
      }
    ],
    "velocityMps": 680,
    "explosiveMassTntEqG": 4800,
    "normalizationDeg": null,
    "fuseSensitivityMm": 0.1,
    "fuseDelayM": 0.05,
    "mechanics": "BP-540 is a shaped-charge HEAT round that penetrates a constant 250 mm regardless of range, giving the ISU-152 a reliable answer to heavily armored targets that its kinetic shells struggle against, and its higher 680 m/s velocity flattens the trajectory for easier long-range aiming. Because penetration comes from a chemical jet rather than mass, it ignores distance entirely but is degraded by sloped armor and defeated outright by spaced plating or tracks that trigger the charge early. The shell still carries a substantial A-IX-1 explosive load (about 4.8 kg TNT equivalent), so even glancing or non-penetrating hits inflict serious overpressure and fragmentation damage. It is the go-to round when facing thick frontal armor that BR-540/BR-540B cannot reliably crack.",
    "sources": [
      {
        "label": "War Thunder Wiki — ISU-152 (BP-540, 152 mm ML-20S)",
        "url": "https://wiki.warthunder.com/unit/ussr_isu_152",
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
    "id": "m358-shot-m58",
    "name": "M358 shot (APBC)",
    "type": "APCBC",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 301,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 298,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 286,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 272,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 258,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 245,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M358 is a solid armor-piercing ballistic-capped shot with no explosive filler, relying entirely on kinetic energy and post-penetration spalling to disable a target. It holds penetration well across range, shedding only about 56 mm between point blank and 2000 m, which keeps it lethal against most contemporary opposition at the M103's battle ratings. Because it carries no bursting charge, crew kills depend on the angle of attack and on placing the round near ammunition stowage or multiple crew positions. Its flat solid-shot trajectory rewards accurate ranging at long distance.",
    "sources": [
      {
        "label": "M103 — War Thunder Wiki (unit us_m103)",
        "url": "https://wiki.warthunder.com/unit/us_m103",
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
    "id": "m356-shell-m58",
    "name": "M356 shell (HE)",
    "type": "HE",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 39,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 39,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 39,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 39,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
        "penMm": 39,
        "angleDeg": 0
      },
      {
        "rangeM": 2000,
        "penMm": 39,
        "angleDeg": 0
      }
    ],
    "velocityMps": null,
    "explosiveMassTntEqG": null,
    "normalizationDeg": null,
    "fuseSensitivityMm": null,
    "fuseDelayM": null,
    "mechanics": "The M356 is a high-explosive fragmentation round whose 39 mm of flat penetration is range-independent because its effect comes from blast and splinters rather than kinetic energy. It is intended for soft, open-topped, and lightly armored targets, anti-aircraft platforms, and exposed crew, where the 120 mm bursting charge can overwhelm thin plating or shower an open compartment. Against well-armored heavy tanks it is largely ineffective and is best reserved for situational use. The large caliber gives it a satisfying splash radius for finishing damaged or unbuttoned vehicles.",
    "sources": [
      {
        "label": "M103 — War Thunder Wiki (unit us_m103)",
        "url": "https://wiki.warthunder.com/unit/us_m103",
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
    "id": "m469-shell-m58",
    "name": "M469 shell (HEATFS)",
    "type": "HEATFS",
    "penetration": [
      {
        "rangeM": 10,
        "penMm": 380,
        "angleDeg": 0
      },
      {
        "rangeM": 100,
        "penMm": 380,
        "angleDeg": 0
      },
      {
        "rangeM": 500,
        "penMm": 380,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 380,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
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
    "mechanics": "The M469 is a fin-stabilized shaped-charge round that delivers a constant 380 mm of penetration regardless of range, making it the M103's go-to answer against thick frontal armor at any distance. Its chemical jet ignores the distance falloff that limits the M358 solid shot, so it stays effective at the long ranges where the kinetic round bleeds power. As a HEAT-FS warhead it is sensitive to spaced armor, tracks, and angled plate that can disrupt the jet, and it carries a measurable explosive after-effect that helps with crew incapacitation once the jet breaks through. Players typically carry it as the primary round against heavies and reserve the M358 for spaced or reactive targets.",
    "sources": [
      {
        "label": "M103 — War Thunder Wiki (unit us_m103)",
        "url": "https://wiki.warthunder.com/unit/us_m103",
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
    "id": "m357-smoke-m58",
    "name": "M357 (Smoke)",
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
        "rangeM": 500,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 1000,
        "penMm": 5,
        "angleDeg": 0
      },
      {
        "rangeM": 1500,
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
    "mechanics": "The M357 is a smoke round that produces a screening cloud on impact and has essentially no anti-armor value, with only a token 5 mm of listed penetration. It is used to blind enemy gunners, cover an advance across open ground, or break line of sight while repositioning a damaged M103. Because the heavy tank is slow and high-profile, a well-placed smoke screen can be the difference between escaping a crossfire and being picked apart. It occupies a stowage slot, so most players carry only a few rounds for emergencies.",
    "sources": [
      {
        "label": "M103 — War Thunder Wiki (unit us_m103)",
        "url": "https://wiki.warthunder.com/unit/us_m103",
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
  }
];
