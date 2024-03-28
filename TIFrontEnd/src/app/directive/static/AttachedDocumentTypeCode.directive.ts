import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({selector: '[appAttachedDocumentTypeCode]'})
export class AttachedDocumentTypeCodeDirective {
    private isViewCreated = false;
    
    private readonly context = new AttachedDocumentTypeCodeContext();

    @Input('appAttachedDocumentTypeCode') set code (Type: string) {
        if (Type === 'DOCU'){
            this.context.Type = 'Document';
        }
        else {
            this.context.Type = 'General'; 
        }
        this.viewContainer.createEmbeddedView(this.templateRef, this.context);
        this.isViewCreated = true;
        // console.log('Directive: ' + this.context.Type + " value: " + Type);
    }

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<AttachedDocumentTypeCodeContext>
        ) { }

    static ngTemplateContextGuard(
        directive: AttachedDocumentTypeCodeDirective,
        context: unknown
    ): context is AttachedDocumentTypeCodeContext {
        return true;
    }

}

class AttachedDocumentTypeCodeContext {
    Type = '';
}