import { useSeoMeta } from '@unhead/react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  IdCard,
  FileText,
  CalendarCheck,
  ArrowRight,
  Phone,
  MapPin,
} from 'lucide-react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PROPERTY } from '@/lib/propertyData';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Text Our Private Number',
    body: 'Text 269-929-2875 to apply for an apartment. Let us know you are interested in 404 E. Main St. in Niles, MI.',
    detail: '269-929-2875',
  },
  {
    icon: IdCard,
    title: 'Text a Photo ID',
    body: 'To complete your application, please text a clear photo of your valid government-issued ID.',
  },
  {
    icon: FileText,
    title: 'Text 2 Paystubs',
    body: 'Please also text your two most recent paystubs so we can verify your income.',
  },
  {
    icon: CalendarCheck,
    title: 'Schedule a Tour',
    body: 'Once we have received your ID and paystubs, we will schedule a tour of the property. Thank you!',
  },
];

const Contact = () => {
  useSeoMeta({
    title: 'Apply — 404 E Main Street, Niles, MI',
    description:
      'Apply for an apartment at 404 E Main Street in Niles, MI. Text 269-929-2875 with a photo ID and 2 paystubs to get started, then we will schedule your tour.',
    ogTitle: 'Apply — 404 E Main Street, Niles, MI',
    ogDescription:
      'Text 269-929-2875 with a photo ID and 2 paystubs to apply for an apartment at 404 E Main Street in Niles, MI.',
    ogImage: PROPERTY.heroImage,
    ogType: 'website',
  });

  return (
    <Layout>
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={PROPERTY.heroImage} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="container py-16 text-center sm:py-24">
          <nav className="text-sm text-primary-foreground/60" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Apply</span>
          </nav>
          <div className="mx-auto mt-6 max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <MessageSquare className="size-3.5" />
              Apply by Text
            </span>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-balance sm:text-5xl">
              Apply for an Apartment
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
              Interested in living at 404 E. Main St. in Niles, MI? Getting started is easy—just
              text our private number and follow the steps below.
            </p>
          </div>
        </div>
      </section>

      {/* Quick contact card */}
      <section className="container -mt-10 sm:-mt-12">
        <Card className="mx-auto max-w-xl border-border bg-card shadow-lg">
          <CardContent className="flex flex-col items-center gap-5 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Phone className="size-8" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Text to Apply
              </p>
              <a
                href={PROPERTY.smsHref}
                className="font-serif text-3xl font-bold text-primary transition-colors hover:text-accent"
              >
                {PROPERTY.phone}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                {PROPERTY.fullAddress}
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href={PROPERTY.smsHref}>
                <MessageSquare className="size-4" />
                Text Now
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Application steps */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            How to Apply
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Four Simple Steps
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We saw you filled out the info on Zillow for 404 E. Main St. in Niles, MI. To complete
            this application, here's what we need from you.
          </p>
        </div>

        <ol className="mx-auto mt-14 max-w-3xl space-y-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <Card className="border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md">
                  <CardContent className="flex items-start gap-5 p-6 sm:p-7">
                    <div className="relative flex shrink-0 flex-col items-center">
                      <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Icon className="size-7" />
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className="mt-2 hidden h-8 w-px bg-border sm:block" aria-hidden="true" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-2xl font-bold text-accent">
                          {i + 1}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                      {step.detail && (
                        <a
                          href={PROPERTY.smsHref}
                          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 font-semibold text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <MessageSquare className="size-4" />
                          {step.detail}
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ol>

        {/* Info note */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
          <p className="text-sm leading-relaxed text-foreground/90">
            <span className="font-semibold text-primary">A note from our team: </span>
            "I see you filled out the info on Zillow for 404 E. Main St. in Niles, MI. To complete
            this application I will need you to please text a photo ID and 2 paystubs. Once we have
            received that info, we will schedule a tour. Thank you!"
          </p>
        </div>
      </section>

      {/* What to bring / summary */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <IdCard className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                What to Text Us
              </h3>
              <ul className="mt-5 space-y-3 text-base">
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-accent" />
                  A clear photo of your valid photo ID
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-accent" />
                  Your two most recent paystubs
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="size-6" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-primary">
                Property Location
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {PROPERTY.fullAddress}
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Onsite management available. Strong tenant retention and a walkable downtown
                location that can't be beat.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link to="/property">
                  View Property Details
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-center text-primary-foreground sm:py-20">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl">
            Have Questions? We're a Text Away.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
            Text our private number and our onsite team will help you get started.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <a href={PROPERTY.smsHref}>
              <MessageSquare className="size-4" />
              Text {PROPERTY.phone}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
