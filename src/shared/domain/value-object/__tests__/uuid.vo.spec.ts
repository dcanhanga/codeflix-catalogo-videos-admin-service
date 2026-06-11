import { v7 as uuidv7 } from "uuid";
import { InvalidUUIDError, Uuid } from "../uuid.vo";

describe("Uuid unit tests", () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");
  it("should throw InvalidUUIDError for invalid UUID", () => {
    expect(() => {
      new Uuid("invalid-uuid");
    }).toThrow(InvalidUUIDError);
    expect(validateSpy).toHaveBeenCalledTimes(1)
  });

  it("should create a UUID automatically when id is not provided", () => {
    const uuidVO = new Uuid();

    expect(uuidVO).toBeInstanceOf(Uuid);
    expect(uuidVO.id).toBeDefined();
    expect(typeof uuidVO.id).toBe("string");
    expect(uuidVO.id).toHaveLength(36);
    expect(validateSpy).toHaveBeenCalledTimes(1)
  });

  it("should accept a valid UUID", () => {
    const uuid = uuidv7();

    const uuidVO = new Uuid(uuid);

    expect(uuidVO.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalledTimes(1)
  });

  it("should throw InvalidUUIDError with default message", () => {
    expect(() => {
      new Uuid("123");
    }).toThrow("Id must be a valid UUID");
    expect(validateSpy).toHaveBeenCalledTimes(1)
  });

  it("should create different UUIDs when instantiated multiple times", () => {
    const uuid1 = new Uuid();
    const uuid2 = new Uuid();
    expect(uuid1.id).not.toBe(uuid2.id);
    expect(validateSpy).toHaveBeenCalledTimes(2)
  });
});