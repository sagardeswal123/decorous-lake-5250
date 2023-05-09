import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/personalInformationRedux/action'

import { ChakraSlider } from '../Components/slider'
import { Box, Button, Toast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const ApplyLoan = () => {
    const store=useSelector(store=>store.getData.personalData)
    const dispatch=useDispatch()
    const [principal,setPrincipal]=useState(20000)
  const [loanAmount, setLoanAmount] = useState(5000)
    const [loanTenure, setLoanTenure] = useState(0.25)
    const [loanRate, setLoanRate] = useState(8.50)
    const [emi, setEmi] = useState(0)

   useEffect(()=>{
    dispatch(getData()).then(
        res=>setPrincipal(+res[res.length-1].creditScore*40)
     );
   },[])
    const handleLoanPrincipal=(e)=>{
        setLoanAmount(e)
    }
    const handleLoanTenure=(e)=>{
        setLoanTenure(e)
        }
        

        const calculateEMI = () => {
            const monthlyRate = +loanRate / 120;
            const totalMonths = +loanTenure * 12;
            const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
            setEmi((emi.toFixed(1)))
            console.log(emi, loanAmount, loanRate, loanTenure)
          }
          useEffect(() => {
            calculateEMI()
          }, [loanAmount, loanRate, loanTenure])
      

  return (
    <div>
         <h1>{principal&& principal+" "+"rupees"}</h1> 
         <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"} margin="0px 10% 0px 10%">
         <Box>
         <ChakraSlider name={"loan amount"} amount="5000" width="70%" min="2000" max={principal} steps="2000" onChange={handleLoanPrincipal} />
         <ChakraSlider name={"Tenure"} amount="0.25" width="70%" min="0.25" max="3.5" steps="0.25" onChange={handleLoanTenure} />
            <ChakraSlider name={"Rate Of Interest"} amount="8.50" width="70%" min="8.50" max="8.50" steps="0" />
         </Box>
         <Box marginTop="20%">
            <Box fontSize={"28px"}>EMI per month :  {emi}</Box>
            <Box fontSize={"28px"}>Total Amount : {(emi*loanTenure*12).toFixed(0)}</Box>
         </Box>
         </Box>
        
    
        <Link to="/payment">
        <Button fontSize={"28px"} marginBottom={"100px"}>Continue</Button>
            </Link>
      
    </div>
  )
}

export default ApplyLoan