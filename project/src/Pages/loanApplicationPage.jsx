import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';

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

        const formData = new FormData();

        formData.append("aadharImage", aadhar);


        formData.append("panImage", pan);
        console.log(formData.get("aadharImage"));
        console.log(formData, data)

        axios
            .post("https://wandering-newt-hat.cyclic.app/data", formData).then((res) => console.log(res))

    };




    return (
        <Box >
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box width={"40%"} padding={5}>
                    <Box fontSize={"30px"}>Personal Details</Box>
                    <Input type="text" placeholder='Enter your name' name="name" value={data.name} onChange={(e) => handleChange(e)} />
                    <Input type="text" placeholder='Enter your address' name="address" value={data.address} onChange={(e) => handleChange(e)} />
                    <Input type="number" placeholder='Enter your phone number' name="phoneNumber" value={data.phoneNumber} onChange={(e) => handleChange(e)} />
                    <Input placeholder='Enter your email' name="email" value={data.email} onChange={(e) => handleChange(e)} />
                    <Input placeholder='Enter your date of birth' name="dateOfBirth" value={data.dateOfBirth} onChange={(e) => handleChange(e)} />
                </Box>

                <Box width={"40%"} padding={5}>
                    <Box fontSize={"30px"}>Employment Information</Box>
                    <Input type="text" placeholder='Enter your company name' name="companyName" onChange={(e) => handleChange(e)} />
                    <Input type="text" placeholder='Enter your employer name' name="employerName" onChange={(e) => handleChange(e)} />
                    <Input type="text" placeholder='Enter your job title' name="jobTitle" onChange={(e) => handleChange(e)} />
                    <Input type="number" placeholder='Enter your tenure' name="tenure" onChange={(e) => handleChange(e)} />
                    <Input type="number" placeholder='Enter your income' name="income" onChange={(e) => handleChange(e)} />
                </Box>

                <Box width={"30%"} padding={5}>
                    <Box fontSize={"30px"}>Credit Score</Box>
                    <Input type="number" placeholder='enter your credit score' name="creditScore" onChange={(e) => handleChange(e)} />
                </Box>

                <Box maxWidth="400px" mx="auto" mt="4">
                    <FormControl>
                        <FormLabel>Aadhar Card</FormLabel>
                        <Input type="file" name="aadhar" onChange={handleAadhar} />
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
                        <Input type="file" name="pan" onChange={handlePan} />
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
