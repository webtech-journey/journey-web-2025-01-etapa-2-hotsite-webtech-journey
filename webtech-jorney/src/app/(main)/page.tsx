import Image from "next/image";
import "./home.css";
import JourneySection from "../../components/JourneySection/JourneySection";


// ==========================================================
// ETAPA 1: IMPORTAR AS FUNÇÕES DA API
// ==========================================================

// Suas importações de imagens estáticas (para layout, etc.)
import imgArrow from "../../../public/img/ArrowClick.png";
import imgWorkshop1 from "../../../public/img/Workshop1.png";
import imgWorkshop2 from "../../../public/img/Workshop2.png";
import imgTool from "../../../public/img/tool.svg";
import imgJourneyEsquema from "../../../public/img/JorneyEsquema.png";
import imgArrow2 from "../../../public/img/ArrowClick2.png";
import imgMiniBanner from "../../../public/img/MiniBanner.png";
import { Journey, Project, Partner, Category } from "@/lib/types";
import { getJourneys, getProjects, getPartners, getCategories } from "@/lib/api";
import ProjectSection from "../../components/ProjectSection/ProjectSection";

export default async function Home() {

  // ==========================================================
  // ETAPA 2: BUSCAR OS DADOS DA API DE FORMA CONCORRENTE
  // ==========================================================
  const [initialJourneys, projects, partners, categories]: [Journey[], Project[], Partner[], Category[]] = await Promise.all([
    getJourneys(), // Busca inicial, sem filtro
    getProjects(),
    getPartners(),
    getCategories()
  ]);

  return (
    <div>
      <main>
        <div className="banner">
          <div className="banner__title animate__animated animate__fadeInLeft">
            <h1>Webtech </h1>
            <span>Journey</span>
          </div>
          <div className="banner__description animate__animated animate__fadeInLeft">
            <p>WebTech Journey é uma jornada de aprendizado que conecta inclusão digital, capacitação profissional e oportunidades reais!</p>
          </div>
          <a className="banner__link animate__animated animate__fadeInLeft" href="#">
            <div>
              <Image src={imgArrow} alt="Click aqui para iniciar sua jornada" width={50} height={50} />
              <p>Iniciar minha jornada</p>
            </div>
          </a>
        </div>

        <div className="wireframe1">
          <div className="wireframe1__content animate__animated animate__fadeInLeft">
            <h2><span className="underline_yellow">Sobre We</span>btech Journey?</h2>
            <p>O WebTech Journey é um programa que tem como objetivo <span className="yellow_text underline_yellow">promover inclusão digital</span> e oportunidades de trabalho para o público geral por meio de uma <span className="yellow_text underline_yellow">jornada de aprendizado</span> com uma <span className="yellow_text underline_yellow">metodologia própria</span>. Através da extensão na universidade, o projeto capta alunos e professores que fornecem  conteúdo e apoio técnico, promovendo uma série de eventos de engajamento e multiplicação do conhecimento, mostrando todas estas ações em canais  de redes sociais (Linkedin, Youtube, Instagram e GitHub).</p>
          </div>
          <div className="wireframe1__image animate__animated animate__fadeInRight">
            <div className="wireframe1__image__image">
              <Image src={imgWorkshop1} alt="Workshop de Mobile" width={550} height={450} />
            </div>
            <div className="wireframe1__image__black"></div>
            <div className="wireframe1__image__yellow"></div>
          </div>
        </div>

        <div className="wireframe2">
          <div className="wireframe2__image animate__animated animate__fadeInLeft">
            <div className="wireframe2__image__image">
              <Image src={imgWorkshop2} alt="Workshop de Mobile" width={500} height={450} />
            </div>
            <div className="wireframe2__image__black"></div>
            <div className="wireframe2__image__yellow"></div>
          </div>
          <div className="wireframe2__content animate__animated animate__fadeInRight">
            <h2><span className="yellow_text"><span className=" underline_yellow">Metodolo</span>gia</span> do Programa</h2>
            <p>O Journey conta com a <span className="yellow_text underline_yellow">experiência de mentores</span> do programa tanto na atuação docente quanto no mercado de  trabalho para a <span className="yellow_text underline_yellow">formação de talentos</span> e o processo de capacitação emprega <span className="yellow_text underline_yellow">metodologias ativas</span> aliadas às abordagens ágeis de desenvolvimento de  <span className="yellow_text underline_yellow">soluções digitais</span>.</p>
          </div>
        </div>

        <div className="wireframe3 animate__animated animate__bounceInUp">
            O Journey foi concebido com alguns pilares que norteiam todo o processo  para <span className="yellow_text underline_yellow">capacitação dos participantes</span>, garantindo que eles <span className="yellow_text underline_yellow">adquiram  habilidades técnicas</span> e comportamentais essenciais para o <span className="yellow_text underline_yellow">sucesso no  mercado de trabalho</span>.
        </div>

        <div className="wireframe4">
          <div className="wireframe4__light">
            <Image src={imgTool} alt="Ferramenta" width={60} height={60} />
            <h2>Desenvolvimento de Competencias</h2>
            <p>Ensino baseado em competencias</p>
          </div>
          <div className="wireframe4__dark">
            <Image src={imgTool} alt="Ferramenta" width={60} height={60} />
            <h2>Curadoria de Conteudo</h2>
            <p>Colaboração na criação de conteudo</p>
          </div>
          <div className="wireframe4__light">
            <Image src={imgTool} alt="Ferramenta" width={60} height={60} />
            <h2>Valor e Inpacto Social</h2>
            <p>Geração de valor social</p>
          </div>
        </div>
        
        {/* ========================================================== */}
        {/* SEÇÃO: PARCEIROS */}
        {/* ========================================================== */}
        <div className="wireframe5">
          <div className="wireframe5__content animate__animated animate__fadeInLeft">
            <h2>Como <span className="yellow_text">fun<span className="underline_yellow">ciona?</span></span></h2>
            <p>O WebTech Journey é dividido em <span className="yellow_text underline_yellow">etapas</span> que vão aumentando a complexidade na construção de uma <span className="yellow_text underline_yellow">aplicação completa</span> e com tecnologias utilizadas no <span className="yellow_text underline_yellow">mercado.</span></p>
            <div className="wireframe5__image__black">
              <div className="parceiros-texto">
                <p>Parceiros do Webtech Journey</p>
              </div>
              <div className="wireframe5__image__yellow">
                {partners.map((partner: Partner) => (
                  <Image key={partner.id} src={partner.logoUrl} alt={`Logo ${partner.name}`} width={100} height={40} />
                ))}
              </div>
            </div>
          </div>
          <div className="wireframe5__image animate__animated animate__fadeInRight">
            <div className="wireframe5__image__image">
              <Image src={imgJourneyEsquema} alt="Esquema Journey" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        <div className="wireframe6 animate__animated animate__bounceInUp">
            Na medida em que avança nas etapas, os participantes podem ir <span className="yellow_text underline_yellow">conquistando bônus</span> na disciplina e também reconhecimento que podem compartilhar com  seus colegas
        </div>

        

        {/* ========================================================== */}
        {/* SEÇÃO: JOURNEYS */}
        {/* ========================================================== */}
        <JourneySection initialJourneys={initialJourneys} categories={categories} />

        {/* ========================================================== */}
        {/* SEÇÃO: PROJETOS */}
        {/* ========================================================== */}
        <ProjectSection projects={projects} />       
        

        <div className="wireframe1">
          <div className="wireframe1__content animate__animated animate__fadeInLeft">
            <h2 className="bigTitle">Eai <span className="yellow_text">b<span className="underline_yellow">ora</span></span><br /> se juntar <br /> nessa <span className="yellow_text  underline_yellow"> jornada?!</span></h2>
            <a className="wireframe1__content__link animate__animated animate__fadeInLeft" href="#">
              <div>
                <p>Iniciar minha jornada</p>
                <Image src={imgArrow2} alt="Click aqui para iniciar sua jornada" width={30} height={50} />
              </div>
            </a>
          </div>
          <div className="wireframe1__image animate__animated animate__fadeInRight">
            <div className="wireframe1__image__image">
              <Image src={imgMiniBanner} alt="Banner final" width={500} height={300} />
            </div>
            <div className="wireframe1__image__black"></div>
            <div className="wireframe1__image__yellow"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
