import { BadRequestException, Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class UserService {
    async findUser(phone: string) {
        if (!phone) {
            throw new BadRequestException('phone is required')
        }
        const headers = {
            'Content-Type': 'application/json',
        };
        const url = `https://datacore-production.up.railway.app/user?phone=${phone}`;
        try {
            const response = await axios.get(url, { headers });
            console.log(response)
            return response.status === 200;
        } catch (error) {
            console.error(error);
        }
    }

    async createConversation() { }
}