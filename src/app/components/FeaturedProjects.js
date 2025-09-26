import Image from 'next/image';
import { TbSparkles } from 'react-icons/tb';

function GlassBubble({ children, className = '' }) {
  return (
    <div
      className={[
        'relative max-w-xl rounded-2xl bg-white/10 ring-1 ring-white/15',
        'backdrop-blur-md text-white/90 shadow-[0_10px_40px_rgba(80,0,200,.25)]',
        'px-6 py-5',
        className,
      ].join(' ')}
    >
      {/* subtle gradient tint */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-300/10 via-white/5 to-fuchsia-400/10" />
      {/* subtle inner highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10"
        style={{
          WebkitMaskImage:
            'radial-gradient(70% 180% at 50% -30%, black, transparent)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskImage:
            'radial-gradient(70% 180% at 50% -30%, black, transparent)',
          maskRepeat: 'no-repeat',
          maskSize: 'cover',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function ScreenshotFrame({ src, alt }) {
  return (
    <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 shadow-[0_15px_60px_rgba(80,0,200,.25)]">
      {/* glow behind image */}
      <div className="absolute -inset-12 -z-10 blur-3xl bg-[radial-gradient(60%_60%_at_50%_40%,rgba(139,92,246,.35),transparent)]" />
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          priority={false}
          sizes="(min-width: 1024px) 560px, 90vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

function ProjectRow({
  featured = 'Featured Project',
  title,
  description,
  image,
  href = '#',
  flip = false,
}) {
  return (
    <div className="relative py-16 md:py-24">
      {/* large radial glow for the row */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-[80%] blur-3xl bg-[radial-gradient(60%_70%_at_50%_0%,rgba(139,92,246,.18),transparent)]" />
      </div>

      <div className="grid items-center gap-8 md:grid-cols-12">
        {/* Text + bubble */}
        <div
          className={[
            'md:col-span-6',
            flip ? 'md:order-2' : 'md:order-1',
          ].join(' ')}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-violet-300/80">
            {featured}
          </p>
          <h3 className="mt-1 text-3xl font-extrabold tracking-tight text-white">
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline decoration-pink-400/60 underline-offset-4"
            >
              {title}
            </a>
          </h3>

          <div className={flip ? 'md:flex md:justify-end' : ''}>
            <GlassBubble className="mt-5 hover:scale-[1.01] transition-transform">
              <p className="text-sm leading-6 md:text-base md:leading-7">
                {description}
              </p>
            </GlassBubble>
          </div>
        </div>

        {/* Image */}
        <div
          className={[
            'md:col-span-6',
            flip
              ? 'md:order-1 md:pr-8 md:translate-y-4'
              : 'md:order-2 md:pl-8 md:translate-y-4',
          ].join(' ')}
        >
          <a href={href} target="_blank" rel="noreferrer noopener" className="block group">
            <ScreenshotFrame src={image.src} alt={image.alt} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Example Project',
      description:
        'A web app for visualizing personalized Spotify data. View your top artists, tracks, and deep insights. Create and save new playlists of recommended tracks based on your favorites.',
      image: { src: '/projects/wireframe-1.jpg', alt: 'Project mockup 1' },
      href: '#',
      flip: false,
    },
    {
      title: 'Example Project',
      description:
        'Another visualization app demonstrating design workflows with clear, interactive dashboards and glowing UI highlights for that premium visual punch.',
      image: { src: '/projects/wireframe-2.jpg', alt: 'Project mockup 2' },
      href: '#',
      flip: true,
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 px-6 lg:px-10
                 bg-gradient-to-b from-[#0b0615] to-[#110a1f] text-white"
      aria-label="Featured projects"
    >
      <div className="mx-auto max-w-6xl">
        <ProjectRow {...projects[0]} />

        {/* Center sparkles between rows */}
        <div className="my-10 flex items-center justify-center gap-6 text-violet-200/70" aria-hidden="true">
          <TbSparkles className="h-6 w-6" />
          <TbSparkles className="h-6 w-6" />
          <TbSparkles className="h-6 w-6" />
        </div>

        <ProjectRow {...projects[1]} />
      </div>
    </section>
  );
}