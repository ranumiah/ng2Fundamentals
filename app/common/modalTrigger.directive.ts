import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'

// This is similar to a Component
@Directive({
    // This is an attribute NOT an Element
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$('#simple-modal').modal({})
        })
    }
}