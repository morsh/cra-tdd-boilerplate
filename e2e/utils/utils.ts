import 'expect-puppeteer';
import { HTTPRequest } from 'puppeteer';

export const byHook = (hook: string) => `[data-hook="${hook}"]`;

export const getText = async (selector: string) => {
  return page.$eval(selector, (el) => (el as HTMLElement).innerText);
};

export const findByText = async (text: string) => {
  const [div] = await page.$x(`//div[contains(., '${text}')]`);
  return div;
};

export const intercept = async (path: string, cb: (rq: HTTPRequest) => void) => {
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.url().includes('/translations/messages.en.json')) {
      cb(request);
      return;
    }
    void request.continue();
  });
};
