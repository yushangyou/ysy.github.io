import { ListData, CommentData, NotifyData } from '../../types/artalk-data';
import Context from '../../types/context';
import Component from '../lib/component';
import Comment from '../comment';
import Pagination from '../components/pagination';
import ReadMoreBtn from '../components/read-more-btn';
import * as ListNest from './list-nest';
export default class ListLite extends Component {
    protected $commentsWrap: HTMLElement;
    protected data?: ListData;
    protected isLoading: boolean;
    noCommentText: string;
    /** 平铺模式 */
    flatMode: boolean;
    /** 嵌套模式 */
    nestSortBy: ListNest.SortByType;
    /** 分页 */
    pageMode: 'pagination' | 'read-more';
    pageSize: number;
    scrollListenerAt?: HTMLElement;
    repositionAt?: HTMLElement;
    protected pagination?: Pagination;
    protected readMoreBtn?: ReadMoreBtn;
    protected autoLoadScrollEvent?: any;
    renderComment?: (comment: Comment) => void;
    paramsEditor?: (params: any) => void;
    onAfterLoad?: (data: ListData) => void;
    protected unread: NotifyData[];
    unreadHighlight?: boolean;
    constructor(ctx: Context);
    getData(): ListData | undefined;
    clearData(): void;
    getCommentsWrapEl(): HTMLElement;
    /** 加载动画 */
    setLoading(val: boolean, isFirstLoad?: boolean): void;
    /** 评论获取 */
    fetchComments(offset: number): Promise<void>;
    protected onLoad(data: ListData, offset: number): void;
    /** 分页模式 */
    private refreshPagination;
    private initPagination;
    /** 错误处理 */
    protected onError(msg: any, offset: number, errData?: any): void;
    /** 刷新界面 */
    refreshUI(): void;
    /** 重新加载列表 */
    reload(): void;
    /** 创建新评论 */
    protected createComment(cData: CommentData, ctxData?: CommentData[]): Comment;
    /** 导入评论 · 通过请求数据 */
    importComments(srcData: CommentData[]): void;
    private importCommentsNest;
    /** 导入评论 · 平铺模式 */
    private putCommentFlatMode;
    /** 新增评论 · 首部添加 */
    insertComment(commentData: CommentData): void;
    /** 更新评论 */
    updateComment(commentData: CommentData): void;
    /** 更新未读数据 */
    updateUnread(notifies: NotifyData[]): void;
    /** 版本检测 */
    versionCheck(name: 'frontend' | 'backend', needVersion: string, curtVersion: string): boolean;
}
