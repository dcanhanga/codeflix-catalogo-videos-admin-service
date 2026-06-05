export type CategoryConstructorProps = {
  id?: string;
  name: string;
  description?: string | null;
  isActive?: boolean;
  createdAt?: Date;
};

export type CreateCategoryCommand = {
  name: string;
  description?: string | null;
  isActive?: boolean;
};

export class Category {
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  createdAt: Date;
    constructor(props: CategoryConstructorProps) {     
    this.id = props.id?? Date.now().toLocaleString();
    this.name = props.name;
    this.description = props.description?? null;
    this.isActive = props.isActive?? true;
    this.createdAt = props.createdAt ?? new Date();
     }

    static create(props: CreateCategoryCommand): Category {
      return new Category(props);
    }

    changeName(name: string): void {
      this.name = name;
    }

    changeDescription(description: string): void {
      this.description = description;
    }
    activate(): void {
      this.isActive = true;
    }

    deactivate(): void {
      this.isActive = false;
    }
    toJson() {
      return {
        id: this.id,
        name: this.name,
        description: this.description,
        isActive: this.isActive,
        createdAt: this.createdAt,
      };
    }
}

