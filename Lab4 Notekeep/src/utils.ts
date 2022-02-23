import { Parser } from "webpack";

export default class Util {
    public static TemperatureInC(far: number): number {

        return parseInt(((far - 32) * (5 / 9)).toFixed(2));
    }
    public static TemperatureInF(far: number): number {

        return far;
    }
    public static Date(): string {
        return new Date().toISOString().split("T")[0]

    }

}