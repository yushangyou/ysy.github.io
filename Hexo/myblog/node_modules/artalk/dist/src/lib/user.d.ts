import { LocalUser } from '../../types/artalk-config';
import Context from '../../types/context';
export default class User {
    ctx: Context;
    data: LocalUser;
    constructor(ctx: Context);
    /** 保存用户到 localStorage 中 */
    update(obj?: Partial<LocalUser>): void;
    /** 注销，清除用户登录状态 */
    logout(): void;
    /** 是否已填写基本用户信息 */
    checkHasBasicUserInfo(): boolean;
}
