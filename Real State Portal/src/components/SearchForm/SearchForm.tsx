import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterSelector,
  setFilter,
  apiFilter,
  setSearch,
} from "../../features/Filter/FilterSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import SelectField from "../SelectField/SelectField";

const searchSchema = Yup.object().shape({
  // Search: Yup.string()
  //   .min(2, "the search is too short")
  //   .max(10, "too long")
  //   .required("The search is required"),
});

const optionsProvince = [
  { value: "Barcelona", label: "Barcelona" },
  { value: "Madrid", label: "Madrid" },
  { value: "Granada", label: "Granada" },
];

const initValues = {
  Search: "",
};

export default function SearchForm() {
  const { isLoading } = useSelector(filterSelector);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(setSearch(values.Search.value));
    navigate(`/dashboard/&province=${values.Search.value}`);
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <Formik
            initialValues={initValues}
            validationSchema={searchSchema}
            onSubmit={handleSubmit}
          >
            {({ submitForm }) => (
              <Form>
                <SelectField
                  name="Search"
                  options={optionsProvince}
                  placeholder="Search City"
                  submitForm={submitForm}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
