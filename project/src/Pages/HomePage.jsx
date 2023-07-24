import React from "react";
import styles from "./HomePage.module.css";
import { Box, Button, Image, Stack, Text, border } from "@chakra-ui/react";
import UserIconList from "../Components/UserIconList";
import google from "../assets/google.png";
import walmart from "../assets/walmart_pngwing.png";
import paypal from "../assets/paypal_pngwing.png";
import microsoft from "../assets/microsoft.png";
import { useNavigate } from "react-router";

const iconList = [
  {
    name: "google",
    icon: google,
  },
  {
    name: "walmart",
    icon: walmart,
  },
  {
    name: "paypal",
    icon: paypal,
  },
  {
    name: "microsoft",
    icon: microsoft,
  },
];

const users = [
  {
    name: "Alice",
    icon: "https://png.pngtree.com/png-clipart/20210328/original/pngtree-black-and-red-rooster-logo-png-image_6160371.jpg",
  },
  {
    name: "Bob",
    icon: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-instagram-png-image_3562023.jpg",
  },
  {
    name: "Charlie",
    icon: "https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg",
  },
  {
    name: "Charlie",
    icon: "https://png.pngtree.com/png-clipart/20210328/original/pngtree-black-and-red-rooster-logo-png-image_6160371.jpg",
  },
  {
    name: "Charlie",
    icon: "https://png.pngtree.com/png-clipart/20190515/original/pngtree-polygonal-rooster-logo-design-png-image_3632486.jpg",
  },
  {
    name: "Charlie",
    icon: "https://png.pngtree.com/png-clipart/20210328/original/pngtree-black-and-red-rooster-logo-png-image_6160371.jpg",
  },
  {
    name: "Charlie",
    icon: "https://png.pngtree.com/png-clipart/20190515/original/pngtree-polygonal-rooster-logo-design-png-image_3632486.jpg",
  },
];

const HomePage = () => {
  // const MAX_USERS = 5;
  // const remainingCount = users.length - MAX_USERS;
  const navigate=useNavigate()
  return (
    <div>
      <div style={{ width: "65%", height: "50%", margin: "5%" }}>
        <Text
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "7xl", xl: "8xl" }}
          textAlign={{ base: "left", md: "left", lg: "left" }}
          maxWidth={{ base: "95%", md: "85%", lg: "80%", xl: "90%" }}
          className={styles.siliguri}
        >
          Business Loan with Unlimited Rewards in Lifetime
        </Text>
        <Text
          fontSize={{ base: "sm", md: "sm", lg: "sm", xl: "sm" }}
          textAlign={{ base: "left", md: "left", lg: "left" }}
          maxWidth={{ base: "95%", md: "90%", lg: "50%", xl: "50%" }}
        >
          Thousands of entrepreneurs bank on widen to start or grow their
          business. Open an account in under 3 minutes.
        </Text>
        <Button
          size={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
          height="48px"
          width={{ base: "120px", md: "150px", xl: "200px" }}
          backgroundColor="#51defc"
          borderRadius="50px"
          color="black"
          mt={8}
          mr={"90%"}
          onClick={()=>navigate("/emiCalculator")}
        >
          Get Started
        </Button>
      </div>
      <Box display={{base:"block",md:"flex"}} flexDirection={{base:"column",md:"row"}} justifyContent={{base:"center",md:"space-between"}} alignItems="center" mr={"5%"}>
        <Box
          width={{ base: "100%", md: "35%" }}
          height="120px"
          margin="5%"
          display="flex"
          gap="5%"
          textAlign={"left"}
        >
          <Stack
            width={{ base: "280px", xl: "250px" }}
            height={{ base: "120px", xl: "120px" }}
          >
            <Text
              color="#2596be"
              fontWeight="bold"
              fontSize={{ base: "sm", md: "sm", lg: "sm", xl: "sm" }}
            >
              300K+<span style={{ color: "#EC407A" }}> Reviews</span>
            </Text>
            <Text fontSize={{ base: "sm", md: "sm", lg: "sm", xl: "sm" }}>
              No matter how your customer want pay, we can help you
            </Text>
          </Stack>
          <Stack
            width={{ base: "100%", md: "250px", lg: "md", xl: "lg" }}
            height={{ base: "100%", md: "120px", lg: "150px", xl: "120px" }}
          >
            <box>
              <UserIconList users={users} />
            </box>
            <Text marginLeft="30%" fontSize={{ base: "xs", lg: "lg" }}>
              Users
            </Text>
            <Text fontSize={{ base: "xs" }}>
              No matter how your customer want pay, we can help you
            </Text>
          </Stack>
        </Box>

        {/* {remainingCount > 0 && (
        <div style={{ marginTop: "-20px", textAlign: "center"}}>
          +{remainingCount} more users
        </div>
      )} */}
        <Box
          display="flex"
          gap="5%"
          width={{ base: "40%", sm: "40%", md: "45%", lg: "40%", xl: "40", "2xl": "40%" }}
          alignItems={"center"}
        >
          {iconList.map((e) => (
            <Image
              src={e.icon}
              alt={e.name}
              boxSize="200px"
              width={{ base: "100px", sm: "110px", md: "120px", lg: "130px", xl: "130px", "2xl": "170px" }}
              height="50px"
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
