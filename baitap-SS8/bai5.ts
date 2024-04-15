let x: string | number;
x = 10;    // Hợp lệ
x = "Hello";    // Hợp lệ
x = true;    // Lỗi, vì boolean không phải là number hoặc string
// Vi du
interface A1 {
    foo: number;
    bar: string;
}
  
interface B1 {
    foo: number;
    baz: boolean;
}
  
let y: A1 & B1;
y = { foo: 1, bar: "hello", baz: true };    // Hợp lệ
y = { foo: 1, bar: "hello" };    // Lỗi, vì thiếu thuộc tính baz 