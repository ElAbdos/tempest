import {nowtoHHMM} from "../services/date-service";
import {Txt} from "./Txt";

interface ClockProps {
    className?: string
}

export function Clock({className}: ClockProps) {
    return (
        <>
            <Txt>{nowtoHHMM()}</Txt>
        </>

    );
}
