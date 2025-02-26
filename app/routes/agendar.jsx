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
  { title: "Meeting", start: new Date() },
  { title: "Meeting 2", start: new Date() },
];

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default function Agendar() {
  return (
    <VStack py={"1rem"} px={"2rem"}>
      <Navbar title={"Agendar"} />
      <FullCalendar
        height={"80vh"}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
          eventContent={renderEventContent}
      />
    </VStack>
  );
}
