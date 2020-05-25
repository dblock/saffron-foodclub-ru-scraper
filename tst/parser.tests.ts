import cheerio from "cheerio";
import { parse } from "../src/parser";
import { expect } from 'chai';
import fs from 'fs';

describe('foodclub parser', () => {
  var parsed: Saffron.Recipe;

  beforeEach(function () {
    // "https://www.foodclub.ru/detail/solyanka-sbornaya-myasnaya/";
    const $ = cheerio.load(fs.readFileSync('tst/fixtures/solyanka-sbornaya-myasnaya.html'));
    parsed = parse($);
  });

  it('parses', async () => {
    expect(parsed).to.not.be.null;
  });

  it('name', async () => {
    expect(parsed.name).to.eql('Солянка сборная мясная');
  });

  it('source', async () => {
    expect(parsed.source).to.eql('Мария Савельева');
  });

  it('description', async () => {
    expect(parsed.description).to.eql('Этот рецепт солянки довольно распространенный, потому что солянка получается очень вкусной и многими любима. Для мясной солянки характерно присутствие трех и более мясных компонентов (мясо, их которого варится бульон, а также несколько видов копченостей) и соленых ингредиентов (огурцы, каперсы, маслины).');
  });

  it('servings (yield)', async () => {
    expect(parsed.servings).to.eql('8 порций');
  });

  it('cooking times', async () => {
    expect(parsed.cookingTimes).to.eql([{ type: 'Cook', minutes: 3 * 60 }]);
  });

  it('image url', async () => {
    expect(parsed.imageUrl).to.eql('https://www.foodclub.ru/upload/resize_cache/iblock/58c/600_400_190b74d4a2488768817ca55fb743f9c3e/_solyanka1.jpg');
  });

  it('instructions', async () => {
    expect(parsed.instructions).to.eql([
      {
        text: "Солянка сборная мясная (этап 1)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/256/600_400_190b74d4a2488768817ca55fb743f9c3e/_1.jpg",
        text: "Для бульона хорошо подойдет кусок говядины с костью, например, голяшка, грудинка или шея.\nОбмойте мясо холодной водой, положите в большую кастрюлю, налейте 2,5-3 литра холодной воды и поставьте на большой огонь."
      },
      {
        text: "Солянка сборная мясная (этап 2)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/115/600_400_190b74d4a2488768817ca55fb743f9c3e/_2.jpg",
        text: "Когда на поверхности начнет появляться пена, убавьте огонь, чтобы бульон едва кипел, и удаляйте ее, пока она совсем не перестанет образовываться."
      },
      {
        text: "Солянка сборная мясная (этап 3)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/b1f/600_400_190b74d4a2488768817ca55fb743f9c3e/_6.jpg",
        text: "Через полчаса с начала варки положите лук, морковь, сельдерей перец и лавровый лист. Варите еще 30-40 минут, пока овощи не станут мягкими, затем удалите их и выбросьте. Когда мясо будет готово (время приготовления зависит от качества мяса), выньте его из бульона, отделите от костей, нарежьте кусочками около 1,5-2 см и верните в бульон."
      },
      {
        text: "Солянка сборная мясная (этап 4)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/274/600_400_190b74d4a2488768817ca55fb743f9c3e/_3.jpg",
        text: "Пока бульон варится, нарежьте лук полукольцами и спассеруйте его в небольшом количестве масла до прозрачности."
      },
      {
        text: "Солянка сборная мясная (этап 5)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/7a8/600_400_190b74d4a2488768817ca55fb743f9c3e/_4.jpg",
        text: "Соленые огурцы нарежьте небольшими кусочками. Если от них остался рассол (не маринад!), не выливайте, его можно будет использовать для солянки чуть позже. Добавьте огурцы к луку, перемешайте и тушите на небольшом огне около 15 минут."
      },
      {
        text: "Солянка сборная мясная (этап 6)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/cae/600_400_190b74d4a2488768817ca55fb743f9c3e/_7.jpg",
        text: "Добавьте томатное пюре или просто очищенные мелко нарезанные спелые помидоры, готовьте еще 10 минут на небольшом огне, помешивая."
      },
      {
        text: "Солянка сборная мясная (этап 7)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/e57/600_400_190b74d4a2488768817ca55fb743f9c3e/_8.jpg",
        text: "То, что получилось в итоге, называется «брез» — специальная заправка для солянки. Ее можно готовить заранее и при необходимости хранить в холодильнике в закрытой емкости. \nА сейчас добавьте брез в бульон."
      },
      {
        text: "Солянка сборная мясная (этап 8)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/6dd/600_400_190b74d4a2488768817ca55fb743f9c3e/_9.jpg",
        text: "Колбасу и другие мясопродукты нарежьте мелкими кубиками и опустите в суп, продолжая варить на небольшом огне."
      },
      {
        text: "Солянка сборная мясная (этап 9)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/3fd/600_400_190b74d4a2488768817ca55fb743f9c3e/_10.jpg",
        text: "Добавьте в бульон каперсы (1-2 ст.л.) и маслины. Попробуйте на соль, при необходимости посолите. Также можно добавить немного огуречного рассола."
      },
      {
        text: "Солянка сборная мясная (этап 10)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/919/600_400_190b74d4a2488768817ca55fb743f9c3e/_11.jpg",
        text: "Дайте готовой солянке настояться хотя бы полчаса, накрыв кастрюлю крышкой."
      },
      {
        text: "Солянка сборная мясная (этап 11)"
      },
      {
        imageUrl: "https://www.foodclub.ru/upload/resize_cache/iblock/7fc/600_400_190b74d4a2488768817ca55fb743f9c3e/_solyanka.jpg",
        text: "Подавайте солянку горячей, в тарелки положите ломтик лимона и мелко нарезанную свежую петрушку. Некоторые добавляют также сметану, но на мой взгляд, суп и так очень насыщенный и вкусный, и больше ему ничего не нужно."
      }
    ]);
  });

  it('ingredients', async () => {
    expect(parsed.ingredients).to.eql([
      { name: 'Буженина в/к', amount: 200, unit: 'г' },
      { name: 'Голяшка говяжья с костью', amount: 600, unit: 'г' },
      { name: 'Колбаса вареная', amount: 200, unit: 'г' },
      { name: 'Колбаса сырокопченая', amount: 50, unit: 'г' },
      { name: 'Окорок в/к', amount: 200, unit: 'г' },
      { name: 'Каперсы', amount: 30, unit: 'г' },
      { name: 'Лимоны', amount: 1, unit: 'шт.' },
      { name: 'Лук репчатый (100г)', amount: 3, unit: 'шт.' },
      { name: 'Маслины с косточкой', amount: 50, unit: 'г' },
      { name: 'Морковь', amount: 100, unit: 'г' },
      { name: 'Сельдерей стеблевой', amount: 50, unit: 'г' },
      { name: 'Томатное пюре', amount: 200, unit: 'г' },
      { name: 'Солёные огурцы', amount: 300, unit: 'г' },
      { name: 'Лавровый лист', amount: 2, unit: 'шт.' },
      { name: 'Перец черный горошком', amount: 5, unit: 'шт.' },
      { name: 'Петрушка', amount: 20, unit: 'г' },
      { name: 'Растительное масло', amount: 20, unit: 'мл' }
    ]);
  });
});