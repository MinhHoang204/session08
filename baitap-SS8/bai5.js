"use strict";
let x;
x = 10; // Hợp lệ
x = "Hello"; // Hợp lệ
x = true; // Lỗi, vì boolean không phải là number hoặc string
// Vi du
let y;
y = { foo: 1, bar: "hello", baz: true }; // Hợp lệ
// y = { foo: 1, bar: "hello" };    // Lỗi, vì thiếu thuộc tính baz 