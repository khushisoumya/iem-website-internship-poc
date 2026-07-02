// Centralized image references.
//
// LOCAL-FIRST: drop a file named after any key below (e.g. `heroCampus.png`,
// `programEngineering.jpg`) into src/assets/images/ and it is picked up
// automatically — no code change required. Supported extensions: png, jpg,
// jpeg, webp, avif. When no local file exists, the Unsplash fallback keeps the
// layout rendering with realistic imagery at the right aspect ratios.
const u = (id, w = 1200, h = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`

// Eagerly resolve every image in the assets folder to its final built URL and
// index it by base filename (without extension).
const localModules = import.meta.glob(
  '../assets/images/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
)
const local = {}
for (const [path, url] of Object.entries(localModules)) {
  const base = path.split('/').pop().replace(/\.[^.]+$/, '')
  local[base] = url
}

// key → Unsplash fallback. A local file named `<key>.<ext>` overrides it.
const fallbacks = {
  heroCampus: u('photo-1562774053-701939374585', 1600, 1000), // university building
  aboutVideo: u('photo-1523240795612-9a054b0db644', 1000, 700), // students / campus life
  programEngineering: u('photo-1581094794329-c8112a89af12', 800, 560),
  programManagement: u('photo-1497366216548-37526070297c', 800, 560),
  programHotel: u('photo-1551632436-cbf8dd35adfa', 800, 560),
  programBca: u('photo-1517245386807-bb43f82c33c4', 800, 560),
  programLaw: u('photo-1589829545856-d10d557cf95f', 800, 560),
  placementTeam: u('photo-1522071820081-009f0129c71c', 1000, 700),
  campusLabs: u('photo-1581092160562-40aa08e78837', 700, 520),
  campusLibrary: u('photo-1521587760476-6c12a4b040da', 700, 520),
  campusInnovation: u('photo-1531545514256-b1400bc00f31', 700, 520),
  campusSports: u('photo-1461896836934-ffe607ba8211', 700, 520),
  campusHostel: u('photo-1555854877-bab0e564b8d5', 700, 520),
  campusLife: u('photo-1523240795612-9a054b0db644', 700, 520), // students / campus life
  testimonial: u('photo-1507003211169-0a1dd7228f2d', 200, 200),
  // Fest imagery — local cultural.png / tech.png override these fallbacks.
  cultural: u('photo-1470229722913-7c0e2dbbafd3', 1000, 700), // cultural fest crowd
  tech: u('photo-1531482615713-2afd69097998', 1000, 700), // techno-management fest
  research: u('photo-1532094349884-543bc11b234d', 800, 560), // research / laboratory
}

export const IMAGES = Object.fromEntries(
  Object.entries(fallbacks).map(([key, fallback]) => [key, local[key] || fallback]),
)
