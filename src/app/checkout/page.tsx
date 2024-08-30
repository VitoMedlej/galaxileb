"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import PaymentForm from './PaymentForm';
import { useEffect, useState } from 'react';
import AddressForm from '@/Components/checkoutComponents/AddressForm';
import ReviewForm from '@/Components/checkoutComponents/ReviewForm';
import { server } from '@/Utils/Server';
import { loadState, saveState } from '@/Utils/LocalstorageFn';
import useDiscount from '@/Hooks/useDiscount';
import totalCal from '@/Utils/totalCal';



const steps = ['Shipping address', 'Review your order'];

function getStepContent(step: number,setInfo:any,handleChange:any,info:any,setActiveStep:any) {
  switch (step) {
    case 0:
      return <AddressForm setInfo={setInfo} handleChange={handleChange} info={info} />;
    // case 1:
    //   return <PaymentForm />;
    case 1:
      return <ReviewForm setActiveStep={setActiveStep} />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [orderNumber, setOrderNumber] = React.useState(null);
  const products = loadState('VZJo2p4j1op2cgfG221zGG');
  const {totalPrice, deliveryCharge} = totalCal(products); 
  

  const {isFirstOrder} = useDiscount(totalPrice)

  
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [info,setInfo] = useState({
    firstName:'',
    checkbox:true,
    checkbox2:true,
    lastName:'',city:'',email:'',phone:'',address1:'',address2:''  })
    const handleChange = (e: any) => {
      setInfo({
        ...info,
        [e.target.name]:e.target.value
      })
    }

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleNext = () => {
      if (info?.checkbox2 && info?.checkbox && info && info.firstName && info.lastName && info.address1 && info.phone) {
        localStorage.setItem('25VNSFKJNJKNX14hhJ52cknv',JSON.stringify({...info, name : `${info.firstName} ${info.lastName}`}))
        saveState('Vjq2zFFF1Z',info)
        setActiveStep(activeStep + 1);
      
      } 
      
    };




    const saved = activeStep === steps.length


    const saveOrder = async () => {
      

      // const total = 10
      if (products && info && totalPrice) {

        // saveState('order',{info,products,total})
        const rawResponse = await fetch(`${server}/api/save-order`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({order:{info,products,totalPrice,isFirstOrder}})
        });
  const content = await rawResponse.json();
        setOrderNumber(content?.orderNumber)
    saveState('VZJo2p4j1op2cgfG221zGG',null)
  saveState('Vjq2zFFF1Z',null)
  localStorage.setItem('isFirstOrder1', 'false');


}
  }


  
  useEffect(() => {
    
    if (saved) {
      saveOrder()
    }
    
  }, [saved])
  
  return (
  <>

  <ThemeProvider theme={theme}>
  
      <Container component="main" maxWidth="sm" sx={{ mt:22, mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
              {`Your order has been recorded! Your order number is ${orderNumber}. We will message you soon, so please stay alert.`}
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep,setInfo,handleChange,info,setActiveStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} >
                    Back
                  </Button>
                )}
                <Button
                    type='submit'
                    disabled={
                      !info?.checkbox2 || !info?.checkbox
                        || info.phone?.length < 6  || !info?.firstName || info?.firstName.length < 2 || 
                  !info.address1 ||
                      !info.phone }
                     form="myform"
                  // variant="contained"
                  onClick={handleNext}
                  // sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  </>

  );
}