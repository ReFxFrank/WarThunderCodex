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
  }
];
