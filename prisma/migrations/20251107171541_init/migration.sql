-- CreateTable
CREATE TABLE "empresa" (
    "nit" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "imagenUrl" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empresa_pkey" PRIMARY KEY ("nit")
);

-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagenUrl" TEXT,
    "empresaNit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empresa_email_key" ON "empresa"("email");

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_empresaNit_fkey" FOREIGN KEY ("empresaNit") REFERENCES "empresa"("nit") ON DELETE RESTRICT ON UPDATE CASCADE;
