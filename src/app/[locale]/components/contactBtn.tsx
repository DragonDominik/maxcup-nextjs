'use client';
import { useTranslations } from 'next-intl';

type ContactButtonProps = {
  direction?: 'left' | 'right';
};

export default function ContactButton({ direction = 'right' }: ContactButtonProps) {
  const t = useTranslations('OFFER');

  const fadeClass = direction === 'left' ? 'fade-l' : 'fade-r';

  return (
    <button
      className={`mt-2 shadow-custom-box group relative inline-flex h-12 w-full items-center justify-center rounded-[var(--border-radius-16)] bg-[var(--dark-blue)] text-[var(--light-blue)] cursor-pointer`}
      onClick={() => (window.location.href = '#contact')}
      data-usal={`${fadeClass} threshold-30 delay-100 duration-800 once`}
    >
      {/* Text*/}
      <div className="transition translate-y-0 opacity-100 md:group-hover:-translate-y-[100%] md:group-hover:opacity-0">
        {t("offer")}
      </div>

      {/* Hover Icon */}
      <div className="absolute transition translate-y-[100%] opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </button>
  );
}
