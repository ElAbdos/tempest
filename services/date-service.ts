export function nowtoHHMM() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const HH = hours.toString().padStart(2, "0");
    const MM = minutes.toString().padStart(2, "0");

    return `${HH}:${MM}`;
}
