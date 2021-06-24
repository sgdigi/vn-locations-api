# Vietnam Locations

API để lấy thông tin các khu vực hành chính Việt Nam theo tỉnh/thành phố, quận/huyện, phường/xã từ nguồn của Tổng Cục Thống Kê. Dự án này dựa theo mã nguồn của [madnh/hanhchinhvn](https://github.com/madnh/hanhchinhvn.git) nhưng được viết lại bằng Node.js/Fastify.

*Dữ liệu gốc (Excel):* [https://danhmuchanhchinh.gso.gov.vn/](https://danhmuchanhchinh.gso.gov.vn/)

## Hướng Dẫn

- Clone repo về và chạy `yarn install`
- Chạy code bằng `yarn start`
- Mặc định server chạy ở `http://localhost:3000`

## API

Tất cả tỉnh/thành phố: `/tinh-thanh`

Quận/huyện thuộc 1 tỉnh/thành phố: `/tinh-thanh/{code}`

Tất cả quận/huyện: `/quan-huyen`

Phường/xã thuộc 1 quận/huyện: `/quan-huyen/{code}`

Tất cả phường/xã: `/phuong-xa`

## Cấu trúc dữ liệu

- `tinh_tp.json`: thông tin về các tỉnh, thành phố
- `quan_huyen.json`: thông tin về các quận, huyện, thị xã, thành phố trực thuộc tỉnh
- `xa_phuong.json`: thông tin về các xã, phường, thị trấn
- `tree.json`: cấu trúc hành chính dạng cây thư mục
- `quan_huyen/`: thư mục chứa các file json là thông tin các quận, huyện, thị xã, thành phố trực thuộc của một tỉnh. Tên file là mã của tỉnh. Dùng để truy vấn ở client. Ví dụ: `quan_huyen/92.json` là thông tin các quận, huyện,... của tỉnh có mã **92**.
- `xa_phuong/`: thư mục chứa các file json là thông tin các xã, phường, thị trấn của một quận, huyện,.... Tên file là mã của quận, huyện, thị xã hoặc thành phố trực thuộc tỉnh. Dùng để truy vấn ở client. Ví dụ: `xa_phuong/92.json` là thông tin các xã, phường,... của quận/huyện có mã **92**.
