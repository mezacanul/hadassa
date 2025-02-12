import { Heading, HStack, Image } from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";

export default function Navbar({ title }) {
  return (
    <HStack align={"center"} justify={"space-between"} w={"100%"}>
      <Heading fontSize={"2.3rem"} fontWeight={200}>
        {title}
      </Heading>

      {/* <Link href="/"> */}
      <NavLink to={"/"}>

        <Image my={"1rem"} width={"5rem"} src="/hadassa-logo.jpg" />
      </NavLink>
      {/* </Link> */}
    </HStack>
  );
}
