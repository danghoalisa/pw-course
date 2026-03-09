# Nội dung buổi học lession 03
## 1. Git
### a. Git - branching:
#### Project như một dòng thời gian.
#### Branch cho phép tạo ra dòng thời gian song song để:
##### - Phát triển tính năng mới mà không ảnh hưởng code đang chạy ổn định
##### - Nhiều người làm việc độc lập, không đè lên nhau
##### - Thử nghiệm, nếu hỏng thì xóa nhánh mà không ảnh hưởng gì
#### Câu lệnh
##### Xem danh sách các nhánh: git branch
##### Chỉ tạo nhánh, chưa chuyển sang
###### ■ git branch feature/login
##### Chuyển sang nhánh vừa tạo
###### ■ git checkout <branch_name>
##### Vừa tạo, vừa chuyển nhánh
###### ■ git checkout -b feature/login
##### Xoá nhánh: git branch -D <tên nhánh>
###### ■ Lưu ý: đứng ở nhánh khác trước khi xoá.
##### Đưa nhánh lên online (remote)
###### ■ git push origin <tên_nhánh>
##### Xoá nhánh trên online (remote)
###### ■ git push -D origin <tên_nhánh>
### b. JavaScript - Vòng lặp
#### Câu điều kiện
##### if
Cú pháp:
if (<điều kiện>) {
// code...
}
##### if--else
##### Vòng lặp for(i)
Cú pháp vòng lặp for (i)
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}

Trong đó:
● Điều kiện khởi tạo: chạy một lần duy nhất, khi vòng lặp bắt đầu.
● Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng.
● Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm.
#### Convention
Có nhiều loại convention:
- Đặt tên file
- Đặt tên biến
- Đặt tên commit
### Console log
Console log là một công cụ quan
trọng giúp debug và theo dõi
code.
