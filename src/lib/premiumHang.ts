/**
 * Nagyon halk, szintetikus UI hang CTA kattintásra.
 * Ha a böngésző blokkolja, csendben elnyeli a hibát.
 */
export function premiumKattintasHang() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AudioCtx) {
      return
    }

    const kontextus = new AudioCtx()
    const oszcillator = kontextus.createOscillator()
    const erosito = kontextus.createGain()

    oszcillator.type = 'sine'
    oszcillator.frequency.value = 880
    erosito.gain.value = 0.0001

    oszcillator.connect(erosito)
    erosito.connect(kontextus.destination)

    const most = kontextus.currentTime
    erosito.gain.exponentialRampToValueAtTime(0.03, most + 0.01)
    erosito.gain.exponentialRampToValueAtTime(0.0001, most + 0.12)
    oszcillator.start(most)
    oszcillator.stop(most + 0.14)

    window.setTimeout(() => {
      void kontextus.close()
    }, 200)
  } catch {
    // Hang opcionális — hiba esetén nem állítjuk meg a UI-t.
  }
}
