const database = {
  recipes: [
    {
      _id: "recipe_id",
      name: "No-Bake Cheesecake",
      categories: [
        "Cake",
        "No-Bake",
        "Vegetarian"
      ],
      ingredients: [
        {
          name: "Condensed milk",
          quantity: "1 can"
        },
        {
          name: "Cream Cheese",
          quantity: "8 oz"
        },
        {
          name: "Lemon Juice",
          quantity: "1/4 cup"
        },
        {
          name: "Pie Crust",
          quantity: "1"
        },
        {
          name: "Cherry Jam",
          quantity: "1/2 cup"
        }
      ],
      steps: [
        {
          description: "Beat Cream Cheese"
        },
        {
          description: "Add condensed Milk and blend"
        },
        {
          description: "Add Lemon Juice and blend"
        },
        {
          description: "Add the mix to the pie crust"
        },
        {
          description: "Spread the Cherry Jam"
        },
        {
          description: "Place in refrigerator for 3h."
        }
      ]
    }
  ],
  categories: [
    {
      _id: "category_id",
      name: "Cake"
    }
  ],
  ingredients: [
    {
      _id: "ingredient_id",
      name: "Condensed milk"
    }
  ],
  steps: [
    {
      _id: "steps_id",
      description: "Beat Cream Cheese"
    }
  ]
};

