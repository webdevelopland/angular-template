import { HelloService } from './hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
    service = new HelloService();
  });

  it('should say hi', () => {
    const name: string = 'Bob';
    const response: string = service.hi(name);
    expect(response).toBeTruthy();
  });
});
