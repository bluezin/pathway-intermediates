import Header from "@/components/organisms/header";
import EmployeeTemplate from "@/components/templates/employee";

const EmployeeSpotlight = () => {
  return (
    <>
      <Header
        banner="/images/banners/banner-employee.png"
        title="Employee Spotlight"
      />
      <EmployeeTemplate />
    </>
  );
};

export default EmployeeSpotlight;
