import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: ConfigService,
        useValue: new ConfigService(`${process.env.NODE_ENV}.env`),
      }],
    }).compile();
    service = module.get<ConfigService>(ConfigService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service.get).toBeDefined();
  });
});
