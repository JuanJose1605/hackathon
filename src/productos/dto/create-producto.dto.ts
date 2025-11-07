import { IsNumber, IsString } from "class-validator";

export class CreateProductoDto {
    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;
    @IsNumber()
    precio: number;

    @IsString()
    empresaNit: string;
}
