// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";


// Billing page components


import Invoicesm from "layouts/billing/components/Invoices/Medicineindex";
import Invoicesa from "layouts/billing/components/Invoices/Ambulanceindex";
import "layouts/billing/components/Invoices/invoices.css";



import Card from "@mui/material/Card";
import PropTypes from "prop-types";
 import "layouts/operatorsprofile/operatorsprofile.css";
 import DriversTables from "layouts/tables/driversindex";

 import DataTable from "examples/Tables/DataTable";

// Data
import driversTableData from "layouts/tables/driversTableData/driversdata";

import projectsTableData from "layouts/tables/data/projectsTableData";
import  "layouts/tables/data/customersTableData.css";

function OProfile({title,id,name,contact,email,address,pin})
{
   
    
return(
    <div className='oprofilecontainer'>
    <div className='oprofile'>
            <Card className='profile-container'>
            
            <img className ="profile-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            
            </Card>
            
            
            <Card className='odetails'>
              <p id="detailsheading"> {title}</p>
              <p className='detail'> UserId:{id} </p>
              <p className='detail'> Name: {name}</p>
              <p className='detail'> Contact:{contact} </p>
              <p className='detail'> Email:{email}</p>
              <p className='detail'> Address:{address} </p>
              <p className='detail'>Pincode:{pin} </p>
              </Card>
        
          
            
        </div>
      
      
     

        </div>
    
)
}
OProfile.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    contact: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
   pin: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
  };

  // The whole profile page
  function OperatorsProfile(){
    
    const { columns, rows } = driversTableData();

  return (
    <DashboardLayout>
    <DashboardNavbar absolute isMini />
    <MDBox mt={8}>
       <MDBox mb={3}>
        <Grid container spacing={3}>
        <OProfile title="Operator Details"/>
         
        </Grid>
      </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Ambulance Drivers
                </MDTypography>
              </MDBox>
            <MDBox pt={3}>
                <DataTable style={{"width":"100%"}}
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          
          {/* <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid> */}
        </Grid> 
      </MDBox> 
    </MDBox>
    <Footer />
  </DashboardLayout>
  );
}
  
  export default OperatorsProfile;
