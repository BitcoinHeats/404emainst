import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Check } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { FeatureIcon } from '@/components/FeatureIcon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PROPERTY, FEATURES, AUDIENCES, STATS } from '@/lib/propertyData';

const UNIT_AMENITIES = [
  'Private restroom in every unit',
  'Refrigerator included',
  'Individual heating unit',
  'Updated finishes & fixtures',
  'Modernized mechanical systems',
  'Recently renovated',
];

const LOCATION_PERKS = [
  'Heart of downtown Niles',
  'Steps to dining & shopping',
  'Walk to local entertainment',
  'Less than 5 miles to Indiana state line',
  'Minutes from US 12 and US 31',
  'Serves the greater Michiana area',
];

const PropertyDetails = () => {
  useSeoMeta({
    title: 'Apartment Details — 404 E Main Street, Niles, MI',
    description:
      'Full property details for 404 E Main Street: a historic 48-unit multifamily residence in downtown Niles, MI with 94% occupancy, ample parking, and a prime walkable location.',
    ogTitle: 'Apartment Details — 404 E Main Street, Niles, MI',
    ogDescription:
      'A historic 48-unit multifamily residence in downtown Niles, MI with 94% occupancy, ample parking, and a prime walkable location.',
    ogImage: PROPERTY.heroImage,
    ogType: 'website',
  });

  return (
    <Layout>
      {/* Page header */}
      <section className="relative isolate overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-25">
          <img src={PROPERTY.heroImage} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="container py-16 sm:py-20">
          <nav className="text-sm text-primary-foreground/60" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Apartment Details</span>
          </nav>
          <div className="mt-5 max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <MapPin className="size-3.5" />
              {PROPERTY.tagline}
            </span>
            <h1 className="mt-5 font-serif font-bold leading-tight text-balance text-primary-foreground">
              <span className="text-5xl sm:text-6xl">404</span>{' '}
              <span className="text-3xl sm:text-4xl">East Main Street</span>
            </h1>
            <p className="mt-3 font-serif text-xl text-accent sm:text-2xl">
              The Former {PROPERTY.historicName}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/85">
              {PROPERTY.fullAddress}
            </p>
          </div>
        </div>
      </section>

      {/* Overview with image */}
      <section className="container py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={PROPERTY.heroImage}
              alt="404 E Main Street, the former Four Flags Hotel"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Overview
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Step Into a Piece of Niles History
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Step into a piece of Niles history, beautifully reimagined for modern living. 404
              East Main Street—the iconic former Four Flags Hotel—has been meticulously transformed
              into a vibrant, {PROPERTY.unitCount}-unit multifamily residence, blending historic
              character with contemporary comfort.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              404 E Main Street isn't just a property—it's a lifestyle opportunity. With onsite
              management, strong tenant retention, and a location that can't be beat, this is your
              chance to own a piece of Niles' vibrant future.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="font-serif text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed features */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              What Makes This Property Exceptional
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              The Details That Matter
            </h2>
          </div>

          <div className="mt-14 space-y-6">
            {FEATURES.map((feature, i) => (
              <Card key={feature.title} className="overflow-hidden border-border/60 bg-card shadow-sm">
                <CardContent className="grid gap-6 p-0 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="flex items-center gap-5 border-b border-border bg-primary p-6 text-primary-foreground sm:flex-col sm:items-center sm:justify-center sm:border-b-0 sm:border-r sm:p-8 sm:px-10">
                    <div className="flex size-14 items-center justify-center rounded-xl bg-accent/20 text-accent">
                      <FeatureIcon name={feature.icon} className="size-7" />
                    </div>
                    <span className="font-serif text-3xl font-bold text-primary-foreground/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-serif text-xl font-semibold text-primary sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & location split */}
      <section className="container py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-border/60 bg-card shadow-sm">
            <CardContent className="p-8">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FeatureIcon name="home" className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                Unit Amenities
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Everything needed for comfortable, independent living.
              </p>
              <ul className="mt-6 space-y-3">
                {UNIT_AMENITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card shadow-sm">
            <CardContent className="p-8">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FeatureIcon name="pin" className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                Location & Connectivity
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Live where you can truly live, work, and play.
              </p>
              <ul className="mt-6 space-y-3">
                {LOCATION_PERKS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Perfect for */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Perfect For
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
              Who This Property Serves
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {AUDIENCES.map((audience) => (
              <div
                key={audience.title}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <FeatureIcon name={audience.icon} className="size-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-primary">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {audience.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-center text-primary-foreground sm:py-20">
        <div className="container">
          <h2 className="font-serif font-bold leading-tight text-balance text-primary-foreground">
            <span className="text-3xl sm:text-4xl">Ready to Make</span>{' '}
            <span className="text-4xl sm:text-5xl text-accent">404</span>{' '}
            <span className="text-3xl sm:text-4xl">E Main Your Home?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
            Text our private number to start your application today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                How to Apply
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent/50 bg-transparent text-primary-foreground hover:bg-accent hover:text-accent-foreground">
              <a href={PROPERTY.smsHref}>
                <Phone className="size-4" />
                Text Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PropertyDetails;
