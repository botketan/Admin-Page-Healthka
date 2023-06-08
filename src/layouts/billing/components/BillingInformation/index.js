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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Billing page components
import Bill from "layouts/billing/components/Bill";

const arr=[{
  name:"oliver liam",
  contact:"viking burrito",
  email:"oliver@burrito.com",
  address:"FRB1235476"

}]



function BillingInformation() {
  return (
    <Card className="familymemberscard"  id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Family Members
        </MDTypography>
        <a href="/form" ><MDButton  id="familymembersbtn" style={{"margin":"3% 0 0 0",
        "background-color":"#B0DAFF","box-shadow": "2px 2px 2px "}} variant="text" color="dark">
               ➕ Add New
              </MDButton> </a>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>

        {
          arr.map((item,i) => ( 
            
            <Bill name= {item.name}
            contact={item.contact}
            email={item.email}
            address={item.address}
            key=""
          />)
          

        )
        }
          {/* <Bill
            name="oliver liam"
            contact="viking burrito"
            email="oliver@burrito.com"
            address="FRB1235476"
          />
          <Bill
            name="lucas harper"
            contact="stone tech zone"
            email="lucas@stone-tech.com"
            address="FRB1235476"
          />
          <Bill
            name="ethan james"
            co="fiber notion"
            email="ethan@fiber.com"
            address="FRB1235476"
            noGutter
          /> */}
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
