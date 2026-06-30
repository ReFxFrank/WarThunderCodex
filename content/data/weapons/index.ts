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
      "t-34-85-1944"
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
      "m4a1-sherman"
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
      "bf-109-f-4"
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
      "ju-87-b-2"
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
    "name": "20 mm Hispano Mk II",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 600,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "spitfire-mk-vb"
    ],
    "notes": "A hard-hitting 20 mm autocannon firing at 600 shots/min with a modest 60-round-per-gun magazine (120 rounds total across both cannons on the Spitfire Mk Vb), rewarding short, well-aimed bursts over sustained fire. Paired with rifle-calibre machine guns, it delivers strong damage per hit but demands trigger discipline to avoid running dry. In-game belt options include Default, Universal, Air targets, Ground targets, Tracers, and Stealth.",
    "sources": [
      {
        "label": "Spitfire Mk Vb unit page — wiki.warthunder.com",
        "url": "https://wiki.warthunder.com/unit/spitfire_mk5b_notrop",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      }
    ],
    "unverified": [
      "muzzleVelocityMps",
      "ammoTypeIds"
    ],
    "lastVerified": "2026-06-30",
    "gameVersion": "Heavy Cavalry (2.57)"
  },
  {
    "id": "browning-303",
    "name": ".303 Browning",
    "type": "machine-gun",
    "caliberMm": 7.7,
    "fireRateRpm": 1000,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "spitfire-mk-vb"
    ],
    "notes": "A rifle-caliber (7.7 mm) machine gun with a high 1,000 rpm rate of fire but light individual rounds, so it relies on saturating fire from multiple guns rather than per-hit punch. Effective against unarmored and lightly armored aircraft but struggles to do meaningful damage at longer ranges or against sturdier targets. The Spitfire Mk Vb carries four of these, with selectable belts including Universal, Tracers, Stealth, and Ground targets. Muzzle velocity is not stated on the Tier-1 vehicle page.",
    "sources": [
      {
        "label": "Spitfire Mk Vb vehicle page (War Thunder Wiki)",
        "url": "https://wiki.warthunder.com/unit/spitfire_mk5b_notrop",
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
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "strv-m42"
    ],
    "notes": "The 75 mm Pvkan m/43 is the main gun of the Strv m/42 DT. Its in-game character rests on a fast reload rather than a high rate of fire, rewarding rapid, well-placed shots from a fragile but mobile flanker. The Tier-1 wiki vehicle page lists a reload time but no muzzle-velocity column or per-cannon rounds-per-minute figure, so both are left as honest gaps rather than estimated.",
    "sources": [
      {
        "label": "Strv m/42 DT — War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/sw_strv_m42_delat_torn",
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
    "id": "cn-105-f1",
    "name": "105 mm CN105 F1 cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m51-isherman",
      "amx-30"
    ],
    "notes": "French 105 mm rifled main gun of the CN-105-F1 family, fitted to the AMX-30 and (as a modified F1) to the Israeli M51 Sherman. The AMX-30 unit page prints the in-game name as '105 mm CN105 F1 cannon'. Its signature round is the OCC-105-F1 full-caliber HEAT shell. Per-shell muzzle velocities are not shown on the unit stat card, so muzzleVelocityMps is left null.",
    "sources": [
      {
        "label": "AMX-30 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/fr_amx_30",
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
      "m26-pershing"
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
      "churchill-vii"
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
      "a6m5-zero"
    ],
    "notes": "Belt-fed 20 mm autocannon mounted in the wings of the late-model Zero. It hits hard per shell but fires slowly, so it favours deliberate, well-led bursts rather than spray. The A6M5 carries two of these with 200 rounds total (100 per gun) at a fire rate of 490 rounds per minute. Muzzle velocity was not shown as a clean stat on the Tier-1 pages fetched and is left unverified.",
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
    "id": "type-97-7mm",
    "name": "7.7 mm Type 97",
    "type": "machine-gun",
    "caliberMm": 7.7,
    "fireRateRpm": 900,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "a6m5-zero"
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
    "name": "20 mm ShVAK",
    "type": "cannon",
    "caliberMm": 20,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "yak-3",
      "la-5fn"
    ],
    "notes": "Soviet 20 mm aircraft autocannon, the standard cannon armament of mid-war Yak and Lavochkin fighters. In-game fire rate is mount-dependent and therefore not a single value for this shared record: the synchronised fuselage mount on the Yak-3 reads 800 shots/min while the La-5FN installation reads 720 shots/min on their respective unit pages. Because the figure differs by host airframe, fireRateRpm is left null here rather than committing to one number.",
    "sources": [
      {
        "label": "20 mm ShVAK cannon | War Thunder Wiki (weaponry)",
        "url": "https://wiki.warthunder.com/collections/weapon/20mm_shvak",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "Yak-3 | War Thunder Wiki (armament fire rate: 800 shots/min)",
        "url": "https://wiki.warthunder.com/unit/yak-3",
        "tier": 1,
        "retrievedAt": "2026-06-30"
      },
      {
        "label": "La-5FN | War Thunder Wiki (armament fire rate: 720 shots/min)",
        "url": "https://wiki.warthunder.com/unit/la-5fn",
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
      "sbd-3-dauntless"
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
    "name": "105 mm Sharir cannon",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "merkava-mk-1"
    ],
    "notes": "The Merkava Mk.1 unit page names its main gun '105 mm Sharir cannon'. The Sharir is the Israeli-produced member of the M68/L7 105 mm family; the requested label was '105 mm M68', but the in-game name used here follows the official page. The id 'm68-105mm' is retained as requested. Per-shell muzzle velocities are not shown on the unit stat card, so muzzleVelocityMps is left null.",
    "sources": [
      {
        "label": "Merkava Mk.1 — War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/il_merkava_mk_1",
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
    "name": "20 mm M50",
    "type": "autocannon",
    "caliberMm": 20,
    "fireRateRpm": 750,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "ouragan"
    ],
    "notes": "A 20 mm autocannon of the Hispano lineage, mounted as a battery of four in the nose of the Israeli M.D.450B Ouragan. The unit page lists a fire rate of 750 rounds per minute and a combined 500-round ammunition pool, giving a heavy, concentrated burst at close range. The in-game entry is named M50 and is associated with the 20 mm Hispano 404 family; the page does not publish a muzzle velocity, so that value is left unverified.",
    "sources": [
      {
        "label": "War Thunder Wiki — M.D.450B (29) (Israel)",
        "url": "https://wiki.warthunder.com/unit/md_450b_ouragan_iaf_29",
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
      "crusader-mk-ii"
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
    "name": "30 mm DEFA 552",
    "type": "autocannon",
    "caliberMm": 30,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "mirage-iiic"
    ],
    "notes": "French 30 mm revolver-type aircraft autocannon; the Mirage IIIC mounts a pair of them (the unit page labels the exact in-game variant '30 mm DEFA 552A cannon'). The Mirage IIIC unit page does not list fire rate, per-gun/total ammunition count, or muzzle velocity, so those values are left null rather than guessed.",
    "sources": [
      {
        "label": "Mirage IIIC | War Thunder Wiki (official unit page)",
        "url": "https://wiki.warthunder.com/unit/mirage_3c",
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
    "id": "l11-120mm",
    "name": "120 mm L11",
    "type": "cannon",
    "caliberMm": 120,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "chieftain-mk-3"
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
  }
];
