import { Data, HeadCell, tags } from "./types";
import { createData } from "./utils";

export const headCells: readonly HeadCell[] = [
  {
    id: "order",
    numeric: false,
    disablePadding: true,
    label: "Order #",
  },
  {
    id: "dateModified",
    numeric: true,
    disablePadding: false,
    label: "Date Modified",
  },
  {
    id: "product",
    numeric: true,
    disablePadding: false,
    label: "Product",
  },
  {
    id: "amount",
    numeric: true,
    disablePadding: false,
    label: "Amount",
  },
  {
    id: "client",
    numeric: true,
    disablePadding: false,
    label: "Client",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "destination",
    numeric: true,
    disablePadding: false,
    label: "Destination",
  },

  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "",
  },
];

export const rows: Data[] = [
  createData(
    1,
    "RE2001M08",
    "08/03/2024 10:16PM",
    "Ago",
    "600,000",
    "Dedeti",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    2,
    "RE2001M07",
    "07/03/2024 1:16PM",
    "Both",
    "419,000",
    "Dedeti",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    3,
    "RE2001M06",
    "23/06/2024 11:16PM",
    "Ago",
    "600,000",
    "Dedeti",
    "Kigoma",
    "Transit",
    "view"
  ),
  createData(
    4,
    "RE2002M06",
    "19/06/2024 10:16PM",
    "Ago",
    "500,000",
    "Afrigas",
    "Rwanda",
    "Pending",
    "view"
  ),
  createData(
    5,
    "RE2003M06",
    "06/13/2024 08:16PM",
    "Ago",
    "200,000",
    "Dedeti",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    6,
    "RE2003M06",
    "06/01/2024 10:16PM",
    "Pms",
    "600,000",
    "Lukuga",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    7,
    "RE2002M05",
    "05/22/2024 10:46PM",
    "Both",
    "419,000",
    "Lukuga",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    8,
    "RE2003M05",
    "05/23/2024 10:16PM",
    "Both",
    "205,000",
    "Esta Richa",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    9,
    "RE2004M05",
    "05/16/2024 02:16PM",
    "Pms",
    "610,000",
    "Esta Richa",
    "Kigoma",
    "Pending",
    "view"
  ),
  createData(
    10,
    "RE2005M05",
    "05/08/2024 4:16PM",
    "Ago",
    "600,000",
    "Papi",
    "Kigoma",
    "Pending",
    "view"
  ),
  createData(
    11,
    "RE2001M04",
    "04/30/2024 10:16PM",
    "Pms",
    "600,000",
    "Dedeti",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    12,
    "RE2002M04",
    "04/23/2024 10:16PM",
    "Ago",
    "180,000",
    "Amani",
    "Kigoma",
    "Delivered",
    "view"
  ),
  createData(
    13,
    "RE2003M04",
    "04/16/2024 6:16PM",
    "Ago",
    "300,000",
    "Dedeti",
    "Kigoma",
    "Delivered",
    "view"
  ),
];

export const searchTags: tags[] = [
  {
    id: 0,
    label: "All",
    dropdown: false,
    active: true,
  },
  {
    id: 1,
    label: "Amount",
    dropdown: [
      { id: 0, label: "Less than 50k" },
      { id: 1, label: "50k upto 410k" },
      { id: 2, label: "410k upto 610k" },
      { id: 3, label: "610k upto 1000k" },
      { id: 4, label: "Above 1000k" },
    ],
  },
  {
    id: 2,
    label: "Date",
    dropdown: [
      { id: 0, label: "This month" },
      { id: 1, label: "Last 3 months" },
      { id: 2, label: "Last 6 months" },
      { id: 3, label: "Last year" },
      { id: 4, label: "Custom" },
    ],
  },
  {
    id: 3,
    label: "Status",
    dropdown: [
      { id: 0, label: "Pending" },
      { id: 1, label: "Loading" },
      { id: 2, label: "Transit" },
      { id: 3, label: "Delivered" },
    ],
  },
  {
    id: 4,
    label: "Ago",
    dropdown: false,
  },
  {
    id: 5,
    label: "Pms",
    dropdown: false,
  },
  {
    id: 6,
    label: "Both",
    dropdown: false,
  },
  {
    id: 7,
    label: "Destination",
    dropdown: true,
  },
];
