import { Controller, Get } from "@nestjs/common";
import { Timeout } from "@nestjs/schedule";
import { LocationService } from "../../services/feu-ui-services/location.service";


@Controller()
export class ApiLocationController {
    constructor(private location: LocationService) {}

    @Get('/getCountries')
    getCountries() {
        console.log('::: GET COUNTRIES :::');
        console.log(this.location.getCountries());
        console.log(':::::::::::::::::::::');
        return this.location.getCountries()
    }

    @Get('/getProvinces')
    // @Timeout(6000)
    getProvinces() {
        console.log('::: GET PROVINCES :::');
        console.log(this.location.getProvinces());
        console.log(':::::::::::::::::::::');
        return this.location.getProvinces()
    }

    @Get('/getCities')
    // @Timeout(6000)
    getCities() {
        console.log('::: GET CITIES :::');
        console.log(this.location.getCities());
        console.log(':::::::::::::::::::::');
        return this.location.getCities()
    }
}