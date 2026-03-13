import Image from "next/image";
import styles from "./index.module.css";

const EmployeeTemplate = () => {
  const employees = [
    {
      name: "Eric Kwon",
      jobTitle: "CEO",
      id: "1",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Chansol Park",
      jobTitle: "Product Manager",
      id: "2",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Dave Ahn",
      jobTitle: "Administrative Manager",
      id: "3",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Jason Quick",
      jobTitle: "National Poultry Account Manager",
      id: "4",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Brad Bunnett",
      jobTitle: "National Ruminant Account Manager",
      id: "5",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Jeff Harding",
      jobTitle: "Ruminant Account Manager",
      id: "6",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Leasea Butler",
      jobTitle: "Poultry Technical Manager",
      id: "7",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Edwin Na",
      jobTitle: "Product Manger",
      id: "8",
      image: "/images/employees/employee.jpg",
    },
    {
      name: "Yolemni Jimenez",
      jobTitle: "Regional Manager for Latin America",
      id: "9",
      image: "/images/employees/employee.jpg",
    },
  ];

  return (
    <section className={styles.container}>
      <h2>Committed to providing the best solutions for our customers</h2>

      <div className={styles.content}>
        {employees.map((item) => (
          <div key={item.id} className={styles.content__item}>
            <div className={styles.content__item__containerImg}>
              <Image width={100} height={320} src={item.image} alt={item.name} />
            </div>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.divider}></p>
            <p>{item.jobTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmployeeTemplate;
