import 'expect-puppeteer';
import { byHook, findByText, getText, intercept } from './utils/utils';


describe('Demo App E2E', () => {
  it('should load home page', async () => {
    await page.goto('http://localhost:3000/');
    await page.waitForSelector(byHook('root-app'));

    await expect(getText(byHook('page-home'))).resolves.toEqual('You are home');
  });

  it('should load home page in Hebrew', async () => {
    await page.goto('http://localhost:3000/?locale=he');
    await page.waitForSelector(byHook('root-app'));

    await expect(getText(byHook('page-home'))).resolves.toEqual('את.ה בדף הבית');
  });

  it('should show `Loading...` before i18n resources were loaded', async () => {
    await intercept('/translations/messages.en.json', request => {
      void new Promise(resolve => setTimeout(resolve, 1000)).then(() => request.continue());
    });


    await page.goto('http://localhost:3000/');
    await expect(findByText('Loading...')).resolves.toBeTruthy();
  });

});
