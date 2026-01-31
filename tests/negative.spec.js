const { test, expect } = require('@playwright/test');

const negativeTestCases = [
  { id: 'Neg_Fun_0001', input: 'enakku 11.30 kku meeting irukku' },
  { id: 'Neg_Fun_0002', input: 'enathu birthday party 23/11/2026 andru nadaiperum' },
  { id: 'Neg_Fun_0003', input: 'naaninthavidumuraikkucanadaselkiren' },
  { id: 'Neg_Fun_0004', input: 'indru jaffna la 100 mm mazhi peithathu' },
  { id: 'Neg_Fun_0005', input: 'machan intha project pakava vanthirukku' },
  { id: 'Neg_Fun_0006', input: 'aval e mail la anuppinaval nan pakkala' },
  { id: 'Neg_Fun_0007', input: 'intha uthavijai seithathukku romba nandri' },
  { id: 'Neg_Fun_0008', input: 'nan 2 L thannikku 5 kg sugar kalanthanan' },
  { id: 'Neg_Fun_0009', input: 'ean kuddi podda poonai pola thirikirai ?' },
  { id: 'Neg_Fun_0010', input: 'nangal nettu fox restaurent poi dinner sappidom' }
];

test.describe('Negative Functional Test Cases', () => {

  for (const tc of negativeTestCases) {

    test(tc.id, async ({ page }) => {

      await page.goto('https://tamil.changathi.com/', {
        waitUntil: 'domcontentloaded'
      });

      const inputBox = page.locator('textarea').first();
      const outputBox = page.locator('textarea').nth(1);

      await inputBox.fill('');

      
      const words = tc.input.split(' ');
      for (const word of words) {
        await inputBox.type(word, { delay: 120 });
        await inputBox.press('Space');
        await page.waitForTimeout(300);
      }

      
      await page.waitForTimeout(3000);

      let output = '';

      
      if (await outputBox.count() > 0) {
        output = await outputBox.inputValue();
      }

      console.log(tc.id, 'OUTPUT:', output);

     
      expect(output.length).toBeGreaterThan(0);
      expect(output).not.toBe(tc.input);
    });

  }

});
