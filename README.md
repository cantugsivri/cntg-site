# CNTG Next.js Web Sitesi

Bu klasör, CNTG Growth Partners için hazırlanmış çalışan bir Next.js + Tailwind CSS web sitesi projesidir.

## Çok Basit Çalıştırma

1. Bilgisayarda bu klasörü açın:

   `C:\Users\CANTUĞ\Documents\Codex\2026-04-30\ncelikle-i-im-zerinde-al-al\cntg-next-site`

2. Klasörün içinde terminal açın.

3. İlk kez çalıştırırken şunu yazın:

   `npm install`

4. Sonra siteyi açmak için şunu yazın:

   `npm run dev`

5. Ekranda çıkan adresi tarayıcıda açın. Genelde bu olur:

   `http://localhost:3000`

## npm Komutu Çalışmazsa

Bilgisayar "npm bulunamadı" gibi bir uyarı verirse Node.js kurulmamış demektir.

Şu adresten LTS sürümü kurun:

`https://nodejs.org`

Kurulumdan sonra terminali kapatıp yeniden açın ve yukarıdaki adımları tekrar edin.

## Yayına Hazırlama

Yayına almadan önce şu komut çalıştırılır:

`npm run build`

Bu komut hata vermiyorsa proje yayına hazır demektir.

## İçerik Nereden Değişir?

Ana sayfa metinleri burada:

`app/page.tsx`

Site başlığı ve açıklaması burada:

`app/layout.tsx`

Renkler ve tasarım ayarları burada:

`tailwind.config.ts`
