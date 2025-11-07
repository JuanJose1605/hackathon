import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresaDto } from './create-empresa.dto';
import { IsString } from 'class-validator';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
    @IsString()
    imagenUrl: string;
}
