// Imports
import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { listChargeProfiles } from "./graphql/queries";

// File Imports
import "./App.css";
import logo from "./evslogo.png";

// Material Ui Imports
import { Paper } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

Amplify.configure(awsconfig);

// Main Functions
function App() {
  // Table Header Style
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 18,
      fontWeight: "bold"
    },
    // Table Body Style
    body: {
      fontSize: 16
    }
  }))(TableCell);

  // Setting each odd row different BG Color
  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700
    }
  });

  const classes = useStyles();

  // Getting data from DynamoDB
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listChargeProfiles));
      const userList = userData.data.listChargeProfiles.items;
      setUsers(userList);
    } catch (error) {
      console.log("Failed to Return Users.", error);
    }
  };

  // Main Content Build
  return (
    <div className="App">
      {/* Header Bar */}
      <header className="evs-header">
        <div className="container">
          {/* EVS Logo */}
          <img src={logo} alt="Evs Energy Logo" className="logoEvs" />
          <div className="vertical-divider"></div>
          <p className="charge-text">
            Charging <br />
            Profile
          </p>
        </div>
        <AmplifySignOut />
      </header>

      {/* Page Divider */}
      <div className="evs-header-bar"></div>

      {/* Material React Table */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Car Model</StyledTableCell>
              <StyledTableCell align="center">Charge Level</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map(user => (
              <StyledTableRow>
                <StyledTableCell align="center">
                  {user.firstName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.lastName}
                </StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {user.carModel}
                </StyledTableCell>
                {/* ChargeLeft Color based on Charge Remaining */}
                <StyledTableCell
                  align="center"
                  style={
                    user.chargeLeft < 11
                      ? { background: "#fa6e5f" }
                      : user.chargeLeft >= 11 && user.chargeLeft < 30
                      ? { background: "#e6988e" }
                      : user.chargeLeft >= 31 && user.chargeLeft <= 59
                      ? { background: "#e8be87" }
                      : user.chargeLeft > 59 && user.chargeLeft <= 89
                      ? { background: "#c6e6b3" }
                      : user.chargeLeft > 89
                      ? { background: "#52e359" }
                      : { background: "transparent" }
                  }
                >
                  {user.chargeLeft}%
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Footer Section */}
      <footer className="evs-footer">
        <div className="container">
          <p className="footer-text">About</p>
          <p className="footer-text">Help Centre</p>
        </div>
      </footer>
    </div>
    // </div>
  );
}

export default withAuthenticator(App);
