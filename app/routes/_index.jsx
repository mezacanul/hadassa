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
import dayGridPlugin from "@fullcalendar/daygrid";
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
        <Image mb={"2rem"} width={"80%"} src="hadassa-logo.jpg" />

        <VStack>
          <NavLink to={"servicios"}>
            <Heading
              color={"pink.350"}
              my={"1.5rem"}
              fontWeight={200}
              fontSize={"2.3rem"}
            >
              Servicios
            </Heading>
          </NavLink>

          <NavLink to={"lashistas"}>
            <Heading
              color={"pink.350"}
              my={"1.5rem"}
              fontWeight={200}
              fontSize={"2.3rem"}
            >
              Lashistas
            </Heading>
          </NavLink>
          
          <NavLink to={"agendar"}>
            <Heading
              color={"pink.350"}
              my={"1.5rem"}
              fontWeight={200}
              fontSize={"2.3rem"}
            >
              Agendar
            </Heading>
          </NavLink>
        </VStack>
      </VStack>
    </VStack>
  );
}

function Servicio() {
  return <Button>{children}</Button>;
}
