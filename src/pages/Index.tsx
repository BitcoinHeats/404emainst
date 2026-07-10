import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { FeatureIcon } from '@/components/FeatureIcon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PROPERTY, FEATURES, AUDIENCES, STATS } from '@/lib/propertyData';

const Index = () => {
  useSeoMeta({
    title: '404 E Main Street — Historic Downtown Niles Living',
    description:
      'The historic former Four Flags Hotel in downtown Niles, MI, reimagined as a 48-unit multifamily residence blending historic charm with modern comfort. Text our private number to apply.',
    ogTitle: '404 E Main Street — Historic Downtown Niles Living',
    ogDescription:
      'The historic former Four Flags Hotel, reimagined as a 48-unit multifamily residence in the heart of downtown Niles, MI.',
    ogImage: PROPERTY.heroImage,
    ogType: 'website',
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={PROPERTY.heroImage}
            alt="404 E Main Street, the former Four Flags Hotel in downtown Niles"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30" />
        </div>

        <div className="container flex min-h-[88vh] flex-col justify-end pb-16 pt-28 sm:pb-20">
          <div className="max-w-2xl animate-fade-up text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
              <MapPin className="size-3.5" />
              {PROPERTY.tagline}
            </span>
            <h1 className="mt-5 font-serif font-bold leading-[1.05] text-balance text-primary-foreground">
              <span className="text-5xl sm:text-6xl lg:text-7xl">404</span>{' '}
              <span className="text-3xl sm:text-4xl lg:text-5xl">East Main Street</span>
            </h1>
            <p className="mt-2 font-serif text-xl text-accent sm:text-2xl">
              The Former Four Flags Hotel
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {PROPERTY.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/property">
                  Explore the Property
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center">
              <div className="font-serif text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            A Piece of Niles History
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Beautifully Reimagined for Modern Living
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            404 East Main Street—the iconic former Four Flags Hotel—has been meticulously
            transformed into a vibrant, {PROPERTY.unitCount}-unit multifamily residence, blending
            historic character with contemporary comfort.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              What Makes This Property Exceptional
            </p>
            <h2 className="mt-4 font-serif font-bold leading-tight text-balance">
              <span className="text-3xl sm:text-4xl">Six Reasons to Love</span>{' '}
              <span className="text-4xl sm:text-5xl text-accent">404</span>{' '}
              <span className="text-3xl sm:text-4xl">E Main</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <Card
                key={feature.title}
                className="group h-full border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-7">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <FeatureIcon name={feature.icon} className="size-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Perfect For
          </p>
            <h2 className="mt-4 font-serif font-bold leading-tight text-balance">
              <span className="text-3xl sm:text-4xl">Who Calls</span>{' '}
              <span className="text-4xl sm:text-5xl text-accent">404</span>{' '}
              <span className="text-3xl sm:text-4xl">E Main Home</span>
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
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-primary">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={PROPERTY.heroImage} alt="" className="size-full object-cover" />
        </div>
        <div className="container flex flex-col items-center py-20 text-center text-primary-foreground sm:py-28">
          <h2 className="max-w-2xl font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
            A Piece of Niles' Vibrant Future
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            404 E Main Street isn't just a property—it's a lifestyle opportunity. With onsite
            management, strong tenant retention, and a location that can't be beat.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Apply for an Apartment
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
