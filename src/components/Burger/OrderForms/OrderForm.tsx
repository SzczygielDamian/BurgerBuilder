import React from "react";
import { Formik, Form } from "formik";
import TextField from "../../../UI/TextField/TextField";
import SelectField from "../../../UI/SelectField/SelectField";

import { BurgerStateInterface } from "../../../models/IBurgerIngredients";

import validate from "../../../Validation/orderValidation";

import classes from "./OrderForm.module.css";
import { useDispatch } from "react-redux";
import { purchaseBurger } from "../../../store/Order/Actions/action";
import { resetIngredient } from "../../../store/BurgerBuilder/Actions/actions";

import { useAlert } from "react-alert";

export interface OrderFormProps {
  burgerState: BurgerStateInterface;
  closeFormModal: () => any;
}
interface Values {
  firstName: string;
  lastName: string;
  deliveryMethod: string;
  city: string;
  address: string;
  phoneNumber: string;
}

const OrderForm: React.FC<OrderFormProps> = ({
  burgerState,
  closeFormModal,
}) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const closeModal = () => closeFormModal();

  return (
    <div>
      <h4>SHIPPING FORM</h4>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          deliveryMethod: "",
          city: "",
          address: "",
          phoneNumber: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          dispatch(purchaseBurger({ ...values, ...burgerState }));
          dispatch(resetIngredient());
          closeModal();
          alert.success("Order added!");
        }}
      >
        {(formik) => (
          <div>
            <Form>
              <TextField label="First name" name="firstName" type="text" />
              <TextField label="Last name" name="lastName" type="text" />
              <TextField label="Phone Number" name="phoneNumber" type="text" />
              <TextField label="City" name="city" type="text" />
              <TextField label="Address" name="address" type="text" />
              <SelectField
                label="Delivery Method"
                name="deliveryMethod"
                type="select"
              >
                <option value=""></option>
                <option value="fastest">Fastest</option>
                <option value="cheapest">Cheapest</option>
              </SelectField>
              <button
                type="submit"
                className={[classes.Button, classes.Success].join(" ")}
              >
                Send
              </button>
              {/* <button></button> */}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
