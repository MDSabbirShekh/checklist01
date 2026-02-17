import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Modern Minimalist with Depth Design
 * - Deep charcoal background (#1a1a1a) with off-white text (#f5f5f5)
 * - Frosted glass cards with emerald (#10b981) and coral (#ff6b35) accents
 * - Playfair Display for headings, Inter for body text
 * - Smooth animations and hover effects
 */

interface Category {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  delay: number;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Digital Marketing Agency",
    subtitle: "SEO, Google Ads, Social Media",
    description: "Showcase your marketing expertise with analytics dashboards, campaign performance metrics, and client success stories.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ABqrWqpQNirqLex4znontO/sandbox/yfNa8E5ZbbzGi2tqtpGwi2-img-2_1771175843000_na1fn_ZGlnaXRhbC1tYXJrZXRpbmctY2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQUJxcldxcFFOaXJxTGV4NHpub250Ty9zYW5kYm94L3lmTmE4RTVaYmJ6R2kydHF0cEd3aTItaW1nLTJfMTc3MTE3NTg0MzAwMF9uYTFmbl9aR2xuYVhSaGJDMXRZWEpyWlhScGJtY3RZMkZ5WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oEtBCxa-YgTaI7LUVIO3gafhVa7TuWd2CSaFHpLW6xStfvQxchLQa7fmkgyXvucmFfbgvZoCC5LCGztOBX~XoWowoXeHMA4HLJqZ~BXjQe1FkyZNSJR9UUjquEPLuLY4wHZlE0BzCWyyyNEfk8AtozahDChJRU1H66iA-CDTaAE8UF4AMXtOBeZ9YVSzdA-p6WZsUSaKHehPMPJO129GInF0QRiRyfCJo93a5gQ6zRaRvIhuJAqXsQSOQQpKr6ggrtRJ-Pqj7aDhP8dC5yZbCaK4t2rOH7v1ZQ2tiQVo6SemtJwnAMmCWrQy0B18wFnUMJKUOILlI2xndEDixchrDQ__",
    accentColor: "#ff9500",
    delay: 0,
  },
  {
    id: 2,
    title: "Web Design / Developer Portfolio",
    subtitle: "Website, Landing Page, App",
    description: "Display your creative work with an impressive portfolio that showcases your design and development skills.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ABqrWqpQNirqLex4znontO/sandbox/yfNa8E5ZbbzGi2tqtpGwi2-img-3_1771175844000_na1fn_d2ViLWRlc2lnbi1jYXJk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQUJxcldxcFFOaXJxTGV4NHpub250Ty9zYW5kYm94L3lmTmE4RTVaYmJ6R2kydHF0cEd3aTItaW1nLTNfMTc3MTE3NTg0NDAwMF9uYTFmbl9kMlZpTFdSbGMybG5iaTFqWVhKay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=h8sp939EDoC8H1c-FsfsCIF6QVSznF8UL0CcrrGjpaZtENWiqlLdkpX1MdwLZAMRTkS4AtlSFolQuC~8E-aafP-KNJBtaenaDhPAZFqiFw6nE03rW6Ml8quJ04CznhOZCV0LTP9oBO2qcv3oR7ZqPgxTVUs4hX-hlr3jcO5pdT8Zfhi8NFZsV14l4nz1Lls3iQo~WdXfAGz5z9TYGTIXGaNrWVOKN8OtH1sMk67N10aht41KoRO2zBx5OKhJaCZ1GEYgk8zhgPiBeJowgcBi6Dutmr79UsDMcMyFtFvR2wcI-QOTAfSVAI~gfyUz51ae-edm4vwzO7P-LCT5KPy~iA__",
    accentColor: "#ef4444",
    delay: 100,
  },
  {
    id: 3,
    title: "Real Estate / Property Listing",
    subtitle: "Buy, Sell, Rent Property",
    description: "Create compelling property listings with high-quality images, virtual tours, and detailed property information.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ABqrWqpQNirqLex4znontO/sandbox/yfNa8E5ZbbzGi2tqtpGwi2-img-4_1771175847000_na1fn_cmVhbC1lc3RhdGUtY2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQUJxcldxcFFOaXJxTGV4NHpub250Ty9zYW5kYm94L3lmTmE4RTVaYmJ6R2kydHF0cEd3aTItaW1nLTRfMTc3MTE3NTg0NzAwMF9uYTFmbl9jbVZoYkMxbGMzUmhkR1V0WTJGeVpBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=p6vJ7CcDdIK~UHKRA8O1e~VTh3QdZrnDvZ8PWLWZ-2N4vqHF68Ka~~rkKqFslKMkuLqoHFRhr7y0tbjpgQxSGmWCYma3Z-K5G8Wyx-1Hz18KhYBMMD5aOeTS7sK7xVc~PXEl-k7hfafVZyvo9Nq8LVacGoJBBztJl5ketfnev1wXXpSnd6GYJG6TVTWN8etAFaNwnL16KFKczKZ6MmADBFxvRF4X0uTMG8wbfUkBr1n7hXeefferq0szAcbyw-fFqL~JhcBJyk2zx7zmiXkfJjR~hkE21UV0oHZta~3XtusFGwcLBOJjXenxUknJuOodZM0s3mOEYljI9R6cXo7sbQ__",
    accentColor: "#fbbf24",
    delay: 200,
  },
  {
    id: 4,
    title: "Fitness / Gym",
    subtitle: "Personal Training, Gym Classes",
    description: "Build community with class schedules, trainer profiles, membership plans, and fitness transformation stories.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ABqrWqpQNirqLex4znontO/sandbox/yfNa8E5ZbbzGi2tqtpGwi2-img-5_1771175850000_na1fn_Zml0bmVzcy1jYXJk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQUJxcldxcFFOaXJxTGV4NHpub250Ty9zYW5kYm94L3lmTmE4RTVaYmJ6R2kydHF0cEd3aTItaW1nLTVfMTc3MTE3NTg1MDAwMF9uYTFmbl9abWwwYm1WemN5MWpZWEprLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jkYnbob0Xu35p4eP9ntf7eLHR6-cpzxkojZSvWasjV5YbkEXbn88~J4tNtrCKdCZJjq7k9bnAPBi71OUv6z~4ajqo3PlKyqQy1bx0lxKTiLMBbCYMLP0legx8W7UN81iKvWnWiOtYaud00p2nTj5cO9GuYC8mIWoiNAZu8gL0~SgmT42VKKuJN4~-sZTDSJAZS8mSTUxpa-QD7rrssbNZbUE4aJL5HVPtL~XoxL6XtbuRcjo5iWQkmBTHwv~WJ~6hW5zLCHoQHfQDubDhuGPx-Lo7w~XOloNybCDKeqAB8PG~mgvAdEe3FZHKTvWuxW0-q3aNyyIbFy6vvgy9uQ66w__",
    accentColor: "#f43f5e",
    delay: 300,
  },
  {
    id: 5,
    title: "Consulting / Coaching",
    subtitle: "Business, Career, Health Advice",
    description: "Establish authority with service descriptions, client testimonials, booking systems, and expert credentials.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ABqrWqpQNirqLex4znontO/sandbox/yfNa8E5ZbbzGi2tqtpGwi2-img-2_1771175843000_na1fn_ZGlnaXRhbC1tYXJrZXRpbmctY2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQUJxcldxcFFOaXJxTGV4NHpub250Ty9zYW5kYm94L3lmTmE4RTVaYmJ6R2kydHF0cEd3aTItaW1nLTJfMTc3MTE3NTg0MzAwMF9uYTFmbl9aR2xuYVhSaGJDMXRZWEpyWlhScGJtY3RZMkZ5WkEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oEtBCxa-YgTaI7LUVIO3gafhVa7TuWd2CSaFHpLW6xStfvQxchLQa7fmkgyXvucmFfbgvZoCC5LCGztOBX~XoWowoXeHMA4HLJqZ~BXjQe1FkyZNSJR9UUjquEPLuLY4wHZlE0BzCWyyyNEfk8AtozahDChJRU1H66iA-CDTaAE8UF4AMXtOBeZ9YVSzdA-p6WZsUSaKHehPMPJO129GInF0QRiRyfCJo93a5gQ6zRaRvIhuJAqXsQSOQQpKr6ggrtRJ-Pqj7aDhP8dC5yZbCaK4t2rOH7v1ZQ2tiQVo6SemtJwnAMmCWrQy0B18wFnUMJKUOILlI2xndEDixchrDQ__",
    accentColor: "#3b82f6",
    delay: 400,
  },
  {
    id: 6,
    title: "SaaS / App Promotion",
    subtitle: "Software as a Service / App",
    description: "Showcase your software with feature highlights, pricing tiers, user testimonials, and free trial sign-ups.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ABqrWqpQNirqLex4znontO/sandbox/yfNa8E5ZbbzGi2tqtpGwi2-img-3_1771175844000_na1fn_d2ViLWRlc2lnbi1jYXJk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQUJxcldxcFFOaXJxTGV4NHpub250Ty9zYW5kYm94L3lmTmE4RTVaYmJ6R2kydHF0cEd3aTItaW1nLTNfMTc3MTE3NTg0NDAwMF9uYTFmbl9kMlZpTFdSbGMybG5iaTFqWVhKay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=h8sp939EDoC8H1c-FsfsCIF6QVSznF8UL0CcrrGjpaZtENWiqlLdkpX1MdwLZAMRTkS4AtlSFolQuC~8E-aafP-KNJBtaenaDhPAZFqiFw6nE03rW6Ml8quJ04CznhOZCV0LTP9oBO2qcv3oR7ZqPgxTVUs4hX-hlr3jcO5pdT8Zfhi8NFZsV14l4nz1Lls3iQo~WdXfAGz5z9TYGTIXGaNrWVOKN8OtH1sMk67N10aht41KoRO2zBx5OKhJaCZ1GEYgk8zhgPiBeJowgcBi6Dutmr79UsDMcMyFtFvR2wcI-QOTAfSVAI~gfyUz51ae-edm4vwzO7P-LCT5KPy~iA__",
    accentColor: "#a855f7",
    delay: 500,
  },
];

export default function Home() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    // Stagger card visibility on mount
    categories.forEach((cat) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, cat.id]);
      }, cat.delay);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="heading-md text-primary">WordPress Landing Pages</div>
          <Button variant="outline" className="border-border hover:bg-primary/10">
            Explore
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "url('https://private-us-east-1.manuscdn.com/sessionFile/ABqrWqpQNirqLex4znontO/sandbox/yfNa8E5ZbbzGi2tqtpGwi2-img-1_1771175847000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQUJxcldxcFFOaXJxTGV4NHpub250Ty9zYW5kYm94L3lmTmE4RTVaYmJ6R2kydHF0cEd3aTItaW1nLTFfMTc3MTE3NTg0NzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AOIDFP1RTljUcpLhk-gF~-~rGXSbhrx81lX8cN5MQ3wTk5OZs68JOgxrEAN3Pd6SXFkwZS-yRq9gLG8zE8EWiZLbPy~ORanh6ywIkhmL1RXqT8gDvx2n~KqXqmGTXXg-7dGj3d5mmegNiZPZ5UtKq7jHZJ5xdTgQG6ytZKlmfSyegu~bpvAHVFNBxz6YIMZMygMfgDBHVGC7J-SvdFDLRPEskuPlBHNNCgMPXX-soeiX74Tev6US5jufg-NezUaB~JAOWMNKkXmI90n8n0ixIiY~85WMtYbsfBbDH3J87U2URY3UuKyFscKZZYYKSLRhgXEMjA2m4BhNcI5FbHN9oA__')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />

        <div className="container text-center">
          <h1 className="heading-lg mb-6 text-primary">
            Highest Demand WordPress Landing Pages
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the six most in-demand WordPress landing page categories that drive business growth and customer engagement.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-background">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`glass-card p-6 rounded-2xl overflow-hidden transition-all duration-500 ${
                  visibleCards.includes(category.id)
                    ? "animate-slide-in opacity-100"
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: `${category.delay}ms`,
                }}
              >
                {/* Card Image */}
                <div className="relative mb-6 -mx-6 -mt-6 h-48 overflow-hidden rounded-b-2xl">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-sm text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="body-sm text-muted-foreground">
                      {category.subtitle}
                    </p>
                  </div>

                  <p className="body-base text-foreground/80">
                    {category.description}
                  </p>

                  {/* Accent Bar */}
                  <div className="pt-4 border-t border-border">
                    <Button
                      variant="ghost"
                      className="w-full justify-between group hover:bg-primary/10"
                    >
                      <span className="text-primary group-hover:text-primary/90">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Gradient Accent Footer */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                  style={{
                    background: `linear-gradient(90deg, ${category.accentColor} 0%, transparent 100%)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container text-center">
          <h2 className="heading-md mb-6 text-foreground">
            Ready to Create Your Landing Page?
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose from our collection of high-converting WordPress landing page templates tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-background">
              Browse Templates
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="heading-sm text-foreground mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground body-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Real Estate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="heading-sm text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground body-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="heading-sm text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground body-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="heading-sm text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground body-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground body-sm">
            <p>&copy; 2026 WordPress Landing Pages. All rights reserved.</p>
            <p>Crafted with precision and care.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
