import React from "react";
import { Flex, Box, Avatar } from "@chakra-ui/react";

const UserIconList = ({ users }) => {
  //console.log(users);
  return (
    <Flex
      direction="row"
      position="absolute"
      left="21.6%"
      top="-33px"
      spacing="10px"
      marginBottom="40px"
    >
      {users.slice(0, 5).map((user, index) => (
        <Box
          key={index}
          position="relative"
          zIndex={index + 2}
          top={`${index * 1}px`} // adjust the pixel value to control the spacing and overlapping
          ml={-5}
          mt="60%"
        >
          <Avatar
            name={user.name}
            src={user.icon}
            size="sm"
            borderRadius="50%"
            mt="45rem"
          />
          {index === 4 && users.length > 5 && (
            <Box
              position="absolute"
              left="50%"
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
              mt="22.4rem"
            >
              +{users.length - 5}
            </Box>
          )}
        </Box>
      ))}
    </Flex>
  );
};

export default UserIconList;