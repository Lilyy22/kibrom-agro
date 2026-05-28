/** Secondary seal / strapline block for landing hero (“second logo”). */
export function WordmarkRibbon({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background/95 backdrop-blur-sm px-5 py-4 text-center shadow-sm md:text-left ${className}`}
    >
      <div className="font-display font-bold uppercase tracking-[0.12em] text-primary text-sm">
        Kibrom Niguse
      </div>
      <div className="text-muted-foreground mt-1 font-semibold uppercase tracking-[0.28em] text-[10px]">
        Agro‑Export Agent
      </div>
      <div className="bg-border mx-auto mt-3 h-px max-w-[12rem] md:mx-0" />
      <div className="text-leaf mt-2 font-semibold uppercase tracking-[0.22em] text-[9px]">
        Origin Ethiopia · Since 2009 G.C
      </div>
    </div>
  )
}
