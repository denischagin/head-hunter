import {LoaderService} from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService
  const loaderStage = 'loading...'

  beforeEach(() => {
    service = new LoaderService()
  })

  it('should changeLoaderStage', () => {
    service.changeLoaderStage(loaderStage)

    expect(service.loaderStage$.getValue()).toEqual(loaderStage)
  })

  it('should hideLoader', () => {
    service.hideLoader()

    expect(service.loaderStage$.getValue()).toEqual(null)
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
