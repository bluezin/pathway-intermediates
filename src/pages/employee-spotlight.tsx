import Head from "@/components/atoms/head";
import Header from "@/components/organisms/header";
import EmployeeTemplate from "@/components/templates/employee";

const EmployeeSpotlight = () => {
  return (
    <>
      <Head title="Employee Spotlight" description="Employee Spotlight" />

      <Header
        banner="/images/banners/banner-employee.png"
        title="Employee Spotlight"
      />
      <EmployeeTemplate />
    </>
  );
};

export default EmployeeSpotlight;
