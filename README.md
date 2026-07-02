# TİMUR — İnsansız Kara Aracı

> Teknofest 2026 İnsansız Kara Araçları yarışması için geliştirilen otonom UGV platformunun resmi web sitesi.

## 🛡️ Proje Hakkında

TİMUR, LiDAR, stereoskopik kamera ve yapay zekâ tabanlı algılama sistemleriyle donatılmış otonom bir insansız kara aracıdır. Reaktif navigasyon algoritmaları sayesinde engelleri gerçek zamanlı olarak tespit eder ve otonom parkur tamamlama yeteneğine sahiptir.

## 🚀 Teknoloji Yığını

- **RPLiDAR S1** — 360° çevresel tarama
- **ZED 2i** — Stereoskopik derinlik algılama
- **YOLOv8** — Gerçek zamanlı nesne tespiti
- **ROS 2 Humble** — Robot işletim sistemi
- **Gazebo** — Fizik simülasyonu

## 📁 Site Yapısı

```
timur-website/
├── index.html          # Ana sayfa
├── style.css           # Tasarım sistemi
├── main.js             # Etkileşim & animasyonlar
├── assets/
│   └── images/
│       └── timur-logo.jpeg
├── .gitignore
└── README.md
```

## 🖥️ Yerel Çalıştırma

Herhangi bir statik dosya sunucusuyla açabilirsiniz:

```bash
# Python ile
python3 -m http.server 8000

# VS Code Live Server eklentisiyle
# Sağ tık → Open with Live Server
```

## 📄 Lisans

© 2026 TİMUR Ekibi. Tüm hakları saklıdır.
