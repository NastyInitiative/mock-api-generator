import { Body, Controller, Get, Post } from '@nestjs/common';
import {Message} from '../models/data.model'
import { DataService } from "../services/data/data.service";
@Controller('api')
export class ApiController {
    constructor(private documents: DataService){}
    @Post('getDocuments')
    getDocument(@Body() message: Message){
        console.log("ApiController -> getDocument ->  message",  message)
        message.content= this.documents.getDocs();
        return message.content;
    }
}
