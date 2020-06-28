//Why should we use functions at all?

    //-Đáp số vẫn không thay đổi so với việc không sử dụng function.
    //-Khi áp dụng function, code có vẻ gắn gọn và dễ hiểu hơn.
    //-Dễ dàng tái sử dụng khi bạn muốn kiểm tra một số khác.
    //-Logic kiểm tra số chẵn lẻ tập trung tại một chỗ, nếu muốn thay đổi logic thì chỉ cần thay đổi một chỗ.

//How to define/declare a function?

    // Hàm trong Javascript là một khái niệm giúp bạn có thể gom một đoạn code thành một khối, khi cần có thể gọi ra để sử dụng.
    // Cách hoạt động của hàm được mô tả như sau:
        // – Bước 1: Bạn đưa cho hàm một tham số.
        // – Bước 2: Hàm xử lý tham số bạn vừa đưa vào.
        // – Bước 3: Trả về một kết quả.
    // Khai báo:
        // function tenHam (thamSo1, thamSo2, ... thamSoN) {
        //     // thân hàm
        //     // chứa các code cần xử lý
        // }

        Nói chung, một hàm là một "chương trình con" có thể được gọi bằng mã bên ngoài (hoặc bên trong trong trường hợp đệ quy) cho hàm. Giống như chính chương trình, một hàm bao gồm một chuỗi các câu lệnh được gọi là thân hàm . Các giá trị có thể được truyền cho một hàm và hàm sẽ  trả về một giá trị.

        Trong JavaScript, các hàm là các đối tượng hạng nhất, bởi vì chúng có thể có các thuộc tính và phương thức giống như bất kỳ đối tượng nào khác. Điều phân biệt chúng với các đối tượng khác là các chức năng có thể được gọi. Tóm lại, chúng là Functionđối tượng.
