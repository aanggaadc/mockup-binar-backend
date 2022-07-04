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

# Screen Shoot Uji Coba API

Create User
![create user](https://user-images.githubusercontent.com/90512196/177213449-f8f36008-1103-4d55-b614-e0cc65d2c71f.jpg)

Login User
![login user](https://user-images.githubusercontent.com/90512196/177213580-94e0c347-06f7-49f3-bcaf-6c4dca75733d.jpg)

Create Product
![create product](https://user-images.githubusercontent.com/90512196/177213561-b9fe8c78-fd74-43f4-a754-bdfd74c726a9.jpg)

Show Product By Id
![product by id](https://user-images.githubusercontent.com/90512196/177213618-e5168150-de31-4adc-8ed9-925bdc805f32.jpg)

Show All Product
![all product](https://user-images.githubusercontent.com/90512196/177213650-ce430881-fc67-469f-9b56-6a0f35de918c.jpg)

Update Product
![update product](https://user-images.githubusercontent.com/90512196/177213674-9ae55ec2-b6f1-46fd-8cc9-01b9ce17e813.jpg)

Delete Product
![delete product](https://user-images.githubusercontent.com/90512196/177213697-6c55a39d-2127-44de-b47e-6f985fc4151b.jpg)


# Question No 4

Menurut saya seharusnya untuk API show all data lebih baik digunakan server side pagination di karenakan jika menggunakan client side pagination seperti jika data nya sudah puluhan ribu bisa memakan waktu yang sangat lama bahkan bisa menyababkan browser not responding.
