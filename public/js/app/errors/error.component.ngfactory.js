/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from './error.component';
import * as import3 from './error.service';
var styles_ErrorComponent = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0, 0, 0, 0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
export var RenderType_ErrorComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_ErrorComponent,
    data: {}
});
export function View_ErrorComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'div', [[
                'class',
                'backdrop'
            ]
        ], null, null, null, null, null)),
        import0.ɵdid(139264, null, 0, import1.NgStyle, [
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngStyle: [
                0,
                'ngStyle'
            ]
        }, null),
        import0.ɵpod(['display']),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵeld(0, null, null, 31, 'div', [
            [
                'class',
                'modal'
            ],
            [
                'role',
                'dialog'
            ],
            [
                'tabindex',
                '-1'
            ]
        ], null, null, null, null, null)),
        import0.ɵdid(139264, null, 0, import1.NgStyle, [
            import0.KeyValueDiffers,
            import0.ElementRef,
            import0.Renderer
        ], { ngStyle: [
                0,
                'ngStyle'
            ]
        }, null),
        import0.ɵpod(['display']),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵeld(0, null, null, 26, 'div', [
            [
                'class',
                'modal-dialog'
            ],
            [
                'role',
                'document'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵeld(0, null, null, 23, 'div', [[
                'class',
                'modal-content'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 8, 'div', [[
                'class',
                'modal-header'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 2, 'button', [
            [
                'aria-label',
                'Close'
            ],
            [
                'class',
                'close'
            ],
            [
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onErrorHandled() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵeld(0, null, null, 1, 'span', [[
                'aria-hidden',
                'true'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['×'])),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'h4', [[
                'class',
                'modal-title'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'modal-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'modal-footer'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n                '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-default'
            ],
            [
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onErrorHandled() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Close'])),
        (l()(), import0.ɵted(null, ['\n            '])),
        (l()(), import0.ɵted(null, ['\n        '])),
        (l()(), import0.ɵted(null, ['\n    '])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ck(v, 2, 0, co.display);
        ck(v, 1, 0, currVal_0);
        var currVal_1 = ck(v, 6, 0, co.display);
        ck(v, 5, 0, currVal_1);
    }, function (ck, v) {
        var co = v.component;
        var currVal_2 = ((co.error == null) ? null : co.error.title);
        ck(v, 19, 0, currVal_2);
        var currVal_3 = ((co.error == null) ? null : co.error.message);
        ck(v, 25, 0, currVal_3);
    });
}
function View_ErrorComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'app-error', [], null, null, null, View_ErrorComponent_0, RenderType_ErrorComponent)),
        import0.ɵdid(57344, null, 0, import2.ErrorComponent, [import3.ErrorService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var ErrorComponentNgFactory = import0.ɵccf('app-error', import2.ErrorComponent, View_ErrorComponent_Host_0, {}, {}, []);
