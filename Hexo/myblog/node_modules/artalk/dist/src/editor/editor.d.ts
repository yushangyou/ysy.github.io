import { CommentData } from '../../types/artalk-data';
import Context from '../../types/context';
import Component from '../lib/component';
import EditorPlug from './plugs/editor-plug';
export default class Editor extends Component {
    private get user();
    $header: HTMLElement;
    $nick: HTMLInputElement;
    $email: HTMLInputElement;
    $link: HTMLInputElement;
    get $inputs(): {
        nick: HTMLInputElement;
        email: HTMLInputElement;
        link: HTMLInputElement;
    };
    $textareaWrap: HTMLElement;
    $textarea: HTMLTextAreaElement;
    $bottom: HTMLElement;
    $submitBtn: HTMLButtonElement;
    $notifyWrap: HTMLElement;
    private isTraveling;
    /** 回复评论 */
    private replyComment;
    private $sendReply;
    get isReplyMode(): boolean;
    /** 编辑评论 */
    private editComment;
    private $editCancelBtn;
    get isEditMode(): boolean;
    /** 启用的插件 */
    private readonly ENABLED_PLUGS;
    plugList: {
        [name: string]: EditorPlug;
    };
    private openedPlugName;
    $plugPanelWrap: HTMLElement;
    $plugBtnWrap: HTMLElement;
    constructor(ctx: Context);
    private initLocalStorage;
    private saveToLocalStorage;
    private initHeader;
    private onHeaderInput;
    private initTextarea;
    private refreshSendBtnText;
    private initSubmitBtn;
    /** 最终用于 submit 的数据 */
    getFinalContent(): string;
    getContentOriginal(): string;
    getContentMarked(): string;
    setContent(val: string): void;
    insertContent(val: string): void;
    private adjustTextareaHeight;
    /** 设置回复评论 */
    setReply(commentData: CommentData, $comment: HTMLElement, scroll?: boolean): void;
    /** 取消回复评论 */
    cancelReply(): void;
    /** 设置编辑评论 */
    setEditComment(commentData: CommentData, $comment: HTMLElement): void;
    /** 取消编辑评论 */
    cancelEditComment(): void;
    showNotify(msg: string, type: "i" | "s" | "w" | "e"): void;
    showLoading(): void;
    hideLoading(): void;
    /** 点击评论提交按钮事件 */
    submit(): Promise<void>;
    /** 创建评论 */
    submitAdd(): Promise<void>;
    /** 修改评论 */
    submitEdit(): Promise<void>;
    /** 关闭评论 */
    close(): void;
    /** 打开评论 */
    open(): void;
    /** 移动评论框到置顶元素之后 */
    travel($afterEl: HTMLElement): void;
    /** 评论框归位 */
    travelBack(): void;
    /** 插件初始化 */
    private initPlugs;
    /** 展开插件面板 */
    openPlugPanel(plugName: string): void;
    /** 收起插件面板 */
    closePlugPanel(): void;
}
