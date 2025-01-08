import * as vscode from 'vscode';
import { DECREASE_TO_MINIMUM_LOOPCOUNT } from "./constants";

let self: Worker;

export class Worker {
    constructor() {
        self = this;
    }

    getConfigNumber(key: string): number {
        const value = vscode.workspace
            .getConfiguration()
            .get<number>(key);
        return Number(value);
    }

    setWidth(steps: number) {
        vscode.commands.executeCommand('workbench.action.focusSideBar');
        self.decreaseWithToMinimum();
        self.increaseWidthBySteps(steps);
        vscode.commands.executeCommand('workbench.action.focusLastEditorGroup');
    }

    private decreaseWithToMinimum() {
        for (let i = 0; i < DECREASE_TO_MINIMUM_LOOPCOUNT; i++) {
            vscode.commands.executeCommand('workbench.action.decreaseViewSize');
        }
    }

    private increaseWidthBySteps(steps: number) {
        for (let i = 0; i < steps; i++) {
            vscode.commands.executeCommand('workbench.action.increaseViewSize');
        }
    }
}