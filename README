# Panduan Instalasi

Install paket-paket yang di perlukan dalam menjalankan aplikasi dengan perintah sebgai berikut di teriminal.
pastikan direktori yang di akses sudah benar seperti :
```
home/document/mockup-binar-backend
```
lalu jalan perintah berikut :

```
npm install
```

Setelah proses instalasi selesai, rename file demo-config.json menjadi config.json
lalu edit sesuaikan konfigurasi "development" di dalam file config.json di dengan sistem yang ada pada laptop/komputer

```
{
  "development": {
    "username": ,
    "password": ,
    "database": ,
    "host": ,
    "dialect": "
  }
```

setelah itu ubah file demo.env menjadi .env lalu isi NODE_ENV menjadi development, atur port yang akan digunakan oleh aplikasi dan atur sandi JWT

```
NODE_ENV="development"
PORT=5000
JWT_SECRET="binar"
```

jalankan perintah berikut pada terminal untuk membuat database sesuai dengan konfigurasi yang sudah di buat di config.json sebelum nya 

```
npx sequelize db:create
```

seteleh berhasil membuat database jalankan aplikasi dengan perintah sabegai berikut di terminal
```
node index.js atau nodemon index.js
```

#### Package Node Module Yang Dibutuhkan

```
# bcyrpt
# dotenv
# express
# jsonwebtoken
# pg
# pg-hstore
# sequelize
# sequelize-cli
```

# Question No 4

Menurut saya seharusnya untuk API show all data lebih baik digunakan server side pagination di karenakan jika menggunakan client side pagination seperti jika data nya sudah puluhan ribu bisa memakan waktu yang sangat lama bahkan bisa menyababkan browser not responding.
