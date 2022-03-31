describe('Timer', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/');
    });

    it('should be To-do list', async () => {
        await expect(page.title()).resolves.toMatch('Список дел');
    });
});