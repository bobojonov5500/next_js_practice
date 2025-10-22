declare module "nprogress" {
  interface NProgress {
    start(): void;
    done(force?: boolean): void;
    set(n: number): void;
    inc(amount?: number): void;
    configure(options: Partial<{
      minimum: number;
      easing: string;
      speed: number;
      trickle: boolean;
      trickleSpeed: number;
      showSpinner: boolean;
    }>): void;
    remove(): void;
  }

  const NProgress: NProgress;
  export default NProgress;
}
