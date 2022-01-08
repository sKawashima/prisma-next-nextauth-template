# Prisma Next.js Next-Auth on TypeScript template

## Development .env setting

```
DATABASE_URL="postgresql://admin:password@localhost:5432/testdb"
GOOGLE_ID="***"
GOOGLE_SECRET="***"
```

## Docker setting

```yml
version: '3.1'

services:
  db:
    image: postgres:13-alpine
    container_name: temp-name
    # Please update here
    command: postgres -c log_destination=stderr -c log_statement=all
    logging:
      options:
```

## Development

```bash
# if not install: brew install pnpm

# install module
yarn

# run dev server, db
yarn dev

# prisma format, migrate, generate
yarn migrate
```
