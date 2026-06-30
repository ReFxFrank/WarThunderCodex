import type { Weapon } from "@/lib/schema";

// Seeded weapon records — generated from the Phase 3 research/verify workflow.
export const weapons: Weapon[] = [
  {
    "id": "zis-s-53-85mm",
    "name": "85 mm ZiS-S-53",
    "type": "cannon",
    "caliberMm": 85,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [
      "br-365k",
      "o-365k",
      "br-365p"
    ],
    "usedBy": [
      "t-34-85-1944",
      "t-44"
    ],
    "notes": "A versatile 85 mm rifled cannon that gives the T-34-85 a strong all-round punch at its battle rating, pairing capable APHE and APCR rounds with a reload that drops from roughly 9.6 to 7.4 seconds as the crew skills up. It rewards aggressive flanking and quick, decisive shots, since its post-penetration damage is solid but its rate of fire is not high enough for sustained brawling.",
    "sources": [
      {
        "label": "War Thunder Wiki — T-34-85 (ZiS-S-53)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_85_zis_53",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m3-75mm",
    "name": "75 mm M3",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [
      "m72-ap",
      "m61-apcbc",
      "m48-he",
      "m89-smoke"
    ],
    "usedBy": [
      "m4a1-sherman",
      "m4a3e2-jumbo"
    ],
    "notes": "The early-Sherman 75 mm gun in game, mounted on the M4A1 (1942) at 3.7 BR (AB/RB/SB). The wiki lists a comfortable reload of 6.5 s on a basic crew down to 5 s with an aced crew, and it carries four shell types: M72 AP, M61 APCBC, M48 HE, and M89 smoke, making it a flexible all-rounder. Note: the wiki page does not publish a muzzle-velocity column or an RPM figure for this gun, so those values are left unverified rather than estimated.",
    "sources": [
      {
        "label": "M4A1 (1942) Sherman — official War Thunder wiki",
        "url": "https://wiki.warthunder.com/unit/us_m4a1_1942_sherman",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kwk42-75mm",
    "name": "7.5 cm KwK42",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [
      "pzgr39-42",
      "pzgr40-42",
      "sprgr42"
    ],
    "usedBy": [
      "panther-d"
    ],
    "notes": "A long-barrelled 75 mm gun that trades calibre for velocity, the KwK42 delivers flat, accurate shots with strong armour penetration that suits picking off targets at long range. The Panther D wiki page lists its reload as 9.6 s on a basic crew, improving to 7.4 s with an ace crew, rewarding patient, well-aimed fire over brawling. The wiki shows two shells for it: the PzGr 39/42 APCBC (192 mm penetration at 10 m) and the Sprgr. 42 HE (13 mm). Muzzle velocity and a per-minute rate of fire are not stated as numbers on the accessible Tier-1 page, so both are left unverified.",
    "sources": [
      {
        "label": "Panther D unit page (wiki.warthunder.com)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_V_ausf_d_panther",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mg151-20",
    "name": "20 mm MG 151",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 700,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "bf-109-f-4",
      "fw-190-a-5",
      "fw-190-d-9",
      "bf-109-g-6"
    ],
    "notes": "A hub-mounted (Motorkanone) 20 mm autocannon firing through the propeller hub on the Bf 109 F-4, with a 700 rpm cadence and a 200-round magazine, giving a centerline-accurate, hard-hitting punch that rewards precise aim over volume of fire. In-game it offers six belt choices (Default, Universal, Air targets, Armored targets, Tracers, Stealth). Caliber (20 mm), fire rate (700 shots/min), and the 200-round capacity are confirmed on the Bf 109 F-4 wiki page; muzzle velocity is not listed on any Tier-1 page and is left unverified.",
    "sources": [
      {
        "label": "Bf 109 F-4 - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/bf-109f-4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Mauser MG 151/20 - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/gun/1312-mauser-mg-151-20",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "20 mm MG 151 weapon collection - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/collections/weapon/20mm_mg_151",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mg17",
    "name": "7.92 mm MG 17",
    "type": "machine-gun",
    "caliberMm": 7.92,
    "fireRateRpm": 1200,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "bf-109-f-4",
      "ju-87-b-2",
      "fw-190-a-5"
    ],
    "notes": "A high rate-of-fire rifle-caliber cowl machine gun with negligible recoil and a deep ammo pool, but its tiny rounds inflict little damage and are best used to supplement the nose cannon rather than as a primary killer.",
    "sources": [
      {
        "label": "Bf 109 F-4 vehicle page (War Thunder Wiki)",
        "url": "https://wiki.warthunder.com/unit/bf-109f-4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "hispano-mk-ii-20mm",
    "name": "Hispano Mk.II",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": 600,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mosquito-fb-mk-vi",
      "meteor-f-mk-3",
      "spitfire-mk-vb",
      "typhoon-mk-ib",
      "spitfire-mk-ix"
    ],
    "notes": "Standard British 20 mm aircraft autocannon of WWII, mounted in the nose of both the Mosquito FB Mk VI and the Meteor F Mk 3 for concentrated forward firepower.",
    "sources": [
      {
        "label": "Mosquito FB Mk VI | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/mosquito_fb_mk6",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Meteor F Mk 3 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/meteor_fmk3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "browning-303",
    "name": ".303 Browning",
    "type": "machine-gun",
    "caliberMm": 7.7,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mosquito-fb-mk-vi",
      "spitfire-mk-vb",
      "spitfire-mk-ix"
    ],
    "notes": "British 7.7 mm rifle-calibre machine gun; four are paired with the Hispano cannon in the Mosquito FB Mk VI's nose battery for high-volume close-range fire.",
    "sources": [
      {
        "label": "Mosquito FB Mk VI | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/mosquito_fb_mk6",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-97-57mm",
    "name": "57 mm Type 97",
    "type": "cannon",
    "caliberMm": 57,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-97-chi-ha"
    ],
    "notes": "A short-barrelled, low-velocity 57 mm gun designed for infantry support rather than tank-versus-tank fighting. In game it loads a Type 92 APHE round and a Type 3 HEAT round; modest penetration and a slow, looping shell arc make it a close-range, deliberate-aim weapon that rewards patient flanking shots over long-range duelling. The wiki vehicle page does not publish a muzzle velocity or a stated rate of fire for this cannon (only a reload time), so both values are left as honest gaps rather than estimates.",
    "sources": [
      {
        "label": "Type 97 Chi-Ha — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_type_97_chi_ha",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sa49-75mm",
    "name": "75 mm SA49",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "amx-13-75"
    ],
    "notes": "The 75 mm SA49 is the main gun of the AMX-13 (FL11) — the FL11-turret version of the AMX-13, not the autoloaded SA50 carried by the FL-10 turret. It hits hard for a rank III light tank and suits hit-and-run flanking, since the thin-skinned carrier cannot afford to trade blows. The Tier-1 wiki vehicle page lists a reload time but no muzzle-velocity column or per-cannon rounds-per-minute figure, so both are left as honest gaps rather than estimated.",
    "sources": [
      {
        "label": "AMX-13 (FL11) — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_amx_13_fl_11",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "pvkan-m43-75mm",
    "name": "75 mm Pvkan m/43",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": 940,
    "ammoTypeIds": [],
    "usedBy": [
      "pvkv-m43-1946",
      "strv-m42"
    ],
    "notes": "Long-barrelled Swedish 75 mm anti-tank gun derived from an anti-aircraft weapon. Its slpgr m/43 APCBC round has a muzzle velocity of 940 m/s. Rate of fire is governed by the modelled reload rather than a stated rpm.",
    "sources": [
      {
        "label": "Pvkv m/43 (1946) - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sw_pvkv_m43_1946",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn-105-f1",
    "name": "CN-105-F1 (105 mm)",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": 1525,
    "ammoTypeIds": [],
    "usedBy": [
      "amx-32-105",
      "m51-isherman",
      "amx-30"
    ],
    "notes": "French 105 mm rifled gun of the AMX-30 family. Its top OFL 105 F1 APFSDS round reaches about 1525 m/s muzzle velocity; HEAT/HE rounds travel closer to 1000 m/s. Fire rate is gunner/reload limited rather than a fixed cyclic value.",
    "sources": [
      {
        "label": "CN-105-F1 (105 mm) | War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/CN-105-F1_(105_mm)",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "AMX-32 (105) | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_amx_32_105",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-62-85mm",
    "name": "85 mm Type 63",
    "type": "cannon",
    "caliberMm": 85,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-62"
    ],
    "notes": "The 85 mm Type 63 is the rifled main gun of the lightly armoured Type 62 light tank, sitting at a 6.7 battle rating across Arcade, Realistic and Simulator. Its shell selection is versatile: a high-velocity Type 56 HVAP round (1,020 m/s) for punching through tougher targets, a Type 56 HEAT-FS round (845 m/s) whose penetration does not fall off with range, Type 56 APBC and APCBC shells (both 792 m/s) for general armour-piercing work, and a Type 56 HE shell (785 m/s) for soft targets. With a reload that improves from roughly 9.6 to 7.4 seconds as the crew is trained, modest gun depression of -5 degrees, and generous elevation of +22 degrees, the gun rewards hit-and-run scouting and ridgeline shots rather than standing duels, because the host tank cannot soak return fire. The wiki publishes only reload time rather than a rounds-per-minute figure, and muzzle velocity is shell-dependent (no single gun-wide value), so both are recorded as honest gaps instead of guesses.",
    "sources": [
      {
        "label": "Type 62 — War Thunder Wiki (current)",
        "url": "https://wiki.warthunder.com/unit/cn_type_62",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Type 62 — War Thunder Wiki (old, printable)",
        "url": "https://old-wiki.warthunder.com/index.php?printable=yes&title=Type_62",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Type-62-85-TC (85 mm) Ammunition — War Thunder Wiki (old, printable)",
        "url": "https://old-wiki.warthunder.com/index.php?printable=yes&title=Type-62-85-TC_(85_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kwk36-88mm",
    "name": "8.8 cm KwK36",
    "type": "cannon",
    "caliberMm": 88,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "tiger-h1"
    ],
    "notes": "The Tiger H1's 88 mm KwK36 is a hard-hitting, accurate rifled cannon that rewards careful, deliberate aiming over volume of fire: its shells reliably knock out most opponents at its rank in a single well-placed hit, but a fairly long reload punishes misses. The Tiger H1 wiki page lists the gun's reload (9.6 s on a basic crew, 7.4 s aced) rather than a rounds-per-minute figure, and it offers four shells (PzGr 39 APCBC, Sprgr. L/4.5 HE, Pzgr. APCBC, and Hl.Gr 39 HEAT). Muzzle velocity is a per-shell property in War Thunder and is not published as a cannon-level number on the Tier-1 page, so neither rpm nor muzzle velocity is exposed here.",
    "sources": [
      {
        "label": "Tiger H1 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_h1_tiger",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "breda-safat-12.7mm",
    "name": "12.7 mm Breda-SAFAT",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 700,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "macchi-c202",
      "sm-79"
    ],
    "notes": "A heavy 12.7 mm machine gun that anchors the C.202's nose armament, trading raw volume for reliable hitting power at a modest 700 rpm cadence. Carried in a pair (backed by two rifle-calibre 7.7 mm guns), it rewards patient, well-led bursts placed on a target rather than spray-and-pray, since its lighter punch compared to 20 mm cannons means lining up sustained hits is what brings enemies down. Muzzle velocity could not be confirmed on a Tier-1 page and is left as a visible gap rather than guessed.",
    "sources": [
      {
        "label": "C. 202 — War Thunder Wiki (vehicle page; offensive armament, caliber + fire rate)",
        "url": "https://wiki.warthunder.com/unit/mc-202_italy",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "12.7 mm Breda-SAFAT machine gun — War Thunder Wiki (weapon collection page)",
        "url": "https://wiki.warthunder.com/collections/weapon/12_7mm_breda_safat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "C. 202D — War Thunder Wiki (armament caliber + fire rate cross-check)",
        "url": "https://wiki.warthunder.com/C._202D",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m2-browning-50",
    "name": "12.7 mm M2 Browning",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 750,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "p-51d-5"
    ],
    "notes": "The 12.7 mm M2 Browning is the heavy machine gun that arms most early American aircraft. The P-51D-5 carries six of them at a 750 shots/min cyclic rate per gun, giving a dense stream of fire that chews through lightly armoured fighters and bomber crews in sustained bursts. It rewards patient gunnery: set a tight convergence, hold fire until the target fills the reticle, and walk short bursts rather than spraying, since it lacks the one-pass killing power of the cannon armament other nations favour. Caliber (12.7 mm) and rate of fire (750 shots/min) are confirmed on the P-51D-5 Tier-1 wiki page; muzzle velocity is not published on any accessible Tier-1 page and is left unverified rather than estimated.",
    "sources": [
      {
        "label": "P-51D-5 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/p-51d-5",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "12.7 mm M2 Browning machine gun — Weaponry — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/collections/weapon/12_7mm_m2_browning",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d-25t-122mm",
    "name": "122 mm D-25T",
    "type": "cannon",
    "caliberMm": 122,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "is-2",
      "is-3"
    ],
    "notes": "Soviet 122 mm rifled tank gun firing separate-loading ammunition, giving it a slow rate of fire but a heavy APHE shell with strong post-penetration and overpressure effect. The signature weapon of the IS-2 and IS-3 heavy tanks.",
    "sources": [
      {
        "label": "IS-2 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_is_2_1943",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m3-90mm",
    "name": "90 mm M3",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m26-pershing",
      "m36-jackson"
    ],
    "notes": "American 90 mm rifled tank gun with smooth handling and a quick reload. Its standard APCBC round offers moderate penetration, while specialised APCR and HEAT shells extend its effectiveness against tougher targets. Main armament of the M26 Pershing.",
    "sources": [
      {
        "label": "M26 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m26_pershing",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "pak43-88mm",
    "name": "8.8 cm Pak 43",
    "type": "cannon",
    "caliberMm": 88,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "jagdpanther"
    ],
    "notes": "High-velocity German 88 mm anti-tank gun known for excellent armour penetration and a flat trajectory that makes ranging easy. Mounted in the casemate of the Jagdpanther, where the whole hull must be turned to aim it.",
    "sources": [
      {
        "label": "Jagdpanther G1 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_panzerjager_panther",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "qf-75mm-mk5",
    "name": "OQF 75 mm",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "churchill-vii",
      "cromwell-v"
    ],
    "notes": "The Churchill VII's 75 mm OQF Mk.V is a quick-loading but low-velocity tank gun firing AP, APCBC, HE and smoke rounds. It rewards close-range engagements where its fast reload offsets its limited penetration. The wiki unit page lists four shells: M72 shot (AP), M61 shot (APCBC), M48 shell (HE) and M89 (smoke).",
    "sources": [
      {
        "label": "Churchill VII | War Thunder Wiki (unit page, armament section)",
        "url": "https://wiki.warthunder.com/unit/uk_a_22f_mk_7_churchill_1944",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-99-mk2-20mm",
    "name": "20 mm Type 99 Model 2",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": 490,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a6m5-zero",
      "j2m3-raiden"
    ],
    "notes": "A longer-barreled 20 mm autocannon with better velocity than the Mark 1, used on the late-model Zero and as the outboard pair on the J2M3 Raiden. It hits hard per shell but fires slowly at about 490 rounds per minute, favoring deliberate, well-led bursts. On the Raiden it carries roughly 420 rounds across the pair. Muzzle velocity was not shown as a clean Tier-1 stat and is left unverified.",
    "sources": [
      {
        "label": "J2M3 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/j2m3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-97-7mm",
    "name": "7.7 mm Type 97",
    "type": "machine-gun",
    "caliberMm": 7.7,
    "fireRateRpm": 900,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a6m5-zero",
      "a6m2-zero"
    ],
    "notes": "Cowl-mounted rifle-calibre machine guns that supplement the Zero's cannons, useful for tracer-guided aiming and shredding lightly armoured targets. NOTE: the task brief expected the A6M5 to mount 2x 13 mm Type 3 machine guns, but the Tier-1 A6M5 unit page (verified twice) clearly lists 2x 7.7 mm Type 97 machine guns instead; the 13 mm Type 3 is fitted to other A6M5 sub-variants (Ko/Otsu/Hei), not this base A6M5. Recorded the source-accurate weapon. The pair carries 1,400 rounds total (700 per gun) at 900 rounds per minute. Muzzle velocity was not shown on the unit page and is left unverified.",
    "sources": [
      {
        "label": "A6M5 | War Thunder Wiki (unit page, armament section)",
        "url": "https://wiki.warthunder.com/unit/a6m5_zero",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "shvak-20mm",
    "name": "ShVAK 20 mm cannon",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": 800,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "yak-9u",
      "tu-2s",
      "yak-3",
      "la-5fn",
      "la-7"
    ],
    "notes": "Widely used Soviet 20 mm autocannon firing at roughly 800 rounds per minute; mounted as the cowl/offensive cannon on many Soviet fighters and bombers.",
    "sources": [
      {
        "label": "War Thunder Wiki — Yak-9U",
        "url": "https://wiki.warthunder.com/unit/yak-9u",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ubs-12mm",
    "name": "12.7 mm UBS",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 996,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "yak-3"
    ],
    "notes": "Synchronised variant of the Soviet 12.7 mm Berezin UB heavy machine gun, mounted in pairs over the engine of the Yak-3. The 996 shots/min fire rate is taken from the Yak-3 unit page armament listing. Muzzle velocity is not exposed numerically on the Tier-1 weapon page, so it is left null.",
    "sources": [
      {
        "label": "12.7 mm Berezin UB machine gun | War Thunder Wiki (weaponry)",
        "url": "https://wiki.warthunder.com/collections/weapon/12_7mm_ub",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Yak-3 | War Thunder Wiki (armament fire rate: 996 shots/min)",
        "url": "https://wiki.warthunder.com/unit/yak-3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "hs-404-20mm",
    "name": "20 mm HS.404",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": 700,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "d-520"
    ],
    "notes": "French Hispano-Suiza 20 mm hub-firing autocannon, mounted through the propeller hub of the D.520. The 700 shots/min fire rate is read from the D.520 unit page armament listing. Muzzle velocity is not shown numerically on the Tier-1 pages and is left null.",
    "sources": [
      {
        "label": "D.520 | War Thunder Wiki (armament fire rate: 700 shots/min)",
        "url": "https://wiki.warthunder.com/unit/d_520_france",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mac-1934-7mm",
    "name": "7.5 mm MAC 1934",
    "type": "machine-gun",
    "caliberMm": 7.5,
    "fireRateRpm": 1350,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "d-520"
    ],
    "notes": "French 7.5 mm rifle-calibre aircraft machine gun, carried in a bank of four in the wings of the D.520. The 1,350 shots/min fire rate is read from the D.520 unit page armament listing. Muzzle velocity is not exposed numerically on the Tier-1 pages and is left null.",
    "sources": [
      {
        "label": "D.520 | War Thunder Wiki (armament fire rate: 1,350 shots/min)",
        "url": "https://wiki.warthunder.com/unit/d_520_france",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cannone-47-32",
    "name": "47 mm Cannone da 47/32",
    "type": "cannon",
    "caliberMm": 47,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m13-40"
    ],
    "notes": "Italian 47 mm L/32 tank gun firing APHE shells (Granata Perforante mod.35 and mod.39). The explosive filler behind the penetrator gives strong post-penetration damage at close range, which is the M13/40's main strength against early opponents. The wiki unit page does not list a muzzle velocity or a rounds-per-minute fire rate for this gun, so both are recorded as unverified.",
    "sources": [
      {
        "label": "M13/40 (I) | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_m13_40_serie_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cannone-75-34",
    "name": "75 mm Cannone da 75/34",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "p40"
    ],
    "notes": "Italian 75 mm L/34 tank gun (listed in-game as the '75 mm Ansaldo 75 L/34') mounted on the P40. Its ammunition selection includes the Granata Perforante 75/32 APCBC round, an EPS M42 HEAT shell, and a Granata 75/32 HE shell, giving it both general-purpose and anti-armour options at its rank. The unit page does not state a muzzle velocity or rounds-per-minute fire rate, so both are recorded as unverified. Gun id/name/caliber were corrected from the 75/32 named in the brief to the 75/34 shown on the page.",
    "sources": [
      {
        "label": "P40 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_p_40",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "akan-m41a-20mm",
    "name": "20 mm Akan m/41A",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 630,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "j21a-1"
    ],
    "notes": "Swedish 20 mm automatic cannon mounted singly in the nose of the J21A-1. With a fire rate of 630 rounds per minute it forms the heavy core of the aircraft's concentrated nose battery and is effective against both fighters and larger targets. The unit page does not give a muzzle velocity, so that value is recorded as unverified.",
    "sources": [
      {
        "label": "J21A-1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/saab_j21a_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "akan-m39a-13mm",
    "name": "13.2 mm Akan m/39A",
    "type": "machine-gun",
    "caliberMm": 13.2,
    "fireRateRpm": 1080,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "j21a-1"
    ],
    "notes": "Swedish 13.2 mm heavy machine gun, four of which are mounted in the nose of the J21A-1 alongside the 20 mm cannon. At 1,080 rounds per minute each, the quartet adds a heavy stream of fire that complements the cannon and makes the aircraft a strong head-on and interceptor platform. The unit page does not give a muzzle velocity, so that value is recorded as unverified.",
    "sources": [
      {
        "label": "J21A-1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/saab_j21a_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "n-37d-37mm",
    "name": "37 mm N-37D",
    "type": "cannon",
    "caliberMm": 37,
    "fireRateRpm": 400,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mig-15bis",
      "j-5"
    ],
    "notes": "A hard-hitting Soviet 37 mm autocannon used as the heavy half of the MiG-15bis battery (and, as the Chinese Type 37-1, of the Shenyang F-5); the -D suffix denotes the muzzle-brake-fitted variant. A single connecting shell will cripple or destroy most fighters, but the low fire rate and tiny 40-round magazine demand disciplined aim.",
    "sources": [
      {
        "label": "MiG-15bis — War Thunder Wiki (offensive armament: N-37D, 400 shots/min)",
        "url": "https://wiki.warthunder.com/unit/mig-15",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "nr-23-23mm",
    "name": "23 mm NR-23",
    "type": "cannon",
    "caliberMm": 23,
    "fireRateRpm": 900,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mig-15bis",
      "j-5"
    ],
    "notes": "A fast-firing Soviet 23 mm autocannon carried in a pair on the MiG-15bis (and, as the Chinese Type 23-1, on the Shenyang F-5), complementing the heavier 37 mm. Its higher rate of fire makes it the more forgiving gun for tap-firing and tracking, though its ballistic arc differs from the 37 mm so the two batteries do not converge identically.",
    "sources": [
      {
        "label": "MiG-15bis — War Thunder Wiki (offensive armament: 2x NR-23, 900 shots/min)",
        "url": "https://wiki.warthunder.com/unit/mig-15",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m3-browning-12mm",
    "name": "12.7 mm M3 Browning",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 1200,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "f-86f-25",
      "sbd-3-dauntless",
      "p-47d-thunderbolt",
      "f4u-4-corsair"
    ],
    "notes": "The aircraft M3 is a faster-firing development of the M2 Browning, raising the rate of fire to keep .50-cal armament relevant against jets. Six of them on the F-86F deliver a high volume of fire and a deep ammo pool, but each round is comparatively light, so kills come from sustained, well-aimed bursts rather than single passes.",
    "sources": [
      {
        "label": "F-86F-25 — War Thunder Wiki (offensive armament: 6x M3 Browning, 1,200 shots/min)",
        "url": "https://wiki.warthunder.com/unit/f-86f-25",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mk108-30mm",
    "name": "30 mm MK 108",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 600,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "me-262-a-1a"
    ],
    "notes": "A compact German 30 mm autocannon designed to drop heavy bombers, firing large thin-walled mine shells that pack enormous explosive filler. The low muzzle velocity gives heavy shell drop, so it must be fired at close range, but four of them on the Me 262 make almost any hit lethal.",
    "sources": [
      {
        "label": "Me 262 A-1a — War Thunder Wiki (offensive armament: 4x MK 108, 600 shots/min)",
        "url": "https://wiki.warthunder.com/unit/me-262a-1a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d-10t-100mm",
    "name": "100 mm D-10T",
    "type": "cannon",
    "caliberMm": 100,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "t-54-1951"
    ],
    "notes": "The 100 mm D-10T is the rifled main gun of the early T-54 series. It fires capped armour-piercing rounds with strong post-penetration effect and also has access to HEATFS for high flat penetration, giving the T-54 (1951) reliable hitting power against same-tier armour. Muzzle velocity is nulled because a specific shell value could not be cleanly read from the Tier-1 unit stat card in this session.",
    "sources": [
      {
        "label": "T-54 (1951) | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_54_1951",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "l7-105mm",
    "name": "105 mm L7A3",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "leopard-1",
      "type-74"
    ],
    "notes": "The 105 mm L7A3 is the German-service variant of the widely exported British L7 rifled tank gun, mounted on the Leopard I. It is accurate and hard-hitting with access to high-velocity rounds, and is the gun that defines the Leopard I's first-shot flanking role. Muzzle velocity is nulled because a specific shell value could not be cleanly read from the Tier-1 unit stat card in this session. The Centurion Mk 10 carries the same L7 gun family but under the distinct in-game designation '105 mm Royal Ordnance L7A1', so it is recorded as a separate weapon (l7a1-105mm).",
    "sources": [
      {
        "label": "Leopard I | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_I",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "l7a1-105mm",
    "name": "105 mm Royal Ordnance L7A1",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "centurion-mk-10"
    ],
    "notes": "The 105 mm Royal Ordnance L7A1 is the British original of the famous L7 rifled tank gun, mounted on the Centurion Mk 10. It is an accurate, flexible gun with strong armour-piercing options that suits the Centurion's patient hull-down play. Muzzle velocity is nulled because a specific shell value could not be cleanly read from the Tier-1 unit stat card in this session. This is the same L7 gun family carried by the Leopard I, but the wiki uses a different in-game designation ('105 mm L7A3') for the Leopard, so the two are kept as separate weapon records.",
    "sources": [
      {
        "label": "Centurion Mk 10 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_centurion_mk_10",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-59-100mm",
    "name": "100 mm Type 59 cannon",
    "type": "cannon",
    "caliberMm": 100,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ztz59"
    ],
    "notes": "Rifled 100 mm main gun of the Chinese Type 59, derived from the Soviet D-10 series used on the T-54 family. The wiki unit page lists its in-game name simply as '100 mm Type 59 cannon' without a '(rifled)' qualifier. Per-shell muzzle velocities are not shown on the unit stat card, so muzzleVelocityMps is left null.",
    "sources": [
      {
        "label": "Type 59 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_type_59",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m68-105mm",
    "name": "105 mm M68 cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "magach-3",
      "tiran-4s",
      "merkava-mk-1"
    ],
    "notes": "American-built license of the British L7 105 mm rifled gun, fitted to Israeli Magach and Tiran upgrades; fires APDS/APFSDS, HEAT-FS, HESH and smoke.",
    "sources": [
      {
        "label": "Magach 3 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/il_magach_3_idf",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Tiran 4S | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/il_tiran_4_sh",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "flak38-20mm",
    "name": "20 mm Flak 38",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 480,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "wirbelwind"
    ],
    "notes": "Quad-barrel Flakvierling 38 mount as fitted to the Wirbelwind. The wiki lists a combined fire rate of 480 shots/min across the four barrels and a 3,200-round vehicle ammo pool. A rapid-firing 20 mm autocannon ideal against aircraft and light armour, but with limited penetration against tanks at range. Muzzle velocity was not listed on the unit page.",
    "sources": [
      {
        "label": "Wirbelwind | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_flakpanzer_IV_Wirbelwind",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "bofors-m2a1-40mm",
    "name": "40 mm Bofors M2A1",
    "type": "autocannon",
    "caliberMm": 40,
    "fireRateRpm": 120,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m42-duster"
    ],
    "notes": "Twin 40 mm Bofors M2A1 automatic mount on the M42 Duster. The wiki shows a 120 shots/min rate and a 480-round capacity, fed in clips. Hard-hitting heavy autocannon effective against aircraft and light vehicles; the comparatively low fire rate means each burst must be aimed carefully. Muzzle velocity was not listed on the unit page.",
    "sources": [
      {
        "label": "M42 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m42_duster",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "s-68-57mm",
    "name": "57 mm S-68",
    "type": "autocannon",
    "caliberMm": 57,
    "fireRateRpm": 120,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "zsu-57-2"
    ],
    "notes": "Twin 57 mm S-68 automatic cannons on the ZSU-57-2, fed from 4-round clips. The wiki lists a 120 shots/min rate and 296-round total capacity. An unusually large-calibre autocannon for an SPAA, giving heavy hitting power against aircraft and light armour at the cost of a low sustained rate of fire. Muzzle velocity was not listed on the unit page.",
    "sources": [
      {
        "label": "ZSU-57-2 | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_zsu_57_2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "nr-30-30mm",
    "name": "30 mm NR-30",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 850,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mig-21f-13"
    ],
    "notes": "A hard-hitting 30 mm Soviet aircraft revolver-feed cannon, the single mount on the MiG-21F-13 fires at 850 rounds per minute from a small 60-round belt. Its heavy shells inflict severe damage on a hit, but the limited ammunition and modest velocity reward short, committed bursts at close range rather than sustained fire. The unit page lists the fire rate but does not publish a muzzle velocity, so that value is left unverified.",
    "sources": [
      {
        "label": "War Thunder Wiki — MiG-21F-13",
        "url": "https://wiki.warthunder.com/unit/mig-21_f13",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m50-20mm",
    "name": "M50 (20 mm)",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": 750,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "md-450b-ouragan",
      "ouragan"
    ],
    "notes": "French 20 mm cannon derived from the Hispano family, mounted in a battery of four in the nose of the Ouragan. Reliable ballistics and a dense burst, though individual rounds are lighter than 30 mm shells.",
    "sources": [
      {
        "label": "M.D.450B Ouragan - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/md_450b_ouragan",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kwk43-88mm",
    "name": "8.8 cm KwK43",
    "type": "cannon",
    "caliberMm": 88,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "tiger-ii-h"
    ],
    "notes": "Long-barrelled German 88 mm tank gun fitted to the Tiger II (H). Prized for flat trajectory, tight accuracy, and strong penetration at the ranges typical of its battle rating. In-game reload runs about 9.7 s on a basic crew down to roughly 7.5 s fully aced.",
    "sources": [
      {
        "label": "Tiger II | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_VI_ausf_b_tiger_IIh",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps",
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "t5e1-105mm",
    "name": "105 mm T5E2",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "t29"
    ],
    "notes": "American 105 mm tank gun mounted in the T29 heavy tank's rotating turret. Hits hard enough to knock out most rivals at its rating in a single well-placed shot. The War Thunder unit page labels this gun '105 mm T5E2'; the request's gun name 'T5E1' appears to be an approximation. In-game reload is about 19.4 s on a basic crew, falling to roughly 14.9 s when aced.",
    "sources": [
      {
        "label": "T29 | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/us_t29",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps",
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m1-76mm",
    "name": "76 mm M1",
    "type": "cannon",
    "caliberMm": 76,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m18-hellcat"
    ],
    "notes": "American 76 mm gun mounted in the M18 Hellcat's fully traversable turret. The unit page lists M79 (AP), M62 (APCBC), M93 (APCR), M42A1 (HE) and M88 (smoke) rounds. Muzzle velocity is not given on the vehicle unit page and is left unverified.",
    "sources": [
      {
        "label": "M18 GMC — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m18_hellcat",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d-10s-100mm",
    "name": "100 mm D-10S",
    "type": "cannon",
    "caliberMm": 100,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "su-100"
    ],
    "notes": "Soviet 100 mm casemate gun on the SU-100, fixed in the hull with only a narrow horizontal arc. The unit page lists BR-412 (APHE), BR-412B (APHEBC), BR-412D (APCBC), OF-412 (HE) and 3D3 (smoke). Muzzle velocity is not shown on the vehicle unit page and is left unverified.",
    "sources": [
      {
        "label": "SU-100 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_su_100_1945",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "k18-105mm",
    "name": "10.5 cm K18",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "dicker-max"
    ],
    "notes": "German 105 mm K.18 heavy gun on the Dicker Max open casemate, with a narrow fixed horizontal arc. The unit page lists PzGr (APHE), Pzgr.rot (APCBC) and Gr.19 (HE). Muzzle velocity is not shown on the vehicle unit page and is left unverified.",
    "sources": [
      {
        "label": "Dicker Max — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/germ_pzsfl_IVa_dickermax",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "20k-45mm",
    "name": "45 mm 20-K",
    "type": "cannon",
    "caliberMm": 45,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "bt-7"
    ],
    "notes": "The 45 mm 20-K is the standard early-war Soviet light-tank and light-armour gun, mounted on the BT-7 and many of its contemporaries. The wiki stat card lists a reload dropping from roughly 3.8 seconds on a basic crew to 2.9 seconds when aced; it does not publish a muzzle-velocity or rate-of-fire column for the gun, so those values are left unverified rather than estimated. It is effective against lightly armoured targets, especially from the flank.",
    "sources": [
      {
        "label": "BT-7 — official War Thunder wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_bt_7_1937",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "qf-2pdr-40mm",
    "name": "40 mm QF 2-pounder",
    "type": "cannon",
    "caliberMm": 40,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "crusader-mk-ii",
      "matilda"
    ],
    "notes": "The 40 mm Ordnance QF 2-pounder is the standard early British cruiser-tank gun, fitted to the Crusader II. The wiki confirms a 40 mm calibre and lists a fast reload of about 3.6 seconds on a basic crew down to 2.8 seconds when aced. It fires solid armour-piercing shot with no high-explosive option, so it relies on hitting crew and modules; the wiki does not publish a muzzle-velocity or rate-of-fire figure for the gun, which are therefore left unverified.",
    "sources": [
      {
        "label": "Crusader II — official War Thunder wiki",
        "url": "https://wiki.warthunder.com/unit/uk_crusader_mk_2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m6-75mm",
    "name": "75 mm M6",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m24-chaffee"
    ],
    "notes": "The 75 mm M6 is a lightweight 75 mm gun developed for the M24 Chaffee, giving the light tank a genuine 75 mm punch in a compact package. The wiki stat card lists a reload of about 8.4 seconds on a basic crew dropping to 6.5 seconds when aced, reflecting the larger shell. The wiki does not publish a muzzle-velocity or rate-of-fire column for the gun, so those values are left unverified rather than estimated.",
    "sources": [
      {
        "label": "M24 — official War Thunder wiki",
        "url": "https://wiki.warthunder.com/unit/us_m24_chaffee",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "vya-23-23mm",
    "name": "23 mm VYa-23",
    "type": "autocannon",
    "caliberMm": 23,
    "fireRateRpm": 600,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "il-2-1942"
    ],
    "notes": "Soviet Volkov-Yartsev 23 mm aircraft autocannon developed in 1940 to defeat armor, prioritized over the lighter 20 mm ShVAK. Heavy-hitting rounds make it effective against light vehicles and aircraft, but the gun is mounted on slow attackers and carries a limited ammo pool, so short controlled bursts are essential.",
    "sources": [
      {
        "label": "IL-2 (1942) | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/il-2i",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "shkas-7mm",
    "name": "7.62 mm ShKAS",
    "type": "machine-gun",
    "caliberMm": 7.62,
    "fireRateRpm": 1800,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "il-2-1942"
    ],
    "notes": "Soviet rifle-caliber aircraft machine gun famous for an extremely high rate of fire, among the fastest-firing machine guns of its era. On the IL-2 it supplements the heavier 23 mm cannons, useful for ranging shots and softening light targets while the cannon ammunition is conserved.",
    "sources": [
      {
        "label": "IL-2 (1942) | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/il-2i",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "2a46-125mm",
    "name": "125 mm 2A46",
    "type": "cannon",
    "caliberMm": 125,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "t-72a"
    ],
    "notes": "Soviet 125 mm smoothbore main gun with a two-plane stabilizer and a carousel autoloader. On the T-72A it feeds a roster spanning APFSDS, HEAT-FS and HE shells, giving solid penetration for its battle rating at the cost of the vulnerable carousel ammo layout.",
    "sources": [
      {
        "label": "T-72A | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_72a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m68a1-105mm",
    "name": "105 mm M68A1",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m1-abrams"
    ],
    "notes": "American 105 mm rifled main gun, the licence-derived L7 family weapon mounted on the M1 Abrams. It offers a fast reload and good handling but lighter penetration than the 120/125 mm smoothbores it faces, firing APFSDS, HEAT-FS, HESH and smoke.",
    "sources": [
      {
        "label": "M1 Abrams | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/us_m1_abrams",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "rh120-l44-120mm",
    "name": "120 mm Rh120 L/44",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "leopard-2a4"
    ],
    "notes": "Rheinmetall 120 mm L/44 smoothbore, the definitive Western tank gun of its generation. On the Leopard 2A4 it delivers excellent APFSDS penetration alongside HEAT-FS rounds, manually loaded for a steady rate of fire.",
    "sources": [
      {
        "label": "Leopard 2A4 | War Thunder Wiki (official)",
        "url": "https://wiki.warthunder.com/unit/germ_leopard_2a4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "gsh-23l-23mm",
    "name": "23 mm GSh-23L",
    "type": "autocannon",
    "caliberMm": 23,
    "fireRateRpm": 3396,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mig-23m"
    ],
    "notes": "Twin-barrel Soviet autocannon operating on the Gast principle, where each barrel's recoil cycles the other to reach a very high rate of fire from a simple mechanism. On the MiG-23M it is fed by a 200-round magazine. Fire rate (3,396 shots/min) is taken from the MiG-23M unit page armament listing; muzzle velocity is not stated on the unit page and is left null.",
    "sources": [
      {
        "label": "MiG-23M | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/mig_23m",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "defa-552-30mm",
    "name": "DEFA 552 (30 mm)",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 1200,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "md-454-mystere-iva",
      "mirage-iiic",
      "kfir-c2",
      "md-460-saar"
    ],
    "notes": "French 30 mm revolver cannon with a high cyclic rate and heavy explosive shells. A handful of hits can cripple most contemporaries, making it a strong energy-fighting armament despite limited ammunition.",
    "sources": [
      {
        "label": "Mystere IVA - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/md_454_mystere_4a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "l11-120mm",
    "name": "120 mm L11",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "chieftain-mk-3",
      "challenger-1"
    ],
    "notes": "Rifled 120 mm tank gun (in-game full designation '120 mm Ordnance BL Tk. L11A5') firing separated APDS/HESH/smoke ammunition. Primary armament of the Chieftain series. Reload of the host vehicle is 9.7 s (basic) to 7.5 s (aced).",
    "sources": [
      {
        "label": "Chieftain Mk 3 — War Thunder Wiki (unit page, armament section)",
        "url": "https://wiki.warthunder.com/unit/uk_chieftain_mk_3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "akan-m47c-20mm",
    "name": "20 mm Akan m/47C",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 750,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "j29-tunnan"
    ],
    "notes": "Swedish license-built variant of the British 20 mm Hispano Mk.V, with a slightly lower rate of fire and Swedish belts. Mounted as a battery of four in the nose of the J29A; total load 720 rounds. The requested designation 'Akan m/49' does not match the wiki page, which lists 'Akan m/47C'.",
    "sources": [
      {
        "label": "J29A — War Thunder Wiki (unit page, armament section)",
        "url": "https://wiki.warthunder.com/unit/saab_j29a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m134-minigun-762mm",
    "name": "7.62 mm M134 Minigun",
    "type": "machine-gun",
    "caliberMm": 7.62,
    "fireRateRpm": 4000,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ah-1g-cobra"
    ],
    "notes": "Electrically driven multi-barrel rotary machine gun mounted in the AH-1G's chin turret, prized for an extremely high cyclic rate and a large ammunition pool that lets it lay down sustained suppressive fire against soft targets.",
    "sources": [
      {
        "label": "AH-1G | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ah_1g",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m129-grenade-40mm",
    "name": "40 mm M129 grenade launcher",
    "type": "autocannon",
    "caliberMm": 40,
    "fireRateRpm": 350,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ah-1g-cobra"
    ],
    "notes": "Automatic 40 mm grenade launcher carried in the AH-1G's chin turret. It lobs explosive grenades at a low velocity, useful against infantry, light vehicles and emplacements when paired with the turret miniguns.",
    "sources": [
      {
        "label": "AH-1G | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ah_1g",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "gsh-30k-30mm",
    "name": "30 mm GSh-30-2K cannon",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 2598,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mi-24p"
    ],
    "notes": "Fixed twin-barrel 30 mm cannon adapted from the Su-25 and mounted on the side of the Mi-24P's nose. Aimed by pointing the whole airframe, it delivers a very high rate of fire that shreds light vehicles, helicopters and aircraft.",
    "sources": [
      {
        "label": "Mi-24P | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/mi_24p",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "tm197b-20mm",
    "name": "20 mm TM197B cannon",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 750,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a129-mangusta"
    ],
    "notes": "Chin-mounted 20 mm turret cannon on the A129CBT, fed from a 500-round pool. Used for self-defence against light targets and helicopters at close range.",
    "sources": [
      {
        "label": "A129CBT | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/a_129_cbt",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "2a42-30mm",
    "name": "30 mm 2A42 cannon",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 546,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ka-50"
    ],
    "notes": "Hull-mounted 30 mm autocannon on the Ka-50, fed from a 460-round magazine. Effective against light vehicles, exposed crews, and helicopters; fixed to the airframe so the helicopter is aimed at the target.",
    "sources": [
      {
        "label": "Ka-50 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ka_50",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m230-30mm",
    "name": "30 mm M230E-1 chain gun",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 625,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ah-64a-apache"
    ],
    "notes": "Chin-turret 30 mm chain gun on the AH-64A, fed from a 1,200-round magazine and firing HEDP rounds. The turret slews independently of the airframe, slaved to the gunner's sight.",
    "sources": [
      {
        "label": "AH-64A — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ah_64a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m197-20mm",
    "name": "20 mm M197 cannon",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 750,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ah-1s-kisarazu"
    ],
    "notes": "Three-barrel 20 mm Gatling-type turret cannon on the AH-1S, fed from a 750-round magazine. Mounted in a slewable chin turret slaved to the gunner's sight; best against light targets and helicopters.",
    "sources": [
      {
        "label": "AH-1S Kisarazu — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ah_1s",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m61-vulcan-20mm",
    "name": "20 mm M61A1 Vulcan",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 6000,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "f-16a",
      "f-14a-tomcat",
      "f-1"
    ],
    "notes": "Six-barrel rotary autocannon firing 20 mm rounds at a very high cyclic rate, giving short bursts an exceptionally dense stream of shells. Standard cannon armament of the F-16A, fed from a 512-round drum.",
    "sources": [
      {
        "label": "F-16A | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/f_16a_block_10",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "gsh-30-1-30mm",
    "name": "30 mm GSh-30-1",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 1800,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mig-29",
      "su-27"
    ],
    "notes": "Single-barrel 30 mm autocannon that trades sheer rate of fire for heavy, hard-hitting shells. A short burst is often enough to destroy an enemy aircraft, but the small 150-round magazine demands accuracy. Standard cannon of the MiG-29.",
    "sources": [
      {
        "label": "MiG-29 (9-13) | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/mig_29_9_13",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "bk27-27mm",
    "name": "27 mm Mauser BK27 (Akan m/85)",
    "type": "autocannon",
    "caliberMm": 27,
    "fireRateRpm": 1700,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "jas39-gripen",
      "tornado-ids"
    ],
    "notes": "Single-barrel revolver autocannon in the 27 mm class, balancing a healthy rate of fire with substantial per-shell damage. Known in Swedish service as the Akan m/85, it is the internal gun of the JAS39A Gripen, fed from a 120-round magazine.",
    "sources": [
      {
        "label": "JAS39A | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/saab_jas39a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type90-120mm",
    "name": "120 mm Smoothbore Gun",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-90"
    ],
    "notes": "Japanese-built version of the Rheinmetall Rh120 L/44 120 mm smoothbore, fitted to the Type 90. On the Type 90 it is fed by an autoloader giving a constant 4-second reload. Wiki unit page lists it as the '120 mm Type 90 L/44 cannon'. Muzzle velocity is round-dependent and not stated as a single gun value on the unit page.",
    "sources": [
      {
        "label": "Type 90 — War Thunder Wiki unit page (armament section)",
        "url": "https://wiki.warthunder.com/unit/jp_type_90",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "oto-120-44",
    "name": "120 mm OTO Melara 120/44",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ariete"
    ],
    "notes": "Italian 120 mm smoothbore gun fitted to the C1 Ariete. The War Thunder Wiki unit page labels the in-game weapon as the '120 mm OTO Breda 120/44 cannon'; recorded under the requested id 'oto-120-44' with the requested OTO Melara name. _note: actual wiki gun name is 'OTO Breda 120/44', not 'OTO Melara'. Muzzle velocity is round-dependent and not given as a single gun value on the unit page.",
    "sources": [
      {
        "label": "Ariete (C1 Ariete) — War Thunder Wiki unit page (armament section)",
        "url": "https://wiki.warthunder.com/unit/it_c1_ariete",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ml-20s-152mm",
    "name": "152 mm ML-20S",
    "type": "cannon",
    "caliberMm": 152,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "isu-152"
    ],
    "notes": "Casemate-mounted 152 mm gun-howitzer used on the ISU-152. Fires large high-explosive and armour-piercing shells whose sheer mass gives it extreme one-shot potential at the cost of a very long reload and a small ammunition stowage.",
    "sources": [
      {
        "label": "War Thunder Wiki — ISU-152",
        "url": "https://wiki.warthunder.com/unit/ussr_isu_152",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "stuh43-150mm",
    "name": "150 mm StuH 43",
    "type": "cannon",
    "caliberMm": 150,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "brummbar"
    ],
    "notes": "Short-barrelled 150 mm howitzer mounted in the Brummbär's casemate. Low muzzle velocity makes it a lobbing weapon, but its huge high-explosive shell can wreck almost any vehicle it strikes; the trade-off is a long reload and modest ammo count.",
    "sources": [
      {
        "label": "War Thunder Wiki — Brummbär",
        "url": "https://wiki.warthunder.com/unit/germ_sturmpanzer_IV_brummbar",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ho-5-20mm",
    "name": "20 mm Ho-5 cannon",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": 850,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ki-84-hayate"
    ],
    "notes": "The Ho-5 is the standard Japanese Army 20 mm aircraft cannon, mounted in pairs in the Ki-84's wing roots. It offers a high rate of fire for its caliber and a meaningful punch against fighters, but a modest ammunition count rewards short, accurate bursts. The wiki page lists its fire rate but does not publish a clean muzzle-velocity figure, which is left unverified rather than estimated.",
    "sources": [
      {
        "label": "War Thunder Wiki — Ki-84 ko (Ho-5)",
        "url": "https://wiki.warthunder.com/unit/ki_84_ko",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ho-103-12mm",
    "name": "12.7 mm Ho-103 machine gun",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 900,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ki-84-hayate",
      "ki-43-2",
      "ki-61-1a-ko"
    ],
    "notes": "The Ho-103 is a Japanese Army 12.7 mm aircraft machine gun used widely across Army fighters including the Ki-84, Ki-43-II, and Ki-61-I Ko. It has a high rate of fire (900 rounds per minute) and explosive ammunition that gives it real punch for its caliber. The wiki pages list its fire rate but not a reliable muzzle-velocity value, which is left unverified.",
    "sources": [
      {
        "label": "Ki-43-II | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ki_43_2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Ki-61-I Ko | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ki_61_1a_ko",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kwk40-75mm",
    "name": "75 mm KwK40 L/43",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "pz-iv-g"
    ],
    "notes": "Long-barrelled German 75 mm tank gun (L/43 length) that turned the Panzer IV into a capable medium gunfighter. Flat trajectory and strong penetration for its rank make it effective against most contemporaries at range.",
    "sources": [
      {
        "label": "Pz.Kpfw.IV Ausf.G — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_IV_ausf_G",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "f-34-76mm",
    "name": "76 mm F-34",
    "type": "cannon",
    "caliberMm": 76,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "t-34-1941"
    ],
    "notes": "Standard Soviet 76 mm tank gun of the early T-34. A versatile weapon with a useful spread of armour-piercing and high-explosive shells, able to deal with most armour it faces at its battle rating.",
    "sources": [
      {
        "label": "T-34 (1941) — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_34_1941",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "qf-17pdr-76mm",
    "name": "76 mm QF 17-pounder",
    "type": "cannon",
    "caliberMm": 76,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "sherman-firefly",
      "centurion-mk-1"
    ],
    "notes": "British high-velocity 76.2 mm anti-tank gun fitted to the Sherman Firefly. One of the hardest-hitting guns at its rank, with penetration capable of defeating late-war German heavy armour.",
    "sources": [
      {
        "label": "Sherman Firefly — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/Sherman_Firefly",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kwk44-128mm",
    "name": "128 mm KwK44",
    "type": "cannon",
    "caliberMm": 128,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "maus"
    ],
    "notes": "Primary armament of the Maus super-heavy tank. This large-calibre cannon delivers heavy single-shot damage with a long reload (about 23.6 s stock, 18.2 s aced). On the Maus it is paired with a turret-mounted 75 mm KwK44 secondary cannon. Muzzle velocity and fire rate were not clearly shown on the wiki unit page.",
    "sources": [
      {
        "label": "War Thunder Official Wiki — Maus",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_Maus",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "zis-5-76mm",
    "name": "76 mm ZiS-5",
    "type": "cannon",
    "caliberMm": 76,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "kv-1"
    ],
    "notes": "Main gun of the KV-1 (ZiS-5) heavy tank, a longer 76 mm cannon with solid penetration for its battle rating. Reload is roughly 9 s for a basic crew and 6.9 s aced. Muzzle velocity and fire rate were not clearly shown on the wiki unit page.",
    "sources": [
      {
        "label": "War Thunder Official Wiki — KV-1 (ZiS-5)",
        "url": "https://wiki.warthunder.com/unit/ussr_kv_1_zis_5",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m7-76mm",
    "name": "76 mm Gun M7",
    "type": "cannon",
    "caliberMm": 76,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m6a1",
      "m10-wolverine"
    ],
    "notes": "The 3-inch (76 mm) Gun M7 is the primary armament of the M6A1 heavy tank. It reloads quickly for a heavy (about 7.6 s stock, 5.9 s aced). On the M6A1 it is paired in the turret with a 37 mm M3 cannon mounted alongside it. Muzzle velocity and fire rate were not clearly shown on the wiki unit page.",
    "sources": [
      {
        "label": "War Thunder Official Wiki — M6A1",
        "url": "https://wiki.warthunder.com/unit/us_m6a1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "gau-8-30mm",
    "name": "30 mm GAU-8/A",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 4200,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a-10a-thunderbolt"
    ],
    "notes": "The GAU-8/A is the seven-barrel 30 mm rotary cannon built into the nose of the A-10A, firing at roughly 4,200 rounds per minute from a magazine of about 1,174 rounds. Its sheer rate of fire and heavy 30 mm shells let it tear through ground targets, including the roofs and rear of armoured vehicles, making it the centerpiece of the aircraft's close air support role. The wiki page does not publish a muzzle-velocity figure for this gun, so that value is left unverified rather than estimated.",
    "sources": [
      {
        "label": "War Thunder Wiki — A-10A Late (a_10a_late)",
        "url": "https://wiki.warthunder.com/unit/a_10a_late",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "gsh-30-2-30mm",
    "name": "30 mm GSh-30-2",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 3000,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "su-25"
    ],
    "notes": "The GSh-30-2 is a twin-barrel 30 mm cannon fixed in the Su-25, firing at about 3,000 rounds per minute from a 250-round supply. Its high rate of fire and powerful 30 mm rounds make it effective against light and medium ground targets as well as aircraft caught in a firing solution, complementing the Su-25's heavier guided and unguided ordnance. The wiki page does not publish a muzzle-velocity figure for this gun, so that value is left unverified rather than estimated.",
    "sources": [
      {
        "label": "War Thunder Wiki — Su-25 (su_25)",
        "url": "https://wiki.warthunder.com/unit/su_25",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "aden-30mm",
    "name": "30 mm ADEN",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 1200,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "j34-hunter",
      "harrier-gr1",
      "hunter-f6",
      "j35-draken"
    ],
    "notes": "British ADEN 30 mm revolver cannon as fitted to the Swedish Hunter (J34), mounted as a four-gun pack. Muzzle velocity not confirmed from the unit page and left null.",
    "sources": [
      {
        "label": "War Thunder Wiki — J34",
        "url": "https://wiki.warthunder.com/unit/hunter_f50_sweden",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "stuk40-75mm",
    "name": "75 mm StuK40 L/48",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "stug-iii-g"
    ],
    "notes": "Long-barrelled 75 mm assault gun cannon mounted in the StuG III G's fixed casemate. It shares its armour-penetration performance with the Panzer IV H's main gun, giving the StuG strong anti-tank capability at its battle rating. Fire rate and muzzle velocity were left null because the wiki rendered them as concatenated multi-mode digit strings.",
    "sources": [
      {
        "label": "StuG III G — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_stug_III_ausf_G",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps",
      "ammoTypeIds"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kwk39-50mm",
    "name": "50 mm KwK39/1 cannon",
    "type": "cannon",
    "caliberMm": 50,
    "fireRateRpm": null,
    "muzzleVelocityMps": 835,
    "ammoTypeIds": [],
    "usedBy": [
      "sdkfz-234-2-puma",
      "pz-iii-m"
    ],
    "notes": "Long-barrelled 50 mm L/60 gun firing APCBC (PzGr 39), APCR (PzGr 40) and HE; muzzle velocity quoted for the standard PzGr 39 round.",
    "sources": [
      {
        "label": "Sd.Kfz.234/2 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_sdkfz_234_2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type3-75mm",
    "name": "75 mm Type 3",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "chi-nu"
    ],
    "notes": "Japanese 75 mm tank gun derived from a field gun, fitted to the Type 3 Chi-Nu. Offers solid penetration for its rating but is held back by a slow reload and modest turret traverse.",
    "sources": [
      {
        "label": "War Thunder Official Wiki — Type 3 Chi-Nu",
        "url": "https://wiki.warthunder.com/unit/jp_type_3_chi_nu",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sav-kan-m44-105mm",
    "name": "105 mm kan m/44",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "sav-m43"
    ],
    "notes": "Swedish 105 mm gun mounted in the casemate of the Sav m/43 (1946). Delivers a heavy single-shot blow but suffers from a long reload, limiting its rate of fire to a handful of shots per minute.",
    "sources": [
      {
        "label": "War Thunder Official Wiki — Sav m/43 (1946)",
        "url": "https://wiki.warthunder.com/unit/sw_sav_m43_1946",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m2-75mm",
    "name": "75 mm M2",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m3-lee"
    ],
    "notes": "Hull sponson gun of the M3 Lee, mounted low in the right hull with limited traverse. Available shells on the wiki include M72 shot (AP), M61 shot (APCBC), M48 (HE) and M89 (smoke). The M3's turret separately mounts a 37 mm M5 cannon, which is not modelled here.",
    "sources": [
      {
        "label": "M3 Lee — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/us_m3_lee",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "dca45-90mm",
    "name": "90 mm SA45",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "arl-44"
    ],
    "notes": "Main gun of the ARL-44. The official wiki unit page labels this cannon the 90 mm SA45 (the requested id retains the dca45-90mm key). The unit page does not display a muzzle velocity; the listed cyclic fire rate figure was ambiguous and is left unverified rather than risk a wrong value. Paired with a 7.5 mm MAC 31 coaxial machine gun.",
    "sources": [
      {
        "label": "ARL-44 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_arl_44",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "azp-23-23mm",
    "name": "23 mm AZP-23",
    "type": "autocannon",
    "caliberMm": 23,
    "fireRateRpm": 850,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "zsu-23-4-shilka"
    ],
    "notes": "Quad-barrel water-cooled 23 mm autocannon battery used on the radar-directed ZSU-23-4 Shilka. The four barrels combine for a very high effective volume of fire against aircraft and light vehicles. Per-barrel fire rate of 850 rounds per minute as listed on the wiki; total ammunition load 2,000 rounds with 500-round belts.",
    "sources": [
      {
        "label": "ZSU-23-4 — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_zsu_23_4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kda-35mm",
    "name": "35 mm Oerlikon KDA",
    "type": "autocannon",
    "caliberMm": 35,
    "fireRateRpm": 550,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "gepard"
    ],
    "notes": "Twin-mounted 35 mm Oerlikon KDA autocannon used on the radar-directed Flakpanzer Gepard. The heavy 35 mm shells give long reach and high damage against aircraft and light armour. Per-barrel fire rate of 550 rounds per minute as listed on the wiki; 680 rounds total with 320-round belts.",
    "sources": [
      {
        "label": "Gepard — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_flakpz_I_Gepard",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m168-20mm",
    "name": "20 mm M168 Vulcan",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 3000,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m163-vads"
    ],
    "notes": "Six-barrelled 20 mm M168 Vulcan Gatling cannon used on the radar-directed M163 VADS. Its very high cyclic rate of fire (3,000 rounds per minute on the wiki) saturates aerial and ground targets but consumes the 2,200-round load (1,100-round belt) quickly. Reload after a belt is depleted is 26 s stock, 20 s aced.",
    "sources": [
      {
        "label": "M163 — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m163_vulcan",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type23-3-23mm",
    "name": "23 mm Type 23-3 cannon",
    "type": "autocannon",
    "caliberMm": 23,
    "fireRateRpm": 3396,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "j-8"
    ],
    "notes": "Single-barrel 23 mm cannon mounted on the Shenyang J-8B with a 200-round magazine and a high cyclic rate. Selectable belts include Default, Armored targets, Air targets and Stealth, firing HEFI-T, AP-I and HEF-I shells. Muzzle velocity is not displayed on the wiki unit page and is left null.",
    "sources": [
      {
        "label": "J-8B — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/j_8b",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "oqf-77mm",
    "name": "77 mm OQF",
    "type": "cannon",
    "caliberMm": 77,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "comet-i"
    ],
    "notes": "British 77 mm Ordnance Quick-Firing gun (designated OQF Mk.II in game) fitted to the Comet I. Derived from the 17-pounder family with a shorter case, it offers strong penetration, especially with APDS ammunition. Muzzle velocity and cannon fire rate were not clearly shown on the unit page and are left null.",
    "sources": [
      {
        "label": "Comet I — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/uk_a_34_comet",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "pak39-75mm",
    "name": "75 mm PaK 39 L/48",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "jagdpanzer-38t-hetzer"
    ],
    "notes": "German 75 mm PaK 39 L/48 anti-tank gun mounted in the casemate of the Jagdpanzer 38(t) Hetzer. A capable medium-velocity gun able to defeat most opponents at its battle rating. Muzzle velocity and a cannon fire rate were not clearly shown on the unit page and are left null.",
    "sources": [
      {
        "label": "Jagdpanzer 38(t) — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_jgdpz_38t",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sa47-100mm",
    "name": "100 mm SA47",
    "type": "cannon",
    "caliberMm": 100,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "lorraine-40t"
    ],
    "notes": "Autoloaded 100 mm cannon (SA47 L/58) fed from a seven-round magazine, giving a rapid four-second cycle between shots until the drum empties and a longer full reload follows. Mounted in the Lorraine 40t's oscillating turret.",
    "sources": [
      {
        "label": "Lorraine 40t — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_lorraine_40t",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type5-75mm",
    "name": "75 mm Type II Model II",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "chi-to"
    ],
    "notes": "Long high-velocity 75 mm cannon mounting the Type 4 Chi-To's primary armament, offering strong penetration for its battle rating in a manually loaded turret.",
    "sources": [
      {
        "label": "Chi-To — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_type_4_chi_to",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d-56t-76mm",
    "name": "76 mm D-56T",
    "type": "cannon",
    "caliberMm": 76,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "pt-76b"
    ],
    "notes": "Stabilised 76 mm rifled gun mounted on the PT-76B amphibious light tank. The in-game vehicle's gun is rendered on the wiki as the D-56TS variant; muzzle velocity and cyclic fire rate were not cleanly parseable from the source and are left null.",
    "sources": [
      {
        "label": "PT-76B — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_pt_76b",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m6-37mm",
    "name": "37 mm M6",
    "type": "cannon",
    "caliberMm": 37,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m5a1-stuart"
    ],
    "notes": "37 mm rifled gun mounted on the M5A1 Stuart light tank. Muzzle velocity and cyclic fire rate were not cleanly parseable from the wiki source and are left null pending verification.",
    "sources": [
      {
        "label": "M5A1 Stuart — Official War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m5a1_stuart",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mg131-13mm",
    "name": "13 mm MG 131 machine gun",
    "type": "machine-gun",
    "caliberMm": 13,
    "fireRateRpm": null,
    "muzzleVelocityMps": 750,
    "ammoTypeIds": [],
    "usedBy": [
      "bf-109-k-4",
      "fw-190-d-9",
      "bf-109-g-6"
    ],
    "notes": "Germany's standard cowl-mounted 13 mm heavy machine gun on late-war fighters; reliable but light-hitting, used here as the secondary armament beside the hub cannon. Fire rate was not rendered on the unit page.",
    "sources": [
      {
        "label": "13 mm MG 131 machine gun | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/collections/weapon/13mm_mg_131",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-30-1-30mm",
    "name": "Type 30-1 (30 mm)",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 1000,
    "muzzleVelocityMps": 800,
    "ammoTypeIds": [],
    "usedBy": [
      "j-7ii",
      "j-7e",
      "mig-19j_6a"
    ],
    "notes": "Chinese license-produced copy of the Soviet NR-30 30 mm autocannon, known for high explosive shell mass that can destroy targets in one or two hits, offset by a small ammunition reserve per gun.",
    "sources": [
      {
        "label": "J-7II - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/j_7_mk2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-99-mk1-20mm",
    "name": "20 mm Type 99 Mark 1",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 516,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a6m2-zero",
      "j2m3-raiden"
    ],
    "notes": "A short-barreled 20 mm wing cannon derived from the Oerlikon design, used on early A6M Zeros and as the inboard pair on the J2M3 Raiden. It fires a heavy shell at low muzzle velocity and a slow cadence of about 516 rounds per minute. On the Raiden it carries roughly 380 rounds across the pair. Muzzle velocity is not published as a clean Tier-1 stat and is left unverified.",
    "sources": [
      {
        "label": "J2M3 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/j2m3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn-105-zpl94",
    "name": "105 mm ZPL94 cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-69-2g"
    ],
    "notes": "Chinese NORINCO 105 mm rifled gun, a long-barrelled L7 derivative. Fires APFSDS, HEATFS, HESH and a DTB-1 HE-VT round; two-plane stabilised on the Type 69-IIG. Reload 9.7 s stock / 7.5 s aced.",
    "sources": [
      {
        "label": "T-69 II G - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_type_69_2g",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn-125-type88c",
    "name": "125 mm Type 88C cannon",
    "type": "cannon",
    "caliberMm": 125,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ztz96"
    ],
    "notes": "125 mm smoothbore with autoloader giving a fixed ~7.1 s reload. Fires APFSDS, HEATFS and HE including the domestic 125-I dart; 22 rounds in first-order stowage on the ZTZ96.",
    "sources": [
      {
        "label": "ZTZ96 - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_ztz_96",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn-120-ptz89",
    "name": "120 mm PTZ89 cannon",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ptz89"
    ],
    "notes": "Purpose-built 120 mm smoothbore tank-destroyer gun with an assisted loader for a fast 5 s reload. Fires high-velocity APFSDS with strong penetration; 10 rounds in first-order stowage.",
    "sources": [
      {
        "label": "PTZ89 - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_ptz_89",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kan-strv-81-84mm",
    "name": "84 mm kan Strv 81",
    "type": "cannon",
    "caliberMm": 84,
    "fireRateRpm": null,
    "muzzleVelocityMps": 1430,
    "ammoTypeIds": [],
    "usedBy": [
      "strv-81"
    ],
    "notes": "Swedish designation for the British 20-pounder fitted to the Centurion Mk 3. The headline slpprj m/54 APDS round leaves the barrel at 1430 m/s. Fire rate is governed by the modelled reload rather than a stated rpm figure.",
    "sources": [
      {
        "label": "Strv 81 - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sw_strv_81",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "kan-ikv-91-90mm",
    "name": "90 mm kan Ikv 91",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": 825,
    "ammoTypeIds": [],
    "usedBy": [
      "ikv-91"
    ],
    "notes": "Low-pressure 90 mm gun firing the slpsgr m/72 HEATFS as its primary round at a muzzle velocity of 825 m/s, giving penetration comparable to NATO 105 mm HEATFS. Rate of fire is set by the modelled reload rather than a stated rpm.",
    "sources": [
      {
        "label": "Ikv 91 - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sw_ikv_91",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "fr-120mm-sa46",
    "name": "120 mm SA46 cannon",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "amx-50-surbaisse"
    ],
    "notes": "Autoloading main gun of the AMX-50 Surbaissé, mounted in an oscillating turret; fires roughly one round every 6 seconds. Available shells are an APBC (Obus de rupture) and HE (Obus explosif).",
    "sources": [
      {
        "label": "AMX-50 Surbaissé | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_amx_50_surbaisse",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "fr-90mm-cn90-f3",
    "name": "90 mm CN90 F3 cannon",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "amx-13-90"
    ],
    "notes": "Low-pressure 90 mm gun fed by the AMX-13's oscillating-turret autoloader, firing about one round every 5 seconds until the magazine empties and must restock. Shells include the OCC 90-62 HEATFS, OE 90 F1 HE and OFUM PH90-F2 smoke.",
    "sources": [
      {
        "label": "AMX-13-90 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_amx_13_90",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "fr-90mm-d915",
    "name": "90 mm D915 cannon",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "amx-elc-bis"
    ],
    "notes": "Main gun of the ELC bis mounted in an oscillating turret; manually loaded with a stock reload near 8.7 s improving to about 6.7 s with an aced crew. Fires the OCC 90-62 HEATFS, OE 90 F1 HE and OFUM PH90-F2 smoke rounds.",
    "sources": [
      {
        "label": "ELC bis | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_amx_elc_bis",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sharir-105mm",
    "name": "105 mm Sharir cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "shot-kal-dalet"
    ],
    "notes": "Israeli-produced derivative of the British L7/M68 105 mm rifled gun mounted on the Sho't Kal Dalet; fires APFSDS, HEAT-FS and HESH and is paired with the Barak Or fire control system.",
    "sources": [
      {
        "label": "Sho't Kal Dalet | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/il_centurion_shot_kal_d",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "us-90mm-m3a1",
    "name": "90 mm M3A1 cannon",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m46-patton"
    ],
    "notes": "Long 90 mm rifled gun fitted to the M46 Patton, with access to APCBC and APCR ammunition for solid penetration at rank IV.",
    "sources": [
      {
        "label": "M46 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m46_patton",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "us-90mm-m36",
    "name": "90 mm M36 cannon",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m47-patton-ii"
    ],
    "notes": "90 mm rifled gun mounted in the M47's improved turret, sharing much of the M46's ammunition family while benefiting from the better turret layout.",
    "sources": [
      {
        "label": "M47 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m47_patton_II",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "us-105mm-m68",
    "name": "105 mm M68 cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m60a1-rise-p"
    ],
    "notes": "American licence-built version of the British L7 105 mm gun; on the M60A1 RISE (P) it can fire the M735 APFSDS dart for strong kinetic penetration.",
    "sources": [
      {
        "label": "M60A1 RISE (P) | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m60a1_rise_passive_era",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "75mm-pak40-3-l46",
    "name": "75 mm PaK40/3 L46",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": 790,
    "ammoTypeIds": [],
    "usedBy": [
      "marder-iii-h"
    ],
    "notes": "Single-shot anti-tank gun; muzzle velocity quoted for the PzGr 39 APCBC shell. Strong penetration for its battle rating.",
    "sources": [
      {
        "label": "Marder III H | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_pzkpfw_38t_Marder_III_ausf_H",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "88mm-pak43-1",
    "name": "88 mm PaK43/1",
    "type": "cannon",
    "caliberMm": 88,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "nashorn"
    ],
    "notes": "High-velocity 88 mm anti-tank gun of the same family that armed the Tiger II; excellent penetration at long range. Fires PzGr 39/43 APCBC, PzGr 40/43 APCR, HEAT, and HE.",
    "sources": [
      {
        "label": "Nashorn | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_panzerjager_nashorn",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "90mm-bk90",
    "name": "90 mm BK90",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ru-251"
    ],
    "notes": "German Cold-War 90 mm gun derived from the American M3; lacks a kinetic AP round and relies on HEATFS, HESH, and HE in game.",
    "sources": [
      {
        "label": "Ru 251 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_ru251",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "jp-37mm-type-94",
    "name": "37 mm Type 94 cannon",
    "type": "cannon",
    "caliberMm": 37,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-95-ha-go"
    ],
    "notes": "Low-velocity 37 mm tank gun on the Ha-Go; modest penetration and damage, best used against light targets and exposed crew. Muzzle velocity and fire rate are not listed on the official unit page.",
    "sources": [
      {
        "label": "War Thunder Wiki — Ha-Go (unit)",
        "url": "https://wiki.warthunder.com/unit/jp_type_95_ha_go",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "jp-47mm-type-1",
    "name": "47 mm Type 1 cannon",
    "type": "cannon",
    "caliberMm": 47,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-97-chi-ha-kai"
    ],
    "notes": "Higher-velocity 47 mm gun in the Chi-Ha Kai's new turret; fires APHE with a useful filler for strong post-penetration damage, though it is uncapped and struggles against slopes. Muzzle velocity and fire rate are not listed on the official unit page.",
    "sources": [
      {
        "label": "War Thunder Wiki — Chi-Ha Kai (unit)",
        "url": "https://wiki.warthunder.com/unit/jp_type_97_kai",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "jp-105mm-jsw",
    "name": "105 mm JSW cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-16-mcv"
    ],
    "notes": "Japanese licence-built 105 mm rifled gun on the Type 16; fires APFSDS, HEAT-FS, HESH and smoke. Muzzle velocity and fire rate are not listed on the official unit page.",
    "sources": [
      {
        "label": "War Thunder Wiki — Type 16 (unit)",
        "url": "https://wiki.warthunder.com/unit/jp_type_16",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "gun-75-18-mod34",
    "name": "75/18 mod.34 (75 mm)",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "semovente-75-18-m41"
    ],
    "notes": "Short-barrelled 75 mm howitzer firing low-velocity APCBC and HE; the unlockable HEAT shell provides a constant 100 mm of penetration that defines the vehicle's effectiveness.",
    "sources": [
      {
        "label": "War Thunder Wiki - 75/18 M41",
        "url": "https://wiki.warthunder.com/unit/it_semovente_m41_75_18",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "gun-oto-melara-105-52",
    "name": "OTO Melara 105/52 (105 mm)",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": 1470,
    "ammoTypeIds": [],
    "usedBy": [
      "of-40",
      "centauro-i-105"
    ],
    "notes": "NATO-standard 105 mm rifled gun firing APDS (about 1470 m/s), HEATFS, HESH and smoke. Shared between the OF-40 main battle tank and the Centauro I 105 wheeled tank destroyer.",
    "sources": [
      {
        "label": "War Thunder Wiki - OF-40",
        "url": "https://wiki.warthunder.com/unit/it_of_40_mk_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "War Thunder Wiki - Centauro I 105",
        "url": "https://wiki.warthunder.com/unit/it_b1_centauro",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ubs-127mm",
    "name": "Berezin UBS 12.7 mm machine gun",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 996,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "yak-9u"
    ],
    "notes": "Synchronised cowl-mounted variant of the Berezin 12.7 mm heavy machine gun, firing at about 996 rounds per minute on the Yak-9U.",
    "sources": [
      {
        "label": "War Thunder Wiki — Yak-9U",
        "url": "https://wiki.warthunder.com/unit/yak-9u",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ns-23-23mm",
    "name": "NS-23 23 mm cannon",
    "type": "cannon",
    "caliberMm": 23,
    "fireRateRpm": 600,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "la-9"
    ],
    "notes": "Post-war Soviet 23 mm autocannon firing at about 600 rounds per minute; the La-9 carries a battery of four, giving it a heavy hitting punch.",
    "sources": [
      {
        "label": "War Thunder Wiki — La-9",
        "url": "https://wiki.warthunder.com/unit/la-9",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ubt-127mm",
    "name": "Berezin UBT 12.7 mm machine gun (turret)",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 1026,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "tu-2s"
    ],
    "notes": "Turret-mounted variant of the Berezin 12.7 mm heavy machine gun, firing at about 1,026 rounds per minute; three of these form the Tu-2S rear defensive battery.",
    "sources": [
      {
        "label": "War Thunder Wiki — Tu-2S",
        "url": "https://wiki.warthunder.com/unit/tu-2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "hispano-mk-v-20mm",
    "name": "Hispano Mk.V (20 mm)",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "sea-fury-fb-11",
      "vampire-fb-5",
      "tempest-mk-v"
    ],
    "notes": "Lightened, shorter British 20 mm autocannon derived from the Hispano series, offering a higher rate of fire than earlier marks at the cost of muzzle velocity. Mounted as a four-gun nose or wing battery on late British piston and early jet fighters.",
    "sources": [
      {
        "label": "Sea Fury FB 11 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sea_fury_fb11",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Vampire F.B.5 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/vampire_fb5",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-23-2k-23mm",
    "name": "Type 23-2K (23 mm)",
    "type": "autocannon",
    "caliberMm": 23,
    "fireRateRpm": 1150,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "q-5-early"
    ],
    "notes": "Chinese license-produced copy of the Soviet AM-23 23 mm autocannon, fitted with a muzzle brake; mounted on Q-5 series strike aircraft. Muzzle velocity not confirmed on the official unit page and left unverified.",
    "sources": [
      {
        "label": "Q-5 early - War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/q_5_early",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "defa-552a-30mm",
    "name": "DEFA 552A",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 1300,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mirage-3cj-shahak"
    ],
    "notes": "French 30 mm revolver cannon mounted in pairs on the Mirage IIICJ, with 125 rounds per gun. Hard-hitting but limited ammunition rewards short, accurate bursts.",
    "sources": [
      {
        "label": "Shahak | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/mirage_3cj",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps",
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "defa-553-30mm",
    "name": "DEFA 553",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 1200,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a-4n-ayit"
    ],
    "notes": "Improved 30 mm DEFA revolver cannon fitted in pairs on the A-4N Ayit, carrying 150 rounds per gun. Replaces the Skyhawk's standard 20 mm Colt cannons for far greater hitting power.",
    "sources": [
      {
        "label": "Ayit | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/a_4n",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "akan-m55-30mm",
    "name": "30 mm Akan m/55",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 1400,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "j32b-lansen"
    ],
    "notes": "Swedish licence-built version of the British ADEN 30 mm revolver cannon, fitted as a battery of four in the J32B. Muzzle velocity not confirmed from the unit page and left null.",
    "sources": [
      {
        "label": "War Thunder Wiki — J32B",
        "url": "https://wiki.warthunder.com/unit/saab_j32b",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "akan-m49-20mm",
    "name": "20 mm Akan m/49",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a32a-lansen"
    ],
    "notes": "Swedish 20 mm cannon of the Hispano family, mounted as four guns in the A32A with 720 rounds total. Fire rate and muzzle velocity were not confirmed from the unit page and are left null.",
    "sources": [
      {
        "label": "War Thunder Wiki — A32A",
        "url": "https://wiki.warthunder.com/unit/saab_a32a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "defa-551-30mm",
    "name": "DEFA 551 (30 mm)",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 1200,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "so-4050-vautour-iia"
    ],
    "notes": "Early French 30 mm revolver cannon mounted as a four-gun nose battery on the Vautour IIA. Delivers devastating firepower in a short burst, well suited to fast strike passes and head-on engagements.",
    "sources": [
      {
        "label": "S.O.4050 Vautour IIA - War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/so_4050_vautour_2a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "breda-safat-127",
    "name": "12.7 mm Breda-SAFAT",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 700,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mc-205-serie1",
      "g55-serie1"
    ],
    "notes": "Standard Italian heavy machine gun used as the primary or supplementary armament on many Regia Aeronautica fighters. Reliable but modest in punch and muzzle velocity compared with later cannon-armed designs.",
    "sources": [
      {
        "label": "C. 205 serie 1 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/mc-205_serie1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "breda-safat-77",
    "name": "7.7 mm Breda-SAFAT",
    "type": "machine-gun",
    "caliberMm": 7.7,
    "fireRateRpm": 900,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mc-205-serie1"
    ],
    "notes": "Light rifle-calibre machine gun fitted to early and mid-war Italian fighters. High fire rate but limited damage, generally used to supplement heavier weapons.",
    "sources": [
      {
        "label": "C. 205 serie 1 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/mc-205_serie1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mg-151-20",
    "name": "20 mm MG 151 cannon",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": 700,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ta-152-h-1",
      "he-162-a-2",
      "bf-109-k-4",
      "g55-serie1"
    ],
    "notes": "Widely used German 20 mm cannon known for its accurate flat trajectory and potent mine-shell (M-Geschoss) high-explosive belt; muzzle velocity varies by belt and was not confirmed on the unit pages.",
    "sources": [
      {
        "label": "20 mm MG 151 cannon | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/collections/weapon/20mm_mg_151",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m3-browning-127",
    "name": "12.7 mm M3 Browning",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "fiat-g91-r1"
    ],
    "notes": "High-rate development of the M2 .50 calibre Browning, fitted as the nose battery of the G.91. Effective against light targets but underpowered against well-armoured jets.",
    "sources": [
      {
        "label": "G.91 R/1 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fiat_g91_r1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mk-108-30mm",
    "name": "30 mm MK 108 cannon",
    "type": "cannon",
    "caliberMm": 30,
    "fireRateRpm": 660,
    "muzzleVelocityMps": 540,
    "ammoTypeIds": [],
    "usedBy": [
      "bf-109-k-4",
      "ta-152-h-1"
    ],
    "notes": "Hard-hitting low-velocity 30 mm autocannon that destroys most targets in a single burst but demands close-range shooting due to its slow, looping shells.",
    "sources": [
      {
        "label": "30 mm MK 108 cannon | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/collections/weapon/30mm_mk_108",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "qf-l1a2-120mm",
    "name": "120 mm Ordnance QF Tk. L1A2 cannon",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "conqueror"
    ],
    "notes": "Rifled 120 mm gun using two-piece ammunition, firing APDS and HESH. The two-stage loading drives a long reload of about 19 seconds stock.",
    "sources": [
      {
        "label": "Conqueror - War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_conqueror_mk_2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "qf-l4a1-183mm",
    "name": "183 mm QF L4A1 cannon",
    "type": "cannon",
    "caliberMm": 183,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "fv4005"
    ],
    "notes": "Largest conventional tank gun in the game. Restricted to HESH ammunition, which delivers extreme one-shot potential against armour and emplacements.",
    "sources": [
      {
        "label": "FV4005 - War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_fv4005",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "qf-20pdr-mk1-84mm",
    "name": "20-pounder OQF Mk.I (84 mm)",
    "type": "cannon",
    "caliberMm": 84,
    "fireRateRpm": null,
    "muzzleVelocityMps": 1465,
    "ammoTypeIds": [],
    "usedBy": [
      "charioteer-mk-vii"
    ],
    "notes": "High-velocity 84 mm gun with access to APDS; the Shot Mk.3 APDS round travels at about 1465 m/s for excellent long-range accuracy but poor post-penetration effect.",
    "sources": [
      {
        "label": "Charioteer Mk VII - War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/uk_charioteer_mk_7",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "20pdr OQF Mk.I (84 mm) - War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/20pdr_OQF_Mk.I_(84_mm)",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "browning-303-7mm",
    "name": "Browning (7.7 mm)",
    "type": "machine-gun",
    "caliberMm": 7.7,
    "fireRateRpm": 1000,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "hurricane-mk-i-l"
    ],
    "notes": "British .303-calibre adaptation of the Browning machine gun, mounted in large multi-gun batteries on early RAF fighters. Reliable and high-volume but limited in penetration against armoured targets.",
    "sources": [
      {
        "label": "Hurricane Mk I/L | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/hurricane_mk1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sa46-120mm",
    "name": "SA46 (120 mm)",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": 1000,
    "ammoTypeIds": [],
    "usedBy": [
      "amx-50-foch"
    ],
    "notes": "120 mm gun developed for the AMX-50 family. The standard round leaves the barrel at roughly 1000 m/s, with the 120 mm Obus de rupture APBC at about 1067 m/s. On the Foch it is manually loaded, giving a long reload between very powerful shots.",
    "sources": [
      {
        "label": "AMX-50 Foch | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_amx_50_foch",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d911-apx-90mm",
    "name": "D.911 APX (90 mm)",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "char-25t"
    ],
    "notes": "French 90 mm gun mounted in the Char 25t's oscillating turret and fed by an autoloader, giving a roughly 4-second cycle between rounds in the magazine. Muzzle velocity for its specific in-game shells could not be confirmed from a clean wiki stat reading and is left null.",
    "sources": [
      {
        "label": "Char 25t | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_bat_chat_25t",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "D.911 APX (90 mm) | War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/D.911_APX_(90_mm)",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "breda-mod35-20mm",
    "name": "20 mm Breda Mod.35 cannon",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 240,
    "muzzleVelocityMps": 840,
    "ammoTypeIds": [],
    "usedBy": [
      "l6-40"
    ],
    "notes": "Italian 20 mm autocannon firing API-T by default with access to a PzGr 40 belt providing HVAP-T. Effective against early light armour and aircraft but penetration falls off quickly at range.",
    "sources": [
      {
        "label": "Breda Mod.35 (20 mm) — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/Breda_Mod.35_(20_mm)",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "L6/40 — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_l6",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "oerlikon-kad-20mm",
    "name": "20 mm Oerlikon KAD cannon",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 996,
    "muzzleVelocityMps": 1000,
    "ammoTypeIds": [],
    "usedBy": [
      "r3-t20-fa-hs"
    ],
    "notes": "High-velocity 20 mm autocannon with a very high rate of fire, fed from 120-round belts. Carries API-T and HEF-I rounds suited to both anti-air and light anti-armour work.",
    "sources": [
      {
        "label": "Oerlikon KAD (20 mm) — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/Oerlikon_KAD_(20_mm)",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "R3 T20 FA-HS — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_oto_r3_t20_fa",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "oto-breda-76-62",
    "name": "76 mm OTO Breda Cannone da 76/62",
    "type": "cannon",
    "caliberMm": 76,
    "fireRateRpm": null,
    "muzzleVelocityMps": 1580,
    "ammoTypeIds": [],
    "usedBy": [
      "otomatic"
    ],
    "notes": "Naval-derived 76 mm rapid-fire gun with a 0.5 s reload. Fires 76/62 SAPOM, proximity-fused 76/62 HE-VT for anti-air, and an OTOMATIC-exclusive 76/62 APFSDS for anti-tank work; the APFSDS muzzle velocity is 1580 m/s.",
    "sources": [
      {
        "label": "OTOMATIC — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_otomatic",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "OTO Breda Cannone da 76/62 (76 mm)/Ammunition — War Thunder Wiki",
        "url": "https://old-wiki.warthunder.com/OTO_Breda_Cannone_da_76/62_(76_mm)/Ammunition",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "us-120mm-m58",
    "name": "120 mm M58 cannon",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m103"
    ],
    "notes": "Large-bore 120 mm rifled gun (developed from the T123E1) carried by the M103, firing APCBC and HEAT-FS rounds with strong penetration and post-penetration effect. Reload is roughly 19.4 s stock and 14.9 s aced.",
    "sources": [
      {
        "label": "M103 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m103",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "us-152mm-m81",
    "name": "152 mm M81 gun/launcher",
    "type": "cannon",
    "caliberMm": 152,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m551-sheridan"
    ],
    "notes": "Combined 152 mm gun and missile launcher on the M551 Sheridan, firing low-velocity HEAT and HE shells plus the MGM-51 Shillelagh ATGM. Reload is about 15.6 s stock and 12 s aced.",
    "sources": [
      {
        "label": "M551 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m551",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "us-152mm-m162",
    "name": "152 mm M162 gun/launcher",
    "type": "cannon",
    "caliberMm": 152,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m60a2"
    ],
    "notes": "Two-plane stabilised 152 mm gun/launcher on the M60A2 Starship, firing HEAT, overpressure HE and the MGM-51 Shillelagh missile. Reload is about 15.6 s stock and 12 s aced.",
    "sources": [
      {
        "label": "M60A2 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m60a2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "u-5ts-115mm",
    "name": "115 mm U-5TS cannon",
    "type": "cannon",
    "caliberMm": 115,
    "fireRateRpm": null,
    "muzzleVelocityMps": 1615,
    "ammoTypeIds": [],
    "usedBy": [
      "t-62"
    ],
    "notes": "First Soviet smoothbore tank gun, two-plane stabilised, firing APFSDS, HEATFS and HE. The 3BM4 APFSDS dart leaves the muzzle at about 1615 m/s for very flat trajectories. Base reload on the T-62 is 10.4 s.",
    "sources": [
      {
        "label": "T-62 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_62",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m-62-t2s-122mm",
    "name": "122 mm M-62-T2S cannon",
    "type": "cannon",
    "caliberMm": 122,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "t-10m"
    ],
    "notes": "Two-plane stabilised rifled 122 mm gun on the T-10M firing APHE and HEATFS. Heavy single-shot damage with a slow base reload of about 19.5 s.",
    "sources": [
      {
        "label": "T-10M — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_t_10m",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d-49-122mm",
    "name": "122 mm D-49 cannon",
    "type": "cannon",
    "caliberMm": 122,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "su-122-54"
    ],
    "notes": "Rifled 122 mm gun mounted in the fixed casemate of the SU-122-54, firing APHE and HEATFS. Slow gun traverse (about 4.9 deg/s) and a base reload near 16 s.",
    "sources": [
      {
        "label": "SU-122-54 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/ussr_su_122_54",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "flak43-37mm",
    "name": "37 mm FlaK43 cannon",
    "type": "autocannon",
    "caliberMm": 37,
    "fireRateRpm": 250,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "flakpanzer-iv-ostwind"
    ],
    "notes": "Single-barrel automatic anti-aircraft gun fed in 8-round clips; fires APHE/FI-T, HE (Sprgr.) and HEI-T belts effective against aircraft and light armour.",
    "sources": [
      {
        "label": "Ostwind | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_flakpanzer_IV_Ostwind",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mk103-38-30mm",
    "name": "30 mm MK103/38 cannon",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 450,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "flakpanzer-iv-kugelblitz"
    ],
    "notes": "Twin-mounted high-velocity 30 mm autocannons fed from 100-round belts; mixes AP-I, HVAP-T and HEI-T rounds. Per-barrel fire rate is 450 rounds per minute.",
    "sources": [
      {
        "label": "Kugelblitz | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/germ_flakpanzer_IV_Kugelblitz",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "type-89-77mm",
    "name": "7.7 mm Type 89 machine gun",
    "type": "machine-gun",
    "caliberMm": 7.7,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ki-61-1a-ko"
    ],
    "notes": "The Type 89 is a Japanese Army 7.7 mm rifle-caliber machine gun, a license-derived Vickers design fitted as the cowling pair on the Ki-61-I Ko (800 rounds per gun). It is a light, ranging weapon with modest damage output. The Ki-61-I Ko unit page render concatenated its fire-rate figure with adjacent values and conflicted with the dedicated gun page, so fire rate and muzzle velocity are left unverified rather than guessed.",
    "sources": [
      {
        "label": "Ki-61-I Ko | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ki_61_1a_ko",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m2-browning-12-7mm",
    "name": "12.7 mm M2 Browning",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": 750,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "f8f-1-bearcat",
      "p-38j-15-lightning"
    ],
    "notes": "The standard US heavy machine gun of WWII, mounted in batteries on most American fighters. Reliable with a high rate of fire, it relies on volume and good convergence rather than per-round punch.",
    "sources": [
      {
        "label": "F8F-1 — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/f8f1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "an-m2-20mm",
    "name": "20 mm AN/M2 cannon",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "p-38j-15-lightning"
    ],
    "notes": "A US-built derivative of the Hispano 20 mm cannon used as the nose centerline weapon on the P-38. It adds cannon punch to the Lightning's otherwise machine-gun armament.",
    "sources": [
      {
        "label": "P-38J-15 — War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/p-38j",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m3-20mm",
    "name": "20 mm M3 cannon",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ad-4-skyraider",
      "f9f-2-panther"
    ],
    "notes": "Four wing-mounted 20 mm M3 cannons on the AD-4 with 796 rounds total, effective against ground targets and aircraft.",
    "sources": [
      {
        "label": "AD-4 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/douglas_ad_4",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn-type-63-85mm",
    "name": "85 mm Type 63 cannon",
    "type": "cannon",
    "caliberMm": 85,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "cn-type-63"
    ],
    "notes": "Rifled 85 mm main gun mounted in the Type 63 amphibious tank's turret, sharing its lineage with the Type 62. Notable in-game for access to a HEAT-FS round that gives strong penetration despite the tank's light weight. Reload is roughly 9.2 s stock and 7 s aced.",
    "sources": [
      {
        "label": "Type 63 | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_type_63_I",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn-m6-37mm",
    "name": "37 mm M6 cannon",
    "type": "cannon",
    "caliberMm": 37,
    "fireRateRpm": null,
    "muzzleVelocityMps": 884,
    "ammoTypeIds": [],
    "usedBy": [
      "cn-m3a3-stuart"
    ],
    "notes": "American 37 mm tank gun fitted to the M3/M5 Stuart family, including the Chinese M3A3. A small-calibre, fast-firing gun firing AP shot at about 884 m/s; effective against lightly armoured early targets but quickly outmatched by thicker armour. Reload is around 3.7 s stock and 2.9 s aced.",
    "sources": [
      {
        "label": "M3A3 Stuart (China) | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_m3a3_stuart",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn-pg87-25mm",
    "name": "25 mm PG87 cannon",
    "type": "autocannon",
    "caliberMm": 25,
    "fireRateRpm": 600,
    "muzzleVelocityMps": 1050,
    "ammoTypeIds": [],
    "usedBy": [
      "cn-pgz-04a"
    ],
    "notes": "Chinese 25 mm anti-aircraft autocannon, mounted as a quad installation on the PGZ04A. A bored-out derivative of the Soviet 23 mm Shilka gun lineage with higher muzzle velocity but a slower rate of fire; in War Thunder it lacks a dedicated APDS belt. Each barrel fires roughly 600 rounds per minute at about 1,050 m/s.",
    "sources": [
      {
        "label": "PGZ04A | War Thunder Wiki (unit page)",
        "url": "https://wiki.warthunder.com/unit/cn_pgz_04a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "105mm-l74",
    "name": "105 mm L74 cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "strv-103-0"
    ],
    "notes": "Fixed, autoloaded main gun of the Strv 103-0 S-tank; aimed by pitching the hull rather than traversing a turret. Reload around 4 seconds with the autoloader.",
    "sources": [
      {
        "label": "Strv 103-0 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sw_strv_103_0",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "75mm-lvkan-m37a",
    "name": "75 mm lvkan m/37 A",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "pvkv-ii"
    ],
    "notes": "Adapted Swedish 75 mm anti-aircraft gun mounted on the Pvkv II for its strong anti-tank performance; fires AP, APCBC and HE rounds. Base reload about 7.8 seconds, dropping to 6 seconds fully aced.",
    "sources": [
      {
        "label": "Pvkv II | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sw_pvkv_II",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "75mm-kan-strv-74",
    "name": "75 mm kan Strv 74",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "strv-74"
    ],
    "notes": "High-velocity 75 mm gun of the Strv 74 firing APCBC, HE and a potent slpprj m/49 APDS round. Base reload about 8.7 seconds, improving to 6.7 seconds when aced.",
    "sources": [
      {
        "label": "Strv 74 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sw_strv_74",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "90mm-m41",
    "name": "90 mm M41 cannon",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m48a1-patton"
    ],
    "notes": "Rifled 90 mm gun on the M48A1; ammo selection includes M332 APCR, M82 APCBC, M431 HEAT-FS, T142E3 HESH, M71 HE and M313 smoke. The official wiki unit page lists penetration but not muzzle velocity, so velocity is left unverified.",
    "sources": [
      {
        "label": "M48A1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m48a1_patton_III",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "106mm-m40a1c",
    "name": "106 mm M40A1C recoilless rifle",
    "type": "cannon",
    "caliberMm": 106,
    "fireRateRpm": 120,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m50-ontos"
    ],
    "notes": "Group of six recoilless rifles on the M50 Ontos; ammo is M344A1 HEAT and M361A1 HESH. The wiki page lists a 120 shots/min rate of fire and penetration values but not muzzle velocity, so velocity is left unverified.",
    "sources": [
      {
        "label": "M50 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m50_ontos",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "12.7mm-m2hb-mg",
    "name": "12.7 mm M2HB machine gun",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m2a2-light-tank"
    ],
    "notes": "Main armament of the M2A2 light tank, mounted in the left twin turret with a secondary 7.62 mm M1919A4. The wiki unit page does not list rate of fire or muzzle velocity, so both are left unverified.",
    "sources": [
      {
        "label": "M2A2 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/us_m2a2",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ofqf-20pdr-mk1-84mm",
    "name": "84 mm 20-pounder OQF Mk.I",
    "type": "cannon",
    "caliberMm": 84,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "fv4202"
    ],
    "notes": "British 84 mm rifled tank gun firing AP and high-penetration APDS rounds; the FV4202 reloads it in 8.1 s (6.3 s aced).",
    "sources": [
      {
        "label": "FV4202 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/uk_fv4202",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "hss-831l-30mm",
    "name": "30 mm HSS 831L",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": 650,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "uk-falcon"
    ],
    "notes": "30 mm Hispano-Suiza automatic cannon; the Falcon mounts two of them, each cycling 650 rpm for a combined 1300 rpm.",
    "sources": [
      {
        "label": "Falcon | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/uk_falcon",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "ofqf-l1a2-120mm",
    "name": "120 mm Ordnance QF Tk. L1A2",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "uk-fv4004-conway"
    ],
    "notes": "British 120 mm rifled gun firing high-penetration APDS and HESH; two-piece ammunition gives the Conway a long 19.4 s reload (14.9 s aced).",
    "sources": [
      {
        "label": "Conway | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/uk_fv4004_conway",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "25mm-oerlikon-kba-b02",
    "name": "25 mm Oerlikon KBA B02 cannon",
    "type": "autocannon",
    "caliberMm": 25,
    "fireRateRpm": 560,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "type-87-rcv"
    ],
    "notes": "Belt-fed autocannon with an APFSDS belt that lets the Type 87 RCV penetrate the sides and rears of many vehicles at its BR. The vehicle page does not list a single in-game muzzle velocity, as it varies by belt.",
    "sources": [
      {
        "label": "Type 87 RCV | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_type_87_rcv",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "75mm-type-3-cannon",
    "name": "75 mm Type 3 cannon",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ho-ni-iii"
    ],
    "notes": "Single-shot 75 mm gun on the Ho-Ni III with a base reload of about 6.5 s. It is also the main gun family of the Chi-Nu. The vehicle page lists reload rather than a fixed rate of fire, and muzzle velocity varies by shell.",
    "sources": [
      {
        "label": "Ho-Ni III | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_type_3_ho_ni_III",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "90mm-m3a1-cannon",
    "name": "90 mm M3A1 cannon",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "st-a1"
    ],
    "notes": "Single-shot 90 mm gun on the ST-A1 with a base reload of about 9.7 s and access to HEAT-FS. The vehicle page lists reload rather than a fixed rate of fire, and muzzle velocity varies by shell.",
    "sources": [
      {
        "label": "ST-A1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/jp_st_a1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "2a28-grom-73mm",
    "name": "73 mm 2A28 Grom",
    "type": "cannon",
    "caliberMm": 73,
    "fireRateRpm": 10,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "bmp-1"
    ],
    "notes": "Low-pressure smoothbore semi-automatic gun firing fin-stabilised HEAT and HE rounds; fed by a magazine giving a fixed roughly 6-second reload cycle. Primarily relies on HEATFS for anti-armour work, paired on the BMP-1 with a 9M14 Malyutka ATGM launcher.",
    "sources": [
      {
        "label": "BMP-1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_bmp_1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps",
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d-10t2s-100mm",
    "name": "100 mm D-10T2S",
    "type": "cannon",
    "caliberMm": 100,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "t-55a"
    ],
    "notes": "Two-plane stabilised 100 mm rifled tank gun used on the T-55A, with a base reload of about 9.7 seconds dropping to roughly 7.5 seconds with an aced crew. Fires APHE, APDS, and HEATFS rounds for flexible anti-armour engagement.",
    "sources": [
      {
        "label": "T-55A | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_t_55a",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps",
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "d-5s-85mm",
    "name": "85 mm D-5S",
    "type": "cannon",
    "caliberMm": 85,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "su-85"
    ],
    "notes": "85 mm rifled gun mounted in the SU-85's fixed casemate, with a base reload near 9.6 seconds shortening to about 7.4 seconds when aced. Fires APHE and APCR rounds capable of defeating most armour at its battle rating.",
    "sources": [
      {
        "label": "SU-85 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/ussr_su_85_1943",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps",
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "cn105-f2-105mm",
    "name": "105 mm CN105 F2 cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "amx-10rc"
    ],
    "notes": "Medium-pressure 105 mm gun fitted to the AMX-10RC, firing APFSDS and HEATFS rounds; it is not fully stabilised. In-game muzzle velocity and fire rate were not cleanly readable from the wiki render and are left unverified.",
    "sources": [
      {
        "label": "AMX-10RC | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_amx_10rc",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sa35-l32-47mm",
    "name": "47 mm SA35 L/32 cannon",
    "type": "cannon",
    "caliberMm": 47,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "b1-bis",
      "somua-s35"
    ],
    "notes": "French 47 mm interwar tank gun used in the turret of the B1 bis and as the main gun of the SOMUA S.35, firing armour-piercing and high-explosive shells. In-game muzzle velocity and fire rate were not cleanly readable from the wiki render and are left unverified.",
    "sources": [
      {
        "label": "S.35 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_somua_s35",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "B1 bis | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_b1_bis",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "sa35-l17-75mm",
    "name": "75 mm SA35 L/17 cannon",
    "type": "cannon",
    "caliberMm": 75,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "b1-bis"
    ],
    "notes": "Hull-mounted 75 mm gun on the B1 bis, primarily used for high-explosive fire against soft targets. In-game muzzle velocity and fire rate were not cleanly readable from the wiki render and are left unverified.",
    "sources": [
      {
        "label": "B1 bis | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/fr_b1_bis",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mg-151-20mm",
    "name": "MG 151 (20 mm)",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 700,
    "muzzleVelocityMps": 705,
    "ammoTypeIds": [],
    "usedBy": [
      "me-410-a-1",
      "do-217-e-4",
      "hs-129-b-2"
    ],
    "notes": "Standard German 20 mm autocannon used as forward-firing armament across many Luftwaffe aircraft. Effective against fighters and light targets with mineshell belts.",
    "sources": [
      {
        "label": "Me 410 A-1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/me-410a-1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "mg-17-7mm",
    "name": "MG 17 (7.92 mm)",
    "type": "machine-gun",
    "caliberMm": 7.92,
    "fireRateRpm": 1200,
    "muzzleVelocityMps": 905,
    "ammoTypeIds": [],
    "usedBy": [
      "me-410-a-1",
      "hs-129-b-2"
    ],
    "notes": "Light 7.92 mm machine gun commonly mounted alongside heavier cannons on early and mid-war German aircraft for ranging and supplementary fire.",
    "sources": [
      {
        "label": "Me 410 A-1 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/me-410a-1",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "47-32-mod35",
    "name": "47 mm 47/32 mod.35 cannon",
    "type": "cannon",
    "caliberMm": 47,
    "fireRateRpm": null,
    "muzzleVelocityMps": 630,
    "ammoTypeIds": [],
    "usedBy": [
      "m14-41"
    ],
    "notes": "Italian 47 mm anti-tank gun firing APHE rounds (Granata Perforante mod.35 and mod.39). Effective against light and medium armour at close to medium range but limited penetration against heavier or angled targets.",
    "sources": [
      {
        "label": "M14/41 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_m14_41",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "90-53-mod41",
    "name": "90 mm 90/53 mod.41 cannon",
    "type": "cannon",
    "caliberMm": 90,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "semovente-90-53-m41m"
    ],
    "notes": "Italian 90 mm gun adapted from the 90/53 anti-aircraft cannon, firing APCBC and HE shells. Hard-hitting with strong penetration for its battle rating, but saddled with a long reload.",
    "sources": [
      {
        "label": "90/53 M41M | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_semovente_m41m_90",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "oerlikon-kba-b02-25mm",
    "name": "25 mm Oerlikon KBA B02 cannon",
    "type": "autocannon",
    "caliberMm": 25,
    "fireRateRpm": 560,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "dardo-vcc"
    ],
    "notes": "Fully stabilised 25 mm autocannon with belts including APDS, HEI-T and APFSDS rounds, fed from a 100-round belt. Effective against light vehicles, exposed crews and aircraft.",
    "sources": [
      {
        "label": "Dardo | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/it_dardo_vcc",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m39a1-20mm",
    "name": "20 mm M39A1 cannon",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "f-100d"
    ],
    "notes": "Revolver cannon mounted in groups of four in the nose of the F-100D, sharing 800 rounds total.",
    "sources": [
      {
        "label": "F-100D | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/f-100d",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m4-37mm",
    "name": "37 mm M4 cannon",
    "type": "cannon",
    "caliberMm": 37,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "p-39n-0-airacobra"
    ],
    "notes": "Hub-mounted 37 mm cannon firing through the propeller spinner of the P-39N with 30 rounds; hard-hitting but low velocity.",
    "sources": [
      {
        "label": "P-39N-0 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/p-39n",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "m2-browning-12.7mm",
    "name": "12.7 mm M2 Browning machine gun",
    "type": "machine-gun",
    "caliberMm": 12.7,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "p-39n-0-airacobra"
    ],
    "notes": "Two nose-mounted 12.7 mm Browning machine guns on the P-39N with 400 rounds total.",
    "sources": [
      {
        "label": "P-39N-0 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/p-39n",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "browning-7.62mm",
    "name": "7.62 mm Browning machine gun",
    "type": "machine-gun",
    "caliberMm": 7.62,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "p-39n-0-airacobra"
    ],
    "notes": "Four wing-mounted 7.62 mm Browning machine guns on the P-39N with 1,200 rounds total.",
    "sources": [
      {
        "label": "P-39N-0 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/p-39n",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "fireRateRpm",
      "muzzleVelocityMps"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  }
];
