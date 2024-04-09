import React from "react";

const Header = () => {
  return (
    <div className="content col-start-3 col-end-11">
      <div className="h-20 border-b-2 border-b-#D7D7D7 flex justify-end items-center">
        <div className="flex items-center relative">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute ml-4 h-4 w-4"
          >
            <path
              d="M8 16C9.77498 15.9996 11.4988 15.4054 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.405 11.4997 15.9996 9.77544 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
              fill="black"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="pl-12 py-2 px-4 border outline-none rounded-3xl w-[350px] bg-[#E3E3E3] text-black h-[40px]"
          />
        </div>
        <div className="p-3 bg-[#E3E3E3] mr-14 ml-24 rounded-lg h-10 w-10 flex justify-center items-center cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <path
              d="M12 22C12.6193 22.0008 13.2235 21.8086 13.7285 21.4502C14.2335 21.0917 14.6143 20.5849 14.818 20H9.182C9.38566 20.5849 9.76648 21.0917 10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22ZM19 14.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V14.586L3.293 16.293C3.19996 16.3857 3.12617 16.4959 3.07589 16.6172C3.0256 16.7386 2.99981 16.8687 3 17V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V17C21.0002 16.8687 20.9744 16.7386 20.9241 16.6172C20.8738 16.4959 20.8 16.3857 20.707 16.293L19 14.586Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
