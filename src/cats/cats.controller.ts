import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Header,
  Redirect,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './dto/create-cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  async create(@Body() createDto: CreateCatDto) {
    return this.catsService.create(createDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('ab*de')
  @Redirect('https://nestjs.com', 301)
  findAllWildCard(@Req() request: Request): string {
    return 'This actions return all cats';
  }

  @Get('test')
  createTest(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get('find')
  @Redirect('https://nestjs.com', 301)
  findAlltest(): string {
    return 'This actions return all cats';
  }

  @Get('find/:id')
  async findId(@Param('id') id: string): Promise<string> {
    return `This actions returns a ${id} cat`;
  }
}
