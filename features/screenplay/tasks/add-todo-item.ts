/******************************************************************************
 * seerene(tm) - A framework for analyzing and visualizing complex software systems.
 * Copyright (C) 2005 - 2018 for all source codes:
 * seerene(tm) GmbH, Potsdam, Germany
 ******************************************************************************/
import {protractor} from 'protractor';
import {Enter, PerformsTasks, step, Task} from 'serenity-js/protractor';
import {TodoList} from '../targets/todo-list';

export class AddTodoItem implements Task {
    static called(itemName: string): Task {
        return new AddTodoItem(itemName);
    }

    constructor(private itemName: string) {
    }

    @step('{0} adds the item #itemName to the list')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Enter.theValue(this.itemName)                   // enter the value of the item name
                .into(TodoList.What_Needs_To_Be_Done)       // into a "What needs to be done" field
                .thenHit(protractor.Key.ENTER),
        );
    }
}
