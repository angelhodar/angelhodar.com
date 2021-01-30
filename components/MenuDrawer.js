import React from "react";
import {
  Box,
  IconButton,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavigationLink from "@/components/NavigationLink";

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box display={{ md: "none", sm: "flex" }}>
      <IconButton ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody>
              <VStack spacing="5">
                <NavigationLink to={"/"} name={"Home"} onClick={onClose} />
                <NavigationLink
                  to={"/projects"}
                  name={"Projects"}
                  onClick={onClose}
                />
                <NavigationLink
                  to={"/resume"}
                  name={"Resume"}
                  onClick={onClose}
                />
                <NavigationLink to={"/blog"} name={"Blog"} onClick={onClose} />
                <NavigationLink
                  to={"/stats"}
                  name={"Stats"}
                  onClick={onClose}
                />
                <NavigationLink
                  to={"/about"}
                  name={"About"}
                  onClick={onClose}
                />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
