import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carsService: CarsService) {}

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string) {
    console.log(id);
    return this._carsService.findOneById(id);
  }
  @Get()
  getAllCars() {
    return this._carsService.findAll();
  }
  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }
  @Patch(':id')
  updateCar(@Body() body: any) {
    return body;
  }
  @Delete('id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
