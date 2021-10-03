# Prisma Next.js Next-Auth on pnpm template

`pnpm`で組んでるが`npm`や`yarn`を使う場合は`pnpm-lock.yml`を削除すれば使えるはず

## Development .env setting

```
DATABASE_URL="postgresql://admin:password@localhost:5432/testdb"
GOOGLE_ID="***"
GOOGLE_SECRET="***"
```

## Development

```bash
# if not install: brew install pnpm

# install module
pnpm i

# run dev server, db
pnpm run dev
```
