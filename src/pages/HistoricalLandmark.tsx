import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Star, Users, Building2 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PROPERTY } from '@/lib/propertyData';

const FAMOUS_GUESTS = [
  { name: 'Eleanor Roosevelt', note: 'First Lady, diplomat, and humanitarian' },
  { name: 'Knute Rockne', note: 'Legendary Notre Dame football coach' },
  { name: 'Al Capone', note: 'Notorious Chicago prohibition-era figure' },
  { name: 'Truman Capote', note: 'Celebrated American author' },
];

const MILESTONES = [
  { year: '1825', text: 'Congress approved funds to build a road along the old Sauk Trail connecting Detroit to Chicago.' },
  { year: '1829', text: 'Amanson Huston rented a log cabin—Niles\u2019 first tavern and meeting place was established.' },
  { year: '1831', text: 'Niles became a stage coach stop at Pawating Crossing and an important river boat stop.' },
  { year: '1867', text: 'The Pike Hotel was built on the corner of Main and Fourth Streets—the present Four Flags site.' },
  { year: '1922', text: 'The Pike Hotel closed. Niles businessmen formed the Niles Hotel Corporation.' },
  { year: '1926', text: 'The Four Flags Hotel opened on July 6—billed as the most modern hotel in the area.' },
  { year: '1929', text: 'Residents gathered on the hotel roof to watch the Graf Zeppelin fly over on its historical trip around the world.' },
  { year: 'Today', text: 'Reborn as 404 East Main, home to 47 apartments continuing to serve downtown Niles.' },
];

