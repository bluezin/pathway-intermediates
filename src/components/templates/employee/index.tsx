/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./index.module.css";

const EmployeeTemplate = () => {
  const employees = [
    {
      name: "Eric Kwon",
      jobTitle: "CEO",
      id: "1",
      image: "/employees/employee.png",
    },
    {
      name: "Chansol Park",
      jobTitle: "Product Manager",
      id: "2",
      image: "/employees/employee.png",
    },
    {
      name: "Dave Ahn",
      jobTitle: "Administrative Manager",
      id: "3",
      image: "/employees/employee.png",
    },
    {
      name: "Jason Quick",
      jobTitle: "National Poultry Account Manager",
      id: "4",
      image: "/employees/employee.png",
    },
    {
      name: "Brad Bunnett",
      jobTitle: "National Ruminant Account Manager",
      id: "5",
      image: "/employees/employee.png",
    },
    {
      name: "Jeff Harding",
      jobTitle: "Ruminant Account Manager",
      id: "6",
      image: "/employees/employee.png",
    },
    {
      name: "Leasea Butler",
      jobTitle: "Poultry Technical Manager",
      id: "7",
      image: "/employees/employee.png",
    },
    {
      name: "Edwin Na",
      jobTitle: "Product Manger",
      id: "8",
      image: "/employees/employee.png",
    },
    {
      name: "Yolemni Jimenez",
      jobTitle: "Regional Manager for Latin America",
      id: "9",
      image: "/employees/employee.png",
    },
  ];

  return (
    <section className={styles.container}>
      <h2>Committed to providing the best solutions for our customers</h2>

      <div className={styles.content}>
        {employees.map((item) => (
          <div key={item.id} className={styles.content__item}>
            <img src={item.image} alt={item.name} />
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
