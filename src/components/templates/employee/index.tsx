import Image from "next/image";
import styles from "./index.module.css";

const EmployeeTemplate = () => {
  const employees = {
    top: [
      {
        name: "Stevenson Hwang",
        jobTitle: "Chairman",
        id: "1",
        image: "/images/employees/top/stevenson-hwang.webp",
      },
      {
        name: "Edward Youngman",
        jobTitle: "CEO",
        id: "2",
        image: "/images/employees/top/edward-youngman.webp",
      },
      {
        name: "Robin Jones",
        jobTitle: "Director",
        id: "3",
        image: "/images/employees/top/robin-jones.webp",
      },
      {
        name: "David Garnett",
        jobTitle: "Research Advisor",
        id: "4",
        image: "/images/employees/top/david-garnett.webp",
      },
      {
        name: "Shane Davies",
        jobTitle: "COO",
        id: "5",
        image: "/images/employees/top/shane-davies.webp",
      },
      {
        name: "Andrew Armstrong",
        jobTitle: "Sales & Marketing Director",
        id: "6",
        image: "/images/employees/top/andrew-armstrong.webp",
      },
      {
        name: "Tracy Wheeler",
        jobTitle: "Head of Finance",
        id: "7",
        image: "/images/employees/top/tracy-wheeler.webp",
      },
      {
        name: "Danny Cho",
        jobTitle: "CEO (EASY BIO, Inc.)",
        id: "8",
        image: "/images/employees/top/danny-cho.webp",
      },
      {
        name: "Paul Shin",
        jobTitle: "CSO",
        id: "9",
        image: "/images/employees/top/paul-shin.webp",
      },
      {
        name: "Johnny Kang",
        jobTitle: "Head of Sales Division",
        id: "10",
        image: "/images/employees/top/johnny-kang.webp",
      },
      {
        name: "Marina Sung",
        jobTitle: "Technical & Innovation Manager",
        id: "11",
        image: "/images/employees/top/marina-sung.webp",
      },
      {
        name: "Sonny Son",
        jobTitle: "New Business Development Team Lead",
        id: "12",
        image: "/images/employees/top/sonny-son.webp",
      },
      {
        name: "Young Kang",
        jobTitle: "Regional Manager",
        id: "13",
        image: "/images/employees/top/young-kang.webp",
      },
      {
        name: "Ryan Song",
        jobTitle: "Regional Manager",
        id: "14",
        image: "/images/employees/top/ryan-song.webp",
      },
      {
        name: "Ralph Kim",
        jobTitle: "Regional Manager",
        id: "15",
        image: "/images/employees/top/ralph-kim.webp",
      },
      {
        name: "Pooya Akbarian",
        jobTitle: "Regional Director",
        id: "16",
        image: "/images/employees/top/pooya-akbarian.webp",
      },
    ],
    usa: [
      {
        name: "Eric Kwon",
        jobTitle: "CEO",
        id: "1",
        image: "/images/employees/usa/eric-kwon.webp",
      },
      {
        name: "Chansol Park",
        jobTitle: "Product Manager",
        id: "2",
        image: "/images/employees/usa/chansol-park.webp",
      },
      {
        name: "Dave Ahn",
        jobTitle: "Administrative Manager",
        id: "3",
        image: "/images/employees/usa/dave-ahn.webp",
      },
      {
        name: "Jason Quick",
        jobTitle: "Monogastric Sales Director",
        id: "4",
        image: "/images/employees/usa/jason-quick.webp",
      },
      {
        name: "Shannon Burasco",
        jobTitle: "Senior National Account Manager for Poultry",
        id: "5",
        image: "/images/employees/usa/shannon-burasco.webp",
      },
      {
        name: "Brad Bunnett",
        jobTitle: "Ruminant Sales Director",
        id: "6",
        image: "/images/employees/usa/brad-bunnett.webp",
      },
      {
        name: "Jeff Harding",
        jobTitle: "Senior National Account Manager for Ruminant",
        id: "7",
        image: "/images/employees/usa/jeff-harding.webp",
      },
      {
        name: "Edwin Na",
        jobTitle: "Product Manager",
        id: "8",
        image: "/images/employees/usa/edwin-na.webp",
      },
      {
        name: "Yolemni Jimenez",
        jobTitle: "Regional Manager for Latin America",
        id: "9",
        image: "/images/employees/usa/yolemni-jimenez.webp",
      },
      {
        name: "Jake Lee",
        jobTitle: "National Account Manager for Swine",
        id: "10",
        image: "/images/employees/usa/jake-lee.webp",
      },
      {
        name: "Andrew Brown",
        jobTitle: "Technical Services Manager - Monogastric",
        id: "11",
        image: "/images/employees/usa/andrew-brown.webp",
      },
      {
        name: "Patricia Rodel",
        jobTitle: "Brand Marketing Manager",
        id: "12",
        image: "/images/employees/usa/patricia-rodel.webp",
      },
    ],
    bangladesh: [
      {
        name: "Abdur Rahman",
        jobTitle: "Regional Director",
        id: "1",
        image: "/images/employees/bangladesh-china/abdur-rahman.webp",
      },
    ],
    china: [
      {
        name: "Hanlin Li",
        jobTitle: "COO",
        id: "2",
        image: "/images/employees/bangladesh-china/hanlin-li.webp",
      },
    ],
    europe: [
      {
        name: "Matthew Oldnall",
        jobTitle: "Technical and Sales Manager Europe",
        id: "1",
        image: "/images/employees/europe/matt-oldnall.webp",
      },
      {
        name: "Caroline Donaldson",
        jobTitle: "Technical Sales Manager",
        id: "2",
        image: "/images/employees/europe/caroline-donaldson.webp",
      },
      {
        name: "Tod Thrivilas",
        jobTitle: "Planning Manager",
        id: "3",
        image: "/images/employees/europe/tod-thrivilas.webp",
      },
      {
        name: "Lloyd Cooper",
        jobTitle: "Senior Research Chemist",
        id: "4",
        image: "/images/employees/europe/lloyd-cooper.webp",
      },
      {
        name: "Nathan Johns",
        jobTitle: "Senior Molecular Biologist",
        id: "5",
        image: "/images/employees/europe/nathan-johns.webp",
      },
    ],
    thailand: [
      {
        name: "Tanakritt Sapchookul",
        jobTitle: "COO",
        id: "1",
        image: "/images/employees/thailand/tanakritt-sapchukun.webp",
      },
      {
        name: "Pawinee Kingkan",
        jobTitle: "Technical Sales Manager",
        id: "2",
        image: "/images/employees/thailand/pawinee-kingkan.webp",
      },
      {
        name: "Tasama Karukarach",
        jobTitle: "Technical Sales Representative",
        id: "3",
        image: "/images/employees/thailand/tasama-karukarach.webp",
      },
      {
        name: "Jiraporn Thamma",
        jobTitle: "Technical Sales Manager",
        id: "4",
        image: "/images/employees/thailand/jiraporn-thamma.webp",
      },
      {
        name: "Amonrat Toolkhuntod",
        jobTitle: "Administrative Manager",
        id: "5",
        image: "/images/employees/thailand/amonrat-toolkhuntod.webp",
      },
      {
        name: "Nantanat Sapchukun",
        jobTitle: "Account Manager",
        id: "6",
        image: "/images/employees/thailand/nantanat-sapchukun.webp",
      },
    ],
    vietnam: [
      {
        name: "Daniel Choi",
        jobTitle: "CEO",
        id: "1",
        image: "/images/employees/vietnam/daniel-choi.webp",
      },
      {
        name: "Pio Lee",
        jobTitle: "COO",
        id: "2",
        image: "/images/employees/vietnam/pio-lee.webp",
      },
      {
        name: "Lily Le",
        jobTitle: "Sales Director",
        id: "3",
        image: "/images/employees/vietnam/lily-le.webp",
      },
      {
        name: "Tiffany Huynh",
        jobTitle: "Technical Sales Manager",
        id: "4",
        image: "/images/employees/vietnam/tiffany-huynh.webp",
      },
      {
        name: "Hannah Nguyen",
        jobTitle: "Administrative Manager",
        id: "5",
        image: "/images/employees/vietnam/hannah-nguyen.webp",
      },
    ],
    bioResourceInstitute: [
      {
        name: "Ron Kim",
        jobTitle: "Head of Research",
        id: "1",
        image: "/images/employees/bio-resource-institute/ron-kim.webp",
      },
      {
        name: "Ethan Lee",
        jobTitle: "Research and Development Team Lead",
        id: "2",
        image: "/images/employees/bio-resource-institute/ethan-lee.webp",
      },
      {
        name: "Nami Kim",
        jobTitle: "Analysis Team Lead",
        id: "3",
        image: "/images/employees/bio-resource-institute/nami-kim.webp",
      },
      {
        name: "Mason Kim",
        jobTitle: "Fermentation Biologist",
        id: "4",
        image: "/images/employees/bio-resource-institute/mason-kim.webp",
      },
      {
        name: "Aron Song",
        jobTitle: "Cellular Biochemist",
        id: "5",
        image: "/images/employees/bio-resource-institute/aron-song.webp",
      },
      {
        name: "Jessie Moon",
        jobTitle: "Research Analytic Chemist",
        id: "6",
        image: "/images/employees/bio-resource-institute/jessie-moon.webp",
      },
      {
        name: "Clare Park",
        jobTitle: "Research Analytic Chemist",
        id: "7",
        image: "/images/employees/bio-resource-institute/clare-park.webp",
      },
      {
        name: "Jamie Lee",
        jobTitle: "Microbiologist",
        id: "8",
        image: "/images/employees/bio-resource-institute/jamie-lee.webp",
      },
      {
        name: "Alice Kim",
        jobTitle: "Research Analytic Chemist",
        id: "9",
        image: "/images/employees/bio-resource-institute/alice-kim.webp",
      },
      {
        name: "Eunsu Han",
        jobTitle: "Research Analytic Chemist",
        id: "10",
        image: "/images/employees/bio-resource-institute/eunsu-han.webp",
      },
    ],
  };

  const employee = ({
    item,
  }: {
    item: { id: string; image: string; name: string; jobTitle: string };
  }) => (
    <div key={item.id} className={styles.content__item}>
      <div className={styles.content__item__containerImg}>
        <Image width={100} height={320} src={item.image} alt={item.name} />
      </div>

      <div className={styles.info}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.divider}></p>
        <p className={styles.job__title}>{item.jobTitle}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.container}>
      <h2>Committed to providing the best solutions for our customers</h2>

      <div className={styles.content}>
        {employees.top.map((item) => employee({ item }))}
      </div>

      <p className={styles.place}>
        USA <span></span>
      </p>
      <div className={styles.content}>
        {employees.usa.map((item) => employee({ item }))}
      </div>

      <p className={styles.place}>
        Bangladesh <span></span>
      </p>
      <div className={styles.content}>
        {employees.bangladesh.map((item) => employee({ item }))}
      </div>

      <p className={styles.place}>
        China <span></span>
      </p>
      <div className={styles.content}>
        {employees.china.map((item) => employee({ item }))}
      </div>

      <p className={styles.place}>
        Europe <span></span>
      </p>
      <div className={styles.content}>
        {employees.europe.map((item) => employee({ item }))}
      </div>

      <p className={styles.place}>
        Thailand <span></span>
      </p>
      <div className={styles.content}>
        {employees.thailand.map((item) => employee({ item }))}
      </div>

      <p className={styles.place}>
        Vietnam <span></span>
      </p>
      <div className={styles.content}>
        {employees.vietnam.map((item) => employee({ item }))}
      </div>

      <p className={styles.place}>
        Bio-Resource Institute <span></span>
      </p>
      <div className={styles.content}>
        {employees.bioResourceInstitute.map((item) => employee({ item }))}
      </div>
    </section>
  );
};

export default EmployeeTemplate;
