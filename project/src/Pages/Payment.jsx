import { Box,Input,Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    alert("Money transfer to your bank account");
    navigate('/');
  };

  return (
    <Box margin={"50px 0px 200px 0px"}>
    <Box width={"40%"} margin={"auto"}>
        <Input placeholder='Enter Bank Account Number' />
        <Input placeholder='Enter Bank IFSC Code' />
        <Input placeholder='Enter Bank Branch Code' />
    </Box>
    <Button onClick={handleComplete} marginTop={"50px"}>Complete</Button>
    </Box>
  )
}

export default Payment