const HistoricalLandmark = () => {
  useSeoMeta({
    title: 'Historical Landmark — 404 E Main Street, Niles, MI',
    description:
      'The history of the Four Flags Hotel at 404 E Main Street, Niles, MI—from its 1926 opening to its Centennial. Famous guests, the Niles Hotel Corporation, architect Charles W. Nicol, and a century of stories.',
    ogTitle: 'Historical Landmark — 404 E Main Street, Niles, MI',
    ogDescription:
      'A century of history at the former Four Flags Hotel in downtown Niles, MI—famous guests, historic milestones, and its continuing role in the community.',
    ogImage: `${PROPERTY.url}/404-main-st.jpeg`,
    ogUrl: `${PROPERTY.url}/historical-landmark`,
    ogType: 'website',
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={PROPERTY.heroImage} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="container py-16 sm:py-24">
          <nav className="text-sm text-primary-foreground/60" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Historical Landmark</span>
          </nav>
          <div className="mx-auto mt-6 max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Star className="size-3.5" />
              A Century of Stories
            </span>
            <h1 className="mt-5 font-serif font-bold leading-tight text-balance text-primary-foreground">
              <span className="text-5xl sm:text-6xl">404</span>{' '}
              <span className="text-3xl sm:text-4xl">East Main Street</span>
            </h1>
            <p className="mt-4 font-serif text-xl text-accent sm:text-2xl">
              The Four Flags Hotel — A Historical Landmark
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              404 East Main St. has sheltered thousands of guests over its storied history. The
              Four Flags Hotel building turned 100 years old on Monday, July 6, 1926—a historic
              milestone for downtown Niles.
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="container py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, value: '1926', label: 'Year Opened' },
            { icon: Building2, value: '100', label: 'Original Rooms' },
            { icon: Users, value: '47', label: 'Apartments Today' },
            { icon: Star, value: '100+', label: 'Years of History' },
          ].map((fact) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.label}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="size-6" />
                </div>
                <div className="mt-4 font-serif text-3xl font-bold text-primary">
                  {fact.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {fact.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The building story */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              The Building
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Considered the Most Modern Hotel in the Area
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                The Four Flags Hotel building, 404 E. Main St., turned 100 years old on Monday,
                July 6, 1926. Considered the most modern hotel in the area during the 1920s, it
                boasted 100 rooms and conveniences such as a grand Queen Anne Ballroom, a modern
                elevator, and a telephone switchboard with a direct line to the Niles train depot.
              </p>
              <p>
                The hotel switchboard was one of the first of its kind installed by Michigan Bell
                in the 1920s and was one of the last of its kind operating in the state during the
                1990s.
              </p>
              <p>
                Today, 404 East Main is residence to 47 apartments of varying sizes rather than the
                original 100 hotel rooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Construction & origins */}
      <section className="container py-20 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Construction & Origins
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              A $350,000 Vision of Poured Concrete
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                According to historical records, Niles Hotel Corporation raised $350,000 to build a
                hotel on the site of the Pike House hostelry. Chicago architect Charles W. Nicol
                designed the hotel. Billed as a &ldquo;fireproof&rdquo; hotel, virtually all of the
                construction was poured concrete.
              </p>
              <p>
                The hotel was the first business to adopt the name &ldquo;Four Flags&rdquo; and
                served as the cultural center of Niles for most of the 20th Century. The hotel was
                managed by C.L. Holden and room rates were $2.00 and $3.50.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={PROPERTY.heroImage}
              alt="The historic Four Flags Hotel at 404 E Main Street, Niles"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Famous guests */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Famous Guests
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Who Walked These Halls
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">
              For 100 years, the Four Flags Hotel has been part of the story of Downtown Niles—hosting
              famous guests and serving as the backdrop for countless memories.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FAMOUS_GUESTS.map((guest) => (
              <div
                key={guest.name}
                className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Star className="size-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-primary-foreground">
                  {guest.name}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/65">{guest.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hotel History
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Two Centuries of Niles Hospitality
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative space-y-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-border sm:before:left-[15px]">
            {MILESTONES.map((item) => (
              <li key={item.year} className="relative flex gap-5 sm:gap-7">
                <div className="relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background sm:size-8 sm:border-4">
                  <span className="hidden size-2 rounded-full bg-accent sm:block" />
                </div>
                <div className="flex-1 pb-2">
                  <span className="font-serif text-xl font-bold text-accent">{item.year}</span>
                  <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The long history narrative */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              The Long History
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              From Stage Coaches to a Modern Landmark
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Niles has a long and rich history of hotels. In 1825, Congress approved funds to
                build a road along the old Sauk Trail connecting Detroit to Chicago. In 1829,
                Amanson Huston rented a log cabin, and the first tavern and meeting place in Niles
                was established. By 1831, Niles was a stage coach stop before crossing the St.
                Joseph River at Pawating Crossing and an important river boat stop before
                progressing on to St. Joseph, Michigan.
              </p>
              <p>
                Often, as many as 15 stage coaches per day arrived in Niles and the demand for
                hotels and taverns was great. Niles continued to grow up the Main Street hill, and
                hotels like the Michigan Inn, the American Hotel, and the Union Hotel began to fill
                the town with excitement and travelers.
              </p>
              <p>
                In 1867, the Pike Hotel was built on the corner of Main and Fourth Streets, the
                present location of the Four Flags Hotel. Owned by Horace Pike, the three-story
                brick hotel housed many famous people and was in operation until 1922.
              </p>
              <p>
                At that time, the desire for a newer, more modern hotel was felt by a group of Niles
                businessmen. The Niles Hotel Corporation was formed, and in 1926, the Four Flags
                Hotel became a reality. The hotel hosted famous figures including Eleanor
                Roosevelt, Knute Rockne, Truman Capote, Al Capone, and many visiting Notre Dame
                opponents.
              </p>
              <p>
                On July 20, 1926, Fred Green became the first politician to give a speech at the
                Four Flags and later became Governor of Michigan. In 1927, screen actor Herbert
                Rawlinson reported on his experiences while in Niles. Charles Renner, proprietor of
                the Four Flags from 1928 to 1931, was also a member of the &ldquo;Rough Rider&rdquo;
                regiment of the 1st United States Volunteer Cavalry led by Col. Theodore Roosevelt
                at San Juan Hill during the Spanish-American War.
              </p>
              <p>
                On August 28, 1929, many Niles residents went to the Four Flags Hotel roof to watch
                the &ldquo;Graf Zeppelin&rdquo; fly over on its historical trip around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Centennial reflection */}
      <section className="relative isolate overflow-hidden bg-primary py-20 text-center text-primary-foreground sm:py-28">
        <div className="absolute inset-0 -z-10 opacity-15">
          <img src={PROPERTY.heroImage} alt="" className="size-full object-cover" />
        </div>
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Celebrating the Centennial
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">
              Today, known as 404 East Main St, it continues to serve Niles with convenient housing.
              As we celebrate its Centennial, we&rsquo;re celebrating not just its history, but the
              important role it continues to play in downtown Niles.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link to="/property">
                  View Apartment Details
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent/50 bg-transparent text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Link to="/contact">
                  Apply to Live Here
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HistoricalLandmark;
