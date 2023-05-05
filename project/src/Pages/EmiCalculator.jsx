import { Box, Slider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ChakraSlider } from "../Components/slider"
import { Link, Navigate } from 'react-router-dom'
const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000)
  const [loanTenure, setLoanTenure] = useState(0.25)
  const [loanRate, setLoanRate] = useState(10.25)
  const [emi, setEmi] = useState(0)
  const handleLoanAmount = (e) => {
    setLoanAmount(e)
  }
  const handleLoanTenure = (e) => {
    setLoanTenure(e)
  }
  const handleLoanRate = (e) => {
    setLoanRate(e)
  }
  const calculateEMI = () => {
    const monthlyRate = +loanRate / 1200;
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
      <Box textAlign="center" alignItems="center" justifyContent="center" height={"100px"} color="white" backgroundColor={"blue.300"} >
        <Box fontSize={"40px"}  >Personal Loan EMI Calculator</Box >
        <Box fontSize={"20px"} >Calculate your EMI and choose the most suitable product for you</Box>
      </Box>

      <Box height={"400px"} width="80%" margin="auto" border={"1px solid red"}>
        <Box textAlign="center" display="flex" alignItems="center" justifyContent="center">EMI CALCULATOR</Box>
        <Box display={"flex"}>
          <Box width={"50%"}>
            <ChakraSlider name={"loan amount"} amount="5000" width="70%" min="2000" max="50000" steps="2000" onChange={handleLoanAmount} />
            <ChakraSlider name={"Tenure"} amount="0.25" width="70%" min="0.25" max="3.5" steps="0.25" onChange={handleLoanTenure} />
            <ChakraSlider name={"Rate Of Interest"} amount="10.25" width="70%" min="10.25" max="30" steps="0.25" onChange={handleLoanRate} />
          </Box>
          <Box>
            <Box>Your Emi Amount</Box>
            <Box fontSize={"30px"}>{emi}</Box>
            <Box>Total Payment</Box>
            <Box>{emi * +loanTenure * 12}</Box>
            <Box>Total Interest</Box>
            <Box>{(emi * +loanTenure * 12) - loanAmount}</Box>
            <Link to="/loanApplicationPage">
            <button >Apply loan</button>
            </Link>
        
          </Box>
        </Box>
      </Box>



    </div>
  )
}

export default EmiCalculator