'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Project } from '@/lib/types';

import styles from "./ProjectSection.module.css";

// Imagens para as setas do carrossel
import imgCaretLeft from '../../../public/img/caret-left-fill.svg';
import imgCaretRight from '../../../public/img/caret-right-fill.svg';

interface ProjectSectionProps {
  projects: Project[];
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
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

  return (
    <section>
      {/* Classes globais como "section-title" podem ser mantidas como string */}
      <h2 className="section-title"><span className="yellow_text">Projetos</span> Webtech</h2>
      
      <div className={styles.carouselWrapper}>
        <Image
          src={imgCaretLeft}
          className={`${styles.arrows} ${styles.transitions}`} // Combinando classes
          alt="Esquerda"
          width={50}
          height={50}
          onClick={handleScrollLeft}
        />

        <div className={styles.carouselTrack} ref={carouselRef}>
          {projects.map((project) => (
            // 2. Combinando múltiplas classes do módulo de estilo
            <div key={project.id} className={`${styles.card} ${styles.projectCard} ${styles.hover} ${styles.transitions}`}>
              <Image src={project.imageUrl} className={styles.cardImg} alt={project.title} width={200} height={120} />
              <div className={styles.cardTitle}>{project.title}</div>
            </div>
          ))}
        </div>

        <Image
          src={imgCaretRight}
          className={`${styles.arrows} ${styles.transitions}`} // Combinando classes
          alt="Direita"
          width={50}
          height={50}
          onClick={handleScrollRight}
        />
      </div>
    </section>
  );
}