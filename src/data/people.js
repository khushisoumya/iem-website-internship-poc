// Indian-person portrait imagery used by every testimonial across the site.
//
// LOCAL-FIRST (same convention as data/images.js): drop a file named after any
// key below — e.g. `person-m1.jpg`, `person-f2.png` — into src/assets/images/
// and it overrides the Unsplash fallback automatically, no code change needed.
// Supported extensions: png, jpg, jpeg, webp, avif.
//
// Every fallback below is a free-to-use Unsplash portrait of an Indian person,
// cropped square to faces so it reads cleanly in the small circular avatars.

// Square, face-cropped portrait sized for avatar circles.
const u = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&crop=faces&w=256&h=256&q=80`

// Eagerly resolve any local override files and index them by base filename.
const localModules = import.meta.glob(
  '../assets/images/person-*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
)
const local = {}
for (const [path, url] of Object.entries(localModules)) {
  const base = path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase()
  local[base] = url
}

// key → Unsplash fallback (Indian portraits). A local `<key>.<ext>` wins.
const fallbacks = {
  'person-m1': u('photo-1649433658557-54cf58577c68'), // young man, beard, smiling
  'person-m2': u('photo-1778692258270-bc0e80e975c0'), // man, glasses & jacket
  'person-m3': u('photo-1779281128550-8cc634361a17'), // man, polo, smiling
  'person-m4': u('photo-1607346256330-dee7af15f7c5'), // man, dark jacket
  'person-f1': u('photo-1536766768598-e09213fdcf22'), // woman, headscarf
  'person-f2': u('photo-1654436200209-de489ed205df'), // woman, sari
  'person-f3': u('photo-1463335361701-e90f4c5045d0'), // woman, floral scarf, smiling
  'person-f4': u('photo-1767607740661-05e668190cdc'), // young woman, earrings
  'person-f5': u('photo-1747264464985-2bc2e20c739e'), // woman, looking to camera
  'person-f6': u('photo-1761125135357-99cbe52a6271'), // woman, traditional wear, smiling
}

// Resolve every key to its final URL (local override → Unsplash fallback).
export const PORTRAITS = Object.fromEntries(
  Object.entries(fallbacks).map(([key, fallback]) => [key, local[key] || fallback]),
)

// Look up a portrait by key, e.g. portrait('person-m1'). Falls back to the
// first male portrait if an unknown key is passed so avatars never break.
export const portrait = (key) => PORTRAITS[key] ?? PORTRAITS['person-m1']

// Convenience groupings for iterating in order.
export const MEN = ['person-m1', 'person-m2', 'person-m3', 'person-m4'].map(portrait)
export const WOMEN = [
  'person-f1', 'person-f2', 'person-f3', 'person-f4', 'person-f5', 'person-f6',
].map(portrait)
