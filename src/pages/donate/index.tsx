import React from "react";
import StripeContainer from "../../components/StripeContainer";

const Donate = () => {
  return (
    <>
      <div className="home-div flex-col items-center w-full">
        <h1 className="text-4xl font-cond-black">Ajută echipa!</h1>
        <p>Ajută-ne cu o donație, pentru a putea face festivalul realitate în fiecare an. Și pentru a il face din ce in ce mai bun!</p>
        <strong>Suma minimă este de 3 lei.</strong>
        <strong>Această pagină este în dezvoltare și nu recomandăm utilizarea ei.</strong>
        <StripeContainer />
      </div>
    </>
  );
};

export default Donate;
