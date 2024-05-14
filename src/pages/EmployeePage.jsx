import React, { Fragment, useEffect, useState } from "react";
import TitleContent from "@/components/titleContent/TitleContent";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/config";
import ModalEmployee from "@/modal/ModalEmployee";
import useDebounce from "@/hook/useDebounce";
import PaginationGlobal from "@/components/pagination/PaginationGlobal";
import ModalCreateEmployee from "@/modal/ModalCreateEmployee";
import TableEmployee from "@/components/table/TableEmployee";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EmployeePage = () => {
  const [id, setId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [filterGender, setFilterGender] = useState("");
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(tmdbAPI.getAPI("employee"));
  const filterDebounce = useDebounce(filter, 500);
  //
  const { data, error } = useSWR(url, fetcher);
  // useEffect(() => {
  //   let filteredUrl = tmdbAPI.getAPI("employee");
  //   if (filterDebounce) {
  //     // filteredUrl += `?gender=${filterDebounce}`;
  //   }
  //   setUrl(filteredUrl);
  // }, [filterDebounce]);

  const employeeData = data || [];
  console.log(data);
  // console.log(employeeData);

  // handle remove employee
  // const [newEmployee, setNewEmployee] = useState([]);
  // const handleRemoveEmployee = async (id) => {
  //   try {
  //     const updatedEmployee = employeeData.filter((emp) => emp.id !== id);
  //     // update new employee
  //     setNewEmployee(updatedEmployee);
  //   } catch (error) {
  //     console.error("Error removing employee:", error);
  //   }
  // };
  // console.log(employeeData);

  // handle Filter Change
  const [newEmployeeData, setNewEmployeeData] = useState(employeeData);
  console.log(newEmployeeData);
  console.log(employeeData);
  const handleFilterGenderChange = (value) => {
    const updatedEmployeeData = employeeData.filter(
      (emp) => emp.gender === value
    );
    console.log(updatedEmployeeData);

    setNewEmployeeData(updatedEmployeeData);
    setFilterGender(value);
  };
  // console.log(filterGender);

  // handle next page
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(5);
  const indexOfLastEmployee = currentPage * newsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - newsPerPage;
  const currentEmployees = newEmployeeData.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  // let currentEmployees = [];
  // if (newEmployeeData.length !== 0) {
  //   currentEmployees = newEmployeeData.slice(
  //     indexOfFirstEmployee,
  //     indexOfLastEmployee
  //   );
  // } else {
  //   currentEmployees = employeeData.slice(
  //     indexOfFirstEmployee,
  //     indexOfLastEmployee
  //   );
  // }

  // console.log(currentEmployees);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Fragment>
      <div className="py-7 px-10">
        <div className="flex justify-between">
          <TitleContent
            mainChildren={"Employee Management"}
            minorCirldren={"Memo / Employee"}
          ></TitleContent>
          <div className="">
            <button
              className="py-2 px-4 mr-9 bg-[#e3e3e3] rounded-lg font-medium"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              Create
            </button>
            <Select
              className="font-bold bg-[#F5F5F5] w-[150px] py-2 px-2 rounded-lg"
              onValueChange={handleFilterGenderChange}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Famale">Famale</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <TableEmployee
          currentEmployees={currentEmployees}
          currentPage={currentPage}
          newsPerPage={newsPerPage}
          setOpenModal={setOpenModal}
          setId={setId}
        ></TableEmployee>
        <PaginationGlobal
          employee={newEmployeeData || []}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          // handleRemoveEmployee={handleRemoveEmployee}
        ></PaginationGlobal>
      </div>
      <ModalEmployee
        open={openModal}
        handleClose={() => {
          setOpenModal(false);
        }}
        item={newEmployeeData.find((emp) => emp.id === id)}
      ></ModalEmployee>
      <ModalCreateEmployee
        open={openCreateModal}
        handleClose={() => {
          setOpenCreateModal(false);
        }}
      ></ModalCreateEmployee>
    </Fragment>
  );
};

export default EmployeePage;
