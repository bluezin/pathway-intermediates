import { errorMessage } from "@/components/templates/contact-form/schema/error-message";

const validValues = {
  firstName: "Juan",
  lastName: "Perez",
  subject: "Products",
  email: "juan@example.com",
  message: "Hello",
  country: "USA",
  company: "Acme",
};

describe("errorMessage schema", () => {
  it("resolves valid values", async () => {
    await expect(errorMessage.validate(validValues)).resolves.toBeTruthy();
  });

  it("rejects an invalid email", async () => {
    await expect(
      errorMessage.validate({ ...validValues, email: "invalid-email" }),
    ).rejects.toThrow("Enter a valid email address");
  });

  it("rejects each required field when empty", async () => {
    const empty = {
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
      country: "",
      company: "",
    };

    await expect(errorMessage.validate(empty)).rejects.toThrow();
  });
});
