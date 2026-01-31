const { test, expect } = require('@playwright/test');

const positiveTestCases = [
  {
    id: 'Pos_Fun_0001',
    input: 'naan indru kovil ponan.',
    expected: 'நான் இன்று கோவில் போனான்'
  },
  {
    id: 'Pos_Fun_0002',
    input: 'mazhai peithu vellam vanthathal naanum annavum vellam paakka selkirom.',
    expected: 'மழை பெய்து வெள்ளம் வந்ததால் நானும் அண்ணாவும் வெள்ளம் பாக்க செல்கிறோம்'
  },
  {
    id: 'Pos_Fun_0003',
    input: 'naan indaikku univercity ponan aaanal traffic aga irunthathala koncham late pochu',
    expected: 'நான் இண்டைக்கு யூனிவர்சிட்டி போனான் ஆனால் டிராபிக் ஆக இருந்ததால கொஞ்சம் லேட்டா போச்சு'
  },
  {
    id: 'Pos_Fun_0004',
    input: 'indaiyaan exam da result eppa varum endu nenga solluvengala?',
    expected: 'இண்டையான் எக்ஸாம் ட ரிசல்ட் எப்ப வரும் எண்டு நீங்க சொல்லுவீங்களா?'
  },
  {
    id: 'Pos_Fun_0005',
    input: 'ungal thagavalai seekkiram anuppungal.',
    expected: 'உங்கள் தகவலை சீக்கிரம் அனுப்புங்கள்'
  },
  {
    id: 'Pos_Fun_0006',
    input: 'ungalai santhiththathil makilzhchi!!!',
    expected: 'உங்களை சந்தித்ததில் மகிழ்ச்சி'
  },
  {
    id: 'Pos_Fun_0007',
    input: 'naan indaikku campus varamattan',
    expected: 'நான் இண்டைக்கு கேம்பஸ் வரமாட்டன்'
  },
  {
    id: 'Pos_Fun_0008',
    input: 'thayavu seithu ithai enakku solli thango.',
    expected: 'தயவு செய்து இதை எனக்கு சொல்லி தாங்கோ'
  },
  {
    id: 'Pos_Fun_0009',
    input: 'whatsapp story parunko',
    expected: 'வாட்ஸாப்ப் ஸ்டோரி பாருங்கோ'
  },
  {
    id: 'Pos_Fun_0010',
    input: 'instagram la video anupinan pathuddu reply podu',
    expected: 'இன்ஸ்டாகிராம் ல வீடியோ அனுப்பினான் பாத்துட்டு ரிப்ளை போடு'
  },
  {
    id: 'Pos_Fun_0011',
    input: 'naalaikku paaththu seivom',
    expected: 'நாளைக்கு பாத்து செய்வோம்'
  },
  {
    id: 'Pos_Fun_0012',
    input: 'indaikku sariyana mazhai',
    expected: 'இண்டைக்கு சரியான மழை'
  },
  {
    id: 'Pos_Fun_0013',
    input: 'sari sari nooru rupaikku thanko',
    expected: 'சரி சரி நூறு ரூபாய்க்கு தாங்கோ'
  },
  {
    id: 'Pos_Fun_0014',
    input: 'naanga intha velaiyai seiya mudiyathu',
    expected: 'நாங்க இந்த வேலையை செய்ய முடியாது'
  },
  {
    id: 'Pos_Fun_0015',
    input: 'avan indaikku harddisk kondaren endu sonnan',
    expected: 'அவன் இண்டைக்கு ஹார்ட்டிஸ்க் கொண்டாறேன் எண்டு சொன்னான்'
  },
  {
    id: 'Pos_Fun_0016',
    input: 'neengal nalaikku meetingkku varuverkala?',
    expected: 'நீங்கள் நாளைக்கு மீட்டிங்க்கு வருவீர்களா'
  },
  {
    id: 'Pos_Fun_0017',
    input: 'intha message yai ungada whatsapp group la share panna mudiyuma please?',
    expected: 'இந்த மெசேஜ் யை உங்கட வாட்ஸ்சப்ப் குரூப் ல ஷேர் பண்ண முடியுமா'
  },
  {
    id: 'Pos_Fun_0018',
    input: 'naan colombo senra poothu anku sariyana traffic aa irunthathu',
    expected: 'நான் colombo சென்றபோது அங்கு சரியான traffic ஆ இருந்தது'
  },
  {
    id: 'Pos_Fun_0019',
    input: 'driving licence edukka NIC kattayam kondu poka vendum',
    expected: 'driving லைசென்ஸ் எடுக்க NIC கட்டாயம் கொண்டு போக வேண்டும்'
  },
  {
    id: 'Pos_Fun_0020',
    input: 'naan 500 USD fixed diposite la podden',
    expected: 'நான் 500 USD fixed டெபாசிட் ல போட்டேன்'
  },
  {
    id: 'Pos_Fun_0021',
    input: 'hello machchi intha week end eppidi pochchu?',
    expected: 'ஹலோ மச்சி இந்த வீக் எண்டு எப்பிடி போச்சு'
  },
  {
    id: 'Pos_Fun_0022',
    input: 'naan indaikku university ponan aanal library pokala',
    expected: 'நான் இண்டைக்கு யூனிவர்சிட்டி போனான் ஆனால் லைப்ரரி போகேல'
  },
  {
    id: 'Pos_Fun_0023',
    input: 'intha dress romba alaga irukku ithu enna vilai?',
    expected: 'இந்த டிரஸ் ரொம்ப அழகா இருக்கு'
  },
  {
    id: 'Pos_Fun_0024',
    input: 'ilangai inthiya perungadalil amainthulla oru theevagum.',
    expected: 'இலங்கை இந்திய பெருங்கடலில் அமைந்துள்ள ஒரு தீவாகும்'
  }
];

test.describe('Positive Functional Tests – Human Typing (Changathi)', () => {

  for (const tc of positiveTestCases) {

    test(tc.id, async ({ page }) => {

      await page.goto('https://tamil.changathi.com/', {
        waitUntil: 'domcontentloaded'
      });

      const inputBox = page.locator('textarea').first();

     
      await inputBox.click();
      await inputBox.press('Control+A');
      await inputBox.press('Backspace');

      
      for (const word of tc.input.split(' ')) {
        await inputBox.type(word, { delay: 120 });
        await inputBox.press('Space');
        await page.waitForTimeout(300);
      }

      await page.waitForTimeout(3000);

      const actualOutput = await inputBox.inputValue();
      console.log(tc.id, 'OUTPUT:', actualOutput);

     
      expect(actualOutput).toContain(tc.expected);
    });
  }

});
