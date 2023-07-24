import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    return (
        <Box width={"70%"} margin={'auto'} marginBottom={"100px"} marginTop={"10px"}>
            <Box  display= "grid" gridTemplateColumns= "400px 400px" justifyContent= "space-around" >
                <Box marginTop={"40px"} border="1px solid #ccc" >
                    <Link to={"/homeloan"} >
                        <img width="100%" style={{ height: "200px", borderRadius: "20px" }} src="https://cdnblog.etmoney.com/wp-content/uploads/2021/12/best-practices-for-home-loans.jpg" alt="Home Loan" />
                    </Link>
                    <Box >
                    <Text fontSize="18px" textAlign="center" py="4" >Ready to turn your dreams into reality? Our Quick Loan app offers hassle-free home loans that'll bring you closer to the house you've always wanted!</Text>
                    </Box>

                </Box>

                <Box marginTop={"40px"} border="1px solid #ccc" >
                    <Link to="/personaloan">
                        <img width="100%" style={{ height: "200px", borderRadius: "20px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsYbuY9F6crpC_LV2Vt8uKoTSGLWAGdPxIQ&usqp=CAU" alt="" />
                    </Link>
                    <Box >
                        <Text fontSize="18px" textAlign="center" py="4" >
                            Are you ready to make your dream home a reality? Because with our home loan, you'll be moving into your perfect match in no time!
                        </Text>
                    </Box>

                </Box>


                <Box marginTop={"40px"} border="1px solid #ccc" >
                <Link to={"/vehicaloan"} >
                        <img width="100%" style={{ height: "200px", borderRadius: "20px" }} src="https://img.freepik.com/free-photo/toy-car-going-up-increasing-stack-coins-against-white-background_23-2147919118.jpg?size=626&ext=jpg&ga=GA1.2.1494486823.1689873016&semt=ais" alt="" />
                    </Link>
                    <Box >
                        <Text fontSize="18px" textAlign="center" py="4" >
                        Ready to hit the road in style? Our Car Loan will drive you towards the wheels of your dreams. Buckle up for a smooth ride to your perfect car!
                        </Text>
                    </Box>

                </Box>

                <Box marginTop={"40px"} border="1px solid #ccc" >
               
                <Link to="/goldloan" >
                        <img width="100%" style={{ height: "200px", borderRadius: "20px" }} src="https://img.freepik.com/free-vector/indian-rupee-tree_23-2147990480.jpg?size=626&ext=jpg&ga=GA1.2.1494486823.1689873016&semt=ais" alt="" />
                    </Link>

                    <Box >
                        <Text fontSize="18px" textAlign="center" py="4" >
                        Unlock the treasure trove of possibilities with our Gold Loan! Turn your precious gold into instant cash, and let your dreams shine brighter than ever before.
                        </Text>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default ProductPage