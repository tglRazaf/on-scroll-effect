interface OseConfig {
  once?: boolean
  topOffset?: number
  bottomOffset?: number
  elementRatio?: number
}

declare module "ose-library" {
  class OSE {
    static init({ once, topOffset, bottomOffset, elementRatio }: OseConfig): void;
  }
  export { OSE };
}
