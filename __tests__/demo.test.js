const Root =require('../src/index')
/**
 * 测试areacode
 */
test('test haikou areacode ', function() {
    const keySet = Root.haikou.cityCode
    expect(keySet).toHaveProperty('460105');
    expect(keySet).toHaveProperty('460106');
    expect(keySet).toHaveProperty('460107');
    expect(keySet).toHaveProperty('460108');
});