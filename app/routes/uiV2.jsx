import { Grid, HStack } from "@chakra-ui/react";
import Hoy2 from "../components/common/Hoy2";
import Agendar from "./agendar";

export default function UiV2() {
    return (
    <Grid mx={"3rem"} templateColumns="3fr 2fr" gap={6}>
        <Hoy2 />
        <Agendar />
    </Grid>
    )
}