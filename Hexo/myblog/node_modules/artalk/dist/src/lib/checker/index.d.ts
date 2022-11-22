import Context from '../../../types/context';
import Layer from '../../layer';
export interface CheckerCaptchaPayload extends CheckerPayload {
    imgData?: string;
    iframe?: string;
}
export interface CheckerPayload {
    onSuccess?: (inputVal: string, dialogEl?: HTMLElement) => void;
    onMount?: (dialogEl: HTMLElement) => void;
    onCancel?: () => void;
}
/**
 * Checker 发射台
 */
export default class CheckerLauncher {
    ctx: Context;
    launched: Checker[];
    captchaConf: {
        val?: string;
        imgData?: string;
        iframe?: string;
    };
    constructor(ctx: Context);
    checkCaptcha(payload: CheckerCaptchaPayload): void;
    checkAdmin(payload: CheckerPayload): void;
    fire(checker: Checker, payload: CheckerPayload): void;
    private close;
}
export interface Checker {
    el?: HTMLElement;
    inputType?: 'password' | 'text';
    body: (launcher: CheckerLauncher, ctx: CheckerCtx) => HTMLElement;
    request: (launcher: CheckerLauncher, ctx: CheckerCtx, inputVal: string) => Promise<string>;
    onSuccess?: (launcher: CheckerLauncher, ctx: CheckerCtx, data: string, inputVal: string, formEl: HTMLElement) => void;
    onError?: (launcher: CheckerLauncher, ctx: CheckerCtx, err: any, inputVal: string, formEl: HTMLElement) => void;
}
export interface CheckerCtx {
    getLayer(): Layer;
    hideInteractInput(): void;
    triggerSuccess(): void;
    cancel(): void;
}
