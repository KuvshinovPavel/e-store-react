import {CategoryElement} from "../types/category/CategoryElement";
const sortedItems:CategoryElement[] =[];
export const sortCategoriesToTree = (unsortedItems: CategoryElement[]) => {
    for (let i = 0; i < unsortedItems.length; i++) {
        let a = unsortedItems[i];
        for (let j = 0; j < unsortedItems.length; j++) {

            let b = unsortedItems[j];
            if (a.id === b.parentId) {
                a.subCategories.push(b);
            }



        }
        if (!a.parentId) {
            sortedItems.push(a);
        }
    }
return sortedItems
}

//TODO ЗАВЕРШИТЬ ЕБЛЮ С ДЕРЕВЬЯМИ
