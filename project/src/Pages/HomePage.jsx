import React from "react";
import styles from "./HomePage.module.css";
import { Button, Box, Stack, Image } from "@chakra-ui/react";
import UserIconList from "../Components/UserIconList";
import google from "../assets/google.png";
import walmart from "../assets/walmart_pngwing.png";
import paypal from "../assets/paypal_pngwing.png";
import microsoft from "../assets/microsoft.png";

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
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png",
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
  return (
    <div>
      <div style={{ width: "65%", height: "500px", margin: "5%" }}>
        <h1 className={styles.siliguri}>
          Business Loan with Unlimited Rewards in Lifetime
        </h1>
        <h3 style={{ width: "45%" }}>
          Thousands of entrepreneurs bank on widen to start or grow their
          business. Open an account in under 3 minutes.
        </h3>
        <Button
          size="md"
          height="48px"
          width="200px"
          backgroundColor="#51defc"
          borderRadius="50px"
          color="black"
          mt={8}
          mr={"90%"}
        >
          Get Started
        </Button>
      </div>
      <Box display="flex" justifyContent="space-between" mr={"5%"}>
        <Box width="30%" height="120px" margin="5%" display="flex">
          <Stack width={250} height={120}>
            <h1 style={{ color: "#2596be", fontWeight: "bold" }}>
              300K+<span style={{ color: "#EC407A" }}> Reviews</span>
            </h1>
            <h3>No matter how your customer want pay, we can help you</h3>
          </Stack>
          <Stack width={250} height={120}>
            <UserIconList users={users} />
            <h2>Users</h2>
            <h3>No matter how your customer want pay, we can help you</h3>
          </Stack>
        </Box>

        {/* {remainingCount > 0 && (
        <div style={{ marginTop: "-20px", textAlign: "center"}}>
          +{remainingCount} more users
        </div>
      )} */}
        <Box display="flex" gap="5%" width={"50%"} alignItems={"center"}>
          {iconList.map((e) => (
            <Image
              src={e.icon}
              alt={e.name}
              boxSize="200px"
              width={"170px"}
              height="50px"
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
