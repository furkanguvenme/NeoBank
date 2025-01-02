import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import simpleInterestImg from '../assets/simple-interest.jpg';
import compoundInterestImg from '../assets/compound-interest.jpg';
import loanImg from '../assets/loan.jpg';
import stockSimulationImg from '../assets/stock-simulation.jpg';

interface Slide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const slidesData: Slide[] = [
  {
    id: 1,
    title: 'Basit Faiz Hesabı',
    description: 'Faiz hesaplamada en temel yöntem olan basit faiz ile kısa vadeli yatırımlarınızda kazancınızı net bir şekilde hesaplayın. Bu yöntem, yatırım başlangıcında anapara üzerinden hesaplanan sabit bir faiz oranı kullanır.',
    imageUrl: simpleInterestImg,
  },
  {
    id: 2,
    title: 'Bileşik Faiz Hesabı',
    description: 'Bileşik faiz yöntemiyle, hem anaparadan hem de önceki dönemlerde kazanılan faizden gelir elde edin. Uzun vadeli yatırımlarınızda büyüme etkisini artırarak büyük kazançlar sağlayabilirsiniz.',
    imageUrl: compoundInterestImg,
  },
  {
    id: 3,
    title: 'Kredi Hesabı',
    description: 'Aylık taksitlerinizi, toplam geri ödemenizi ve faiz yükünüzü detaylı bir şekilde hesaplayarak, kredi planlamanızı güvenle yapabilirsiniz. Hangi kredi türünün sizin için uygun olduğunu öğrenin.',
    imageUrl: loanImg,
  },
  {
    id: 4,
    title: 'Hisse Senedi Simülasyonu',
    description: 'Hisse senedi piyasasında nasıl kazanç sağlanacağını anlamak için simülasyon yaparak stratejilerinizi test edin. Riskleri öğrenin ve yatırımlarınızı en iyi şekilde yönetin.',
    imageUrl: stockSimulationImg,
  },
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

  const nextSlide = (): void => showSlide(currentIndex + 1);
  const prevSlide = (): void => showSlide(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
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
      <button className="prev-btn" onClick={prevSlide}>
        ⟨
      </button>
      <div className="slider" ref={sliderRef}>
        {slidesData.map((slide) => (
          <div className="slide" key={slide.id}>
            <div className="slide-content">
              <img src={slide.imageUrl} alt={slide.title} />
              <div className="text-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>
        ⟩
      </button>
    </div>
  );
};

export default Slider;
