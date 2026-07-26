import { Context } from 'runed';
import { crossfade } from 'svelte/transition';
export const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200)
});
class UnderlineTabsRootState {
    opts;
    hoveredTab = $state(null);
    isHovered = $state(false);
    constructor(opts) {
        this.opts = opts;
        this.hoveredTab = this.opts.value.current;
    }
}
class UnderlineTabsTriggerState {
    opts;
    rootState;
    constructor(opts, rootState) {
        this.opts = opts;
        this.rootState = rootState;
    }
    handleFocus() {
        this.rootState.isHovered = true;
        this.rootState.hoveredTab = this.opts.value.current;
    }
    handleBlur() {
        if (this.rootState.hoveredTab === this.opts.value.current) {
            this.rootState.isHovered = false;
        }
    }
    onmouseenter(e) {
        this.handleFocus();
        this.opts.onmouseenter.current?.(e);
    }
    onmouseleave(e) {
        this.handleBlur();
        this.opts.onmouseleave.current?.(e);
    }
    onfocus(e) {
        this.handleFocus();
        this.opts.onfocus.current?.(e);
    }
    onblur(e) {
        this.handleBlur();
        this.opts.onblur.current?.(e);
    }
    props = $derived.by(() => ({
        value: this.opts.value.current,
        onmouseenter: this.onmouseenter.bind(this),
        onmouseleave: this.onmouseleave.bind(this),
        onfocus: this.onfocus.bind(this),
        onblur: this.onblur.bind(this)
    }));
}
const ctx = new Context('underline-tabs-root-ctx');
export function useUnderlineTabs(opts) {
    return ctx.set(new UnderlineTabsRootState(opts));
}
export function useUnderlineTabsTrigger(opts) {
    return new UnderlineTabsTriggerState(opts, ctx.get());
}
