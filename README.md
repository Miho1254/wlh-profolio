# World Lọt Hố - World Simp and Friends

Kho lưu trữ này chứa mã nguồn của trang web World Lọt Hố, nơi sinh hoạt của cộng đồng Hololive và Vtuber Việt Nam "World Simp and Friends".

## Tính năng

- Trang tĩnh xây dựng bằng HTML và Tailwind CSS
- Giao diện đáp ứng cho các trang chủ, nhóm, nhân sự và thư viện ảnh
- Quy trình build Tailwind để tạo ra CSS nén
- Sẵn sàng triển khai lên các dịch vụ lưu trữ tĩnh với sitemap và file chuyển hướng

## Cài đặt

1. Cài [Node.js](https://nodejs.org/) (khuyến nghị phiên bản 16 trở lên).
2. Cài đặt các phụ thuộc:
   ```bash
   npm install
   ```

## Sử dụng

### Build asset

Tạo file stylesheet đã nén:

```bash
npm run build
```

Phục vụ phát triển với chế độ tự động biên dịch lại:

```bash
npm run watch
```

### Xem trang web

Mở `index.html` trên trình duyệt hoặc sử dụng bất kỳ trình phục vụ file tĩnh nào để chạy dự án.

## Triển khai

1. Chạy `npm run build` để đảm bảo `public/output.css` đã được cập nhật.
2. Tải toàn bộ dự án lên dịch vụ lưu trữ tĩnh của bạn (ví dụ: Netlify, Vercel, GitHub Pages).

