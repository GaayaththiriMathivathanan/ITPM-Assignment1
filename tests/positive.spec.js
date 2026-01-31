const { test, expect } = require('@playwright/test');

const positiveTestCases = [
  { id: 'Pos_Fun_0001', input: 'naan indru kovil ponan.' },
  { id: 'Pos_Fun_0002', input: 'mazhai peithu vellam vanthathal naanum annavum vellam paakka selkirom.' },
  { id: 'Pos_Fun_0003', input: 'naan indaikku univercity ponan aaanal traffic aga irunthathala koncham late pochu' },
  { id: 'Pos_Fun_0004', input: 'indaiyaan exam da result eppa varum endu nenga solluvengala?' },
  { id: 'Pos_Fun_0005', input: 'ungal thagavalai seekkiram anuppungal.' },
  { id: 'Pos_Fun_0006', input: 'ungalai santhiththathil makilzhchi!!!' },
  { id: 'Pos_Fun_0007', input: 'naan indaikku campus varamattan' },
  { id: 'Pos_Fun_0008', input: 'thayavu seithu ithai enakku solli thango.' },
  { id: 'Pos_Fun_0009', input: 'whatsapp story parunko' },
  { id: 'Pos_Fun_0010', input: 'instagram la video anupinan pathuddu reply podu' },
  { id: 'Pos_Fun_0011', input: 'naalaikku paaththu seivom' },
  { id: 'Pos_Fun_0012', input: 'indaikku sariyana mazhai' },
  { id: 'Pos_Fun_0013', input: 'sari sari nooru rupaikku thanko' },
  { id: 'Pos_Fun_0014', input: 'naanga intha velaiyai seiya mudiyathu' },
  { id: 'Pos_Fun_0015', input: 'avan indaikku harddisk kondaren endu sonnan' },
  { id: 'Pos_Fun_0016', input: 'neengal nalaikku meetingkku varuverkala?' },
  { id: 'Pos_Fun_0017', input: 'intha message yai ungada whatsapp group la share panna mudiyuma please?' },
  { id: 'Pos_Fun_0018', input: 'naan colombo senra poothu anku sariyana traffic aa irunthathu' },
  { id: 'Pos_Fun_0019', input: 'driving licence edukka NIC kattayam kondu poka vendum' },
  { id: 'Pos_Fun_0020', input: 'naan 500 USD fixed diposite la podden' },
  { id: 'Pos_Fun_0021', input: 'hello machchi intha week end eppidi pochchu?' },
  { id: 'Pos_Fun_0022', input: 'naan indaikku university ponan aanal library pokala' },
  { id: 'Pos_Fun_0023', input: 'intha dress romba alaga irukku ithu enna vilai?' },
  { id: 'Pos_Fun_0024', input: 'ilangai inthiya perungadalil amainthulla oru theevagum.ithu varalatru reethiyaga ceylon ena alaikkappadukirathu.ilangai sananayaga sosalisa kudiyarasu ena alaikkappadum innadu pala inangal , mozhigal matrum kalachcharaththaikkonda palmugaththanmai vaintha naadu agum.aasiyavin intha theevu kadatkarai, theyilai thoddangal, malaigal matrum pugazh petra suttula thalangalukku peyar petrathu.ithan thalai nagaram sri jeyawardana kotte endralum coolombo vaniga maiyamaga vilankukindrathu.singalam matrum thamizg agiyana athigara ooorvamana mozhigalaga ullana.thamizhar singalavar muslim pondra inangal ingu vasikkindranar.' }
];

test.describe('Positive Functional Test Cases – Human Typing (Changathi)', () => {

  for (const tc of positiveTestCases) {

    test(tc.id, async ({ page }) => {

      await page.goto('https://tamil.changathi.com/', {
        waitUntil: 'domcontentloaded'
      });

      const inputBox = page.locator('textarea').first();
      const outputBox = page.locator('textarea').nth(1);

      
      await inputBox.click();
      await inputBox.press('Control+A');
      await inputBox.press('Backspace');

      
      const words = tc.input.split(' ');
      for (const word of words) {
        await inputBox.type(word, { delay: 120 });
        await inputBox.press('Space');      
        await page.waitForTimeout(300);
      }

     
      await page.waitForTimeout(2000);

     
      await expect(inputBox).toHaveValue(/.+/);

     
      let output = '';
      if (await outputBox.count() > 0) {
        output = await outputBox.inputValue();
      }

      console.log(tc.id, 'OUTPUT:', output || '[NO OUTPUT GENERATED]');
    });
  }

});
