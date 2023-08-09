import React from "react";

import styled from "styled-components";

import { Delete, Update } from "@mui/icons-material";
import {
  Chip,
  Avatar,
  Checkbox,
  MenuItem,
  ListItemIcon,
  CircularProgress,
} from "@mui/material";

import { isEmpty } from "lodash";

import dayjs from "dayjs";

import { FlexBox, Table, ThreeDotMenu } from "../common";

import { getAcronym } from "../../utils";

import { Gender } from "../../types";

import { DATE_FORMATE } from "../../constants";

import EmptyIcon from "../../assets/EmptyIcon.svg";

export interface PractitionerData {
  _id: string;
  dob: string;
  name: string;
  gender: Gender;
  contact: string;
  endDate: string;
  imageURL?: string;
  startDate: string;
  workingDays: string[];
  isICUSpecialist: boolean;
}

interface PractitionerTableProps {
  data: any;
  loading: boolean;
  onDelete: (data: PractitionerData) => void;
  onUpdate: (data: PractitionerData) => void;
}

const Wrapper = styled.div`
  .h-250 {
    height: 250px;
  }
`;

export const PractitionerTable: React.FC<PractitionerTableProps> = ({
  data = [],
  loading,
  onDelete,
  onUpdate,
}) => {
  /**
   * ICU specialist data renderer.
   *
   * @param {PractitionerData} data Table row data.
   * @returns {JSX.Element}
   */
  const renderICUSpecialist = (data: PractitionerData): JSX.Element => {
    const { isICUSpecialist } = data;

    return (
      <>
        <Checkbox disabled checked={isICUSpecialist} />
      </>
    );
  };

  const renderWorkingDays = (data: PractitionerData) => {
    const { workingDays = [] } = data;

    return (
      <>
        {workingDays.map((day, index) => (
          <Chip key={index} label={day} />
        ))}
      </>
    );
  };

  const renderTableMenu = (data: PractitionerData) => {
    return (
      <ThreeDotMenu>
        <MenuItem onClick={() => onUpdate(data)}>
          <ListItemIcon>
            <Update fontSize="small" />
          </ListItemIcon>
          Update
        </MenuItem>
        <MenuItem onClick={() => onDelete(data)}>
          <ListItemIcon>
            <Delete fontSize="small" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </ThreeDotMenu>
    );
  };

  const renderName = (data: PractitionerData) => {
    const { name, imageURL } = data;

    return (
      <>
        <Avatar sx={{ marginRight: "var(--spacing-1x)" }} src={imageURL}>
          {getAcronym(name)}
        </Avatar>
        {name}
      </>
    );
  };

  /**
   *
   * @param {string} date
   * @returns {JSX.Element}
   */
  const renderDate = (date: string): JSX.Element => {
    return <>{dayjs(date).format(DATE_FORMATE)}</>;
  };

  /**
   * Table schema.
   */
  const tableSchema = [
    {
      name: "",
      displayName: "",
      renderer: (data: PractitionerData) => renderTableMenu(data),
    },

    {
      name: "name",
      displayName: "Name",
      renderer: (data: PractitionerData) => renderName(data),
      style: {
        minWidth: "200px",
      },
    },
    {
      name: "isICUSpecialist",
      displayName: "ICU Specialist",
      renderer: (data: PractitionerData) => renderICUSpecialist(data),
    },
    {
      name: "dob",
      displayName: "DOB",
      renderer: ({ dob }: PractitionerData) => renderDate(dob),
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
      renderer: ({ startDate }: PractitionerData) => renderDate(startDate),
      style: {
        minWidth: "140px",
      },
    },

    {
      name: "endDate",
      displayName: "End Date",
      renderer: ({ endDate }: PractitionerData) => renderDate(endDate),
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
      renderer: (data: PractitionerData) => renderWorkingDays(data),
      style: {
        minWidth: "200px",
      },
    },
  ];

  return (
    <Wrapper>
      {loading ? (
        <FlexBox align="center" justify="center" className="h-250">
          <CircularProgress />
        </FlexBox>
      ) : isEmpty(data) ? (
        <FlexBox
          align="center"
          justify="center"
          direction="column"
          className="h-250"
        >
          <img className="" src={EmptyIcon} alt="empty" />
          <div>No Practitioner Data</div>
        </FlexBox>
      ) : (
        <Table<PractitionerData> tableSchema={tableSchema} tableData={data} />
      )}
    </Wrapper>
  );
};
