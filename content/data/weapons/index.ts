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
      "bf-109-f-4"
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
    "name": "105 mm CN105F1",
    "type": "cannon",
    "caliberMm": 105,
    "fireRateRpm": null,
    "muzzleVelocityMps": null,
    "ammoTypeIds": [],
    "usedBy": [
      "m51-isherman"
    ],
    "notes": "A 105 mm rifled gun fitted to the M-51. Its standout round in game is the OCC 105 F1 HEAT-FS shell, which the wiki lists at a flat 400 mm of penetration unchanged across every range bracket (10 m through 2000 m), so it threatens most of its peers at any distance. As a chemical-energy round it loses effectiveness against spaced armour, angled plates and modern protection rather than dropping off with range. Two further rounds are available: the OE 105 F1 Mle.60 HE (25 mm) and the OFPH 105 F1 smoke shell (3 mm). Reload runs from 9.7 s with a stock crew down to 7.5 s with an aced crew, so shot selection matters. Rate of fire and muzzle velocity are not published on the Tier-1 wiki page and are left as gaps.",
    "sources": [
      {
        "label": "M-51 | War Thunder Wiki",
        "url": "https://wiki.warthunder.com/unit/il_m_51",
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
      "macchi-c202"
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
  }
];
