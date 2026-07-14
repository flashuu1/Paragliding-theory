// data/theory.js
// Theory reference content for the paragliding study modal.
// Sources: EN 926, FAI/CIVL IPPI syllabus, ICAO Annex 2, EASA SERA, DHV/SHV materials.
window.THEORY = {
  lt: {
    "Aerodinamika": [
      {
        title: "Keliamoji jėga",
        body: "Keliamoji jėga atsiranda dėl dviejų efektų: oro srauto greičio skirtumo tarp profilio viršaus ir apačios (Bernulio principas) ir oro defleksijos žemyn (Niutono III dėsnis). Ji yra proporcinga oro tankiui (ρ), greičio kvadratui (v²), sparno plotui (S) ir keliamosios jėgos koeficientui (CL).",
        formula: "L = ½ · ρ · v² · S · CL"
      },
      {
        title: "Atakos kampas (AoA)",
        body: "Atakos kampas – kampas tarp profilio styginės linijos ir oro srauto krypties. Didėjant AoA, keliamoji jėga auga iki kritinio kampo (apie 8–12°). Peržengus kritinį kampą, oro srautas atsiskiria nuo viršutinio paviršiaus ir sparnas sukrenta (stall). Akseleratorius sumažina AoA ir padidina greitį.",
        formula: null
      },
      {
        title: "Pasipriešinimo jėgos (Drag)",
        body: "Induktyvusis pasipriešinimas (induced drag) yra keliamosios jėgos šalutinis efektas: didelis prie mažo greičio ir didelio AoA. Profilinis pasipriešinimas (profile drag) priklauso nuo sparno formos ir greičio kvadrato. Bendras pasipriešinimas = induktyvusis + profilinis.",
        formula: null
      },
      {
        title: "Poliarinė kreivė",
        body: "Poliarinė kreivė (polar) rodo horizontalaus greičio ir kritimo greičio ryšį. Geriausio sklandymo taškas – kur tiesė iš koordinačių pradžios liečia kreivę. Mažiausio kritimo taškas – pats žemiausias kreivės taškas. Akseleratoriaus paspaudimas perkelia darbinį tašką į dešinę (didesnis greitis, blogesnis sklandymo santykis).",
        formula: null
      },
      {
        title: "Sparno apkrova (Wing loading)",
        body: "Sparno apkrova = bendras skrydžio svoris / sparno plotas (kg/m²). Didesnis svoris padidina skrydžio greitį ir kritimo greitį, bet pablogina manevringumą mažuose greičiuose. Kiekvienas sparnas turi sertifikuotą svorio diapazoną – skristi anapus jo draudžiama.",
        formula: "WL = W / S (kg/m²)"
      },
      {
        title: "Sklandymo santykis",
        body: "Sklandymo santykis (glide ratio) = horizontalus atstumas / prarastas aukštis. Tipiškas modernus parasparnys pasiekia 8:1–10:1 (8–10 m į priekį per 1 m žemyn). Geriausias sklandymo santykis pasiekiamas ties trim (rankenėlės atlaisvintos) arba šiek tiek virš jo greičiu.",
        formula: "GR = d_horizontal / d_vertical"
      }
    ],
    "Meteorologija": [
      {
        title: "Standartinė atmosfera (ISA)",
        body: "ICAO standartinė atmosfera: jūros lygyje slėgis 1013,25 hPa, temperatūra +15°C. Temperatūros gradientas troposferoje: -6,5°C/km (arba apie -2°C/300 m). Tropopauzė apie 11 km. Kylant 1000 m, slėgis krenta ~12 hPa.",
        formula: "T = 15 − 6.5 × h_km (°C ISA)"
      },
      {
        title: "Termikai",
        body: "Termikai – šilto oro stulpeliai, kylantys nuo kaitinamos žemės. Geriausi tarp 11:00 ir 16:00. Žymenys: kumuliusiniai debesys (Cu), sauso žemės paviršiaus pakraščiai (laukai, automobilių aikštelės). Termalų stiprumas matuojamas m/s. Virš 1500–2500 m AGL susidaro Cu – reikia skraidyti žemiau jų pagrindo.",
        formula: null
      },
      {
        title: "Debesų tipai",
        body: "Cu (kumuliusiniai) – termalų viršūnės, tinkamos skrydžiui. Cb (kumulonimbai) – griaustinio debesys, labai pavojingi (kilimo srautai iki 30 m/s, krušos). St (sluoksniai) – žemi rūko tipo debesys. Ci (cirusiniai) – aukšti ledo debesys, nepavojingi pačiame skrydyje. Lentikuliniai – bangų žymė, neskraidyk arti.",
        formula: null
      },
      {
        title: "Vėjo gradientas ir pasluoksniai",
        body: "Žemiau 100 m AGL vėjas silpnėja dėl paviršiaus trinties. Startuojant su stipresniu vėju viršuje – rizika prarasti keliamąją jėgą. Vėjo šliūžė (wind shear) – staigus vėjo greičio ar krypties pasikeitimas – sukelia kolapsus. Fenas ir Bora – lokalūs stiprūs nusileidžiantys vėjai (ypač pavojingi).",
        formula: null
      },
      {
        title: "Inversija",
        body: "Inversija – atmosferos sluoksnis, kuriame temperatūra kyla su aukščiu (priešingai nei įprastai). Stabdo termalus – pilotas 'atsitrenkia į lubas'. Rytas po skaidrios nakties – dažna inversija žemai. Inversijos aukštis nurodomas AGL arba AMSL.",
        formula: null
      },
      {
        title: "Orografinė keliamoji jėga ir rotoriai",
        body: "Orografinė (kalno) keliamoji jėga – vėjas atsimuša į šlaitą ir kyla. Tinka dinaminiams skrydžiams prieš vėją. Rotoriai susidaro pavėjui nuo kalnų – chaotiška turbulencija, labai pavojinga. Skraidyti žemiau kalno viršaus leeward pusėje – draudžiama.",
        formula: null
      }
    ],
    "Medžiagos": [
      {
        title: "Kupolo sandara",
        body: "Parasparnio kupolas – dvigubo audinio (viršutinis ir apatinis paviršiai) konstrukcija su vidinėmis pjaustymo sienelėmis (cells). Priekinės angos (intakes) leidžia orui pildyti ląsteles ir sukurti slėgio profilį. Tipiškas modernus kupolas turi 50–80 ląstelių.",
        formula: null
      },
      {
        title: "Stropai ir rizeriai",
        body: "Stropai skirstomi pagal rizerius: A (priekiniai, pritraukia priekinį kraštą), B, C, D (galiniai). Stabdžių stropai (brake lines) jungiasi prie galinio krašto ir valdo aukštį bei kryptį. Rizeriai – plačios juostos jungiančios stropų grupes su petnešomis. Galiniai rizeriai jungiami prie akseleratoriaus sistemos.",
        formula: null
      },
      {
        title: "Sertifikavimas (EN 926 / LTF)",
        body: "EN 926-2 standartai klasifikuoja sparnus pagal skrydžio savybes: A – saugiausi (geri savaiminio pasitaisymo gebėjimai), B – saugesni pažengusiems pradedantiesiems, C – pažengusiems, D – ekspertams. CCC – varžybiniai be draudimų. Klasė rodo, kaip sparnas reaguoja į sukeltas avarines situacijas testų metu.",
        formula: null
      },
      {
        title: "Atsarginis parašiutas",
        body: "Metamas kraštutinės situacijos atveju (nevaldomas sukimasis, nekontroliuojama spiralė). Aktyvavimas: suimti rankenėlę (dažniausiai dešinėje), išmesti į šoną nuo kupolo, laukti atsiskleidimo. Po aktyvacijos: stebėti, ar pagrindinis kupolas neaptraukia atsarginio – jei taip, sutraukti pagrindinį.",
        formula: null
      },
      {
        title: "Prietaisai",
        body: "Variometras (varios): rodo kilimo/kritimo greitį m/s – svarbiausia termaliniame skrydžyje. Altimetras: aukštis AGL arba AMSL. GPS/varios: maršrutas, greitis, skrydžio statistika. Radijo stotis (handheld radio): komunikacija su skrydžio direktoriumi. Rekomenduojama naudoti oro juostą (airband).",
        formula: null
      }
    ],
    "Oro teisė": [
      {
        title: "Oro erdvės klasifikacija",
        body: "ICAO oro erdvės klasės Europoje: A (tik IFR, aukštas srautas), B (labai intensyvus srautas prie oro uostų), C (kontroliuojama, reikia ATC leidimo), D (kontroliuojama, reikia ryšio), E (kontroliuojama, VFR be leidimo), G ir F (nekontroliuojama, VFR be leidimo). Parasparniai dažniausiai skraido G klasėje.",
        formula: null
      },
      {
        title: "Pirmumo taisyklės (ICAO Annex 2)",
        body: "Susitinkantys orlaiviai – aplenkia dešinėje. Žemiau esantis (nusileidžiantis) pilotas turi pirmenybę prieš aukštesnį. Sukantis termikyje pilotas – turi pirmenybę prieš tiesiai skrendantį. Motorizuoti orlaiviai – leidžia kelią nemotorizuotiems (parasparniai = nemotorizuoti). Nusileidimo priartėjimas – žemiau esantis turi pirmenybę.",
        formula: null
      },
      {
        title: "NOTAM ir oro erdvės pakeitimai",
        body: "NOTAM (Notice to Airmen) – laikini oro erdvės pakeitimai, draudimai, renginiai. Tikrinti prieš kiekvieną skrydį per oficialiuosius kanalus (AIS Lietuva, SkyDemon, UAB ELSA). Kiekvienas registruotas pilotas privalo tikrinti NOTAM savo planuojamoje skrydžio zonoje.",
        formula: null
      },
      {
        title: "IPPI kortelė ir kvalifikacija",
        body: "IPPI (International Pilot Proficiency Identification) – FAI/CIVL išduodamas tarptautinis piloto lygio dokumentas (P1–P5). P2 – minimalus lygis savarankiškam skrydžiui daugelyje Europos skrydžių aikštelių. Parasparniai nepriklauso EASA aviacijos licencijų sistemai – naudojama nacionalinė arba IPPI sistema.",
        formula: null
      },
      {
        title: "VFR minimalios sąlygos ir draudžiamos zonos",
        body: "VFR (Visual Flight Rules) žemiau FL100: matomumas ≥5 km, atstumas nuo debesų – ≥300 m vertikaliai, ≥1500 m horizontaliai. Draudžiamos zonos: P (prohibited) – uždarytos visam civiliniam skrydžiui, R (restricted) – su sąlygomis, D (danger) – pavojingos veiklos zonos. CTR – kontrolinė zona aplink oro uostus.",
        formula: null
      }
    ],
    "Skraidymo praktika": [
      {
        title: "Startas (priekinė ir galinė kilpa)",
        body: "Priekinė kilpa (forward launch): pilotas veidu į nusileidimo pusę, traukia A-rizerius arba priekinius stropus, kupolas kyla per galvą. Galinė kilpa (reverse launch): pilotas veidu į kupolą, pasisuka skrydžio kryptimi, kai kupolas virš galvos. Startuoti visada prieš vėją (10–25 km/h optimalus).",
        formula: null
      },
      {
        title: "Tūpimas ir flair'as",
        body: "Baigiamasis priartėjimas visada prieš vėją. Flair (stabdymo manevras): 2–3 m AGL abiem rankomis tolygiai traukti stabdžius žemyn – tai sumažina kritimo greitį ir horizontalų greitį prieš žemę. Per anksti flairuojant – pilotas iškyla ir krenta. Per vėlai – kietas prisilietimas.",
        formula: null
      },
      {
        title: "Termalinis skrydis",
        body: "Termiko centravimas: sukti į pusę, kur varios padidėja. Siaurinti sukimo spindulį, kai pasiekta stipriausia zona. Palikti termiką: platus sukimasis į šoną ir skrydis iš jo. Big ears (ausys): A-rizeriais sulankstomi sparno kraštai – greičiau nusileisti iš per aukšto termiko.",
        formula: null
      },
      {
        title: "Avarinės situacijos",
        body: "Frontalinis kolapsas: paleisti stabdžius – sparnas paprastai pats atsistato. Asimetrinis kolapsas: svorio perkėlimas į atviro sparno pusę + moderate stabdis. Full stall: atleisti stabdžius simetriški, laukti reinfliacijos. Parašiutinis režimas (deep stall): atleisti stabdžius visiškai. Spiralė: atleisti stabdžius, atsigauti palaipsniui.",
        formula: null
      },
      {
        title: "SIV ir atsarginio metimas",
        body: "SIV (Simulation d'Incidents en Vol) – pratybos virš vandens su gelbėjimo laivu. Pilotai mokosi valdyti sukritimus, spiral dive, full stall, B-stall saugioje aplinkoje. Atsarginio aktyvavimas: 1) identifikuoti, 2) griebt rankenėlę, 3) mesti į šoną, 4) laukti atsiskleidimo, 5) jei pagrindinis aptraukia – suspausti pagrindinį.",
        formula: null
      }
    ]
  },
  en: {
    "Aerodynamics": [
      {
        title: "Lift",
        body: "Lift is generated by two effects: differential airflow speed between the upper and lower surfaces (Bernoulli principle) and downward deflection of air (Newton's 3rd Law). It is proportional to air density (ρ), velocity squared (v²), wing area (S), and lift coefficient (CL).",
        formula: "L = ½ · ρ · v² · S · CL"
      },
      {
        title: "Angle of Attack (AoA)",
        body: "AoA is the angle between the chord line and the direction of airflow. As AoA increases, lift increases up to the critical angle (approximately 8–12°). Beyond the critical angle, airflow separates from the upper surface and the wing stalls. The speed bar reduces AoA and increases airspeed.",
        formula: null
      },
      {
        title: "Drag",
        body: "Induced drag is a byproduct of lift production: high at low speeds and high AoA. Profile drag depends on wing shape and increases with the square of speed. Total drag = induced + profile. Drag is minimised at best glide speed.",
        formula: null
      },
      {
        title: "Polar Curve",
        body: "The polar curve shows the relationship between horizontal speed and sink rate. Best glide point is where a line from the origin is tangent to the curve. Minimum sink point is the lowest point on the curve. Using the speed bar shifts the working point right (faster but worse glide ratio).",
        formula: null
      },
      {
        title: "Wing Loading",
        body: "Wing loading = total flying weight / wing area (kg/m²). Higher loading increases both flying speed and sink rate but reduces manoeuvrability at low speeds. Every glider has a certified weight range — flying outside it is prohibited.",
        formula: "WL = W / S (kg/m²)"
      },
      {
        title: "Glide Ratio",
        body: "Glide ratio = horizontal distance / altitude lost. A typical modern paraglider achieves 8:1–10:1 (8–10 m forward per 1 m descent). Best glide ratio is achieved at trim speed (hands-up) or slightly above.",
        formula: "GR = d_horizontal / d_vertical"
      }
    ],
    "Meteorology": [
      {
        title: "International Standard Atmosphere (ISA)",
        body: "ICAO ISA: sea-level pressure 1013.25 hPa, temperature +15°C. Temperature lapse rate in troposphere: -6.5°C/km (approx. -2°C per 300 m). Tropopause at approximately 11 km. Every 1000 m gain in altitude reduces pressure by approximately 12 hPa.",
        formula: "T = 15 − 6.5 × h_km (°C ISA)"
      },
      {
        title: "Thermals",
        body: "Thermals are columns of warm rising air from heated ground surfaces. Best between 11:00 and 16:00. Indicators: cumulus clouds (Cu), edges of dry surface patches (fields, car parks). Thermal strength measured in m/s. Cumulus bases form at 1500–2500 m AGL — fly below cloud base.",
        formula: null
      },
      {
        title: "Cloud Types",
        body: "Cu (cumulus) — thermal tops, good for flying. Cb (cumulonimbus) — thunderstorm clouds, very dangerous (updrafts up to 30 m/s, hail). St (stratus) — low fog-like clouds. Ci (cirrus) — high-altitude ice clouds. Lenticular — wave cloud markers — avoid flying near them.",
        formula: null
      },
      {
        title: "Wind Gradient and Layers",
        body: "Wind speed decreases below 100 m AGL due to surface friction. Launching in light surface winds with stronger winds above risks sudden lift loss. Wind shear — sudden change in wind speed or direction — causes collapses. Foehn and Bora are local strong descending winds, particularly hazardous.",
        formula: null
      },
      {
        title: "Temperature Inversion",
        body: "An inversion is an atmospheric layer where temperature increases with altitude (opposite of normal). It suppresses thermals — pilots hit a 'ceiling'. Morning inversions after clear nights are common. Inversion altitude is stated as AGL or AMSL.",
        formula: null
      },
      {
        title: "Orographic Lift and Rotors",
        body: "Orographic (ridge) lift occurs when wind hits a slope and is deflected upward. Useful for soaring in front of ridges. Rotors form in the lee of hills and mountains — chaotic turbulence, very dangerous. Never fly below the hilltop on the leeward side.",
        formula: null
      }
    ],
    "Equipment": [
      {
        title: "Canopy Structure",
        body: "The paraglider canopy is a double-surface fabric (upper and lower) with internal cell walls. Front intakes allow air to pressurise cells and create the wing profile. A typical modern canopy has 50–80 cells. The upper surface is the extrados, the lower is the intrados.",
        formula: null
      },
      {
        title: "Lines and Risers",
        body: "Lines are categorised by riser: A (front — pull leading edge down), B, C, D (rear). Brake lines attach to the trailing edge and control pitch and direction. Risers are wide fabric strips connecting line groups to the harness. Rear risers connect to the speed system.",
        formula: null
      },
      {
        title: "Certification (EN 926 / LTF)",
        body: "EN 926-2 classifies gliders by flight behaviour: A — safest (good self-recovery), B — safer for progressing pilots, C — advanced pilots, D — experts. CCC — top competition class. The certification class reflects how the glider responds to induced emergency manoeuvres during standardised tests.",
        formula: null
      },
      {
        title: "Reserve Parachute",
        body: "Deployed in last-resort emergencies (uncontrolled rotation, uncontrolled spiral). Activation: grip the handle (usually right side), throw to the side away from the main canopy, wait for deployment. After deployment: check if the main canopy is wrapping the reserve — if so, bundle the main away.",
        formula: null
      },
      {
        title: "Instruments",
        body: "Variometer (vario): shows climb/sink rate in m/s — most important instrument in thermal flying. Altimeter: altitude AGL or AMSL. GPS/vario: track, groundspeed, and flight statistics. Radio: communication with flight director. Airband radio (118–137 MHz) recommended for mountain flying.",
        formula: null
      }
    ],
    "Air Law": [
      {
        title: "Airspace Classification",
        body: "ICAO airspace classes in Europe: A (IFR only, high traffic), B (very high traffic near airports), C (controlled, ATC clearance required), D (controlled, communication required), E (controlled, VFR without clearance), G and F (uncontrolled, VFR without clearance). Paragliders typically fly in Class G.",
        formula: null
      },
      {
        title: "Right of Way Rules (ICAO Annex 2)",
        body: "Converging aircraft: pass right. Lower (descending) pilot has priority over higher. Circling in a thermal: has priority over straight-flying pilot. Powered aircraft give way to unpowered (paragliders = unpowered). On final approach: lower pilot has priority.",
        formula: null
      },
      {
        title: "NOTAM and Temporary Restrictions",
        body: "NOTAM (Notice to Airmen) — temporary airspace changes, prohibitions, and special events. Must be checked before every flight via official channels (AIS Lithuania, SkyDemon). Every registered pilot is responsible for checking NOTAMs for their planned flight area.",
        formula: null
      },
      {
        title: "IPPI Card and Qualifications",
        body: "IPPI (International Pilot Proficiency Identification) — FAI/CIVL international pilot level document (P1–P5). P2 is the minimum level for solo flight at most European flying sites. Paragliders are not subject to EASA pilot licences — national or IPPI systems apply.",
        formula: null
      },
      {
        title: "VFR Minima and Prohibited Zones",
        body: "VFR below FL100: visibility ≥5 km, cloud clearance ≥300 m vertically, ≥1500 m horizontally. Prohibited zones: P (prohibited) — closed to all civil flight, R (restricted) — conditional access, D (danger) — dangerous activity zones. CTR = control zone around airports.",
        formula: null
      }
    ],
    "Flight Practice": [
      {
        title: "Launch Techniques",
        body: "Forward launch: pilot faces the landing direction, pulls A-risers or front lines, canopy rises overhead. Reverse launch: pilot faces the canopy, then turns when the canopy is overhead. Always launch into wind (10–25 km/h optimal).",
        formula: null
      },
      {
        title: "Landing and Flare",
        body: "Final approach always into wind. Flare: at 2–3 m AGL pull both brakes progressively downward — this reduces both sink rate and horizontal speed before touchdown. Flaring too early: pilot balloons up then drops. Flaring too late: hard landing.",
        formula: null
      },
      {
        title: "Thermal Flying",
        body: "Centering in a thermal: turn toward the side where the vario increases. Tighten the turn radius when in the strongest lift zone. Leaving a thermal: widen the turn and fly out. Big ears: fold in wingtips using A-risers to increase descent rate when too high.",
        formula: null
      },
      {
        title: "Emergency Situations",
        body: "Frontal collapse: release brakes — wing usually self-recovers. Asymmetric collapse: weight shift to open side + moderate brake on open side. Full stall: release brakes symmetrically, wait for reinflation. Parachute mode (deep stall): release brakes completely. Spiral: release brakes, recover gradually.",
        formula: null
      },
      {
        title: "SIV and Reserve Deployment",
        body: "SIV (Simulation d'Incidents en Vol) — training over water with a rescue boat. Pilots practise managing collapses, spiral dives, full stalls, and B-stalls safely. Reserve deployment: 1) identify situation, 2) grip handle, 3) throw to the side, 4) wait for deployment, 5) if main wraps reserve — bundle main away.",
        formula: null
      }
    ]
  }
};
