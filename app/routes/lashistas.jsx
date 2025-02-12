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
import lashistas from "../../public/data/lashistas.json";
import { Children, useEffect } from "react";
import { TfiTime } from "react-icons/tfi";
import Navbar from "../components/common/Navbar";
import { NavLink } from "@remix-run/react";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";

export default function Lashistas() {
  return (
    <VStack py={"1rem"} mb={"3rem"} px={"2rem"}>
      <Navbar title={"Lashistas"} />

      <VStack
        alignItems={"center"}
        w={"100%"}
        align={"start"}
        gap={"3rem"}
      >
        {lashistas.map((lsh) => {
          return <Lashista key={lsh.id} data={lsh} />;
        }, [])}
      </VStack>
    </VStack>
  );
}

function Lashista({ data }) {
  // useEffect(() => {
  //   console.log(data.horarioSBD);
  // }, []);
  return (
    <NavLink to={"/agendar"}>
      <Box w={"100%"}>
        <HStack align={"center"} w={"100%"} gap={0}>
          <Image
            // me={"1rem"}
            boxShadow={"-4px 4px 8px rgba(0,0,0,0.2)"}
            borderRadius={"100%"}
            objectFit={"cover"}
            w={"8rem"}
            src={`/img/lashistas/${data.id}.png`}
          />

          <VStack py={"1.5rem"} px={"2rem"} align={"start"} gap={1}>
            <Heading color={"pink.300"}>{data.nombre}</Heading>

            <HStack id="Dias">
              <Text fontSize={"1.2rem"} color={"pink.350"}>
                <BsCalendar2CheckFill />
              </Text>
              <Text fontWeight={700}>L - V</Text>
            </HStack>

            <VStack id="Horarios" gap={1}>
              {data.horariosLV.map((hr) => {
                return (
                  <HStack key={hr}>
                    <Text ms={"-0.5"} fontSize={"1.4rem"} color={"pink.350"}>
                      <IoTimeSharp />
                    </Text>
                    <Text>{hr}</Text>
                  </HStack>
                );
              })}
            </VStack>
            {data.horarioSBD != "" && (
              <HStack ms={"1"}>
                <b style={{fontSize: "1.2rem"}}>S:</b> {data.horarioSBD}
              </HStack>
            )}
          </VStack>
        </HStack>
      </Box>
    </NavLink>
  );
}
