import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ChakraSlider } from "../Components/slider"
import { Link, Navigate } from 'react-router-dom'
import { Chart } from "react-google-charts";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000)
  const [loanTenure, setLoanTenure] = useState(5.00)
  const [loanRate, setLoanRate] = useState(12.25)
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

  const data = [
    ["Task", "Hours per Day"],
    ["Principle", loanAmount],
    ["Total Interest", Math.abs(emi * loanTenure * 12 - loanAmount)],
  ];

  var options = {
    title: "All Details",
    pieHole: 0.5,
    // pieSliceText: 'value', 
    height: 300,
    width: "100%",
    colors: ['#51defc', '#6af884',],
    chartArea: {
      left: 50,
      top: 0,
      right: 0,
      bottom: 0,
    }
  };

  return (
    <Box>
      <Box textAlign="center" alignItems="center" justifyContent="center" color="white" bg={"linear-gradient(to right, #51defc, lightblue)"} marginTop={"2px"} padding={"5px"}  >
        <Box fontSize={{ xl: '40px', lg: '35px', md: '30px', sm: '20px', base: '20px' }} fontFamily={"cursive"}>Personal Loan EMI Calculator</Box >
        <Box fontSize={{ sm: '20px', base: '10px' }} fontFamily={"cursive"} >Calculate your EMI and choose the most suitable product for you</Box>
      </Box>
      <Box width="90%" margin="auto" marginBottom={"100px"} marginTop={"40px"} >
        <Text fontFamily={"cursive"} fontSize={"24px"} textAlign="center" display="flex" alignItems="center" justifyContent="center">EMI CALCULATOR</Text >

        <Box marginTop={"40px"}>
          <Box display={{ base: "block", md: "flex" }} flexDirection={{ base: "column", md: "row" }}>
            {/* emi calculator */}
            <Box width={{ base: "100%", md: "90%" }} display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
              <ChakraSlider name={<Text fontFamily={"cursive"}>Loan amount</Text>} amount="5000" width={{ base: "80%", md: "70%" }} min="2000" max="50000" steps="2000" onChange={handleLoanAmount} />
              <ChakraSlider name={<Text fontFamily={"cursive"}>Tenure</Text>} amount="5.00" width={{ base: "80%", md: "70%" }} min="0.25" max="20" steps="0.25" onChange={handleLoanTenure} />
              <ChakraSlider name={<Text fontFamily={"cursive"}>Rate of Interest</Text>} amount="12.25" width={{ base: "80%", md: "70%" }} min="10.25" max="30" steps="0.25" onChange={handleLoanRate} />
            </Box>
            {/* Emi Chart */}
            <Box marginTop={"3%"} width={"80%"}  >
              <Chart
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                chartType="PieChart"
                data={data}
                options={options}
              />
            </Box>
          </Box>
          {/* About Emi */}
         
          <Box
      width={{ base: '90%', md: '40%' }}
      margin="auto"
      marginTop={{ base: '0px', md: '40px' }}
      padding="20px"
      border="1px solid #ddd"
      borderRadius="8px"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <Text fontFamily="cursive" fontSize="2xl" fontWeight="bold">
        Your EMI Amount: {emi}
      </Text>
      <Text fontFamily="cursive" fontSize="xl">
        Total Payment: {(emi * +loanTenure * 12).toFixed(0)}
      </Text>
      <Text fontFamily="cursive" fontSize="xl">
        Total Interest: {((emi * +loanTenure * 12) - loanAmount).toFixed(0)}
      </Text>
      <Link to="/loanApplicationPage">
        <Button
          size="lg"
          marginTop="20px"
          backgroundColor="
          #51defc"
          color="white"
          _hover={{ backgroundColor: "#139ebd" }}
          _focus={{ boxShadow: "0 0 0 3px rgba(255, 192, 203, 0.5)" }}
        >
          Apply Loan
        </Button>
      </Link>
    </Box>
  


        </Box>
      </Box>



    </Box>
  )
}

export default EmiCalculator
