'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Journey, Category } from '@/lib/types';
// A função getJourneys não é mais necessária aqui se você estiver filtrando localmente
// import { getJourneys } from '@/lib/api'; 

// Importando os estilos do módulo
import styles from "./JourneySection.module.css";

// Imagens para as setas do carrossel
import imgCaretLeft from '../../../public/img/caret-left-fill.svg';
import imgCaretRight from '../../../public/img/caret-right-fill.svg';

interface JourneySectionProps {
  initialJourneys: Journey[];
  categories: Category[];
}

export default function JourneySection({ initialJourneys, categories }: JourneySectionProps) {
  const [journeys, setJourneys] = useState<Journey[]>(initialJourneys);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const handleFilterClick = (categoryName: string | null) => {
    setActiveCategory(categoryName);
    if (categoryName === null) {
      setJourneys(initialJourneys);
    } else {
      const filteredJourneys = initialJourneys.filter(
        (journey) => journey.categoryName === categoryName
      );
      setJourneys(filteredJourneys);
    }
  };


  return (
    <section>
      <div className="section-title-container"> {/* Mantido como global, se definido em globals.css */}
        <h2 className="section-title">Journeys</h2>
      </div>
      <div className={styles.journeyContainer}>
        <ul className={styles.filter}>
          <li 
            className={`${styles.filterElement} ${styles.hover} ${styles.transitions} ${activeCategory === null ? styles.active : ''}`}
            onClick={() => handleFilterClick(null)}
          >
            Todos
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`${styles.filterElement} ${styles.hover} ${styles.transitions} ${activeCategory === category.name ? styles.active : ''}`}
              onClick={() => handleFilterClick(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>

        <div className={styles.carouselWrapper}>
          <Image
            src={imgCaretLeft}
            className={`${styles.arrows} ${styles.transitions}`}
            alt="Esquerda"
            width={50}
            height={50}
            onClick={handleScrollLeft}
          />

          <div className={styles.carouselTrack} ref={carouselRef}>
            {journeys.length > 0 ? (
              journeys.map((journey) => (
                <div key={journey.id} className={`${styles.card} ${styles.journeyCard} ${styles.hover} ${styles.transitions}`}>
                  <Image src={journey.imageUrl} className={styles.cardImg} alt={journey.title} width={200} height={120} />
                  <div className={styles.cardTitle}>{journey.title}</div>
                </div>
              ))
            ) : (
              <p className={styles.noResults}>Nenhuma jornada encontrada para esta categoria.</p>
            )}
          </div>

          <Image
            src={imgCaretRight}
            className={`${styles.arrows} ${styles.transitions}`}
            alt="Direita"
            width={50}
            height={50}
            onClick={handleScrollRight}
          />
        </div>
      </div>
    </section>
  );
}