import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'; // Stil için ayrı bir CSS dosyası ekleyebilirsiniz.
import foto from '../assets/bankbanner.jpg';
import foto2 from '../assets/bankbanner2.jpg';
import foto3 from '../assets/bankbanner3.jpg';

interface Slide {
  id: number;
  imageUrl: string;
  text1: string;
}

const slidesData: Slide[] = [
  { id: 1, imageUrl: foto, text1: "FAİZ HESAPLAMA" },
  { id: 2, imageUrl: foto2, text1: "DÖVİZ İŞLEMLERİ" },
  { id: 3, imageUrl: foto3, text1: "VE DAHA FAZLASI" },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const showSlide = (index: number): void => {
    const totalSlides = slidesData.length;

    if (index >= totalSlides) setCurrentIndex(0);
    else if (index < 0) setCurrentIndex(totalSlides - 1);
    else setCurrentIndex(index);
  };

  const nextSlide = (): void => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = (): void => {
    showSlide(currentIndex - 1);
  };

  // Otomatik kaydırma
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  useEffect(() => {
    if (sliderRef.current) {
      const offset = -currentIndex * 100;
      sliderRef.current.style.transform = `translateX(${offset}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider" ref={sliderRef}>
        {slidesData.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
            <p className='lg:text-4xl text-base'>{slide.text1}</p>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        ⟨
      </button>
      <button className="next-btn" onClick={nextSlide}>
        ⟩
      </button>
    </div>
  );
};

export default Slider;
