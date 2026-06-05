import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
  constructor( readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor( readonly value: { [key: string]: any }) {
    super();
  }
}

class AnotherStringValueObject extends ValueObject {
  constructor( readonly value: string) {
    super();
  }
}

describe("ValueObject", () => {
  describe("equals", () => {
    it("should return true when primitive values are equal", () => {
      const vo1 = new StringValueObject("test");
      const vo2 = new StringValueObject("test");

      expect(vo1.equals(vo2)).toBe(true);
    });

    it("should return false when primitive values are different", () => {
      const vo1 = new StringValueObject("test");
      const vo2 = new StringValueObject("other");

      expect(vo1.equals(vo2)).toBe(false);
    });

    it("should return true when complex values are equal", () => {
      const vo1 = new ComplexValueObject({ a: 1, b: "test" });
      const vo2 = new ComplexValueObject({ a: 1, b: "test" });

      expect(vo1.equals(vo2)).toBe(true);
    });

    it("should return false when complex values are different", () => {
      const vo1 = new ComplexValueObject({ a: 1, b: "test" });
      const vo2 = new ComplexValueObject({ a: 1, b: "different" });

      expect(vo1.equals(vo2)).toBe(false);
    });

    it("should return false when value object is null", () => {
      const vo1 = new StringValueObject("test");
    // @ts-expect-error
      expect(vo1.equals(null)).toBe(false);
    });

    it("should return false when value object is undefined", () => {
      const vo1 = new StringValueObject("test");

      expect(vo1.equals(undefined)).toBe(false);
    });

    it("should return false when value objects are from different classes", () => {
      const vo1 = new StringValueObject("test");
      const vo2 = new AnotherStringValueObject("test");

      expect(vo1.equals(vo2)).toBe(false);
    });

    it("should return true when comparing the same instance", () => {
      const vo1 = new StringValueObject("test");

      expect(vo1.equals(vo1)).toBe(true);
    });
  });
});