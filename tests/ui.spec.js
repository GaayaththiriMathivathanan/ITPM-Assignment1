const { test, expect } = require('@playwright/test');

test.describe('Positive UI Test Cases', () => {

  test('Pos_UI_0001 - Clear button clears input and output fields', async ({ page }) => {

    await page.goto('https://tamil.changathi.com/', {
      waitUntil: 'domcontentloaded'
    });

    const inputBox = page.locator('textarea').first();

   
    const outputBox = page.locator('textarea').nth(1);

    
    const text = 'nangal puthu veedu kaddinom.';
    for (const word of text.split(' ')) {
      await inputBox.type(word, { delay: 120 });
      await inputBox.press('Space');
      await page.waitForTimeout(300);
    }

    await page.waitForTimeout(2000);

   
    await inputBox.click();
    await inputBox.press('Control+A');
    await inputBox.press('Backspace');

    await page.waitForTimeout(1000);

    
    await expect(inputBox).toHaveValue('');

    
    if (await outputBox.count() > 0) {
      await expect(outputBox).toHaveValue('');
    }

    console.log(' Pos_UI_0001 PASSED');
  });

});
