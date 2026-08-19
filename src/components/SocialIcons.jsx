// lucide-react no longer ships brand/social logos, so these are provided locally.
export function Facebook({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-8h2.68l.4-3.11h-3.08V7.94c0-.9.25-1.51 1.54-1.51h1.65V3.65C15.98 3.53 15 3.44 13.87 3.44c-2.35 0-3.96 1.43-3.96 4.06v2.39H7.22v3.11h2.69v8h3.59Z" />
    </svg>
  )
}

export function Instagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TikTok({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3h-3v12.1a2.6 2.6 0 1 1-1.9-2.5V9.5a5.6 5.6 0 1 0 4.9 5.55V9.28a7.5 7.5 0 0 0 4.4 1.4V7.7a4.6 4.6 0 0 1-4.4-4.5V3Z" />
    </svg>
  )
}

export function WhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 3C7.05 3 3 7.03 3 12c0 1.7.47 3.29 1.29 4.65L3 21l4.47-1.24A8.96 8.96 0 0 0 12.02 21C16.98 21 21 16.97 21 12s-4.02-9-8.98-9Zm0 16.2a7.15 7.15 0 0 1-3.65-1l-.26-.15-2.65.73.71-2.58-.17-.27A7.16 7.16 0 1 1 19.16 12a7.17 7.17 0 0 1-7.14 7.2Zm3.93-5.37c-.21-.11-1.27-.63-1.47-.7-.2-.07-.34-.11-.49.11-.14.21-.56.7-.69.85-.13.14-.25.16-.47.05-.21-.11-.9-.33-1.71-1.05-.63-.56-1.06-1.26-1.18-1.47-.13-.21-.01-.33.09-.43.1-.1.21-.25.32-.38.11-.13.14-.21.21-.36.07-.14.04-.27-.02-.38-.07-.11-.49-1.18-.67-1.62-.18-.42-.36-.36-.49-.37h-.42c-.14 0-.38.05-.58.27-.2.21-.76.75-.76 1.82s.78 2.11.89 2.25c.11.14 1.53 2.34 3.71 3.28.52.22.92.36 1.24.46.52.16.99.14 1.36.09.42-.06 1.27-.52 1.45-1.02.18-.5.18-.93.13-1.02-.05-.09-.19-.14-.4-.25Z" />
    </svg>
  )
}
