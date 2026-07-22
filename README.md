# Aydın Burak E-Commerce

React ve Spring Boot kullanılarak geliştirilmiş, JWT tabanlı kimlik doğrulamaya sahip full-stack e-ticaret uygulamasıdır.

Kullanıcılar sisteme kayıt olabilir, giriş yapabilir, ürünleri inceleyebilir, ürünleri sepete ekleyebilir, adres ve kart bilgilerini yönetebilir, sipariş oluşturabilir ve geçmiş siparişlerini görüntüleyebilir.

## Canlı Proje

| Servis | Bağlantı |
|---|---|
| Frontend | [aydin-burak-ecommerce.netlify.app](https://aydin-burak-ecommerce.netlify.app) |
| Backend | [aydin-ecommerce-backend.onrender.com](https://aydin-ecommerce-backend.onrender.com) |
| Backend Health Check | [API Health](https://aydin-ecommerce-backend.onrender.com/api/health) |
| Ürün API | [API Products](https://aydin-ecommerce-backend.onrender.com/api/products) |
| GitHub Repository | [burak-kuyumcu/AydinBurak_ecommerce](https://github.com/burak-kuyumcu/AydinBurak_ecommerce) |

## Projenin Amacı

Bu projenin amacı, modern bir e-ticaret uygulamasında ihtiyaç duyulan temel frontend ve backend işlemlerini tek bir proje içerisinde uygulamaktır.

Proje kapsamında:

- React ile kullanıcı arayüzü geliştirilmiştir.
- Redux ile uygulama durumu yönetilmiştir.
- Spring Boot ile REST API hazırlanmıştır.
- Spring Security ve JWT ile kimlik doğrulama sağlanmıştır.
- PostgreSQL ile kalıcı veri yönetimi gerçekleştirilmiştir.
- Frontend Netlify üzerinde yayınlanmıştır.
- Backend ve PostgreSQL veritabanı Render üzerinde yayınlanmıştır.

## Uygulama Mimarisi

```text
Kullanıcı
   │
   ▼
React + Vite Frontend
Netlify
   │
   │ HTTPS / REST API
   ▼
Spring Boot Backend
Render
   │
   │ Spring Data JPA
   ▼
PostgreSQL Database
Render PostgreSQL
```

## Özellikler

### Kullanıcı İşlemleri

- Yeni kullanıcı kaydı
- Customer ve store rol seçenekleri
- E-posta ve şifre ile giriş
- BCrypt ile şifrelerin güvenli biçimde saklanması
- JWT tabanlı kimlik doğrulama
- Tarayıcı yenilendiğinde oturumun korunması
- Remember Me desteği
- Kullanıcı çıkışı
- Korumalı sayfalara yetkisiz erişimin engellenmesi
- Token doğrulama işlemi

### Ürün İşlemleri

- Kategorilerin listelenmesi
- Ürünlerin backend API üzerinden alınması
- Ürün listeleme
- Ürün detay sayfası
- Kategoriye göre ürün görüntüleme
- Ürün arama
- Ürün filtreleme
- Ürün sıralama
- Ürün görsellerinin görüntülenmesi
- Fiyat, stok, puan ve satış sayısı bilgilerinin gösterilmesi

### Sepet İşlemleri

- Sepete ürün ekleme
- Aynı üründen birden fazla ekleme
- Ürün miktarını artırma
- Ürün miktarını azaltma
- Sepetten ürün silme
- Siparişe dahil edilecek ürünleri seçme
- Sepet bilgilerinin LocalStorage içerisinde korunması
- Toplam ürün fiyatının hesaplanması
- Kargo ücretinin hesaplanması
- İndirim tutarının hesaplanması
- Genel toplamın hesaplanması

### Adres İşlemleri

- Kullanıcıya ait adresleri listeleme
- Yeni adres ekleme
- Adres güncelleme
- Adres silme
- Sipariş için teslimat adresi seçme
- Adres bilgilerinin kullanıcı hesabıyla ilişkilendirilmesi

Adres alanları:

- Adres başlığı
- Ad
- Soyad
- Telefon
- Şehir
- İlçe
- Mahalle ve adres detayı

### Kart İşlemleri

- Kayıtlı kartları listeleme
- Yeni kart ekleme
- Kart bilgilerini güncelleme
- Kart silme
- Ödeme için kayıtlı kart seçme
- Kart numarasının yalnızca son dört hanesini gösterme
- Son kullanma ayı ve yılı bilgilerini saklama

### Sipariş İşlemleri

- Seçilen adres ve kart ile sipariş oluşturma
- Sepetteki seçili ürünleri siparişe dönüştürme
- Sipariş tarihinin kaydedilmesi
- Sipariş toplam tutarının kaydedilmesi
- Sipariş tamamlandıktan sonra sepetin temizlenmesi
- Kullanıcının geçmiş siparişlerini listeleme
- Sipariş detaylarını açıp kapatma
- Sipariş içerisindeki ürünleri görüntüleme
- Ürün adedi, birim fiyat ve satır toplamını gösterme

### Arayüz Özellikleri

- Responsive tasarım
- Mobil uyumlu sayfa yapısı
- Bildirim mesajları
- Yüklenme göstergeleri
- Hata mesajları
- Açılır kullanıcı menüsü
- Sepet ön izleme alanı
- Kullanıcı giriş durumuna göre değişen header
- Ürün slider bileşenleri
- Ana sayfa, mağaza, ürün detay, sepet ve ödeme sayfaları

## Kullanılan Teknolojiler

### Frontend

- React
- Vite
- JavaScript
- Redux
- Redux Thunk
- Redux Logger
- React Router DOM
- Axios
- React Hook Form
- Tailwind CSS
- React Toastify
- Lucide React
- React Icons
- Swiper
- MD5

### Backend

- Java 21
- Spring Boot
- Spring Web MVC
- Spring Data JPA
- Spring Security
- JSON Web Token
- Hibernate
- Jakarta Validation
- Lombok
- Maven

### Veritabanı

- PostgreSQL
- Hibernate ORM
- Spring Data JPA

### Deployment

- Netlify
- Render Web Service
- Render PostgreSQL
- Docker
- GitHub

## Proje Yapısı

```text
AydinBurak_ecommerce
├── backend
│   ├── .mvn
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── aydinburak
│   │   │   │           └── ecommerce
│   │   │   │               ├── config
│   │   │   │               ├── controller
│   │   │   │               ├── dto
│   │   │   │               ├── entity
│   │   │   │               ├── repository
│   │   │   │               ├── security
│   │   │   │               └── service
│   │   │   └── resources
│   │   │       └── application.properties
│   │   └── test
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
├── public
├── src
│   ├── components
│   ├── layout
│   ├── pages
│   ├── services
│   ├── store
│   │   ├── actions
│   │   └── reducers
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Backend Paket Yapısı

### config

Uygulamanın güvenlik, CORS, başlangıç verileri ve genel yapılandırma sınıflarını içerir.

```text
config
├── SecurityConfig
├── DataInitializer
└── ProductDataInitializer
```

### controller

Frontend tarafından gönderilen HTTP isteklerini karşılayan REST controller sınıflarını içerir.

Başlıca controller görevleri:

- Kullanıcı kayıt ve giriş işlemleri
- Kullanıcı doğrulama
- Rol işlemleri
- Kategori işlemleri
- Ürün işlemleri
- Adres işlemleri
- Kart işlemleri
- Sipariş işlemleri
- Health check işlemi

### dto

Frontend ve backend arasında taşınan istek ve cevap modellerini içerir.

Örnek DTO sınıfları:

- SignupRequest
- LoginRequest
- AddressRequest
- AddressResponse
- CardRequest
- OrderRequest
- OrderResponse
- OrderProductRequest

### entity

PostgreSQL tablolarıyla eşleşen JPA entity sınıflarını içerir.

Başlıca entity yapıları:

- User
- Role
- Category
- Product
- Address
- Credit Card
- Order
- Order Product

### repository

Entity sınıfları için Spring Data JPA repository arayüzlerini içerir.

### security

JWT oluşturma, doğrulama ve korumalı isteklere kullanıcı bilgisi ekleme işlemlerini içerir.

### service

Controller ve repository katmanları arasındaki iş kurallarını içerir.

## Veritabanı Başlangıç Verileri

Backend ilk kez çalıştırıldığında gerekli başlangıç verileri otomatik olarak oluşturulur.

### Roller

- customer
- store

### Kategoriler

- Kadın Elbise
- Kadın Ayakkabı
- Kadın Çanta
- Erkek Gömlek
- Erkek Pantolon
- Erkek Ayakkabı

### Örnek Ürünler

- Çiçek Desenli Kadın Elbise
- Kadın Günlük Spor Ayakkabı
- Kadın Omuz Çantası
- Erkek Klasik Gömlek
- Erkek Slim Fit Pantolon
- Erkek Günlük Ayakkabı

## Yerel Kurulum

### Gereksinimler

Projeyi yerel ortamda çalıştırmak için aşağıdaki araçların kurulu olması gerekir:

- Git
- Node.js
- npm
- Java 21 veya üzeri
- PostgreSQL
- Bir Java geliştirme ortamı
- Visual Studio Code veya IntelliJ IDEA

## Projeyi Klonlama

```bash
git clone https://github.com/burak-kuyumcu/AydinBurak_ecommerce.git
```

Proje klasörüne girin:

```bash
cd AydinBurak_ecommerce
```

## Frontend Kurulumu

Bağımlılıkları yükleyin:

```bash
npm install
```

Ana proje klasöründe `.env` dosyası oluşturun:

```env
VITE_API_URL=http://localhost:8080/api
```

Frontend uygulamasını çalıştırın:

```bash
npm run dev
```

Frontend varsayılan olarak aşağıdaki adreste çalışır:

```text
http://localhost:5173
```

## PostgreSQL Veritabanı Kurulumu

PostgreSQL terminaline bağlanın:

```powershell
$env:PGPASSWORD="POSTGRES_SIFRENIZ"

& "C:\Program Files\PostgreSQL\15\bin\psql.exe" `
  -U postgres `
  -h 127.0.0.1 `
  -d postgres
```

Veritabanını oluşturun:

```sql
CREATE DATABASE aydin_ecommerce;
```

Veritabanına bağlanın:

```sql
\c aydin_ecommerce
```

PostgreSQL terminalinden çıkın:

```sql
\q
```

Geçici şifre değişkenini kaldırın:

```powershell
Remove-Item Env:PGPASSWORD
```

## Backend Ortam Değişkenleri

Backend aşağıdaki ortam değişkenlerini kullanır:

```text
SPRING_DATASOURCE_URL
SPRING_DATASOURCE_USERNAME
DB_PASSWORD
JWT_SECRET
FRONTEND_URL
PORT
```

Windows PowerShell üzerinde değişkenleri tanımlayın:

```powershell
$env:SPRING_DATASOURCE_URL="jdbc:postgresql://localhost:5432/aydin_ecommerce"
$env:SPRING_DATASOURCE_USERNAME="postgres"
$env:DB_PASSWORD="POSTGRES_SIFRENIZ"
$env:JWT_SECRET="EN_AZ_32_KARAKTER_UZUN_GUVENLI_BIR_ANAHTAR"
$env:FRONTEND_URL="http://localhost:5173"
```

`JWT_SECRET` değeri uzun, rastgele ve güvenli olmalıdır.

## Backend Kurulumu

Backend klasörüne girin:

```powershell
cd backend
```

Maven ve Java sürümünü kontrol edin:

```powershell
java -version
.\mvnw.cmd -version
```

Backend uygulamasını çalıştırın:

```powershell
.\mvnw.cmd spring-boot:run
```

Backend varsayılan olarak aşağıdaki adreste çalışır:

```text
http://localhost:8080
```

Backend sağlık kontrolü:

```text
http://localhost:8080/api/health
```

Ürün API kontrolü:

```text
http://localhost:8080/api/products
```

## Frontend Komutları

### Geliştirme Sunucusu

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Build Ön İzleme

```bash
npm run preview
```

### ESLint Kontrolü

```bash
npm run lint
```

## Backend Komutları

Backend klasöründeyken aşağıdaki komutlar kullanılabilir.

### Backend Çalıştırma

```powershell
.\mvnw.cmd spring-boot:run
```

### Testleri Çalıştırma

```powershell
.\mvnw.cmd test
```

### Temiz Production Paketi Oluşturma

```powershell
.\mvnw.cmd clean package
```

### Testleri Çalıştırmadan Paket Oluşturma

```powershell
.\mvnw.cmd clean package -DskipTests
```

## API Endpointleri

Backend API ana adresi:

```text
http://localhost:8080/api
```

Canlı backend API ana adresi:

```text
https://aydin-ecommerce-backend.onrender.com/api
```

### Genel Endpointler

| Metot | Endpoint | Açıklama |
|---|---|---|
| GET | `/api/health` | Backend sağlık kontrolü |
| GET | `/api/roles` | Kullanıcı rollerini listeler |
| GET | `/api/categories` | Kategorileri listeler |
| GET | `/api/products` | Ürünleri listeler |
| GET | `/api/products/{id}` | Seçilen ürünün detayını getirir |

### Kimlik Doğrulama Endpointleri

| Metot | Endpoint | Açıklama |
|---|---|---|
| POST | `/api/signup` | Yeni kullanıcı oluşturur |
| POST | `/api/login` | Kullanıcı girişi yapar ve JWT döndürür |
| GET | `/api/verify` | JWT tokenı doğrular ve kullanıcıyı getirir |

### Adres Endpointleri

| Metot | Endpoint | Açıklama |
|---|---|---|
| GET | `/api/user/address` | Kullanıcının adreslerini listeler |
| POST | `/api/user/address` | Yeni adres oluşturur |
| PUT | `/api/user/address` | Adres bilgilerini günceller |
| DELETE | `/api/user/address/{addressId}` | Adresi siler |

### Kart Endpointleri

| Metot | Endpoint | Açıklama |
|---|---|---|
| GET | `/api/user/card` | Kullanıcının kartlarını listeler |
| POST | `/api/user/card` | Yeni kart oluşturur |
| PUT | `/api/user/card` | Kart bilgilerini günceller |
| DELETE | `/api/user/card/{cardId}` | Kartı siler |

### Sipariş Endpointleri

| Metot | Endpoint | Açıklama |
|---|---|---|
| GET | `/api/order` | Kullanıcının geçmiş siparişlerini listeler |
| POST | `/api/order` | Yeni sipariş oluşturur |

## Örnek Kullanıcı Kaydı

### İstek

```http
POST /api/signup
Content-Type: application/json
```

```json
{
  "name": "Aydın Burak Kuyumcu",
  "email": "burak@example.com",
  "password": "Burak123!",
  "role_id": 1
}
```

### Başarılı Cevap

```json
{
  "message": "User created successfully",
  "user_id": 1
}
```

## Örnek Kullanıcı Girişi

### İstek

```http
POST /api/login
Content-Type: application/json
```

```json
{
  "email": "burak@example.com",
  "password": "Burak123!"
}
```

### Başarılı Cevap

```json
{
  "id": 1,
  "name": "Aydın Burak Kuyumcu",
  "email": "burak@example.com",
  "role": {
    "id": 1,
    "name": "customer"
  },
  "token": "JWT_TOKEN"
}
```

## JWT Kullanımı

Korumalı endpointlere gönderilen isteklerde JWT token aşağıdaki biçimde kullanılmalıdır:

```http
Authorization: Bearer JWT_TOKEN
```

Örnek:

```javascript
fetch('http://localhost:8080/api/verify', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

JWT token kullanıcı giriş yaptıktan sonra backend tarafından oluşturulur.

Token içerisinde aşağıdaki bilgiler bulunur:

- Kullanıcı e-posta adresi
- Kullanıcı ID bilgisi
- Kullanıcı adı
- Kullanıcı rolü
- Oluşturulma zamanı
- Son kullanma zamanı

## Güvenlik

Projede aşağıdaki güvenlik önlemleri uygulanmıştır:

- Kullanıcı şifreleri BCrypt ile şifrelenir.
- JWT tabanlı kimlik doğrulama kullanılır.
- Backend stateless session yapısıyla çalışır.
- Yetkisiz istekler `401 Unauthorized` cevabı alır.
- DTO alanları Bean Validation ile doğrulanır.
- CORS yalnızca izin verilen frontend adreslerine açıktır.
- Veritabanı şifresi kaynak kod içerisinde tutulmaz.
- JWT anahtarı kaynak kod içerisinde tutulmaz.
- Hassas bilgiler ortam değişkenlerinden okunur.
- `.env` dosyaları Git tarafından takip edilmez.
- Backend hata yönlendirmelerinde gerçek HTTP durum kodları korunur.

## Deployment

### Frontend

Frontend Netlify üzerinde yayınlanmaktadır.

Netlify build ayarları:

```text
Branch: main
Base directory: boş
Build command: npm run build
Publish directory: dist
```

Netlify ortam değişkeni:

```env
VITE_API_URL=https://aydin-ecommerce-backend.onrender.com/api
```

SPA yönlendirmeleri için `netlify.toml` dosyası kullanılmaktadır:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Backend

Backend Render Web Service üzerinde Docker ile yayınlanmaktadır.

Render backend ayarları:

```text
Language: Docker
Branch: main
Root Directory: backend
Region: Frankfurt
```

Render ortam değişkenleri:

```text
SPRING_DATASOURCE_URL
SPRING_DATASOURCE_USERNAME
DB_PASSWORD
JWT_SECRET
FRONTEND_URL
```

### Veritabanı

PostgreSQL veritabanı Render PostgreSQL üzerinde yayınlanmaktadır.

Backend ile veritabanı aynı Render bölgesinde çalıştığı için bağlantı internal hostname üzerinden gerçekleştirilmektedir.

## Docker

Backend klasöründeki `Dockerfile`, Spring Boot uygulamasını container olarak çalıştırmak için kullanılır.

Docker image oluşturmak için:

```bash
docker build -t aydin-ecommerce-backend ./backend
```

Container çalıştırmak için:

```bash
docker run -p 8080:8080 \
  -e SPRING_DATASOURCE_URL="jdbc:postgresql://host:5432/aydin_ecommerce" \
  -e SPRING_DATASOURCE_USERNAME="postgres" \
  -e DB_PASSWORD="password" \
  -e JWT_SECRET="guvenli_ve_uzun_jwt_anahtari" \
  -e FRONTEND_URL="http://localhost:5173" \
  aydin-ecommerce-backend
```

## Test Akışı

Uygulamanın temel çalışma akışı aşağıdaki adımlarla test edilebilir:

1. Canlı frontend adresini açın.
2. Register sayfasına gidin.
3. Yeni bir customer hesabı oluşturun.
4. Oluşturulan hesapla giriş yapın.
5. Shop sayfasından bir kategori seçin.
6. Bir ürünün detay sayfasını açın.
7. Ürünü sepete ekleyin.
8. Sepet sayfasına gidin.
9. Ürün miktarını kontrol edin.
10. Sipariş adımına devam edin.
11. Yeni bir teslimat adresi oluşturun.
12. Adresi seçin.
13. Ödeme sayfasına geçin.
14. Yeni bir kart oluşturun.
15. Kartı seçin.
16. Complete Payment düğmesine basın.
17. Kullanıcı menüsünden My Orders sayfasını açın.
18. Oluşturulan siparişin listelendiğini kontrol edin.
19. Show seçeneğine basarak sipariş detaylarını görüntüleyin.

## Production Build Kontrolü

Frontend build:

```powershell
npm run build
```

Backend build:

```powershell
cd backend
.\mvnw.cmd clean package
```

Başarılı frontend build sonucunda `dist` klasörü oluşturulur.

Başarılı backend build sonucunda `backend/target` klasörü içerisinde çalıştırılabilir JAR dosyası oluşturulur.

## Git İşlemleri

Değişiklikleri kontrol edin:

```bash
git status
```

Dosyaları stage alanına ekleyin:

```bash
git add .
```

Commit oluşturun:

```bash
git commit -m "Update full-stack ecommerce project"
```

GitHub'a gönderin:

```bash
git push origin main
```

Netlify ve Render, `main` branch üzerine yapılan push işlemlerinden sonra projeyi otomatik olarak yeniden deploy eder.

## Gelecekte Eklenebilecek Özellikler

- Gerçek e-posta doğrulama sistemi
- Şifre sıfırlama özelliği
- Yönetici paneli
- Mağaza yönetim paneli
- Ürün ekleme ve güncelleme ekranları
- Stok yönetimi
- Favori ürünlerin backend üzerinde saklanması
- Gerçek ödeme sistemi entegrasyonu
- Sipariş durumu takibi
- Kullanıcı profil sayfası
- Ürün yorumları
- Ürün puanlama sistemi
- Kupon ve kampanya sistemi
- Daha gelişmiş arama ve filtreleme
- Swagger/OpenAPI dokümantasyonu
- Otomatik backend ve frontend testleri
- CI/CD kontrol iş akışları

## Notlar

- Uygulamada gerçek bir ödeme işlemi yapılmaz.
- Kart bilgileri yalnızca proje akışını göstermek amacıyla kullanılmaktadır.
- Gerçek kart bilgileriyle test yapılmamalıdır.
- Projede gerçek e-posta gönderme sistemi bulunmamaktadır.
- Kayıt olan kullanıcı hesabı doğrudan aktif hale gelir.
- LocalStorage yalnızca sepet ve oturum gibi frontend durumlarının korunması amacıyla kullanılır.
- Kullanıcı, adres, kart ve sipariş verileri PostgreSQL veritabanında saklanır.

## Geliştirici

**Aydın Burak Kuyumcu**

- GitHub: [github.com/burak-kuyumcu](https://github.com/burak-kuyumcu)
- Proje: [AydinBurak_ecommerce](https://github.com/burak-kuyumcu/AydinBurak_ecommerce)
- Canlı Uygulama: [aydin-burak-ecommerce.netlify.app](https://aydin-burak-ecommerce.netlify.app)


