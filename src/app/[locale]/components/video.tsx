'use client';

export default function ClientVideo() {
  return (
    <video
      src="/img/maxvideo.webm"
      autoPlay
      loop
      muted
      playsInline
      crossOrigin="anonymous"
      className="h-[90vw] w-[90vw] lg:h-[40vw] lg:w-[40vw] object-cover rounded-[var(--border-radius-50)] border-15 lg:border-15 border-[var(--mid-blue)]"
    />
  );
}
