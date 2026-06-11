import { Uuid } from "../../../shared/domain/value-object/uuid.vo";
import { Category } from "../Category.entity";

describe("Category Entity unit tests", () => {
  describe("constructor", () => {
    it("should create a category with default values", () => {
      const category = new Category({
        name: "Test Category",
      });

      expect(category.name).toBe("Test Category");
      expect(category.description).toBeNull();
      expect(category.isActive).toBe(true);
      expect(category.createdAt).toBeInstanceOf(Date);
      expect(category.id).toBeInstanceOf(Uuid);
      
    });

    it("should create a category with provided values", () => {
      const createdAt = new Date("2021-01-01");

      const category = new Category({
        id: new Uuid(),
        name: "Test Category",
        description: "Test Description",
        isActive: false,
        createdAt,
      });

      expect(category.id).toBeInstanceOf(Uuid);
      expect(category.name).toBe("Test Category");
      expect(category.description).toBe("Test Description");
      expect(category.isActive).toBe(false);
      expect(category.createdAt).toEqual(createdAt);
    });
  });

  describe("create", () => {
    it("should create a category with default values", () => {
      const category = Category.create({
        name: "Test Category",
      });

      expect(category.name).toBe("Test Category");
      expect(category.description).toBeNull();
      expect(category.isActive).toBe(true);
      expect(category.createdAt).toBeInstanceOf(Date);
    });

    it("should create a category with provided values", () => {
      const category = Category.create({
        name: "Test Category",
        description: "Test Description",
        isActive: false,
      });

      expect(category.name).toBe("Test Category");
      expect(category.description).toBe("Test Description");
      expect(category.isActive).toBe(false);
      expect(category.createdAt).toBeInstanceOf(Date);
    });

    it("should return an instance of Category", () => {
      const category = Category.create({
        name: "Test Category",
      });

      expect(category).toBeInstanceOf(Category);
    });
  });

  describe("changeName", () => {
    it("should change category name", () => {
      const category = Category.create({
        name: "Old Name",
      });

      category.changeName("New Name");

      expect(category.name).toBe("New Name");
    });
  });

  describe("changeDescription", () => {
    it("should change category description", () => {
      const category = Category.create({
        name: "Category",
      });

      category.changeDescription("New Description");

      expect(category.description).toBe("New Description");
    });
  });

  describe("activate", () => {
    it("should activate category", () => {
      const category = Category.create({
        name: "Category",
        isActive: false,
      });

      category.activate();

      expect(category.isActive).toBe(true);
    });
  });

  describe("deactivate", () => {
    it("should deactivate category", () => {
      const category = Category.create({
        name: "Category",
        isActive: true,
      });

      category.deactivate();

      expect(category.isActive).toBe(false);
    });
  });

  describe("toJson", () => {
    it("should convert entity to plain object", () => {
      const createdAt = new Date("2021-01-01");

      const category = new Category({
        id: new Uuid(),
        name: "Category",
        description: "Description",
        isActive: true,
        createdAt,
      });

      expect(category.toJson()).toStrictEqual({
        id: expect.any(String),
        name: "Category",
        description: "Description",
        isActive: true,
        createdAt,
      });
    });
  });
});