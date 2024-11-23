import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { createEmployee, updateEmployee } from "../api/employeeApi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { formattedDate } from "../utils/dateFormat";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      gender: "",
      mobile_number: "",
      email: "",
      date_of_birth: "",
      department: "",
      position: "",
      salary: "",
      joined_date: "",
      resigning_date: "",
      address: "",
    },
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await updateEmployee(id);
          const formattedData = {
            ...data,
            date_of_birth: formattedDate(data.date_of_birth),
            joined_date: formattedDate(data.joined_date),
            resigning_date: formattedDate(data.resigning_date),
          };
          reset(formattedData);
        } catch (error) {
          console.error("Failed to fetch employee data:", error);
        }
      };

      fetchData();
    }
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      if (id) {
        await updateEmployee(id, data);
      } else {
        await createEmployee(data);
      }

      reset();
      navigate("/employees");
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="First Name"
          name="first_name"
          register={register}
          validation={{ required: "First name is required" }}
          errors={errors}
        />
        <FormField
          label="Last Name"
          name="last_name"
          register={register}
          validation={{ required: "Last name is required" }}
          errors={errors}
        />
        <FormField
          label="Gender"
          name="gender"
          type="select"
          register={register}
          validation={{ required: "Gender is required" }}
          errors={errors}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Other", value: "Other" },
          ]}
        />
        <FormField
          label="Mobile Number"
          name="mobile_number"
          type="tel"
          register={register}
          validation={{
            required: "Mobile number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Please enter a valid 10-digit mobile number",
            },
          }}
          errors={errors}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          register={register}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          errors={errors}
        />
        <FormField
          label="Date of Birth"
          name="date_of_birth"
          type="date"
          register={register}
          validation={{ required: "Date of birth is required" }}
          errors={errors}
        />
        <FormField
          label="Department"
          name="department"
          register={register}
          validation={{ required: "Department is required" }}
          errors={errors}
        />
        <FormField
          label="Position"
          name="position"
          register={register}
          validation={{ required: "Position is required" }}
          errors={errors}
        />
        <FormField
          label="Salary"
          name="salary"
          type="number"
          register={register}
          validation={{
            required: "Salary is required",
            min: { value: 0, message: "Salary must be greater than 0" },
          }}
          errors={errors}
        />
        <FormField
          label="Joined Date"
          name="joined_date"
          type="date"
          register={register}
          validation={{ required: "Joined date is required" }}
          errors={errors}
        />
        <FormField
          label="Resigning Date"
          name="resigning_date"
          type="date"
          register={register}
          errors={errors}
        />
      </div>
      <FormField
        label="Address"
        name="address"
        type="textarea"
        register={register}
        validation={{ required: "Address is required" }}
        errors={errors}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Employee
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
