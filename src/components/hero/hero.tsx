import AnimatedPortrait from "./animated-portrait";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-[var(--foreground)]">Full Stack</span>
            <br />
            <span className="text-[var(--primary)]">Software</span>
            <br />
            <span className="text-[var(--primary-light)]">Developer</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--foreground)]/60 max-w-xl mx-auto lg:mx-0">
            Building modern, performant web applications with clean code and
            thoughtful design.
          </p>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <AnimatedPortrait />
        </div>
      </div>
    </section>
  );
}
