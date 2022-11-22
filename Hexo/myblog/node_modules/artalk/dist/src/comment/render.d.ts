import ActionBtn from '../components/action-btn';
import Comment from './comment';
export default class CommentRender {
    private comment;
    private get ctx();
    private get data();
    private get cConf();
    $el: HTMLElement;
    $main: HTMLElement;
    $header: HTMLElement;
    $headerNick: HTMLElement;
    $headerBadgeWrap: HTMLElement;
    $body: HTMLElement;
    $content: HTMLElement;
    private $childrenWrap;
    $actions: HTMLElement;
    voteBtnUp?: ActionBtn;
    voteBtnDown?: ActionBtn;
    $replyTo?: HTMLElement;
    $replyAt?: HTMLElement;
    constructor(comment: Comment);
    render(): HTMLElement;
    /** 初始化 - 评论头像 */
    private renderAvatar;
    /** 初始化 - 评论信息 */
    private renderHeader;
    private renderHeader_Nick;
    private renderHeader_VerifyBadge;
    private renderHeader_Date;
    private renderHeader_UABadge;
    /** 初始化 - 评论内容 */
    private renderContent;
    /** 初始化 - 层级嵌套模式显示 At */
    private renderReplyAt;
    /** 初始化 - 回复的对象 */
    private renderReplyTo;
    /** 初始化 - 待审核状态 */
    private renderPending;
    /** 初始化 - 评论操作按钮 */
    private renderActions;
    private renderActions_Vote;
    private renderActions_Reply;
    private renderActions_Collapse;
    private renderActions_Moderator;
    private renderActions_Pin;
    private renderActions_Edit;
    private renderActions_Del;
    /** 内容限高检测 */
    checkHeightLimit(): void;
    /** 目标内容限高检测 */
    checkHeightLimitArea(area: 'children' | 'content'): void;
    /** 移除限高 */
    private heightLimitRemove;
    /** 子评论区域移除限高 */
    heightLimitRemoveForChildren(): void;
    /** 内容限高区域新增 */
    private heightLimitAdd;
    /** 渐出动画 */
    playFadeAnim(): void;
    /** 渐出动画 · 评论内容区域 */
    playFadeAnimForBody(): void;
    /** 获取子评论 Wrap */
    getChildrenWrap(): HTMLElement | null;
    /** 初始化子评论区域 Wrap */
    renderChildrenWrap(): HTMLElement;
    /** 恢复原有的子评论区域 Wrap */
    recoveryChildrenWrap(): void;
    /** 设置已读 */
    setUnread(val: boolean): void;
    /** 设置为可点击的评论 */
    setOpenable(val: boolean): void;
    /** 设置点击评论打开置顶 URL */
    setOpenURL(url: string): void;
    /** 设置点击评论时的操作 */
    setOpenAction(action: () => void): void;
}
