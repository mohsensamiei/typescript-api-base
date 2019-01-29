import { Controller, Get } from "routing-controllers";
import { IResult, ResultStatus } from "../commons/Result";

@Controller("/healthcheck")
export default class HealthCheckController {

    @Get("/v1")
    public v1(
    ): IResult {
        const result: IResult = {
            status: ResultStatus.Success,
            message: "Success"
        };
        return result;
    }

}