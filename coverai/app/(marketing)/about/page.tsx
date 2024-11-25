export default function AboutPage() {
  return (
    <div className="container max-w-[64rem] py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
        About CoverFlash
      </h1>
      <div className="mt-8 grid gap-8">
        <section>
          <h2 className="text-2xl font-bold text-cyan">Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CoverFlash was created to revolutionize the way job seekers approach
            their applications. We believe that everyone deserves the opportunity to
            present themselves in the best possible light, and a well-crafted cover
            letter is essential to making a strong first impression.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-cyan">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Using advanced AI technology, CoverFlash analyzes your experience and
            the job requirements to generate personalized, professional cover
            letters that highlight your unique qualifications. Our system ensures
            that each letter is tailored to the specific role while maintaining
            your authentic voice.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-cyan">Why Choose CoverFlash</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg text-muted-foreground">
            <li>Professional templates designed by industry experts</li>
            <li>AI-powered personalization for each application</li>
            <li>Time-saving automation that maintains quality</li>
            <li>Regular updates based on hiring trends</li>
          </ul>
        </section>
      </div>
    </div>
  );
}