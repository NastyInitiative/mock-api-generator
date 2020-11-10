import { Body, Controller, Get, Post } from '@nestjs/common';
import {Message} from '../../models/data.model';
import { DataService } from "../../services/data/data.service";
@Controller('api-docs')
export class ApiDocsController {
    constructor(private documents: DataService){}
    
    @Post('getDocuments')
    getDocument(@Body() message){
        console.log("ApiController -> getDocument ->  message",  message)
        message.content= this.documents.getDocs();
        console.log("ApiController -> getDocument after init", message.content)
        return message.content;
    }
    @Get('getTitolari')
    getTitolare(){
        return this.documents.getListTitolare();
    }
}
