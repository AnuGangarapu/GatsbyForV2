import ListTable from "./ListTable";
import React from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

function TableVirtuoso(props) {
  const [fullAccordianOpen, setAccordion] = React.useState(false);

  const handleChange = () => {
    setAccordion(!fullAccordianOpen);
  };

  return (
    <>
      {fullAccordianOpen === true ? (
        <UnfoldLessIcon onClick={() => handleChange()} />
      ) : (
        <UnfoldMoreIcon onClick={() => handleChange()} />
      )}
      <ListTable
        columns={props.columns}
        listData={props.listData}
        accordion={fullAccordianOpen}
        checkbox={props.checkbox}
        hover={props.hover}
      />
    </>
  );
}

export default TableVirtuoso;
