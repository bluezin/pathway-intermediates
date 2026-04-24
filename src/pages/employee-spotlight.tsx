import Seo from "@/components/atoms/seo";
import Header from "@/components/organisms/header";
import EmployeeTemplate from "@/components/templates/employee";

const EmployeeSpotlight = () => {
  return (
    <>
      <Seo
        title="Employee Spotlight - Pathway"
        description="Meet the team behind Pathway Intermediates. Discover the people driving innovation and delivering solutions in animal nutrition."
      />

      <Header
        banner="/images/banners/banner-employee.png"
        title="Employee Spotlight"
      />
      <EmployeeTemplate />
    </>
  );
};

export default EmployeeSpotlight;
