import { Container } from '@/components/ui/Container'

type PageHeaderProps = {
  title: string
  lead?: string
}

export function PageHeader({ title, lead }: PageHeaderProps) {
  return (
    <section className="from-ink-950 to-ink-900 relative isolate overflow-hidden bg-gradient-to-b py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(90% 60% at 50% 0%, rgba(212,175,55,0.18) 0%, transparent 65%)',
        }}
      />
      <Container className="text-center">
        <h1 className="font-heading text-gold-gradient text-2xl tracking-[0.2em] uppercase sm:text-4xl">
          {title}
        </h1>
        {lead ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm tracking-wide text-neutral-400 uppercase">
            {lead}
          </p>
        ) : null}
      </Container>
    </section>
  )
}
