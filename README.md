
psql -U postgres -p 5432 -h db-postgres
psql -U postgres -p 5432 -h 127.0.0.1
password postegress: postgrespass
comando: \l
sair: /q
showdatabase: \c nomedatabase
showtable: \dt

**Criação de db no sequelize**
npx sequelize db:create

npx sequelize migration:create --name create-users

**Init migration**
npx sequelize db:migrate

**desfazer a ultima migration**
npx sequelize db:migrate:undo
