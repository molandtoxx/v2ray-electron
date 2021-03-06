declare module "sudo-prompt" {
  interface SudoPromptOptions {
    name: string;
    icns: string;
  }
  function exec(
    command: string,
    options: SudoPromptOptions,
    callback: Function
  ): void;
}
