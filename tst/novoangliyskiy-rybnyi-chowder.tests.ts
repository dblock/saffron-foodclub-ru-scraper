import cheerio from "cheerio";
import { parse } from "../src/parser";
import { expect } from 'chai';
import fs from 'fs';

// https://www.foodclub.ru/detail/novoangliyskiy-rybnyi-chowder/
describe('novoangliyskiy-rybnyi-chowder', () => {
  var parsed: Saffron.Recipe;

  beforeEach(function () {
    const $ = cheerio.load(fs.readFileSync('tst/fixtures/novoangliyskiy-rybnyi-chowder.html'));
    parsed = parse($);
  });

  it('parses', async () => {
    expect(parsed).to.not.be.null;
  });

  it('name', async () => {
    expect(parsed.name).to.eql('Новоанглийский рыбный чаудер (fish chowder)');
  });

  it('source', async () => {
    expect(parsed.source).to.eql('Мария Савельева');
  });

  it('description', async () => {
    expect(parsed.description).to.eql('Чаудеры — это целый класс традиционных густых и насыщенных американских супов, которые готовятся с рыбой или морепродуктами. В этом рецепте классический новоанглийский рыбный чаудер оттенен вкусами копченой паприки подкопченой нерки, которые удачно поддерживают и усиливают аромат бекона.\nТакой суп вполне сойдет за полноценный обед, объединив в себе и суп, и второе блюдо. Важное условие — используйте только качественную рыбу!');
  });

  it('servings (yield)', async () => {
    expect(parsed.servings).to.eql('10 порций');
  });

  it('cooking times', async () => {
    expect(parsed.cookingTimes).to.eql([{ type: 'Cook', minutes: 40 }]);
  });

  it('image url', async () => {
    expect(parsed.imageUrl).to.eql('https://www.foodclub.ru/upload/resize_cache/iblock/373/600_400_190b74d4a2488768817ca55fb743f9c3e/3735fe8ae61d60218523c8e7b64d592d.jpg');
  });

  it('instructions', async () => {
    expect(parsed.instructions).to.eql([
      {
        "text": "Рыбный чаудер (fish chowder) (этап 1)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/f38/600_400_190b74d4a2488768817ca55fb743f9c3e/f384d3252ca9c4c0cde4958d57dedb16.jpg",
        "text": "Если у вас замороженная рыба, то заранее достаньте её из морозилки и медленно разморозьте в холодильнике. На такую медленную разморозку может потребоваться довольно много времени, от нескольких часов до суток.\nДля чаудера нужна рыба очень хорошего качества, лучше всего морской заморозки, потому что именно она является главным компонентом этого супа.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 2)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/b9a/600_400_190b74d4a2488768817ca55fb743f9c3e/b9a3d5e34d3f12785c25b3f041717186.jpg",
        "text": "Бекон нарежьте кусочками, положите в сковороду с толстым дном и поставьте на маленький огонь, чтобы вытопить жир.\nПоджаренный хрустящий бекон отложите на салфетку, он понадобится для подачи.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 3)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/aad/600_400_190b74d4a2488768817ca55fb743f9c3e/aad0ef901053b21a32e757892bc09ea6.jpg",
        "text": "Тем временем нарежьте тонкими перьями репчатый лук.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 4)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/b61/600_400_190b74d4a2488768817ca55fb743f9c3e/b614535a2712481fc2030946ad4cee92.jpg",
        "text": "Вытопившийся из бекона жир перелейте в большую суповую кастрюлю, лучше с толстым дном. Добавьте сливочного масла и положите туда нарезанный лук и готовьте на небольшом огне, периодически помешивая, 15 минут.\nЗа это время лук должен стать мягким и полупрозрачным, но не успеть поджариться.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 5)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/fd9/600_400_190b74d4a2488768817ca55fb743f9c3e/fd965af716bc333d9b63fd6e6bfb74c7.jpg",
        "text": "Картошку очистите и крупно нарежьте, положите в кастрюлю, добавьте лавровый лист.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 6)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/4e6/600_400_190b74d4a2488768817ca55fb743f9c3e/4e69fe8859e31c5601e5c48791913947.jpg",
        "text": "Добавьте в кастрюлю процеженный рыбный бульон, чтобы он покрыл овощи примерно на палец, если бульона не хватит, долейте воды. Доведите до кипения на большом огне.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 7)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/ecd/600_400_190b74d4a2488768817ca55fb743f9c3e/ecd4ef5d0216752df7664269acce743f.jpg",
        "text": "Когда бульон закипит, уменьшите огонь так, чтобы кипение не было слишком интенсивным и варите 10-15 минут, пока картошка не будет готова, удалите лавровый лист.\nЗатем, большой ложкой разомните часть картофеля, чтобы придать густоту бульону, а часть оставьте кусками.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 8)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/3cb/600_400_190b74d4a2488768817ca55fb743f9c3e/3cbc116955fc4d1aed1bd5d2be3b6305.jpg",
        "text": "Проверьте, чтобы в филе трески не было мелких косточек, нарежьте его крупными кубиками. ",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 9)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/4c2/600_391_190b74d4a2488768817ca55fb743f9c3e/4c29e443b5b9852565265dc7703baba1.jpg",
        "text": "Филе подкопченой нерки поддержит здесь копченый вкус бекона и разнообразит вкус супа.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 10)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/910/600_400_190b74d4a2488768817ca55fb743f9c3e/910d686b682fd0c0e623bdb15905b979.jpg",
        "text": "Опустите нарезанную треску в суп.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 11)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/2aa/600_400_190b74d4a2488768817ca55fb743f9c3e/2aaba5f20601caa591716bb1475bc735.jpg",
        "text": "Нерку туда же.\nГотовьте суп на маленьком огне еще не более 5 минут, потому что рыба готовится очень быстро.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 12)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/617/600_400_190b74d4a2488768817ca55fb743f9c3e/617fced85cf88d571a41045247e2fdc8.jpg",
        "text": "Сразу после рыбы влейте сливки, попробуйте на соль и перец, добавьте копченую паприку.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 13)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/cc1/600_400_190b74d4a2488768817ca55fb743f9c3e/cc144acd50e203b6daf8260a54b1677e.jpg",
        "text": "Готовому супу дайте постоять 20-30 минут, чтобы вкусы перемешались, после этого чаудер можно подавать.",
        "type": "instruction"
      },
      {
        "text": "Рыбный чаудер (fish chowder) (этап 14)",
        "type": "header"
      },
      {
        "imageUrl": "https://www.foodclub.ru/upload/resize_cache/iblock/47e/600_400_190b74d4a2488768817ca55fb743f9c3e/47e02de1df683e1808b1b245656fd459.jpg",
        "text": "При подаче в не слишком глубокую тарелку выложите рыбу с картофелем, сбоку аккуратно налейте бульон. Посыпьте чаудер теплым поджаренным беконом, нарезанной зеленью и копченой паприкой.\nПриятного аппетита!",
        "type": "instruction"
      }
    ]);
  });

  it('ingredients', async () => {
    expect(parsed.ingredients).to.eql([
      {
        "amount": 125,
        "name": "Бекон (сырокопченый)",
        "unit": "г"
      },
      {
        "amount": 200,
        "name": "Лосось копченый",
        "unit": "г"
      },
      {
        "amount": 800,
        "name": "Филе трески",
        "unit": "г"
      },
      {
        "amount": 1500,
        "name": "Бульон рыбный",
        "unit": "мл"
      },
      {
        "amount": 700,
        "name": "Картофель",
        "unit": "г"
      },
      {
        "amount": 3,
        "name": "Лук репчатый (100г)",
        "unit": "шт."
      },
      {
        "amount": 200,
        "name": "Сливки 20-22%",
        "unit": "мл"
      },
      {
        "amount": 2,
        "name": "Лавровый лист",
        "unit": "шт."
      },
      {
        "amount": 1,
        "name": "Паприка копчёная",
        "unit": "ч.л."
      },
      {
        "amount": 20,
        "name": "Сливочное масло",
        "unit": "г"
      }
    ]);
  });
});