import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "react-modal";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import { fetchIngredients } from "../../store/Ingredients/Actions/actions";
import { RootState } from "../../store/rootReducer";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import classes from './BurgerBuilder.module.css';

export interface BurgerBuilderProps {}

const BurgerBuilder: React.FC<BurgerBuilderProps> = () => {
  const dispatch = useDispatch();
  const burgerState = useSelector((store: RootState) => store.burger);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => setModalIsOpen(prevValue => !prevValue) 

  return (
    <div>
      <Modal isOpen={modalIsOpen} contentLabel="Order Modal"  ariaHideApp={false}  className={classes.Modal}>
        <OrderSummary burgerState={burgerState} clickOrder={handleOpenModal}/>
      </Modal>
      <Burger burgerState={burgerState} />
      <BuildControls burgerState={burgerState} clickOrder={handleOpenModal}/>
    </div>
  );
};

export default BurgerBuilder;
