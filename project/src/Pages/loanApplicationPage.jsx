import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from '../Components/NavBar'

const LoanApplicationPage = () => {
    const [aadhar, setAadhar] = useState(null);
    const [pan, setPan] = useState(null);
    const handleAadhar = (e) => {
        setAadhar(e.target.files[0]);
    };
    const handlePan = (e) => {
        setPan(e.target.files[0]);
    };
    const handleSubmit = () => {
        console.log("hey")
    }
    return (
        <Box >
            <Navbar />
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box width={"40%"} padding={5}>
                    <Box fontSize={"30px"}>Personal Details</Box>
                    <Input type="text" placeholder='Enter your name' />
                    <Input type="text" placeholder='Enter your address' />
                    <Input type="number" placeholder='Enter your phone number' />
                    <Input placeholder='Enter your email' />
                    <Input placeholder='Enter your date of birth' />
                </Box>

                <Box width={"40%"} padding={5}>
                    <Box fontSize={"30px"}>Employment Information</Box>
                    <Input type="text" placeholder='Enter your company name' />
                    <Input type="text" placeholder='Enter your employer name' />
                    <Input type="text" placeholder='Enter your job title' />
                    <Input type="number" placeholder='Enter your tenure' />
                    <Input type="number" placeholder='Enter your income' />
                </Box>

                <Box width={"30%"} padding={5}>
                    <Box fontSize={"30px"}>Credit Score</Box>
                    <Input type="number" placeholder='enter your credit score' />
                </Box>

                <Box maxWidth="400px" mx="auto" mt="4">
                    <FormControl>
                        <FormLabel>Aadhar Card</FormLabel>
                        <Input type="file" onChange={handleAadhar} />
                    </FormControl>

                    {aadhar && (
                        <Box mt="4">
                            <img src={URL.createObjectURL(aadhar)} alt="Selected file" />
                        </Box>
                    )}
                </Box>

                <Box maxWidth="400px" mx="auto" mt="4">
                    <FormControl>
                        <FormLabel>Pan Card</FormLabel>
                        <Input type="file" onChange={handlePan} />
                    </FormControl>

                    {pan && (
                        <Box mt="4">
                            <img src={URL.createObjectURL(pan)} alt="Selected file" />
                        </Box>
                    )}
                </Box>

                <Button onClick={handleSubmit} fontSize={"24px"} margin={"10px 0px 40px 0px"} backgroundColor={"pink.300"} color={"white"} _hover={{ backgroundColor: "pink.200" }} > Check Eligiblity </Button>

            </Box>
        </Box>
    )
}

export { LoanApplicationPage }

