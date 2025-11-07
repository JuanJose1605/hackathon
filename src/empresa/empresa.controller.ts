import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }
   @Post('inicio')
async login(@Body() body: { nombre: string; password: string }) {
  return this.empresaService.login(body.nombre, body.password);
}

  @Get()
  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':nit')
  findOne(@Param('nit') nit: string) {
    return this.empresaService.findOne(nit);
  }

  @Patch(':nit')
  update(@Param('nit') nit: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(nit, updateEmpresaDto);
  }

  @Delete(':nit')
  remove(@Param('nit') nit: string) {
    return this.empresaService.remove(nit);
  }
}
