import { FormControl, FormLabel, Input, Button, Box, Text,useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { postData } from '../redux/personalInformationRedux/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const initialState = {
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    companyName: "",
    employerName: "",
    jobTitle: "",
    tenure: "",
    income: "",
    creditScore: "",
};

const LoanApplicationPage = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState(initialState)
    const [aadhar, setAadhar] = useState("");
    const [pan, setPan] = useState("");
    const handleAadhar = (e) => {
        setAadhar(e.target.files[0]);
    };
    const handlePan = (e) => {
        setPan(e.target.files[0]);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        dispatch(postData(data))
    };




    return (
        <Box marginBottom={"50px"} >
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent="center" alignItems="center" width="100%" >
                    <motion.div
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <Box width="100%" padding={5} id="personalDetails"  >
                            <Text fontSize={"30px"}>Enter Personal Details </Text>
                            <FormControl>
                                <FormLabel>Name</FormLabel>
                                <Input border={"0.8px solid black"} type="text" placeholder="Enter your name" name="name" value={data.name} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Address</FormLabel>
                                <Input border={"0.8px solid black"} type="text" placeholder="Enter your address" name="address" value={data.address} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Phone Number</FormLabel>
                                <Input border={"0.8px solid black"} type="number" placeholder="Enter your phone number" name="phoneNumber" value={data.phoneNumber} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input border={"0.8px solid black"} placeholder="Enter your email" name="email" value={data.email} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Date of Birth</FormLabel>
                                <Input border={"0.8px solid black"} type="date" placeholder="Enter your date of birth" name="dateOfBirth" value={data.dateOfBirth} onChange={handleChange} />
                            </FormControl>
                        </Box>
                    </motion.div>

                    <motion.div
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        <Box width="100%" padding={5} id="employmentDetails" >
                            <Text fontSize={"30px"}>Employment Information</Text>
                            <FormControl >
                                <FormLabel>Company Name</FormLabel>
                                <Input border={"0.8px solid black"} type="text" placeholder="Enter your company name" name="companyName" value={data.companyName} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Employer Name</FormLabel>
                                <Input border={"0.8px solid black"} type="text" placeholder="Enter your employer name" name="employerName" value={data.employerName} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Job Title</FormLabel>
                                <Input border={"0.8px solid black"} type="text" placeholder="Enter your job title" name="jobTitle" value={data.jobTitle} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Tenure</FormLabel>
                                <Input border={"0.8px solid black"} type="number" placeholder="Enter your tenure max 30 years" name="tenure" value={data.tenure} onChange={handleChange} />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Income</FormLabel>
                                <Input border={"0.8px solid black"} type="number" placeholder="Enter your income" name="income" value={data.income} onChange={handleChange} />
                            </FormControl>
                        </Box>
                    </motion.div>
                </Box>
                <Box width={{ base: "50%", md: "30%" }} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <FormControl mt={4}>
                        <FormLabel>Credit Score</FormLabel>
                        <Input border={"0.8px solid black"} type="number" placeholder="Enter your credit score" name="creditScore" value={data.creditScore} onChange={handleChange} />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Aadhar Card</FormLabel>
                        <Input type="file" name="aadhar" onChange={handleAadhar} />
                    </FormControl>

                    {aadhar && (
                        <Box mt={4}>
                            <img src={URL.createObjectURL(aadhar)} alt="Selected file" />
                        </Box>
                    )}

                    <FormControl mt={4}>
                        <FormLabel>Pan Card</FormLabel>
                        <Input type="file" name="pan" onChange={handlePan} />
                    </FormControl>

                    {pan && (
                        <Box mt={4}>
                            <img src={URL.createObjectURL(pan)} alt="Selected file" />
                        </Box>
                    )}

                    <Link to="/ApplyLoan">
                        <Button onClick={handleSubmit} fontSize="xl" fontWeight="bold" mt={8} bg="pink.400" color="white" _hover={{ bg: 'pink.500' }}>
                            Check Eligibility
                        </Button>
                    </Link>
                </Box>

            </Box>
        </Box>
    )
}

export { LoanApplicationPage }
