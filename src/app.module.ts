import { Module } from '@nestjs/common';

import { EmpresaModule } from './empresa/empresa.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  imports: [EmpresaModule, ProductosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
