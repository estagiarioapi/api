import { Controller, Get, Param } from "@nestjs/common";

@Controller('event')
export class EventController {
    constructor() {}

    @Get()
    async receiveEvent(@Param() phoneNumber: string, @Param() modelName: string) {
        console.log(phoneNumber, modelName)
        return { phoneNumber, modelName }
    }
}