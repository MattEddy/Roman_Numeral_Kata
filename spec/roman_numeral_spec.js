var NumeralConverter = require("../NumeralConverter")
numeralConverter = new NumeralConverter

describe("Numeral Converter", function()	{
	it("should convert 1 to be I", function()	{
		expect(numeralConverter.convert(1)).toBe("I")
	})
	it("should convert 2 to be II", function()	{
		expect(numeralConverter.convert(2)).toBe("II")
	})
	it("should convert 3 to be III", function()	{
		expect(numeralConverter.convert(3)).toBe("III")
	})
	it("should convert 4 to be IV", function()	{
		expect(numeralConverter.convert(4)).toBe("IV")
	})
	it("should convert 5 to be V", function()	{
		expect(numeralConverter.convert(5)).toBe("V")
	})
	it("should convert 6 to be VI", function()	{
		expect(numeralConverter.convert(6)).toBe("VI")
	})
	it("should convert 7 to be VII", function()	{
		expect(numeralConverter.convert(7)).toBe("VII")
	})
	it("should convert 8 to be VIII", function()	{
		expect(numeralConverter.convert(8)).toBe("VIII")
	})
	it("should convert 9 to be IX", function()	{
		expect(numeralConverter.convert(9)).toBe("IX")
	})
	it("should convert 10 to be X", function()	{
		expect(numeralConverter.convert(10)).toBe("X")
	})
	it("should convert 11 to be XI", function()	{
		expect(numeralConverter.convert(11)).toBe("XI")
	})
	it("should convert 12 to be II", function()	{
		expect(numeralConverter.convert(12)).toBe("XII")
	})
	it("should convert 13 to be III", function()	{
		expect(numeralConverter.convert(13)).toBe("XIII")
	})
	it("should convert 14 to be XIV", function()	{
		expect(numeralConverter.convert(14)).toBe("XIV")
	})
	it("should convert 15 to be XV", function()	{
		expect(numeralConverter.convert(15)).toBe("XV")
	})
	it("should convert 16 to be IVI", function()	{
		expect(numeralConverter.convert(16)).toBe("XVI")
	})
	it("should convert 17 to be XVII", function()	{
		expect(numeralConverter.convert(17)).toBe("XVII")
	})
	it("should convert 18 to be XVIII", function()	{
		expect(numeralConverter.convert(18)).toBe("XVIII")
	})
	it("should convert 19 to be XIX", function()	{
		expect(numeralConverter.convert(19)).toBe("XIX")
	})
	it("should convert 20 to be XX", function()	{
		expect(numeralConverter.convert(20)).toBe("XX")
	})
})