import React, { useState } from 'react';

const FoodList = () => {
    const [foods, setFoods] = useState([
        { name: 'Beef', imageUrl: 'https://i.ibb.co.com/r0NSXT8/beef.jpg', quantity: 1 },
        { name: 'Bread', imageUrl: 'https://i.ibb.co.com/b6cNmHq/bread.jpg', quantity: 1 },
        { name: 'Cooked Meals', imageUrl: 'https://i.ibb.co.com/10whdkz/cooked-Meals.jpg', quantity: 1 },
        { name: 'Chicken', imageUrl: 'https://i.ibb.co.com/xFZ6PY5/chicken.jpg', quantity: 1 },
        { name: 'Fruits', imageUrl: 'https://i.ibb.co.com/Jkr6MMR/dry-Fruits.jpg', quantity: 1 },
        { name: 'Milk', imageUrl: 'https://i.ibb.co.com/RQTKspy/milk.jpg', quantity: 1 },
        { name: 'Oil', imageUrl: 'https://i.ibb.co.com/K9T3hZ7/oil.jpg', quantity: 1 },
        { name: 'Pasta', imageUrl: 'https://i.ibb.co.com/X541KZz/pasta.jpg', quantity: 1 },
        { name: 'Rice', imageUrl: 'https://i.ibb.co.com/ykKgL3D/rice.jpg', quantity: 1 },
        { name: 'Vegetables', imageUrl: 'https://i.ibb.co.com/DQYPBxj/vegetables.jpg', quantity: 1 },
        { name: 'Water', imageUrl: 'https://i.ibb.co.com/p48CYL9/water.jpg', quantity: 1 },
        { name: 'Flour', imageUrl: 'https://i.ibb.co.com/FzZ5SMq/flour.jpg', quantity: 1 },
        { name: 'Fish', imageUrl: 'https://i.ibb.co.com/3vZzGxH/fish.jpg', quantity: 1 },
        { name: 'Dry Fruits', imageUrl: 'https://i.ibb.co.com/Jkr6MMR/dry-Fruits.jpg', quantity: 1 },
        { name: 'Juice', imageUrl: 'https://i.ibb.co.com/PxG2w5c/juice.jpg', quantity: 1 },
        { name: 'Lentils', imageUrl: 'https://i.ibb.co.com/Ctg4nFL/lentils.jpg', quantity: 1 },
    ]);

    const handleIncrease = (index) => {
        setFoods(foods.map((food, i) =>
            i === index ? { ...food, quantity: food.quantity + 1 } : food
        ));
    };

    const handleDecrease = (index) => {
        setFoods(foods.map((food, i) =>
            i === index && food.quantity > 1 ? { ...food, quantity: food.quantity - 1 } : food
        ));
    };

    return (
        <div>
            <h1 className="text-5xl text-lime-500 font-semibold mt-8">Food List</h1>
            <div className="flex justify-center">
                <div className="mt-12 mx-8 flex flex-wrap gap-8 mb-12 justify-center">
                    {foods.map((food, index) => (
                        <div key={index} className="card bg-base-100 w-[18rem] shadow-xl">
                            <figure>
                                <img src={food.imageUrl} alt={food.name} className="h-[12rem] w-full" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{food.name}</h2>
                                <div className="flex items-center mt-4">
                                    <button onClick={() => handleDecrease(index)} className="h-[1.5rem] w-[1.5rem] bg-lime-400">-</button>

                                    <span className="mx-4 text-lg font-semibold">{food.quantity}</span>

                                    <button onClick={() => handleIncrease(index)} className="h-[1.5rem] w-[1.5rem] bg-lime-400">+</button>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <button className="bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-2 rounded-lg px-6 text-md w-[6rem] text-white h-[2.5rem]">Claim</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodList;
