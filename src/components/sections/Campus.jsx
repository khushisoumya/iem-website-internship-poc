import { Plus } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import campusLabs from '../../assets/images/campus-labs.png'
import campusLibrary from '../../assets/images/campus-library.png'
import campusInnovation from '../../assets/images/campus-innovation.png'
import campusSports from '../../assets/images/campus-sports.png'
import campusHostel from '../../assets/images/campus-hostel.png'

const cards = [
  { title: 'Modern Labs', desc: 'State-of-the-art laboratories for hands-on discovery.', image: campusLabs },
  { title: 'Central Library', desc: 'A knowledge hub with vast digital and print resources.', image: campusLibrary },
  { title: 'Innovation Hub', desc: 'Where ideas transform into real-world products.', image: campusInnovation },
  { title: 'Sports Complex', desc: 'World-class facilities promoting fitness and teamwork.', image: campusSports },
  { title: 'Hostel Facilities', desc: 'Comfortable, secure living spaces that feel like home.', image: campusHostel },
]

export default function Campus() {
  return (
    <section id="campus" className="container-x py-16 lg:py-20">
      <SectionHeader eyebrow="Campus Life" title="Explore Our Vibrant Campus" />

      {/* Expanding accordion — hover a panel to expand it while the others
          gracefully squeeze. Falls back to a stacked layout on mobile. */}
      <div className="mt-10 flex flex-col gap-3 lg:h-[460px] lg:flex-row">
        {cards.map((card, i) => (
          <article
            key={card.title}
            className="group relative min-h-[220px] overflow-hidden rounded-2xl shadow-soft transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:min-h-0 lg:basis-0 lg:grow lg:hover:grow-[3.2]"
          >
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent transition-opacity duration-500 group-hover:from-brand-navy/85" />

            {/* index badge */}
            <span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-[13px] font-bold text-white backdrop-blur-sm transition-all duration-500 group-hover:rotate-90 group-hover:border-brand-gold group-hover:text-brand-gold">
              <Plus size={16} />
            </span>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-display text-[16px] font-bold text-white lg:whitespace-nowrap">
                {card.title}
              </h3>
              {/* description reveals as the panel expands */}
              <p className="mt-1 max-w-xs text-[12.5px] leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:opacity-100 lg:max-h-0 lg:group-hover:mt-1.5 lg:group-hover:max-h-24">
                {card.desc}
              </p>
              <span className="mt-2.5 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-gold opacity-0 transition-all duration-500 group-hover:opacity-100">
                Discover more
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
