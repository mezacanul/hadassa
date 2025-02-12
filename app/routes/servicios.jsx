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
import servicios from "../../public/data/servicios.json";
import { Children, useEffect } from "react";
import { TfiTime } from "react-icons/tfi";
import { MdTimelapse } from "react-icons/md";

import Navbar from "../components/common/Navbar";
import { NavLink } from "@remix-run/react";

export default function Servicios() {
  return (
    <VStack py={"1rem"} px={"2rem"} mb={"3rem"}>
      <Navbar title={"Servicios"} />

      <VStack align={"start"} gap={"4rem"}>
        {servicios.map((srv) => {
          return <Servicio data={srv} />;
        }, [])}
      </VStack>
    </VStack>
  );
}

function Servicio({ data }) {
  const imgSrc = data.tipo != "combo-hadassa" ? data.id : "combo-hadassa";

  return (
    <NavLink to={"/agendar"}>
      <Box>
        <HStack>
          <Image
            me={"1rem"}
            boxShadow={"-2px 2px 8px rgba(0,0,0,0.3)"}
            borderRadius={"1.5rem"}
            w={"8rem"}
            src={`/img/servicios/${imgSrc}.png`}
          />

          <VStack align={"start"} gap={0}>
            <Heading color={"pink.250"}>{data.servicio}</Heading>
            <Text>{data.descripcion}</Text>

            <HStack
              mt={"1rem"}
              pt={"0.5rem"}
              borderTop={"1px solid rgba(0,0,0,0.1)"}
              w={"100%"}
              justify={"space-between"}
            >
              <Text fontSize={"1.2rem"} fontWeight={600}>
                ${data.precio}
              </Text>

              <HStack gap={1}>
                <Text fontSize={"1.4rem"} color={"pink.350"}>
                  <MdTimelapse />
                </Text>
                <Text fontWeight={700}>{data.minutos} minutos</Text>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </NavLink>
  );
}
