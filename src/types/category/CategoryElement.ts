export interface CategoryElement {
    id: number;
    categoryName: string;
    subCategories: CategoryElement[];
    parentId: number | null
}