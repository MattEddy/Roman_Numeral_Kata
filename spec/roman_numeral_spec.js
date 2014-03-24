var NumeralConverter = require("../NumeralConverter")
numeralConverter = new NumeralConverter

describe("Numeral Converter", function()	{
	it("should convert 1 to be I", function()	{
		expect(numeralConverter.convert(1)).toBe("I")
	})
	xit("should convert 2 to be II", function()	{
		expect(numeralConverter.convert(2)).toBe("II")
	})
	xit("should convert 3 to be III", function()	{
		expect(numeralConverter.convert(3)).toBe("III")
	})
	xit("should convert 4 to be IV", function()	{
		expect(numeralConverter.convert(4)).toBe("IV")
	})
	xit("should convert 5 to be V", function()	{
		expect(numeralConverter.convert(5)).toBe("V")
	})
	xit("should convert 6 to be VI", function()	{
		expect(numeralConverter.convert(6)).toBe("VI")
	})
	xit("should convert 7 to be VII", function()	{
		expect(numeralConverter.convert(7)).toBe("VII")
	})
	xit("should convert 8 to be VIII", function()	{
		expect(numeralConverter.convert(8)).toBe("VIII")
	})
	xit("should convert 9 to be IX", function()	{
		expect(numeralConverter.convert(9)).toBe("IX")
	})
	xit("should convert 10 to be X", function()	{
		expect(numeralConverter.convert(10)).toBe("X")
	})
})