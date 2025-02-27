const average = require('../src/average');

test('calculates average correctly for valid range', () => {
    expect(average([1, 2, 3, 4, 5, -999], 0, 10)).toEqual({ 
        total: { valid: 5, input: 5 }, 
        average: 3 
        
    });
});
test('handles array with exactly 100 elements', () => {
    const arr = Array(100).fill(5); // อาร์เรย์มี 100 ตัว
    expect(average(arr, 0, 10)).toEqual({ total: { valid: 100, input: 100 }, average: 5 });
});
test('calculates average correctly when valid values exist', () => {
    expect(average([1, 2, 3, 4, 5, -999], 0, 10)).toEqual({
        total: { valid: 5, input: 5 },
        average: 3
    });
});
test('returns -999 when all values are out of range', () => {
    expect(average([20, 30, 40, -999], 0, 10)).toEqual({
        total: { valid: 0, input: 3 },
        average: -999
    });
});
test('calls Array.isArray to check input type', () => {
    const isArraySpy = jest.spyOn(Array, 'isArray'); // Spy function
    average([1, 2, 3, -999], 0, 10); // เรียกใช้ average
    expect(isArraySpy).toHaveBeenCalled(); // ตรวจสอบว่า Array.isArray ถูกเรียก
    isArraySpy.mockRestore(); // คืนค่าฟังก์ชันให้เป็นปกติ
});
test('processes valid array input correctly', () => {
    expect(average([1, 2, 3, -999], 0, 10)).toEqual({
        total: { valid: 3, input: 3 },
        average: 2
    });
});
test('calls Array.isArray with non-array values', () => {
    const isArraySpy = jest.spyOn(Array, 'isArray');

    average(null, 0, 10);
    average("string", 0, 10);
    average(123, 0, 10);
    average(undefined, 0, 10);

    expect(isArraySpy).toHaveBeenCalledTimes(4); // ถูกเรียก 4 ครั้ง
    isArraySpy.mockRestore();
});
test('calls Array.isArray with an array input', () => {
    const isArraySpy = jest.spyOn(Array, 'isArray');

    average([1, 2, 3], 0, 10);
    average([], 0, 10);  // ทดสอบอาร์เรย์ว่าง
    average(new Array(50).fill(1), 0, 10); // ทดสอบอาร์เรย์ขนาด 50 ตัว

    expect(isArraySpy).toHaveBeenCalledTimes(3); // ถูกเรียก 3 ครั้ง
    isArraySpy.mockRestore();
});
