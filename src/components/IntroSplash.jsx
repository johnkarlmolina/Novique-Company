import { useEffect, useState } from 'react'
import { Rocket } from 'lucide-react'

const LAUNCH_MS = 900
const WIPE_MS = 700
const REVEAL_MS = 1400
const EXIT_MS = 500

export default function IntroSplash() {
  const [stage, setStage] = useState('launch')
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const toWipe = setTimeout(() => setStage('wipe'), LAUNCH_MS)
    const toReveal = setTimeout(() => setStage('reveal'), LAUNCH_MS + WIPE_MS)
    const toExit = setTimeout(() => setStage('exit'), LAUNCH_MS + WIPE_MS + REVEAL_MS)
    const toDone = setTimeout(() => {
      setDone(true)
      document.body.style.overflow = ''
    }, LAUNCH_MS + WIPE_MS + REVEAL_MS + EXIT_MS)

    return () => {
      clearTimeout(toWipe)
      clearTimeout(toReveal)
      clearTimeout(toExit)
      clearTimeout(toDone)
      document.body.style.overflow = ''
    }
  }, [])

  if (done) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#0E1B24] transition-opacity duration-500 ${
        stage === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {stage === 'launch' && (
        <div className="flex h-full items-center justify-center">
          <Rocket className="rocket-launch h-10 w-10 text-white" />
        </div>
      )}

      <div
        className="absolute rounded-full bg-white"
        style={{
          left: '-100%',
          bottom: '-100%',
          width: '300%',
          height: '300%',
          transform: stage === 'launch' ? 'scale(0)' : 'scale(1)',
          transition: 'transform 700ms cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      />

      {(stage === 'reveal' || stage === 'exit') && (
        <div className="relative flex h-full items-center justify-center">
          <span className="fade-rise text-4xl font-extrabold tracking-wide text-slate-900 sm:text-5xl">
            NOVIQUE
          </span>
        </div>
      )}
    </div>
  )
}
