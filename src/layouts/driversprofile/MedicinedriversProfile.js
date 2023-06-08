// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

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
 import "layouts/driversprofile/driversprofile.css";

function DProfile({title,id,name,contact,email,address,pin})
{
return(
    
    <div className='dprofile'>
            <Card className='profile-container'>
            
            <img className ="profile-img" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
            
            </Card>
            
            
            <Card className='ddetails'>
              <p id="detailsheading"> {title}</p>
              <p className='detail'> UserId:{id} </p>
              <p className='detail'> Name: {name}</p>
              <p className='detail'> Contact:{contact} </p>
              <p className='detail'> Email:{email}</p>
              <p className='detail'> Address:{address} </p>
              <p className='detail'>Pincode:{pin} </p>
              </Card>
        
          
            
        </div>
    
)
}
DProfile.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    contact: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
   pin: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
  };

  // The whole profile page
  function MedicineDriversProfile(){
    
  return (
    <DashboardLayout>
    <DashboardNavbar absolute isMini />
    <MDBox mt={8}>
       <MDBox mb={3}>
        <Grid container spacing={3}>
        <DProfile title="Driver Details"/>
          <Grid item xs={12} lg={4}>
            <Invoicesm class="paymentdues" title="Payment Dues"/>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mb={3}>
        <Grid container spacing={3}>
        <Grid item xs={1} md={5}>
        <div className="flexbox"> <Invoicesa class="profit" title="Profit Generated"/>
        <Invoicesa class="orders" title="Medicine Orders"/>
        <Invoicesa class="payments" title="Payments"/></div>
       
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
    <Footer />
  </DashboardLayout>
  );
}
  
  export default MedicineDriversProfile;
