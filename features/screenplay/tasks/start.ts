import {Open, PerformsTasks, step, Task} from 'serenity-js/protractor';
import {AddTodoItem} from './add-todo-item';

export class Start implements Task {
    static withATodoListContaining(itemNames: string[]): Start {
        return new Start(itemNames);
    }

    constructor(private itemNames: string[]) {
    }

    @step('{0} starts with a list containing #itemNames')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Open.browserOn('/examples/angularjs/'),
            ...this.addAll(this.itemNames),
        );
    }

    private addAll(itemNames: string[]): Task[] {
        return itemNames.map(itemName => AddTodoItem.called(itemName));
    }
}
