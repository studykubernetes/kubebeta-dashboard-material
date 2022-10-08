/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  return {
    columns: [
      { Header: "Name", accessor: "Name", width: "30%", align: "left" },
      { Header: "Cpu", accessor: "Cpu", width: "10%", align: "left" },
      { Header: "Address", accessor: "Address", width: "20%", align: "center" },
      { Header: "Version", accessor: "Version", width: "20%", align: "center" },
      { Header: "Os", accessor: "Os", width: "20%", align: "center" },
    ],
    rows: [
      {
        Name: "Node1",
        Cpu: 4,
        Address: "127.0.0.1",
        Version: "v1.24.6+rke2r1",
        Os: "Ubuntu 22.04 LTS",
      },
    ],
  };
}
