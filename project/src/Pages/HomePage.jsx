import React from "react";
import styles from "./HomePage.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";

const HomePage = () => {
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
      >
        Get Started
      </Button>
      </div>

      
    </div>
  );
};

export default HomePage;
