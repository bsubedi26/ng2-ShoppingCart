import { TodoCliPage } from './app.po';

describe('todo-cli App', function() {
  let page: TodoCliPage;

  beforeEach(() => {
    page = new TodoCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
