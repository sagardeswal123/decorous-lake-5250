import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { FaGlobe } from 'react-icons/fa';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import Logo from "../../src/assets/QuickLoanLogo.png"
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/AuthReducer/action";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "EMI Calculator",
    href: "/emiCalculator",
  },
  {
    label: "Product",
    href: "/product",
  },
  {
    label: "Apply for Loan",
    href: "/loanApplicationPage",
  },
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Register",
    href: "/register",
  },
  {
    label: "Logout",
    href: "/login",
  },

];

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.600");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const { isOpen, onClose } = useDisclosure();
  const dispatch=useDispatch()
  const isAuth = useSelector(store => store.AuthReducer.isAuth);
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
         [isAuth && (navItem.label !== "Login" && navItem.label !== "Register")?
             <Box key={navItem.label}>
         <Link
           as={RouteLink}
           to={navItem.href}
           p={2}
           fontSize={"md"}
           fontWeight={500}
           color={linkColor}
           onClick={()=>[navItem.label=="Logout"?dispatch(Logout):""]}
           _hover={{
             textDecoration: "none",
             color: linkHoverColor,
           }}
         >
           {navItem.label}
         </Link>
       </Box>
         :  [!isAuth && navItem.label !== "Logout"? 
         <Box key={navItem.label}>
         <Link
           as={RouteLink}
           to={navItem.href}
           p={2}
           fontSize={"md"}
           fontWeight={500}
           color={linkColor}
           onClick={()=>console.log("logout")}
           _hover={{
             textDecoration: "none",
             color: linkHoverColor,
           }}
         >
           {navItem.label}
         </Link>
       </Box>:""]]
   
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                onClick={onToggle}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bg = useColorModeValue(
    "linear-gradient(to right, #51defc, lightblue)",
    "linear-gradient(to right, gray.800, purple.500)"
  );
  const mobileNav = useColorModeValue("gray.200", "gray.700");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={bg}   px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={<HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={onToggle}
          variant={"ghost"}
        />
        <Link as={RouteLink} to={"/"}>
          <Button ><FaGlobe size={30} color="white"/> Quick Loan</Button>
          {/* <img src={Logo} alt="Logo" style={{ height: "40px" }} /> */}
        </Link>
        <Box display={{ base: "none", md: "flex" }} alignItems={"center"}>
          <DesktopNav />
        </Box>
        <Flex alignItems={"center"}>
          <IconButton
            size={"md"}
            icon={<SwitchIcon />}
            aria-label={"Toggle Color Mode"}
            variant={"ghost"}
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;
