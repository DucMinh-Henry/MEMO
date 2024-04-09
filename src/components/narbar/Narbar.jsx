import React from "react";
import ItemNarbar from "./ItemNarbar";

const Narbar = () => {
  return (
    <div className="menu relative col-start-1 col-end-3 border border-r-2 border-r-#D7D7D7 h-screen p-10">
      <div className="">
        <div className="flex gap-5 items-center mb-20">
          <img
            src="https://s3-alpha-sig.figma.com/img/0257/1594/5e7cc04372c590988e0499e37bd0d646?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hCHOavUVkTXh98TuND9Pxo-sYdhi0MK1mMYd8lxtZmi8wV7~17Wt~zsMOMDwwm4pIwcBDV5Kk7OBE1tfW9bL8wLt48cMu2SY1KF1A~UkF6TTZb6xRIeGCKsXxU1KgOgjxnbbSmh0GwQilfkG1tq4IOsRDEYZCsGzLo8KG5a4bTVkhzKugCnuSrUvsKHR4Gj2zVh07nNDd4tUEbaqEm0bu--XOT2bZN8n69mIh3V41GX9VtzVjLOigJhDoYmBh0bUcAJaAVoGGbM1UGgE1EutAJ5xik9~fUsFVfqnehPAn65UXAjJ8kiy31tZMt2DLIGB3bKiquQgkqJNj1oC0kasUA__"
            alt=""
            className="bg-white w-10 h-10"
          />
          <div className="item ">
            <h2 className="font-semibold text-[16px] ">MEMO Dashboard</h2>
            <span className="text-ms font-medium text-[12px]">
              HR & Payroll
            </span>
          </div>
        </div>
        <ItemNarbar></ItemNarbar>
      </div>
      <button className="absolute top-5 -right-5 p-3 bg-[#E3E3E3] rounded-lg">
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H16V2H0V0ZM0 5H16V7H0V5ZM0 10H16V12H0V10Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default Narbar;
