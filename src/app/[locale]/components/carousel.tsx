"use client";
import React, { useState } from "react";
import { USALProvider } from "@usal/react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/style/main.css";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const t = useTranslations('SERVICES');

  const cards = [
    {
      id: 1,
      title: t("production"),
      icon: "/img/maxcup-gyartas-pictogram.webp",
      text: t("production_description"),
      link: "production",
    },
    {
      id: 2,
      title: t("renting"),
      icon: "/img/maxcup-berles-pictogram.webp",
      text: t("renting_description"),
      link: "renting",
    },
    {
      id: 3,
      title: t("washing"),
      icon: "/img/maxcup-mosas-pictogram.webp",
      text: t("washing_description"),
      link: "washing",
    },
    {
      id: 4,
      title: t("logistics"),
      icon: "/img/maxcup-logisztika-pictogram.webp",
      text: t("logistics_description"),
      link: "logistics",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= cards.length ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? cards.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <USALProvider key={card.id}>
            <div
              className="bg-[var(--mid-blue)] rounded-[var(--border-radius-24)] shadow-custom-box overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[55vw] lg:h-[40vw] min-h-none xl:min-h-[500px] xl:h-[30vw] max-h-[1000px] xl:max-h-[800px]"
              data-usal="once fade-u delay-100 duration-1000 threshold-60"
            >
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-center mb-2">
                  <Image
                    src={card.icon}
                    alt={`${card.title}`}
                    className="h-[80px] xl:h-[100px] w-auto object-contain"
                    width={400}
                    height={400}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="font-bold text-center mb-1">{card.title}</div>
                <p className="xs-text leading-relaxed flex-grow text-center">{card.text}</p>
                <a
                  href={`#${card.link}`}
                  className="relative flex justify-center items-center text-[var(--dark-blue)] font-medium text-sm underline mt-auto transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[var(--dark-blue)] after:transition-all after:duration-300 hover:after:w-full">
                    {t("readmore")}
                  </span>
                </a>
              </div>
            </div>
          </USALProvider>
        ))}
      </div>

      {/* Mobil */}
      <USALProvider>
        <div className="md:hidden relative" data-usal="once fade-u delay-100 duration-1000 threshold-60">
          <div className="overflow-hidden rounded-lg px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card) => (
                <div key={card.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-[var(--mid-blue)] rounded-[var(--border-radius-24)] shadow-custom-box flex flex-col h-fit min-h-[60vh] mb-2">
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-center mb-2">
                        <Image
                          src={card.icon}
                          alt={`${card.title} icon`}
                          className="h-[100px] w-auto object-contain"
                          width={400}
                          height={400}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className="font-bold text-center mb-1">{card.title}</div>
                      <p className="md-text leading-relaxed flex-grow text-center break-words hyphens-auto">{card.text}</p>
                      <a
                        href={`#${card.link}`}
                        className="relative flex justify-center items-center text-[var(--dark-blue)] font-medium text-sm underline mt-auto transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-[var(--dark-blue)] after:transition-all after:duration-300 hover:after:w-full">
                          {t("readmore")}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className={`border-2 border-[var(--light-blue)] absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--dark-blue-60)] backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 hover:bg-[var(--mid-blue-40)] ${isAnimating ? "opacity-50" : ""
              }`}
          >
            <ChevronLeft className="w-5 h-5 text-[var(--light-blue)]" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className={`border-2 border-[var(--light-blue)] absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--dark-blue-60)] backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 hover:bg-[var(--mid-blue-40)] ${isAnimating ? "opacity-50" : ""
              }`}
          >
            <ChevronRight className="w-5 h-5 text-[var(--light-blue)]" />
          </button>

          {/* Dots indicator */}
          <div className="flex z-50 justify-center mt-4 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentIndex ? "bg-[var(--mid-blue)]" : "bg-[var(--light-blue)]"
                  }`}
                aria-label={`${index + 1}. card`}
              />
            ))}
          </div>
        </div>
      </USALProvider>
    </div>
  );
};

export default Carousel;
