namespace Saffron {
  export interface RecipeCookingIngredient {
    name: string; // e.g. carrots
    amount: Number; // e.g. 100
    unit: string; // e.g. 'g'
  }

  export interface RecipeCookingInstruction {
    type: string;
    text: string;
    imageUrl?: string;
  }

  export interface RecipeCookingInstructionHeader {
    type: string;
    text: string;
  }

  export interface RecipeCookingTime {
    type: string;
    minutes: Number;
  }

  export interface Recipe {
    name: string;
    source?: string;
    imageUrl?: string;
    servings?: string;
    description?: string;
    cookingTimes?: Array<RecipeCookingTime>;
    instructions?: Array<RecipeCookingInstruction | RecipeCookingInstructionHeader>;
    ingredients?: Array<RecipeCookingIngredient>;
  }
}