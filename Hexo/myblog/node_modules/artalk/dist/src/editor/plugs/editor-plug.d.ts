import Editor from '../editor';
/**
 * Editor 插件
 *
 * @desc 使用 Interface x Abstract 合并声明
 * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
 */
interface EditorPlug {
    onPanelShow?(): void;
    onPanelHide?(): void;
}
declare abstract class EditorPlug {
    protected editor: Editor;
    protected get ctx(): import("../../../types/context").default;
    protected $panel?: HTMLElement;
    protected $btn?: HTMLElement;
    onHeaderInput?: (key: string, $input: HTMLElement) => void;
    constructor(editor: Editor);
    static Name: string;
    protected registerPanel(html?: string): HTMLElement;
    protected registerBtn(html: string): HTMLElement;
    protected registerHeaderInputEvt(action: (key: string, $input: HTMLElement) => void): void;
    getPanel(): HTMLElement | undefined;
    getBtn(): HTMLElement | undefined;
}
export default EditorPlug;
