"use client";

import Image from 'next/image';
import styles from "./Jornada.module.css";
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import { UserJornada } from '../../components/userjornada';
import { Parceiro } from '../../components/parceiro';
import { Etapa } from '../../components/etapa';

export default function Jornada() {
  const [funcao, setFuncao] = useState("");
  const [etapas, setEtapas] = useState("");
  const [abaAtiva, setAbaAtiva] = useState("etapas"); // corrigido para string (sem TS)

  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <article>
          <div>
            <h1>Embarque na Jornada React!</h1>
            <h3>Descubra o poder do React e transforme suas ideias em interfaces incríveis. Do básico ao
              avançado, essa jornada vai te guiar passo a passo no universo do front-end moderno!
            </h3>
          </div>
          <div>
            <p>Oferecido por: LEVTY</p>
            <p>
              <i className="ph-fill ph-align-bottom"></i> Intermediário | <i className="ph-fill ph-line-segments"></i>
              4 etapas
            </p>
          </div>
        </article>
        <Image src="/react.png" alt="logo react" width={400} height={400} className={styles.img_banner} />
      </section>

      {/* Botões de alternância */}
      <section className={styles.select_opc}>
        <h3
          className={abaAtiva === 'etapas' ? styles.abaAtiva : ''}
          onClick={() => setAbaAtiva('etapas')}
        >
          Etapas
        </h3>
        <h3
          className={abaAtiva === 'pessoas' ? styles.abaAtiva : ''}
          onClick={() => setAbaAtiva('pessoas')}
        >
          Pessoas
        </h3>
      </section>

      {/* Conteúdo com transição animada */}
      <section className={styles.opc}>
        <AnimatePresence mode="wait">
          {abaAtiva === 'etapas' && (
            <motion.article
              key="etapas"
              className={styles.etapas}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Etapa etapa={1} />
              <Etapa etapa={2} />
              <Etapa etapa={3} />
              <Etapa etapa={4} />
            </motion.article>
          )}

          {abaAtiva === 'pessoas' && (
            <motion.article
              key="pessoas"
              id="pessoas"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div id="usuariosHeader">
                <div>
                  <h3>Participantes</h3>
                  <h4>numero de participantes: 50</h4>
                </div>
                <div className={styles.filtros}>
                  <div className={styles.filtro}>
                    <h3>Pesquisar:</h3> <input type="search" />
                  </div>
                  <div className={styles.filtro}>
                    <h3>Filtrar:</h3>
                    <select value={funcao} onChange={(e) => setFuncao(e.target.value)} >
                      <option value="" disabled hidden>Função</option>
                      <option value="2">Opção 2</option>
                      <option value="3">Opção 3</option>
                    </select>

                    <select value={etapas} onChange={(e) => setEtapas(e.target.value)} >
                      <option value="" disabled hidden>Etapa</option>
                      <option value="2">Opção 2</option>
                      <option value="3">Opção 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className={`${styles.usuarioTitulos} ${styles.linha}`}>
                <h3>Nome</h3>
                <h3>Cargo</h3>
                <h3>Grupo</h3>
                <h3>Etapa</h3>
              </div>

              <div id="usuarios">
                <hr />
                <UserJornada />
                <hr />
                <UserJornada />
                <hr />
                <UserJornada />
                <hr />
                <UserJornada />
                <hr />
                <UserJornada />
                <hr />
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </section>

      <article className={styles.parceiros}>
        <div id="paceirosHeader">
          <h3>Parceiros</h3>
        </div>
        <div className={styles.parceiros_foto}>
          <Parceiro />
          <Parceiro />
          <Parceiro />
          <Parceiro />
        </div>
      </article>
    </main>
  );
}
