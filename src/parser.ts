import './recipe';

function parseDuration(s: string): Number {
  const parts = s.split(/\s+/, 2)
  switch(parts[1]) {
    case 'часа':
      return Number(parts[0]) * 60
    default:
      return Number(parts[0]) 
  }
}

function parseName($: CheerioStatic): string {
  return $('span[itemprop="name"]').text();
}

function parseSource($: CheerioStatic): string {
  return $('span[itemprop="author"]').text();
}

function parseDescription($: CheerioStatic): string {
  return $('div[itemprop="description"]').text().trim();
}

function parseRecipeYield($: CheerioStatic): string {
  return $('div[itemprop="recipeYield"]').text().trim().replace(/\s{2,}/g, ' ');
}

function parseResultPhoto($: CheerioStatic): string | undefined {
  return $('img[itemprop="resultPhoto"]').attr('src');
}

function parseCookingTimes($: CheerioStatic): Array<Saffron.RecipeCookingTime> {
  return [{ type: 'Cook', minutes: parseDuration($('div[itemprop="cookTime"]').text().trim()) }];
}

function parseIngredients($: CheerioStatic): Array<Saffron.RecipeCookingIngredient> {
  var ingredients: Array<Saffron.RecipeCookingIngredient> = [];
  $('td[itemprop="ingredients"], td a[itemprop="ingredients"]').each((_index, el) => {
    if (el.name == 'a') { el = el.parent }
    var amountParts = $(el.parent.children[3]).text().trim().split(' ', 2);
    ingredients = ingredients.concat({
      name: $(el).text(),
      amount: Number(amountParts[0]),
      unit: amountParts[1]
    })
  });
  return ingredients;
}

function parseInstructions($: CheerioStatic): Array<Saffron.RecipeCookingInstruction> {
  var instructions: Array<Saffron.RecipeCookingInstruction> = [];
  $('div[itemprop="itemListElement"]').each((_index, el) => {
    const header = $('h2', el).text();
    if (header) {
      instructions = instructions.concat({ 
        text: header, 
        type: 'header' 
      } as Saffron.RecipeCookingInstructionHeader);
    } else {
      instructions = instructions.concat({ 
        text: $(el).text(),
        imageUrl: $('picture img', el.parent).attr('data-original'),
        type: 'instruction'
      } as Saffron.RecipeCookingInstruction);
    }
  });
  return instructions;
}

export const parse = ($: CheerioStatic): Saffron.Recipe => {
  return {
    name: parseName($),
    source: parseSource($),
    description: parseDescription($),
    servings: parseRecipeYield($),
    imageUrl: parseResultPhoto($),
    cookingTimes: parseCookingTimes($),
    ingredients: parseIngredients($),
    instructions: parseInstructions($)  
  } as Saffron.Recipe;
};
