import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid/index.js";
import { NavLink } from "@remix-run/react";

const events = [{ title: "Meeting", start: new Date() }];

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default function Index() {
  return (
    <VStack justify={"center"} py={"4rem"} px={"3rem"} h={"100vh"} w={"100vw"}>
      <VStack>
        <Image
          mb={"2rem"}
          width={{ xs: "80%", md: "65%", lg: "40%" }}
          src="hadassa-logo.jpg"
        />

        <VStack>
          {/* <MenuLink to={"servicios"} title={"Servicios"}/>
          <MenuLink to={"lashistas"} title={"Lashistas"}/> */}
          <MenuLink to={"agendar"} title={"Agendar"}/>
        </VStack>
      </VStack>
    </VStack>
  );
}

function Servicio() {
  return <Button>{children}</Button>;
}

function MenuLink({title, to}) {
  return (
    <NavLink to={to}>
      <Heading
        color={"pink.350"}
        my={"1.5rem"}
        fontWeight={200}
        fontSize={"2.3rem"}
      >
        {title}
      </Heading>
    </NavLink>
  );
}
