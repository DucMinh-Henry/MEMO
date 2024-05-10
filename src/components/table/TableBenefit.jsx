import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IconDelete from "@/components/icons/IconDelete";
import IconEdit from "@/components/icons/IconEdit";
import IconView from "@/components/icons/IconView";

const TableBenefit = ({
  currentEmployees,
  currentPage,
  newsPerPage,
  setOpenModal,
  setId,
  handleRemoveEmployee = () => {},
}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="font-bold">
            <TableHead className="w-[100px]">SL No</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Plan name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Benefit</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEmployees.length > 0 &&
            currentEmployees.map((item, index) => (
              <TableRow className="list-employee" key={item.id}>
                <TableCell>
                  {index + 1 + (currentPage - 1) * newsPerPage}
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.planName}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.benefitPercent}%</TableCell>
                <TableCell className="flex items-center justify-center gap-4">
                  <IconView
                    onClick={() => {
                      setOpenModal(true);
                      setId(() => item.id);
                    }}
                  ></IconView>
                  <IconDelete></IconDelete>
                  <IconEdit></IconEdit>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableBenefit;
