import { KEY_WIDTH_A, KEY_WIDTH_B } from './constants';
import { SidebarWidthWorker } from './worker';

let self: SidebarWidthManager;

export class SidebarWidthManager {
    private readonly worker = new SidebarWidthWorker();
    private aIsNext: boolean = true;

    constructor() {
        self = this;
        this.worker = new SidebarWidthWorker();
    }

    toggleWidth() {
        console.log('toggleWidth');

        if (self.aIsNext)
            self.applyWidthA();
        else
            self.applyWidthB();
    }

    applyWidthA() {
        console.log('applyWidthA');
        const widthA = self.worker.getConfigNumber(KEY_WIDTH_A);
        self.worker.setWidth(widthA);
        self.aIsNext = false;
    }

    applyWidthB() {
        console.log('applyWidthB');
        const widthB = self.worker.getConfigNumber(KEY_WIDTH_B);
        self.worker.setWidth(widthB);
        self.aIsNext = true;
    }


}