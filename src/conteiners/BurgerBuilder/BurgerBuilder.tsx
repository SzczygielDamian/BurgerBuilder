import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-modal";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import { fetchIngredients } from "../../store/Ingredients/Actions/actions";
import { RootState } from "../../store/rootReducer";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import classes from './BurgerBuilder.module.css';
import OrderForm from "../../components/Burger/OrderForms/OrderForm";

export interface BurgerBuilderProps {}

const BurgerBuilder: React.FC<BurgerBuilderProps> = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector((store: RootState) => store.burger);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [OpenOrderForms, setOpenOrderForms] = useState(false);

  useEffect(() => {
    dispatch(fetchIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => setModalIsOpen(prevValue => !prevValue) 

  const handleOpenOrderForms = () => {
    setModalIsOpen(prevState => !prevState);
    setOpenOrderForms(prevState => !prevState);
  }

  return (
    <div>
      <Modal isOpen={modalIsOpen} contentLabel="Order Modal"  ariaHideApp={false}  className={classes.Modal}>
        <OrderSummary burgerState={burgerState} closeOrderModal={handleOpenModal} openFormModal={handleOpenOrderForms}/>
      </Modal>
      <Modal isOpen={OpenOrderForms} contentLabel="Order Forms Modal"  ariaHideApp={false}  className={classes.ModalForm}>
        <OrderForm />
      </Modal>
      <Burger burgerState={burgerState} />
      <BuildControls burgerState={burgerState} clickOrder={handleOpenModal}/>
    </div>
  );
};

export default BurgerBuilder;
