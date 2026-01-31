const { test, expect } = require('@playwright/test');

const negativeTestCases = [
  {
    id: 'Neg_Fun_0001',
    input: 'enakku 11.30 kku meeting irukku',
    expected: 'எனக்கு 11.30 க்கு மீட்டிங் இருக்கு'
  },
  {
    id: 'Neg_Fun_0002',
    input: 'enathu birthday party 23/11/2026 andru nadaiperum',
    expected: 'எனது birthday party 23/11/2026 அன்று நடைபெறும்'
  },
  {
    id: 'Neg_Fun_0003',
    input: 'naaninthavidumuraikkucanadaselkiren',
    expected: 'நான்இந்தவிடுமுறைக்குசானடாசெல்கிறேன்'
  },
  {
    id: 'Neg_Fun_0004',
    input: 'indru jaffna la 100 mm mazhi peithathu',
    expected: 'இன்று jaffna ல 100 mm மழை பெய்தது'
  },
  {
    id: 'Neg_Fun_0005',
    input: 'machan intha project pakava vanthirukku',
    expected: 'மச்சான் இந்த project பக்கவா வந்திருக்கு'
  },
  {
    id: 'Neg_Fun_0006',
    input: 'aval e mail la anuppinaval nan pakkala',
    expected: 'அவள் e mail ல அனுப்பினவள் நான் பாக்கல'
  },
  {
    id: 'Neg_Fun_0007',
    input: 'intha uthavijai seithathukku romba nandri',
    expected: 'இந்த உதவியை செய்ததுக்கு ரொம்ப நன்றி'
  },
  {
    id: 'Neg_Fun_0008',
    input: 'nan 2 L thannikku 5 kg sugar kalanthanan',
    expected: 'நான் 2 L தண்ணிக்கு 5 kg sugar கலந்தானன்'
  },
  {
    id: 'Neg_Fun_0009',
    input: 'ean kuddi podda poonai pola thirikirai ?',
    expected: 'ஏன் குட்டி பொட்ட பூனை போல திரிகிறாய்'
  },
  {
    id: 'Neg_Fun_0010',
    input: 'nangal nettu fox restaurent poi dinner sappidom',
    expected: 'நாங்கள் நேற்று fox restaurant போய் dinner சாப்பிட்டோம்'
  }
];

test.describe('Negative Functional Tests ', () => {

  for (const tc of negativeTestCases) {

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

     
      expect(actualOutput.length).toBeGreaterThan(0);
      expect(actualOutput).toContain(tc.expected);
      expect(actualOutput).not.toBe(tc.input);
    });

  }

});
