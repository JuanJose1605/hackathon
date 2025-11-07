import { IsString } from "class-validator";

export class CreateEmpresaDto {
    @IsString()
    nit: string;

    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

    @IsString()
    email: string;
    
    @IsString()
    password: string;
}
