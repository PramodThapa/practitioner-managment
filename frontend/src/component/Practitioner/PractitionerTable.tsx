import React from "react";
import { FlexBox, Gender, data } from "../common";
import styled from "styled-components";
import { Table } from "../common";
import { Checkbox, Chip, IconButton, Avatar } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getAcronym } from "../../utils";

const renderICUSpecialist = (tableData: data) => {
  const { isICUSpecialist } = tableData;

  return (
    <>
      <Checkbox disabled checked={isICUSpecialist} />
    </>
  );
};

const renderWorkingDays = (tableData: data) => {
  const { workingDays } = tableData;

  return (
    <>
      {workingDays?.map((day, index) => (
        <Chip key={index} label={day} />
      ))}
    </>
  );
};

const renderTableMenu = (tableData: data) => {
  return (
    <>
      <IconButton aria-label="more">
        <MoreVertIcon />
      </IconButton>
    </>
  );
};

const renderName = (tableData: data) => {
  const { name, imageURI } = tableData;

  return (
    <>
      <Avatar src={imageURI}>{getAcronym(name)}</Avatar>
      {name}
    </>
  );
};

const tableSchema = [
  {
    name: "",
    displayName: "",
    renderer: (tableData: data) => renderTableMenu(tableData),
  },

  {
    name: "name",
    displayName: "Name",
    renderer: (tableData: data) => renderName(tableData),
    style: {
      minWidth: "200px",
    },
  },
  {
    name: "isICUSpecialist",
    displayName: "ICU Specialist",
    renderer: (tableData: data) => renderICUSpecialist(tableData),
  },
  {
    name: "dob",
    displayName: "DOB",
    style: {
      minWidth: "140px",
    },
  },
  {
    name: "gender",
    displayName: "Gender",
  },
  {
    name: "startDate",
    displayName: "Start Date",
    style: {
      minWidth: "140px",
    },
  },

  {
    name: "endDate",
    displayName: "End Date",
    style: {
      minWidth: "140px",
    },
  },

  {
    name: "contact",
    displayName: "Contact",
  },
  {
    name: "workingDays",
    displayName: "Working Days",
    style: {
      minWidth: "200px",
    },
    renderer: (tableData: data) => renderWorkingDays(tableData),
  },
];

const tableData = [
  {
    _id: "aQEN42NL2N3",
    dob: "1999-05-26",
    imageURI: "",
    name: "Pramod Thapa",
    gender: Gender.MALE,
    endDate: "2023-07-06",
    contact: "9867250879",
    startDate: "2023-07-31",
    isICUSpecialist: false,
    workingDays: ["Sunday", "Monday"],
  },
  {
    _id: "aQEN42NL2N3",
    imageURI: "",
    dob: "1999-05-26",
    name: "Nandita Thapa",
    gender: Gender.MALE,
    endDate: "2023-07-06",
    contact: "9867250879",
    startDate: "2023-07-31",
    isICUSpecialist: true,
    workingDays: ["Sunday", "Monday", "Tuesday"],
  },
];

const Wrapper = styled.div``;

export const PractitionerTable: React.FC = () => {
  return (
    <Wrapper>
      <Table
        key="test1"
        tableSchema={tableSchema}
        tableData={tableData}
      ></Table>
    </Wrapper>
  );
};
