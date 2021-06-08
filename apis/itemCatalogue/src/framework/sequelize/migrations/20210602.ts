import { Database } from '../sequelize';

export default async (pDb: Database) => {
    try {
        const foodCategory = { id: 'c16d1a8f-d473-4d80-aa4f-a06c5f5557d3', name: 'Food' };
        const techCategory = { id: 'f69f169a-d439-4907-afb7-ed12558b4b51', name: 'Tech' };

        await pDb.models.category.create(foodCategory);
        await pDb.models.category.create(techCategory);

        const products = [{
            id: 'ff2b0623-b085-4c23-900d-63fd427758c4',
            name: 'Banana',
            quantity: 1,
            idCategory: foodCategory.id,
        }, {
            id: '80e8d913-6ec2-44b6-8430-10f1d4694cac',
            name: 'Computer',
            quantity: 3,
            idCategory: techCategory.id,
        }, {
            id: '6905344c-01b4-49cf-90fa-5ce408a47899',
            name: 'Smartphone',
            quantity: 5,
            idCategory: techCategory.id,
        }];

        for (const product of products) {
            await pDb.models.product.create(product);
        }

        return Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
};
