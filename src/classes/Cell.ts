export class Cell {
    public state: boolean;
    public new_state: boolean;

    public constructor(new_state: boolean) {
        this.new_state = new_state;
        this.state = this.new_state;
    }

    public setNewState(new_state: boolean) {
        this.new_state = new_state;
    }

    public updateState() {
        this.state = this.new_state;
    }

    public getState(): boolean {
        return this.state;
    }
}
