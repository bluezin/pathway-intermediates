import styles from "./index.module.css";

const HistoryTemplate = () => {
  const history = [
    {
      year: "2026",
      text: "BioMatrix International (USA) acquired",
    },
    {
      year: "2021",
      text: "Chengdu China branch established",
    },
    {
      year: "2019",
      text: "Pathway Intermediates USA branch established Pathway Intermediates brand launching Vietnam branch established",
    },
    {
      year: "2018",
      text: "Shanghai office opened",
    },
    {
      year: "2017",
      text: "Thailand branch established",
    },
    {
      year: "2015",
      text: "Joint venture established in China",
    },
    {
      year: "2014",
      text: "Middle East office openedObtainment of FAMI-QSNew plant of Pathway Intermediates Limited opened at Atcham, United Kingdom",
    },
    {
      year: "2013",
      text: "Pathway Intermediates International opened at South Korea",
    },
    {
      year: "2012",
      text: "Obtainment of GMP certificate (SGS)Pathway Intermediates Limited listed on Queen’s Award for Enterprise",
    },
    {
      year: "2011",
      text: "Joint venture with Pathway Intermediates Limited established",
    },
    {
      year: "2001",
      text: "Foundation of Pathway Intermediates Limited in United Kingdom",
    },
    {
      year: "2000",
      text: "Philippines branch establishedObtainment of ISO 22000 and HACCP certificates (SGS)",
    },
    {
      year: "1999",
      text: "EASY BIO listed on stock market (KOSDAQ)",
    },
    {
      year: "1998",
      text: "Joint venture with GNC Bioferm in Canada established1995 Bio-Resource Institute opened",
    },
    {
      year: "1989",
      text: "Exclusive distribution contract with FORMAT International on animal feed formulation programConstruction of feed additives plant in South Korea",
    },
    {
      year: "1988",
      text: "Foundation of EASY BIO in South Korea",
    },
  ];

  return (
    <section className={styles.container}>
      <h2>Leading the Way to Sustainability</h2>

      {history.map((item) => (
        <div className={styles.content} key={item.year}>
          <p className={styles.year}>{item.year}</p>
          <p className={styles.text}>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default HistoryTemplate;
