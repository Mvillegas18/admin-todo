# Development

Pasos para levantar la app en desarrollo

1. Levantar la base de datos

```
docker compose up -d
```

2. Ejecutar el seed para [crear la base de datos local](http://localhost:3000/api/seed)

# Prisma commands

-   Inicializar prisma en tu proyecto

```
pnpm prisma init
```

-   Migrar tus cambios a la base de datos

```
pnpm prisma migrate dev
```

-   Generar el cliente de prisma

```
pnpm prisma generate
```
