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
import Navbar from "../components/common/Navbar";
import "./../style/FullCalendar.css";

const events = [
  { title: "Hadassa", img: "img/lashistas/lsh1.png", start: new Date() },
  { title: "Aitana", img:"img/lashistas/lsh2.png" ,start: new Date() },
  { title: "Eli", img:"img/lashistas/lsh3.png" ,start: new Date() },
];

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <Image src={eventInfo.event.img} />
      <Text>{eventInfo.event.title}</Text>
    </>
  );
}

export default function Agendar() {
  return (
    <VStack py={"1rem"} px={"2rem"} bg={"#f1f1f1"}>
      {/* <Navbar title={"Agendar"} /> */}
      <FullCalendar
        height={"50vh"}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </VStack>
  );
}
