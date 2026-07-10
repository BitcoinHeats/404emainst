import { useSeoMeta } from "@unhead/react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { PROPERTY } from "@/lib/propertyData";

const NotFound = () => {
  const location = useLocation();

  useSeoMeta({
    title: "404 - Page Not Found | 404 E Main Street",
    description: "The page you are looking for could not be found. Return to the home page to continue browsing.",
  });

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[70vh] items-center justify-center bg-secondary/30 px-6 py-24">
        <div className="text-center">
          <p className="font-serif text-7xl font-bold text-accent sm:text-8xl">404</p>
          <h1 className="mt-4 font-serif text-2xl font-semibold text-primary sm:text-3xl">
            Oops! Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            The page you're looking for doesn't exist. Let's get you back to {PROPERTY.name}.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link to="/">
              Return to Home
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
