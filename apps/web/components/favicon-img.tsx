"use client"

export function FaviconImg({ url }: { url: string }) {
  let domain: string
  try {
    domain = url.startsWith("/") ? window.location.hostname : new URL(url).hostname
  } catch {
    return null
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=16`}
      alt=""
      width={14}
      height={14}
      className="shrink-0 rounded-sm"
    />
  )
}
