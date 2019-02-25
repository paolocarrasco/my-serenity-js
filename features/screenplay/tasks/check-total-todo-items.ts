import {PerformsTasks, See, Task, Text} from 'serenity-js/protractor';
import {isEqualTo} from '../../../custom-assertions/text-assertions';
import {TodoList} from '../targets/todo-list';

export class CheckTotalTodoItems implements Task {
    static is(quantity: string) {
        return new CheckTotalTodoItems(quantity);
    }

    constructor(private quantity: string) {
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            See.if(
                Text.of(TodoList.TotalItems),
                isEqualTo(`${this.quantity} items left`),
            ),
        );
    }
}
