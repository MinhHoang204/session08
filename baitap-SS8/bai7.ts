function kiemTraLoaiDuLieu(input: any): void {
    if (typeof input === 'number') {
        console.log('Đây là một số');
    } else if (Array.isArray(input)) {
        console.log('Đây là một mảng');
    } else if (typeof input === 'object') {
        console.log('Đây là một đối tượng');
    } else {
        console.log('Không xác định');
    }
}

kiemTraLoaiDuLieu(5); 
kiemTraLoaiDuLieu([1, 2, 3]); 
kiemTraLoaiDuLieu({ name: 'John', age: 30 }); 
kiemTraLoaiDuLieu('Hello'); 