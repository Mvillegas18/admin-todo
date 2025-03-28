# Development

Pasos para levantar la app en desarrollo

1. Levantar el proyecto

```
docker compose up -d
```

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
