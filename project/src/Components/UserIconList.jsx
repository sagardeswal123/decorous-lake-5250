import React from "react";
import { Flex, Box, Avatar, useBreakpointValue } from "@chakra-ui/react";

const UserIconList = ({ users }) => {
  const display = useBreakpointValue({ base: "none", sm: "none", md: "none",xl:"block" });

  return (
    <Box display={display}>
      <Flex
        direction="row"
        position="absolute"
        left={{ base: "-160px", sm: "250px", md: "350px", lg: "30%", xl: "", "2xl": "22%" }}
        top={{ base: "-475px", sm: "-490", md: "-420", lg: "-8%", xl: "-2%", "2xl": "-3%" }}
        spacing="10px"
        marginBottom="40px"
      >
        {users.slice(0, 5).map((user, index) => (
          <Box
            key={index}
            position="relative"
            zIndex={index + 2}
            ml={-5}
            mt={{ base: "", lg: "60%" }}
          >
            <Avatar
              name={user.name}
              src={user.icon}
              size={{ base: "xs", sm: "xs", xl: "sm", lg: "sm" }}
              borderRadius="50%"
              mt={"53rem"}
            />
            {index === 4 && users.length > 5 && (
              <Box
                position="absolute"
                left="80%"
                top="50%"
                transform="translate(-50%, -50%)"
                bg="#4a7e97"
                color="#51defc"
                borderRadius="50%"
                fontWeight="bold"
                width="35px"
                height="35px"
                fontSize="sm"
                lineHeight="1.2"
                textAlign="center"
                pt={2}
                zIndex="10"
                mt={{ base: "", lg: "26.5rem" }}
              >
                +{users.length - 5}
              </Box>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default UserIconList;
