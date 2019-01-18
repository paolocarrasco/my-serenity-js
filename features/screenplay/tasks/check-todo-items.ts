import {PerformsTasks, See, step, Task} from 'serenity-js/protractor';
import {hasSameContentAs} from '../../custom-assertions';
import {TodoList} from '../targets/todo-list';

export class CheckTodoItems implements Task {
    static hasSameContentAs(items: string[]) {
        return new CheckTodoItems(items);
    }

    constructor(private items: string[]) {
    }

    @step('{0} ensures that the todo list has the items #items')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            See.if(TodoList.Items_Displayed, hasSameContentAs(this.items)),
        );
    }
}
