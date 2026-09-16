import { useState } from "react";
import MinimalHeader from "../../components/Headers/MinimalHeader";
import { FieldArray, Form, Formik } from "formik";
import type { AccountSetupValues } from "../../types/componentTypes.ts/AccountSetupTypes";
import { accountSetupValidationSchema } from "../../utils/validations/accountSetupValidation";
import ValidationError from "../../components/Common/ValidationError";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { setCredentials } from "../../features/auth/authSlice";
import { ACCOUNT_SETUP_FIELDS, SERVICE_SUGGESTIONS } from "../../constants/accountSetupStaticValues";
import CustomFormField from "../../components/Manager/CustomFormField";


const INITIAL_VALUES: AccountSetupValues = {
  institutionName: "",
  institutionType: "",
  phone: "",
  description: "",
  services: [],
};

const AccountSetup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [isProcceded, setIsProcceded] = useState(false);
  const [newService, setNewService] = useState("");

  const totalPage = ACCOUNT_SETUP_FIELDS.length + 1;

  const currentField = ACCOUNT_SETUP_FIELDS[currentPage - 1];

  const isServicesPage = currentPage === totalPage;

  const { userInfo } = useSelector((state: RootState) => state.auth)

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPage));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };


  const handleSubmit = async (values: AccountSetupValues) => {
    try {
      const res = await fetch("http://localhost:5000/api/owner/account-setup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          ownerId: userInfo?._id,
          ...values,
        })
      })

      const response = await res.json();

      if (!res.ok) {
        console.log(response.message)
        return;
      }

      dispatch(setCredentials(response.user))
      navigate('/home')

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="flex min-h-screen flex-col">
      <MinimalHeader />

      <main className="flex flex-1 -mt-24 px-6 lg:px-12">
        <div className="flex w-full justify-center">
          {/* =========================
              WELCOME SCREEN
          ========================== */}

          {!isProcceded && (
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-4xl font-normal">
                Welcome to EasyFlow 👋
              </span>

              <span className="text-4xl font-medium">
                Let’s get your account ready.
              </span>

              <p className="mt-2 max-w-xl text-base text-gray-500">
                Just a few details about you and your institution,
                and you’ll be all set to get started.
              </p>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setIsProcceded(true)}
                  className="cursor-pointer rounded-lg bg-theme px-6 py-2 text-white hover:bg-green-700"
                >
                  Proceed
                </button>
              </div>
            </div>
          )}

          {/* =========================
              ACCOUNT SETUP FORM
          ========================== */}

          {isProcceded && (
            <div className="flex w-full max-w-2xl flex-col justify-center">
              <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={accountSetupValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, errors }) => {

                  const currentValue = values[currentField?.value];

                  console.log(errors)

                  return (
                    <Form className="flex w-full flex-col gap-6">
                      {/* =========================
                        NORMAL FORM FIELDS
                    ========================== */}

                      {!isServicesPage && currentField && (
                        <div className="flex w-full flex-col gap-3">
                          <label
                            htmlFor={currentField.value}
                            className="text-lg font-medium text-gray-700"
                          >
                            {currentField.label}:
                          </label>

                          {currentField.type === "textarea" ? (
                            <CustomFormField
                              name={currentField.value}
                              type="text"
                              placeholder={currentField.placeholder}
                              as="textarea"
                              rows={5}
                            />
                          ) : (
                            <CustomFormField
                              name={currentField.value}
                              type="text"
                              placeholder={currentField.placeholder}
                            />
                          )}
                        </div>
                      )}

                      {/* =========================
                        SERVICES PAGE
                    ========================== */}

                      {isServicesPage && (
                        <FieldArray name="services">
                          {({ push, remove }) => (
                            <div className="flex flex-col gap-6">
                              {/* Heading */}

                              <div>
                                <h2 className="text-2xl font-semibold text-gray-800">
                                  What do you offer?
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                  Select the services or courses your
                                  institution provides.
                                </p>
                              </div>

                              {/* =========================
                                COMMON SUGGESTIONS
                            ========================== */}

                              <div className="flex flex-col gap-3">
                                <p className="text-sm font-medium text-gray-700">
                                  Common offerings
                                </p>

                                <div className="flex flex-wrap gap-2">
                                  {SERVICE_SUGGESTIONS.map((service) => {
                                    const isSelected =
                                      values.services.includes(service);

                                    return (
                                      <button
                                        key={service}
                                        type="button"
                                        disabled={isSelected}
                                        onClick={() => {
                                          if (!isSelected) {
                                            push(service);
                                          }
                                        }}
                                        className={`rounded-full border px-4 py-2 text-sm transition ${isSelected
                                          ? "cursor-not-allowed bg-gray-100 text-gray-400"
                                          : "cursor-pointer border-gray-300 text-gray-700 hover:border-theme hover:bg-theme/10"
                                          }`}
                                      >
                                        {service}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>

                              {/* =========================
                                ADD CUSTOM SERVICE
                            ========================== */}

                              <div className="flex flex-col gap-3">
                                <p className="text-sm font-medium text-gray-700">
                                  Add your own
                                </p>

                                <div className="flex gap-3">
                                  <input
                                    type="text"
                                    value={newService}
                                    onChange={(e) =>
                                      setNewService(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter") {
                                        e.preventDefault();

                                        const service =
                                          newService.trim();

                                        if (
                                          service &&
                                          !values.services.includes(
                                            service
                                          )
                                        ) {
                                          push(service);
                                          setNewService("");
                                        }
                                      }
                                    }}
                                    placeholder="Eg: IELTS Preparation"
                                    className="flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:font-thin placeholder:text-gray-400 focus:border-theme focus:ring-2 focus:ring-theme/20"
                                  />

                                  <button
                                    type="button"
                                    onClick={() => {
                                      const service =
                                        newService.trim();

                                      if (
                                        service &&
                                        !values.services.includes(
                                          service
                                        )
                                      ) {
                                        push(service);
                                        setNewService("");
                                      }
                                    }}
                                    className="cursor-pointer rounded-xl bg-theme px-5 py-3 text-sm font-medium text-white transition hover:bg-green-700"
                                  >
                                    Add
                                  </button>
                                </div>
                              </div>

                              {/* =========================
                                SELECTED SERVICES
                            ========================== */}

                              <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-700">
                                    Your offerings
                                  </p>

                                  <span className="text-sm text-gray-400">
                                    {values.services.length} selected
                                  </span>
                                </div>

                                {values.services.length === 0 ? (
                                  <div className="rounded-xl border border-dashed p-6 text-center text-sm text-gray-400">
                                    No offerings added yet.
                                    <br />
                                    Select one above or add your own.
                                  </div>
                                ) : (
                                  <div className="flex flex-col gap-2">
                                    {values.services.map(
                                      (service, index) => (
                                        <div
                                          key={`${service}-${index}`}
                                          className="flex items-center justify-between rounded-xl border bg-gray-50 px-4 py-3"
                                        >
                                          <span className="text-sm text-gray-700">
                                            {service}
                                          </span>

                                          <button
                                            type="button"
                                            onClick={() =>
                                              remove(index)
                                            }
                                            className="cursor-pointer text-sm text-red-500 hover:text-red-700"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                              <ValidationError name="services"/>
                            </div>
                          )}
                        </FieldArray>
                      )}

                      {/* =========================
                        PAGINATION
                    ========================== */}

                      <div className="mt-8 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={handlePrevious}
                          disabled={currentPage === 1}
                          className="cursor-pointer rounded-lg bg-theme px-6 py-2 text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Previous
                        </button>

                        <span className="text-sm text-gray-400">
                          {currentPage} / {totalPage}
                        </span>

                        {!isServicesPage ? (
                          <button
                            type="button"
                            onClick={handleNext}
                            disabled={!currentValue?.trim() || Boolean(errors[currentField.value])}
                            className="cursor-pointer rounded-lg bg-blue-400 px-6 py-2 text-white transition hover:bg-blue-500 disabled:opacity-40"
                          >
                            Next
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-theme px-6 py-2 text-white transition hover:bg-green-700 disabled:opacity-40"
                          >
                            Complete Setup
                          </button>
                        )}
                      </div>
                    </Form>
                  )
                }}
              </Formik>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AccountSetup;