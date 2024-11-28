import React, { useState } from 'react';
import "../styles/sexualidade.css";
import Footer from "../components/Footer";

function Gravidez() {
  return (
    <div>
      <div id="particle-container">
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      <div  className="sexualidade-container">
        {/* Título */}
        <h1 className="title">Xiii, será que engravidei?</h1>

        {/* Seção de subtópicos */}
        <section className="topics-section">
          <div className="topics-container">
              <div className="text">
                Esqueceu de tomar a pílula? A camisinha estourou? Essas situações, além de comuns, podem trazer 
                muita ansiedade e levantar várias perguntas. Mesmo com acesso a informações e métodos 
                contraceptivos, o tema ainda é cercado por dúvidas. Afinal, como o corpo reage nessas situações? 
                E o que fazer diante de um possível "acidente" contraceptivo?
                <br></br><br></br>
                Primeiro, é importante lembrar que o uso de métodos como a pílula, camisinha, DIU e até mesmo a 
                tabelinha podem ajudar bastante a evitar uma gravidez indesejada, mas cada método tem suas próprias 
                condições de uso e níveis de eficácia. Por exemplo, a pílula anticoncepcional é altamente eficaz 
                quando tomada corretamente, mas basta um ou dois dias de esquecimento para que sua proteção diminua. 
                Da mesma forma, preservativos podem rasgar ou escorregar, principalmente se não forem usados do jeito 
                certo.
              </div>
            <div className="topic-content">
                <div className="text">
                    Essas falhas nos métodos são mais comuns do que se imagina, e muitos não sabem exatamente o que fazer quando 
                    isso acontece. Em situações como essas, além da preocupação imediata, é normal surgirem dúvidas sobre como 
                    o corpo vai responder. Algumas pessoas se perguntam se é possível "sentir" alguma coisa diferente logo após o 
                    ocorrido, mas os primeiros sinais de uma possível gravidez só aparecem mais tarde. Por isso, observar o corpo 
                    pode trazer tranquilidade, mas é essencial lembrar que ansiedade e estresse também podem afetar o ciclo menstrual, 
                    causando até atrasos e outros sintomas que confundem.
                </div>
                <div className="image">
                    <img className="hvr-grow"
                        src={require("../assets/illustrations/banana.svg").default}
                        alt="Ilustração de Sexualidade"
                    />
                </div>
            </div>
            <div className="text">
                Outra questão importante é entender o que fazer após uma falha contraceptiva. Atualmente, existe a 
                pílula do dia seguinte, que funciona como uma opção de emergência, ajudando a reduzir o risco de 
                gravidez se tomada logo após o ocorrido. No entanto, é importante lembrar que essa não é uma solução 
                de uso contínuo, e não substitui métodos contraceptivos regulares.
                <br></br><br></br>
                <h2 className="highlight-text">Cuidado, hein? Pílula do dia seguinte NÃO é balinha! 
                O ideal é tomar uma a cada 3 meses, e só em casos de urgência, senão a taxa de 
                eficácia cai (ela para de fazer efeito).</h2>
                <br></br>
                <div>
                O conhecimento sobre seu corpo pode ajudar a fazer escolhas contraceptivas mais conscientes. O corpo 
                feminino passa por fases diferentes ao longo do mês, e entender essas mudanças – como o período de 
                ovulação, em que a fertilidade aumenta – permite não só perceber os sinais que o corpo dá, mas também 
                utilizar métodos contraceptivos com mais eficiência. A tabelinha, por exemplo, é um método que pode ser 
                útil para algumas pessoas, mas exige autoconhecimento e atenção aos detalhes do ciclo, e também pode ser 
                combinada com outros métodos contraceptivos não-hormonais.
                </div>
            </div>
            <div className="topic-content">
                <div className="image2">
                    <img className="hvr-grow"
                        src={require("../assets/illustrations/mao.svg").default}
                        alt="Ilustração de Sexualidade"
                    />
                </div>
                <div className="text">
                    Além disso, conhecer o próprio corpo vai além de saber sobre o ciclo menstrual. A percepção dos pequenos 
                    sinais, como mudanças de humor, dor nos seios ou cólicas leves em certos momentos do mês, também pode 
                    ajudar a antecipar ou entender o que o corpo está indicando. Esse autoconhecimento dá mais segurança para 
                    diferenciar um sintoma normal de algo que foge da rotina e, assim, evita a ansiedade que leva a suposições 
                    precipitadas sobre uma possível gravidez.
                </div>
            </div>
            <div className="topic">
                <div className="text">
                    Se, por acaso, houver uma falha no método contraceptivo, é natural sentir uma série de emoções e pensamentos intensos. 
                    É nesse momento que buscar informações corretas e aprender a interpretar os sinais do próprio corpo se torna essencial. 
                    A pílula do dia seguinte, por exemplo, é um recurso emergencial que pode oferecer mais tranquilidade, mas entender seu 
                    funcionamento e saber quando e como usá-la de maneira segura e consciente é igualmente importante. Ela age adiando a ovulação, 
                    caso ainda não tenha ocorrido, e tem sua eficácia maior quanto antes for tomada após o "acidente".
                    <br></br><br></br>
                </div>
                <h2 className="subtitle">Tudo é mais intenso na adolescência.</h2>
            </div>
            <div className="text">
                Para adolescentes, que muitas vezes estão conhecendo o próprio corpo e lidando com novas emoções e descobertas, essa questão se torna 
                ainda mais delicada. A gravidez na adolescência traz desafios únicos, que vão desde o impacto na saúde até mudanças significativas na 
                vida familiar e social. Embora o tema seja cercado de tabus, é essencial entender que, na adolescência, a falta de informação sobre 
                contracepção e as mudanças do corpo pode aumentar o risco de uma gravidez inesperada.
            </div>
            <div className="topic-content">
                <div className="text">
                    Muitos jovens têm acesso limitado a informações sobre métodos contraceptivos, e isso pode contribuir para a ocorrência de falhas ou uso 
                    incorreto de métodos como pílulas e preservativos. Além disso, as transformações do corpo durante a adolescência também trazem confusão 
                    e incertezas, especialmente porque essa é uma fase de descobertas em que o autoconhecimento ainda está se formando.
                </div>
                <div className="image">
                    <img className="hvr-grow"
                        src={require("../assets/illustrations/grupo.svg").default}
                        alt="Ilustração de Sexualidade"
                    />
                </div>
            </div>
          </div>
          <div className="topic">
  <h2 className="subtitle">O sexo não deveria ser um tabu!</h2>
  <div className="text">
  A falta de educação sexual nas escolas e em casa muitas vezes deixa os adolescentes sem orientação sobre como
   o corpo funciona, como os métodos contraceptivos atuam e qual a importância de manter uma comunicação aberta
    sobre sexualidade. Muitas dúvidas que surgem – como "será que eu engravidei?", "como funciona o ciclo 
    menstrual?", "qual é o método mais seguro?" – ficam sem respostas seguras, levando os adolescentes a buscar
     informações por conta própria, nem sempre de fontes confiáveis.
     <br></br><br></br>
     Segundo o artigo “CONHECIMENTOS DE ADOLESCENTES SOBRE MÉTODOS CONTRACEPTIVOS E INFECÇÕES SEXUALMENTE TRANSMISSÍVEIS”, 
     uma pesquisa retornou resultados acerca do conhecimento de jovens sobre os métodos de prevenção.
     <br></br><br></br>
     Os principais métodos contraceptivos conhecidos pelos adolescentes entrevistados foram o preservativo masculino (94,4%), 
     o contraceptivo hormonal oral (83,1%), o preservativo feminino (76,3%) e a contracepção hormonal de emergência (74,5%). 
     Observou-se diferença quanto ao conhecimento dos métodos contraceptivos em relação ao sexo. As participantes do sexo feminino 
     possuíam maiores informações quanto à diversidade de métodos contraceptivos, em destaque: preservativo feminino, contraceptivo hormonal 
     oral, contracepção hormonal de emergência, calendário e laqueadura tubária.
  </div>

  <div className="topic-content">
        <div className="image2">
            <img className="hvr-grow"
                src={require("../assets/illustrations/utero.svg").default}
                alt="Ilustração de Sexualidade"
            />
        </div>
        <div className="text">
        Em conclusão, o estudo evidencia que, embora os adolescentes conheçam alguns métodos contraceptivos, 
        como o preservativo masculino e o contraceptivo hormonal oral, ainda existem diferenças significativas 
        no nível de conhecimento entre os sexos, especialmente em relação à diversidade dos métodos disponíveis. 
            </div>
        </div>

    {/* Texto adicional */}
    <div className="text">
        Além disso, essa lacuna no conhecimento pode criar uma falsa sensação de segurança, levando os adolescentes a 
        não se protegerem adequadamente durante o ato sexual. Isso se agrava quando a educação sexual não é abordada de 
        forma clara e completa, sem destacar a importância do uso contínuo e correto dos métodos, ou quando o diálogo 
        sobre sexualidade é tabu, tanto em casa quanto nas escolas.
        <br /><br />
        A falta de informações sobre a variedade de métodos contraceptivos também limita as escolhas dos jovens, fazendo 
        com que eles dependam de métodos menos eficazes ou de um número reduzido de opções, como o preservativo masculino. 
        Isso aumenta as chances de falhas, principalmente quando o uso do método não é acompanhado de uma educação constante 
        sobre os cuidados necessários.
        <br /><br />
        Como resultado, muitos adolescentes acabam enfrentando uma gravidez precoce, que pode interferir nos seus planos de vida, 
        comprometer sua saúde e limitar seu desenvolvimento pessoal e profissional. Esse ciclo de desinformação e falta de apoio 
        pode perpetuar um ciclo de gravidez na adolescência, impactando não apenas a vida dos jovens, mas também a sociedade como 
        um todo. Portanto, o conhecimento adequado e a conscientização sobre os métodos contraceptivos são fundamentais para a prevenção 
        da gravidez precoce e para o empoderamento dos adolescentes a fazerem escolhas responsáveis e informadas sobre sua sexualidade.
        <br /><br />
        <br /><br />
    </div>
    </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Gravidez;
