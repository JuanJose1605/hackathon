import { Injectable, OnModuleInit, UnauthorizedException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaClient } from 'generated/prisma/client';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class EmpresaService extends PrismaClient implements OnModuleInit {
   private readonly JWT= 'Token';
  async onModuleInit() {
    await this.$connect();
  }
  create(createEmpresaDto: CreateEmpresaDto) {
    return this.empresa.create({ data: createEmpresaDto });
  }

  async login(nombre: string, password: string) {
    const empresa = await this.empresa.findUnique({ where: { nombre } });

    if (!empresa) {
      throw new UnauthorizedException('Nombre no encontrado');
    }

    if (!empresa.password) {
      throw new UnauthorizedException('Contraseña no establecida');
    }
    
    if (empresa.password !== password) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const token = jwt.sign(
      { sub: empresa.nit, nombre: empresa.nombre },
      this.JWT,
      { expiresIn: '2h' },
    );

    const mensaje = 'Inicio de sesión exitoso';
    return { token, mensaje };
  }

  findAll() {
    this.empresa.findMany();
  }

  findOne(nit: string) {
    return this.empresa.findUnique({ where: { nit } });
  }

  update(nit: string, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresa.update({
      where: { nit },
      data: updateEmpresaDto,
    });
  }

  remove(nit: string) {
    return this.empresa.delete({ where: { nit } });
  }
}
