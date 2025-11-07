/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `empresa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "empresa_nombre_key" ON "empresa"("nombre");
