import { CommentData } from '../../types/artalk-data';
export declare type CommentNode = {
    id: number;
    comment: CommentData;
    children: CommentNode[];
    parent?: CommentNode;
    level: number;
};
export declare type SortByType = 'DATE_DESC' | 'DATE_ASC' | 'SRC_INDEX' | 'VOTE_UP_DESC';
export declare function makeNestCommentNodeList(srcData: CommentData[], sortBy?: SortByType, nestMax?: number): CommentNode[];
