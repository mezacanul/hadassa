import { Grid, HStack } from "@chakra-ui/react";
import Hoy from "../components/common/hoy";
import Agendar from "./agendar";

export default function UiV2() {
    return (
    <Grid templateColumns="3fr 2fr" gap={6}>
        <Hoy />
        <Agendar />
    </Grid>
    )
}