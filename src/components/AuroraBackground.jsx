export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void" aria-hidden="true">
      <div className="grid-overlay absolute inset-0 opacity-[0.35]" />
      <div className="animate-drift absolute -left-[10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-green/20 blur-[160px]" />
      <div className="animate-drift absolute right-[-15%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue/20 blur-[180px]" style={{ animationDelay: '-8s' }} />
      <div className="animate-drift absolute bottom-[-15%] left-[20%] h-[480px] w-[480px] rounded-full bg-teal/15 blur-[160px]" style={{ animationDelay: '-15s' }} />
      <div className="scanlines absolute inset-0" />
    </div>
  )
}
